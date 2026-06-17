# ⚙️ 2nd Gear: The Danger of God Files

*(Scroll to the very bottom of this document to shift gears to another topic)*

Separation of Concerns is the architectural principle of dividing a computer program into distinct sections.

## God Files
If you write your Express Server, your Database Connection, your SQL queries, and your Business Logic all inside `app.js`, you have created a "God File".
If your teammate makes a typo in the Database Connection, it crashes the Express Server. 

## `module.exports`
Node.js gives us the CommonJS module system. By moving the Database Connection to `config.js` and exposing it via `module.exports`, we isolate the database. If `config.js` breaks, it fails in isolation.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:nodejs.org module.exports`
- **Direct Link**: [Node.js CommonJS Docs](https://nodejs.org/api/modules.html#moduleexports)
- **Target**: The Node documentation on how exporting works.
- **Landmark**: Scroll to `module.exports`.
- **Adaptation**: Notice that everything inside a file is completely private and invisible to the rest of the app until you explicitly attach it to the `module.exports` object.

### 2. The Community Perspective
- **Advanced Googling**: `site:softwareengineering.stackexchange.com god object anti pattern`
- **Direct Link**: [SoftwareEngineering StackExchange: God Object](https://softwareengineering.stackexchange.com/questions/116811/what-is-a-god-class)
- **Target**: A software architecture discussion.
- **Landmark**: Look for the definition of "knowing too much or doing too much".
- **Adaptation**: The God Object is universally recognized as one of the worst anti-patterns in software engineering because it makes team collaboration impossible (merge conflicts everywhere).

> ⚙️ **Shift to 3rd Gear**: *Wait, if two different files `require('./config')`, does Node run the config file twice? [Read 3rd-gear/module-exports-internals.md](../3rd-gear/module-exports-internals.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
