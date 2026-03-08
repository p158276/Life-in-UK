/*
 * Home Page — British Heritage Editorial Design
 * Navy (#1B2A4A) + Gold (#C8A96E) + Cream (#FAF8F5)
 * Playfair Display headings, Source Sans 3 body
 * Magazine-style layout with sidebar navigation
 * Bilingual: Chinese / English
 */

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "wouter";
import { sections as zhSections, categories as zhCategories } from "@/lib/studyData";
import { SectionRenderer } from "@/components/SectionRenderer";
import { Search, BookOpen, Brain, ChevronRight, Menu, X, ArrowUp, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBilingualSections, useBilingualCategories } from "@/hooks/useBilingualData";
import LanguageToggle from "@/components/LanguageToggle";
import { translations } from "@/lib/i18n";
import type { Section } from "@/lib/studyData";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336753856/Wtn3rMwQAY2E75fioJu3bh/hero-banner-Xb4oajPtxd7dgFPDvvT9bU.webp";
const HISTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336753856/Wtn3rMwQAY2E75fioJu3bh/section-history-JagSSnfTiikHrB5DBu4HhC.webp";
const POLITICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336753856/Wtn3rMwQAY2E75fioJu3bh/section-politics-RPEc97xkdSonGJPfA45sAS.webp";
const CULTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663336753856/Wtn3rMwQAY2E75fioJu3bh/section-culture-STrMdPAayJ5uYugFew3LXU.webp";

