# Hamza Parvaiz Portfolio Website

A modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS, designed to showcase professional work and services.

## Features

- Modern, responsive design
- Dark theme with custom color scheme
- Multiple pages: Home, About, Services, Projects, Skills, Blog, Contact
- Smooth navigation and animations
- Optimized for GitHub Pages deployment

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Typography & Colors

- **Titles**: Unbounded font, 44px, white (#FFFFFF)
- **Subtitles**: Poppins font, 18px, #C7C7C7
- **Paragraphs**: Poppins font, 18px, white or #C7C7C7
- **Accent Color**: #FFC20C (yellow)
- **Background**: Dark theme (#0A0A0A)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

Alternatively, you can manually deploy:
1. Run `npm run build`
2. Push the `dist` folder to the `gh-pages` branch

## Project Structure

```
portfolio/
├── public/
│   └── imajes/          # Images
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/      # GitHub Actions workflows
└── package.json
```

## License

Copyright © 2025 Hamza Parvaiz. All Rights Reserved.

