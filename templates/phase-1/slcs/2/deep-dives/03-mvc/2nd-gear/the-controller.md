# ⚙️ 2nd Gear: The Controller (The Brain)

*(Scroll to the very bottom of this document to shift gears to another topic)*

The Controller is the orchestrator. If you put SQL directly inside your Express route callbacks (placing `pool.query` calls directly inside your route files), your code becomes impossible to test.

By separating the logic into a `Controller` class with static methods, you isolate the HTTP logic (`req`, `res`) from the Database logic.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:expressjs.com routing callbacks`
- **Direct Link**: [Express Routing Guide](https://expressjs.com/en/guide/routing.html)
- **Target**: Express documentation on route callbacks.
- **Landmark**: Look at "Route handlers".
- **Adaptation**: Notice how they mention providing multiple callback functions. A Controller method is simply a callback function that you've moved to a different file.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com express controller pattern`
- **Direct Link**: [StackOverflow: Where do I put my controller logic in Express?](https://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application)
- **Target**: A community discussion on structuring Express apps.
- **Landmark**: Scroll through the top answers.
- **Adaptation**: The community aggressively argues for MVC separation to avoid "Spaghetti Code".

> ⚙️ **Shift to 3rd Gear**: *Why does a slow database query crash the entire server if not handled properly? [Read 3rd-gear/event-loop-blocking.md](../3rd-gear/event-loop-blocking.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
