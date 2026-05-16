"use client";

import { useState, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  PHOTO CONFIG
//  ─────────────────────────────────────────────────────────────────────────────
//  Photos live directly in your /public/ folder in the repo (no subfolder).
//  src paths start with "/" followed by the exact filename.
//
//  To add more photos: add an object to the array below.
//  To remove a placeholder: delete that line once the real photo is uploaded.
// ─────────────────────────────────────────────────────────────────────────────
const PHOTOS = [
  // ── Exterior ─────────────────────────────────────────────────────────────
  { src: "/02-MG_6804.jpg", label: "Front exterior"            },
  { src: "/27-MG_6794.jpg", label: "Front / patio"             },
  { src: "/28-MG_6809.jpg", label: "Park view from front door" },

  // ── Main Living ───────────────────────────────────────────────────────────
  { src: "/06-MG_6609.jpg", label: "Living room"               },
  { src: "/03-MG_6624.jpg", label: "Living room"               },
  { src: "/04-MG_6679.jpg", label: "Fireplace"                 },

  // ── Kitchen ───────────────────────────────────────────────────────────────
  { src: "/12-MG_6654.jpg", label: "Kitchen"                   },
  { src: "/11-MG_6644.jpg", label: "Kitchen"                   },

  // ── Primary Bedroom & Bath ────────────────────────────────────────────────
  { src: "/16-MG_6704.jpg", label: "Primary bedroom"           },
  { src: "/17-MG_6714.jpg", label: "Primary bedroom"           },
  { src: "/20-MG_6734.jpg", label: "Primary bathroom"          },

  // ── Secondary Bedrooms ────────────────────────────────────────────────────
  { src: "/22-MG_6764.jpg", label: "Bedroom 2"                },
  { src: "/25-MG_6744.jpg", label: "Bedroom 3"                },

  // ── Bathrooms ─────────────────────────────────────────────────────────────
  { src: "/24-MG_6779.jpg", label: "Full bathroom"            },

  // ── Study & Bonus ─────────────────────────────────────────────────────────
  { src: "/15-MG_6789.jpg", label: "Study at top of stairs"   },

  // ── Garage & Storage ──────────────────────────────────────────────────────
  { src: "/30-MG_6869.jpg", label: "2-car garage"             },

  // ── Community & Neighborhood ──────────────────────────────────────────────
  { src: "/32-MG_6829.jpg", label: "Community park"           },
  { src: "/35-MG_6819.jpg", label: "Park — walking path"      },
  { src: "/31-MG_6859.jpg", label: "Community park" },

  // ── Add more photos here as needed ────────────────────────────────────────
  // { src: "/IMG_XXXX.jpg", label: "Your label here" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = PHOTOS.length;

  const openLightbox  = (idx) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + total) % total), [total]);

  const next = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, closeLightbox]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* ── GRID ────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {PHOTOS.map((photo, idx) => (
          <button
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-[#1a2744]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9973a]"
            aria-label={`Open photo: ${photo.label}`}
          >
            {/* Thumbnail image */}
            <img
              src={photo.src}
              alt={photo.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />

            {/* Placeholder shown when image hasn't been uploaded yet */}
            <div
              className="absolute inset-0 flex-col items-center justify-center bg-[#1a2744]/[0.06] border border-[#1a2744]/10 rounded-xl"
              style={{ display: "none" }}
            >
              <svg className="w-8 h-8 opacity-20 mb-2" fill="none" stroke="#1a2744" strokeWidth={1} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-[10px] text-[#1a2744]/30 font-medium tracking-wide text-center px-2 leading-snug">
                {photo.label}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#1a2744]/0 group-hover:bg-[#1a2744]/30 transition-all duration-300 rounded-xl flex items-end">
              <div className="w-full px-3 pb-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[11px] font-medium text-white tracking-wide leading-snug line-clamp-1">
                  {photo.label}
                </span>
              </div>
            </div>

            {/* Counter badge */}
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
              {idx + 1}/{total}
            </div>
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX ────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.16] transition-all z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.16] transition-all z-10"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.16] transition-all z-10"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].label}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Caption + counter */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-[12px] font-medium tracking-widest uppercase">
                {lightboxIndex + 1} / {total}
              </span>
              <span className="text-white/20 text-[12px]">·</span>
              <span className="text-white/80 text-[13px] font-light tracking-wide">
                {PHOTOS[lightboxIndex].label}
              </span>
            </div>

            {/* Keyboard hint */}
            <p className="text-white/25 text-[11px] tracking-widest uppercase">
              ← → to browse · ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
