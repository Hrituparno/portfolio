# Hrituparno Chakraborty - AI Research Portfolio

A retro-futuristic, 90s-inspired portfolio website with spacey aesthetics, floating elements, and neon glow effects. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🎨 Design Inspiration

Inspired by [Lars Olson's portfolio](https://www.lars-olson.com/), this site features:
- **Retro 90s Future Aesthetic**: Dark space background with neon cyan/purple color scheme
- **Floating Elements**: Animated emojis (🍍, ✋, 🚀, ⚡) floating across the screen
- **Starfield Background**: Twinkling stars and glowing orbs
- **Neon Typography**: Glowing text effects with Space Grotesk and Space Mono fonts
- **Grid Overlay**: Subtle cyberpunk-style grid pattern
- **Scan Line Effect**: Retro CRT monitor scan line animation
- **Sharp Edges**: No rounded corners - pure 90s aesthetic

## Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Python (FastAPI) on Vercel Serverless Functions
- **Deployment**: Vercel
- **Fonts**: Space Grotesk, Space Mono (Google Fonts)

## Color Palette
- **Background**: `#0a0a14` (Deep space black)
- **Primary Accent**: `#00ffcc` (Neon cyan)
- **Secondary Accent**: `#9d4edd` (Electric purple)
- **Tertiary Accent**: `#ff006e` (Hot pink)
- **Text**: `#e0e0ff` (Light lavender)

## Project Structure
```
/
├── api/                # Python backend (FastAPI)
│   └── index.py        # API entry point
├── components/         # React components
│   ├── Hero.js         # Hero section with floating elements & starfield
│   ├── About.js        # About section with retro styling
│   ├── Projects.js     # Projects showcase with neon borders
│   ├── Skills.js       # Technical stack with glowing cards
│   ├── Experience.js   # Experience & education timeline
│   ├── AIResearch.js   # Research focus highlights
│   ├── Contact.js      # Contact form with retro inputs
│   ├── Navbar.js       # Navigation with neon effects
│   ├── Footer.js       # Footer with grid overlay
│   └── Layout.js       # Global layout wrapper
├── pages/              # Next.js pages
│   ├── _app.js         # Global app wrapper
│   └── index.js        # Main landing page
├── public/             # Static assets
├── styles/             # Global styles
│   └── globals.css     # Custom animations & retro effects
├── next.config.js      # Next.js config
├── package.json        # Frontend dependencies
├── requirements.txt    # Backend dependencies
├── tailwind.config.js  # Tailwind config with custom colors
└── vercel.json         # Vercel deployment config
```

## Local Development

Since you don't have npm locally and the site is already deployed on GitHub, you can:

1. **Make changes directly on GitHub** (for small edits)
2. **Use GitHub Codespaces** (cloud-based VS Code)
3. **Or install Node.js locally:**
   ```bash
   # Install dependencies
   npm install
   
   # Run development server
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Deployment on Vercel

Your site is already deployed! To update:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update to retro 90s design"
   git push origin main
   ```

2. **Vercel auto-deploys** from your GitHub repository
   - Every push to `main` triggers a new deployment
   - Check deployment status at [vercel.com](https://vercel.com)

## Key Features

### Visual Effects
- ✨ Animated starfield with twinkling stars
- 🌊 Floating emoji elements with physics-based motion
- 💫 Glowing neon text with pulsing effects
- 🎯 Scan line CRT effect
- 🔲 Cyberpunk grid overlay
- 🎨 Gradient color shifts

### Interactions
- 🖱️ Hover effects on all interactive elements
- 📱 Fully responsive mobile design
- ⚡ Smooth scroll animations
- 🎭 Framer Motion page transitions
- 🎪 Interactive floating elements

### Typography
- **Headers**: Space Grotesk (retro-futuristic)
- **Code/Mono**: Space Mono (terminal-style)
- **Uppercase tracking**: Retro computer aesthetic

## Customization

To adjust the retro aesthetic:

1. **Colors**: Edit `styles/globals.css` CSS variables
2. **Floating Elements**: Modify `components/Hero.js` emoji positions
3. **Animations**: Adjust keyframes in `styles/globals.css`
4. **Fonts**: Change imports in `styles/globals.css`

## Browser Support
- Chrome/Edge (recommended for best effects)
- Firefox
- Safari
- Mobile browsers

## License
MIT
