# Todor Davidov - Personal Website

A modern, minimalistic personal portfolio website built with Next.js, featuring a futuristic dark blue theme with smooth animations.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **GitHub Integration**: Automatic fetching of repositories via GitHub API
- **Medium Integration**: RSS feed integration for blog articles
- **Responsive Design**: Fully responsive and accessible
- **SEO Optimized**: Complete metadata and Open Graph support
- **Performance**: Optimized for Lighthouse scores 90+

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- GitHub account (for projects integration)
- Medium account (optional, for blog integration)
- Formspree account (optional, for contact form)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   MEDIUM_USERNAME=your_medium_handle
   GITHUB_USERNAME=your_github_handle
   FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
   SITE_URL=https://tdavidov.com
   ```
   
   **Important:** Never commit `.env.local` to git - it contains sensitive information!

4. **Add your assets**
   
   Place the following files in the `public/` directory:
   - `resume.pdf` - Your resume PDF
   - `avatar.jpg` - Your profile photo
   - `og-image.png` - Open Graph image (1200x630px recommended)
   - `favicon.ico` - Site favicon

5. **Update personal information**
   
   - Edit `data/experience.json` with your work experience
   - Edit `data/pinned-projects.json` to pin specific GitHub repositories
   - Update social links in `components/Footer.tsx` and `app/contact/page.tsx`
   - Update metadata in `app/layout.tsx`

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variables in Vercel dashboard:
     - `MEDIUM_USERNAME`
     - `GITHUB_USERNAME`
     - `FORMSPREE_ID`
     - `NEXT_PUBLIC_FORMSPREE_ID`
     - `SITE_URL`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables**
   - Go to your project settings on Vercel
   - Add all environment variables from `.env.local`

## 🌐 Connecting Custom Domain (Namecheap)

1. **Add domain in Vercel**
   - Go to your project settings → Domains
   - Add your domain (e.g., `tdavidov.com`)

2. **Configure DNS in Namecheap**
   - Log in to Namecheap
   - Go to Domain List → Manage → Advanced DNS
   - Add/Update the following records:
     ```
     Type: A Record
     Host: @
     Value: 76.76.21.21
     TTL: Automatic
     
     Type: CNAME Record
     Host: www
     Value: cname.vercel-dns.com
     TTL: Automatic
     ```
   - Note: Vercel may provide different IP addresses. Check your Vercel domain settings for the exact values.

3. **Wait for propagation**
   - DNS changes can take up to 48 hours to propagate
   - You can check status in Vercel dashboard

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience timeline
│   ├── projects/          # GitHub projects
│   ├── blog/              # Medium articles
│   ├── contact/           # Contact form
│   ├── resume/            # Resume viewer
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # UI primitives
│   ├── cards/            # Card components
│   ├── motion/           # Animation components
│   └── background/       # Background effects
├── lib/                  # Utility functions
│   ├── github.ts         # GitHub API integration
│   ├── medium.ts         # Medium RSS integration
│   └── utils.ts          # Helper functions
├── data/                 # Static data
│   ├── experience.json   # Work experience
│   └── pinned-projects.json # Pinned repos
└── public/               # Static assets
    ├── resume.pdf
    ├── avatar.jpg
    └── og-image.png
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: "#0B1220",      // Main background
  surface: "#0F1B2D",         // Card backgrounds
  accent: "#3B82F6",          // Primary accent
  text: {
    primary: "#FFFFFF",        // Primary text
    secondary: "#C7D2FE",     // Secondary text
  },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. Change Google Fonts imports as needed.

### Animations

Animation settings can be adjusted in:
- `components/motion/PageTransition.tsx` - Page transitions
- `components/motion/Reveal.tsx` - Scroll reveals
- `components/background/AnimatedGradient.tsx` - Background animation

## 🔧 Troubleshooting

### GitHub API Rate Limiting
- The GitHub API has rate limits for unauthenticated requests
- Consider adding a GitHub token if you hit limits (not included in this setup)

### Medium RSS Feed Issues
- Ensure your Medium username is correct
- Medium RSS feeds may take time to update

### Formspree Not Working
- Verify `NEXT_PUBLIC_FORMSPREE_ID` is set correctly
- Check Formspree dashboard for form submissions
- The form falls back to `mailto:` if Formspree is not configured

## 📝 License

This project is private and proprietary.

## 👤 Author

**Todor Davidov**
- Website: [tdavidov.com](https://tdavidov.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Medium: [@yourusername](https://medium.com/@yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS

