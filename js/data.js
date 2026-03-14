/**
 * ============================================================
 *  RIJU3D — SITE DATA
 *  Edit this file to update ALL content on the website.
 *  No coding knowledge required for most changes.
 * ============================================================
 */

const siteData = {

  /* ─────────────────────────────────────────
     SHOWREEL VIDEOS
     Use YouTube or Vimeo embed links.

     YouTube:  https://www.youtube.com/embed/VIDEO_ID
     Vimeo:    https://player.vimeo.com/video/VIDEO_ID

     To get the embed link:
     - YouTube → Share → Embed → copy the src="..." value
     - Vimeo   → Share → Embed → copy the src="..." value
  ───────────────────────────────────────── */
  showreels: [
    {
      id: "sr1",
      title: "Animation Demo Reel 2024",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← replace with your URL
      year: "2024",
      duration: "2:34",
      description: "Character animation, VFX, and motion design highlights from 2024.",
      featured: true,   // featured = larger card
    },
    {
      id: "sr2",
      title: "VFX Breakdown 2023",
      embedUrl: "https://player.vimeo.com/video/76979871",   // ← replace with your URL
      year: "2023",
      duration: "1:50",
      description: "Behind-the-scenes VFX breakdown of select projects.",
      featured: false,
    },
  ],

  /* ─────────────────────────────────────────
     GALLERY / SELECTED WORK
     For images: put the file in the /images/ folder
     and set  src: "images/yourfile.jpg"

     For video clips: use a YouTube/Vimeo embed URL
     and set  type: "video"

     Categories: "character" | "vfx" | "motion" | "still"
  ───────────────────────────────────────── */
  gallery: [
    {
      id: "g1",
      title: "Dragon Rig — Walk Cycle",
      src: "images/placeholder1.jpg",   // ← replace with your image
      type: "image",                    // "image" or "video"
      category: "character",
      year: "2024",
      description: "Full body rig and walk cycle animation for a fantasy dragon character.",
    },
    {
      id: "g2",
      title: "Particle Storm FX",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ← replace
      type: "video",
      category: "vfx",
      year: "2024",
      description: "Houdini particle simulation rendered in Arnold.",
    },
    {
      id: "g3",
      title: "Title Sequence",
      src: "images/placeholder2.jpg",   // ← replace
      type: "image",
      category: "motion",
      year: "2023",
      description: "Cinema 4D motion graphics title sequence.",
    },
    {
      id: "g4",
      title: "Character Portrait — Kepler",
      src: "images/placeholder3.jpg",   // ← replace
      type: "image",
      category: "still",
      year: "2023",
      description: "3D character concept art rendered in Blender + Cycles.",
    },
    {
      id: "g5",
      title: "Rigging Breakdown",
      src: "images/placeholder4.jpg",   // ← replace
      type: "image",
      category: "character",
      year: "2022",
      description: "Custom facial rig with FACS-based blendshapes.",
    },
    {
      id: "g6",
      title: "Fluid Sim Loop",
      src: "images/placeholder5.jpg",   // ← replace
      type: "image",
      category: "vfx",
      year: "2022",
      description: "Seamless fluid simulation loop for a product visualisation.",
    },
  ],

  /* ─────────────────────────────────────────
     ABOUT SECTION
  ───────────────────────────────────────── */
  about: {
    bio: `Hi, I'm Riju — a 3D animator and motion artist passionate about building 
          characters that breathe and worlds that feel alive. With a background in 
          classical animation principles and modern real-time workflows, I bridge 
          the gap between technical precision and artistic storytelling.`,

    skills: [
      "Character Animation",
      "Rigging & Skinning",
      "VFX & Simulations",
      "Motion Graphics",
      "3D Modelling",
      "Lighting & Rendering",
    ],

    tools: [
      "Blender", "Maya", "Cinema 4D", "Houdini",
      "After Effects", "Nuke", "Arnold", "Cycles",
      "Substance", "ZBrush",
    ],

    // Replace with your photo: put profile.jpg in /images/ folder
    // then in index.html uncomment the <img> tag and remove the placeholder div
    photo: "images/profile.jpg",
  },

  /* ─────────────────────────────────────────
     CONTACT & SOCIALS
  ───────────────────────────────────────── */
  contact: {
    email: "hello@riju3d.com",   // ← your email
    copy: "Open for freelance projects, collaborations, and full-time opportunities.",

    socials: [
      { name: "Instagram",  url: "https://instagram.com/riju3d",         icon: "IG" },
      { name: "ArtStation", url: "https://artstation.com/riju3d",        icon: "AS" },
      { name: "YouTube",    url: "https://youtube.com/@riju3d",          icon: "YT" },
      { name: "LinkedIn",   url: "https://linkedin.com/in/riju3d",       icon: "LI" },
      { name: "Twitter/X",  url: "https://twitter.com/riju3d",           icon: "𝕏"  },
      { name: "Vimeo",      url: "https://vimeo.com/riju3d",             icon: "Vi" },
    ],
  },

};
