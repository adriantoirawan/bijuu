# ⚙️ 2nd Gear: The Model (The Vault)

*(Scroll to the very bottom of this document to shift gears to another topic)*

The Model is strictly responsible for communicating with the Database. It should never know about `req`, `res`, or the browser.

By keeping the Model pure, you can reuse the same Model method for a website (`res.render`) or a mobile app API (`res.json`).

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:node-postgres.com pool query`
- **Direct Link**: [node-postgres Pool Docs](https://node-postgres.com/features/pooling)
- **Target**: The official documentation for querying the database via a connection pool.
- **Landmark**: Scroll to the "Single query" section.
- **Adaptation**: Notice how the pool handles connecting and disconnecting automatically. Your Model just needs to call `.query()`.

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to node postgres mvc model`
- **Direct Link**: [Dev.to: Building a Node.js App with Postgres and MVC](https://dev.to/oluseyeo/how-to-create-a-simple-restful-api-with-node-js-express-and-postgresql-46p)
- **Target**: A tutorial on implementing MVC with Postgres.
- **Landmark**: Look for the `queries.js` or `models.js` file they create.
- **Adaptation**: See how they abstract all the raw SQL strings into a single file so the Controller remains clean.

> ⚙️ **Shift to 3rd Gear**: *Wait, what happens if the query takes too long? [Read 3rd-gear/event-loop-blocking.md](../3rd-gear/event-loop-blocking.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
