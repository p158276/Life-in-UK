/*
 * FlashcardPage — British Heritage Editorial Design
 * Interactive flashcard quiz mode with wrong-question priority filter
 * Navy (#1B2A4A) + Gold (#C8A96E) + Cream (#FAF8F5) + Alert Red (#B91C1C)
 * Bilingual: Chinese / English
 */

import { useState, useMemo, useCallback } from "react";
import { Link } from "wouter";
import { ArrowLeft, RotateCcw, ChevronLeft, ChevronRight, Shuffle, Check, Eye, EyeOff, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBilingualFlashcards, useBilingualCategories } from "@/hooks/useBilingualData";
import LanguageToggle from "@/components/LanguageToggle";
import { translations } from "@/lib/i18n";

export default function FlashcardPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [showMastered, setShowMastered] = useState(true);
  const [wrongOnly, setWrongOnly] = useState(false);

  const { lang } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][lang];
  const flashcards = useBilingualFlashcards();
  const categories = useBilingualCategories();

  const filteredCards = useMemo(() => {
    let cards = flashcards;
    if (wrongOnly) {
      cards = cards.filter((c) => c.isWrongQuestion);
    }
    if (filterCategory) {
      cards = cards.filter((c) => c.category === filterCategory);
    }
    if (!showMastered) {
      cards = cards.filter((c) => !masteredIds.has(c.id));
    }
    return cards;
  }, [filterCategory, masteredIds, showMastered, wrongOnly, flashcards]);

  const currentCard = filteredCards[currentIndex] || null;

  const wrongCount = useMemo(() => flashcards.filter((c) => c.isWrongQuestion).length, [flashcards]);

  const goNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const goPrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const shuffleCards = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  }, [filteredCards.length]);

  const toggleMastered = useCallback(() => {
    if (!currentCard) return;
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
  }, [currentCard]);

  const progress = filteredCards.length > 0 ? ((currentIndex + 1) / filteredCards.length) * 100 : 0;
  const masteredCount = flashcards.filter((c) => masteredIds.has(c.id)).length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: '#1B2A4A', borderColor: 'rgba(200,169,110,0.2)' }}>
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: '#C8A96E' }}>
              <ArrowLeft size={16} />
              {t("backToGuide")}
            </span>
          </Link>
          <h1 className="font-serif text-base font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#FAF8F5' }}>
            {t("flashcardTitle")}
          </h1>
          <div className="flex items-center gap-2">
            <LanguageToggle variant="header" />
            <div className="text-xs" style={{ color: '#C8A96E' }}>
              {t("mastered")} {masteredCount}/{flashcards.length}
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 w-full" style={{ backgroundColor: 'rgba(200,169,110,0.15)' }}>
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: wrongOnly ? '#B91C1C' : '#C8A96E' }}
          />
        </div>
      </header>

      <div className="pt-20 pb-8 px-4 max-w-2xl mx-auto">
        {/* Wrong Questions Priority Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => { setWrongOnly(!wrongOnly); setCurrentIndex(0); setIsFlipped(false); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${wrongOnly ? 'scale-105 shadow-md' : 'hover:scale-105'}`}
            style={{
              backgroundColor: wrongOnly ? '#B91C1C' : 'transparent',
              color: wrongOnly ? '#FEE2E2' : '#B91C1C',
              borderColor: wrongOnly ? '#B91C1C' : 'rgba(185,28,28,0.3)',
            }}
          >
            <AlertTriangle size={15} />
            {wrongOnly ? `${t("wrongModeOn")} (${wrongCount})` : `${t("wrongModeOff")} (${wrongCount})`}
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            onClick={() => { setFilterCategory(null); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${!filterCategory ? 'scale-105' : 'opacity-60 hover:opacity-100'}`}
            style={{
              backgroundColor: !filterCategory ? '#1B2A4A' : 'transparent',
              color: !filterCategory ? '#C8A96E' : '#1B2A4A',
              borderColor: !filterCategory ? '#1B2A4A' : 'rgba(200,169,110,0.3)',
            }}
          >
            {t("allCards")}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setFilterCategory(cat.id); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${filterCategory === cat.id ? 'scale-105' : 'opacity-60 hover:opacity-100'}`}
              style={{
                backgroundColor: filterCategory === cat.id ? '#1B2A4A' : 'transparent',
                color: filterCategory === cat.id ? '#C8A96E' : '#1B2A4A',
                borderColor: filterCategory === cat.id ? '#1B2A4A' : 'rgba(200,169,110,0.3)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Toggle mastered visibility */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => { setShowMastered(!showMastered); setCurrentIndex(0); setIsFlipped(false); }}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-colors hover:bg-white/50"
            style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#1B2A4A' }}
          >
            {showMastered ? <Eye size={13} /> : <EyeOff size={13} />}
            {showMastered ? t("showMastered") : t("hideMastered")}
          </button>
        </div>

        {/* Flashcard */}
        {currentCard ? (
          <>
            <div className="perspective-1000 mb-6">
              <motion.div
                className="relative w-full cursor-pointer"
                style={{ minHeight: '280px' }}
                onClick={() => setIsFlipped(!isFlipped)}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentCard.id}-${isFlipped ? 'back' : 'front'}`}
                    initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-xl shadow-lg border p-8 flex flex-col items-center justify-center text-center"
                    style={{
                      minHeight: '280px',
                      backgroundColor: isFlipped
                        ? (currentCard.isWrongQuestion ? '#7F1D1D' : '#1B2A4A')
                        : (currentCard.isWrongQuestion ? 'rgba(185,28,28,0.04)' : '#FDFCFA'),
                      borderColor: currentCard.isWrongQuestion
                        ? (isFlipped ? 'rgba(185,28,28,0.5)' : 'rgba(185,28,28,0.25)')
                        : (isFlipped ? 'rgba(200,169,110,0.3)' : 'rgba(200,169,110,0.25)'),
                    }}
                  >
                    {/* Card label */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: isFlipped ? 'rgba(200,169,110,0.2)' : 'rgba(27,42,74,0.08)',
                          color: isFlipped ? '#C8A96E' : '#1B2A4A',
                        }}
                      >
                        {isFlipped ? t("answer") : t("question")}
                      </span>
                      {currentCard.isWrongQuestion && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold"
                          style={{
                            backgroundColor: isFlipped ? 'rgba(254,226,226,0.2)' : 'rgba(185,28,28,0.1)',
                            color: isFlipped ? '#FCA5A5' : '#B91C1C',
                          }}
                        >
                          <AlertTriangle size={10} /> {t("wrongQ")}
                        </span>
                      )}
                    </div>

                    {/* Mastered badge */}
                    {masteredIds.has(currentCard.id) && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1" style={{ backgroundColor: 'rgba(45,95,45,0.15)', color: '#2D5F2D' }}>
                          <Check size={11} /> {t("mastered")}
                        </span>
                      </div>
                    )}

                    {/* Section tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs opacity-40" style={{ color: isFlipped ? '#FAF8F5' : '#1B2A4A' }}>
                        {currentCard.section}
                      </span>
                    </div>

                    {/* Content */}
                    <p
                      className="text-lg lg:text-xl font-medium leading-relaxed max-w-md"
                      style={{
                        color: isFlipped ? '#FAF8F5' : '#1B2A4A',
                        fontFamily: isFlipped ? "'Source Sans 3', sans-serif" : "'Playfair Display', serif",
                      }}
                    >
                      {isFlipped ? currentCard.answer : currentCard.question}
                    </p>

                    {!isFlipped && (
                      <p className="text-xs mt-6 opacity-40" style={{ color: '#1B2A4A' }}>
                        {t("clickToFlip")}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={goPrev}
                className="p-2.5 rounded-lg border transition-colors hover:bg-white/80"
                style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#1B2A4A' }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={toggleMastered}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${masteredIds.has(currentCard.id) ? '' : 'hover:scale-105'}`}
                style={{
                  backgroundColor: masteredIds.has(currentCard.id) ? '#2D5F2D' : 'transparent',
                  color: masteredIds.has(currentCard.id) ? '#FAF8F5' : '#2D5F2D',
                  borderColor: '#2D5F2D',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <Check size={14} />
                  {masteredIds.has(currentCard.id) ? t("alreadyMastered") : t("markMastered")}
                </span>
              </button>

              <button
                onClick={shuffleCards}
                className="p-2.5 rounded-lg border transition-colors hover:bg-white/80"
                style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#1B2A4A' }}
                title={lang === "zh" ? "隨機" : "Shuffle"}
              >
                <Shuffle size={18} />
              </button>

              <button
                onClick={goNext}
                className="p-2.5 rounded-lg border transition-colors hover:bg-white/80"
                style={{ borderColor: 'rgba(200,169,110,0.3)', color: '#1B2A4A' }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Card counter */}
            <p className="text-center text-xs mt-4 opacity-50" style={{ color: '#1B2A4A' }}>
              {currentIndex + 1} / {filteredCards.length}
            </p>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg mb-2" style={{ color: '#1B2A4A' }}>{t("congrats")}</p>
            <p className="text-sm opacity-60" style={{ color: '#1B2A4A' }}>
              {wrongOnly ? t("allWrongMastered") : t("allMastered")}
            </p>
            <button
              onClick={() => { setMasteredIds(new Set()); setShowMastered(true); setCurrentIndex(0); }}
              className="mt-4 flex items-center gap-1.5 mx-auto px-4 py-2 rounded-lg text-sm"
              style={{ backgroundColor: '#C8A96E', color: '#1B2A4A' }}
            >
              <RotateCcw size={14} />
              {t("restart")}
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-10 grid grid-cols-4 gap-3 text-center">
          <div className="rounded-lg border p-3" style={{ borderColor: 'rgba(200,169,110,0.2)', backgroundColor: '#FDFCFA' }}>
            <p className="text-2xl font-bold font-serif" style={{ fontFamily: "'Playfair Display', serif", color: '#1B2A4A' }}>
              {flashcards.length}
            </p>
            <p className="text-xs mt-1 opacity-50" style={{ color: '#1B2A4A' }}>{t("totalCards")}</p>
          </div>
          <div className="rounded-lg border p-3" style={{ borderColor: 'rgba(185,28,28,0.2)', backgroundColor: 'rgba(185,28,28,0.03)' }}>
            <p className="text-2xl font-bold font-serif" style={{ fontFamily: "'Playfair Display', serif", color: '#B91C1C' }}>
              {wrongCount}
            </p>
            <p className="text-xs mt-1 opacity-50" style={{ color: '#B91C1C' }}>{t("wrongCards")}</p>
          </div>
          <div className="rounded-lg border p-3" style={{ borderColor: 'rgba(45,95,45,0.2)', backgroundColor: 'rgba(45,95,45,0.03)' }}>
            <p className="text-2xl font-bold font-serif" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5F2D' }}>
              {masteredCount}
            </p>
            <p className="text-xs mt-1 opacity-50" style={{ color: '#2D5F2D' }}>{t("masteredCards")}</p>
          </div>
          <div className="rounded-lg border p-3" style={{ borderColor: 'rgba(200,169,110,0.2)', backgroundColor: 'rgba(200,169,110,0.03)' }}>
            <p className="text-2xl font-bold font-serif" style={{ fontFamily: "'Playfair Display', serif", color: '#C8A96E' }}>
              {flashcards.length - masteredCount}
            </p>
            <p className="text-xs mt-1 opacity-50" style={{ color: '#1B2A4A' }}>{t("toReview")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
