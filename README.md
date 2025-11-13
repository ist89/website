# Tom Davidov - Personal Website

A modern, minimalistic personal portfolio website built with Next.js, featuring a futuristic dark blue theme with smooth animations. Single-page scroll experience with smooth section transitions.

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
   git clone https://github.com/ist89/website.git
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
   MEDIUM_USERNAME=t.dav89
   GITHUB_USERNAME=ist89
   FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
   SITE_URL=http://localhost:3000
   ```
   
   **Note:** Replace `your_email@example.com` with your actual email address. Never commit `.env.local` to git!
   
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
   - Update social links in `components/Footer.tsx` and `components/sections/ContactSection.tsx`
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

1. **Push to GitHub** (if not already done)
   ```bash
   git remote add origin https://github.com/ist89/website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variables in Vercel dashboard:
     - `MEDIUM_USERNAME` (e.g., `t.dav89`)
     - `GITHUB_USERNAME` (e.g., `ist89`)
     - `FORMSPREE_ID` (optional)
     - `NEXT_PUBLIC_FORMSPREE_ID` (optional)
     - `NEXT_PUBLIC_CONTACT_EMAIL` (your email address)
     - `SITE_URL` (your production URL)
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
   - Add your custom domain (e.g., `tomdavidov.com`)

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
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page (single-page scroll)
│   ├── resume/            # Resume viewer (separate page)
│   ├── not-found.tsx      # 404 page
│   └── ...                # Other route files
├── components/            # React components
│   ├── sections/         # Page sections (Home, About, etc.)
│   ├── ui/               # UI primitives (Button, Card, Badge)
│   ├── cards/            # Card components (Project, Article, Timeline)
│   ├── motion/           # Animation components
│   ├── background/       # Background effects
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer with social links
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

**Tom Davidov**
- GitHub: [@ist89](https://github.com/ist89)
- LinkedIn: [Tom Davidov](https://www.linkedin.com/in/tom-davidov-2108b4a3)
- Medium: [@t.dav89](https://medium.com/@t.dav89)

---

Built with ❤️ using Next.js and Tailwind CSS

