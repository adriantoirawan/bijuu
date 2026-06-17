# ⚙️ 5th Gear: Sage Mode (EJS Source Code)

*(Scroll to the very bottom of this document to shift gears to another topic)*

You are in the abyss. How does EJS actually strip out the `<%` tags?

**CRITICAL REMINDER**: Zero code snippets allowed. Find it yourself.

## 📖 External Reference Study (Source Code Scavenger Hunt)

**1. The Official Open Source Code**
- **Advanced Googling**: `site:github.com mde/ejs`
- **Direct Link**: [GitHub: mde/ejs](https://github.com/mde/ejs)
- **Target**: Open `lib/ejs.js`. This is a massive 1,000+ line file.
- **Landmark**: Look for the `Template` object constructor and `compile` function.
- **Adaptation**: EJS scans the string character by character. When it hits `<%`, it toggles a flag to "script mode", executing the JavaScript inside via the `new Function()` constructor.

**2. The Community Perspective**
- **Advanced Googling**: `site:dev.to writing a template engine from scratch`
- **Direct Link**: [Dev.to: Build your own template engine](https://dev.to/brayanarrieta/how-to-build-a-simple-template-engine-in-nodejs-209f)
- **Target**: A tutorial on replicating EJS.
- **Landmark**: Look at the use of Regular Expressions to `replace` tags.
- **Adaptation**: Once you see how `eval` or `new Function` is used, you understand why Cross-Site Scripting (XSS) is so dangerous!

---
🧭 **Navigation**
[🔙 Climb up to 4th Gear](../4th-gear/client-vs-server-side.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
