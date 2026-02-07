# Hrituparno Chakraborty - AI Research Portfolio

A premium, research-grade portfolio website built with Next.js, Tailwind CSS, and Python (FastAPI). Designed for Vercel deployment.

## Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Python (FastAPI) on Vercel Serverless Functions
- **Deployment**: Vercel

## Project Structure
```
/
├── api/                # Python backend (FastAPI)
│   └── index.py        # API entry point
├── components/         # React components
│   ├── Hero.js
│   ├── About.js
│   ├── Projects.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── AIResearch.js
│   ├── Contact.js
│   ├── Navbar.js
│   ├── Footer.js
│   └── Layout.js
├── pages/              # Next.js pages
│   ├── _app.js         # Global app wrapper
│   └── index.js        # Main landing page
├── public/             # Static assets
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports
├── next.config.js      # Next.js config
├── package.json        # Frontend dependencies
├── requirements.txt    # Backend dependencies
├── tailwind.config.js  # Tailwind config
└── vercel.json         # Vercel deployment config
```

## Local Development

1. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies (Optional for local dev if not using Vercel CLI):**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment on Vercel

1. **Push to GitHub:**
   Initialize a git repository and push to GitHub.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to Vercel Dashboard -> Add New -> Project.
   - Import the GitHub repository.
   - **Framework Preset**: Next.js (Detects automatically).
   - **Root Directory**: `./`
   - **Environment Variables**: Add any required API keys (e.g., for Gemini or OpenAI if you implement them in `api/index.py`).
   - Click **Deploy**.

## Features
- **AI Research Specialist Theme**: Dark mode, clean typography, research-focused.
- **Interactive AI Agent**: Simulated CLI interface in `components/AIResearch.js` (connects to `/api/` endpoints).
- **GitHub Sync**: Projects section structure ready for API integration.
- **Responsive**: Mobile-friendly layout.

## License
MIT
