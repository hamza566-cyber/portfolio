# Deployment Guide

## GitHub Pages Configuration

### Base Path Setting

The project is currently configured with the base path `/portfolio/` in `vite.config.ts`.

**Important**: If your GitHub repository name is different from `portfolio`, you need to update the base path:

1. Open `vite.config.ts`
2. Change the `base` property to match your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

For example, if your repository is named `my-portfolio`, change it to:
```typescript
base: '/my-portfolio/',
```

### Deployment Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to main branch

3. **Manual Deployment** (Alternative):
   - Run `npm run build`
   - Push the `dist` folder contents to the `gh-pages` branch

### Local Testing

To test the production build locally with the correct base path:
```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173/portfolio/` (or your configured base path)

### Troubleshooting

- If images don't load, verify the base path matches your repository name
- If routes don't work, ensure React Router's basename matches the base path
- Clear browser cache if you see old versions after deployment

