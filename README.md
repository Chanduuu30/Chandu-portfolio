# Chandu — Developer Portfolio

A minimal, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements

- Node.js 18.17 or newer (Node.js 20 LTS recommended)
- npm
- A GitHub account
- A Vercel account

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize before publishing

Open `app/page.tsx` and update these constants near the top:

```ts
const GITHUB_URL = "https://github.com/Chanduuu30";
const LINKEDIN_URL = "https://www.linkedin.com/";
const EMAIL = "your.email@example.com";
```

- Replace the LinkedIn URL with your real profile URL.
- Replace the email placeholder with an email address you want public.
- Confirm each project's GitHub repository URL exists. Update the MedGen URL if your repository uses a different name.
- Review the skills list and remove any skills you are not comfortable discussing in an interview.
- Add your resume PDF as `public/resume.pdf`. Until then, the resume link will point to a file that does not exist.
- Add verified live demo links only if you have deployed those projects.

## Build check

```bash
npm run build
```

## Push to a new GitHub repository

Create an **empty** repository on GitHub named `chandu-developer-portfolio` (do not initialize it with a README, license, or .gitignore if you plan to push this folder as-is).

Then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/chandu-developer-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username. GitHub may prompt you to authenticate in a browser or with a personal access token; do not paste tokens into chat or commit them to the repository.

## Deploy to Vercel

1. Sign in at https://vercel.com/ using GitHub.
2. Choose **Add New → Project**.
3. Import `chandu-developer-portfolio`.
4. Vercel should detect Next.js automatically. Keep the default build settings.
5. Select **Deploy**.
6. When deployment completes, open the generated `.vercel.app` URL.
7. Push later updates to `main`; Vercel will normally rebuild the production deployment automatically.

## Design and accessibility notes

- Responsive mobile navigation
- Reduced-motion preference support
- Semantic section landmarks and accessible menu labels
- SEO title, description, Open Graph, Twitter card, and robots metadata
- Project links open in a new tab with `rel="noreferrer"`

## Important

The project cards use likely repository names based on the project names supplied. Verify that each URL exists before publishing. This bundle does not create a GitHub repository or deploy to Vercel on your behalf.
