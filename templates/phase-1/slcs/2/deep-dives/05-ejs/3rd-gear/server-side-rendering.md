# ⚙️ 3rd Gear: Server-Side Rendering (SSR)

*(Scroll to the very bottom of this document to shift gears to another topic)*

If you send `<% for %>` to Google Chrome, Chrome will crash. Browsers do not understand EJS. Browsers only understand pure HTML, CSS, and Client-Side JavaScript.

## The Compiler
When you call `res.render('viewName')` in your Controller, Express pauses the response. It sends your raw `.ejs` file and the Database objects to the EJS Compiler engine running on your Node server.
The engine executes the JavaScript `for` loops, generates raw `<tr>` and `<td>` HTML strings, strips out all the `<%` tags, and finally sends pure, clean HTML over the internet to the user's browser.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:ejs.co`
- **Direct Link**: [EJS Official Site](https://ejs.co/)
- **Target**: The official EJS site.
- **Landmark**: Look at the "What is EJS?" definition. "Embedded JavaScript templating".
- **Adaptation**: Templating languages are essentially giant String manipulation functions. They replace variables with strings before network transmission.

### 2. The Community Perspective
- **Advanced Googling**: `site:medium.com what is server side rendering`
- **Direct Link**: [Medium: What is SSR?](https://medium.com/@katerinabosko/what-is-server-side-rendering-ssr-and-why-do-we-need-it-9ba0e3ebf4f0)
- **Target**: An architectural blog on SSR.
- **Landmark**: Look for the difference between a "rendered page" and a "raw file".
- **Adaptation**: EJS is SSR because the server does the heavy lifting of building the HTML page before sending it to the client.

> ⚙️ **Shift to 4th Gear**: *How does EJS SSR compare to modern React Client-Side Rendering? [Read 4th-gear/client-vs-server-side.md](../4th-gear/client-vs-server-side.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/logic-vs-output.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
