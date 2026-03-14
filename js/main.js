/**
 * ============================================================
 *  RIJU3D — MAIN.JS
 *  Reads siteData from data.js and builds the whole page.
 * ============================================================
 */

/* ── Helpers ─────────────────────────────────────────────── */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ── Cursor ─────────────────────────────────────────────── */
const cursor    = $("#cursor");
const cursorDot = $("#cursorDot");
let mouseX = -100, mouseY = -100;
let curX = -100, curY = -100;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

(function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.transform = `translate(${curX}px, ${curY}px)`;
  requestAnimationFrame(animateCursor);
})();

document.addEventListener("mousedown", () => cursor.classList.add("pressed"));
document.addEventListener("mouseup",   () => cursor.classList.remove("pressed"));

document.querySelectorAll("a, button, .gallery-card, .showreel-card").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

/* ── Pixel Burst on Click ───────────────────────────────── */
const COLORS = ["#9b5de5", "#c77dff", "#e0aaff", "#f0eef8", "#5a2ea6"];
const PIXEL_COUNT = 14;

document.addEventListener("click", (e) => {
  for (let i = 0; i < PIXEL_COUNT; i++) {
    spawnPixel(e.clientX, e.clientY);
  }
});

function spawnPixel(x, y) {
  const px = document.createElement("div");

  const size    = Math.random() * 5 + 2;          // 2–7px
  const angle   = Math.random() * 360;
  const dist    = Math.random() * 55 + 20;        // 20–75px travel
  const dur     = Math.random() * 380 + 280;      // 280–660ms
  const color   = COLORS[Math.floor(Math.random() * COLORS.length)];
  const isRound = Math.random() > 0.5;

  px.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: ${isRound ? "50%" : "1px"};
    pointer-events: none;
    z-index: 99999;
    transform: translate(-50%, -50%);
    animation: pixelBurst ${dur}ms cubic-bezier(0.2, 0.8, 0.4, 1) forwards;
    --tx: ${Math.cos((angle * Math.PI) / 180) * dist}px;
    --ty: ${Math.sin((angle * Math.PI) / 180) * dist}px;
  `;

  document.body.appendChild(px);
  px.addEventListener("animationend", () => px.remove());
}

document.addEventListener("mousedown", () => cursor.classList.add("pressed"));
document.addEventListener("mouseup",   () => cursor.classList.remove("pressed"));

document.querySelectorAll("a, button, .gallery-card, .showreel-card").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

/* ── Nav scroll behaviour ────────────────────────────────── */
const nav = $("#nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

/* ── Mobile nav toggle ───────────────────────────────────── */
const navToggle = $("#navToggle");
const navLinks  = $("#navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
  });
});

/* ── Smooth scroll for all anchor links ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
  });
});

/* ── Intersection Observer — reveal on scroll ────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
}, { threshold: 0.08 });

function observeReveal(el) { el.classList.add("reveal"); revealObserver.observe(el); }

/* ── SHOWREEL ─────────────────────────────────────────────── */
function buildShowreel() {
  const grid = $("#showreelGrid");
  if (!grid) return;

  siteData.showreels.forEach((item) => {
    const card = document.createElement("div");
    card.className = `showreel-card${item.featured ? " featured" : ""}`;
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="showreel-thumb" data-embed="${item.embedUrl}">
        <div class="play-btn" aria-label="Play ${item.title}">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.5"/>
            <polygon points="16,13 30,20 16,27" fill="currentColor"/>
          </svg>
        </div>
        <div class="video-embed-overlay"></div>
        <iframe class="video-iframe hidden" src="" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          title="${item.title}"></iframe>
      </div>
      <div class="showreel-info">
        <div class="showreel-meta mono">
          <span>${item.year}</span>
          <span class="sep">·</span>
          <span>${item.duration}</span>
        </div>
        <h3 class="showreel-title">${item.title}</h3>
        <p class="showreel-desc">${item.description}</p>
        <button class="btn btn-ghost btn-sm open-lightbox-btn"
                data-embed="${item.embedUrl}" data-caption="${item.title}">
          Open Full Screen
        </button>
      </div>
    `;
    grid.appendChild(card);
    observeReveal(card);
  });

  /* Click-to-play inline */
  grid.querySelectorAll(".showreel-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const iframe = thumb.querySelector(".video-iframe");
      const play   = thumb.querySelector(".play-btn");
      const overlay = thumb.querySelector(".video-embed-overlay");
      if (iframe.classList.contains("hidden")) {
        iframe.src = thumb.dataset.embed + "?autoplay=1&rel=0";
        iframe.classList.remove("hidden");
        play.style.display = "none";
        overlay.style.display = "none";
      }
    });
  });

  /* Full-screen lightbox button */
  grid.querySelectorAll(".open-lightbox-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightboxVideo(btn.dataset.embed, btn.dataset.caption);
    });
  });
}

