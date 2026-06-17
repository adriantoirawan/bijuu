# ⚙️ 2nd Gear: The Router (The Traffic Cop)

*(Scroll to the very bottom of this document to shift gears to another topic)*

The Router is the entry point. When someone types `localhost:3000/items` into their browser, the Express Router matches the string `/items` and forwards the request to the correct Controller method.

- It keeps `app.js` clean. Imagine having 100 routes inside `app.js`. It would be unreadable. By using `express.Router()`, you can modularize your traffic control.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:expressjs.com express.router`
- **Direct Link**: [Express Router API](https://expressjs.com/en/4x/api.html#router)
- **Target**: The official API documentation for `express.Router`.
- **Landmark**: Look at the code example for `birds.js`.
- **Adaptation**: Notice how they export the router and then mount it to a specific path in the main application file. This is exactly what you do in your `index.js`.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com app.get vs express.router`
- **Direct Link**: [StackOverflow: Difference between app.get and express.Router](https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get)
- **Target**: Community thread explaining when to use which.
- **Landmark**: Read the accepted answer.
- **Adaptation**: The router acts as a "mini-application", allowing you to group related routes and apply middleware specifically to that group.

> ⚙️ **Shift to 3rd Gear**: *How does Express know not to block the event loop while waiting for the router? [Read 3rd-gear/event-loop-blocking.md](../3rd-gear/event-loop-blocking.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
