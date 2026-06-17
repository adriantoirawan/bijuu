# ⚙️ 3rd Gear: Pattern Matching

*(Scroll to the very bottom of this document to shift gears to another topic)*

`.gitignore` isn't just a list of exact file names. It uses a powerful pattern matching language called **Globbing**.

You can ignore entire classes of files using wildcards. For example, `*.env` ignores any file ending in `.env`. You can also invert rules: `!important.log` means "Ignore all `.log` files EXCEPT this one".

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:git-scm.com gitignore pattern format`
- **Direct Link**: [Git Documentation: gitignore pattern format](https://git-scm.com/docs/gitignore#_pattern_format)
- **Target**: Official Git Documentation.
- **Landmark**: Scroll to the "Pattern Format" section.
- **Adaptation**: Notice the rules: a leading slash `/` anchors the match to the root. A trailing slash `/` matches directories only.

### 2. The Community Perspective
- **Advanced Googling**: `site:medium.com gitignore glob patterns`
- **Direct Link**: [Medium: Demystifying .gitignore](https://medium.com/@jessicauk/demystifying-gitignore-and-glob-patterns-c29011e491bc)
- **Target**: A developer blog explaining glob patterns visually.
- **Landmark**: Look for examples using `**` (double asterisk).
- **Adaptation**: The double asterisk `**` is used to match directories infinitely deep, which is crucial for complex projects.

> ⚙️ **Shift to 4th Gear**: *How do Enterprise companies manage `.gitignore` across massive Monorepos? [Read 4th-gear/monorepo-ignore-strategies.md](../4th-gear/monorepo-ignore-strategies.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/why-ignore-node-modules.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/02-express-setup.md)
