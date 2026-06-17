# ⚙️ 4th Gear: Semantic Versioning (SemVer)

*(Scroll to the very bottom of this document to shift gears to another topic)*

Open your `package.json`. You will see something like `"express": "^4.18.2"`.
What do those numbers mean?

## MAJOR.MINOR.PATCH
In the software industry, we use **Semantic Versioning**.
- **4 (MAJOR)**: Breaking changes. If you upgrade from `4.x.x` to `5.x.x`, your app might crash because the Express developers deleted old functions.
- **18 (MINOR)**: New features, but entirely backwards compatible.
- **2 (PATCH)**: Bug fixes only. Completely safe to upgrade.

The `^` symbol means: "If I run `npm install` tomorrow, it's okay to automatically upgrade to `4.18.3` or `4.19.0`, but DO NOT upgrade to `5.0.0`".

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:semver.org`
- **Direct Link**: [Semantic Versioning 2.0.0](https://semver.org/)
- **Target**: The Semantic Versioning 2.0.0 official manifesto.
- **Landmark**: Rule #8.
- **Adaptation**: In enterprise teams, controlling version drift is critical.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com difference between tilde and caret in package.json`
- **Direct Link**: [StackOverflow: Tilde vs Caret](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)
- **Target**: The classic thread explaining `~` vs `^`.
- **Landmark**: Look for the visual tables in the top answer.
- **Adaptation**: Knowing the difference between `~1.2.3` and `^1.2.3` is a common interview question for Junior Node developers.

> ⚙️ **Shift to 5th Gear**: *Want to read the actual C++/JS source code that parses `package.json`? [Read 5th-gear/npm-cli-source-code.md](../5th-gear/npm-cli-source-code.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/dependency-trees.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/02-express-setup.md)
