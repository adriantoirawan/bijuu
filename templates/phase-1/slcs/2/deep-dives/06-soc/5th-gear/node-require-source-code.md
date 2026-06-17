# ⚙️ 5th Gear: Sage Mode (Node `require` Source Code)

*(Scroll to the very bottom of this document to shift gears to another topic)*

You are in the abyss. How does `require()` actually read your file and wrap it?

**CRITICAL REMINDER**: Zero code snippets allowed. Find it yourself.

## 📖 External Reference Study (Source Code Scavenger Hunt)

**1. The Official Open Source Code**
- **Advanced Googling**: `site:github.com nodejs/node module.js`
- **Direct Link**: [GitHub: nodejs/node](https://github.com/nodejs/node)
- **Target**: Navigate into `lib/internal/modules/cjs/` and open `loader.js`.
- **Landmark**: You will see the incredibly complex logic that powers `require`.
- **Adaptation**: Look for the `Module.wrap` function. Node literally takes your entire JavaScript file, converts it to a string, and wraps it inside a massive function string: `(function (exports, require, module, __filename, __dirname) { YOUR_CODE_HERE })`.

**2. The Community Perspective**
- **Advanced Googling**: `site:freecodecamp.org require under the hood`
- **Direct Link**: [FreeCodeCamp: Requiring modules in Node.js](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
- **Target**: A legendary deep-dive article on CommonJS.
- **Landmark**: Look for the 5 steps: Resolution, Loading, Wrapping, Evaluation, Caching.
- **Adaptation**: The community article breaks down why Node injects `__dirname` into your file—it was an argument passed to the wrapper function all along!

---
🧭 **Navigation**
[🔙 Climb up to 4th Gear](../4th-gear/dependency-injection.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
