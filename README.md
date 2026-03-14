# Riju3d — Portfolio Website

> Black + minimal purple animation portfolio. Built for GitHub Pages — zero dependencies, zero build step.

---

## 📁 File Structure

```
riju3d/
├── index.html          ← Main page (don't need to edit this often)
├── css/
│   └── style.css       ← All styles (edit colors/fonts here)
├── js/
│   ├── data.js         ← ⭐ EDIT THIS to update ALL content
│   └── main.js         ← Site logic (no need to touch)
├── images/
│   ├── placeholder*.jpg ← Replace these with your own images
│   └── profile.jpg     ← Your profile photo
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages (Step-by-step)

### 1. Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### 2. Create a new Repository
- Click the **+** icon → **New repository**
- Name it exactly: `riju3d` (or `yourusername.github.io` for a root domain)
- Set it to **Public**
- Click **Create repository**

### 3. Upload your files
**Option A — GitHub Web (easiest):**
1. Open your new repository
2. Click **Add file** → **Upload files**
3. Drag the entire `riju3d` folder contents (all files and folders)
4. Click **Commit changes**

**Option B — Git (if you know git):**
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/riju3d.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**

### 5. Your site is live! 🎉
After ~2 minutes, visit:
`https://YOURUSERNAME.github.io/riju3d`

---

## ✏️ How to Update Content

### All content lives in `js/data.js` — open it and edit:

#### Add a Showreel Video
```js
showreels: [
  {
    title: "My New Reel 2025",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    // YouTube embed: go to video → Share → Embed → copy src="..." value
    // Vimeo embed:   go to video → Share → Embed → copy src="..." value
    year: "2025",
    duration: "2:00",
    description: "My latest animation work.",
    featured: true,   // true = big card spanning full width
  },
]
```

#### Add a Gallery Image
1. Put your image file in the `/images/` folder
2. Add an entry in `data.js`:
```js
gallery: [
  {
    title: "My Character Rig",
    src: "images/myfile.jpg",     // filename must match exactly
    type: "image",                // "image" or "video"
    category: "character",       // character | vfx | motion | still
    year: "2025",
    description: "Description shown in lightbox.",
  },
]
```

#### Add a Gallery Video Clip
```js
{
  title: "Particle FX",
  src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  type: "video",          // ← important: set to "video"
  category: "vfx",
  year: "2025",
  description: "Houdini sim.",
},
```

#### Update your Bio
```js
about: {
  bio: `Write your bio here. Can be multiple sentences.`,
  skills: ["Character Animation", "Rigging", ...],
  tools: ["Blender", "Maya", ...],
}
```

#### Update Socials & Email
```js
contact: {
  email: "your@email.com",
  socials: [
    { name: "Instagram", url: "https://instagram.com/yourhandle", icon: "IG" },
    // add or remove social links here
  ],
}
```

#### Add your Profile Photo
1. Put your photo in `/images/profile.jpg`
2. Open `index.html`
3. Find the `about-photo-placeholder` div and replace with:
```html
<img src="images/profile.jpg" alt="Riju3d" class="about-photo" />
```

---

## 🎨 Customize Colors

Open `css/style.css` and edit the `:root` block at the top:

```css
:root {
  --bg:      #080808;    /* Main background */
  --purple:  #9b5de5;    /* Accent color — change this! */
  --white:   #f0eef8;    /* Main text color */
}
```

---

## 💡 Tips

- **Image sizes:** Use 1920×1080px for gallery images, 800×1000px for portrait photos
- **Video thumbnails:** The gallery shows a purple play icon for video items automatically
- **Featured showreel:** Set `featured: true` on your best reel — it spans the full width
- **Filter tabs:** Categories must match exactly: `character`, `vfx`, `motion`, `still`
- **Mobile:** The site is fully responsive — test on your phone before publishing

---

## 📦 No build step needed
This is pure HTML/CSS/JS. Just upload and it works. No npm, no frameworks.
