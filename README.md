# EventPulse

EventPulse is a Next.js application designed to help users discover and manage events. It leverages Firebase for backend services and provides a user-friendly interface for browsing event details, and potentially more features in the future.

## Project Structure

The project is organized as follows:

*   **`src/app`**: Contains the main application pages, including:
    *   `page.tsx`: The main landing page.
    *   `events/[eventId]/page.tsx`: The page for displaying details of a specific event.
*   **`src/components`**: Houses reusable UI components.
    *   `common/Header.tsx`: The application header.
    *   `event/EventCard.tsx`: Component for displaying event summaries.
    *   `event/EventDetailsClient.tsx`: Client-side component for event details.
    *   `ui/`: Contains various UI elements like buttons, cards, forms, etc.
*   **`src/ai`**: Includes files related to AI integrations (e.g., `genkit.ts`).
*   **`src/hooks`**: Custom React hooks.
*   **`src/lib`**: Utility functions and mock data.
*   **`src/types`**: TypeScript type definitions.
*   **`docs/`**: Contains project documentation, like `blueprint.md`.
*   **Configuration Files**: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `apphosting.yaml`, etc.

## Getting Started

To get started with development:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start by exploring `src/app/page.tsx` to understand the main entry point of the application.

## Key Technologies

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS
*   Firebase (implied by context, confirm if used for backend services like auth, database, hosting)
*   Genkit (for AI features)

## Future Enhancements

(Add any planned features or improvements here)