/* ── GALLERY ──────────────────────────────────────────────── */
function buildGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  siteData.gallery.forEach((item) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.dataset.category = item.category;
    card.dataset.type = item.type;

    const isVideo = item.type === "video";
    const thumb = isVideo
      ? `<div class="gallery-img video-thumb">
           <div class="play-icon">▶</div>
           <span class="mono video-label">Video</span>
         </div>`
      : `<img class="gallery-img" src="${item.src}" alt="${item.title}" loading="lazy" />`;

    card.innerHTML = `
      ${thumb}
      <div class="gallery-overlay">
        <p class="gallery-cat mono">${item.category}</p>
        <h4 class="gallery-title">${item.title}</h4>
        <p class="gallery-year mono">${item.year}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      if (isVideo) {
        openLightboxVideo(item.src, item.title + " — " + item.description);
      } else {
        openLightboxImage(item.src, item.title + " — " + item.description);
      }
    });

    grid.appendChild(card);
    observeReveal(card);
  });
}

/* ── FILTER ───────────────────────────────────────────────── */
function initFilter() {
  const btns  = $$("#filterBar .filter-btn");
  const cards = () => $$("#galleryGrid .gallery-card");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      cards().forEach(c => {
        const show = f === "all" || c.dataset.category === f;
        c.style.display = show ? "" : "none";
      });
    });
  });
}

/* ── ABOUT ────────────────────────────────────────────────── */
function buildAbout() {
  const a = siteData.about;

  const intro = $("#aboutIntro");
  if (intro) intro.textContent = a.bio;

  const skillsGrid = $("#skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = "";
    a.skills.forEach(s => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.textContent = s;
      skillsGrid.appendChild(span);
    });
  }

  const toolsList = $("#toolsList");
  if (toolsList) {
    toolsList.innerHTML = "";
    a.tools.forEach(t => {
      const span = document.createElement("span");
      span.className = "tool-tag mono";
      span.textContent = t;
      toolsList.appendChild(span);
    });
  }
}

/* ── CONTACT ──────────────────────────────────────────────── */
function buildContact() {
  const c = siteData.contact;

  const copy = $("#contactCopy");
  if (copy) copy.textContent = c.copy;

  const emailEl = $("#contactEmail");
  if (emailEl) {
    emailEl.textContent = c.email;
    emailEl.href = `mailto:${c.email}`;
  }

  const row = $("#socialsRow");
  if (row) {
    row.innerHTML = "";
    c.socials.forEach(s => {
      const a = document.createElement("a");
      a.className = "social-pill";
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `<span class="social-icon mono">${s.icon}</span><span class="social-name">${s.name}</span>`;
      row.appendChild(a);
    });
  }
}

/* ── FOOTER ───────────────────────────────────────────────── */
function buildFooter() {
  const y = $("#footerYear");
  if (y) y.textContent = new Date().getFullYear();
}

/* ── LIGHTBOX ─────────────────────────────────────────────── */
const lightbox        = $("#lightbox");
const lightboxContent = $("#lightboxContent");
const lightboxCaption = $("#lightboxCaption");
const lightboxClose   = $("#lightboxClose");

function openLightboxImage(src, caption) {
  lightboxContent.innerHTML = `<img src="${src}" alt="${caption}" class="lightbox-img" />`;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openLightboxVideo(embedUrl, caption) {
  const url = embedUrl.includes("?") ? embedUrl + "&autoplay=1" : embedUrl + "?autoplay=1&rel=0";
  lightboxContent.innerHTML = `
    <div class="lightbox-video-wrap">
      <iframe src="${url}" frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        title="${caption}"></iframe>
    </div>`;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxContent.innerHTML = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  buildShowreel();
  buildGallery();
  initFilter();
  buildAbout();
  buildContact();
  buildFooter();

  /* Staggered hero text reveal */
  document.querySelectorAll(".hero-title .line").forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.15}s`;
  });
});
