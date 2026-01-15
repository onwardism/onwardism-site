# Next.js App

A modern web application built with Next.js, React, Tailwind CSS, Lucide React, and shadcn/ui.

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
- **Lucide React** - Icons
- **shadcn/ui** - UI components (utilities included)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── legal/
│   │   │   ├── terms/page.tsx
│   │   │   ├── cookies/page.tsx
│   │   │   └── privacy/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Features

- ✅ Responsive design
- ✅ Dark mode support (via Tailwind)
- ✅ Legal pages (Terms, Cookies, Privacy)
- ✅ TypeScript support
- ✅ shadcn/ui utilities
- ✅ Lucide icons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
