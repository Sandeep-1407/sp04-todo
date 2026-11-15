/* SP04 pages: Sheets (Excel), Passwords, Photo Locker, Settings */
'use strict';
T.add({
  en: { newSheet: 'New sheet', sheetName: 'Sheet name', importX: 'Open Excel / CSV', noSheets: 'No sheets yet. Make a table with formulas like =SUM(B2:B10).', rows: 'rows', addRow: '+ Row', addCol: '+ Column', clearCell: 'Clear', sumHere: 'Σ Sum', sheetHelp: 'Tip: start with = for a formula. =SUM(A1:A5), =A1*B1, =AVERAGE(), =MIN(), =MAX(), =ROUND(x,2), =IF(A1>100,"Yes","No")',
    tab: 'Tab', renameTab: 'Rename', delTab: 'Delete tab', imported: 'Imported', untitled: 'Untitled',
    site: 'Website / App', user: 'User ID / Email / Mobile', password: 'Password', url: 'Link', gen: 'Make strong password', show: 'Show', noPass: 'No passwords saved. Tap + to add your first one.', passTip: 'All passwords are locked with your PIN and stay only on this phone.', open: 'Open',
    lockerTip: 'Photos you add here are locked with your PIN and are not shown in the Gallery.', webLockerTip: 'Done! Now delete the original photos from your Gallery — the browser cannot delete them. The Android app removes them automatically.',
    addPhotos: 'Add photos', fromGallery: 'Choose from Gallery', noPhotos: 'Locker is empty. Add photos to hide them.', unhide: 'Unhide (back to Gallery)', select: 'Select', selected: 'selected', hidden: 'Hidden', importing: 'Locking {n} photos…', removedFromGallery: 'Removed from Gallery', keptInGallery: 'Original photos were not removed from Gallery', restored: 'Saved back to Gallery', allowPhotos: 'Allow photo access',
    language: 'Language', changePin: 'Change PIN', oldPin: 'Old PIN', newPinL: 'New PIN (4–6 digits)', pinChanged: 'PIN changed', autoLock: 'Lock automatically', al0: 'Immediately', al60: 'After 1 minute', al300: 'After 5 minutes', alNever: 'Never',
    backup: 'Backup', makeBackup: 'Make backup file', restore: 'Restore from backup', backupNote: 'The backup file is locked with your current PIN. Keep it in Google Drive, email or WhatsApp to yourself.', restorePin: 'PIN of that backup', restoreWarn: 'Restoring replaces everything in this app with the backup.', restoreOk: 'Restored. Opening again…', badBackup: 'Wrong PIN or not an SP04 backup file',
    storage: 'Storage used', wipe: 'Delete all data', wipeWarn: 'This deletes everything in SP04 on this phone. Type your PIN to confirm.', about: 'About', notif: 'Reminders', notifOn: 'Notifications are on', getApk: 'Get the Android app', apkNote: 'Android app: locker removes photos from Gallery and reminders work even when the app is closed.' },
  hi: { newSheet: 'नई शीट', sheetName: 'शीट का नाम', importX: 'Excel / CSV खोलें', noSheets: 'अभी कोई शीट नहीं। फ़ॉर्मूले वाली टेबल बनाएँ, जैसे =SUM(B2:B10)।', rows: 'लाइनें', addRow: '+ लाइन', addCol: '+ कॉलम', clearCell: 'मिटाएँ', sumHere: 'Σ जोड़', sheetHelp: 'टिप: फ़ॉर्मूला = से शुरू करें। =SUM(A1:A5), =A1*B1, =AVERAGE(), =MIN(), =MAX(), =ROUND(x,2), =IF(A1>100,"हाँ","नहीं")',
    tab: 'टैब', renameTab: 'नाम बदलें', delTab: 'टैब हटाएँ', imported: 'खुल गई', untitled: 'बिना नाम',
    site: 'वेबसाइट / ऐप', user: 'यूज़र ID / ईमेल / मोबाइल', password: 'पासवर्ड', url: 'लिंक', gen: 'मज़बूत पासवर्ड बनाएँ', show: 'दिखाएँ', noPass: 'कोई पासवर्ड सेव नहीं। + दबाकर पहला जोड़ें।', passTip: 'सारे पासवर्ड आपके PIN से लॉक हैं और सिर्फ़ इसी फ़ोन में रहते हैं।', open: 'खोलें',
    lockerTip: 'यहाँ जोड़ी गई फ़ोटो आपके PIN से लॉक रहती हैं और गैलरी में नहीं दिखतीं।', webLockerTip: 'हो गया! अब गैलरी से असली फ़ोटो ख़ुद डिलीट कर दें — ब्राउज़र उन्हें नहीं हटा सकता। Android ऐप अपने आप हटा देता है।',
    addPhotos: 'फ़ोटो जोड़ें', fromGallery: 'गैलरी से चुनें', noPhotos: 'लॉकर ख़ाली है। फ़ोटो जोड़कर छिपाएँ।', unhide: 'वापस गैलरी में', select: 'चुनें', selected: 'चुनी', hidden: 'छिपी', importing: '{n} फ़ोटो लॉक हो रही हैं…', removedFromGallery: 'गैलरी से हटा दी गईं', keptInGallery: 'असली फ़ोटो गैलरी से नहीं हटीं', restored: 'गैलरी में वापस सेव', allowPhotos: 'फ़ोटो देखने की अनुमति दें',
    language: 'भाषा', changePin: 'PIN बदलें', oldPin: 'पुराना PIN', newPinL: 'नया PIN (4–6 अंक)', pinChanged: 'PIN बदल गया', autoLock: 'अपने आप लॉक', al0: 'तुरंत', al60: '1 मिनट बाद', al300: '5 मिनट बाद', alNever: 'कभी नहीं',
    backup: 'बैकअप', makeBackup: 'बैकअप फ़ाइल बनाएँ', restore: 'बैकअप से वापस लाएँ', backupNote: 'बैकअप फ़ाइल आपके अभी के PIN से लॉक रहती है। इसे Google Drive, ईमेल या WhatsApp पर ख़ुद को भेजकर रखें।', restorePin: 'उस बैकअप का PIN', restoreWarn: 'वापस लाने पर इस ऐप का सारा डेटा बैकअप वाले से बदल जाएगा।', restoreOk: 'वापस आ गया। फिर से खुल रहा है…', badBackup: 'गलत PIN या यह SP04 बैकअप फ़ाइल नहीं',
    storage: 'जगह इस्तेमाल', wipe: 'सारा डेटा मिटाएँ', wipeWarn: 'इससे इस फ़ोन में SP04 का सब कुछ मिट जाएगा। पक्का करने के लिए PIN डालें।', about: 'जानकारी', notif: 'याद दिलाना', notifOn: 'नोटिफ़िकेशन चालू हैं', getApk: 'Android ऐप लें', apkNote: 'Android ऐप: लॉकर फ़ोटो को गैलरी से हटा देता है और ऐप बंद होने पर भी याद दिलाता है।' },
});
const APK_URL = 'https://github.com/Sandeep-1407/sp04-todo/releases/latest/download/SP04-Organizer.apk';

