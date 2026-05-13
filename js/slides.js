(function () {

  function H(title) {
    return '<header class="slide-header"><h2 class="slide-h2">' + title + '</h2></header>';
  }

  /* ===================== SLIDES ===================== */

  /* --- COVER (slides 01–06) --- */

  function slide01() {
    return '<section class="slide slide-cover" data-section="cover" data-title="契約書AIチェックセミナー" data-notes="BGMを流しながら受講者の着席を待つ。開始前に画面共有・マイク・音声を確認する。">' +
      '<div class="slide-cover-bar">' +
        '<div class="slide-cover-tag">有限会社アートソウル AI導入支援事業</div>' +
        '<h1 class="slide-cover-title">契約書AIチェックセミナー</h1>' +
      '</div>' +
      '<div class="slide-cover-body">' +
        '<p class="slide-cover-sub">AIを法務の一次確認に使う習慣をつくる</p>' +
        '<div class="slide-cover-meta">2026.05 ｜ AIを使う前に知っておくこと</div>' +
      '</div>' +
    '</section>';
  }

  function slide02() {
    return '<section class="slide slide-impact" data-section="cover" data-title="サインする前の5分が、のちの5年を変える" data-notes="（フック強め）皆さま、本日はお越しいただきありがとうございます。（少し間）突然ですが、最近、書類にサインするとき——どこを見ていますか。（少し間）金額と日付だけ確認して、あとはざっと流す。正直、そういうことが多いのではないかと思います。（柔らかく）それは決して悪いことではなくて、時間の限界があるから、仕方ないことです。ただ今日、1つだけお伝えしたいことがあります。（少し間）サインする前の5分の使い方を変えれば、のちの5年が変わる——その可能性が、実はとても高いんです。今日はその5分の使い方を、今日からすぐ使える形でお持ち帰りいただきます。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">TODAY&#39;S THEME</div>' +
        '<p class="s-impact-main">サインする前の5分が、<br>のちの5年を変える。</p>' +
      '</div>' +
    '</section>';
  }

  function slide03() {
    return '<section class="slide" data-section="cover" data-title="今の状況——思い当たりませんか" data-notes="（フック強め）少し、皆さまの日常のことを聞かせてください。（少し間）たとえばこういう場面、ありませんか。取引先から送られてきた業務委託契約書。ざっと読んで、&#39;まあいつものやつだろう&#39;と思ってサインする。あるいは、新しいSaaSを導入するとき、利用規約の同意ボタンを、読まずに押す。（少し間）これ、ほぼ全員やってると思います。私もやっていました。（柔らかく）でも実は、このちょっとした確認の抜けが、あとから大きな問題になるケースが出てきているんです。（少し間）経営者の立場から見ると、これはリスク管理のコストでもあります。問題が起きてから対処しようとすると——弁護士費用、時間、場合によっては取引先との関係——それが全部乗っかってくる。（接続）今日はその&#39;抜け&#39;を、5分で防ぐ方法をお伝えします。">' +
      H('今の状況——思い当たりませんか') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-arrow">取引先から来た契約書、「いつものやつ」と思ってほぼ読まずにサイン</li>' +
          '<li class="s-list-arrow">SaaSの利用規約、同意ボタンを迷わず押す</li>' +
          '<li class="s-list-arrow">「何かおかしい気がする」と思いつつ、確認する時間が取れない</li>' +
          '<li class="s-list-arrow">問題が起きてから弁護士に相談すると、初回だけで1〜3万円＋時間</li>' +
          '<li class="s-list-callout">「確認する時間がない」問題を、今日まるごと解決します</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide04() {
    return '<section class="slide" data-section="cover" data-title="今日が終わったら——こうなります" data-notes="（接続）今日が終わったとき、状況がどう変わるか、先にお伝えします。（少し間）Before：書類が来るたびにドキドキして、でも確認できないまま流してしまう。After：5分でAIに確認させて、&#39;これは大丈夫&#39;、&#39;これは専門家に聞こう&#39;が自分で判断できるようになる。（少し間）覚えることは2つだけです。道具の使い方は、今日の後半で実際に動かしながら確認していきましょう。">' +
      H('今日が終わったら——こうなります') +
      '<div class="slide-content">' +
        '<div class="s-compare">' +
          '<div class="s-compare-col negative">' +
            '<div class="s-compare-badge">Before（今）</div>' +
            '<div class="s-compare-title">今の状態</div>' +
            '<ul class="s-compare-items">' +
              '<li>書類が来るたびドキドキ</li>' +
              '<li>確認できないままサイン</li>' +
              '<li>問題が起きて初めて気づく</li>' +
              '<li>弁護士相談 1〜3万円／回</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-compare-col positive">' +
            '<div class="s-compare-badge">After（今日から）</div>' +
            '<div class="s-compare-title">5分で判断できる状態</div>' +
            '<ul class="s-compare-items">' +
              '<li>怪しい箇所をAIが5分で洗い出す</li>' +
              '<li>「専門家に聞く／自分で対応」を判断できる</li>' +
              '<li>弁護士相談は具体的な内容が決まった状態で</li>' +
              '<li>覚えることは2つだけ</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide05() {
    return '<section class="slide" data-section="cover" data-title="今日のゴールは「1つだけ」" data-notes="（落ち着いて要点）今日の着地点を最初にお伝えします。AIで契約書をすべて完璧にチェックできるようになる——そういう場ではありません。（少し間）今日お持ち帰りいただきたいのは、1つだけです。怪しいかどうかを5分で洗い出す、習慣と道具。（少し間）これだけを今日持ち帰ってもらえれば、今日のセミナーは十分に元が取れます。">' +
      H('今日のゴールは「1つだけ」') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">AIを、法務の一次確認に使う習慣をつくる</li>' +
          '<li class="s-list-arrow">「AIで完璧なチェックができる」場ではありません</li>' +
          '<li class="s-list-arrow">「怪しいかどうかを5分で洗い出す」道具と習慣を掴む場です</li>' +
          '<li class="s-list-arrow">今日終わったとき、<strong>なんとなくできそう</strong>という感覚を持ち帰る</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide06() {
    return '<section class="slide" data-section="cover" data-title="本日の流れ" data-notes="（落ち着いて要点）全体像を最初に見せておきます。前半は基礎知識、後半は実際に動かすところをお見せします。最後にQ&Aの時間もあります。気になることは遠慮なくどうぞ。">' +
      H('本日の流れ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text"><strong>座学</strong>：AIを使う前に知っておくこと</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text"><strong>実演①</strong>：業務委託契約書チェック【Claude】</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text"><strong>実演②</strong>：FC加盟契約書チェック【Gemini】</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text"><strong>Q&amp;A＋まとめ</strong></div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- PART 01: 座学 (slides 07–17) --- */

  function slide07() {
    return '<section class="slide slide-section" data-section="part1" data-title="PART 01 座学ブロック" data-notes="では、始めましょう。最初のパートは座学です。AIを使う前に、まず知っておいてほしいことをお伝えします。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 01</div>' +
        '<h1 class="s-section-title">座学ブロック</h1>' +
        '<p class="s-section-lead">AIを使う前に知っておくこと</p>' +
      '</div>' +
    '</section>';
  }

  function slide08() {
    return '<section class="slide" data-section="part1" data-title="ケース①：損害賠償が「青天井」になった" data-notes="（フック強め）少し、身近な話から入らせてください。1つ目のケースです。（少し間）普段の仕事で、契約書をどのくらい確認していますか。相手が出してきたものだから大丈夫だろう——そう判断されていることが多いのではないかと思います。でも実際に起きたケースをお伝えします。（少し間）業務委託のWebシステム開発で、作業ミスが発生しました。契約書には&#39;甲に生じた一切の損害を乙が賠償する&#39;と書かれていた。上限の記載は一切なし。結果、300万円の損害賠償を請求されました。（少し間）見るべき箇所は、損害賠償条項に&#39;上限額&#39;の記載があるかどうか。たったそれだけです。（接続）次のケースもいきます。">' +
      H('ケース①：損害賠償が「青天井」になった') +
      '<div class="slide-content" style="flex-direction:row;align-items:center;gap:2.5cqw;">' +
        '<div style="flex:1;display:flex;flex-direction:column;gap:1cqw;">' +
          '<div class="s-risk-list">' +
            '<div class="s-risk-item">' +
              '<div class="s-risk-header"><span class="s-risk-badge high">実際のケース</span><span class="s-risk-title">業務委託契約 / Webシステム開発</span></div>' +
              '<div class="s-risk-body">' +
                '「甲に生じた一切の損害を乙が賠償する」<br>上限の記載なし。作業ミスで300万円を請求された。' +
                '<div class="s-risk-proposal">見るべき条項：損害賠償条項の「上限額」の有無</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<ul class="s-list">' +
            '<li class="s-list-arrow">「普通はこういう書き方をしない」とは限らない</li>' +
            '<li class="s-list-arrow">相手が出した書類だから大丈夫、ではない</li>' +
          '</ul>' +
        '</div>' +
        '<div style="width:12cqw;flex-shrink:0;opacity:.9;">' +
          '<svg viewBox="0 0 88 108" fill="none" style="width:100%;height:auto;">' +
            '<rect x="8" y="4" width="62" height="83" rx="6" fill="#f8fdf0" stroke="#A6BE54" stroke-width="2"/>' +
            '<path d="M52 4L70 22H52V4z" fill="#E8F1D8"/>' +
            '<path d="M52 4L70 22" stroke="#A6BE54" stroke-width="1.5"/>' +
            '<rect x="18" y="30" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="38" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="46" width="28" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="55" width="40" height="6" rx="2" fill="#fee2e2" stroke="#c0392b" stroke-width="1"/>' +
            '<rect x="18" y="66" width="32" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<circle cx="70" cy="24" r="20" fill="#c0392b" stroke="white" stroke-width="2.5"/>' +
            '<rect x="67" y="13" width="6" height="13" rx="2" fill="white"/>' +
            '<circle cx="70" cy="31" r="3.5" fill="white"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide09() {
    return '<section class="slide" data-section="part1" data-title="ケース②：NDAで業務範囲が実質制限された" data-notes="（フック）2つ目のケースです。秘密保持契約——NDAというのは、秘密を守るための書類ですよね。でもこのケースでは、守秘だけじゃなかった。（少し間）&#39;業務を通じて知り得た一切の情報&#39;を秘密情報とするNDAにサインしました。あとから気づいたのは、この条項があると、同業他社の仕事を受けられなくなる、ということです。（少し間）本来はこの&#39;秘密情報の範囲&#39;を交渉で狭めることができたはず。でも気づかなかった。（接続）NDAは守秘のためだけとは限らない——このことを知っておいてほしいんです。">' +
      H('ケース②：NDAで業務範囲が実質制限された') +
      '<div class="slide-content" style="flex-direction:row;align-items:center;gap:2.5cqw;">' +
        '<div style="flex:1;display:flex;flex-direction:column;gap:1cqw;">' +
          '<div class="s-risk-list">' +
            '<div class="s-risk-item">' +
              '<div class="s-risk-header"><span class="s-risk-badge high">実際のケース</span><span class="s-risk-title">NDA（秘密保持契約）/ フリーランス</span></div>' +
              '<div class="s-risk-body">' +
                '「業務を通じて知り得た一切の情報」が秘密情報に。<br>同業他社の仕事を受けることができなくなった。' +
                '<div class="s-risk-proposal">見るべき条項：「秘密情報の範囲」と「競業避止義務」の有無</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<ul class="s-list">' +
            '<li class="s-list-arrow">「一切の情報」は広すぎる。交渉できたはず</li>' +
            '<li class="s-list-arrow">NDAは守秘のためだけとは限らない</li>' +
          '</ul>' +
        '</div>' +
        '<div style="width:12cqw;flex-shrink:0;opacity:.9;">' +
          '<svg viewBox="0 0 88 108" fill="none" style="width:100%;height:auto;">' +
            '<rect x="8" y="4" width="62" height="83" rx="6" fill="#f8fdf0" stroke="#A6BE54" stroke-width="2"/>' +
            '<path d="M52 4L70 22H52V4z" fill="#E8F1D8"/>' +
            '<path d="M52 4L70 22" stroke="#A6BE54" stroke-width="1.5"/>' +
            '<rect x="18" y="30" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="38" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="46" width="28" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="55" width="40" height="6" rx="2" fill="#fef3e2" stroke="#e67e22" stroke-width="1"/>' +
            '<rect x="18" y="66" width="32" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<circle cx="70" cy="24" r="20" fill="#e67e22" stroke="white" stroke-width="2.5"/>' +
            '<rect x="63" y="20" width="14" height="12" rx="2" fill="white"/>' +
            '<path d="M65 20v-4a5 5 0 0 1 10 0v4" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
            '<circle cx="70" cy="26" r="2" fill="#e67e22"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide10() {
    return '<section class="slide" data-section="part1" data-title="ケース③：SaaS規約でデータがAI学習に使われた" data-notes="（フック）3つ目は、今特に気をつけてほしいケースです。業務ツールとして導入したSaaSの利用規約に、こう書いてあった。&#39;サービス改善・AI学習に利用する場合がある&#39;。（少し間）入力した顧客情報や社内文書が、AI学習のデータとして使われていた——気づいたのは、しばらく使い始めてからです。（少し間）無料プランほど、この条項が含まれやすい傾向があります。また、利用規約の&#39;改正&#39;で後から追加されることもある。（接続）ツールを入れる前に、データの取り扱い条項をAIで確認する習慣——これが今、一番リターンが大きい使い方だと思っています。">' +
      H('ケース③：SaaS規約でデータがAI学習に使われた') +
      '<div class="slide-content" style="flex-direction:row;align-items:center;gap:2.5cqw;">' +
        '<div style="flex:1;display:flex;flex-direction:column;gap:1cqw;">' +
          '<div class="s-risk-list">' +
            '<div class="s-risk-item">' +
              '<div class="s-risk-header"><span class="s-risk-badge high">実際のケース</span><span class="s-risk-title">SaaS利用規約 / 業務ツール導入</span></div>' +
              '<div class="s-risk-body">' +
                '「サービス改善・AI学習に利用する場合がある」<br>入力した顧客情報・社内文書が学習データに使われていた。' +
                '<div class="s-risk-proposal">見るべき条項：「データの利用目的」「AIトレーニング」への言及</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<ul class="s-list">' +
            '<li class="s-list-arrow">利用規約の「改正」で後から追加されることもある</li>' +
            '<li class="s-list-arrow">無料プランほどこの条項が含まれやすい</li>' +
          '</ul>' +
        '</div>' +
        '<div style="width:12cqw;flex-shrink:0;opacity:.9;">' +
          '<svg viewBox="0 0 88 108" fill="none" style="width:100%;height:auto;">' +
            '<rect x="8" y="4" width="62" height="83" rx="6" fill="#f8fdf0" stroke="#A6BE54" stroke-width="2"/>' +
            '<path d="M52 4L70 22H52V4z" fill="#E8F1D8"/>' +
            '<path d="M52 4L70 22" stroke="#A6BE54" stroke-width="1.5"/>' +
            '<rect x="18" y="30" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="38" width="36" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="46" width="28" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<rect x="18" y="55" width="40" height="6" rx="2" fill="#e8f4fe" stroke="#38B6FF" stroke-width="1"/>' +
            '<rect x="18" y="66" width="32" height="3" rx="1.5" fill="#C7D99B"/>' +
            '<circle cx="70" cy="24" r="20" fill="#38B6FF" stroke="white" stroke-width="2.5"/>' +
            '<line x1="70" y1="14" x2="70" y2="27" stroke="white" stroke-width="2.5" stroke-linecap="round"/>' +
            '<polyline points="65,20 70,14 75,20" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
            '<path d="M62 31a8 8 0 0 1 16 0" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide11() {
    return '<section class="slide slide-metric" data-section="part1" data-title="問題が起きてから相談すると1〜3万円" data-notes="（少し間）どのケースも、サインする前に5〜10分、重要な箇所だけをAIで確認していれば、気づけた可能性が高いことです。（少し間）問題が起きてから弁護士に相談する場合、初回の法律相談だけで1〜3万円。着手金はその後に別途かかります。（少し間）サイン前の一次確認が、実は一番安い法務コストです。今日はその方法を、実際に体験していただきます。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">問題が起きてから弁護士に相談すると</p>' +
        '<div class="s-metric-value">1〜3万円</div>' +
        '<p class="s-metric-desc">初回法律相談費用（着手金は別途）</p>' +
        '<p class="s-metric-source">一般的な弁護士費用の目安（2024年）</p>' +
      '</div>' +
    '</section>';
  }

  function slide12() {
    return '<section class="slide" data-section="part1" data-title="AIの立ち位置" data-notes="（落ち着いて要点）今日の話は、AIがあれば弁護士は不要——そういう話ではありません。重要な契約書は弁護士に確認していただくべきです。（少し間）ただ現実として、毎月届くSaaSの利用規約や、取引先から送られてくる業務委託契約——これを都度弁護士に相談するのは、コストとスピードの面で難しい。（少し間）AIの立ち位置はこうです。弁護士に相談するかどうかを判断するための、一次確認の道具。（接続）判断を代わりにやってもらうのではなく、判断の材料を5分で揃えてもらう。これが今日の使い方です。">' +
      H('AIの立ち位置') +
      '<div class="slide-content" style="gap:.7cqw;">' +
        '<svg viewBox="0 0 500 54" fill="none" style="width:100%;height:7cqw;flex-shrink:0;">' +
          '<rect x="0" y="7" width="78" height="40" rx="5" fill="#E8F1D8" stroke="#6F911D" stroke-width="1.5"/>' +
          '<text x="39" y="33" text-anchor="middle" font-size="14" fill="#5E791A" font-weight="700" font-family="sans-serif">書類</text>' +
          '<path d="M80 27L108 27" stroke="#A6BE54" stroke-width="2"/>' +
          '<polygon points="106,23 114,27 106,31" fill="#A6BE54"/>' +
          '<rect x="116" y="7" width="100" height="40" rx="5" fill="#E8F1D8" stroke="#6F911D" stroke-width="1.5"/>' +
          '<text x="166" y="24" text-anchor="middle" font-size="12" fill="#5E791A" font-weight="700" font-family="sans-serif">AI</text>' +
          '<text x="166" y="40" text-anchor="middle" font-size="10" fill="#6F911D" font-family="sans-serif">一次確認（5〜10分）</text>' +
          '<path d="M218 27L246 27" stroke="#A6BE54" stroke-width="2"/>' +
          '<polygon points="244,23 252,27 244,31" fill="#A6BE54"/>' +
          '<rect x="254" y="7" width="110" height="40" rx="5" fill="#E8F1D8" stroke="#6F911D" stroke-width="1.5"/>' +
          '<text x="309" y="24" text-anchor="middle" font-size="12" fill="#5E791A" font-weight="700" font-family="sans-serif">自分で判断</text>' +
          '<text x="309" y="40" text-anchor="middle" font-size="10" fill="#6F911D" font-family="sans-serif">弁護士に相談するか？</text>' +
          '<path d="M366 27L390 27" stroke="#FABE00" stroke-width="2" stroke-dasharray="4 3"/>' +
          '<polygon points="388,23 396,27 388,31" fill="#FABE00"/>' +
          '<text x="378" y="20" text-anchor="middle" font-size="9" fill="#aaa" font-family="sans-serif">必要なら</text>' +
          '<rect x="398" y="7" width="102" height="40" rx="5" fill="#fffbeb" stroke="#FABE00" stroke-width="1.5"/>' +
          '<text x="449" y="24" text-anchor="middle" font-size="12" fill="#a07800" font-weight="700" font-family="sans-serif">弁護士</text>' +
          '<text x="449" y="40" text-anchor="middle" font-size="10" fill="#a07800" font-family="sans-serif">専門判断</text>' +
        '</svg>' +
        '<div class="s-compare">' +
          '<div class="s-compare-col neutral">' +
            '<div class="s-compare-badge">弁護士</div>' +
            '<div class="s-compare-title">専門家に依頼する領域</div>' +
            '<ul class="s-compare-items">' +
              '<li>確定した法的判断</li>' +
              '<li>交渉代理</li>' +
              '<li>契約書の新規作成</li>' +
              '<li>重大案件の最終確認</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-compare-col positive">' +
            '<div class="s-compare-badge">AI</div>' +
            '<div class="s-compare-title">一次確認の領域</div>' +
            '<ul class="s-compare-items">' +
              '<li>「ここが引っかかる」を洗い出す</li>' +
              '<li>弁護士に相談するか判断する材料</li>' +
              '<li>相談内容を具体化する</li>' +
              '<li>5〜10分で怪しい箇所を絞る</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide13() {
    return '<section class="slide slide-quote" data-section="part1" data-title="AIは答えを出す機械ではなく…" data-notes="（柔らかく）1枚、覚えておいてほしい一言があります。（少し間）AIは答えを出す機械ではなく、確認すべき問いを見つける道具。">' +
      '<div class="slide-content slide-content-center">' +
        '<blockquote class="s-quote">AIは答えを出す機械ではなく、<br>確認すべき問いを見つける道具。</blockquote>' +
      '</div>' +
    '</section>';
  }

  function slide14() {
    return '<section class="slide" data-section="part1" data-title="チェックすべき書類の全体地図" data-notes="（落ち着いて要点）チェックすべき書類の全体像をお伝えします。全部を今日のうちに覚えていただかなくて構いません。こういう地図があるという感覚だけ持ってもらえれば十分です。（少し間）全部覚えなくていいです。今日お渡しするプロンプトテンプレートに、書類ごとの確認ポイントが全部入っています。（接続）後半のハンズオンで実際に動かしながら確認していきましょう。">' +
      H('チェックすべき書類の全体地図') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">書類① 契約書（業務委託・NDA）<span style="font-weight:400;color:var(--c-text-sub);font-size:.9em;"> ／ 報酬・損害賠償・解除条件・知財帰属</span></li>' +
          '<li class="s-list-head">書類② 利用規約（SaaS・外部サービス）<span style="font-weight:400;color:var(--c-text-sub);font-size:.9em;"> ／ データ利用・損害免責・解約後のデータ</span></li>' +
          '<li class="s-list-head">書類③ 自社のプライバシーポリシー<span style="font-weight:400;color:var(--c-text-sub);font-size:.9em;"> ／ 利用目的・第三者提供・開示請求手続き</span></li>' +
          '<li class="s-list-callout">全部覚えなくていい。プロンプトテンプレートに盛り込んであります</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide15() {
    return '<section class="slide" data-section="part1" data-title="AIを安全に使う 2つのルール" data-notes="（フック）使い始める前に、2つだけ守っていただきたいことがあります。（少し間）ルール1：機密情報は伏せてから入力する。会社名・金額・日付はダミーに置き換える。これをマスキングと呼びます。慣れれば1〜2分です。（少し間）ルール2：AIの指摘は必ず元の文書で確認する。AIは誤った情報を自信ありげに提示することがあります——ハルシネーションと呼ばれる特性です。&#39;第5条に書かれています&#39;と言われたら、実際に第5条を開いて確認する。（接続）この2つだけ守れば、あとは使いながら慣れていただけます。">' +
      H('AIを安全に使う 2つのルール') +
      '<div class="slide-content">' +
        '<div class="s-point-list">' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge"><svg viewBox="0 0 24 24" style="width:55%;height:55%;" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg></div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">マスキング（機密情報は伏せてから入力）</div>' +
              '<div class="s-point-desc">会社名→A社 ／ 金額→[契約金額] ／ 日付→[契約期限]<br>慣れれば1〜2分で完了</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge"><svg viewBox="0 0 24 24" style="width:55%;height:55%;" fill="white"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">元の文書で確認（AIの指摘を鵜呑みにしない）</div>' +
              '<div class="s-point-desc">「第5条に書いてある」と言われたら実際に第5条を開く<br>ハルシネーション：誤情報を自信ありげに提示する特性</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide16() {
    return '<section class="slide" data-section="part1" data-title="安全で効率的な使い方の流れ" data-notes="（落ち着いて要点）この4ステップが安全で効率的な使い方です。マスキング→AIに確認→元文書で照合→必要なら専門家へ。（少し間）難しくはありません。後半で実際に動かしながら確認しましょう。">' +
      H('安全で効率的な使い方の流れ') +
      '<div class="slide-content">' +
        '<div class="s-flow">' +
          '<div class="s-flow-step"><div class="s-flow-num">1</div><svg viewBox="0 0 24 24" style="width:2.8cqw;height:2.8cqw;margin:.4cqw 0;" fill="#6F911D"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg><div class="s-flow-label">マスキング</div><div class="s-flow-desc">会社名・金額・日付を置き換え</div></div>' +
          '<div class="s-flow-step"><div class="s-flow-num">2</div><svg viewBox="0 0 24 24" style="width:2.8cqw;height:2.8cqw;margin:.4cqw 0;" fill="#6F911D"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><div class="s-flow-label">AIに確認</div><div class="s-flow-desc">状況と目的をプロンプトで伝える</div></div>' +
          '<div class="s-flow-step"><div class="s-flow-num">3</div><svg viewBox="0 0 24 24" style="width:2.8cqw;height:2.8cqw;margin:.4cqw 0;" fill="#6F911D"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/></svg><div class="s-flow-label">元文書で照合</div><div class="s-flow-desc">指摘された条番号を自分で確認</div></div>' +
          '<div class="s-flow-step"><div class="s-flow-num">4</div><svg viewBox="0 0 24 24" style="width:2.8cqw;height:2.8cqw;margin:.4cqw 0;" fill="#6F911D"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg><div class="s-flow-label">必要なら専門家へ</div><div class="s-flow-desc">相談内容が具体的な状態で臨む</div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide17() {
    var maskTpl = '【マスキング練習】\n\n元の文：\n「株式会社○○との契約。報酬は月30万円。\n 期間は2026年6月1日〜12月31日。」\n\nマスキング後（自分でやってみよう）：\n「[A社]との契約。報酬は[契約金額]。\n 期間は[契約期間]。」';
    return '<section class="slide" data-section="part1" data-title="ワーク①：マスキングを1分でやってみよう" data-notes="（フック）では実際にやってみましょう。1分あればできます。（少し間）手元に今日配布したサンプル、または自分のメモ帳を開いてください。（少し間）やること：画面の例を参考に、会社名・金額・日付の3つをダミーに置き換える。（少し間）なぜやるか：AIに機密情報を渡さないため。（少し間）何ができるか：これができると、どんな書類でも安全にAIに渡せる状態になります。（締めは前向きに）終わったら次のパートに進みます。まずはここだけやってみてください。">' +
      H('ワーク①：マスキングを1分でやってみよう') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">やること：会社名・金額・日付の3つをダミーに置き換える</li>' +
          '<li class="s-list-sub">なぜ：AIに機密情報を渡さないため</li>' +
          '<li class="s-list-sub">できること：どんな書類でも安全にAIに渡せる状態になる</li>' +
        '</ul>' +
        '<div class="s-prompt-wrap" style="margin-top:.8cqw;">' +
          '<pre class="s-prompt-box" id="prompt-mask">' + maskTpl + '</pre>' +
          '<button class="s-prompt-copy" onclick="(function(b){var t=document.getElementById(\'prompt-mask\').textContent;navigator.clipboard.writeText(t).then(function(){b.textContent=\'✓ コピー済\';setTimeout(function(){b.textContent=\'コピー\'},1500)})})(this)">コピー</button>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- PART 02: 実演① Claude (slides 18–24) --- */

  function slide18() {
    return '<section class="slide slide-section" data-section="part2" data-title="PART 02 実演① 業務委託契約書チェック" data-notes="座学はここまでです。ここからは実際に動かすところをお見せします。まず、今の皆さまの状況を少し確認させてください。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 02</div>' +
        '<h1 class="s-section-title">実演① 業務委託契約書チェック</h1>' +
        '<p class="s-section-lead">Claude を使って実際に動かします</p>' +
      '</div>' +
    '</section>';
  }

  function slide19() {
    return '<section class="slide" data-section="part2" data-title="実演を始める前に：状況確認" data-notes="（フック）まず3点だけ確認させてください。（少し間）確認①、普段、契約書を&#39;受け取る&#39;ことが多いですか、それとも&#39;渡す&#39;ことが多いですか？（少し間）確認②、受け取る場合、条件の交渉はできますか？のむしかない？（少し間）確認③、今日試したい書類はありますか？なければサンプルを使います。（接続）状況に応じて、今日はA・B・Cの3ルートでお見せします。">' +
      H('実演を始める前に：状況確認') +
      '<div class="slide-content">' +
        '<div class="s-routes">' +
          '<div class="s-route-card"><div class="s-route-label">ROUTE A</div><div class="s-route-title">受け取る × 交渉できる</div><div class="s-route-desc">不利条項の洗い出し＋修正案</div></div>' +
          '<div class="s-route-card"><div class="s-route-label">ROUTE B</div><div class="s-route-title">受け取る × のむしかない</div><div class="s-route-desc">リスク優先度＋社内対策</div></div>' +
          '<div class="s-route-card"><div class="s-route-label">ROUTE C</div><div class="s-route-title">渡す側</div><div class="s-route-desc">法的適合性＋相手目線チェック</div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide20() {
    return '<section class="slide" data-section="part2" data-title="Claudeへの書類の渡し方" data-notes="（落ち着いて要点）今日はClaudeを使います。ChatGPTでも同じように動きます。まず最初に、契約書をAIに渡す方法をお見せします。（少し間）ツールよりも&#39;何を書くか&#39;の方が重要なので、プロンプトの内容を見ていてください。">' +
      H('Claudeへの書類の渡し方') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">claude.ai を開く → 新規チャットを作成</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">ペーパークリップ／添付アイコン → ファイルをアップロード</div><div class="s-step-sub">（Word・PDF・テキストファイルに対応）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">プロンプトと一緒に送信</div></div></div>' +
        '</div>' +
        '<div class="s-callout"><strong>Gemini の場合：</strong>GoogleドキュメントのURLを貼り付けるだけ</div>' +
        '<p style="font-size:1.4cqw;color:var(--c-text-sub);margin-top:.5cqw;">プロンプトの内容が重要なので、ツールよりも「何を書くか」を見ていてください</p>' +
      '</div>' +
    '</section>';
  }

  function slide21() {
    var prompt = 'あなたは経験豊富な日本の企業法務の専門家です。\n添付した契約書について、当社の立場から確認してください。\n\n【当社の立場】\n・受託側（Webシステム開発を請け負う中小企業）\n・相手方から提示された業務委託契約書のチェックが目的\n・条件交渉の余地はある\n\n【出力してほしい内容】\n1. 当社に不利な条項をリスクの高い順に（条項番号・理由・シナリオ）\n2. 相手方に提案すべき修正案（そのまま使える文言で）';
    return '<section class="slide" data-section="part2" data-title="実演入力：ルートA プロンプト" data-notes="（落ち着いて要点）プロンプトを入力して実演します。今回の状況をプロンプトに書きます。テンプレートをそのまま使いつつ、立場だけカスタマイズします。（少し間）会社名・金額・日付はあらかじめマスキング済みのサンプルを使っています。">' +
      H('実演入力：ルートA プロンプト') +
      '<div class="slide-content">' +
        '<div class="s-prompt-wrap">' +
          '<pre class="s-prompt-box" id="prompt-rouA">' + prompt + '</pre>' +
          '<button class="s-prompt-copy" onclick="(function(b){var t=document.getElementById(\'prompt-rouA\').textContent;navigator.clipboard.writeText(t).then(function(){b.textContent=\'✓ コピー済\';setTimeout(function(){b.textContent=\'コピー\'},1500)})})(this)">コピー</button>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide22() {
    return '<section class="slide" data-section="part2" data-title="AI出力例：ルートA" data-notes="（落ち着いて要点）※ このスライドは通信トラブル時の予備。通常はリアルタイムのAI出力を解説します。（少し間）AIが最初に挙げた条項を見てください。損害賠償の条項が先頭に来ていますね。&#39;一切の損害を賠償する&#39;という表現は上限がないという意味です。（少し間）修正案をそのまま相手に送るのではなく、交渉のたたき台として使います。">' +
      H('AI出力例：ルートA') +
      '<div class="slide-content" style="padding-top:1.2cqw;">' +
        '<div class="s-risk-list">' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">リスク：高</span><span class="s-risk-title">第8条 損害賠償条項</span></div><div class="s-risk-body">「甲に生じた一切の損害を乙が賠償する」→ 上限なし<div class="s-risk-proposal">修正案：「損害賠償額は本契約の報酬総額を上限とする」</div></div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">リスク：高</span><span class="s-risk-title">第9条 知的財産帰属</span></div><div class="s-risk-body">開発過程のツール・ライブラリも全部委託者に帰属<div class="s-risk-proposal">修正案：「委託業務のため新規作成した成果物のみ委託者に帰属」</div></div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge mid">リスク：中</span><span class="s-risk-title">第7条 解除条件の非対称性</span></div><div class="s-risk-body">甲（委託者）のみ即時解除可。乙（受託者）の解除条件なし</div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide23() {
    return '<section class="slide" data-section="part2" data-title="AI出力の読み解き方（3つの着目点）" data-notes="（フック）知財帰属の条項も確認しましょう。AIがこの条項への指摘を弱めにしか出していない場合があります。重大な条項でも、AIが強調しないことはある——これがハルシネーション対策の習慣です。（接続）この3つの着目点を覚えておいてください。">' +
      H('AI出力の読み解き方（3つの着目点）') +
      '<div class="slide-content">' +
        '<div class="s-point-list">' +
          '<div class="s-point-row"><div class="s-point-badge">①</div><div class="s-point-content"><div class="s-point-title">最初に挙げてきた条項</div><div class="s-point-desc">AIがリスクの高い順で出している。先頭に注目</div></div></div>' +
          '<div class="s-point-row"><div class="s-point-badge">②</div><div class="s-point-content"><div class="s-point-title">修正案の内容</div><div class="s-point-desc">交渉のたたき台として使う。そのまま送らない</div></div></div>' +
          '<div class="s-point-row"><div class="s-point-badge">③</div><div class="s-point-content"><div class="s-point-title">条番号は必ず元の文書で照合</div><div class="s-point-desc">重大条項でもAIが見落とすことがある</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide24() {
    return '<section class="slide slide-impact" data-section="part2" data-title="道具を使いこなすのに、完璧な知識はいらない" data-notes="（締めは前向きに）どうでしたか。難しかったですか？（少し間）実際にやってみると、ツールより&#39;何を書くか&#39;の方がずっと大事だと分かります。（少し間）道具を使いこなすのに、完璧な知識はいらない。今日これを実感してもらえたら、もうこのセミナーの目的は半分達成です。（接続）次は、別のツールで別の書類を試してみましょう。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">KEY INSIGHT</div>' +
        '<p class="s-impact-main">道具を使いこなすのに、<br>完璧な知識はいらない。</p>' +
      '</div>' +
    '</section>';
  }

  /* --- PART 03: 実演② Gemini (slides 25–32) --- */

  function slide25() {
    return '<section class="slide slide-section" data-section="part3" data-title="PART 03 実演② FC加盟契約書チェック" data-notes="もう1つの実演をお見せします。今度はGeminiを使います。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 03</div>' +
        '<h1 class="s-section-title">実演② FC加盟契約書チェック</h1>' +
        '<p class="s-section-lead">Gemini を使ってフランチャイズ契約を多角的にチェックします</p>' +
      '</div>' +
    '</section>';
  }

  function slide26() {
    return '<section class="slide" data-section="part3" data-title="実演② オリエンテーション" data-notes="（フック）今日はキッチンカーでから揚げを販売するフランチャイズへの加盟を例にお見せします。（少し間）数字はご自身の業界に置き換えながら聞いてください。今日の数字をそのまま覚える必要はありません。&#39;こういうことが確認できるんだ&#39;という感覚を持ってもらえれば十分です。（接続）4ステップで確認していきます。">' +
      H('実演② オリエンテーション') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>題材：</strong>キッチンカーから揚げFC「カラアゲーニョ」への加盟検討 ｜ ツール：Google Gemini</div>' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">1</div><div class="s-step-text">FC契約書の総合リスクチェック</div></div>' +
          '<div class="s-step-row"><div class="s-step-num">2</div><div class="s-step-text">費用の全体像と収支の妥当性検証</div></div>' +
          '<div class="s-step-row"><div class="s-step-num">3</div><div class="s-step-text">FC本部の信用度・実態確認の方法</div></div>' +
          '<div class="s-step-row"><div class="s-step-num">4</div><div class="s-step-text">Gemを使った日常的な活用方法</div></div>' +
        '</div>' +
        '<p style="font-size:1.3cqw;color:var(--c-text-sub);">数値（ロイヤルティ率・期間等）は業界・状況によって変わります。ご自身の業界に置き換えながらご覧ください</p>' +
      '</div>' +
    '</section>';
  }

  function slide27() {
    return '<section class="slide" data-section="part3" data-title="Gemini：書類の渡し方" data-notes="（落ち着いて要点）今日のサンプルはGoogleドキュメントに入れてあります。チャット欄にURLを貼り付けると、Geminiが自動的に文書を読み込みます。これだけです。">' +
      H('Gemini：書類の渡し方') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">gemini.google.com を開く</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">チャット欄にGoogleドキュメントのURLを貼り付け</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">プロンプトと一緒に送信 → Geminiが自動的に文書を読み込む</div></div></div>' +
        '</div>' +
        '<ul class="s-list" style="margin-top:.8cqw;">' +
          '<li class="s-list-arrow">PDFの場合：添付ファイルとしてアップロード</li>' +
          '<li class="s-list-arrow">テキストの直接貼り付けでも同様に動作</li>' +
          '<li class="s-list-callout">GoogleドキュメントのURL方式：長い文書もコピペの手間なくまるごと渡せる</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide28() {
    var prompt = 'あなたは日本のフランチャイズ契約に精通した法務専門家です。\nFC加盟契約書について、加盟検討中の個人事業主の立場から確認してください。\n\n1. 加盟者に著しく不利な条項をリスクの大きい順に5つ\n   （条項番号・内容・シナリオを添えて）\n2. 業界標準と比較して「異常」と感じる条件があれば\n3. 中小小売商業振興法の法定開示書面チェック\n4. 締結前に確認・交渉を試みるべきことを優先度順に';
    return '<section class="slide" data-section="part3" data-title="Step 1：FC契約書 総合リスクチェック（プロンプト）" data-notes="（落ち着いて要点）プロンプトを入力して実演します。状況と目的を最初に伝えるのがポイントです。">' +
      H('Step 1：FC契約書 総合リスクチェック（プロンプト）') +
      '<div class="slide-content">' +
        '<div class="s-prompt-wrap">' +
          '<pre class="s-prompt-box" id="prompt-fc1">' + prompt + '</pre>' +
          '<button class="s-prompt-copy" onclick="(function(b){var t=document.getElementById(\'prompt-fc1\').textContent;navigator.clipboard.writeText(t).then(function(){b.textContent=\'✓ コピー済\';setTimeout(function(){b.textContent=\'コピー\'},1500)})})(this)">コピー</button>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide29() {
    return '<section class="slide" data-section="part3" data-title="AI出力例：Step 1 リスクチェック" data-notes="（落ち着いて要点）※ このスライドは通信トラブル時の予備。（少し間）ロイヤルティが10%という数字が出てきていますね。飲食FC業界の平均は3〜7%とされているので、これは高い水準です。（少し間）テリトリーの項目を見てください。&#39;参考区域&#39;となっています。これは、同じエリアに別の加盟者が入る可能性を本部が否定していない、ということです。（接続）こういうことが、5〜10分で洗い出せます。">' +
      H('AI出力例：Step 1 リスクチェック') +
      '<div class="slide-content" style="padding-top:1.2cqw;">' +
        '<div class="s-risk-list">' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">リスク：高 ★業界標準外</span><span class="s-risk-title">第4条 ロイヤルティ 10%</span></div><div class="s-risk-body">飲食FC業界平均は3〜7%。月売上100万円でロイヤルティ＋広告分担金が毎月12万円流出</div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">リスク：高 ★要交渉</span><span class="s-risk-title">第6条 テリトリー「参考区域」表記</span></div><div class="s-risk-body">独占性が保証されていない → 同エリアに別加盟者が入る可能性あり</div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">リスク：高</span><span class="s-risk-title">第11条 解除条件の非対称性</span></div><div class="s-risk-body">本部：30日前通知で解除可 ／ 加盟者：6ヶ月前通知が必要</div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge info">要確認</span><span class="s-risk-title">法定開示書面（締結20日前の交付義務）→ 本部に確認を</span></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide30() {
    return '<section class="slide" data-section="part3" data-title="AI出力例：Step 2 費用・収支検証" data-notes="（フック）明示されている費用と、&#39;別途定める&#39;として金額が見えない費用が分かれて出てきていますね。（少し間）契約書の加盟金300万円だけを見ていると、実際のスタートコストが全く見えない構造になっています。（接続）これが、加盟を決める前に確認しておきたい情報です。">' +
      H('AI出力例：Step 2 費用・収支検証') +
      '<div class="slide-content" style="padding-top:1.2cqw;">' +
        '<div class="s-risk-list">' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge high">要注意</span><span class="s-risk-title">費用の全体像（明示 vs「別途定める」）</span></div><div class="s-risk-body"><strong>明示：</strong>加盟金300万円＋研修費60万円＋設備費<br><strong>不明：</strong>キッチンカー車両費・調理器具・開業販促費・年次更新料<div class="s-risk-proposal">合計：最低でも700万円〜、設備費次第で1,000万円超の可能性</div></div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge mid">試算</span><span class="s-risk-title">月次固定費：ロイヤルティ10%＋広告分担金2%＝売上の12%が本部へ</span></div><div class="s-risk-body">損益分岐点の目安：月次売上 <strong>60〜80万円</strong>（固定費15〜20万円を仮定）</div></div>' +
          '<div class="s-risk-item"><div class="s-risk-header"><span class="s-risk-badge mid">試算</span><span class="s-risk-title">初期投資700万円の回収期間</span></div><div class="s-risk-body">月次純利益10万円 → 約70ヶ月（5年10ヶ月） ／ 20万円 → 約35ヶ月（2年11ヶ月）</div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide31() {
    return '<section class="slide" data-section="part3" data-title="Step 3：FC本部の信用度・実態確認の方法" data-notes="（フック）法人番号・登記情報の確認、国税庁の法人情報、日本フランチャイズ協会への登録有無——こういった具体的な確認先が出てきていますね。これらはすべて無料でできます。（少し間）FC本部に直接確認すべき質問として、&#39;現在の加盟店数と過去2年間の解約・退会数&#39;は特に重要です。（接続）そして右下の危険サイン——これが出たら、一旦立ち止まって検討してください。">' +
      H('Step 3：FC本部の信用度・実態確認の方法') +
      '<div class="slide-content">' +
        '<div class="s-routes">' +
          '<div class="s-route-card">' +
            '<div class="s-route-label">無料でできる</div>' +
            '<div class="s-route-title">自分で調べる</div>' +
            '<ul class="s-card-items">' +
              '<li>法人番号・登記情報（法務局・国税庁）</li>' +
              '<li>日本フランチャイズ協会への登録有無</li>' +
              '<li>公正取引委員会の相談・苦情事例検索</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-route-card">' +
            '<div class="s-route-label">本部に直接確認</div>' +
            '<div class="s-route-title">必ず聞くこと</div>' +
            '<ul class="s-card-items">' +
              '<li>現在の加盟店数と<br><strong>過去2年の解約・退会数</strong></li>' +
              '<li>既存加盟者との面談の可否</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-route-card danger">' +
            '<div class="s-route-label">⚠ 危険サイン</div>' +
            '<div class="s-route-title">これが出たら撤退検討</div>' +
            '<ul class="s-card-items danger">' +
              '<li>数字を見せない</li>' +
              '<li>既存オーナーとの面談を避ける</li>' +
              '<li>契約を急かす</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide32() {
    return '<section class="slide" data-section="part3" data-title="Step 4：Gemで日常的に使えるエージェントを作る" data-notes="（フック）GeminiにはGemという機能があります。今日やったFC契約チェックの流れを、一度Gemとして設定しておけば——次からはGemを開いて書類を貼るだけで、同じ分析が自動的に動きます。（少し間）一度作れば繰り返し使える。業務委託用・利用規約用も作れます。（接続）こういった日常の使い方に繋げていくのが、習慣化のポイントです。">' +
      H('Step 4：Gemで日常的に使えるエージェントを作る') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>Gem とは：</strong>特定の目的に特化したAIエージェントを自分で作れる機能</div>' +
        '<div class="s-steps" style="margin-top:.8cqw;">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div class="s-step-text">Geminiサイドメニュー「Gemを作成」</div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div class="s-step-text">名前を入力：FC加盟審査アシスタント</div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div class="s-step-text">カスタムインストラクションを貼り付けて保存</div></div>' +
        '</div>' +
        '<ul class="s-list" style="margin-top:.8cqw;">' +
          '<li class="s-list-callout">使い方：Gemを開く → GoogleドキュメントのURLを貼るだけ → 5ステップの審査が自動で動く</li>' +
          '<li class="s-list-arrow">一度作れば繰り返し使える。業務委託用・利用規約用も作成可能</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- PART 04: Q&A ＋ まとめ (slides 33–44) --- */

  function slide33() {
    return '<section class="slide slide-section" data-section="part4" data-title="PART 04 Q&A ＋ まとめ" data-notes="ここからは質問の時間です。今日やったことへの疑問でも、日頃感じていたことでも何でも。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 04</div>' +
        '<h1 class="s-section-title">Q&amp;A ＋ まとめ</h1>' +
      '</div>' +
    '</section>';
  }

  function slide34() {
    return '<section class="slide" data-section="part4" data-title="Q：AIが間違えたらどうするんですか？" data-notes="（フック）これが一番多い質問です。（少し間）結論から言うと——AIは間違えます。前提として、そういうものだと思って使ってください。（少し間）だからこそ、今日ルール②を先にお伝えしました。AIに探させる、人間が確認する、この2段階で使う。（接続）道具として使う感覚、これが大事です。">' +
      H('Q：AIが間違えたらどうするんですか？') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>A：間違えます。だから「元の文書で確認」が必須。</strong></div>' +
        '<ul class="s-list" style="margin-top:1cqw;">' +
          '<li class="s-list-arrow">AIに探させる → 人間が確認する、の2段階で使う</li>' +
          '<li class="s-list-arrow">「第5条に書いてある」と言われたら、実際に第5条を開く</li>' +
          '<li class="s-list-arrow">AIを信頼するのではなく、AIを道具として使う感覚</li>' +
          '<li class="s-list-callout">ハルシネーションが怖い → だから今日ルール②を先に教えました</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide35() {
    return '<section class="slide" data-section="part4" data-title="Q：ChatGPTとClaudeどっちがいいですか？" data-notes="（柔らかく）どちらでも十分です。強いて言えば、長い文書の読み込みはClaudeが安定している印象があります。（少し間）Googleドキュメントで管理している場合はGeminiが連携しやすい。用途に合わせて使い分けるのがおすすめです。（接続）有料版を1つ持つのが最もコスパがいいと思います。">' +
      H('Q：ChatGPTとClaudeどっちがいいですか？') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>A：どちらでも十分。長い文書はClaudeが安定している印象。</strong></div>' +
        '<ul class="s-list" style="margin-top:1cqw;">' +
          '<li class="s-list-arrow">ChatGPT（OpenAI）/ Claude（Anthropic）/ Gemini（Google）— どれも同等に使える</li>' +
          '<li class="s-list-arrow">長い契約書・PDFの読み込みはClaudeが安定している</li>' +
          '<li class="s-list-arrow">Googleドキュメントで管理している場合はGeminiが連携しやすい</li>' +
          '<li class="s-list-callout">有料版を1つ持つのがおすすめ。月2,000〜3,000円で業務上のストレスがほぼなくなる</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide36() {
    return '<section class="slide" data-section="part4" data-title="Q：無料版でもできますか？" data-notes="（柔らかく）できます。ただし制限があります。1回あたりのトークン上限が低いので、長い契約書だと途中で打ち切られることがあります。（少し間）まず無料で試してみて、実務で使えそうなら有料版へ——この順番がおすすめです。">' +
      H('Q：無料版でもできますか？') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>A：できます。ただし制限があります。</strong></div>' +
        '<ul class="s-list" style="margin-top:1cqw;">' +
          '<li class="s-list-arrow">1回あたりのトークン上限が低い → 長い契約書は途中で打ち切られることがある</li>' +
          '<li class="s-list-arrow">1日の利用回数制限がある → 業務中に使えなくなる</li>' +
          '<li class="s-list-arrow">ファイルのアップロード非対応のプランもある</li>' +
          '<li class="s-list-callout">まず無料で試す → 実務で使えそうなら有料版へ、の順番がおすすめ</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide37() {
    return '<section class="slide" data-section="part4" data-title="Q：毎回プロンプトを一から書くんですか？" data-notes="（柔らかく）書きません。テンプレートをコピーして&#39;立場&#39;だけ変える。それだけです。（少し間）Gemのカスタムインストラクションにテンプレートをセットしておくと、次からはゼロ入力でも動きます。&#39;毎回ゼロから書く&#39;は続かない——テンプレートが習慣化のカギです。">' +
      H('Q：毎回プロンプトを一から書くんですか？') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>A：書きません。テンプレートをコピーして「立場」だけ変える。</strong></div>' +
        '<ul class="s-list" style="margin-top:1cqw;">' +
          '<li class="s-list-arrow">今日お渡しするプロンプトテンプレートをそのまま使う</li>' +
          '<li class="s-list-arrow">変えるのは「当社の立場」の部分だけ → 慣れれば1〜2分</li>' +
          '<li class="s-list-arrow">Gemのカスタムインストラクションにテンプレートをセットしておくと次からゼロ入力</li>' +
          '<li class="s-list-callout">「毎回ゼロから書く」は続かない。テンプレートが習慣化のカギ</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide38() {
    return '<section class="slide" data-section="part4" data-title="Q：弁護士費用は削れますか？" data-notes="（フック）正直に答えます。（少し間）AIで削れるのは&#39;相談するかどうかを判断するまでのコスト&#39;です。問題が発生すれば弁護士は必要。AIで代替はできません。（少し間）ただ、弁護士に相談するかどうかを自分で判断できるようになる——これは大きい。相談するとき、内容が具体的な状態で臨めるので相談時間が短縮できます。（接続）&#39;弁護士不要&#39;ではなく&#39;無駄な相談ゼロ&#39;が正確な表現です。">' +
      H('Q：弁護士費用は削れますか？') +
      '<div class="slide-content">' +
        '<div class="s-callout"><strong>A：AIで削れるのは「相談するかどうかを判断するまでのコスト」。</strong></div>' +
        '<ul class="s-list" style="margin-top:1cqw;">' +
          '<li class="s-list-arrow">実際に問題が発生すれば弁護士は必要。AIで代替はできない</li>' +
          '<li class="s-list-arrow">「この条項は弁護士に確認すべきか？」を自分で判断できるようになる</li>' +
          '<li class="s-list-arrow">相談するとき、内容が具体的になる → 相談時間が短縮 → コスト削減</li>' +
          '<li class="s-list-callout">「弁護士不要」ではなく「無駄な相談ゼロ」が正確な表現</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide39() {
    return '<section class="slide slide-metric" data-section="part4" data-title="投資対効果：月1時間の節約で何が変わるか" data-notes="（フック強め）少し数字で整理させてください。（少し間）契約書の確認に、今まで1件あたり30分〜1時間かけていたとします。AIを使えばそれが5〜10分になる。（少し間）月に書類が10件あるとすると、削減できる確認作業は月に4〜5時間。時給2,000円換算で月8,000〜10,000円分の時間が戻ってきます。（少し間）でもここで重要なのは金額よりも何かというと——チェック漏れによるリスクが格段に減ること。今日のケースで出てきた300万円の損害賠償、これが1件でも防げれば、コストは完全に回収できます。（締めは前向きに）今日の投資は時間にして60分。今日持ち帰れるものに対して、十分すぎるリターンだと思っています。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">月10件の書類確認をAIで効率化すると</p>' +
        '<div class="s-metric-value">月4〜5時間</div>' +
        '<p class="s-metric-desc">確認作業の削減 ＋ チェック漏れリスクの大幅低下</p>' +
        '<div style="display:flex;flex-direction:column;gap:.5cqw;margin-top:1.2cqw;width:38cqw;">' +
          '<div style="display:flex;align-items:center;gap:.8cqw;">' +
            '<span style="font-size:1.2cqw;color:rgba(255,255,255,.45);width:5.5cqw;text-align:right;flex-shrink:0;">今まで 30分</span>' +
            '<div style="flex:1;height:1.6cqw;background:rgba(192,57,43,.55);border-radius:.4cqw;"></div>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:.8cqw;">' +
            '<span style="font-size:1.2cqw;color:rgba(255,255,255,.8);width:5.5cqw;text-align:right;flex-shrink:0;">AI後 5分</span>' +
            '<div style="width:16.7%;height:1.6cqw;background:#FABE00;border-radius:.4cqw;"></div>' +
            '<span style="font-size:1.1cqw;color:rgba(255,255,255,.5);margin-left:.4cqw;">▲83%削減</span>' +
          '</div>' +
        '</div>' +
        '<p class="s-metric-source" style="margin-top:.8cqw;">1件30分→5分換算 ／ リスク回避1件で300万円超の損失防止も（ケース次第）</p>' +
      '</div>' +
    '</section>';
  }

  function slide40() {
    return '<section class="slide" data-section="part4" data-title="今日、ここで試してほしい理由" data-notes="（フック強め）最後に1つだけ、お伝えしたいことがあります。（少し間）今日のプロンプトテンプレートは、今日の参加者にお渡しするものです。今日帰ったら、今日の記憶が一番鮮明な状態で試すのが一番効率がいい。（少し間）最初の1通は失敗してもいいです。どこが分からなかったか、が分かれば、次はずっとうまくいきます。（少し間）もし試してみて&#39;ここで詰まった&#39;という場合は、個別相談を使ってください。今日のセミナーを受けた状態で来てもらえると、話がずっと早くなります。（締めは前向きに）今日だけでいいので、1通、試してみてください。">' +
      H('今日、ここで試してほしい理由') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">① 今日のプロンプトは今日が一番使いやすい状態</li>' +
          '<li class="s-list-sub">記憶が鮮明な今日のうちに1回試す → 次から手が動くようになる</li>' +
          '<li class="s-list-head">② 最初の1通は失敗していい</li>' +
          '<li class="s-list-sub">「どこが分からなかったか」が分かれば、次はうまくいく</li>' +
          '<li class="s-list-head">③ 試した状態で相談に来ると話が早い</li>' +
          '<li class="s-list-sub">個別相談で「この書類でこうなった」を持ってきてもらえると、すぐ本題に入れます</li>' +
          '<li class="s-list-callout">まず1通。それだけでいい。</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide41() {
    return '<section class="slide slide-impact" data-section="part4" data-title="今日、1通だけ試してみて。" data-notes="（締めは前向きに）難しく考えなくていいです。今日持ち帰ったプロンプトを開いて、手元にある書類を貼り付けるだけ。それだけです。（少し間）昨日受け取った業務委託でも、今使っているSaaSの規約でも。何でもいい。1通だけ試してみてください。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">ACTION</div>' +
        '<p class="s-impact-main">今日、1通だけ<br>試してみて。</p>' +
      '</div>' +
    '</section>';
  }

  function slide42() {
    return '<section class="slide" data-section="part4" data-title="今日のポイント 3つ" data-notes="（落ち着いて要点）最後に、今日やったことを3点で整理します。（少し間）1つ目、チェックする書類は3種類——契約書、利用規約、自社のプライバシーポリシー。2つ目、AIを使う前のルールは2つ——マスキングと元文書照合。3つ目、AIは一次フィルター——判断は人間がやる、必要なら専門家へ。（接続）この3つだけ覚えて帰ってください。">' +
      H('今日のポイント 3つ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text"><strong>チェックする書類は3種類</strong></div><div class="s-step-sub">契約書 ／ 利用規約 ／ 自社のプライバシーポリシー</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text"><strong>AIを使う前のルールは2つ</strong></div><div class="s-step-sub">マスキング ／ 鵜呑み禁止（元の文書で確認）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text"><strong>AIは一次フィルター</strong></div><div class="s-step-sub">判断は人間がやる。必要なら専門家へ</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide43() {
    return '<section class="slide" data-section="part4" data-title="個別支援のご案内" data-notes="（柔らかく）最後に1点だけ。自社の書類に当てはめてもっと深くやりたい、社内に展開したい、AI導入全体の相談がしたい——そういう場合は、個別の支援メニューがあります。今日のセミナーを受けた方は、今日の内容を前提に話ができるので、最初から話を作り直す手間がなく、すぐ本題に入れます。まず無料の個別相談をご活用ください。">' +
      H('個別支援のご案内') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li>「自社の書類に当てはめてもっと深くやりたい」</li>' +
          '<li>「社内に展開したい」</li>' +
          '<li>「AI導入全体の相談がしたい」</li>' +
        '</ul>' +
        '<div class="s-callout" style="margin-top:1cqw;"><strong>まず無料の個別相談をご活用ください</strong><br>岡山県よろず支援拠点：086-206-2180</div>' +
        '<p style="font-size:1.3cqw;color:var(--c-text-sub);margin-top:.8cqw;">今日のセミナーを受けた方は、今日の内容を前提に話ができるので最初から話を作り直す手間がなく、早く本題に入れます</p>' +
      '</div>' +
    '</section>';
  }

  function slide44() {
    return '<section class="slide slide-ending" data-section="part4" data-title="今日から1通、試してみてください。" data-notes="（締めは前向きに）今日はここまでです。ありがとうございました。">' +
      '<div class="slide-content slide-content-center">' +
        '<h1 class="s-ending-main">今日から1通、<br>試してみてください。</h1>' +
        '<div class="s-ending-bar"></div>' +
        '<p class="s-ending-sub">プロンプトテンプレートをお持ち帰りいただきます。<br>ありがとうございました。</p>' +
      '</div>' +
    '</section>';
  }

  /* ===================== REGISTER ===================== */

  window.slideFactories = [
    slide01, slide02, slide03, slide04, slide05, slide06,
    slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17,
    slide18, slide19, slide20, slide21, slide22, slide23, slide24,
    slide25, slide26, slide27, slide28, slide29, slide30, slide31, slide32,
    slide33, slide34, slide35, slide36, slide37, slide38, slide39, slide40, slide41, slide42, slide43, slide44
  ];

  window.agendaItems = [
    { id: 'cover', label: '導入' },
    { id: 'part1', label: '01 座学' },
    { id: 'part2', label: '02 実演①' },
    { id: 'part3', label: '03 実演②' },
    { id: 'part4', label: '04 Q&A' }
  ];

})();
