import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/Providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Meysam Kiani — Frontend Developer",
    template: "%s | Meysam Kiani",
  },
  description:
    "Frontend Developer with 4+ years of experience building fast, modern, and satisfying web experiences. Specialised in React, Next.js, and Vue.",
  keywords: [
    "Meysam Kiani",
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue",
    "Tehran",
    "Iran",
    "میثم کیانی",
    "توسعه‌دهنده فرانت‌اند",
  ],
  authors: [{ name: "Meysam Kiani", url: "https://mysm.ir" }],
  creator: "Meysam Kiani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mysm.ir",
    siteName: "Meysam Kiani",
    title: "Meysam Kiani — Frontend Developer",
    description:
      "Frontend Developer with 4+ years of experience. React, Next.js, Vue, modern UI enthusiast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meysam Kiani — Frontend Developer",
    description: "Frontend Developer with 4+ years of experience. React, Next.js, Vue.",
    creator: "@itmysm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fa")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === "fa";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Jost:wght@300;400;500;600&family=Vazirmatn:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={`https://mysm.ir/${locale}`} />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
