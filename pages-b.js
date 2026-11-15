/* SP04 pages: Notes (text, photo, calculation, checklist) and Diary */
'use strict';
T.add({
  en: { n_text: 'Normal note', n_photo: 'Photo note', n_calc: 'Calculation note', n_check: 'Checklist', n_diary: 'Diary',
    n_textD: 'Write like in Word: bold, headings, lists, colours', n_photoD: 'Add photos and write with them', n_calcD: 'Every line is calculated, total at the bottom', n_checkD: 'Shopping list, packing list, steps', n_diaryD: 'One page for each day, with mood and photos',
    chooseType: 'Which note?', noteTitle: 'Title', startWriting: 'Start writing…', addPhoto: 'Photo', camera: 'Camera', total: 'Total', calcHelp: 'Write one item per line, e.g. "Milk 30 x 2" or "Rent 5000 + 10%". Lines starting with # are not added.',
    addItem: 'Add item…', pinned: 'Pinned', pin: 'Pin', unpin: 'Unpin', noNotes: 'No notes yet. Tap + to write one.', wordFile: 'Word file', copyText: 'Copy text', items: 'items',
    todayDiary: "Write today's diary", mood: 'How was the day?', noDiary: 'No diary pages yet. Start with today.', diaryPh: 'Dear diary… what happened today?', words: 'words', changeDate: 'Date', onThisDay: 'On this day earlier', entriesM: 'pages', streak: 'day streak' },
  hi: { n_text: 'सामान्य नोट', n_photo: 'फ़ोटो नोट', n_calc: 'हिसाब वाला नोट', n_check: 'चेकलिस्ट', n_diary: 'डायरी',
    n_textD: 'Word जैसा लिखें: बोल्ड, हेडिंग, लिस्ट, रंग', n_photoD: 'फ़ोटो लगाकर उसके साथ लिखें', n_calcD: 'हर लाइन का हिसाब अपने आप, नीचे टोटल', n_checkD: 'सामान की लिस्ट, पैकिंग, काम के स्टेप', n_diaryD: 'हर दिन का एक पन्ना, मूड और फ़ोटो के साथ',
    chooseType: 'कौन सा नोट?', noteTitle: 'शीर्षक', startWriting: 'लिखना शुरू करें…', addPhoto: 'फ़ोटो', camera: 'कैमरा', total: 'कुल', calcHelp: 'हर लाइन में एक चीज़ लिखें, जैसे "दूध 30 x 2" या "किराया 5000 + 10%"। # से शुरू लाइन जोड़ी नहीं जाती।',
    addItem: 'चीज़ जोड़ें…', pinned: 'पिन किए', pin: 'पिन करें', unpin: 'पिन हटाएँ', noNotes: 'अभी कोई नोट नहीं। + दबाकर लिखें।', wordFile: 'Word फ़ाइल', copyText: 'टेक्स्ट कॉपी', items: 'चीज़ें',
    todayDiary: 'आज की डायरी लिखें', mood: 'दिन कैसा रहा?', noDiary: 'अभी डायरी का कोई पन्ना नहीं। आज से शुरू करें।', diaryPh: 'प्रिय डायरी… आज क्या हुआ?', words: 'शब्द', changeDate: 'तारीख़', onThisDay: 'पहले इसी दिन', entriesM: 'पन्ने', streak: 'दिन लगातार' },
});
const NTYPES = { text: '📝', photo: '🖼️', calc: '🧮', check: '☑️', diary: '📔' };
const MOODS = ['😄', '🙂', '😐', '😔', '😢', '😡', '🥰', '😴'];
let notesFilter = '', notesQ = '';

