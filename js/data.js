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
      title: "Squirrel Animation",
      embedUrl: "https://youtu.be/on3oaw570Vk?si=kGXhCpBQhWvGb_MF", // ← replace with your URL
      year: "2026",
      duration: "0:34",
      description: "Character animation, VFX, Color grading.",
      featured: true,   // featured = larger card
    },
    {
      id: "sr2",
      title: "VFX Breakdown 2023",
      embedUrl: "https://youtu.be/on3oaw570Vk?si=trRsn28af-8yLG3_",   // ← replace with your URL
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
    bio: `I'm Riju, a character animator with a focus on bringing personality 
      and weight to every frame. Maya is my primary tool for animation, 
      where I work closely with the 12 principles to craft performances 
      that feel grounded and alive — from walk cycles to full character 
      acting shots.

      On the rendering side I work with V-Ray and Arnold depending on 
      the project's needs, and dip into Blender when the moment calls 
      for it. Post-production flows through DaVinci Resolve for colour 
      and finishing, with After Effects handling compositing and motion 
      work. For pre-production, I sketch out storyboards and shot ideas 
      in Photoshop before a single frame is animated.

      I care about the craft at every stage — from the first thumbnail 
      on a storyboard to the final grade.`,

    skills:  [
  "Character Animation",
  "Storyboarding",
  "Compositing",
  "Lighting & Rendering",
  "Post Production",
],
    tools: [
  "Maya", "Blender", "V-Ray", "Arnold",
  "After Effects", "DaVinci Resolve", "Photoshop",
],

    // Replace with your photo: put profile.jpg in /images/ folder
    // then in index.html uncomment the <img> tag and remove the placeholder div
    photo: "images/profile.jpg",
  },

  /* ─────────────────────────────────────────
     CONTACT & SOCIALS
  ───────────────────────────────────────── */
  contact: {
    email: "abanindranathsahubusiness@gmail.com",   // ← your email
    copy: "Open for freelance projects, collaborations, and full-time opportunities.",

    socials: [
      { name: "Instagram",  url: "https://www.instagram.com/_rijusahu_?igsh=cTc1bHB1ZHJreGJ0&utm_source=qr",         icon: "IG" },
      { name: "LinkedIn",   url: "www.linkedin.com/in/abanindranathsahu",       icon: "LI" },
    ],
  },

};
