# Hrituparno Chakraborty - AI Research Portfolio

A retro-futuristic, 90s-inspired **interactive game portfolio** with spacey aesthetics, floating elements, and neon glow effects. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🎮 NEW: Interactive Retro Game!

Your portfolio now features an **interactive 90s-style arcade game** where visitors learn about you by playing! 

### Game Features:
- 🤖 **8 AI Characters** telling your story through dialogue
- ⚡ **Score System** - Earn points for each interaction
- ✨ **Particle Effects** - Glowing animations on every click
- 📊 **Progress Tracking** - Visual indicators of game progress
- 🏆 **Completion Screen** - Final score with CTAs

### Characters You'll Meet:
1. 🤖 AI Bot - Introduction
2. 🧠 Neural Network - Your expertise
3. 🎓 Professor Bot - Education
4. 🚀 ScholarPulse AI - Flagship project
5. ⚡ Flash News Bot - Multi-agent system
6. 💻 Code Master - Tech stack
7. 🌟 Vision AI - Your mission
8. 📧 Contact Bot - How to reach you

## 📸 Professional Profile Section

Features your photo with automatic retro effects:
- Dual glowing borders (cyan + purple)
- Animated pulsing glow
- Scan line overlay
- 90s color grading
- Floating emoji decorations
- Stats display (Languages, Projects, Degrees)

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
├── api/                # Python backend (not used in Netlify)
├── components/         # React components
│   ├── Hero.js         # Hero section with floating elements & starfield
│   ├── ProfileHero.js  # Professional profile with photo effects ⭐ NEW
│   ├── RetroGame.js    # Interactive game component 🎮 NEW
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
│   ├── profile.jpg     # Your professional photo (add this!) 📸
│   └── profile-placeholder.svg  # Placeholder until photo added
├── styles/             # Global styles
│   └── globals.css     # Custom animations & retro effects
├── netlify.toml        # Netlify deployment config
├── package.json        # Frontend dependencies
├── tailwind.config.js  # Tailwind config with custom colors
├── PHOTO-SETUP.md      # Photo setup instructions 📸
├── GAME-FEATURES.md    # Game documentation 🎮
└── ADD-PHOTO-HERE.txt  # Quick photo guide
```

## 🚀 Quick Start

### 1. Add Your Photo (Important!)
```bash
# Save your photo as profile.jpg in the public/ folder
# Location: public/profile.jpg
# See ADD-PHOTO-HERE.txt for detailed instructions
```

### 2. Deploy to Netlify

Since you don't have npm locally and the site is already on GitHub:

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign up/Login** with GitHub
3. **Add new site** → Import from GitHub
4. **Select** your portfolio repository
5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Deploy!** (takes 2-3 minutes)

### 3. Auto-Deploy on Push
Every time you push to GitHub, Netlify automatically rebuilds and deploys!

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 🎮 Interactive Game

Play the retro quest to learn about Hrituparno's journey:
- Navigate through 8 dialogue scenes
- Meet different AI characters
- Earn points for each interaction
- Complete the quest to unlock contact info

## 📸 Photo Setup

**Important**: Add your professional photo for the best experience!

1. Save your photo as `profile.jpg`
2. Place in `public/` folder
3. Commit and push to GitHub
4. Netlify auto-deploys with your photo!

See `PHOTO-SETUP.md` for detailed instructions.

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
