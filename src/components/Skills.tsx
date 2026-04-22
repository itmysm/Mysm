"use client";

import { useTranslations, useLocale } from "next-intl";
import { skills } from "@/data/portfolio";
import Image from "next/image";

const categoryKeyMap: Record<string, string> = {
  "Frameworks & Libraries": "frameworks",
  "Styling & UI": "styling",
  "State Management": "state",
  "Tools & DevOps": "tools",
  "Other & Expanding": "other",
};

const categoryIcons: Record<string, string> = {
  "Frameworks & Libraries": "settings",
  "Styling & UI": "pallette",
  "State Management": "attom",
  "Tools & DevOps": "tools",
  "Other & Expanding": "grow",
};

export default function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  return (
    <section id="skills" className="relative bg-[var(--bg-secondary)]">
      <div className="section-container">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className="card-base"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Category header */}
              <div className={`flex items-center gap-3 mb-5 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3/60)] flex items-center justify-center text-lg shadow-md shadow-[var(--accent-glow)] flex-shrink-0">
                  <Image src={`/${categoryIcons[category]}.png`} alt={category} width={30} height={30} />
                </div>
                <h3
                  className="font-semibold text-[var(--text-primary)] text-sm"
                  style={{ fontFamily: headingFont }}
                >
                  {t(`categories.${categoryKeyMap[category]}`)}
                </h3>
              </div>

              {/* Skills */}
              <div className={`flex flex-wrap gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                {items.map((skill) => (
                  <span key={skill} className="tag-chip hover:scale-105 transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="text-[var(--text-muted)] text-sm" style={{ fontFamily: bodyFont }}>
            & always learning
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
