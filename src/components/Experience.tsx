"use client";

import { useTranslations, useLocale } from "next-intl";

const timeline = [
  {
    id: "dapa",
    companyKey: "dapa_company",
    locationKey: "dapa_location",
    current: true,
    roles: [
      {
        roleKey: "dapa_role_senior",
        periodKey: "dapa_period_senior",
        descKey: "dapa_desc_senior",
        isCurrent: true,
      },
      {
        roleKey: "dapa_role_mid",
        periodKey: "dapa_period_mid",
        descKey: "dapa_desc_mid",
        isCurrent: false,
      },
    ],
  },
  {
    id: "vofour",
    companyKey: "vofour_company",
    locationKey: "vofour_location",
    current: false,
    roles: [
      {
        roleKey: "vofour_role_junior",
        periodKey: "vofour_period_junior",
        descKey: "vofour_desc_junior",
        isCurrent: false,
      },
      {
        roleKey: "vofour_role_intern",
        periodKey: "vofour_period_intern",
        descKey: "vofour_desc_intern",
        isCurrent: false,
      },
    ],
  },
];

export default function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  return (
    <section
      id="experience"
      className="relative bg-[#020b18] overflow-hidden"
      style={{ fontFamily: bodyFont }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #3b82f6 0%, transparent 70%)" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#3b82f6] text-xs font-semibold mb-3 uppercase tracking-[0.2em]"
            style={{ fontFamily: bodyFont }}
          >
            {t("subtitle")}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: headingFont }}
          >
            {t("title")}
          </h2>
          <p className="text-slate-500 text-sm mt-3" style={{ fontFamily: bodyFont }}>
            {t("journey_start")}
          </p>
        </div>

        {/* Timeline list */}
        <div className="max-w-2xl mx-auto">
          {timeline.map((company) => (
            <div key={company.id} className="relative">

              {/* ── Continuous vertical stem ── */}
              <div
                className="absolute top-6 bottom-0 w-px"
                style={{
                  left: isRtl ? "auto" : "23px",
                  right: isRtl ? "23px" : "auto",
                  background:
                    "linear-gradient(to bottom, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.10) 100%)",
                }}
              />

              {/* ── Company header row ── */}
              <div className={`flex gap-5 mb-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                {/* Logo badge */}
                <div className="flex-shrink-0" style={{ width: 48 }}>
                  <div
                    className="relative w-12 h-12 rounded-2xl flex items-center justify-center text-base font-bold z-10"
                    style={{
                      background: company.current
                        ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                        : "linear-gradient(135deg, #0d2a4a, #0a2040)",
                      border: company.current
                        ? "1px solid rgba(59,130,246,0.7)"
                        : "1px solid rgba(59,130,246,0.2)",
                      boxShadow: company.current
                        ? "0 0 22px rgba(59,130,246,0.35)"
                        : undefined,
                      fontFamily: headingFont,
                      color: "#fff",
                    }}
                  >
                    {company.id === "dapa" ? "D" : "V"}
                    {company.current && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#020b18] animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Company name */}
                <div
                  className="flex-1 pt-3"
                  style={{ textAlign: isRtl ? "right" : "left" }}
                >
                  <div className={`flex items-center gap-2 flex-wrap ${isRtl ? "flex-row-reverse" : ""}`}>
                    <span
                      className="text-white font-bold text-base"
                      style={{ fontFamily: headingFont }}
                    >
                      {t(company.companyKey)}
                    </span>
                    {company.current && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(16,185,129,0.12)",
                          color: "#34d399",
                          border: "1px solid rgba(16,185,129,0.25)",
                          fontFamily: bodyFont,
                        }}
                      >
                        {t("current")}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5" style={{ fontFamily: bodyFont }}>
                    {t(company.locationKey)}
                  </p>
                </div>
              </div>

              {/* ── Role entries ── */}
              <div className="mb-10">
                {company.roles.map((role, rIdx) => (
                  <div
                    key={role.roleKey}
                    className={`flex gap-5 ${isRtl ? "flex-row-reverse" : ""}`}
                  >
                    {/* Dot on stem */}
                    <div
                      className="flex-shrink-0 flex flex-col items-center"
                      style={{ width: 48 }}
                    >
                      <div
                        className="w-3 h-3 rounded-full z-10 mt-1.5 flex-shrink-0"
                        style={{
                          marginLeft: isRtl ? "auto" : "18px",
                          marginRight: isRtl ? "18px" : "auto",
                          background: role.isCurrent
                            ? "#3b82f6"
                            : "rgba(59,130,246,0.2)",
                          border: role.isCurrent
                            ? "2px solid #93c5fd"
                            : "2px solid rgba(59,130,246,0.35)",
                          boxShadow: role.isCurrent
                            ? "0 0 10px rgba(59,130,246,0.7)"
                            : undefined,
                        }}
                      />
                    </div>

                    {/* Role content */}
                    <div
                      className="flex-1 pb-6"
                      style={{ textAlign: isRtl ? "right" : "left" }}
                    >
                      <div
                        className={`flex items-start justify-between gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        <div>
                          <h4
                            className="text-sm font-semibold"
                            style={{
                              fontFamily: headingFont,
                              color: role.isCurrent ? "#93c5fd" : "#94a3b8",
                            }}
                          >
                            {t(role.roleKey)}
                          </h4>
                          {/* Promotion label for non-first roles */}
                          {rIdx > 0 && (
                            <div
                              className={`flex items-center gap-1 mt-1 ${isRtl ? "flex-row-reverse" : ""}`}
                            >
                              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                                <path
                                  d="M5 1L6.5 3.5H9L7 5.5L7.8 8.5L5 7L2.2 8.5L3 5.5L1 3.5H3.5L5 1Z"
                                  fill="#fbbf24"
                                  opacity="0.7"
                                />
                              </svg>
                              <span
                                className="text-[10px]"
                                style={{
                                  color: "#f59e0b",
                                  fontFamily: bodyFont,
                                  opacity: 0.8,
                                }}
                              >
                                {t("promoted_from")}
                              </span>
                            </div>
                          )}
                        </div>
                        <span
                          className="text-[11px] text-slate-500 whitespace-nowrap flex-shrink-0 mt-0.5"
                          style={{ fontFamily: bodyFont }}
                        >
                          {t(role.periodKey)}
                        </span>
                      </div>
                      <p
                        className="text-slate-500 text-xs leading-relaxed mt-2"
                        style={{ fontFamily: bodyFont }}
                      >
                        {t(role.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ── 2019 origin node ── */}
          <div className={`flex gap-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div
              className="flex-shrink-0 flex items-start justify-center"
              style={{ width: 48 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base z-10"
                style={{
                  background: "rgba(6,182,212,0.07)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                🌱
              </div>
            </div>
            <div
              className="flex-1 pt-1.5"
              style={{ textAlign: isRtl ? "right" : "left" }}
            >
              <p
                className="text-sm font-semibold text-slate-400"
                style={{ fontFamily: headingFont }}
              >
                {t("self_learning_title")}
              </p>
              <p className="text-xs text-slate-600 mt-0.5" style={{ fontFamily: bodyFont }}>
                {t("self_learning_period")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}