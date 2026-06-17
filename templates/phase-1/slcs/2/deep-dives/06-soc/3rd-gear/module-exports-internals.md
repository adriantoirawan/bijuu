# ⚙️ 3rd Gear: `module.exports` Internals

*(Scroll to the very bottom of this document to shift gears to another topic)*

If both `ModelA.js` and `ModelB.js` import the exact same database connection file, you might think Node creates two separate database connection pools. It does not.

## Module Caching
Node.js employs **Module Caching**. 
The very first time the configuration module is imported, Node executes the file, creates the database pool, and then *caches* the resulting `module.exports` object in memory. 
When `ModelB` attempts to import the same file, Node intercepts the call and simply returns a reference to the exact same cached object in memory.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:nodejs.org modules caching`
- **Direct Link**: [Node.js Docs: Modules Caching](https://nodejs.org/api/modules.html#modules_caching)
- **Target**: Node.js official CommonJS modules documentation.
- **Landmark**: Scroll to "Caching".
- **Adaptation**: If you accidentally put an initialization script (like an instruction to drop a table) inside `config.js`, it will only run the first time `config` is required, which causes massive confusion. Code inside config files should strictly define and export, never execute.

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to node js module caching singleton`
- **Direct Link**: [Dev.to: Understanding Node.js Caching](https://dev.to/nelsoncode/understanding-node-js-module-caching-4b61)
- **Target**: A blog explaining how `require` acts like a Singleton.
- **Landmark**: Look for the code examples demonstrating state retention.
- **Adaptation**: Because of caching, `module.exports` behaves identically to the famous "Singleton" design pattern from Object-Oriented Programming!

> ⚙️ **Shift to 4th Gear**: *How do enterprise companies handle `require` dependencies for testing? [Read 4th-gear/dependency-injection.md](../4th-gear/dependency-injection.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/the-danger-of-god-files.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
