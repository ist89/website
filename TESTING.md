# Local Testing Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory with:

```env
MEDIUM_USERNAME=your_medium_handle
GITHUB_USERNAME=your_github_handle
FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
SITE_URL=http://localhost:3000
```

**Note:** For local testing, you can leave these empty or use placeholder values. The site will work without them, but some features won't function:
- Without `GITHUB_USERNAME`: Projects page will show a message
- Without `MEDIUM_USERNAME`: Blog page will show a message
- Without `FORMSPREE_ID`: Contact form will use mailto fallback

### 3. Add Required Assets

Place these files in the `public/` directory:
- `resume.pdf` - Your resume (or create a dummy PDF for testing)
- `avatar.jpg` - Your profile photo (or use a placeholder image)
- `og-image.png` - Open Graph image (1200x630px, optional for testing)
- `favicon.ico` - Site favicon (optional for testing)

**Quick test without assets:**
- The site will work, but images will show broken image icons
- You can use placeholder images from [placeholder.com](https://placeholder.com) or [unsplash.com](https://unsplash.com)

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## Testing Checklist

### ✅ Basic Functionality

- [ ] **Home Page (`/`)**
  - Hero section displays correctly
  - Animated background is visible
  - "View Resume" and "View Projects" buttons work
  - Smooth fade-in animations

- [ ] **Navigation**
  - Header is sticky and translucent
  - All navigation links work
  - Active page is highlighted
  - Smooth page transitions

- [ ] **About Page (`/about`)**
  - Bio text displays
  - Skills badges show
  - Avatar image loads (if provided)
  - Layout is balanced (feng-shui style)

- [ ] **Experience Page (`/experience`)**
  - Timeline displays correctly
  - Each experience item animates on scroll
  - Technologies badges show
  - Dates and descriptions are readable

- [ ] **Projects Page (`/projects`)**
  - If `GITHUB_USERNAME` is set: Projects load from GitHub
  - If not set: Shows configuration message
  - Project cards display with:
    - Name, description
    - Star count
    - Language badge
    - Topics/tags
    - GitHub link icon

- [ ] **Blog Page (`/blog`)**
  - If `MEDIUM_USERNAME` is set: Articles load from Medium RSS
  - If not set: Shows configuration message
  - Article cards display with:
    - Title, excerpt
    - Publication date
    - "Read on Medium" link

- [ ] **Contact Page (`/contact`)**
  - Contact form displays
  - Form validation works
  - If `FORMSPREE_ID` is set: Form submits to Formspree
  - If not set: Uses mailto fallback
  - Social links section displays
  - All social icons are clickable

- [ ] **Resume Page (`/resume`)**
  - Download and view buttons display
  - PDF viewer loads (if `resume.pdf` exists)
  - Links work correctly

- [ ] **404 Page**
  - Navigate to `/nonexistent` to test
  - Shows custom 404 design
  - "Return Home" button works

### ✅ Responsive Design

Test on different screen sizes:
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)

Check:
- Navigation menu adapts
- Cards stack properly
- Text is readable
- Images scale correctly
- Touch targets are adequate

### ✅ Animations & Interactions

- [ ] Page transitions are smooth
- [ ] Scroll reveals work (sections fade in)
- [ ] Hover effects on buttons and cards
- [ ] Reduced motion preference is respected
- [ ] No janky animations or layout shifts

### ✅ Performance

Run Lighthouse audit:
```bash
# Build for production first
npm run build
npm start
```

Then test at http://localhost:3000 with Chrome DevTools Lighthouse:
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### ✅ Browser Compatibility

Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Run `npm install` again

### Issue: Tailwind styles not applying
**Solution:** 
1. Check `tailwind.config.ts` exists
2. Restart dev server
3. Clear `.next` folder: `rm -rf .next` (or `rmdir /s .next` on Windows)

### Issue: GitHub projects not loading
**Solution:**
1. Check `GITHUB_USERNAME` in `.env.local`
2. Verify username is correct (no @ symbol)
3. Check browser console for API errors
4. GitHub API may have rate limits (60 requests/hour for unauthenticated)

### Issue: Medium articles not loading
**Solution:**
1. Check `MEDIUM_USERNAME` in `.env.local`
2. Verify username format (no @ symbol, just the handle)
3. Check browser console for RSS parsing errors
4. Medium RSS feeds can be slow or unavailable

### Issue: Contact form not working
**Solution:**
1. Check `NEXT_PUBLIC_FORMSPREE_ID` is set (required for client-side)
2. Verify Formspree form ID is correct
3. Check browser console for errors
4. Test mailto fallback (remove Formspree ID)

### Issue: Images not loading
**Solution:**
1. Ensure images are in `public/` directory
2. Use correct paths (e.g., `/avatar.jpg` not `/public/avatar.jpg`)
3. Check file names match exactly (case-sensitive)
4. Verify image formats are supported (jpg, png, webp)

### Issue: Build errors
**Solution:**
1. Run `npm run build` to see detailed errors
2. Check TypeScript errors: `npx tsc --noEmit`
3. Check linting: `npm run lint`
4. Ensure all imports are correct

## Testing Without External Services

You can test the site fully without GitHub/Medium/Formspree:

1. **Projects Page**: Will show a helpful message
2. **Blog Page**: Will show a helpful message  
3. **Contact Form**: Will use mailto fallback (opens email client)

The core site functionality (navigation, animations, layout) will work perfectly.

## Next Steps After Testing

1. Update `data/experience.json` with your real experience
2. Update `data/pinned-projects.json` to pin specific repos
3. Add your real assets (resume, avatar, etc.)
4. Update social links in `components/Footer.tsx` and `app/contact/page.tsx`
5. Update metadata in `app/layout.tsx`
6. Customize colors in `tailwind.config.ts` if desired
7. Deploy to Vercel!

