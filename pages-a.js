/* SP04 pages: Home, Daily expenses, Calendar & To-do */
'use strict';
T.add({
  en: { hello: 'Namaste', quick: 'Quick add', addExp: 'Expense', addTask: 'Task', addNote: 'Note', todayTasks: "Today's tasks", noTasks: 'No tasks for today 🎉', spent: 'Spent', spentToday: 'Spent today', spentMonth: 'This month',
    income: 'Income', expense: 'Expense', balance: 'Balance', recentNotes: 'Recent notes', seeAll: 'See all', backupTip: 'No backup in the last 7 days. Make one in Settings so your data is safe if the phone is lost.',
    amount: 'Amount', date: 'Date', category: 'Category', mode: 'Paid by', note: 'Note', newCat: '+ New', catName: 'Category name', list: 'List', summary: 'Summary', excel: 'Excel', noExp: 'No entries this month. Tap + to add.',
    dayAvg: 'Daily average', byMode: 'By payment mode', byCat: 'By category', entries: 'entries', exportDone: 'Excel file ready', topCat: 'Most spent on',
    c_food: 'Food', c_grocery: 'Grocery', c_travel: 'Travel / Fuel', c_bills: 'Bills', c_shop: 'Shopping', c_health: 'Health', c_edu: 'Education', c_rent: 'Rent', c_fun: 'Fun', c_gift: 'Gifts', c_other: 'Other', c_salary: 'Salary', c_business: 'Business', c_in_other: 'Other income',
    m_cash: 'Cash', m_upi: 'UPI', m_card: 'Card', m_bank: 'Bank',
    calendar: 'Calendar', todo: 'To-do list', t_today: 'Today', t_up: 'Upcoming', t_all: 'All', t_done: 'Completed', title: 'Title', time: 'Time', repeat: 'Repeat', r_none: 'Once', r_day: 'Every day', r_week: 'Every week', r_month: 'Every month',
    priority: 'Priority', p0: 'Low', p1: 'Normal', p2: 'High', remind: 'Remind me at this time', overdue: 'Overdue', taskTitlePh: 'What needs to be done?', noDay: 'Nothing on this day.', dayExp: 'Expenses this day', dayDiary: 'Diary', openDiary: 'Write diary',
    notifOff: 'Turn on notifications to get reminders.', notifWeb: 'In the browser, reminders come only while SP04 is open. The Android app reminds you even when closed.', allowNotif: 'Allow notifications', needTitle: 'Write a title', needAmt: 'Enter amount' },
  hi: { hello: 'नमस्ते', quick: 'जल्दी जोड़ें', addExp: 'ख़र्चा', addTask: 'काम', addNote: 'नोट', todayTasks: 'आज के काम', noTasks: 'आज कोई काम नहीं 🎉', spent: 'ख़र्च', spentToday: 'आज का ख़र्च', spentMonth: 'इस महीने',
    income: 'आमदनी', expense: 'ख़र्चा', balance: 'बचत', recentNotes: 'हाल के नोट्स', seeAll: 'सब देखें', backupTip: 'पिछले 7 दिन में बैकअप नहीं बना। सेटिंग में बैकअप बना लें ताकि फ़ोन खोने पर भी डेटा सुरक्षित रहे।',
    amount: 'रकम', date: 'तारीख़', category: 'किस पर', mode: 'कैसे दिया', note: 'नोट', newCat: '+ नया', catName: 'नाम लिखें', list: 'लिस्ट', summary: 'हिसाब', excel: 'Excel', noExp: 'इस महीने कोई एंट्री नहीं। + दबाकर जोड़ें।',
    dayAvg: 'रोज़ का औसत', byMode: 'पेमेंट के हिसाब से', byCat: 'किस पर कितना', entries: 'एंट्री', exportDone: 'Excel फ़ाइल तैयार', topCat: 'सबसे ज़्यादा',
    c_food: 'खाना', c_grocery: 'किराना', c_travel: 'सफ़र / पेट्रोल', c_bills: 'बिल', c_shop: 'शॉपिंग', c_health: 'दवा / इलाज', c_edu: 'पढ़ाई', c_rent: 'किराया', c_fun: 'मनोरंजन', c_gift: 'उपहार', c_other: 'अन्य', c_salary: 'सैलरी', c_business: 'कारोबार', c_in_other: 'अन्य आमदनी',
    m_cash: 'नकद', m_upi: 'UPI', m_card: 'कार्ड', m_bank: 'बैंक',
    calendar: 'कैलेंडर', todo: 'काम की लिस्ट', t_today: 'आज', t_up: 'आने वाले', t_all: 'सब', t_done: 'पूरे हुए', title: 'काम', time: 'समय', repeat: 'दोहराएँ', r_none: 'एक बार', r_day: 'रोज़', r_week: 'हर हफ़्ते', r_month: 'हर महीने',
    priority: 'ज़रूरी', p0: 'कम', p1: 'सामान्य', p2: 'बहुत ज़रूरी', remind: 'इस समय याद दिलाएँ', overdue: 'छूट गया', taskTitlePh: 'क्या करना है?', noDay: 'इस दिन कुछ नहीं।', dayExp: 'इस दिन का ख़र्च', dayDiary: 'डायरी', openDiary: 'डायरी लिखें',
    notifOff: 'याद दिलाने के लिए नोटिफ़िकेशन चालू करें।', notifWeb: 'ब्राउज़र में याद तभी दिलाएगा जब SP04 खुला हो। Android ऐप बंद होने पर भी याद दिलाता है।', allowNotif: 'नोटिफ़िकेशन चालू करें', needTitle: 'काम लिखें', needAmt: 'रकम डालें' },
});

