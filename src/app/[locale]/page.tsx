import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SiteNavbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: `${t("name")} — Frontend Developer`,
    description:
      locale === "fa"
        ? "میثم کیانی — توسعه‌دهنده فرانت‌اند با بیش از ۴ سال تجربه در React، Next.js و Vue"
        : "Meysam Kiani — Frontend Developer with 4+ years of experience in React, Next.js, and Vue.",
    alternates: {
      canonical: `https://mysm.ir/${locale}`,
      languages: {
        en: "https://mysm.ir/en",
        fa: "https://mysm.ir/fa",
      },
    },
  };
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <BlogSection />
      <Footer />
    </main>
  );
}
