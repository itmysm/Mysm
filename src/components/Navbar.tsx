'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@heroui/react';
import clsx from 'clsx';

const navItems = ['about', 'skills', 'projects', 'experience', 'blog', 'contact'] as const;

export default function SiteNavbar() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const t = useTranslations('nav');
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'fa' : 'en';
    router.push(pathname, { locale: newLocale });
  };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);

    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    router.push(`/#${id}`);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll={false}
      maxWidth="xl"
      height={90}
      className={clsx(
        'fixed top-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border)]' : 'bg-transparent',
      )}
    >
      {/* Brand */}
      <NavbarBrand>
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)] group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-sm font-[Sora]">M</span>
          </div>
          <span
            className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: locale === 'fa' ? 'Vazirmatn' : 'Sora, sans-serif' }}
          >
            {locale === 'fa' ? 'میثم کیانی' : 'mysm.ir'}
          </span>
        </button>
      </NavbarBrand>

      {/* Desktop Nav Links */}
      <NavbarContent className="hidden md:flex gap-1" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="text-sm px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)] transition-all"
              style={{ fontFamily: locale === 'fa' ? 'Vazirmatn' : 'Jost, sans-serif' }}
            >
              {t(item)}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Actions */}
      <NavbarContent justify="end" className="gap-2">
        {/* Theme Toggle */}
        {mounted && (
          <NavbarItem>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </NavbarItem>
        )}

        {/* Contact CTA */}
        <NavbarItem className="hidden md:flex">
          <Button
            size="sm"
            className="glow-btn text-white text-sm font-[Jost] font-medium px-4"
            onPress={() => scrollTo('contact')}
          >
            {t('contact')}
          </Button>
        </NavbarItem>

        {/* Mobile Toggle */}
        <NavbarMenuToggle className="md:hidden text-[var(--text-primary)]" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[var(--bg-primary)]/95 backdrop-blur-xl pt-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="w-full text-left py-3 text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border-b border-[var(--border)]"
              style={{ fontFamily: locale === 'fa' ? 'Vazirmatn' : 'Jost, sans-serif' }}
            >
              {t(item)}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
