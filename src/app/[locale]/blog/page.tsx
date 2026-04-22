import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";
import SiteNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fa" ? "بلاگ — میثم کیانی" : "Blog — Meysam Kiani",
    description:
      locale === "fa"
        ? "نوشته‌هایی درباره فرانت‌اند، ابزارها و وب مدرن از میثم کیانی"
        : "Articles on frontend development, tooling, and the modern web by Meysam Kiani.",
    alternates: {
      canonical: `https://mysm.ir/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-14" style={{ textAlign: isRtl ? "right" : "left" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
              style={{ fontFamily: bodyFont, flexDirection: isRtl ? "row-reverse" : "row" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M10 19l-7-7m0 0l7-7m-7 7h18"} />
              </svg>
              Home
            </Link>
            <p
              className="text-[var(--accent)] text-sm font-semibold mb-2 uppercase tracking-widest"
              style={{ fontFamily: bodyFont }}
            >
              {t("subtitle")}
            </p>
            <h1 className="section-title" style={{ fontFamily: headingFont }}>
              {t("title")}
            </h1>
          </div>

          {/* Post list */}
          <div className="flex  flex-col space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card-base group cursor-pointer">
                  <div className={`flex flex-col md:flex-row md:items-center gap-6 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                    {/* Text */}
                    <div className="flex-1" style={{ textAlign: isRtl ? "right" : "left" }}>
                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 mb-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                      </div>
                      <h2
                        className="font-bold text-[var(--text-primary)] text-xl leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontFamily: headingFont }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-[var(--text-secondary)] text-sm leading-relaxed"
                        style={{ fontFamily: bodyFont }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className={`flex-shrink-0 flex flex-row md:flex-col items-center md:items-end gap-2 text-xs text-[var(--text-muted)] ${isRtl ? "md:items-start" : ""}`} style={{ fontFamily: bodyFont }}>
                      <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                      <span className="md:hidden">·</span>
                      <span>{post.readTime} {t("min_read")}</span>
                      <span
                        className="hidden md:flex items-center gap-1 text-[var(--accent)] font-medium mt-2"
                        style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
                      >
                        {t("read_more")}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
