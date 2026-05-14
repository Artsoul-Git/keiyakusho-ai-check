/* =============================================
   editor.js — Canva-like slide editor overlay
   Loaded by editor.html on top of app.js
   ============================================= */
(function () {
  'use strict';

  /* ──────────────────────────────────────────
     Patch localStorage so app.js never saves
     canvas-overlay HTML inside slideEdits.
  ────────────────────────────────────────── */
  (function () {
    var orig = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function (key, value) {
      if (key === 'slideEdits') {
        try {
          var edits = JSON.parse(value);
          Object.keys(edits).forEach(function (k) {
            var tmp = document.createElement('div');
            tmp.innerHTML = edits[k];
            tmp.querySelectorAll('.canvas-overlay').forEach(function (el) { el.remove(); });
            edits[k] = tmp.innerHTML;
          });
          value = JSON.stringify(edits);
        } catch (e) {}
      }
      return orig(key, value);
    };
  })();

  /* ──────────────────────────────────────────
     State
  ────────────────────────────────────────── */
  var slideObjects = {};   // { slideIndex: [ obj, ... ] }
  var activeTool   = 'pointer';  // 'pointer'|'text'|'rect'|'circle'|'line'|'arrow'|'image'
  var selectedId   = null;
  var editMode     = false;
  var currentIdx   = 0;

  var shapeOpts = { fill: '#a8c54a', fillNone: false, stroke: '#6f911d', strokeWidth: 2 };
  var textOpts  = { fontSize: '2.5', color: '#333333', weight: '700', align: 'left' };

  /* drag state */
  var dragging = false;
  var dragObj  = null, dragEl = null;
  var dragSlideRect = null, dragOffX = 0, dragOffY = 0;

  /* resize state */
  var resizing = false;
  var resObj   = null, resEl = null, resDir = '';
  var resSlideRect = null, resInit = {};

  /* ──────────────────────────────────────────
     Persistence
  ────────────────────────────────────────── */
  try { slideObjects = JSON.parse(localStorage.getItem('slideObjects') || '{}'); } catch (e) {}

  function save() {
    try { localStorage.setItem('slideObjects', JSON.stringify(slideObjects)); } catch (e) {}
  }

  /* ──────────────────────────────────────────
     DOM helpers
  ────────────────────────────────────────── */
  var stage = document.querySelector('.slide-stage');

  function activeSlide() { return stage.querySelector('.slide.active'); }
  function activeOverlay() { var s = activeSlide(); return s ? s.querySelector('.canvas-overlay') : null; }

  function findObj(idx, id) {
    var arr = slideObjects[idx];
    if (!arr) return null;
    for (var i = 0; i < arr.length; i++) { if (arr[i].id === id) return arr[i]; }
    return null;
  }

  function uid() {
    return 'o' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  /* ──────────────────────────────────────────
     Tool management
  ────────────────────────────────────────── */
  function setTool(t) {
    activeTool = t;
    document.querySelectorAll('.est-shape-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.shape === t);
    });
    var ptrBtn = document.getElementById('est-tool-pointer');
    if (ptrBtn) ptrBtn.classList.toggle('active', t === 'pointer');

    if (t !== 'pointer') {
      document.body.classList.add('canvas-tool-active');
    } else {
      document.body.classList.remove('canvas-tool-active');
    }
  }

  /* ──────────────────────────────────────────
     Overlay rendering
  ────────────────────────────────────────── */
  function buildOverlay(idx, slideEl) {
    var old = slideEl.querySelector('.canvas-overlay');
    if (old) old.remove();

    var overlay = document.createElement('div');
    overlay.className = 'canvas-overlay';
    /* contentEditable=false creates an isolated island inside the
       contentEditable slide — prevents it from being edited as text */
    overlay.contentEditable = 'false';
    slideEl.appendChild(overlay);

    var objs = slideObjects[idx] || [];
    objs.forEach(function (obj) { overlay.appendChild(makeObjEl(obj, idx)); });

    /* Click on empty overlay area: place shape or deselect */
    overlay.addEventListener('mousedown', function (e) {
      if (e.target !== overlay) return;
      if (activeTool !== 'pointer' && activeTool !== 'image') {
        var rect = slideEl.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width * 100;
        var py = (e.clientY - rect.top)  / rect.height * 100;
        placeObject(idx, { x: px - 10, y: py - 7.5, type: activeTool });
        e.preventDefault();
        e.stopPropagation();
      } else {
        deselect();
      }
    });
  }

  /* ──────────────────────────────────────────
     Place new object
  ────────────────────────────────────────── */
  function placeObject(slideIdx, params) {
    var type = params.type || activeTool;
    var obj = {
      id:      uid(),
      type:    type,
      x:       Math.max(0, params.x || 10),
      y:       Math.max(0, params.y || 10),
      w:       params.w || (type === 'line' || type === 'arrow' ? 30 : 20),
      h:       params.h || (type === 'line' || type === 'arrow' ? 4  : 14),
      content: params.content || (type === 'text' ? 'テキストを入力' : ''),
      src:     params.src || '',
      style:   {}
    };

    if (type === 'text') {
      obj.style.fontSize  = textOpts.fontSize;
      obj.style.color     = textOpts.color;
      obj.style.fontWeight= textOpts.weight;
      obj.style.textAlign = textOpts.align;
    } else {
      obj.style.fill        = shapeOpts.fillNone ? 'none' : shapeOpts.fill;
      obj.style.stroke      = shapeOpts.stroke;
      obj.style.strokeWidth = shapeOpts.strokeWidth;
    }

    if (!slideObjects[slideIdx]) slideObjects[slideIdx] = [];
    slideObjects[slideIdx].push(obj);
    save();

    var s = activeSlide();
    if (s && parseInt(s.dataset.index, 10) === slideIdx) {
      var ov = s.querySelector('.canvas-overlay');
      if (ov) {
        var el = makeObjEl(obj, slideIdx);
        ov.appendChild(el);
        selectObj(obj.id);
      }
    }

    setTool('pointer');
    return obj;
  }

  /* ──────────────────────────────────────────
     Build object DOM element
  ────────────────────────────────────────── */
  function makeObjEl(obj, slideIdx) {
    var wrap = document.createElement('div');
    wrap.className = 'canvas-obj';
    wrap.dataset.objId = obj.id;
    wrap.style.left   = obj.x + '%';
    wrap.style.top    = obj.y + '%';
    wrap.style.width  = obj.w + '%';
    wrap.style.height = obj.h + '%';

    /* ── Inner content ── */
    var inner;
    if (obj.type === 'text') {
      inner = document.createElement('div');
      inner.className = 'canvas-obj-inner canvas-obj-text';
      inner.contentEditable = 'true';
      inner.innerHTML = obj.content || 'テキストを入力';
      applyTextStyle(inner, obj.style);

      inner.addEventListener('input', function () {
        var o = findObj(slideIdx, obj.id);
        if (o) { o.content = inner.innerHTML; save(); }
      });
      /* Prevent text clicks from propagating to wrapper drag */
      inner.addEventListener('mousedown', function (e) { e.stopPropagation(); });

    } else if (obj.type === 'rect') {
      inner = makeSvgShape(obj, 'rect');
    } else if (obj.type === 'circle') {
      inner = makeSvgShape(obj, 'circle');
    } else if (obj.type === 'line' || obj.type === 'arrow') {
      inner = makeSvgLine(obj);
    } else if (obj.type === 'image') {
      inner = document.createElement('img');
      inner.className = 'canvas-obj-inner canvas-obj-image';
      inner.src = obj.src || '';
      inner.draggable = false;
    }

    if (inner) wrap.appendChild(inner);

    /* ── Delete button ── */
    var del = document.createElement('div');
    del.className = 'obj-delete';
    del.textContent = '×';
    del.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      e.preventDefault();
      deleteObj(slideIdx, obj.id);
    });
    wrap.appendChild(del);

    /* ── Resize handles ── */
    ['nw','n','ne','w','e','sw','s','se'].forEach(function (dir) {
      var h = document.createElement('div');
      h.className = 'rh rh-' + dir;
      h.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        e.preventDefault();
        beginResize(e, wrap, obj, slideIdx, dir);
      });
      wrap.appendChild(h);
    });

    /* ── Drag / select on wrapper ── */
    wrap.addEventListener('mousedown', function (e) {
      /* Don't intercept resize handles or delete btn */
      if (e.target.classList.contains('rh') ||
          e.target.classList.contains('obj-delete')) return;
      /* Don't intercept contenteditable text (let cursor work) */
      if (obj.type === 'text' && e.target === inner) return;

      e.stopPropagation();
      e.preventDefault();
      selectObj(obj.id);
      beginDrag(e, wrap, obj, slideIdx);
    });

    return wrap;
  }

  /* ── SVG helpers ── */
  var NS = 'http://www.w3.org/2000/svg';

  function makeSvgShape(obj, shape) {
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.classList.add('canvas-obj-inner');
    var el;
    if (shape === 'rect') {
      el = document.createElementNS(NS, 'rect');
      el.setAttribute('x', '1'); el.setAttribute('y', '1');
      el.setAttribute('width', 'calc(100% - 2px)');
      el.setAttribute('height', 'calc(100% - 2px)');
      el.setAttribute('rx', '4');
    } else {
      el = document.createElementNS(NS, 'ellipse');
      el.setAttribute('cx', '50%'); el.setAttribute('cy', '50%');
      el.setAttribute('rx', 'calc(50% - 2px)');
      el.setAttribute('ry', 'calc(50% - 2px)');
    }
    el.setAttribute('fill',   obj.style.fill   || '#a8c54a');
    el.setAttribute('stroke', obj.style.stroke || '#6f911d');
    el.setAttribute('stroke-width', obj.style.strokeWidth || '2');
    svg.appendChild(el);
    return svg;
  }

  function makeSvgLine(obj) {
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.classList.add('canvas-obj-inner');

    if (obj.type === 'arrow') {
      var defs = document.createElementNS(NS, 'defs');
      var marker = document.createElementNS(NS, 'marker');
      var mid = 'ah-' + obj.id;
      marker.setAttribute('id', mid);
      marker.setAttribute('markerWidth', '10');
      marker.setAttribute('markerHeight', '7');
      marker.setAttribute('refX', '9');
      marker.setAttribute('refY', '3.5');
      marker.setAttribute('orient', 'auto');
      var poly = document.createElementNS(NS, 'polygon');
      poly.setAttribute('points', '0 0, 10 3.5, 0 7');
      poly.setAttribute('fill', obj.style.stroke || '#6f911d');
      marker.appendChild(poly);
      defs.appendChild(marker);
      svg.appendChild(defs);
    }

    var line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', '4%');  line.setAttribute('y1', '50%');
    line.setAttribute('x2', '96%'); line.setAttribute('y2', '50%');
    line.setAttribute('stroke', obj.style.stroke || '#6f911d');
    line.setAttribute('stroke-width', obj.style.strokeWidth || '2');
    if (obj.type === 'arrow') line.setAttribute('marker-end', 'url(#ah-' + obj.id + ')');
    svg.appendChild(line);
    return svg;
  }

  function applyTextStyle(el, style) {
    el.style.fontSize   = 'calc(' + (style.fontSize || '2.5') + 'cqw * var(--tz, 1))';
    el.style.color      = style.color      || '#333333';
    el.style.fontWeight = style.fontWeight || '700';
    el.style.textAlign  = style.textAlign  || 'left';
    el.style.fontFamily = "'Noto Sans JP', sans-serif";
  }

  /* ──────────────────────────────────────────
     Selection
  ────────────────────────────────────────── */
  function selectObj(id) {
    deselect();
    selectedId = id;
    var el = document.querySelector('.canvas-obj[data-obj-id="' + id + '"]');
    if (el) el.classList.add('selected');

    /* Mirror style into sidebar controls */
    var idx = currentIdx;
    var obj = findObj(idx, id);
    if (!obj) return;
    if (obj.type === 'text') {
      var fs = document.getElementById('est-font-size');
      if (fs) fs.value = obj.style.fontSize || '2.5';
      var tc = document.getElementById('est-text-color');
      if (tc) tc.value = obj.style.color || '#333333';
    }
  }

  function deselect() {
    selectedId = null;
    document.querySelectorAll('.canvas-obj.selected').forEach(function (el) {
      el.classList.remove('selected');
    });
  }

  /* ──────────────────────────────────────────
     Delete
  ────────────────────────────────────────── */
  function deleteObj(slideIdx, id) {
    if (!slideObjects[slideIdx]) return;
    slideObjects[slideIdx] = slideObjects[slideIdx].filter(function (o) { return o.id !== id; });
    save();
    var el = document.querySelector('.canvas-obj[data-obj-id="' + id + '"]');
    if (el) el.remove();
    if (selectedId === id) deselect();
  }

  function deleteSelected() {
    if (!selectedId) return;
    deleteObj(currentIdx, selectedId);
  }

  /* ──────────────────────────────────────────
     Drag
  ────────────────────────────────────────── */
  function beginDrag(e, el, obj, slideIdx) {
    var s = activeSlide();
    if (!s) return;
    dragging = true;
    dragObj  = obj;
    dragEl   = el;
    dragSlideRect = s.getBoundingClientRect();
    dragOffX = e.clientX - dragSlideRect.left  - (obj.x / 100 * dragSlideRect.width);
    dragOffY = e.clientY - dragSlideRect.top   - (obj.y / 100 * dragSlideRect.height);

    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup',   onDragEnd);
  }

  function onDragMove(e) {
    if (!dragging || !dragObj) return;
    var r = dragSlideRect;
    var nx = (e.clientX - r.left - dragOffX) / r.width  * 100;
    var ny = (e.clientY - r.top  - dragOffY) / r.height * 100;
    nx = Math.max(0, Math.min(100 - dragObj.w, nx));
    ny = Math.max(0, Math.min(100 - dragObj.h, ny));
    dragObj.x = nx;
    dragObj.y = ny;
    dragEl.style.left = nx + '%';
    dragEl.style.top  = ny + '%';
  }

  function onDragEnd() {
    dragging = false;
    save();
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup',   onDragEnd);
  }

  /* ──────────────────────────────────────────
     Resize
  ────────────────────────────────────────── */
  function beginResize(e, el, obj, slideIdx, dir) {
    var s = activeSlide();
    if (!s) return;
    resizing    = true;
    resObj      = obj;
    resEl       = el;
    resDir      = dir;
    resSlideRect= s.getBoundingClientRect();
    resInit     = { x: obj.x, y: obj.y, w: obj.w, h: obj.h, mx: e.clientX, my: e.clientY };

    document.addEventListener('mousemove', onResizeMove);
    document.addEventListener('mouseup',   onResizeEnd);
  }

  function onResizeMove(e) {
    if (!resizing || !resObj) return;
    var r  = resSlideRect;
    var dx = (e.clientX - resInit.mx) / r.width  * 100;
    var dy = (e.clientY - resInit.my) / r.height * 100;
    var s  = resInit;
    var nx = s.x, ny = s.y, nw = s.w, nh = s.h;

    if (resDir.indexOf('e') >= 0) nw = Math.max(5,  s.w + dx);
    if (resDir.indexOf('s') >= 0) nh = Math.max(3,  s.h + dy);
    if (resDir.indexOf('w') >= 0) { nx = Math.min(s.x + s.w - 5, s.x + dx); nw = s.w - (nx - s.x); }
    if (resDir.indexOf('n') >= 0) { ny = Math.min(s.y + s.h - 3, s.y + dy); nh = s.h - (ny - s.y); }

    resObj.x = nx; resObj.y = ny; resObj.w = nw; resObj.h = nh;
    resEl.style.left   = nx + '%';
    resEl.style.top    = ny + '%';
    resEl.style.width  = nw + '%';
    resEl.style.height = nh + '%';
  }

  function onResizeEnd() {
    resizing = false;
    save();
    document.removeEventListener('mousemove', onResizeMove);
    document.removeEventListener('mouseup',   onResizeEnd);
  }

  /* ──────────────────────────────────────────
     Edit mode hooks (watches body.edit-mode)
  ────────────────────────────────────────── */
  function onEnterEdit() {
    editMode = true;
    var s = activeSlide();
    if (s) {
      currentIdx = parseInt(s.dataset.index, 10) || 0;
      buildOverlay(currentIdx, s);
    }
  }

  function onExitEdit() {
    editMode = false;
    deselect();
    setTool('pointer');
  }

  /* Watch for slide changes while in edit mode */
  var slObserver = new MutationObserver(function () {
    if (!editMode) return;
    var s = activeSlide();
    if (!s) return;
    var idx = parseInt(s.dataset.index, 10);
    if (!isNaN(idx) && idx !== currentIdx) {
      currentIdx = idx;
      deselect();
      buildOverlay(idx, s);
    }
  });

  /* Watch for body.edit-mode class */
  var bodyObserver = new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      if (m.attributeName !== 'class') return;
      var isEdit = document.body.classList.contains('edit-mode');
      if (isEdit && !editMode) onEnterEdit();
      else if (!isEdit && editMode) onExitEdit();
    });
  });

  /* ──────────────────────────────────────────
     Sidebar wiring
  ────────────────────────────────────────── */
  function wireSidebar() {

    /* Tab switching */
    document.querySelectorAll('.est-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.est-tab').forEach(function (t) { t.classList.remove('active'); });
        document.querySelectorAll('.est-panel').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var panel = document.getElementById('est-panel-' + tab.dataset.panel);
        if (panel) panel.classList.add('active');
      });
    });

    /* Pointer tool */
    var ptrBtn = document.getElementById('est-tool-pointer');
    if (ptrBtn) ptrBtn.addEventListener('click', function () { setTool('pointer'); });

    /* Add text box */
    var addTextBtn = document.getElementById('est-add-text');
    if (addTextBtn) {
      addTextBtn.addEventListener('click', function () {
        if (!editMode) return;
        placeObject(currentIdx, { x: 10, y: 40, w: 30, h: 15, type: 'text' });
      });
    }

    /* Shape buttons */
    document.querySelectorAll('.est-shape-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!editMode) return;
        setTool(btn.dataset.shape);
      });
    });

    /* Shape style inputs */
    var fillColor    = document.getElementById('est-fill-color');
    var fillNone     = document.getElementById('est-fill-none');
    var strokeColor  = document.getElementById('est-stroke-color');
    var strokeWidth  = document.getElementById('est-stroke-width');

    if (fillColor)   fillColor.addEventListener('input',  function () { shapeOpts.fill = fillColor.value; });
    if (fillNone)    fillNone.addEventListener('change',  function () { shapeOpts.fillNone = fillNone.checked; });
    if (strokeColor) strokeColor.addEventListener('input', function () { shapeOpts.stroke = strokeColor.value; });
    if (strokeWidth) strokeWidth.addEventListener('change',function () { shapeOpts.strokeWidth = parseInt(strokeWidth.value, 10) || 1; });

    /* Text style inputs */
    var fontSize  = document.getElementById('est-font-size');
    var textColor = document.getElementById('est-text-color');

    if (fontSize) {
      fontSize.addEventListener('change', function () {
        textOpts.fontSize = fontSize.value;
        /* Apply to selected text object */
        if (selectedId) {
          var obj = findObj(currentIdx, selectedId);
          if (obj && obj.type === 'text') {
            obj.style.fontSize = fontSize.value;
            var el = document.querySelector('.canvas-obj[data-obj-id="' + selectedId + '"] .canvas-obj-text');
            if (el) el.style.fontSize = 'calc(' + fontSize.value + 'cqw * var(--tz, 1))';
            save();
          }
        }
      });
    }

    if (textColor) {
      textColor.addEventListener('input', function () {
        textOpts.color = textColor.value;
        if (selectedId) {
          var obj = findObj(currentIdx, selectedId);
          if (obj && obj.type === 'text') {
            obj.style.color = textColor.value;
            var el = document.querySelector('.canvas-obj[data-obj-id="' + selectedId + '"] .canvas-obj-text');
            if (el) el.style.color = textColor.value;
            save();
          }
        }
      });
    }

    /* Format buttons (B/I/U/align) — apply to selected text obj */
    function fmtExec(cmd, val) {
      var inner = document.querySelector('.canvas-obj[data-obj-id="' + selectedId + '"] .canvas-obj-text');
      if (!inner) return;
      inner.focus();
      document.execCommand(cmd, false, val || null);
      var obj = findObj(currentIdx, selectedId);
      if (obj) { obj.content = inner.innerHTML; save(); }
    }

    var boldBtn      = document.getElementById('est-bold');
    var italicBtn    = document.getElementById('est-italic');
    var underlineBtn = document.getElementById('est-underline');
    var alignL       = document.getElementById('est-align-l');
    var alignC       = document.getElementById('est-align-c');
    var alignR       = document.getElementById('est-align-r');

    if (boldBtn)      boldBtn.addEventListener('mousedown',      function (e) { e.preventDefault(); fmtExec('bold'); });
    if (italicBtn)    italicBtn.addEventListener('mousedown',    function (e) { e.preventDefault(); fmtExec('italic'); });
    if (underlineBtn) underlineBtn.addEventListener('mousedown', function (e) { e.preventDefault(); fmtExec('underline'); });
    if (alignL) alignL.addEventListener('click', function () {
      if (selectedId) { var o = findObj(currentIdx, selectedId); if (o && o.type==='text') { o.style.textAlign='left'; var el = document.querySelector('.canvas-obj[data-obj-id="'+selectedId+'"] .canvas-obj-text'); if(el) el.style.textAlign='left'; save(); } }
    });
    if (alignC) alignC.addEventListener('click', function () {
      if (selectedId) { var o = findObj(currentIdx, selectedId); if (o && o.type==='text') { o.style.textAlign='center'; var el = document.querySelector('.canvas-obj[data-obj-id="'+selectedId+'"] .canvas-obj-text'); if(el) el.style.textAlign='center'; save(); } }
    });
    if (alignR) alignR.addEventListener('click', function () {
      if (selectedId) { var o = findObj(currentIdx, selectedId); if (o && o.type==='text') { o.style.textAlign='right'; var el = document.querySelector('.canvas-obj[data-obj-id="'+selectedId+'"] .canvas-obj-text'); if(el) el.style.textAlign='right'; save(); } }
    });

    /* Image file input */
    var imgInput = document.getElementById('est-image-input');
    if (imgInput) {
      imgInput.addEventListener('change', function () {
        var file = imgInput.files[0];
        if (!file || !editMode) return;
        var reader = new FileReader();
        reader.onload = function (ev) {
          placeObject(currentIdx, {
            type: 'image', src: ev.target.result,
            x: 20, y: 20, w: 40, h: 50
          });
        };
        reader.readAsDataURL(file);
        imgInput.value = '';
      });
    }

    /* Delete button */
    var delBtn = document.getElementById('est-delete-obj');
    if (delBtn) delBtn.addEventListener('click', deleteSelected);

    /* Reset objects for current slide */
    var resetBtn = document.getElementById('est-reset-objs');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (!confirm('このスライドに追加したオブジェクトをすべて削除しますか？')) return;
        slideObjects[currentIdx] = [];
        save();
        deselect();
        var ov = activeOverlay();
        if (ov) {
          ov.querySelectorAll('.canvas-obj').forEach(function (el) { el.remove(); });
        }
      });
    }
  }

  /* ──────────────────────────────────────────
     Keyboard shortcuts
  ────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (!editMode) return;

    /* Escape: cancel tool / deselect */
    if (e.key === 'Escape') {
      setTool('pointer');
      deselect();
      return;
    }

    /* V: pointer tool */
    if (e.key === 'v' || e.key === 'V') {
      if (!isTyping(e.target)) setTool('pointer');
      return;
    }

    /* Delete / Backspace: remove selected object */
    if ((e.key === 'Delete' || e.key === 'Backspace') && !isTyping(e.target)) {
      deleteSelected();
      e.preventDefault();
    }
  });

  function isTyping(target) {
    if (!target) return false;
    var t = target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return true;
    if (target.contentEditable === 'true') return true;
    return false;
  }

  /* ──────────────────────────────────────────
     Init
  ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    wireSidebar();

    bodyObserver.observe(document.body, { attributes: true });
    slObserver.observe(stage, { attributes: true, subtree: true, attributeFilter: ['class'] });

    /* Intercept slide-stage clicks when a tool is active */
    stage.addEventListener('mousedown', function (e) {
      if (!editMode || activeTool === 'pointer' || activeTool === 'image') return;

      var s = activeSlide();
      if (!s) return;
      /* Only handle if click is directly on the slide or its background (not on an object) */
      var t = e.target;
      var onObj = false;
      while (t && t !== s) {
        if (t.classList && t.classList.contains('canvas-obj')) { onObj = true; break; }
        t = t.parentElement;
      }
      if (onObj) return;

      var rect = s.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width  * 100;
      var py = (e.clientY - rect.top)  / rect.height * 100;
      placeObject(currentIdx, { x: px - 10, y: py - 7.5, type: activeTool });
      e.preventDefault();
      e.stopPropagation();
    });
  });

})();
