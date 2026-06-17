# ⚙️ 4th Gear: REST API Standards (Enterprise)

*(Scroll to the very bottom of this document to shift gears to another topic)*

In Phase 1, you use HTML forms that trigger `application/x-www-form-urlencoded` requests. 

In Phase 2 and beyond, you will drop EJS completely. Your frontend will be built in React or Vue, and it will send requests using `application/json`.

## The RESTful Standard
Enterprise APIs follow REST standards.
Instead of sending a user to `/movies/add`, the frontend sends a `POST` request to `/movies` with a JSON payload. The backend doesn't respond with an HTML page; it responds with a JSON success message.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:restfulapi.net`
- **Direct Link**: [REST API Tutorial](https://restfulapi.net/)
- **Target**: What is REST.
- **Landmark**: Scroll to "Architectural Constraints".
- **Adaptation**: In enterprise, your Node server never renders EJS. It solely receives JSON and replies with JSON. The frontend is a completely separate application.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com rest vs soap`
- **Direct Link**: [StackOverflow: REST vs SOAP](https://stackoverflow.com/questions/19884295/soap-vs-rest-differences)
- **Target**: The classic thread discussing the history of web standards.
- **Landmark**: Read the top highly-upvoted answers.
- **Adaptation**: REST won the web because JSON is incredibly lightweight and natively understood by JavaScript, unlike XML which SOAP required.

> ⚙️ **Shift to 5th Gear**: *Want to see the source code of the famous `body-parser` module? [Read 5th-gear/body-parser-source.md](../5th-gear/body-parser-source.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/http-post-mechanics.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/04-create-data-form.md)
