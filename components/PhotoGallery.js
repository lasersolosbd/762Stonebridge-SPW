"use client";

import { useState, useEffect, useCallback } from "react";

// ─── PHOTO DATA ───────────────────────────────────────────────────────────────
// To add/remove photos: edit this array.
// src: path relative to /public (e.g. "/photos/01-exterior.jpg")
// label: used as alt text and lightbox caption
const PHOTOS = [
  { src: "/photos/01-exterior-front.jpg",    label: "Exterior — Front" },
  { src: "/photos/02-exterior-street.jpg",   label: "Street View" },
  { src: "/photos/03-entry.jpg",             label: "Entry" },
  { src: "/photos/04-living-room.jpg",       label: "Living Room" },
  { src: "/photos/05-living-room-2.jpg",     label: "Living Room — Alternate View" },
  { src: "/photos/06-kitchen.jpg",           label: "Kitchen" },
  { src: "/photos/07-kitchen-2.jpg",         label: "Kitchen — Detail" },
  { src: "/photos/08-dining.jpg",            label: "Dining Area" },
  { src: "/photos/09-primary-bedroom.jpg",   label: "Primary Bedroom" },
  { src: "/photos/10-primary-bedroom-2.jpg", label: "Primary Bedroom — Alternate View" },
  { src: "/photos/11-primary-bath.jpg",      label: "Primary Bathroom" },
  { src: "/photos/12-primary-bath-2.jpg",    label: "Primary Bathroom — Detail" },
  { src: "/photos/13-bedroom-2.jpg",         label: "Bedroom 2" },
  { src: "/photos/14-bedroom-3.jpg",         label: "Bedroom 3" },
  { src: "/photos/15-full-bath.jpg",         label: "Full Bathroom" },
  { src: "/photos/16-half-bath.jpg",         label: "Half Bath" },
  { src: "/photos/17-study-loft.jpg",        label: "The Study — Top of Stairs" },
  { src: "/photos/18-study-loft-2.jpg",      label: "The Study — Alternate View" },
  { src: "/photos/19-garage.jpg",            label: "2-Car Garage" },
  { src: "/photos/20-garage-interior.jpg",   label: "Garage Interior" },
  { src: "/photos/21-laundry.jpg",           label: "Laundry" },
  { src: "/photos/22-backyard.jpg",          label: "Outdoor Space" },
  { src: "/photos/23-park-view.jpg",         label: "Community Park — Right Outside" },
  { src: "/photos/24-park-trail.jpg",        label: "Walking Trail" },
  { src: "/photos/25-community.jpg",         label: "Parkes at Stonebridge Community" },
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % PHOTOS.length), []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* ── GRID ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {PHOTOS.map((photo, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="relative aspect-square bg-gradient-to-br from-[#243259] to-[#1a2744] rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9973a] focus:ring-offset-2"
            aria-label={`View photo: ${photo.label}`}
          >
            {/* Photo */}
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />

            {/* Fallback placeholder (shown when image hasn't been uploaded yet) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <svg className="opacity-15 mb-1" width={28} height={28} fill="none" stroke="white" strokeWidth={1} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>

            {/* Hover label overlay */}
            <div className="absolute inset-0 bg-[#1a2744]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
              <span className="text-[10px] text-white tracking-wide leading-tight">{photo.label}</span>
            </div>

            {/* Photo counter badge */}
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-[9px] text-white/70 font-medium px-1.5 py-0.5 rounded tracking-wide">
              {i + 1}/{PHOTOS.length}
            </div>
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2"
            aria-label="Close lightbox"
          >
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-light">
            {lightboxIndex + 1} / {PHOTOS.length}
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-10"
            aria-label="Previous photo"
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIndex}
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].label}
              className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-8">
            <p className="text-white/80 text-sm tracking-wide">{PHOTOS[lightboxIndex].label}</p>
            <p className="text-white/30 text-[11px] mt-1.5 tracking-widest">← → to navigate &nbsp;·&nbsp; ESC to close</p>
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-10"
            aria-label="Next photo"
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
