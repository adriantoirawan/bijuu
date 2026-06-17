# ⚙️ 2nd Gear: Logic vs Output

*(Scroll to the very bottom of this document to shift gears to another topic)*

EJS (Embedded JavaScript) allows you to write JavaScript inside your HTML files.

## The Two Tags
The most confusing part of EJS is knowing when to use `<%` and when to use `<%=`.

1. **`<%` (The Logic Tag)**: Used for pure JavaScript logic that should run silently in the background (like `if` statements and `for` loops). It produces no visible output.
2. **`<%=` (The Output Tag)**: Used to literally print data to the screen. It takes a variable and injects its string value directly into the HTML.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:ejs.co tags`
- **Direct Link**: [EJS Official Docs](https://ejs.co/#docs)
- **Target**: The EJS documentation on "Tags".
- **Landmark**: Look at the table explaining `<%` vs `<%=` vs `<%-`.
- **Adaptation**: Notice `<%-`. It outputs raw, unescaped HTML. Using it incorrectly makes you vulnerable to XSS (Cross-Site Scripting) attacks!

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com difference between <% and <%= in ejs`
- **Direct Link**: [StackOverflow: EJS Tags Explained](https://stackoverflow.com/questions/21356525/what-is-the-difference-between-and-in-ejs)
- **Target**: A developer asking for clarification on the symbols.
- **Landmark**: Read the accepted answer.
- **Adaptation**: A great rule of thumb from the community: "If it has an equals sign, it equals what you see on the screen."

> ⚙️ **Shift to 3rd Gear**: *Wait, where does this `<% %>` code actually run? The browser or the server? [Read 3rd-gear/server-side-rendering.md](../3rd-gear/server-side-rendering.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
