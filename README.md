## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Reason for Server-Side Rendering (SSR):

In our project, **SSR (Server-Side Rendering)** is useful when the page's content changes frequently or requires dynamic information, such as personalized data for logged-in users or real-time data from an external source.

For example, the **Product Details Page** would be a suitable use case for SSR. When the inventory levels or price of a product are updated regularly, using SSR ensures that each time a user visits the page, they receive the most current and accurate information. This is particularly important for pages where up-to-date content is essential to user experience and SEO.

---

### Reason for Static Site Generation (SSG):

Conversely, both the **Home Page** and **Create Product** pages can benefit from **SSG (Static Site Generation)** because they involve interactions and some onClick actions, but their core content doesn't change frequently.

This allows these pages to be pre-built during the build process and served quickly. **SSG** significantly boosts performance and SEO due to the static nature of these pages, making it ideal for content like the Home Page or Product Listing Page, which doesn't require constant updates.

## Packages Used

- **TailwindCSS**: TailwindCSS is used for styling the application with utility-first CSS classes, allowing us to create a responsive and highly customizable design system efficiently.

- **React Hook Form**: React Hook Form is responsible for managing and validating form data with minimal re-renders, leading to better performance and ease of handling forms.

- **Sharp**: Sharp is used for image processing tasks such as resizing and optimizing uploaded images to improve the performance and user experience in handling media content.

- **Zod**: Zod is utilized for schema validation, ensuring that the submitted form data matches the expected structure and preventing incorrect data from being processed.

- **Zustand**: Zustand provides a lightweight and flexible state management solution to handle global state across various components, ensuring consistent and reliable data flow throughout the application.
