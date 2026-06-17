# ⚙️ 1st Gear: MVC Flow (Survival Mode)

*(Scroll to the very bottom of this document to shift gears to another topic)*

MVC (Model-View-Controller) organizes your code to prevent spaghetti logic.

## 1. The Router
Receives the URL request and calls the Controller.
> ⚙️ **Shift to 2nd Gear**: *How does routing work? [Read 2nd-gear/the-router.md](../2nd-gear/the-router.md)*

## 2. The Controller
The Brain. Never writes SQL. Asks the Model for data, passes it to the View.
> ⚙️ **Shift to 2nd Gear**: *Why is the Controller the brain? [Read 2nd-gear/the-controller.md](../2nd-gear/the-controller.md)*

## 3. The Model
The Muscle. Never touches `req` or `res`. Only executes SQL via the Pool.
> ⚙️ **Shift to 2nd Gear**: *How does the Model interact with Postgres? [Read 2nd-gear/the-model.md](../2nd-gear/the-model.md)*

## 4. The Syntax (Classes & Async)
Having trouble remembering when to use `static` and `async/await` in your MVC classes?
> ⚙️ **Shift to 2nd Gear**: *Read the breakdown of class mechanics. [Read 2nd-gear/class-anatomy.md](../2nd-gear/class-anatomy.md)*

## 📖 External Reference Study (Survival Mode)
1. **Docs**: Google `site:developer.mozilla.org MVC`. [Direct Link](https://developer.mozilla.org/en-US/docs/Glossary/MVC). The MDN architectural overview of MVC.
2. **Community**: Google `site:dev.to mvc architecture nodejs`. [Direct Link](https://dev.to/karanpratapsingh/mvc-architecture-in-node-js-1q2). A simple visual explanation of how the Controller bridges the Model and View.

---
🧭 **Navigation**
[🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
