import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";
import SiteNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Meysam Kiani`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Meysam Kiani", url: "https://mysm.ir" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Meysam Kiani"],
      tags: post.tags,
      url: `https://mysm.ir/${locale}/blog/${slug}`,
    },
    alternates: {
      canonical: `https://mysm.ir/${locale}/blog/${slug}`,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let codeBlock = false;
  let codeLines: string[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (codeBlock) {
        elements.push(
          <pre key={key++}>
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        codeBlock = false;
      } else {
        codeBlock = true;
      }
      continue;
    }

    if (codeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++}>{line.slice(4)}</h3>);
    } else if (line.startsWith("| ")) {
      // Table row — collect them
      const tableLines: string[] = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("|")) {
        i++;
        tableLines.push(lines[i]);
      }
      const [header, , ...rows] = tableLines;
      const headers = header.split("|").filter(Boolean).map((h) => h.trim());
      elements.push(
        <table key={key++}>
          <thead>
            <tr>
              {headers.map((h, hi) => <th key={hi}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.split("|").filter(Boolean).map((cell, ci) => (
                  <td key={ci}>{cell.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [line.slice(2)];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        items.push(lines[i].slice(2));
      }
      elements.push(
        <ul key={key++}>
          {items.map((item, ii) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={ii}>
                {parts.map((part, pi) =>
                  pi % 2 === 1 ? <strong key={pi}>{part}</strong> : part
                )}
              </li>
            );
          })}
        </ul>
      );
    } else if (line.trim() && !line.startsWith("---")) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const inlineCode = (str: string) =>
        str.split(/`([^`]+)`/g).map((s, si) =>
          si % 2 === 1 ? <code key={si}>{s}</code> : s
        );
      elements.push(
        <p key={key++}>
          {parts.map((part, pi) =>
            pi % 2 === 1 ? <strong key={pi}>{part}</strong> : inlineCode(part)
          )}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const isRtl = locale === "fa";
  const headingFont = isRtl ? "Vazirmatn" : "Sora, sans-serif";
  const bodyFont = isRtl ? "Vazirmatn" : "Jost, sans-serif";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Meysam Kiani",
      url: "https://mysm.ir",
    },
    url: `https://mysm.ir/${locale}/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNavbar />
      <main className="min-h-screen pt-24">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10"
            style={{ fontFamily: bodyFont, flexDirection: isRtl ? "row-reverse" : "row" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isRtl ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M10 19l-7-7m0 0l7-7m-7 7h18"} />
            </svg>
            {t("back")}
          </Link>

          {/* Article header */}
          <header className="mb-10" style={{ textAlign: isRtl ? "right" : "left" }}>
            {/* Tags */}
            <div className={`flex flex-wrap gap-2 mb-5 ${isRtl ? "flex-row-reverse" : ""}`}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-5"
              style={{ fontFamily: headingFont }}
            >
              {post.title}
            </h1>

            {/* Meta row */}
            <div
              className={`flex items-center gap-4 text-sm text-[var(--text-muted)] pb-6 border-b border-[var(--border)] ${isRtl ? "flex-row-reverse" : ""}`}
              style={{ fontFamily: bodyFont }}
            >
              {/* Author avatar */}
              <div className="flex items-center gap-2" style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: "Sora" }}>M</span>
                </div>
                <span className="font-medium text-[var(--text-secondary)]">Meysam Kiani</span>
              </div>
              <span>·</span>
              <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>·</span>
              <span>{post.readTime} {t("min_read")}</span>
            </div>
          </header>

          {/* Article body */}
          <article className="prose-custom" style={{ fontFamily: bodyFont, direction: isRtl ? "rtl" : "ltr" }}>
            {renderContent(post.content)}
          </article>

          {/* Footer CTA */}
          <div className="mt-16 card-base text-center">
            <p className="text-[var(--text-muted)] text-sm mb-4" style={{ fontFamily: bodyFont }}>
              {locale === "fa" ? "از خواندن این مقاله لذت بردید؟" : "Enjoyed this article?"}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-2)] font-medium transition-colors"
              style={{ fontFamily: bodyFont }}
            >
              {locale === "fa" ? "بازگشت به خانه" : "Check out my work"}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
