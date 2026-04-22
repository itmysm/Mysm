import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mysm.ir";
  const locales = ["en", "fa"];

  const staticRoutes = ["", "/blog"].flatMap((route) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  const blogRoutes = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${base}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...blogRoutes];
}
