# ⚙️ 4th Gear: Client vs Server-Side (Enterprise)

*(Scroll to the very bottom of this document to shift gears to another topic)*

In Phase 1, you use EJS for **Server-Side Rendering (SSR)**.
In Phase 2, you will learn React, which traditionally uses **Client-Side Rendering (CSR)**.

## The Difference
With CSR, your Node server doesn't compile HTML. It just sends raw JSON data. The user's browser downloads the React JavaScript library, and the *browser* does the hard work of building the HTML tags. 
CSR is great for highly interactive apps, but terrible for low-end phones because the phone has to do all the processing work.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:react.dev server components`
- **Direct Link**: [React Server Components](https://react.dev/reference/rsc/server-components)
- **Target**: React Server Components documentation.
- **Landmark**: Search for the benefits of running components on the server.
- **Adaptation**: The industry is actually circling back! Modern tools like Next.js are returning to Server-Side Rendering because it improves SEO and performance on slow devices. By mastering EJS now, you are actually mastering the foundation of modern Next.js!

### 2. The Community Perspective
- **Advanced Googling**: `site:youtube.com fireship ssr vs csr`
- **Direct Link**: [YouTube/Fireship: SSR vs CSR](https://www.youtube.com/watch?v=kYmZ6H4WcI8)
- **Target**: A popular tech YouTube channel.
- **Landmark**: Watch the 100-second breakdown.
- **Adaptation**: Seeing the architecture visually animated helps cement the concepts of where the processing load is happening (Server CPU vs Client CPU).

> ⚙️ **Shift to 5th Gear**: *Ready to read the Regex that EJS uses to strip out your `<%` tags? [Read 5th-gear/ejs-compiler-source.md](../5th-gear/ejs-compiler-source.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/server-side-rendering.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/03-mvc-read-operations.md)
