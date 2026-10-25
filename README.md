# Bangla News 24

**Bangla News 24** is a Bengali-language news website built with Next.js. It provides a news browsing experience with categorized articles, individual news pages, and user authentication.

## Features

- **News Feed:** Browse the latest news articles.
- **News Categories:** Explore news by category.
- **News Details:** Read individual articles on dedicated pages.
- **User Authentication:** Sign up, sign in, and sign out using Better Auth.
- **OAuth Authentication:** Google and GitHub sign-in.
- **User Profile:** Access your profile after signing in.
- **Responsive UI:** Styled with Tailwind CSS and daisyUI.
- **Bengali Typography:** Uses the Noto Serif Bengali font.
- **Dynamic Headlines:** Displays news headlines in a scrolling marquee.
- **Production Deployment:** Supports deployment on Vercel.

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [daisyUI](https://daisyui.com/) — Tailwind CSS component library
- [Better Auth](https://www.better-auth.com/) — Authentication
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Database
- [Vercel](https://vercel.com/) — Deployment platform

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (compatible with your project's Next.js version)
- npm
- A MongoDB Atlas database
- Google and/or GitHub OAuth credentials if you want to enable social sign-in

### 1. Clone the Repository

```bash
git clone https://github.com/Irtisam99/Bangla_News24.git
cd Bangla_News24
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your application.

These may include your MongoDB connection string, Better Auth secret and base URL, and OAuth credentials.

Use the exact variable names expected by your project configuration. Obtain credentials from the relevant service dashboards.

**Important:** Never commit `.env` or expose database credentials, authentication secrets, or OAuth client secrets in your repository.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will reload as you make changes to the source code.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the lint script, if configured in `package.json` |

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── category/
│   ├── news/
│   ├── profile/
│   ├── signin/
│   ├── signup/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
└── ...
```

*Note: This is a simplified overview. The exact files and folders may vary as the project evolves.*

## Authentication

Bangla News 24 uses Better Auth for user authentication.

Depending on your configuration, users can:

- Create an account and sign in.
- Authenticate using Google or GitHub.
- Access their profile.
- Sign out of their account.

To enable OAuth in production, configure the required credentials and authorized callback URLs in the Google and GitHub developer dashboards. Ensure the production base URL matches your deployed domain.

## News Data

The application retrieves news data from an external news API. The API endpoint and response structure are defined in the relevant source files.

Ensure the API is available when running the application. If the data provider changes its endpoint or response format, the corresponding fetch logic may need to be updated.

## Production Build

To verify that the application builds successfully, run:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Deployment

The project can be deployed using [Vercel](https://vercel.com/).

1. Push the project to GitHub.
2. Import the repository into Vercel, or use the Vercel CLI.
3. Configure the required production environment variables.
4. Deploy the application.
5. Update authentication provider settings to include the production domain and callback URLs.
6. Test the news pages and authentication flows on the deployed website.

For CLI deployment, use:

```bash
vercel --prod
```

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License

No license has been specified yet. All rights are reserved by default unless a license is added to the repository.

---

**Bangla News 24** — Bengali news, built with Next.js.