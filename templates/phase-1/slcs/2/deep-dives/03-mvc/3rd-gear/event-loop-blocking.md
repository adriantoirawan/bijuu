# ⚙️ 3rd Gear: Event Loop & Blocking

*(Scroll to the very bottom of this document to shift gears to another topic)*

Why must we use the `await` keyword when calling our Model methods inside the Controller? 

Node.js is single-threaded. This means it can only do one thing at a time. If it stopped everything to wait for the Postgres database to return the data, no other user could load the website!

## The Event Loop
Node.js uses an Event Loop. When you call an `async` database query, Node offloads that heavy network request to the system kernel and instantly moves on to serve other users. When Postgres finishes, the result is placed back onto the Event Queue, and the `await` keyword pauses your specific Controller function until the data arrives.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:nodejs.org event loop`
- **Direct Link**: [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- **Target**: The official Node.js "Event Loop, Timers, and process.nextTick" guide.
- **Landmark**: Look for the Phase Overview diagram (`timers -> pending callbacks -> idle, prepare -> poll...`).
- **Adaptation**: In Live Codes, failing to use `await` results in a `Promise { <pending> }` object hitting your EJS view, crashing the page. 

### 2. The Community Perspective
- **Advanced Googling**: `site:medium.com node js event loop explained visually`
- **Direct Link**: [Medium: Node.js Event Loop Visualized](https://medium.com/@jasnell/the-node-js-event-loop-1b033aa701fa)
- **Target**: A visual blog post about the event loop.
- **Landmark**: Look for the analogy of a restaurant waiter.
- **Adaptation**: The waiter (Node thread) takes your order (Query), gives it to the kitchen (Postgres), and serves other tables while waiting.

> ⚙️ **Shift to 4th Gear**: *How does MVC scale into Enterprise level architecture? [Read 4th-gear/clean-architecture.md](../4th-gear/clean-architecture.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/the-controller.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
