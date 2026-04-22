"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("contact");
  const tf = useTranslations("footer");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/itmysm",
      label: "@itmysm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/itmysm",
      label: "in/itmysm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:dev.mysm@gmail.com",
      label: "dev.mysm@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative bg-[var(--bg-secondary)]">
        <div className="section-container">
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent)] opacity-5 blur-3xl pointer-events-none" />

          <div className="relative text-center max-w-2xl mx-auto">
            <p
              className="text-[var(--accent)] text-sm font-semibold mb-2 uppercase tracking-widest"
              style={{ fontFamily: bodyFont }}
            >
              {t("subtitle")}
            </p>
            <h2 className="section-title mb-6" style={{ fontFamily: headingFont }}>
              {t("title")}
            </h2>
            <p
              className="text-[var(--text-secondary)] mb-12 text-lg leading-relaxed"
              style={{ fontFamily: bodyFont }}
            >
              {locale === "fa"
                ? "از همکاری در پروژه تا فریلنسر، همیشه آماده‌ام برای صحبت درباره ایده‌های جدید."
                : "Whether it's a full-time role, a freelance project, or just a great idea — I'm always happy to chat."}
            </p>

            {/* Social cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="card-base flex flex-col items-center gap-3 py-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-all shadow-lg">
                    {link.icon}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[var(--text-primary)] text-sm mb-0.5"
                      style={{ fontFamily: headingFont }}
                    >
                      {link.name}
                    </p>
                    <p
                      className="text-xs text-[var(--text-muted)]"
                      style={{ fontFamily: bodyFont }}
                    >
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRtl ? "md:flex-row-reverse" : ""}`}>
            {/* Brand */}
            <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "Sora, sans-serif" }}>M</span>
              </div>
              <span className="font-semibold text-[var(--text-primary)] text-sm" style={{ fontFamily: headingFont }}>
                {locale === "fa" ? "میثم کیانی" : "Meysam Kiani"}
              </span>
            </div>

            {/* Center tagline */}
            <p className="text-[var(--text-muted)] text-sm" style={{ fontFamily: bodyFont }}>
              {tf("tagline")}
            </p>

            {/* Right: copyright */}
            <p className="text-[var(--text-muted)] text-xs" style={{ fontFamily: bodyFont }}>
              © {new Date().getFullYear()} Meysam Kiani. {tf("rights")}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
            <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: bodyFont }}>
              {tf("built_with")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
