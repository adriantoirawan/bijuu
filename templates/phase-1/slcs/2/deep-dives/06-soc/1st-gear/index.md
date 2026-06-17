# ⚙️ 1st Gear: Separation of Concerns (Survival Mode)

*(Scroll to the very bottom of this document to shift gears to another topic)*

Why do we put database setup in `setup.js` and Express server logic in `app.js`?

Because `setup.js` is a one-time script used to `DROP` and `CREATE` tables.
If you put that code in `app.js`, every time you start your web server, you will accidentally delete your entire production database.

## 📖 External Reference Study (Survival Mode)
1. **Docs**: Google `site:nodejs.org module.exports`. [Direct Link](https://nodejs.org/api/modules.html#moduleexports). How Node separates files.
2. **Community**: Google `site:softwareengineering.stackexchange.com separation of concerns`. [Direct Link](https://softwareengineering.stackexchange.com/questions/337424/how-to-explain-separation-of-concerns). Simple explanation of why isolating code saves production systems from critical failures.

> ⚙️ **Shift to 2nd Gear**: *What happens if you combine everything into a God File? [Read 2nd-gear/the-danger-of-god-files.md](../2nd-gear/the-danger-of-god-files.md)*

---
🧭 **Navigation**
[🏠 Back to Main Guide](../../../guides/01-database-setup.md)
