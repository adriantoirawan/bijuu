# ⚙️ 1st Gear: Form Submission & `req.body` (Survival Mode)

*(Scroll to the very bottom of this document to shift gears to another topic)*

When a user submits a form, you access the data using `req.body`.
If `req.body` is `undefined`, you made one of two deadly mistakes:

1. You forgot the Express Middleware in `app.js`.
> ⚙️ **Shift to 2nd Gear**: *How does the middleware fix this? [Read 2nd-gear/express-urlencoded.md](../2nd-gear/express-urlencoded.md)*

2. You forgot the `name` attribute in your EJS `<input>` tag.
> ⚙️ **Shift to 2nd Gear**: *Why is the name attribute so critical? [Read 2nd-gear/the-name-attribute.md](../2nd-gear/the-name-attribute.md)*

## 📖 External Reference Study (Survival Mode)
1. **Docs**: Google `site:expressjs.com req.body`. [Direct Link](https://expressjs.com/en/api.html#req.body). See how Express natively handles the request body.
2. **Community**: Google `site:stackoverflow.com req body is undefined express`. [Direct Link](https://stackoverflow.com/questions/9177049/express-js-req-body-undefined). The most famous debugging thread for form submissions.

---
🧭 **Navigation**
[🏠 Back to Main Guide](../../../guides/04-create-data-form.md)