/* ================= Expenses ================= */
const EXP_CATS = { out: [['food', '🍛'], ['grocery', '🛒'], ['travel', '⛽'], ['bills', '💡'], ['shop', '🛍️'], ['health', '💊'], ['edu', '📚'], ['rent', '🏠'], ['fun', '🎬'], ['gift', '🎁'], ['other', '📦']],
  in: [['salary', '💼'], ['business', '🏪'], ['in_other', '💰']] };
const MODES = [['cash', '💵'], ['upi', '📱'], ['card', '💳'], ['bank', '🏦']];
const customCats = () => LS.get('cats', []);           // [{k,name,icon,type}]
function catList(type) { return EXP_CATS[type].map(([k, i]) => ({ k, icon: i, name: t('c_' + k) })).concat(customCats().filter((c) => c.type === type)); }
function catInfo(k, type) { return catList(type || 'out').concat(catList(type === 'in' ? 'out' : 'in')).find((c) => c.k === k) || { k, icon: '📦', name: k }; }
let expMonth = today().slice(0, 7), expView = 'list', expCat = '';

const Exp = {
  monthItems(m) { return DB.all('exp').filter((e) => e.date.startsWith(m)); },
  totals(items) { let o = 0, i = 0; for (const e of items) (e.type === 'in' ? (i += +e.amt) : (o += +e.amt)); return { out: o, in: i, bal: i - o }; },
  openForm(rec, presetDate) {
    rec = rec ? { ...rec } : { kind: 'exp', type: 'out', date: presetDate || today(), cat: 'food', mode: LS.get('lastMode', 'upi'), amt: '', note: '' };
    const isNew = !rec.id;
    const draw = (b) => {
      $('.mb', b).innerHTML = `
        <div class="chips" style="margin:4px 0 10px"><button class="chip ${rec.type === 'out' ? 'on' : ''}" data-ty="out">➖ ${esc(t('expense'))}</button><button class="chip ${rec.type === 'in' ? 'on' : ''}" data-ty="in">➕ ${esc(t('income'))}</button></div>
        <input class="f" id="eAmt" type="number" inputmode="decimal" step="any" placeholder="₹ ${esc(t('amount'))}" value="${esc(rec.amt)}" style="font-size:26px;font-weight:800;text-align:center">
        <label class="l">${esc(t('category'))}</label>
        <div class="chips" style="flex-wrap:wrap">${catList(rec.type).map((c) => `<button class="chip ${rec.cat === c.k ? 'on' : ''}" data-cat="${esc(c.k)}">${c.icon} ${esc(c.name)}</button>`).join('')}<button class="chip" data-newcat>${esc(t('newCat'))}</button></div>
        <div class="grid2"><div><label class="l">${esc(t('date'))}</label><input class="f" id="eDate" type="date" value="${esc(rec.date)}"></div>
        <div><label class="l">${esc(t('mode'))}</label><select class="f" id="eMode">${MODES.map(([k, i]) => `<option value="${k}" ${rec.mode === k ? 'selected' : ''}>${i} ${esc(t('m_' + k))}</option>`).join('')}</select></div></div>
        <label class="l">${esc(t('note'))}</label><input class="f" id="eNote" value="${esc(rec.note)}" placeholder="${esc(t('note'))}">
        <div class="row" style="margin-top:16px">${isNew ? '' : `<button class="btn red" id="eDel">🗑 ${esc(t('del'))}</button>`}<span class="grow"></span><button class="btn gold" id="eSave">✔ ${esc(t('save'))}</button></div>`;
      const sync = () => { rec.amt = $('#eAmt', b).value; rec.date = $('#eDate', b).value || today(); rec.mode = $('#eMode', b).value; rec.note = $('#eNote', b).value; };
      $$('[data-ty]', b).forEach((x) => (x.onclick = () => { sync(); rec.type = x.dataset.ty; rec.cat = catList(rec.type)[0].k; draw(b); }));
      $$('[data-cat]', b).forEach((x) => (x.onclick = () => { sync(); rec.cat = x.dataset.cat; draw(b); }));
      $('[data-newcat]', b).onclick = () => {
        sync(); const name = prompt(t('catName')); if (!name) return;
        const c = { k: 'u' + uid(), name: name.trim().slice(0, 30), icon: '🏷️', type: rec.type }; LS.set('cats', customCats().concat(c)); rec.cat = c.k; draw(b);
      };
      $('#eSave', b).onclick = async () => {
        sync(); const a = parseFloat(rec.amt); if (!(a > 0)) { toast(t('needAmt')); $('#eAmt', b).focus(); return; }
        rec.amt = Math.round(a * 100) / 100; LS.set('lastMode', rec.mode); await DB.save(rec); closeModal(); toast(t('saved')); App.refresh();
      };
      $('#eDel', b)?.addEventListener('click', async () => { if (await ask(t('delSure'), t('del'))) { await DB.del(rec.id); toast(t('deleted')); App.refresh(); } });
      if (isNew) setTimeout(() => $('#eAmt', b)?.focus(), 150);
    };
    openModal(isNew ? `${t('add')} · ${t('exp')}` : t('edit'), '', draw);
  },
  async exportExcel(m) {
    const items = Exp.monthItems(m).sort((a, b) => a.date.localeCompare(b.date));
    const rows = items.map((e) => ({ Date: e.date, Type: e.type === 'in' ? 'Income' : 'Expense', Category: catInfo(e.cat, e.type).name, 'Paid by': t('m_' + e.mode), Amount: +e.amt, Note: e.note || '' }));
    const tot = Exp.totals(items);
    try {
      const X = await loadXLSX();
      const wb = X.utils.book_new();
      const ws = X.utils.json_to_sheet(rows); ws['!cols'] = [{ wch: 12 }, { wch: 9 }, { wch: 16 }, { wch: 9 }, { wch: 11 }, { wch: 30 }];
      X.utils.book_append_sheet(wb, ws, 'Entries');
      const cats = {}; items.filter((e) => e.type !== 'in').forEach((e) => { const n = catInfo(e.cat, 'out').name; cats[n] = (cats[n] || 0) + +e.amt; });
      const sum = [['Month', m], ['Total expense', tot.out], ['Total income', tot.in], ['Balance', tot.bal], [], ['Category', 'Amount'], ...Object.entries(cats).sort((a, b) => b[1] - a[1])];
      X.utils.book_append_sheet(wb, X.utils.aoa_to_sheet(sum), 'Summary');
      const out = X.write(wb, { bookType: 'xlsx', type: 'array' });
      await saveFile(`SP04-expenses-${m}.xlsx`, new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    } catch (e) {
      const csv = ['Date,Type,Category,Paid by,Amount,Note', ...rows.map((r) => [r.Date, r.Type, r.Category, r['Paid by'], r.Amount, r.Note].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))].join('\n');
      await saveFile(`SP04-expenses-${m}.csv`, new Blob(['﻿' + csv], { type: 'text/csv' }));
    }
  },
};
PAGES.exp = {
  icon: '💰',
  render(el) {
    topAction('📤', t('excel'), () => Exp.exportExcel(expMonth));
    const d = parseYmd(expMonth + '-01');
    const items = Exp.monthItems(expMonth);
    const tot = Exp.totals(items);
    const shown = items.filter((e) => !expCat || e.cat === expCat).sort((a, b) => b.date.localeCompare(a.date) || b.ts - a.ts);
    const usedCats = [...new Set(items.map((e) => e.cat))];
    let html = `<div class="row" style="margin-bottom:10px"><button class="iconbtn" data-mon="-1">◀</button><b class="grow" style="text-align:center;font-size:17px">${esc(d.toLocaleDateString(LOCALE(), { month: 'long', year: 'numeric' }))}</b><button class="iconbtn" data-mon="1">▶</button></div>
      <div class="grid3" style="margin-bottom:12px"><div class="stat"><small>${esc(t('expense'))}</small><b style="color:var(--red)">${money(tot.out)}</b></div><div class="stat"><small>${esc(t('income'))}</small><b style="color:var(--green)">${money(tot.in)}</b></div><div class="stat"><small>${esc(t('balance'))}</small><b>${money(tot.bal)}</b></div></div>
      <div class="chips" style="margin-bottom:10px"><button class="chip ${expView === 'list' ? 'on' : ''}" data-v="list">📋 ${esc(t('list'))}</button><button class="chip ${expView === 'sum' ? 'on' : ''}" data-v="sum">📊 ${esc(t('summary'))}</button>
      ${expView === 'list' && usedCats.length > 1 ? `<span style="width:8px"></span><button class="chip ${!expCat ? 'on' : ''}" data-c="">${esc(t('all'))}</button>` + usedCats.map((k) => { const c = catInfo(k); return `<button class="chip ${expCat === k ? 'on' : ''}" data-c="${esc(k)}">${c.icon} ${esc(c.name)}</button>`; }).join('') : ''}</div>`;
    if (!items.length) html += `<div class="card empty"><div>💸</div>${esc(t('noExp'))}</div>`;
    else if (expView === 'list') {
      let cur = '', dayTot = {};
      shown.forEach((e) => { if (e.type !== 'in') dayTot[e.date] = (dayTot[e.date] || 0) + +e.amt; });
      html += '<div class="card list" style="padding-top:2px">';
      for (const e of shown) {
        if (e.date !== cur) { cur = e.date; html += `<div class="datehead"><span>${esc(dayLabel(cur))}</span><span>${dayTot[cur] ? money(dayTot[cur]) : ''}</span></div>`; }
        const c = catInfo(e.cat, e.type);
        html += `<div class="it" data-id="${e.id}"><div class="ic">${c.icon}</div><div class="tx"><b>${esc(e.note || c.name)}</b><small>${esc(c.name)} · ${esc(t('m_' + e.mode))}</small></div><div class="amt ${e.type === 'in' ? 'in' : 'out'}">${e.type === 'in' ? '+' : '−'}${money(e.amt)}</div></div>`;
      }
      html += '</div>';
    } else {
      const cats = {}, modes = {};
      items.filter((e) => e.type !== 'in').forEach((e) => { cats[e.cat] = (cats[e.cat] || 0) + +e.amt; modes[e.mode] = (modes[e.mode] || 0) + +e.amt; });
      const max = Math.max(1, ...Object.values(cats));
      const days = expMonth === today().slice(0, 7) ? new Date().getDate() : new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      html += `<div class="card"><h3>📈 ${esc(t('dayAvg'))}<span class="sp"></span>${money(tot.out / days)}</h3><small class="muted">${items.length} ${esc(t('entries'))}</small></div>
        <div class="card"><h3>🧾 ${esc(t('byCat'))}</h3>${Object.entries(cats).sort((a, b) => b[1] - a[1]).map(([k, v]) => { const c = catInfo(k); return `<div style="margin:9px 0"><div class="row"><span>${c.icon} ${esc(c.name)}</span><span class="grow"></span><b>${money(v)}</b><small class="muted">${Math.round((v / tot.out) * 100)}%</small></div><div class="bar"><i style="width:${(v / max) * 100}%"></i></div></div>`; }).join('')}</div>
        <div class="card"><h3>💳 ${esc(t('byMode'))}</h3><div class="grid2">${Object.entries(modes).map(([k, v]) => `<div class="stat"><small>${MODES.find((m) => m[0] === k)?.[1] || ''} ${esc(t('m_' + k))}</small><b>${money(v)}</b></div>`).join('')}</div></div>`;
    }
    el.innerHTML = html;
    $$('[data-mon]', el).forEach((b) => (b.onclick = () => { const x = parseYmd(expMonth + '-01'); x.setMonth(x.getMonth() + +b.dataset.mon); expMonth = ymd(x).slice(0, 7); expCat = ''; App.refresh(); }));
    $$('[data-v]', el).forEach((b) => (b.onclick = () => { expView = b.dataset.v; App.refresh(); }));
    $$('[data-c]', el).forEach((b) => (b.onclick = () => { expCat = b.dataset.c; App.refresh(); }));
    $$('.it[data-id]', el).forEach((r) => (r.onclick = () => Exp.openForm(DB.get(r.dataset.id))));
    fab(() => Exp.openForm(null, expMonth === today().slice(0, 7) ? today() : expMonth + '-01'));
  },
};

