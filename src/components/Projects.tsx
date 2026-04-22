"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/portfolio";
import type { ProjectType } from "@/data/portfolio";

// ─── Types ────────────────────────────────────────────────────────────────────

type LightboxState = { projectId: string; index: number } | null;

// ─── TypeBadge ────────────────────────────────────────────────────────────────

function TypeBadge({ type, locale }: { type: ProjectType; locale: string }) {
  const t = useTranslations("projects");
  const isRtl = locale === "fa";
  return (
    <span
      className={`type-badge type-badge-${type}`}
      style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost, sans-serif" }}
    >
      {t(`types.${type}`)}
    </span>
  );
}

// ─── ScreenshotStrip ──────────────────────────────────────────────────────────

function ScreenshotStrip({
  screenshots,
  projectName,
  onOpen,
}: {
  screenshots: string[];
  projectName: string;
  onOpen: (index: number) => void;
}) {
  if (!screenshots.length) return null;

  const thumbs = screenshots.slice(1, 4);
  const extra = screenshots.length - 4;

  return (
    <button
      onClick={() => onOpen(0)}
      className="relative w-full mb-5 rounded-xl overflow-hidden group/strip focus:outline-none"
      aria-label={`View screenshots of ${projectName}`}
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {/* Browser chrome */}
        <div
          className="absolute top-0 left-0 right-0 z-10 h-6 flex items-center gap-1.5 px-2.5"
          style={{
            background: "rgba(2,11,24,0.88)",
            backdropFilter: "blur(4px)",
            borderBottom: "1px solid rgba(59,130,246,0.12)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 opacity-60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400 opacity-60" />
          <span className="w-2 h-2 rounded-full bg-green-400 opacity-60" />
          <div
            className="ml-2 flex-1 h-3 rounded"
            style={{
              background: "rgba(59,130,246,0.06)",
              border: "1px solid rgba(59,130,246,0.1)",
            }}
          />
        </div>

        {/* Main image */}
        <img
          src={screenshots[0]}
          alt={`${projectName} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/strip:scale-[1.03]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#020b18] opacity-0 group-hover/strip:opacity-35 transition-opacity duration-300" />

        {/* "View all" pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/strip:opacity-100 transition-all duration-300">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(59,130,246,0.88)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.45)",
              fontFamily: "Jost, sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
            </svg>
            {screenshots.length > 1
              ? `View all ${screenshots.length} screenshots`
              : "View screenshot"}
          </div>
        </div>

        {/* Thumbnail chips bottom-right */}
        {thumbs.length > 0 && (
          <div className="absolute bottom-2 right-2 flex gap-1.5 z-10">
            {thumbs.map((src, i) => (
              <div
                key={i}
                className="w-10 h-7 rounded overflow-hidden shadow-lg"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
              </div>
            ))}
            {extra > 0 && (
              <div
                className="w-10 h-7 rounded flex items-center justify-center text-[10px] font-bold text-white"
                style={{
                  background: "rgba(59,130,246,0.75)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                +{extra}
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  screenshots,
  projectName,
  index,
  onClose,
  onNavigate,
}: {
  screenshots: string[];
  projectName: string;
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const total = screenshots.length;
  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(2,11,24,0.96)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between w-full mb-4">
          <p
            className="text-slate-400 text-sm font-medium"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            {projectName}
            <span className="ml-2 text-slate-600 font-normal">
              {index + 1} / {total}
            </span>
          </p>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image frame */}
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(59,130,246,0.2)",
            boxShadow: "0 0 60px rgba(59,130,246,0.12)",
          }}
        >
          {/* Browser chrome */}
          <div
            className="h-7 flex items-center gap-1.5 px-3"
            style={{
              background: "#0a1628",
              borderBottom: "1px solid rgba(59,130,246,0.12)",
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-55" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-55" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-55" />
            <div
              className="ml-3 flex-1 h-4 rounded-md"
              style={{
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.1)",
              }}
            />
          </div>
          <img
            src={screenshots[index]}
            alt={`${projectName} screenshot ${index + 1}`}
            className="w-full object-contain max-h-[65vh]"
            style={{ background: "#0a1628" }}
          />
        </div>

        {/* Nav row */}
        <div className="flex items-center justify-between w-full mt-5">
          <button
            onClick={prev}
            disabled={total <= 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-20"
            style={{
              background: "rgba(59,130,246,0.09)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#93c5fd",
              fontFamily: "Jost, sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Prev
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === index ? "20px" : "8px",
                  height: "8px",
                  background:
                    i === index ? "#3b82f6" : "rgba(59,130,246,0.22)",
                  boxShadow:
                    i === index ? "0 0 8px rgba(59,130,246,0.6)" : undefined,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={total <= 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-20"
            style={{
              background: "rgba(59,130,246,0.09)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#93c5fd",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = useCallback(
    (projectId: string, index: number) => setLightbox({ projectId, index }),
    []
  );
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navigateLightbox = useCallback(
    (index: number) =>
      setLightbox((prev) => (prev ? { ...prev, index } : null)),
    []
  );

  const activeLightboxProject = lightbox
    ? projects.find((p) => p.id === lightbox.projectId)
    : null;

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[var(--accent)] text-sm font-semibold mb-2 uppercase tracking-widest"
            style={{ fontFamily: bodyFont }}
          >
            {t("subtitle")}
          </p>
          <h2 className="section-title" style={{ fontFamily: headingFont }}>
            {t("title")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`card-base flex flex-col group ${
                project.featured && idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Screenshot strip */}
              {project.screenshots && project.screenshots.length > 0 && (
                <ScreenshotStrip
                  screenshots={project.screenshots}
                  projectName={t(project.nameKey)}
                  onOpen={(i) => openLightbox(project.id, i)}
                />
              )}

              {/* Card header */}
              <div
                className={`flex items-start justify-between mb-4 ${isRtl ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-xl border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-all flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[var(--text-primary)] text-base"
                      style={{ fontFamily: headingFont }}
                    >
                      {t(project.nameKey)}
                    </h3>
                    {project.stats && (
                      <p
                        className="text-xs text-[var(--accent-2)]"
                        style={{ fontFamily: bodyFont }}
                      >
                        {project.stats}
                      </p>
                    )}
                  </div>
                </div>
                <TypeBadge type={project.type} locale={locale} />
              </div>

              {/* Description */}
              <p
                className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-5"
                style={{ fontFamily: bodyFont, textAlign: isRtl ? "right" : "left" }}
              >
                {t(project.descKey)}
              </p>

              {/* Tech stack */}
              <div className={`flex flex-wrap gap-2 mb-5 ${isRtl ? "flex-row-reverse" : ""}`}>
                {project.tech.map((tech) => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>

              {/* Footer */}
              <div
                className={`flex items-center gap-3 pt-4 border-t border-[var(--border)] flex-wrap ${isRtl ? "flex-row-reverse" : ""}`}
              >
                {/* Live Site — glowing gradient button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isRtl ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                      color: "#fff",
                      fontFamily: bodyFont,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 20px rgba(59,130,246,0.5), 0 4px 12px rgba(59,130,246,0.3)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Globe icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    {t("live")}
                    {/* Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                    </svg>
                  </a>
                )}

                {/* Screenshots button — ghost style */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <button
                    onClick={() => openLightbox(project.id, 0)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isRtl ? "flex-row-reverse" : ""}`}
                    style={{
                      background: "rgba(59,130,246,0.07)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: "#93c5fd",
                      fontFamily: bodyFont,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(59,130,246,0.14)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(59,130,246,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(59,130,246,0.07)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(59,130,246,0.2)";
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                    </svg>
                    {t("screenshots")} ({project.screenshots.length})
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox portal */}
      {lightbox && activeLightboxProject?.screenshots && (
        <Lightbox
          screenshots={activeLightboxProject.screenshots}
          projectName={t(activeLightboxProject.nameKey)}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  );
}