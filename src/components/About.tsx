"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const stats = [
  { key: "years", icon: "fast" },
  { key: "projects", icon: "rocket" },
  { key: "users", icon: "people" },
  { key: "commits", icon: "loptop" },
] as const;

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className={`flex flex-col lg:flex-row gap-16 items-start ${isRtl ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Left: Text */}
          <div className="flex-1">
            <p className="text-[var(--accent)] text-sm font-semibold mb-2 uppercase tracking-widest" style={{ fontFamily: bodyFont }}>
              {t("subtitle")}
            </p>
            <h2 className="section-title mb-6" style={{ fontFamily: headingFont }}>
              {t("title")}
            </h2>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4" style={{ fontFamily: bodyFont }}>
              {t("bio")}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed" style={{ fontFamily: bodyFont }}>
              {t("bio2")}
            </p>

            {/* Info tags */}
            <div className={`flex flex-wrap gap-3 mt-8 ${isRtl ? "flex-row-reverse" : ""}`}>
              {[
                { label: t("location"), icon: "pins" },
                { label: t("age"), icon: "cake" },
                { label: t("available"), icon: "tick" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] text-sm"
                  style={{ fontFamily: bodyFont }}
                >
                  <Image src={`/${item.icon}.png`} alt={item.label} width={18} height={18} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="card-base text-center group"
                >
                  <div className="text-3xl mb-2">
                    <Image src={`/${stat.icon}.png`} alt={stat.key} width={40} height={40} className="mx-auto" />
                  </div>
                  <div
                    className="text-2xl font-bold gradient-heading mb-1"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {t(`stat_values.${stat.key}`)}
                  </div>
                  <div
                    className="text-xs text-[var(--text-muted)]"
                    style={{ fontFamily: bodyFont }}
                  >
                    {t(`stats.${stat.key}`)}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech highlight box */}
            <div className="card-base mt-4">
              <p className="text-[var(--accent)] text-xs font-semibold mb-3 uppercase tracking-wider" style={{ fontFamily: bodyFont }}>
                Primary Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue 3", "TypeScript", "Tailwind"].map((tech) => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