/* ================= Spreadsheet engine ================= */
const colName = (i) => { let s = ''; i++; while (i > 0) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
const colIdx = (s) => { let n = 0; for (const c of s) n = n * 26 + (c.charCodeAt(0) - 64); return n - 1; };
const parseRef = (r) => { const m = /^\$?([A-Z]+)\$?(\d+)$/.exec(r); return m ? { c: colIdx(m[1]), r: +m[2] - 1 } : null; };
const SheetEngine = (tab) => {
  const cache = new Map(), busy = new Set();
  const raw = (ref) => tab.cells[ref] ?? '';
  function val(ref) {
    if (cache.has(ref)) return cache.get(ref);
    if (busy.has(ref)) throw new Error('#CYCLE');
    busy.add(ref);
    let v;
    try {
      const s = raw(ref);
      if (typeof s === 'string' && s.startsWith('=')) v = evalF(s.slice(1));
      else if (s === '' || s == null) v = '';
      else if (typeof s === 'number') v = s;
      else { const n = s.trim().replace(/,/g, ''); v = n !== '' && !isNaN(n) ? +n : s; }
    } catch (e) { v = { err: e.message?.startsWith('#') ? e.message : '#ERR' }; }
    busy.delete(ref); cache.set(ref, v); return v;
  }
  function range(a, b) {
    const p = parseRef(a), q = parseRef(b); if (!p || !q) throw new Error('#REF');
    const out = [];
    for (let r = Math.min(p.r, q.r); r <= Math.max(p.r, q.r); r++) for (let c = Math.min(p.c, q.c); c <= Math.max(p.c, q.c); c++) out.push(val(colName(c) + (r + 1)));
    return out;
  }
  const num = (v) => { if (v && v.err) throw new Error(v.err); if (v === '' || v == null) return 0; if (typeof v === 'boolean') return +v; const n = +v; if (isNaN(n)) throw new Error('#VALUE'); return n; };
  const flat = (args) => args.flat(Infinity);
  const nums = (args) => flat(args).filter((v) => v !== '' && !isNaN(+v) && typeof v !== 'boolean').map(Number);
  const crit = (c) => { const m = /^(<=|>=|<>|=|<|>)?(.*)$/.exec(String(c)); const op = m[1] || '=', rv = m[2]; return (v) => { const a = isNaN(+rv) || rv === '' ? String(v) : +v, b = isNaN(+rv) || rv === '' ? rv : +rv; return op === '=' ? a == b : op === '<>' ? a != b : op === '<' ? a < b : op === '>' ? a > b : op === '<=' ? a <= b : a >= b; }; };
  const FN = {
    SUM: (a) => nums(a).reduce((x, y) => x + y, 0), AVERAGE: (a) => { const n = nums(a); return n.length ? n.reduce((x, y) => x + y, 0) / n.length : 0; },
    MIN: (a) => (nums(a).length ? Math.min(...nums(a)) : 0), MAX: (a) => (nums(a).length ? Math.max(...nums(a)) : 0), COUNT: (a) => nums(a).length, COUNTA: (a) => flat(a).filter((v) => v !== '').length,
    PRODUCT: (a) => nums(a).reduce((x, y) => x * y, 1), ROUND: (a) => { const p = 10 ** num(a[1] ?? 0); return Math.round(num(a[0]) * p) / p; }, ABS: (a) => Math.abs(num(a[0])), INT: (a) => Math.floor(num(a[0])),
    SQRT: (a) => Math.sqrt(num(a[0])), POWER: (a) => num(a[0]) ** num(a[1]), MOD: (a) => num(a[0]) % num(a[1]),
    IF: (a) => (a[0] && a[0] !== '0' ? a[1] ?? true : a[2] ?? false), AND: (a) => flat(a).every(Boolean), OR: (a) => flat(a).some(Boolean), NOT: (a) => !a[0],
    CONCAT: (a) => flat(a).join(''), CONCATENATE: (a) => flat(a).join(''), LEN: (a) => String(a[0] ?? '').length, UPPER: (a) => String(a[0]).toUpperCase(), LOWER: (a) => String(a[0]).toLowerCase(),
    TODAY: () => today(), NOW: () => new Date().toLocaleString(LOCALE()),
    SUMIF: (a) => { const r = a[0], f = crit(a[1]), s = a[2] || a[0]; return r.reduce((x, v, i) => x + (f(v) ? num(s[i]) : 0), 0); },
    COUNTIF: (a) => { const f = crit(a[1]); return a[0].filter((v) => f(v)).length; },
  };
  FN.AVG = FN.AVERAGE;
  function evalF(src) {
    const toks = []; let i = 0;
    while (i < src.length) {
      const c = src[i];
      if (c === ' ') { i++; continue; }
      if (c === '"') { let j = i + 1; while (j < src.length && src[j] !== '"') j++; toks.push({ t: 's', v: src.slice(i + 1, j) }); i = j + 1; continue; }
      const m = /^(\d+\.?\d*|\.\d+)/.exec(src.slice(i)); if (m) { toks.push({ t: 'n', v: +m[1] }); i += m[1].length; continue; }
      const r = /^(\$?[A-Za-z]+\$?\d+)(:(\$?[A-Za-z]+\$?\d+))?/.exec(src.slice(i));
      const f = /^([A-Za-z][A-Za-z0-9.]*)\s*\(/.exec(src.slice(i));
      if (f && !(r && !src.slice(i + r[0].length).trimStart().startsWith('('))) { toks.push({ t: 'f', v: f[1].toUpperCase() }); i += f[0].length; continue; }
      if (r) { toks.push(r[3] ? { t: 'r', a: r[1].toUpperCase(), b: r[3].toUpperCase() } : { t: 'c', v: r[1].toUpperCase() }); i += r[0].length; continue; }
      const b = /^(TRUE|FALSE)/i.exec(src.slice(i)); if (b) { toks.push({ t: 'n', v: /T/i.test(b[1][0]) ? 1 : 0 }); i += b[1].length; continue; }
      const op = /^(<=|>=|<>|[-+*/^&=<>(),%:;])/.exec(src.slice(i)); if (op) { toks.push({ t: 'o', v: op[1] === ';' ? ',' : op[1] }); i += op[1].length; continue; }
      throw new Error('#NAME');
    }
    let p = 0;
    const peek = () => toks[p], take = () => toks[p++];
    const isO = (v) => peek()?.t === 'o' && peek().v === v;
    function cmp() { let a = cat(); while (peek()?.t === 'o' && ['=', '<>', '<', '>', '<=', '>='].includes(peek().v)) { const o = take().v, b = cat(); const x = typeof a === 'string' || typeof b === 'string' ? [String(a), String(b)] : [num(a), num(b)]; a = o === '=' ? x[0] == x[1] : o === '<>' ? x[0] != x[1] : o === '<' ? x[0] < x[1] : o === '>' ? x[0] > x[1] : o === '<=' ? x[0] <= x[1] : x[0] >= x[1]; } return a; }
    function cat() { let a = add(); while (isO('&')) { take(); a = String(a ?? '') + String(add() ?? ''); } return a; }
    function add() { let a = mul(); while (isO('+') || isO('-')) { const o = take().v, b = mul(); a = o === '+' ? num(a) + num(b) : num(a) - num(b); } return a; }
    function mul() { let a = pow(); while (isO('*') || isO('/')) { const o = take().v, b = pow(); if (o === '/' && num(b) === 0) throw new Error('#DIV/0'); a = o === '*' ? num(a) * num(b) : num(a) / num(b); } return a; }
    function pow() { let a = un(); while (isO('^')) { take(); a = num(a) ** num(un()); } return a; }
    function un() { if (isO('-')) { take(); return -num(un()); } if (isO('+')) { take(); return num(un()); } let v = prim(); while (isO('%')) { take(); v = num(v) / 100; } return v; }
    function prim() {
      const k = take(); if (!k) throw new Error('#ERR');
      if (k.t === 'n' || k.t === 's') return k.v;
      if (k.t === 'c') { const v = val(k.v); if (v && v.err) throw new Error(v.err); return v; }
      if (k.t === 'r') return range(k.a, k.b);
      if (k.t === 'f') {
        const args = [];
        if (!isO(')')) { do { if (isO(',')) { take(); } const a = cmp(); args.push(a); } while (isO(',')); }
        if (!isO(')')) throw new Error('#ERR'); take();
        const fn = FN[k.v]; if (!fn) throw new Error('#NAME');
        const v = fn(args); if (Array.isArray(v)) throw new Error('#VALUE'); return v;
      }
      if (k.t === 'o' && k.v === '(') { const v = cmp(); if (!isO(')')) throw new Error('#ERR'); take(); return v; }
      throw new Error('#ERR');
    }
    const v = cmp(); if (p < toks.length) throw new Error('#ERR');
    if (Array.isArray(v)) throw new Error('#VALUE');
    return typeof v === 'boolean' ? (v ? 'TRUE' : 'FALSE') : v;
  }
  return { val, show(ref) { const v = val(ref); if (v && v.err) return { s: v.err, err: true }; if (typeof v === 'number') return { s: (Math.round(v * 1e6) / 1e6).toLocaleString('en-IN', { maximumFractionDigits: 6 }), num: true }; return { s: String(v ?? '') }; } };
};

const Sheets = {
  newRec(name) { return { kind: 'sheet', name: name || t('untitled'), tabs: [{ name: 'Sheet1', cells: {}, rows: 40, cols: 8 }], active: 0 }; },
  async importFile() {
    const f = await keepUnlocked(() => pickFile('.xlsx,.xls,.csv,.ods')); if (!f) return;
    try {
      const X = await loadXLSX(); const wb = X.read(await f.arrayBuffer(), { cellFormula: true });
      const rec = Sheets.newRec(f.name.replace(/\.[^.]+$/, '')); rec.tabs = [];
      for (const sn of wb.SheetNames) {
        const ws = wb.Sheets[sn], cells = {}; let mr = 0, mc = 0;
        for (const [k, c] of Object.entries(ws)) { if (k[0] === '!') continue; const p = parseRef(k); if (!p) continue; mr = Math.max(mr, p.r); mc = Math.max(mc, p.c); cells[k] = c.f ? '=' + c.f : c.v instanceof Date ? ymd(c.v) : c.v; }
        rec.tabs.push({ name: sn.slice(0, 30), cells, rows: Math.max(40, mr + 6), cols: Math.max(8, mc + 3) });
      }
      if (!rec.tabs.length) rec.tabs.push({ name: 'Sheet1', cells: {}, rows: 40, cols: 8 });
      await DB.save(rec); toast(t('imported')); go('#/sheet/' + rec.id);
    } catch (e) { toast('✖ ' + (e.message || e), 4000); }
  },
  async exportFile(rec) {
    try {
      const X = await loadXLSX(); const wb = X.utils.book_new();
      rec.tabs.forEach((tb, i) => {
        const eng = SheetEngine(tb), ws = {}; let mr = 0, mc = 0;
        for (const [k, v] of Object.entries(tb.cells)) {
          if (v === '' || v == null) continue; const p = parseRef(k); mr = Math.max(mr, p.r); mc = Math.max(mc, p.c);
          if (typeof v === 'string' && v.startsWith('=')) { const r = eng.val(k); ws[k] = { f: v.slice(1), v: r?.err ? 0 : r, t: typeof r === 'number' ? 'n' : 's' }; }
          else { const n = typeof v === 'number' ? v : String(v).trim() !== '' && !isNaN(String(v).replace(/,/g, '')) ? +String(v).replace(/,/g, '') : null; ws[k] = n != null ? { v: n, t: 'n' } : { v: String(v), t: 's' }; }
        }
        ws['!ref'] = `A1:${colName(mc)}${mr + 1}`;
        X.utils.book_append_sheet(wb, ws, (tb.name || 'Sheet' + (i + 1)).slice(0, 31));
      });
      await saveFile((rec.name || 'sheet').replace(/[\\/:*?"<>|]/g, '_') + '.xlsx', new Blob([X.write(wb, { bookType: 'xlsx', type: 'array' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    } catch (e) { toast('✖ ' + (e.message || e), 4000); }
  },
};
PAGES.sheets = {
  icon: '📊',
  render(el) {
    topAction('📥', t('importX'), () => Sheets.importFile());
    const list = DB.all('sheet').sort((a, b) => b.upd - a.upd);
    el.innerHTML = `<div class="row" style="margin-bottom:12px"><button class="btn gold" id="sNew">＋ ${esc(t('newSheet'))}</button><button class="btn ghost" id="sImp">📥 ${esc(t('importX'))}</button></div>` +
      (list.length ? `<div class="card list">${list.map((s) => `<div class="it" data-sid="${s.id}"><div class="ic">📊</div><div class="tx"><b>${esc(s.name)}</b><small>${s.tabs.length} ${esc(t('tab'))} · ${esc(fmtDate(s.upd))}</small></div></div>`).join('')}</div>`
        : `<div class="card empty"><div>📊</div>${esc(t('noSheets'))}</div>`);
    const mk = () => openModal(t('newSheet'), `<input class="f" id="snm" placeholder="${esc(t('sheetName'))}"><button class="btn gold wide" id="sok" style="margin-top:12px">✔ ${esc(t('save'))}</button>`, (b) => {
      setTimeout(() => $('#snm', b)?.focus(), 100);
      $('#sok', b).onclick = async () => { const r = Sheets.newRec($('#snm', b).value.trim()); await DB.save(r); await closeModal(); go('#/sheet/' + r.id); };
    });
    $('#sNew').onclick = mk; $('#sImp').onclick = () => Sheets.importFile();
    $$('[data-sid]', el).forEach((r) => (r.onclick = () => go('#/sheet/' + r.dataset.sid)));
    fab(mk);
  },
};
PAGES.sheet = {
  menuKey: 'sheets',
  title(rest) { return DB.get(rest[0])?.name || t('sheets'); },
  render(el, [id]) {
    const rec = DB.get(id); if (!rec) { go('#/sheets'); return; }
    $$('#menu a').forEach((a) => a.classList.toggle('on', a.dataset.k === 'sheets'));
    let tab = rec.tabs[rec.active || 0] || rec.tabs[0], sel = 'A1', timer;
    const touch = () => { clearTimeout(timer); timer = setTimeout(() => DB.save(rec), 500); };
    App.flush = () => { clearTimeout(timer); return DB.save(rec); };
    App.leave = App.flush;
    topAction('✏️', t('renameTab'), () => { const n = prompt(t('sheetName'), rec.name); if (n) { rec.name = n.trim(); $('#pageTitle').textContent = rec.name; touch(); } });
    topAction('📤', 'Excel', () => Sheets.exportFile(rec));
    topAction('🗑', t('del'), async () => { if (await ask(t('delSure'), t('del'))) { clearTimeout(timer); App.leave = null; App.flush = null; await DB.del(rec.id); go('#/sheets'); } });
    el.innerHTML = `<div class="sbar"><span class="ref" id="sRef">A1</span><input class="f" id="sIn" placeholder="= / 123 / text" autocomplete="off"><button class="btn gold sm" id="sOk">✔</button></div>
      <div class="row" style="margin-bottom:8px;gap:6px"><button class="btn ghost sm" id="aRow">${esc(t('addRow'))}</button><button class="btn ghost sm" id="aCol">${esc(t('addCol'))}</button><button class="btn ghost sm" id="aSum">${esc(t('sumHere'))}</button><button class="btn ghost sm" id="aClr">${esc(t('clearCell'))}</button></div>
      <div class="swrap" id="sw"></div><div class="tabs" id="sTabs"></div><p class="muted small">${esc(t('sheetHelp'))}</p>`;
    const sw = $('#sw', el), inp = $('#sIn', el);
    const draw = () => {
      const eng = SheetEngine(tab);
      let h = '<table class="ss"><thead><tr><th class="rh"></th>' + [...Array(tab.cols)].map((_, c) => `<th>${colName(c)}</th>`).join('') + '</tr></thead><tbody>';
      for (let r = 0; r < tab.rows; r++) {
        h += `<tr><td class="rh">${r + 1}</td>`;
        for (let c = 0; c < tab.cols; c++) { const ref = colName(c) + (r + 1); const d = tab.cells[ref] !== undefined && tab.cells[ref] !== '' ? eng.show(ref) : { s: '' }; h += `<td data-ref="${ref}" class="${d.num ? 'num' : ''} ${d.err ? 'err' : ''} ${ref === sel ? 'sel' : ''}"><span class="v">${esc(d.s)}</span></td>`; }
        h += '</tr>';
      }
      sw.innerHTML = h + '</tbody></table>';
      $('#sTabs', el).innerHTML = rec.tabs.map((x, i) => `<button class="chip ${x === tab ? 'on' : ''}" data-tb="${i}">${esc(x.name)}</button>`).join('') + '<button class="chip" data-tb="new">＋</button>';
    };
    const select = (ref, focus) => { sel = ref; $('#sRef', el).textContent = ref; const v = tab.cells[ref]; inp.value = v ?? ''; $$('td.sel', sw).forEach((x) => x.classList.remove('sel')); sw.querySelector(`[data-ref="${ref}"]`)?.classList.add('sel'); if (focus) inp.focus(); };
    const commit = (move) => {
      edited = false; const v = inp.value; if (v === '') delete tab.cells[sel]; else tab.cells[sel] = v; touch();
      const p = parseRef(sel); let nr = p.r, nc = p.c; if (move === 'down') nr++; if (move === 'right') nc++;
      if (nr >= tab.rows) tab.rows = nr + 10; if (nc >= tab.cols) tab.cols = nc + 1;
      const y = sw.scrollTop, x = sw.scrollLeft; draw(); sw.scrollTop = y; sw.scrollLeft = x; select(colName(nc) + (nr + 1), !!move);
    };
    let edited = false; inp.addEventListener('input', () => (edited = true));
    sw.onclick = (e) => { const td = e.target.closest('td[data-ref]'); if (!td) return; if (edited) { edited = false; commit(); } select(td.dataset.ref); };
    sw.ondblclick = (e) => { const td = e.target.closest('td[data-ref]'); if (td) select(td.dataset.ref, true); };
    inp.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); commit('down'); } else if (e.key === 'Tab') { e.preventDefault(); commit('right'); } else if (e.key === 'Escape') select(sel); };
    $('#sOk', el).onclick = () => commit('down');
    $('#aRow', el).onclick = () => { tab.rows += 10; touch(); draw(); };
    $('#aCol', el).onclick = () => { tab.cols += 1; touch(); draw(); };
    $('#aClr', el).onclick = () => { inp.value = ''; commit(); };
    $('#aSum', el).onclick = () => { const p = parseRef(sel); let top = p.r - 1; while (top >= 0 && tab.cells[colName(p.c) + (top + 1)] !== undefined && tab.cells[colName(p.c) + (top + 1)] !== '') top--; if (top + 1 >= p.r) { toast('↑ ?'); return; } inp.value = `=SUM(${colName(p.c)}${top + 2}:${colName(p.c)}${p.r})`; commit(); };
    $('#sTabs', el).onclick = (e) => {
      const b = e.target.closest('[data-tb]'); if (!b) return;
      if (b.dataset.tb === 'new') { rec.tabs.push({ name: 'Sheet' + (rec.tabs.length + 1), cells: {}, rows: 40, cols: 8 }); rec.active = rec.tabs.length - 1; }
      else if (rec.tabs[+b.dataset.tb] === tab) {
        openModal(tab.name, `<input class="f" id="tbn" value="${esc(tab.name)}"><div class="row" style="margin-top:12px">${rec.tabs.length > 1 ? `<button class="btn red" id="tbd">🗑 ${esc(t('delTab'))}</button>` : ''}<span class="grow"></span><button class="btn gold" id="tbs">✔ ${esc(t('save'))}</button></div>`, (m) => {
          $('#tbs', m).onclick = () => { tab.name = $('#tbn', m).value.trim() || tab.name; touch(); closeModal(); draw(); };
          $('#tbd', m)?.addEventListener('click', async () => { if (await ask(t('delSure'), t('del'))) { rec.tabs.splice(rec.tabs.indexOf(tab), 1); rec.active = 0; tab = rec.tabs[0]; touch(); draw(); select('A1'); } });
        });
        return;
      } else rec.active = +b.dataset.tb;
      tab = rec.tabs[rec.active]; touch(); draw(); select('A1');
    };
    draw(); select('A1');
  },
};

/* ================= Passwords ================= */
let passQ = '';
const Pass = {
  gen(len = 16) { const sets = ['ABCDEFGHJKLMNPQRSTUVWXYZ', 'abcdefghijkmnopqrstuvwxyz', '23456789', '@#$%&*!?-_=+']; const all = sets.join(''); const r = crypto.getRandomValues(new Uint32Array(len)); let s = sets.map((x, i) => x[r[i] % x.length]).join(''); for (let i = sets.length; i < len; i++) s += all[r[i] % all.length]; return s.split('').sort(() => crypto.getRandomValues(new Uint8Array(1))[0] - 128).join(''); },
  async copy(s) { try { await navigator.clipboard.writeText(s); toast(t('copied')); } catch { toast('✖'); } },
  view(p) {
    openModal(p.site, `<div class="list">
      <div class="it"><div class="ic">👤</div><div class="tx"><small>${esc(t('user'))}</small><b>${esc(p.user || '—')}</b></div><button class="btn ghost sm" data-cp="user">📋</button></div>
      <div class="it"><div class="ic">🔑</div><div class="tx"><small>${esc(t('password'))}</small><b class="pw" id="pv">••••••••••</b></div><button class="btn ghost sm" id="pshow">👁</button><button class="btn ghost sm" data-cp="pwd">📋</button></div>
      ${p.url ? `<div class="it"><div class="ic">🔗</div><div class="tx"><small>${esc(t('url'))}</small><b>${esc(p.url)}</b></div><a class="btn ghost sm" href="${esc(/^https?:/i.test(p.url) ? p.url : 'https://' + p.url)}" target="_blank" rel="noopener">${esc(t('open'))}</a></div>` : ''}
      ${p.note ? `<div class="it"><div class="ic">🗒️</div><div class="tx" style="white-space:pre-wrap"><small>${esc(t('note'))}</small>${esc(p.note)}</div></div>` : ''}</div>
      <div class="row" style="margin-top:14px"><button class="btn red" id="pdel">🗑 ${esc(t('del'))}</button><span class="grow"></span><button class="btn gold" id="pedit">✏️ ${esc(t('edit'))}</button></div>`, (b) => {
      $$('[data-cp]', b).forEach((x) => (x.onclick = () => Pass.copy(p[x.dataset.cp] || '')));
      $('#pshow', b).onclick = () => { const v = $('#pv', b); v.textContent = v.textContent.startsWith('•') ? p.pwd : '••••••••••'; };
      $('#pedit', b).onclick = async () => { await closeModal(); Pass.form(p); };
      $('#pdel', b).onclick = async () => { if (await ask(t('delSure'), t('del'))) { await DB.del(p.id); toast(t('deleted')); App.refresh(); } };
    });
  },
  form(p) {
    p = p ? { ...p } : { kind: 'pass', site: '', user: '', pwd: '', url: '', note: '' };
    openModal(p.id ? t('edit') : `${t('add')} · ${t('password')}`, `
      <label class="l">${esc(t('site'))}</label><input class="f" id="ps" value="${esc(p.site)}" placeholder="Gmail, SBI, Facebook…">
      <label class="l">${esc(t('user'))}</label><input class="f" id="pu" value="${esc(p.user)}" autocomplete="off">
      <label class="l">${esc(t('password'))}</label><div class="row"><input class="f grow pw" id="pp" value="${esc(p.pwd)}" autocomplete="off"><button class="btn ghost sm" id="pg" title="${esc(t('gen'))}">🎲</button></div>
      <label class="l">${esc(t('url'))}</label><input class="f" id="pl" value="${esc(p.url)}" placeholder="https://">
      <label class="l">${esc(t('note'))}</label><textarea class="f" id="pn" rows="2" placeholder="PIN hint, security question…">${esc(p.note)}</textarea>
      <button class="btn gold wide" id="psv" style="margin-top:14px">✔ ${esc(t('save'))}</button>`, (b) => {
      if (!p.id) setTimeout(() => $('#ps', b)?.focus(), 120);
      $('#pg', b).onclick = () => { $('#pp', b).value = Pass.gen(); toast(t('gen') + ' ✓'); };
      $('#psv', b).onclick = async () => {
        p.site = $('#ps', b).value.trim(); if (!p.site) { $('#ps', b).focus(); return; }
        p.user = $('#pu', b).value.trim(); p.pwd = $('#pp', b).value; p.url = $('#pl', b).value.trim(); p.note = $('#pn', b).value.trim();
        await DB.save(p); closeModal(); toast(t('saved')); App.refresh();
      };
    });
  },
};
PAGES.pass = {
  icon: '🔐',
  render(el) {
    const q = passQ.toLowerCase();
    const list = DB.all('pass').filter((p) => !q || (p.site + ' ' + p.user + ' ' + p.url).toLowerCase().includes(q)).sort((a, b) => a.site.localeCompare(b.site));
    el.innerHTML = `<div class="banner">🔒 ${esc(t('passTip'))}</div><div class="search" style="margin-bottom:10px"><input class="f" id="pq" placeholder="${esc(t('search'))}" value="${esc(passQ)}"></div>` +
      (list.length ? `<div class="card list">${list.map((p) => `<div class="it" data-pid="${p.id}"><div class="ic" style="font-weight:800;color:var(--gold2)">${esc((p.site[0] || '?').toUpperCase())}</div><div class="tx"><b>${esc(p.site)}</b><small>${esc(p.user || '')}</small></div><button class="btn ghost sm" data-cpw="${p.id}">🔑📋</button></div>`).join('')}</div>`
        : `<div class="card empty"><div>🔐</div>${esc(t('noPass'))}</div>`);
    const pq = $('#pq', el); pq.oninput = () => { passQ = pq.value; const pos = pq.selectionStart; App.refresh(); const x = $('#pq'); x.focus(); x.setSelectionRange(pos, pos); };
    $$('[data-pid]', el).forEach((r) => (r.onclick = (e) => { if (e.target.closest('[data-cpw]')) return; Pass.view(DB.get(r.dataset.pid)); }));
    $$('[data-cpw]', el).forEach((b) => (b.onclick = () => Pass.copy(DB.get(b.dataset.cpw).pwd)));
    fab(() => Pass.form());
  },
};

/* ================= Photo Locker ================= */
const Locker = {
  P: () => Plug('Locker'),
  urls: new Map(),
  async full(rec) { if (Locker.urls.has(rec.id)) return Locker.urls.get(rec.id); const b = await DB.getBlob(rec.blob); const u = URL.createObjectURL(new Blob([b], { type: rec.type || 'image/jpeg' })); Locker.urls.set(rec.id, u); return u; },
  async addFiles(items) {   // items: [{blob, name, type}]
    let n = 0;
    toast(t('importing', { n: items.length }), 60000);
    for (const it of items) {
      try {
        const bytes = new Uint8Array(await it.blob.arrayBuffer());
        const th = await imageToDataURL(it.blob, 360, 0.7);
        const blob = await DB.putBlob(bytes);
        await DB.save({ kind: 'photo', name: it.name || 'photo.jpg', type: it.type || it.blob.type || 'image/jpeg', size: bytes.length, w: th.w, h: th.h, thumb: th.url, blob, blobs: [blob], taken: it.date || Date.now() });
        n++;
      } catch (e) { console.warn(e); }
    }
    $('#toast').classList.add('hidden');
    return n;
  },
  async addWeb() {
    const files = await keepUnlocked(() => pickFile('image/*', true)); if (!files?.length) return;
    const n = await Locker.addFiles(files.map((f) => ({ blob: f, name: f.name, type: f.type, date: f.lastModified })));
    App.refresh(); if (n) openModal('✅ ' + n + ' ' + t('hidden'), `<p>${esc(t('webLockerTip'))}</p><button class="btn gold wide" data-x2>${esc(t('done'))}</button>`, (b) => ($('[data-x2]', b).onclick = () => closeModal()));
  },
  async addNative() {
    const P = Locker.P();
    let ok = (await P.checkAccess()).granted; if (!ok) ok = (await P.requestAccess()).granted;
    if (!ok) { toast(t('allowPhotos'), 4000); return; }
    const { images } = await P.listImages();
    const sel = new Set(); let folder = '';
    const folders = [...new Set(images.map((x) => x.folder || ''))];
    const box = openModal(t('fromGallery'), `<div class="chips" id="gf" style="margin-bottom:8px"></div><div class="pgrid" id="gg" style="max-height:60vh;overflow:auto"></div><button class="btn gold wide" id="gok" style="margin-top:12px">🔒 ${esc(t('hidden'))} (0)</button>`);
    const io = new IntersectionObserver((ents) => ents.forEach(async (e) => { if (!e.isIntersecting) return; io.unobserve(e.target); try { const r = await P.thumbnail({ id: e.target.dataset.id }); e.target.innerHTML = `<img src="${r.data}" alt="">`; } catch {} }), { root: $('#gg', box), rootMargin: '200px' });
    const draw = () => {
      $('#gf', box).innerHTML = `<button class="chip ${!folder ? 'on' : ''}" data-f="">${esc(t('all'))}</button>` + folders.map((f) => `<button class="chip ${folder === f ? 'on' : ''}" data-f="${esc(f)}">${esc(f || '—')}</button>`).join('');
      $('#gg', box).innerHTML = images.filter((x) => !folder || x.folder === folder).slice(0, 600).map((x) => `<div class="ph ${sel.has(x.id) ? 'sel' : ''}" data-id="${x.id}"></div>`).join('');
      $$('#gg .ph', box).forEach((d) => io.observe(d));
      $('#gok', box).textContent = `🔒 ${t('hidden')} (${sel.size})`;
    };
    $('#gf', box).onclick = (e) => { const b = e.target.closest('[data-f]'); if (b) { folder = b.dataset.f; draw(); } };
    $('#gg', box).onclick = (e) => { const d = e.target.closest('.ph'); if (!d) return; const id = d.dataset.id; sel.has(id) ? sel.delete(id) : sel.add(id); d.classList.toggle('sel'); $('#gok', box).textContent = `🔒 ${t('hidden')} (${sel.size})`; };
    $('#gok', box).onclick = async () => {
      if (!sel.size) return;
      const picked = images.filter((x) => sel.has(x.id)); closeModal();
      const items = [];
      for (const x of picked) { try { const r = await P.readImage({ uri: x.uri }); items.push({ blob: new Blob([b64ToBytes(r.data)], { type: x.mime }), name: x.name, type: x.mime, date: x.date * 1000 }); } catch (e) { console.warn(e); } }
      const n = await Locker.addFiles(items);
      let removed = false;
      if (n) { try { removed = (await P.deleteImages({ uris: picked.map((x) => x.uri) })).deleted; } catch {} }
      toast(`✅ ${n} ${t('hidden')} · ${removed ? t('removedFromGallery') : t('keptInGallery')}`, 4500);
      App.refresh();
    };
    draw();
  },
  async unhide(rec) {
    const bytes = await DB.getBlob(rec.blob);
    if (NATIVE) await Locker.P().saveImage({ data: bytesToB64(bytes), name: rec.name, mime: rec.type || 'image/jpeg' });
    else await saveFile(rec.name || 'photo.jpg', new Blob([bytes], { type: rec.type }));
    await DB.del(rec.id); Locker.urls.delete(rec.id); toast(t('restored'));
  },
  async viewer(list, idx) {
    const v = document.createElement('div'); v.id = 'viewer';
    v.innerHTML = `<div class="vt"><button class="iconbtn" data-v="x">✕</button><span id="vn"></span><button class="iconbtn" data-v="un" title="${esc(t('unhide'))}">📤</button><button class="iconbtn" data-v="del">🗑</button></div><div class="vi" id="vi"><img alt=""></div>`;
    document.body.appendChild(v); history.pushState({ ...(history.state || {}), viewer: 1 }, '');
    const img = $('img', v);
    const show = async () => { const r = list[idx]; $('#vn', v).textContent = `${idx + 1}/${list.length} · ${r.name || ''}`; img.src = r.thumb; img.src = await Locker.full(r); };
    const close = () => { v.remove(); window.removeEventListener('popstate', onPop); App.refresh(); };
    const onPop = () => { if (!history.state?.viewer) close(); }; window.addEventListener('popstate', onPop);
    let sx = 0; const vi = $('#vi', v);
    vi.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
    vi.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) { idx = (idx + (dx < 0 ? 1 : -1) + list.length) % list.length; show(); } });
    vi.onclick = (e) => { const x = e.clientX / innerWidth; if (x > 0.75) { idx = (idx + 1) % list.length; show(); } else if (x < 0.25) { idx = (idx - 1 + list.length) % list.length; show(); } };
    v.querySelector('.vt').onclick = async (e) => {
      const a = e.target.closest('[data-v]')?.dataset.v; if (!a) return;
      if (a === 'x') history.back();
      if (a === 'un' || a === 'del') {
        if (!(await ask(a === 'del' ? t('delSure') : t('unhide') + '?', a === 'del' ? t('del') : t('yes'), a === 'del'))) return;
        const r = list[idx]; if (a === 'un') await Locker.unhide(r); else { await DB.del(r.id); toast(t('deleted')); }
        list.splice(idx, 1); if (!list.length) { history.back(); return; } idx = Math.min(idx, list.length - 1); show();
      }
    };
    show();
  },
};
let lockSel = null;
PAGES.locker = {
  icon: '🖼️',
  render(el) {
    const list = DB.all('photo').sort((a, b) => b.ts - a.ts);
    if (list.length) topAction(lockSel ? '✕' : '☑️', t('select'), () => { lockSel = lockSel ? null : new Set(); App.refresh(); });
    el.innerHTML = `<div class="banner">🔒 ${esc(t('lockerTip'))}${NATIVE ? '' : `<br><small class="muted">${esc(t('apkNote'))}</small>`}</div>
      ${lockSel ? `<div class="row" style="margin-bottom:10px"><b class="grow">${lockSel.size} ${esc(t('selected'))}</b><button class="btn ghost sm" id="lsUn">📤 ${esc(t('unhide'))}</button><button class="btn red sm" id="lsDel">🗑</button></div>` : ''}
      ${list.length ? `<div class="pgrid">${list.map((p, i) => `<div class="ph ${lockSel?.has(p.id) ? 'sel' : ''}" data-i="${i}"><img src="${p.thumb}" alt="" loading="lazy"></div>`).join('')}</div>` : `<div class="card empty"><div>🖼️</div>${esc(t('noPhotos'))}</div>`}`;
    $$('.ph[data-i]', el).forEach((d) => (d.onclick = () => {
      const p = list[+d.dataset.i];
      if (lockSel) { lockSel.has(p.id) ? lockSel.delete(p.id) : lockSel.add(p.id); App.refresh(); } else Locker.viewer(list.slice(), +d.dataset.i);
    }));
    $('#lsUn')?.addEventListener('click', async () => { if (!lockSel.size || !(await ask(t('unhide') + '?', t('yes'), false))) return; for (const id of lockSel) await Locker.unhide(DB.get(id)); lockSel = null; App.refresh(); });
    $('#lsDel')?.addEventListener('click', async () => { if (!lockSel.size || !(await ask(t('delSure'), t('del')))) return; for (const id of lockSel) await DB.del(id); lockSel = null; App.refresh(); });
    fab(() => (NATIVE ? Locker.addNative() : Locker.addWeb()));
  },
};

