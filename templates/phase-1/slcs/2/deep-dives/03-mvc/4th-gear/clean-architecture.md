# ⚙️ 4th Gear: Clean Architecture (Enterprise MVC)

*(Scroll to the very bottom of this document to shift gears to another topic)*

MVC is the standard for Bootcamps, but in the enterprise, it often evolves into **Clean Architecture**.

In Bootcamp MVC, the Controller handles HTTP requests AND contains the business logic (e.g., calculating discounts). 
In Clean Architecture, the Controller is stripped bare. It ONLY handles HTTP, and it instantly passes the data to a "Service Layer" or "Use Case Layer".

## Why?
Because what if you want to reuse the exact same discount calculation logic in a cron job that doesn't use HTTP at all? If the logic is trapped inside an Express Controller (`req`, `res`), the cron job can't use it.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:blog.cleancoder.com clean architecture`
- **Direct Link**: [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- **Target**: Uncle Bob's original Clean Architecture blog post.
- **Landmark**: Look for the famous concentric circles diagram (Entities in the center, UI/DB on the outside).
- **Adaptation**: You don't need this for Phase 1. But understanding that MVC is just the *presentation* layer of a real application will make you a formidable Junior Developer.

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to clean architecture node js express`
- **Direct Link**: [Dev.to: Clean Architecture in Node.js](https://dev.to/rubenmateus/clean-architecture-in-node-js-2l80)
- **Target**: A practical tutorial on adapting Clean Architecture in Express.
- **Landmark**: Look at the directory structure (`src/domain`, `src/infrastructure`).
- **Adaptation**: Notice how they separate the framework (Express) from the pure business logic.

> ⚙️ **Shift to 5th Gear**: *Ready to read the actual Express source code to see how Routers are built? [Read 5th-gear/express-github-source.md](../5th-gear/express-github-source.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/event-loop-blocking.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
