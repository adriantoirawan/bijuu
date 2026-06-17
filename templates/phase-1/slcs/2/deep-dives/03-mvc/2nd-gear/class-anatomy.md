# ⚙️ 2nd Gear: The Anatomy of MVC Classes

*(Scroll to the very bottom of this document to shift gears to another topic)*

A common trap for students is memorizing that they need a `Controller` and a `Model`, but forgetting *how* to build them, specifically when to use `static` and when to use `async/await`.

## 1. The Model Layer (The Factory & The Blueprint)
The Model layer is often split into two distinct files to strictly separate data structures from database operations.

### A. The Blueprint (`class.js`)
- **Pure Data**: This file houses standard OOP class definitions (e.g., `Movie`, `ProductionHouse`).
- **Synchronous**: It contains only `constructor` functions that define the shape of your data. It does NOT talk to the database.
- **Export**: These classes are exported so the Factory can use them.

### B. The Factory (`model.js`)
- **The Muscle**: This is where your database connection (`pool.query`) lives. 
- **Static Methods**: We use `static` methods so we don't have to instantiate the `Model` class every time we fetch data.
- **Async/Await**: The database is an external program. Fetching data takes time, so every query method **MUST be asynchronous**.
- **The Bridge**: When `model.js` retrieves raw objects from the database, it iterates over them (using array mapping) and instantiates new objects using the Blueprints imported from `class.js`. It then returns this array of strictly-typed OOP instances to the Controller.

## 2. The Controller (The Asynchronous Brain)
The Controller's job is to orchestrate the flow of data.
- **Static Methods**: Like the Model, we use `static` methods to easily map them to our Express routes without instantiation.
- **Async/Await**: The Controller must ask the Model for data. Because the Model is asynchronous, the Controller **MUST also be asynchronous** so it can `await` the Model's response before calling the response render method.

## 3. The View (The Synchronous Canvas)
The View is completely dumb. It has no classes, no logic, and no `async/await`. It is simply a canvas that waits for the Controller to hand it data, which it then renders synchronously into HTML.

## 📖 External Reference Study (Class Mechanics)

### 1. The Official Documentation
- **Advanced Googling**: `site:developer.mozilla.org static async`
- **Direct Link**: [MDN Web Docs: static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- **Target**: The MDN documentation on static class methods.
- **Landmark**: Look at the "Examples" section.
- **Adaptation**: Notice how they define a method with both `static` and `async` keywords. This is exactly how you must define your Model and Controller methods!

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to why use static methods`
- **Direct Link**: [Dev.to: Understanding Static Methods in JavaScript](https://dev.to/brayanarrieta/understanding-static-methods-in-javascript-218a)
- **Target**: A community blog breaking down OOP principles.
- **Landmark**: Scroll to the "When to use static methods" section.
- **Adaptation**: The blog explains that static methods are perfect for utility functions that don't rely on the object's instance state. Database queries and HTTP handlers fit this description perfectly!

## 📖 External Reference Study (The Bridge)

### 1. The Official Documentation (Class Constructors)
- **Advanced Googling**: `site:developer.mozilla.org class constructor`
- **Direct Link**: [MDN Web Docs: constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- **Target**: MDN documentation on how to define a class blueprint.
- **Landmark**: Look at the "Syntax" and "Examples" sections.
- **Adaptation**: This is how you build your pure data structures inside `class.js` without any database logic!

### 2. The Official Documentation (Manufacturing Instances)
- **Advanced Googling**: `site:developer.mozilla.org array map`
- **Direct Link**: [MDN Web Docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- **Target**: MDN documentation on transforming arrays.
- **Landmark**: Look at the "Description" section.
- **Adaptation**: Inside `model.js`, you use this to iterate over your raw database rows, using the `new` keyword inside the map callback to manufacture instances from your `class.js` blueprints.

> ⚙️ **Shift to 3rd Gear**: *What happens if you forget to `await` the Model inside the Controller? [Read 3rd-gear/event-loop-blocking.md](../3rd-gear/event-loop-blocking.md)*

---
🧭 **Navigation**
[🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
