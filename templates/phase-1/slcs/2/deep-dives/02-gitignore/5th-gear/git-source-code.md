# ⚙️ 5th Gear: Sage Mode (Git Source Code)

*(Scroll to the very bottom of this document to shift gears to another topic)*

You are in the abyss. How does the core Git engine, written by Linus Torvalds, actually implement pattern matching for `.gitignore` files?

**CRITICAL REMINDER**: Zero code snippets allowed. Find it yourself.

## 📖 External Reference Study (Source Code Scavenger Hunt)

**1. The Official Open Source Code**
- **Advanced Googling**: `site:github.com git/git dir.c`
- **Direct Link**: [GitHub: git/git](https://github.com/git/git)
- **Target**: The `dir.c` (Directory parsing C code) file.
- **Landmark**: Search the file (Ctrl+F) for `last_exclude_matching`.
- **Adaptation**: Look closely at how the C code handles the `!` negation logic. It parses the pattern string, checks for the `!` prefix, and mathematically inverts the match.

**2. The Community Perspective**
- **Advanced Googling**: `site:hackernoon.com how git works under the hood`
- **Direct Link**: [HackerNoon: Git Under the Hood](https://hackernoon.com/how-git-works-under-the-hood)
- **Target**: An architectural breakdown of Git.
- **Landmark**: Look for the explanation of blobs, trees, and commits.
- **Adaptation**: Understanding the C structs makes it clear why ignoring `node_modules` saves so much time: it stops Git from hashing 100,000 text files into blobs!

---
🧭 **Navigation**
[🔙 Climb up to 4th Gear](../4th-gear/monorepo-ignore-strategies.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/02-express-setup.md)
