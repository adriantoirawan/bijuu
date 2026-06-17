# ⚙️ 2nd Gear: Why ignore node_modules?

*(Scroll to the very bottom of this document to shift gears to another topic)*

When you install Express, `node_modules` instantly fills up with thousands of files. 

## The Size Problem
If you run `git add .` without a `.gitignore` file, you will commit all 10,000 files to your Git history. 
When you push to GitHub, it will take 5 minutes. When your teammate pulls your code, they will have to download 50 Megabytes of third-party code.

Instead, we commit the blueprint (`package.json`) and ignore the heavy bricks (`node_modules`). Your teammate pulls the tiny blueprint, and runs `npm install` on their own machine to generate their own bricks.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:git-scm.com ignoring files`
- **Direct Link**: [Git Documentation: gitignore](https://git-scm.com/docs/gitignore)
- **Target**: The official Git documentation on `.gitignore`.
- **Landmark**: Look at the basic examples section showing how to ignore directories.
- **Adaptation**: Syntax matters. Writing `node_modules/` ignores the directory. Writing `*.log` ignores all log files.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com why put node_modules in gitignore`
- **Direct Link**: [StackOverflow: Should I commit node_modules?](https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere)
- **Target**: Community discussion on ignoring modules.
- **Landmark**: Read the explanations about repository bloat.
- **Adaptation**: You will learn that committing `node_modules` is considered a cardinal sin in the JavaScript ecosystem.

> ⚙️ **Shift to 3rd Gear**: *How does Git actually parse the ignore file? [Read 3rd-gear/pattern-matching.md](../3rd-gear/pattern-matching.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/02-express-setup.md)