/* ---------- calculator for calc notes ---------- */
function calcExpr(src) {
  const s = src.replace(/,(?=\d{2,3}\b)/g, '').replace(/[×xX](?=\s*[\d(])/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  let i = 0;
  const ws = () => { while (s[i] === ' ') i++; };
  function num() {
    ws(); let st = i;
    if (s[i] === '(') { i++; const v = add(); ws(); if (s[i] === ')') i++; return { v, pct: false }; }
    if (s[i] === '-') { i++; const r = num(); return { v: -r.v, pct: r.pct }; }
    while (/[\d.]/.test(s[i] || '')) i++;
    if (st === i) throw 0;
    let v = parseFloat(s.slice(st, i)); ws();
    if (s[i] === '%') { i++; return { v: v / 100, pct: true }; }
    return { v, pct: false };
  }
  function mul() { let a = num(); for (;;) { ws(); const op = s[i]; if (op !== '*' && op !== '/') return a; i++; const b = num(); a = { v: op === '*' ? a.v * b.v : a.v / b.v, pct: false }; } }
  function add() { let a = mul().v; for (;;) { ws(); const op = s[i]; if (op !== '+' && op !== '-') return a; i++; const b = mul(); const bv = b.pct ? a * b.v : b.v; a = op === '+' ? a + bv : a - bv; } }
  const v = add(); ws(); if (i < s.length) throw 0; return v;
}
function calcLine(line) {
  const l = line.trim(); if (!l || l.startsWith('#')) return null;
  const norm = l.replace(/(\d)\s*[x×X]\s*(?=\d)/g, '$1*');
  const m = norm.match(/[-(]?\s*\d[\d.,\s+\-*/%()×÷]*$/); if (!m) return null;
  let expr = m[0].trim();
  while (expr && !/[\d%)]$/.test(expr)) expr = expr.slice(0, -1).trim();
  for (let k = 0; k < 6 && expr; k++) { try { const v = calcExpr(expr); if (isFinite(v)) return v; } catch {} expr = expr.replace(/^[^\d(]*[\d.]+\s*/, ''); }
  return null;
}
const fmtNum = (v) => (Math.round(v * 100) / 100).toLocaleString('en-IN', { maximumFractionDigits: 2 });

const Notes = {
  text(n) {
    if (n.ntype === 'calc') return (n.lines || []).join('\n');
    if (n.ntype === 'check') return (n.items || []).map((x) => (x.done ? '✔ ' : '◻ ') + x.t).join('\n');
    const d = document.createElement('div'); d.innerHTML = n.html || ''; d.querySelectorAll('br,p,div,li,h1,h2').forEach((x) => x.append('\n')); return d.textContent.replace(/\n{3,}/g, '\n\n').trim();
  },
  firstImg(n) { const m = /<img[^>]+src="([^"]+)"/.exec(n.html || ''); return m ? m[1] : ''; },
  card(n) {
    let p = Notes.text(n).slice(0, 220);
    if (n.ntype === 'calc') { const tot = (n.lines || []).reduce((a, l) => a + (calcLine(l) || 0), 0); p = `${t('total')}: ${fmtNum(tot)}\n` + p; }
    if (n.ntype === 'check') { const it = n.items || []; p = `${it.filter((x) => x.done).length}/${it.length} ✓\n` + p; }
    const img = Notes.firstImg(n);
    const title = n.title || (n.ntype === 'diary' ? fmtDate(n.date) : '') || t('n_' + n.ntype);
    return `<div class="nc" data-nid="${n.id}" style="${n.color ? `border-color:${n.color}` : ''}"><span class="ty">${n.pinned ? '📌' : ''}${n.mood || NTYPES[n.ntype]}</span><b>${esc(title)}</b><p>${esc(p)}</p>${img ? `<img src="${img}" alt="">` : ''}</div>`;
  },
  bindCards(el) { $$('.nc[data-nid]', el).forEach((c) => (c.onclick = () => go('#/note/' + c.dataset.nid))); },
  isEmpty(n) { return !n.title && !Notes.text(n).trim() && !Notes.firstImg(n) && !(n.items || []).some((x) => x.t); },
  async create(type, extra = {}) {
    const n = { kind: 'note', ntype: type, title: '', html: '', ...extra };
    if (type === 'calc') n.lines = [''];
    if (type === 'check') n.items = [];
    if (type === 'diary') { n.date = n.date || today(); n.mood = ''; }
    await DB.save(n); go('#/note/' + n.id);
  },
  openDiary(date) { const e = DB.all('note').find((n) => n.ntype === 'diary' && n.date === date); if (e) go('#/note/' + e.id); else Notes.create('diary', { date }); },
  chooseType() {
    openModal(t('chooseType'), `<div class="list">${['text', 'photo', 'calc', 'check', 'diary'].map((k) => `<div class="it" data-nt="${k}"><div class="ic">${NTYPES[k]}</div><div class="tx"><b>${esc(t('n_' + k))}</b><small>${esc(t('n_' + k + 'D'))}</small></div></div>`).join('')}</div>`,
      (b) => $$('[data-nt]', b).forEach((x) => (x.onclick = async () => { const k = x.dataset.nt; await closeModal(); k === 'diary' ? Notes.openDiary(today()) : Notes.create(k); })));
  },
};

/* ---------- Notes list ---------- */
PAGES.notes = {
  icon: '📝',
  render(el) {
    const all = DB.all('note').filter((n) => n.ntype !== 'diary');
    const q = notesQ.toLowerCase();
    const list = all.filter((n) => (!notesFilter || n.ntype === notesFilter) && (!q || (n.title + ' ' + Notes.text(n)).toLowerCase().includes(q))).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.upd - a.upd);
    el.innerHTML = `<div class="search" style="margin-bottom:10px"><input class="f" id="nq" placeholder="${esc(t('search'))}" value="${esc(notesQ)}"></div>
      <div class="chips" style="margin-bottom:12px"><button class="chip ${!notesFilter ? 'on' : ''}" data-f="">${esc(t('all'))} (${all.length})</button>${['text', 'photo', 'calc', 'check'].map((k) => `<button class="chip ${notesFilter === k ? 'on' : ''}" data-f="${k}">${NTYPES[k]} ${esc(t('n_' + k))}</button>`).join('')}</div>
      <div id="nlist">${list.length ? `<div class="ngrid">${list.map((n) => Notes.card(n)).join('')}</div>` : `<div class="card empty"><div>📝</div>${esc(t('noNotes'))}</div>`}</div>`;
    const nq = $('#nq', el);
    nq.oninput = () => { notesQ = nq.value; const pos = nq.selectionStart; App.refresh(); const n2 = $('#nq'); n2.focus(); n2.setSelectionRange(pos, pos); };
    $$('[data-f]', el).forEach((b) => (b.onclick = () => { notesFilter = b.dataset.f; App.refresh(); }));
    Notes.bindCards(el);
    fab(() => Notes.chooseType());
  },
};

/* ---------- Diary list ---------- */
PAGES.diary = {
  icon: '📔',
  render(el) {
    const all = DB.all('note').filter((n) => n.ntype === 'diary').sort((a, b) => b.date.localeCompare(a.date));
    const has = new Set(all.map((n) => n.date)); let streak = 0; const x = new Date(); if (!has.has(ymd(x))) x.setDate(x.getDate() - 1);
    while (has.has(ymd(x))) { streak++; x.setDate(x.getDate() - 1); }
    const md = today().slice(5);
    const past = all.filter((n) => n.date.slice(5) === md && n.date !== today());
    let html = `<button class="btn gold wide" id="dToday" style="margin-bottom:12px">✍️ ${esc(t('todayDiary'))}</button>
      <div class="grid2" style="margin-bottom:12px"><div class="stat"><small>📔 ${esc(t('entriesM'))}</small><b>${all.length}</b></div><div class="stat"><small>🔥 ${esc(t('streak'))}</small><b>${streak}</b></div></div>`;
    if (past.length) html += `<div class="card"><h3>🕰️ ${esc(t('onThisDay'))}</h3><div class="ngrid">${past.map((n) => Notes.card(n)).join('')}</div></div>`;
    if (!all.length) html += `<div class="card empty"><div>📔</div>${esc(t('noDiary'))}</div>`;
    else {
      let cur = '';
      html += '<div class="card list">';
      for (const n of all) {
        const mo = n.date.slice(0, 7);
        if (mo !== cur) { cur = mo; html += `<div class="datehead"><span>${esc(parseYmd(mo + '-01').toLocaleDateString(LOCALE(), { month: 'long', year: 'numeric' }))}</span></div>`; }
        const img = Notes.firstImg(n);
        html += `<div class="it" data-nid="${n.id}"><div class="ic" style="${img ? `background:url('${img}') center/cover` : ''}">${img ? '' : n.mood || '📔'}</div><div class="tx"><b>${n.mood && img ? n.mood + ' ' : ''}${esc(n.title || fmtDate(n.date, { weekday: 'long', day: 'numeric', month: 'short' }))}</b><small>${esc(Notes.text(n).slice(0, 90) || '…')}</small></div></div>`;
      }
      html += '</div>';
    }
    el.innerHTML = html;
    $('#dToday').onclick = () => Notes.openDiary(today());
    $$('[data-nid]', el).forEach((r) => (r.onclick = () => go('#/note/' + r.dataset.nid)));
    Notes.bindCards(el);
  },
};

/* ---------- Note editor ---------- */
PAGES.note = {
  title(rest) { const n = DB.get(rest[0]); return n ? t('n_' + n.ntype) : t('notes'); },
  get menuKey() { const n = DB.get(App.current?.rest?.[0]); return n?.ntype === 'diary' ? 'diary' : 'notes'; },
  render(el, [id]) {
    const n = DB.get(id); if (!n) { go('#/notes'); return; }
    $$('#menu a').forEach((a) => a.classList.toggle('on', a.dataset.k === (n.ntype === 'diary' ? 'diary' : 'notes')));
    let timer = null, dirty = false;
    const save = async () => { clearTimeout(timer); if (!dirty) return; dirty = false; await DB.save(n); };
    const touch = () => { dirty = true; clearTimeout(timer); timer = setTimeout(save, 600); };
    App.leave = async () => { clearTimeout(timer); if (Notes.isEmpty(n)) await DB.del(n.id); else if (dirty) { dirty = false; await DB.save(n); } };
    App.flush = save;

    if (n.ntype !== 'diary') topAction(n.pinned ? '📌' : '📍', n.pinned ? t('unpin') : t('pin'), (e) => { n.pinned = !n.pinned; e.target.textContent = n.pinned ? '📌' : '📍'; touch(); toast(n.pinned ? t('pinned') : t('unpin')); });
    topAction('📤', t('share'), () => {
      openModal(t('share'), `<div class="list"><div class="it" data-s="copy"><div class="ic">📋</div><div class="tx"><b>${esc(t('copyText'))}</b></div></div>${['text', 'photo', 'diary'].includes(n.ntype) ? `<div class="it" data-s="doc"><div class="ic">📄</div><div class="tx"><b>${esc(t('wordFile'))} (.doc)</b></div></div>` : ''}<div class="it" data-s="txt"><div class="ic">🗒️</div><div class="tx"><b>.txt</b></div></div></div>`, (b) => {
        $$('[data-s]', b).forEach((x) => (x.onclick = async () => {
          const s = x.dataset.s, name = (n.title || t('n_' + n.ntype)).replace(/[\\/:*?"<>|]/g, '_').slice(0, 40);
          const txt = (n.title ? n.title + '\n\n' : '') + Notes.text(n) + (n.ntype === 'calc' ? `\n\n${t('total')}: ${fmtNum((n.lines || []).reduce((a, l) => a + (calcLine(l) || 0), 0))}` : '');
          if (s === 'copy') { try { await navigator.clipboard.writeText(txt); toast(t('copied')); } catch { toast('✖'); } }
          else if (s === 'txt') await saveFile(name + '.txt', new Blob([txt], { type: 'text/plain' }));
          else await saveFile(name + '.doc', new Blob([`<html><head><meta charset="utf-8"></head><body>${n.title ? `<h1>${esc(n.title)}</h1>` : ''}${n.ntype === 'diary' ? `<p><b>${esc(fmtDate(n.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))}</b> ${n.mood || ''}</p>` : ''}${n.html || ''}</body></html>`], { type: 'application/msword' }));
          closeModal();
        }));
      });
    });
    topAction('🗑', t('del'), async () => { if (await ask(t('delSure'), t('del'))) { clearTimeout(timer); dirty = false; App.leave = null; await DB.del(n.id); toast(t('deleted')); history.length > 1 ? history.back() : go('#/notes'); } });

    let head = `<input class="titlein" id="nTitle" placeholder="${esc(t('noteTitle'))}" value="${esc(n.title)}">`;
    if (n.ntype === 'diary') head = `<div class="row" style="margin:6px 0"><input class="f" type="date" id="dDate" value="${esc(n.date)}" style="width:auto"><b class="grow" style="color:var(--gold2)">${esc(fmtDate(n.date, { weekday: 'long' }))}</b></div>
      <div class="muted small" style="margin:8px 0 6px">${esc(t('mood'))}</div><div class="moods">${MOODS.map((m) => `<button class="${n.mood === m ? 'on' : ''}" data-mood="${m}">${m}</button>`).join('')}</div>` + head;
    el.innerHTML = `<div class="card" style="padding:10px 14px">${head}<div id="nBody"></div></div>`;
    const title = $('#nTitle', el); title.oninput = () => { n.title = title.value; touch(); };
    if (n.ntype === 'diary') {
      $('#dDate', el).onchange = (e) => { const v = e.target.value; if (!v) return; const other = DB.all('note').find((x) => x.ntype === 'diary' && x.date === v && x.id !== n.id); if (other) { toast('⚠ ' + fmtDate(v)); e.target.value = n.date; return; } n.date = v; touch(); };
      $$('[data-mood]', el).forEach((b) => (b.onclick = () => { n.mood = n.mood === b.dataset.mood ? '' : b.dataset.mood; $$('[data-mood]', el).forEach((x) => x.classList.toggle('on', x.dataset.mood === n.mood)); touch(); }));
    }
    const body = $('#nBody', el);
    if (n.ntype === 'calc') return CalcEd(body, n, touch);
    if (n.ntype === 'check') return CheckEd(body, n, touch);
    RichEd(body, n, touch);
  },
};

function RichEd(body, n, touch) {
  const colors = ['#f6d98b', '#ff7a8a', '#6fe0a8', '#8ab4ff', '#f4f0ff'];
  body.innerHTML = `<div class="tb" id="tb">
      <button data-c="bold"><b>B</b></button><button data-c="italic"><i>I</i></button><button data-c="underline"><u>U</u></button>
      <button data-b="H1">H1</button><button data-b="H2">H2</button><button data-b="P">¶</button>
      <button data-c="insertUnorderedList">•</button><button data-c="insertOrderedList">1.</button><button data-b="BLOCKQUOTE">❝</button>
      ${colors.map((c) => `<button data-col="${c}" style="color:${c}">●</button>`).join('')}
      <button data-c="undo">↶</button><button data-c="redo">↷</button>
      <button data-img>🖼 ${esc(t('addPhoto'))}</button><button data-cam>📷</button></div>
    <div class="ed" id="ed" contenteditable="true" data-ph="${esc(n.ntype === 'diary' ? t('diaryPh') : t('startWriting'))}">${n.html || ''}</div>
    <div class="muted small" id="wc" style="text-align:right"></div>`;
  const ed = $('#ed', body);
  const wc = () => { const w = (ed.innerText.trim().match(/\S+/g) || []).length; $('#wc', body).textContent = w ? `${w} ${t('words')}` : ''; };
  const upd = () => { n.html = ed.innerHTML === '<br>' ? '' : ed.innerHTML; wc(); touch(); };
  ed.addEventListener('input', upd); wc();
  let saved = null;
  const keepSel = () => { const s = getSelection(); if (s.rangeCount && ed.contains(s.anchorNode)) saved = s.getRangeAt(0).cloneRange(); };
  document.addEventListener('selectionchange', keepSel);
  const restore = () => { ed.focus(); if (saved) { const s = getSelection(); s.removeAllRanges(); s.addRange(saved); } };
  const tb = $('#tb', body);
  tb.addEventListener('mousedown', (e) => { if (e.target.closest('button')) e.preventDefault(); });
  tb.onclick = async (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.c) { restore(); document.execCommand(b.dataset.c); upd(); }
    else if (b.dataset.b) { restore(); document.execCommand('formatBlock', false, b.dataset.b); upd(); }
    else if (b.dataset.col) { restore(); document.execCommand('foreColor', false, b.dataset.col); upd(); }
    else if ('img' in b.dataset || 'cam' in b.dataset) {
      const inp = $('#filePick'); inp.setAttribute('capture', 'environment'); if (!('cam' in b.dataset)) inp.removeAttribute('capture');
      const files = await keepUnlocked(() => pickFile('image/*', true)); inp.removeAttribute('capture');
      if (!files?.length) return;
      let html = '';
      for (const f of files) { try { html += `<img src="${(await imageToDataURL(f)).url}" alt=""><br>`; } catch {} }
      restore(); document.execCommand('insertHTML', false, html); upd();
    }
  };
  if (!n.html && n.ntype !== 'photo') setTimeout(() => ed.focus(), 200);
  if (n.ntype === 'photo' && !n.html) setTimeout(() => tb.querySelector('[data-img]').click(), 300);
}

function CalcEd(body, n, touch) {
  n.lines = n.lines?.length ? n.lines : [''];
  body.innerHTML = `<p class="muted small" style="margin:8px 0">${esc(t('calcHelp'))}</p><div id="cl" class="calc"></div><div class="calctotal"><span>${esc(t('total'))}</span><span id="ctot"></span></div>
    <div class="row" style="justify-content:flex-end"><button class="btn ghost sm" id="cCopy">📋 ${esc(t('total'))}</button></div>`;
  const cl = $('#cl', body);
  const total = () => { const v = n.lines.reduce((a, l) => a + (calcLine(l) || 0), 0); $('#ctot', body).textContent = fmtNum(v); return v; };
  const draw = (focus) => {
    cl.innerHTML = n.lines.map((l, i) => { const r = calcLine(l); return `<div class="calcrow"><input data-i="${i}" value="${esc(l)}" placeholder="${i === 0 ? esc(lang === 'hi' ? 'जैसे: दूध 30 x 2' : 'e.g. Milk 30 x 2') : ''}"><div class="res" data-r="${i}">${r == null ? '' : '= ' + fmtNum(r)}</div></div>`; }).join('');
    total();
    if (focus != null) { const x = cl.querySelector(`[data-i="${focus}"]`); x?.focus(); x?.setSelectionRange(x.value.length, x.value.length); }
  };
  cl.oninput = (e) => { const i = +e.target.dataset.i; n.lines[i] = e.target.value; const r = calcLine(e.target.value); cl.querySelector(`[data-r="${i}"]`).textContent = r == null ? '' : '= ' + fmtNum(r); total(); touch(); };
  cl.onkeydown = (e) => {
    const i = +e.target.dataset.i; if (isNaN(i)) return;
    if (e.key === 'Enter') { e.preventDefault(); const pos = e.target.selectionStart; const l = n.lines[i]; n.lines.splice(i, 1, l.slice(0, pos), l.slice(pos)); draw(i + 1); touch(); }
    else if (e.key === 'Backspace' && e.target.selectionStart === 0 && e.target.selectionEnd === 0 && i > 0) { e.preventDefault(); const prev = n.lines[i - 1]; n.lines.splice(i - 1, 2, prev + n.lines[i]); draw(i - 1); const x = cl.querySelector(`[data-i="${i - 1}"]`); x.setSelectionRange(prev.length, prev.length); touch(); }
    else if (e.key === 'ArrowDown') cl.querySelector(`[data-i="${i + 1}"]`)?.focus();
    else if (e.key === 'ArrowUp') cl.querySelector(`[data-i="${i - 1}"]`)?.focus();
  };
  $('#cCopy', body).onclick = async () => { try { await navigator.clipboard.writeText(String(Math.round(total() * 100) / 100)); toast(t('copied')); } catch {} };
  draw(n.lines.length === 1 && !n.lines[0] ? 0 : null);
}

function CheckEd(body, n, touch) {
  n.items = n.items || [];
  const draw = (focus) => {
    const done = n.items.filter((x) => x.done).length;
    body.innerHTML = `<div class="muted small" style="margin:8px 0">${done}/${n.items.length} ${esc(t('items'))}</div><div class="bar" style="margin-bottom:8px"><i style="width:${n.items.length ? (done / n.items.length) * 100 : 0}%"></i></div>
      <div id="ck">${n.items.map((x, i) => `<div class="chk ${x.done ? 'done' : ''}"><button class="tick ${x.done ? 'on' : ''}" data-t="${i}">${x.done ? '✓' : ''}</button><input type="text" data-i="${i}" value="${esc(x.t)}"><button class="iconbtn" data-d="${i}" style="width:32px;height:32px;font-size:14px">✕</button></div>`).join('')}</div>
      <div class="chk"><span style="width:26px;text-align:center;color:var(--gold)">＋</span><input type="text" id="ckNew" placeholder="${esc(t('addItem'))}"></div>`;
    const nw = $('#ckNew', body);
    const addNew = (focus) => { const v = nw.value.trim(); if (!v) return; nw.value = ''; n.items.push({ t: v, done: false }); touch(); draw(focus); };
    nw.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); addNew('new'); } };
    nw.onblur = () => addNew();
    $$('[data-t]', body).forEach((b) => (b.onclick = () => { const x = n.items[+b.dataset.t]; x.done = !x.done; touch(); draw(); }));
    $$('[data-d]', body).forEach((b) => (b.onclick = () => { n.items.splice(+b.dataset.d, 1); touch(); draw(); }));
    $$('[data-i]', body).forEach((inp) => (inp.oninput = () => { n.items[+inp.dataset.i].t = inp.value; touch(); }));
    if (focus === 'new') nw.focus();
  };
  draw(n.items.length ? null : 'new');
}