/* ================= Settings ================= */
PAGES.settings = {
  icon: '⚙️',
  async render(el) {
    const al = LS.get('autolock', 60);
    el.innerHTML = `
      <div class="card"><h3>🌐 ${esc(t('language'))}</h3><div class="chips"><button class="chip ${lang === 'hi' ? 'on' : ''}" data-l="hi">हिंदी</button><button class="chip ${lang === 'en' ? 'on' : ''}" data-l="en">English</button></div></div>
      <div class="card"><h3>🔒 PIN</h3>
        <div class="toggle"><div>${esc(t('autoLock'))}</div><select class="f" id="al" style="width:auto">${[[0, 'al0'], [60, 'al60'], [300, 'al300'], [-1, 'alNever']].map(([v, k]) => `<option value="${v}" ${al === v ? 'selected' : ''}>${esc(t(k))}</option>`).join('')}</select></div>
        <div class="toggle"><div>${esc(t('changePin'))}</div><button class="btn ghost sm" id="cp">🔑 ${esc(t('changePin'))}</button></div></div>
      <div class="card"><h3>💾 ${esc(t('backup'))}</h3><p class="muted small" style="margin-top:0">${esc(t('backupNote'))}</p>
        <div class="row"><button class="btn gold" id="bk">💾 ${esc(t('makeBackup'))}</button><button class="btn ghost" id="rs">♻️ ${esc(t('restore'))}</button></div></div>
      <div class="card"><h3>🔔 ${esc(t('notif'))}</h3><div id="nst" class="muted small"></div></div>
      ${NATIVE ? '' : `<div class="card"><h3>📲 ${esc(t('getApk'))}</h3><p class="muted small" style="margin-top:0">${esc(t('apkNote'))}</p><a class="btn gold" href="${APK_URL}" target="_blank" rel="noopener">⬇ APK</a></div>`}
      <div class="card"><h3>ℹ️ ${esc(t('about'))}</h3><div class="small muted" id="st"></div><p class="small muted">SP04 v1.0 · ${esc(t('footer'))}</p><p class="small muted">Created by - Sandeep Kumar from Sandeep Jan Seva Kendra, Mob no. 8299430081</p>
        <button class="btn red sm" id="wipe">⚠ ${esc(t('wipe'))}</button></div>`;
    $$('[data-l]', el).forEach((b) => (b.onclick = () => App.setLang(b.dataset.l)));
    $('#al', el).onchange = (e) => LS.set('autolock', +e.target.value);
    $('#cp', el).onclick = () => openModal(t('changePin'), `<label class="l">${esc(t('oldPin'))}</label><input class="f" id="o" type="password" inputmode="numeric" maxlength="6"><label class="l">${esc(t('newPinL'))}</label><input class="f" id="n1" type="password" inputmode="numeric" maxlength="6"><label class="l">${esc(t('againPin'))}</label><input class="f" id="n2" type="password" inputmode="numeric" maxlength="6"><div class="warnbox" style="margin-top:12px">${esc(t('pinWarn'))}</div><button class="btn gold wide" id="ok">✔ ${esc(t('save'))}</button>`, (b) => {
      $('#ok', b).onclick = async () => {
        const o = $('#o', b).value, a = $('#n1', b).value, c = $('#n2', b).value;
        if (!/^\d{4,6}$/.test(a)) { toast(t('newPinL')); return; } if (a !== c) { toast(t('pinMismatch')); return; }
        if (await CR.changePin(o, a)) { closeModal(); toast(t('pinChanged')); } else toast(t('wrongPin'));
      };
    });
    $('#bk', el).onclick = async () => { await Backup.export(); LS.set('lastBackup', Date.now()); };
    $('#rs', el).onclick = async () => {
      const f = await keepUnlocked(() => pickFile('.sp04,application/json,*/*')); if (!f) return;
      openModal(t('restore'), `<div class="warnbox">${esc(t('restoreWarn'))}</div><label class="l">${esc(t('restorePin'))}</label><input class="f" id="rp" type="password" inputmode="numeric" maxlength="6"><button class="btn gold wide" id="rok" style="margin-top:12px">♻️ ${esc(t('restore'))}</button>`, (b) => {
        $('#rok', b).onclick = async () => {
          try { if (await Backup.import(f, $('#rp', b).value)) { toast(t('restoreOk')); setTimeout(() => location.reload(), 800); } else toast(t('badBackup'), 3500); } catch { toast(t('badBackup'), 3500); }
        };
      });
    };
    const nst = $('#nst', el);
    const ok = await Rem.perm(false).catch(() => false);
    nst.innerHTML = ok ? '✅ ' + esc(t('notifOn')) : `${esc(NATIVE ? t('notifOff') : t('notifWeb'))}<br><button class="btn gold sm" id="na" style="margin-top:8px">${esc(t('allowNotif'))}</button>`;
    $('#na', el)?.addEventListener('click', async () => { await Rem.perm(true); await Rem.resyncAll(); App.refresh(); });
    try { const e = await navigator.storage?.estimate?.(); if (e) $('#st', el).textContent = `${t('storage')}: ${(e.usage / 1048576).toFixed(1)} MB`; } catch {}
    $('#wipe', el).onclick = () => openModal(t('wipe'), `<div class="warnbox">${esc(t('wipeWarn'))}</div><input class="f" id="wp" type="password" inputmode="numeric" maxlength="6" placeholder="PIN"><button class="btn red wide" id="wok" style="margin-top:12px">⚠ ${esc(t('wipe'))}</button>`, (b) => {
      $('#wok', b).onclick = async () => {
        const box = await IDB.get('meta', 'keybox');
        if (!(await CR.unlock($('#wp', b).value, box))) { toast(t('wrongPin')); return; }
        for (const tk of DB.all('task')) await Rem.cancel(tk);
        await IDB.clear('rec'); await IDB.clear('blob'); await IDB.clear('meta'); localStorage.clear(); location.reload();
      };
    });
  },
};
// ask the browser to keep our data (not auto-clear when space is low)
try { navigator.storage?.persist?.(); } catch {}
