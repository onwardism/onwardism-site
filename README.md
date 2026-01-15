# Onwardism

Open-source platform for technology media, research, and AI.

Built for engineering-led teams to make technical and strategic decisions.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Ubuntu Font** - Typography
- **Lucide React** - Icons
- **next-themes** - Dark mode support
- **shadcn/ui** - UI components (utilities included)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── careers/page.tsx
│   │   ├── company/page.tsx
│   │   ├── products/page.tsx
│   │   ├── resources/page.tsx
│   │   ├── legal/
│   │   │   ├── terms/page.tsx
│   │   │   ├── cookies/page.tsx
│   │   │   └── privacy/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── app/
│   │   │   ├── app-header.tsx
│   │   │   └── app-footer.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   ├── cookie-consent.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── icons/
│       ├── favicon.png
│       ├── icon-dark.png
│       └── icon-light.png
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Fixed header with mobile menu
- ✅ Cookie consent banner
- ✅ Legal pages (Terms, Cookies, Privacy)
- ✅ TypeScript support
- ✅ shadcn/ui utilities
- ✅ Lucide icons
- ✅ Ubuntu font family
- ✅ Custom primary color (#2e3a8c)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Color Scheme

- **Primary**: #2e3a8c (Deep blue)
- **Background**: Dynamic (light/dark mode)
- **Foreground**: Dynamic (light/dark mode)

## Pages

- **Home** (`/`) - Hero section with tagline
- **Products** (`/products`) - Product information
- **Resources** (`/resources`) - Guides and documentation
- **Company** (`/company`) - About the company
- **Careers** (`/careers`) - Job opportunities
- **Legal Pages** (`/legal/*`) - Terms, Privacy, Cookies

## License

MIT License - See [LICENSE](LICENSE) file for details.
