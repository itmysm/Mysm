"use client";

import { useTranslations, useLocale } from "next-intl";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-2)] opacity-5 blur-3xl pointer-events-none" />

      <div className="section-container w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isRtl ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-start" style={{ textAlign: isRtl ? "right" : undefined }}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-strong)] text-[var(--accent)] text-sm mb-6"
              style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}
              data-aos="fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("badge")}
            </div>

            {/* Greeting + Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ fontFamily: headingFont, animationDelay: "0.1s" }}
            >
              <span className="text-[var(--text-muted)] text-3xl md:text-4xl font-normal block mb-2">
                {t("greeting")}
              </span>
              <span className="gradient-heading">{t("name")}</span>
            </h1>

            {/* Title */}
            <div
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
              style={{ justifyContent: isRtl ? "flex-end" : undefined }}
            >
              <div className="w-8 h-px bg-[var(--accent)]" />
              <span
                className="text-xl md:text-2xl font-medium text-[var(--text-secondary)]"
                style={{ fontFamily: headingFont }}
              >
                {t("title")}
              </span>
              <div className="w-8 h-px bg-[var(--accent)]" />
            </div>

            {/* Subtitle */}
            <p
              className="text-[var(--text-muted)] text-lg max-w-xl mb-10 leading-relaxed"
              style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost", margin: isRtl ? "0 0 2.5rem auto" : undefined }}
            >
              {t("subtitle")}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start ${isRtl ? "lg:justify-end" : ""}`}>
              <Button
                size="lg"
                className="glow-btn text-white font-semibold px-8"
                style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}
                onPress={() => scrollTo("projects")}
              >
                {t("cta_projects")}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-semibold px-8 transition-all"
                style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}
                onPress={() => scrollTo("contact")}
              >
                {t("cta_contact")}
              </Button>
            </div>

            {/* Social Links */}
            <div className={`flex items-center gap-4 mt-10 justify-center lg:justify-start ${isRtl ? "lg:justify-end" : ""}`}>
              <a
                href="https://github.com/itmysm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/itmysm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:dev.mysm@gmail.com"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Avatar / Photo */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] opacity-30 blur-2xl scale-110" />
              {/* Ring border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] shadow-2xl shadow-[var(--accent-glow)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-card)]">
                  <Image
                    src="/profile.jpg"
                    alt="Meysam Kiani"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    onError={() => {}}
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}>Experience</p>
                <p className="text-lg font-bold gradient-heading" style={{ fontFamily: "Sora, sans-serif" }}>4+ Years</p>
              </div>
              <div className="absolute -top-4 -right-4 md:-right-8 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}>Daily Users</p>
                <p className="text-lg font-bold gradient-heading" style={{ fontFamily: "Sora, sans-serif" }}>25K+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-[var(--text-muted)]" style={{ fontFamily: isRtl ? "Vazirmatn" : "Jost" }}>
            {t("scroll")}
          </span>
          <div className="w-5 h-8 rounded-full border border-[var(--border-strong)] flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[var(--accent)] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