/* ================= Tasks + reminders ================= */
const Tasks = {
  occurs(tk, d) {
    if (!tk.date) return false;
    if (!tk.repeat || tk.repeat === 'none') return tk.date === d;
    if (d < tk.date) return false;
    const a = parseYmd(tk.date), b = parseYmd(d);
    if (tk.repeat === 'day') return true;
    if (tk.repeat === 'week') return a.getDay() === b.getDay();
    if (tk.repeat === 'month') return a.getDate() === b.getDate();
    return false;
  },
  isDone(tk, d) { return !tk.repeat || tk.repeat === 'none' ? !!tk.done : (tk.doneDates || []).includes(d); },
  async toggle(tk, d) {
    if (!tk.repeat || tk.repeat === 'none') tk.done = !tk.done;
    else { const s = new Set(tk.doneDates || []); s.has(d) ? s.delete(d) : s.add(d); tk.doneDates = [...s].sort().slice(-400); }
    await DB.save(tk); Rem.sync(tk);
  },
  forDay(d) { return DB.all('task').filter((x) => Tasks.occurs(x, d)).sort((a, b) => (a.time || '99').localeCompare(b.time || '99') || b.pri - a.pri); },
  overdue() { const d = today(); return DB.all('task').filter((x) => (!x.repeat || x.repeat === 'none') && !x.done && x.date && x.date < d); },
  nextDate(tk, from = today()) { const x = parseYmd(from); for (let i = 0; i < 400; i++) { const s = ymd(x); if (Tasks.occurs(tk, s) && !Tasks.isDone(tk, s)) return s; x.setDate(x.getDate() + 1); } return null; },
  row(tk, d) {
    const done = Tasks.isDone(tk, d);
    const sub = [tk.time ? '⏰ ' + tk.time : '', tk.repeat && tk.repeat !== 'none' ? '🔁 ' + t('r_' + tk.repeat) : '', d !== today() ? dayLabel(d) : '', tk.note || ''].filter(Boolean).join(' · ');
    return `<div class="task ${done ? 'done' : ''}" data-tid="${tk.id}" data-d="${d}"><button class="tick ${done ? 'on' : ''}" data-tick>${done ? '✓' : ''}</button><div class="tx" style="flex:1;min-width:0" data-open><b><span class="pri p${tk.pri ?? 1}"></span>${esc(tk.title)}</b><small class="muted">${esc(sub)}</small></div></div>`;
  },
  bind(el) {
    $$('.task[data-tid]', el).forEach((r) => {
      const tk = DB.get(r.dataset.tid);
      $('[data-tick]', r).onclick = async (e) => { e.stopPropagation(); await Tasks.toggle(tk, r.dataset.d); App.refresh(); };
      $('[data-open]', r).onclick = () => Tasks.openForm(tk);
    });
  },
  openForm(rec, presetDate) {
    rec = rec ? { ...rec } : { kind: 'task', title: '', date: presetDate || today(), time: '', repeat: 'none', pri: 1, remind: true, note: '', done: false };
    const isNew = !rec.id;
    openModal(isNew ? `${t('add')} · ${t('addTask')}` : t('edit'), `
      <input class="f" id="tTitle" placeholder="${esc(t('taskTitlePh'))}" value="${esc(rec.title)}" style="font-size:17px;font-weight:600">
      <div class="grid2"><div><label class="l">${esc(t('date'))}</label><input class="f" id="tDate" type="date" value="${esc(rec.date)}"></div><div><label class="l">${esc(t('time'))}</label><input class="f" id="tTime" type="time" value="${esc(rec.time)}"></div></div>
      <div class="grid2"><div><label class="l">${esc(t('repeat'))}</label><select class="f" id="tRep">${['none', 'day', 'week', 'month'].map((k) => `<option value="${k}" ${rec.repeat === k ? 'selected' : ''}>${esc(t('r_' + k))}</option>`).join('')}</select></div>
      <div><label class="l">${esc(t('priority'))}</label><select class="f" id="tPri">${[2, 1, 0].map((k) => `<option value="${k}" ${+rec.pri === k ? 'selected' : ''}>${esc(t('p' + k))}</option>`).join('')}</select></div></div>
      <label class="row" style="margin-top:12px"><input type="checkbox" id="tRem" ${rec.remind ? 'checked' : ''} style="width:20px;height:20px"> ${esc(t('remind'))}</label>
      <label class="l">${esc(t('note'))}</label><textarea class="f" id="tNote" rows="2">${esc(rec.note)}</textarea>
      <div class="row" style="margin-top:16px">${isNew ? '' : `<button class="btn red" id="tDel">🗑 ${esc(t('del'))}</button>`}<span class="grow"></span><button class="btn gold" id="tSave">✔ ${esc(t('save'))}</button></div>`, (b) => {
      if (isNew) setTimeout(() => $('#tTitle', b)?.focus(), 150);
      $('#tSave', b).onclick = async () => {
        rec.title = $('#tTitle', b).value.trim(); if (!rec.title) { toast(t('needTitle')); return; }
        rec.date = $('#tDate', b).value || today(); rec.time = $('#tTime', b).value; rec.repeat = $('#tRep', b).value; rec.pri = +$('#tPri', b).value; rec.remind = $('#tRem', b).checked; rec.note = $('#tNote', b).value.trim();
        await DB.save(rec); await Rem.sync(rec, true); closeModal(); toast(t('saved')); App.refresh();
      };
      $('#tDel', b)?.addEventListener('click', async () => { if (await ask(t('delSure'), t('del'))) { await Rem.cancel(rec); await DB.del(rec.id); toast(t('deleted')); App.refresh(); } });
    });
  },
};
const Rem = {
  nid(id) { let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h) % 2000000000 + 1; },
  LN: () => Plug('LocalNotifications'),
  async perm(ask) {
    if (NATIVE) { const LN = this.LN(); let p = await LN.checkPermissions(); if (p.display !== 'granted' && ask) p = await LN.requestPermissions(); return p.display === 'granted'; }
    if (!('Notification' in window)) return false;
    if (Notification.permission === 'default' && ask) await Notification.requestPermission();
    return Notification.permission === 'granted';
  },
  async cancel(tk) { if (NATIVE) try { await this.LN().cancel({ notifications: [{ id: this.nid(tk.id) }] }); } catch {} },
  async sync(tk, ask) {
    if (!NATIVE) { if (ask && tk.remind && tk.time) this.perm(true); return; }
    await this.cancel(tk);
    if (!tk.remind || !tk.time || (tk.repeat === 'none' && tk.done)) return;
    if (!(await this.perm(ask))) return;
    const [hh, mm] = tk.time.split(':').map(Number);
    const base = { id: this.nid(tk.id), title: '⏰ ' + tk.title, body: tk.note || 'SP04', smallIcon: 'ic_stat_sp04', schedule: { allowWhileIdle: true } };
    const d = parseYmd(tk.date);
    if (tk.repeat === 'none') { const at = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm); if (at <= new Date()) return; base.schedule.at = at; }
    else if (tk.repeat === 'day') base.schedule.on = { hour: hh, minute: mm };
    else if (tk.repeat === 'week') base.schedule.on = { weekday: d.getDay() + 1, hour: hh, minute: mm };
    else base.schedule.on = { day: d.getDate(), hour: hh, minute: mm };
    delete base.smallIcon;
    try { await this.LN().schedule({ notifications: [base] }); } catch (e) { console.warn(e); }
  },
  async resyncAll() { if (NATIVE) for (const tk of DB.all('task')) await this.sync(tk, false); },
  webTick() {
    if (NATIVE || !CR.ready) return;
    const now = new Date(), d = ymd(now), hm = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const fired = LS.get('fired', {});
    for (const tk of Tasks.forDay(d)) {
      if (!tk.remind || tk.time !== hm || Tasks.isDone(tk, d)) continue;
      const k = tk.id + '@' + d; if (fired[k]) continue; fired[k] = 1;
      toast('⏰ ' + tk.title, 8000);
      try { if (Notification.permission === 'granted') navigator.serviceWorker?.ready.then((r) => r.showNotification('⏰ ' + tk.title, { body: tk.note || 'SP04', icon: 'icon-192.png', tag: k })); } catch {}
    }
    for (const k of Object.keys(fired)) if (!k.endsWith(d)) delete fired[k];
    LS.set('fired', fired);
  },
};
setInterval(() => Rem.webTick(), 20000);

