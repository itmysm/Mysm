"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";

export default function BlogSection() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  return (
    <section id="blog" className="relative">
      <div className="section-container">
        <div className={`flex items-end justify-between mb-14 ${isRtl ? "flex-row-reverse" : ""}`}>
          <div style={{ textAlign: isRtl ? "right" : "left" }}>
            <p
              className="text-[var(--accent)] text-sm font-semibold mb-2 uppercase tracking-widest"
              style={{ fontFamily: bodyFont }}
            >
              {t("subtitle")}
            </p>
            <h2 className="section-title mb-0" style={{ fontFamily: headingFont }}>
              {t("title")}
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors flex-shrink-0 flex items-center gap-1"
            style={{ fontFamily: bodyFont, flexDirection: isRtl ? "row-reverse" : "row" }}
          >
            {t("all_posts")}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="card-base group h-full flex flex-col cursor-pointer">
                {/* Tags */}
                <div className={`flex flex-wrap gap-2 mb-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-[var(--text-primary)] text-lg leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors flex-1"
                  style={{ fontFamily: headingFont, textAlign: isRtl ? "right" : "left" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: bodyFont, textAlign: isRtl ? "right" : "left" }}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between pt-4 border-t border-[var(--border)] ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex items-center gap-3 text-xs text-[var(--text-muted)] ${isRtl ? "flex-row-reverse" : ""}`} style={{ fontFamily: bodyFont }}>
                    <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                    <span>·</span>
                    <span>{post.readTime} {t("min_read")}</span>
                  </div>
                  <span
                    className={`text-xs font-medium text-[var(--accent)] group-hover:text-[var(--accent-2)] transition-colors flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}
                    style={{ fontFamily: bodyFont }}
                  >
                    {t("read_more")}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
