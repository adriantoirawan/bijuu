# ⚙️ 2nd Gear: The `name` Attribute & Middleware

*(Scroll to the very bottom of this document to shift gears to another topic)*

## The `name` Attribute
When you click "Submit", the browser packages all your inputs into a single HTTP request. The `name` attribute on your HTML `<input>` tags acts as the **Key** in a Key-Value pair.
The browser maps the HTML `name` attribute directly to the keys of the JSON object it sends to the server.

If you omit the `name` attribute, the browser sends nothing, and `req.body` will be empty!

## The Middleware
When this package hits your Node.js server, Node natively receives it as a raw stream of binary data. Express doesn't automatically parse this stream.
You must configure Express to use its built-in URL-encoded parser middleware. This middleware intercepts the raw stream, parses the URL-encoded data, and attaches it to the `req` object as the beautifully formatted `req.body` object.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:developer.mozilla.org html input name`
- **Direct Link**: [MDN Web Docs: input name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
- **Target**: The MDN documentation for the input `name` attribute.
- **Landmark**: Scroll to the "name" attribute definition.
- **Adaptation**: If your `req.body` is ever empty during a live code, check your EJS file immediately. You probably forgot the `name` attribute.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com express.urlencoded extended true`
- **Direct Link**: [StackOverflow: What does extended: true mean?](https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0)
- **Target**: A community discussion on the `extended: true` flag.
- **Landmark**: Look at the top accepted answer.
- **Adaptation**: `extended: true` allows the `qs` library to parse rich objects and arrays encoded in the URL, not just simple strings.

> ⚙️ **Shift to 3rd Gear**: *What does that raw HTTP Request actually look like? [Read 3rd-gear/http-post-mechanics.md](../3rd-gear/http-post-mechanics.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/04-create-data-form.md)
