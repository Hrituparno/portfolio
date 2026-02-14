# 📸 Profile Photo Setup Instructions

## How to Add Your Professional Photo

### Step 1: Prepare Your Photo
1. Take the photo you provided (the one in checkered shirt)
2. Save it as `profile.jpg`

### Step 2: Add to Project
1. Place the `profile.jpg` file in the `public/` folder
2. The path should be: `public/profile.jpg`

### Step 3: Photo Optimization (Optional)
For best results, you can:
- Crop to square aspect ratio (1:1)
- Resize to 800x800 pixels
- Use any photo editor or online tool like:
  - https://www.remove.bg/ (to remove background if needed)
  - https://www.photopea.com/ (free Photoshop alternative)
  - https://squoosh.app/ (compress image)

### Retro Effects Applied Automatically:
✅ Cyan/Purple glowing borders
✅ Scan line overlay
✅ Color grading for retro look
✅ Vignette effect
✅ Floating emoji decorations (🤖 🧠)
✅ Animated glow effects

### Current Setup:
- The ProfileHero component is already configured
- It will automatically apply retro 90s effects to your photo
- The image will have professional styling with neon borders

### If Photo Doesn't Show:
1. Make sure file is named exactly: `profile.jpg` (lowercase)
2. Make sure it's in the `public/` folder
3. Refresh your browser with Ctrl+Shift+R
4. Check browser console for any errors

## 🎮 Interactive Game Feature

The RetroGame component is now live! It features:
- 8 interactive dialogue scenes
- AI characters teaching about you
- Score system
- Particle effects
- 90s arcade game aesthetic
- Learn about your journey through gameplay

Visitors can click through conversations with AI bots that explain:
- Your role as AI Research Engineer
- Your education (M.Tech)
- Your mentoring at MIT Pune
- Your projects (ScholarPulse, Flash News)
- Your tech stack
- Your mission and vision
- How to contact you

## Deploy to Netlify
After adding your photo:
```bash
git add public/profile.jpg
git commit -m "Add professional profile photo"
git push origin main
```

Netlify will auto-deploy with your photo!