/* ================= Calendar & To-do ================= */
let calMonth = today().slice(0, 7), calSel = today(), calMode = 'cal', todoTab = 'today';
PAGES.cal = {
  icon: '📅',
  boot() { Rem.resyncAll(); },
  render(el) {
    let html = `<div class="chips" style="margin-bottom:12px"><button class="chip ${calMode === 'cal' ? 'on' : ''}" data-m="cal">📅 ${esc(t('calendar'))}</button><button class="chip ${calMode === 'todo' ? 'on' : ''}" data-m="todo">✅ ${esc(t('todo'))}</button></div>`;
    if (!NATIVE && 'Notification' in window && Notification.permission !== 'granted' && DB.all('task').some((x) => x.remind && x.time))
      html += `<div class="banner">🔔 ${esc(t('notifWeb'))} <button class="btn gold sm" id="nAllow" style="margin-top:8px">${esc(t('allowNotif'))}</button></div>`;
    if (calMode === 'cal') {
      const first = parseYmd(calMonth + '-01'), y = first.getFullYear(), m = first.getMonth();
      const start = new Date(y, m, 1 - ((first.getDay() + 6) % 7));
      const expDays = new Set(DB.all('exp').filter((e) => e.date.startsWith(calMonth)).map((e) => e.date));
      const diaryDays = new Set(DB.all('note').filter((n) => n.ntype === 'diary').map((n) => n.date));
      const tasks = DB.all('task');
      const wd = [...Array(7)].map((_, i) => new Date(2024, 0, 1 + i).toLocaleDateString(LOCALE(), { weekday: 'narrow' }));
      html += `<div class="card"><div class="row" style="margin-bottom:10px"><button class="iconbtn" data-cm="-1">◀</button><b class="grow" style="text-align:center;font-size:17px">${esc(first.toLocaleDateString(LOCALE(), { month: 'long', year: 'numeric' }))}</b><button class="iconbtn" data-cm="1">▶</button></div><div class="cal">${wd.map((w) => `<div class="wd">${esc(w)}</div>`).join('')}`;
      for (let i = 0; i < 42; i++) {
        const dd = new Date(start); dd.setDate(start.getDate() + i); const s = ymd(dd);
        const hasT = tasks.some((x) => Tasks.occurs(x, s) && !Tasks.isDone(x, s));
        html += `<button class="d ${dd.getMonth() !== m ? 'o' : ''} ${s === today() ? 't' : ''} ${s === calSel ? 's' : ''}" data-day="${s}">${dd.getDate()}<span class="mk">${hasT ? '<i></i>' : ''}${expDays.has(s) ? '<i class="e"></i>' : ''}${diaryDays.has(s) ? '<i class="n"></i>' : ''}</span></button>`;
        if (i === 34 && dd.getMonth() !== m) break;
      }
      html += '</div></div>';
      const dayTasks = Tasks.forDay(calSel);
      const dayExp = DB.all('exp').filter((e) => e.date === calSel);
      const diary = DB.all('note').find((n) => n.ntype === 'diary' && n.date === calSel);
      html += `<div class="card"><h3>📌 ${esc(dayLabel(calSel))}<span class="sp"></span><button class="btn gold sm" id="addOnDay">+ ${esc(t('addTask'))}</button></h3>
        ${dayTasks.length ? dayTasks.map((x) => Tasks.row(x, calSel)).join('') : `<div class="muted small" style="padding:6px 2px">${esc(t('noDay'))}</div>`}
        <div class="row" style="margin-top:10px;gap:8px">
          <button class="btn ghost sm" id="dayExp">💰 ${esc(t('dayExp'))}: ${money(Exp.totals(dayExp).out)}</button>
          <button class="btn ghost sm" id="dayDiary">📔 ${diary ? esc(t('dayDiary')) + ' ✓' : esc(t('openDiary'))}</button>
        </div></div>`;
      el.innerHTML = html;
      $$('[data-cm]', el).forEach((b) => (b.onclick = () => { const x = parseYmd(calMonth + '-01'); x.setMonth(x.getMonth() + +b.dataset.cm); calMonth = ymd(x).slice(0, 7); App.refresh(); }));
      $$('[data-day]', el).forEach((b) => (b.onclick = () => { calSel = b.dataset.day; if (!calSel.startsWith(calMonth)) calMonth = calSel.slice(0, 7); App.refresh(); }));
      $('#addOnDay').onclick = () => Tasks.openForm(null, calSel);
      $('#dayExp').onclick = () => Exp.openForm(null, calSel);
      $('#dayDiary').onclick = () => (diary ? go('#/note/' + diary.id) : Notes.create('diary', { date: calSel }));
    } else {
      const tabs = ['today', 'up', 'all', 'done'];
      html += `<div class="chips" style="margin-bottom:10px">${tabs.map((k) => `<button class="chip ${todoTab === k ? 'on' : ''}" data-tt="${k}">${esc(t('t_' + k))}</button>`).join('')}</div><div class="card">`;
      const d = today(); let body = '';
      if (todoTab === 'today') {
        const od = Tasks.overdue();
        if (od.length) body += `<div class="datehead"><span style="color:var(--red)">${esc(t('overdue'))}</span></div>` + od.map((x) => Tasks.row(x, x.date)).join('');
        const td = Tasks.forDay(d); if (td.length) body += `<div class="datehead"><span>${esc(t('today'))}</span></div>` + td.map((x) => Tasks.row(x, d)).join('');
      } else if (todoTab === 'up') {
        const x = parseYmd(d);
        for (let i = 1; i <= 30; i++) { x.setDate(x.getDate() + 1); const s = ymd(x); const l = Tasks.forDay(s).filter((k) => !Tasks.isDone(k, s)); if (l.length) body += `<div class="datehead"><span>${esc(dayLabel(s))}</span></div>` + l.map((k) => Tasks.row(k, s)).join(''); }
      } else if (todoTab === 'all') {
        const l = DB.all('task').filter((k) => !(k.repeat === 'none' && k.done)).map((k) => [k, Tasks.nextDate(k) || k.date]).sort((a, b) => a[1].localeCompare(b[1]));
        body = l.map(([k, s]) => Tasks.row(k, s)).join('');
      } else body = DB.all('task').filter((k) => k.repeat === 'none' && k.done).sort((a, b) => b.upd - a.upd).map((k) => Tasks.row(k, k.date)).join('');
      html += (body || `<div class="empty"><div>✅</div>${esc(t('noTasks'))}</div>`) + '</div>';
      el.innerHTML = html;
      $$('[data-tt]', el).forEach((b) => (b.onclick = () => { todoTab = b.dataset.tt; App.refresh(); }));
    }
    $$('[data-m]', el).forEach((b) => (b.onclick = () => { calMode = b.dataset.m; App.refresh(); }));
    $('#nAllow')?.addEventListener('click', async () => { await Rem.perm(true); App.refresh(); });
    Tasks.bind(el);
    fab(() => Tasks.openForm(null, calMode === 'cal' ? calSel : today()));
  },
};

