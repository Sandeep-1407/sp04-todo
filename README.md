# SP04 · Daily Organizer

All-in-one personal organizer, locked with your PIN. Hindi + English.

**Open:** https://sandeep-1407.github.io/sp04-todo/
**Android app:** https://github.com/Sandeep-1407/sp04-todo/releases/latest

## Pages (side menu)
- 🏠 **Home** – today's tasks, today's and this month's spending, recent notes, quick add
- 💰 **Daily expenses** – date-wise expense/income, categories, cash/UPI/card/bank, monthly summary, Excel export
- 📅 **Calendar & To-do** – month calendar, tasks with time, repeat (daily/weekly/monthly), priority, reminders
- 📝 **Notes** – normal (Word-like), photo note, calculation note (every line calculated, total at the bottom), checklist; export to Word / text
- 📔 **Diary** – one page per day with mood and photos, streak, "on this day"
- 📊 **Sheets (Excel)** – table with formulas (SUM, AVERAGE, MIN, MAX, ROUND, IF, SUMIF, COUNTIF…), several tabs, open/save .xlsx and .csv
- 🔐 **Passwords** – site, user ID, password, link, note; strong password generator; one-tap copy
- 🖼️ **Photo Locker** – photos locked inside the app, not visible in the Gallery
- ⚙️ **Settings** – language, change PIN, auto-lock, backup and restore

## Look (v2)
- Clean white / off-white design (navy + gold), **dark mode** option
- Settings → Appearance: **text size** (Small / Normal / Large / Extra large), **buttons** (Icons / Icon + text / Text only), **floating + button** on/off, language
- Bottom tab bar on phones: Home · Tasks · Money · Notes · More

## Security
- A random key encrypts every record and photo (AES-GCM 256). The key itself is locked with your PIN (PBKDF2, 210,000 rounds).
- Data stays only on the phone. Backups are files locked with the same PIN.
- If the PIN is forgotten, the data cannot be recovered.

## Website vs Android app
| | Website app | Android app (APK) |
|---|---|---|
| All pages | ✅ | ✅ |
| Photo Locker hides photos | ✅ (delete the original from Gallery yourself) | ✅ removes the original from Gallery automatically |
| Reminders | only while the app is open | even when the app is closed |

The APK is built automatically by GitHub Actions (`.github/workflows/android.yml`) with Capacitor 7 and the `LockerPlugin.java` native plugin.

Created by - Sandeep Kumar from Sandeep Jan Seva Kendra, Mob no. 8299430081