const categoryImages: Record<string, string> = {
  history: HISTORY_IMG,
  politics: POLITICS_IMG,
  culture: CULTURE_IMG,
  society: POLITICS_IMG,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showWrongQuestions, setShowWrongQuestions] = useState(true);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const { lang } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][lang];
  const sections = useBilingualSections();
  const categories = useBilingualCategories();

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  const filteredSections = useMemo(() => {
    let result = sections;
    if (activeCategory) {
      result = result.filter((s) => s.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => {
        const titleMatch = s.title.toLowerCase().includes(q) || (s.titleEn?.toLowerCase().includes(q));
        const contentMatch = s.blocks.some((b) => {
          if (b.content?.toLowerCase().includes(q)) return true;
          if (b.title?.toLowerCase().includes(q)) return true;
          if (b.table) {
            return b.table.rows.some((r) =>
              r.cells.some((c) => c.toLowerCase().includes(q))
            );
          }
          return false;
        });
        const wrongMatch = s.wrongQuestions?.some((wq) =>
          wq.question.toLowerCase().includes(q) ||
          wq.correctAnswer.toLowerCase().includes(q) ||
          wq.explanation.toLowerCase().includes(q)
        ) || false;
        return titleMatch || contentMatch || wrongMatch;
      });
    }
    return result;
  }, [searchQuery, activeCategory, sections]);

  const totalWrongQuestions = useMemo(() =>
    zhSections.reduce((acc, s) => acc + (s.wrongQuestions?.length || 0), 0)
  , []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-cream-dark border-b border-gold/20" style={{ backgroundColor: '#1B2A4A' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-1.5 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: '#C8A96E' }}>🇬🇧</span>
              <h1 className="font-serif text-base lg:text-lg font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif", color: '#FAF8F5' }}>
                Life in the UK
              </h1>
              <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: '#C8A96E', color: '#C8A96E' }}>
                {t("subtitle")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <LanguageToggle variant="header" />
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: '#C8A96E' }} />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-sm rounded-md border bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 w-44 lg:w-56 placeholder:opacity-40"
                style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#FAF8F5' }}
              />
            </div>
            {/* Wrong Questions Toggle */}
            <button
              onClick={() => setShowWrongQuestions(!showWrongQuestions)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md transition-all hover:scale-105 border"
              style={{
                backgroundColor: showWrongQuestions ? 'rgba(185,28,28,0.15)' : 'rgba(255,255,255,0.05)',
                borderColor: showWrongQuestions ? 'rgba(185,28,28,0.4)' : 'rgba(200,169,110,0.3)',
                color: showWrongQuestions ? '#FCA5A5' : 'rgba(250,248,245,0.6)',
              }}
              title={showWrongQuestions ? t('hideWrongQ') : t('showWrongQ')}
            >
              <AlertTriangle size={13} />
              <span className="hidden md:inline">{showWrongQuestions ? t('hideWrongQ') : t('showWrongQ')}</span>
            </button>
            <Link href="/flashcards">
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all hover:scale-105" style={{ backgroundColor: '#C8A96E', color: '#1B2A4A', fontWeight: 600 }}>
                <Brain size={15} />
                <span className="hidden sm:inline">{t("flashcards")}</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile search bar */}
      <div className="sm:hidden fixed top-14 left-0 right-0 z-40 px-3 py-2" style={{ backgroundColor: '#1B2A4A' }}>
        <div className="relative">
          <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: '#C8A96E' }} />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm rounded-md border bg-white/5 focus:outline-none focus:ring-1 placeholder:opacity-40"
            style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#FAF8F5' }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
            <nav className="absolute left-0 top-14 bottom-0 w-72 overflow-y-auto py-4 px-3" style={{ backgroundColor: '#1B2A4A' }}>
              <SidebarContent
                activeSection={activeSection}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                scrollToSection={scrollToSection}
                filteredSections={filteredSections}
                categories={categories}
                lang={lang}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex pt-14 sm:pt-14">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block fixed left-0 top-14 bottom-0 w-64 xl:w-72 overflow-y-auto py-4 px-3 border-r" style={{ backgroundColor: '#1B2A4A', borderColor: 'rgba(200,169,110,0.15)' }}>
          <SidebarContent
            activeSection={activeSection}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            scrollToSection={scrollToSection}
            filteredSections={filteredSections}
            categories={categories}
            lang={lang}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 xl:ml-72 min-h-screen">
          {/* Hero Banner */}
          {!searchQuery && !activeCategory && (
            <section className="relative overflow-hidden" style={{ backgroundColor: '#1B2A4A' }}>
              <div className="absolute inset-0 opacity-20">
                <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative max-w-4xl mx-auto px-6 py-12 lg:py-16 text-center">
                <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#C8A96E' }}>
                  Life in the UK
                </h2>
                <p className="text-lg lg:text-xl mb-2 font-light" style={{ color: '#FAF8F5' }}>
                  {t("heroSubtitle")}
                </p>
                <p className="text-sm max-w-xl mx-auto leading-relaxed opacity-70" style={{ color: '#FAF8F5' }}>
                  {t("heroDesc")}
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(185,28,28,0.8)', color: '#FEE2E2' }}>
                    <AlertTriangle size={12} />
                    {totalWrongQuestions} {t("wrongQuestionsMarked")}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:scale-105 border"
                      style={{ borderColor: 'rgba(200,169,110,0.4)', color: '#FAF8F5', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <BookOpen size={14} style={{ color: '#C8A96E' }} />
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Category Banner */}
          {activeCategory && !searchQuery && (
            <section className="relative overflow-hidden h-32 lg:h-40" style={{ backgroundColor: '#1B2A4A' }}>
              <div className="absolute inset-0 opacity-15">
                <img src={categoryImages[activeCategory] || HERO_IMG} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-full flex items-center justify-between max-w-4xl mx-auto px-6">
                <div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#C8A96E' }}>
                    {categories.find(c => c.id === activeCategory)?.label}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-sm px-3 py-1.5 rounded-md border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(200,169,110,0.4)', color: '#C8A96E' }}
                >
                  {t("viewAll")}
                </button>
              </div>
            </section>
          )}

          {/* Search results indicator */}
          {searchQuery && (
            <div className="px-6 py-4 border-b" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(200,169,110,0.2)' }}>
              <p className="text-sm" style={{ color: '#1B2A4A' }}>
                {t("searchFor")} "<strong>{searchQuery}</strong>" — {filteredSections.length} {t("foundSections")}
                <button onClick={() => setSearchQuery("")} className="ml-3 underline opacity-60 hover:opacity-100" style={{ color: '#C8A96E' }}>
                  {t("clearSearch")}
                </button>
              </p>
            </div>
          )}

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-12 sm:pt-6 pt-14">
            {filteredSections.map((section, idx) => (
              <motion.div
                key={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
              >
                <SectionRenderer section={section} searchQuery={searchQuery} showWrongQuestions={showWrongQuestions} />
              </motion.div>
            ))}

            {filteredSections.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg opacity-50" style={{ color: '#1B2A4A' }}>{t("noResults")}</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                  className="mt-4 px-4 py-2 rounded-md text-sm"
                  style={{ backgroundColor: '#C8A96E', color: '#1B2A4A' }}
                >
                  {t("resetFilters")}
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="border-t py-8 px-6 text-center" style={{ borderColor: 'rgba(200,169,110,0.2)', backgroundColor: '#1B2A4A' }}>
            <p className="text-sm opacity-60" style={{ color: '#FAF8F5' }}>
              {t("footerText")}
            </p>
          </footer>
        </main>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors hover:scale-110"
            style={{ backgroundColor: '#1B2A4A', color: '#C8A96E' }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sidebar content component
function SidebarContent({
  activeSection,
  activeCategory,
  setActiveCategory,
  scrollToSection,
  filteredSections,
  categories,
  lang,
}: {
  activeSection: string;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
  scrollToSection: (id: string) => void;
  filteredSections: Section[];
  categories: { id: string; label: string; color: string }[];
  lang: string;
}) {
  const t = (key: keyof typeof translations) => translations[key][lang as "zh" | "en"];

  return (
    <div className="space-y-4">
      {/* Language toggle in sidebar */}
      <div className="px-1">
        <LanguageToggle variant="sidebar" />
      </div>

      {/* Category filters */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider px-2 mb-2" style={{ color: '#C8A96E' }}>
          {t("categoriesLabel")}
        </p>
        <button
          onClick={() => setActiveCategory(null)}
          className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${!activeCategory ? 'bg-white/10' : 'hover:bg-white/5'}`}
          style={{ color: '#FAF8F5' }}
        >
          {t("allSections")}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${activeCategory === cat.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
            style={{ color: '#FAF8F5' }}
          >
            <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cat.color }} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Section navigation */}
      <div className="border-t pt-3" style={{ borderColor: 'rgba(200,169,110,0.15)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider px-2 mb-2" style={{ color: '#C8A96E' }}>
          {t("contentsLabel")}
        </p>
        <nav className="space-y-0.5">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all flex items-center gap-2 group ${
                activeSection === section.id ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
              style={{ color: activeSection === section.id ? '#C8A96E' : 'rgba(250,248,245,0.8)' }}
            >
              <span className="text-base flex-shrink-0">{section.icon}</span>
              <span className="truncate flex-1">
                <span className="opacity-50 mr-1">{section.number}.</span>
                {section.title}
              </span>
              {section.wrongQuestions && section.wrongQuestions.length > 0 && (
                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(185,28,28,0.8)' }}>
                  <AlertTriangle size={9} style={{ color: '#FEE2E2' }} />
                </span>
              )}
              <ChevronRight
                size={12}
                className={`flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity ${activeSection === section.id ? '!opacity-70' : ''}`}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
