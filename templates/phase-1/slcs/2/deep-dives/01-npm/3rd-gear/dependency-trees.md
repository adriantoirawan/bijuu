# ⚙️ 3rd Gear: Dependency Trees

*(Scroll to the very bottom of this document to shift gears to another topic)*

When you install `express`, if you look inside your `node_modules` folder, you won't just see one folder called `express`. You will see dozens of folders (like `accepts`, `cookie`, `debug`, `qs`).

## The Tree
This is because `express` has its own `package.json` file, and it requires other libraries to function. And those libraries require other libraries.
When you run `npm install express`, NPM traverses this massive tree and downloads everything.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:docs.npmjs.com npm-install`
- **Direct Link**: [NPM Install Documentation](https://docs.npmjs.com/cli/v9/commands/npm-install)
- **Target**: Official CLI commands.
- **Landmark**: Scroll to "Algorithm".
- **Adaptation**: Notice how NPM calculates a flattened dependency tree to avoid duplicating identical sub-dependencies.

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to understanding node_modules dependency tree`
- **Direct Link**: [Dev.to: Understanding NPM Dependency Trees](https://dev.to/smpnjn/how-does-npm-install-work-46fa)
- **Target**: A developer blog breaking down the installation process.
- **Landmark**: Look for the diagrams or explanations of flat trees vs nested trees.
- **Adaptation**: In older versions of NPM, `node_modules` used to be deeply nested, causing Windows file path length errors!

> ⚙️ **Shift to 4th Gear**: *What does the `^` symbol mean in `"express": "^4.18.2"`? [Read 4th-gear/semantic-versioning.md](../4th-gear/semantic-versioning.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/manifests.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/02-express-setup.md)
