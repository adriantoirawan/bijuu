# ⚙️ 4th Gear: Dependency Injection (Enterprise Standard)

*(Scroll to the very bottom of this document to shift gears to another topic)*

Currently, your `Model` file probably imports the connection pool directly at the very top of the file.

While this works, enterprise applications use a pattern called **Dependency Injection (DI)**. 

Instead of the Model importing the Pool directly via `require`, design your static Model methods to accept the `pool` object as a parameter. The Controller will pass it in.

Why? Because when writing Automated Tests, you don't want to connect to the real production database! By injecting the pool, you can inject a "Fake" test database instead.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:jestjs.io mocking node modules`
- **Direct Link**: [Jest Docs: Mock Functions](https://jestjs.io/docs/mock-functions)
- **Target**: Jest (the industry standard testing framework).
- **Landmark**: Look at how difficult it is to mock `require` vs passing a mock parameter.
- **Adaptation**: Writing testable code is a hallmark of a Senior Engineer. DI makes testing effortless.

### 2. The Community Perspective
- **Advanced Googling**: `site:risingstack.com dependency injection nodejs`
- **Direct Link**: [RisingStack DI Guide](https://blog.risingstack.com/dependency-injection-in-node-js/)
- **Target**: RisingStack's guide to Node DI.
- **Landmark**: Scroll to "Constructor Injection" or similar DI examples.
- **Adaptation**: Notice how they pass the database object into the class constructor (or method) instead of requiring it at the top of the file.

> ⚙️ **Shift to 5th Gear**: *Want to read the C++ engine that powers Node's module system? [Read 5th-gear/node-require-source-code.md](../5th-gear/node-require-source-code.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/module-exports-internals.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