/* ================= Home ================= */
PAGES.home = {
  icon: '🏠',
  render(el) {
    const d = today(), m = d.slice(0, 7);
    const tasks = Tasks.overdue().map((x) => [x, x.date]).concat(Tasks.forDay(d).map((x) => [x, d]));
    const mItems = Exp.monthItems(m), tTot = Exp.totals(mItems.filter((e) => e.date === d)), mTot = Exp.totals(mItems);
    const cats = {}; mItems.filter((e) => e.type !== 'in').forEach((e) => (cats[e.cat] = (cats[e.cat] || 0) + +e.amt));
    const top = Object.entries(cats).sort((a, b) => b[1] - a[1])[0];
    const notes = DB.all('note').filter((n) => n.ntype !== 'diary').sort((a, b) => b.upd - a.upd).slice(0, 4);
    const lastBackup = LS.get('lastBackup', 0), total = DB.all('exp').length + DB.all('note').length + DB.all('task').length;
    const hr = new Date().getHours();
    const greet = lang === 'hi' ? (hr < 12 ? 'सुप्रभात' : hr < 17 ? 'नमस्ते' : 'शुभ संध्या') : hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
    el.innerHTML = `
      <div style="margin:2px 2px 14px"><div style="font-size:22px;font-weight:800;color:var(--gold2)">${esc(greet)} 👋</div><div class="muted">${esc(fmtDate(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))}</div></div>
      ${total > 5 && Date.now() - lastBackup > 7 * 864e5 ? `<div class="banner">💾 ${esc(t('backupTip'))} <a href="#/settings">${esc(t('settings'))} →</a></div>` : ''}
      <div class="card"><h3>⚡ ${esc(t('quick'))}</h3><div class="grid3">
        <button class="btn ghost" data-q="exp">💰 ${esc(t('addExp'))}</button><button class="btn ghost" data-q="task">✅ ${esc(t('addTask'))}</button><button class="btn ghost" data-q="note">📝 ${esc(t('addNote'))}</button>
        <button class="btn ghost" data-q="diary">📔 ${esc(t('diary'))}</button><button class="btn ghost" data-q="sheet">📊 ${esc(t('sheets').split(' ')[0])}</button><button class="btn ghost" data-q="locker">🖼️ ${esc(t('locker').split(' ').pop())}</button></div></div>
      <div class="grid2" style="margin-bottom:12px"><a class="stat" href="#/exp" style="text-decoration:none;color:inherit"><small>${esc(t('spentToday'))}</small><b style="color:var(--red)">${money(tTot.out)}</b></a>
        <a class="stat" href="#/exp" style="text-decoration:none;color:inherit"><small>${esc(t('spentMonth'))}</small><b>${money(mTot.out)}</b>${top ? `<small>${esc(t('topCat'))}: ${catInfo(top[0]).icon} ${esc(catInfo(top[0]).name)}</small>` : ''}</a></div>
      <div class="card"><h3>✅ ${esc(t('todayTasks'))}<span class="sp"></span><a href="#/cal" class="small">${esc(t('seeAll'))}</a></h3>${tasks.length ? tasks.slice(0, 6).map(([x, s]) => Tasks.row(x, s)).join('') : `<div class="muted small">${esc(t('noTasks'))}</div>`}</div>
      <div class="card"><h3>📝 ${esc(t('recentNotes'))}<span class="sp"></span><a href="#/notes" class="small">${esc(t('seeAll'))}</a></h3>${notes.length ? `<div class="ngrid">${notes.map((n) => Notes.card(n)).join('')}</div>` : `<div class="muted small">—</div>`}</div>`;
    Tasks.bind(el); Notes.bindCards(el);
    $$('[data-q]', el).forEach((b) => (b.onclick = () => {
      const q = b.dataset.q;
      if (q === 'exp') Exp.openForm(); else if (q === 'task') Tasks.openForm(); else if (q === 'note') Notes.chooseType();
      else if (q === 'diary') Notes.openDiary(today()); else if (q === 'sheet') go('#/sheets'); else go('#/locker');
    }));
  },
};
