/*
 * i18n Translation Dictionary
 * All UI strings for Chinese/English bilingual support
 */

export const translations = {
  // Header
  subtitle: { zh: "快速記憶寶典", en: "Quick Study Guide" },
  searchPlaceholder: { zh: "搜尋考點...", en: "Search topics..." },
  flashcards: { zh: "記憶卡片", en: "Flashcards" },

  // Sidebar
  categoriesLabel: { zh: "分類 Categories", en: "Categories" },
  allSections: { zh: "📚 全部章節", en: "📚 All Sections" },
  contentsLabel: { zh: "目錄 Contents", en: "Contents" },

  // Categories
  catHistory: { zh: "歷史", en: "History" },
  catPolitics: { zh: "政治法律", en: "Politics & Law" },
  catCulture: { zh: "文化藝術", en: "Culture & Arts" },
  catSociety: { zh: "社會生活", en: "Society & Life" },

  // Hero
  heroSubtitle: { zh: "快速記憶寶典", en: "Quick Study Guide" },
  heroDesc: {
    zh: "涵蓋歷史、法律、政治、文化、宗教等全部考點，以表格和口訣為主，幫助你在最短時間內記住關鍵資訊。",
    en: "Covering history, law, politics, culture, religion and all exam topics. Organised with tables and mnemonics to help you memorise key information in the shortest time.",
  },
  wrongQuestionsMarked: { zh: "道易錯題已標記", en: "wrong answers marked" },

  // Category banner
  viewAll: { zh: "查看全部", en: "View All" },

  // Search
  searchFor: { zh: "搜尋", en: "Search for" },
  foundSections: { zh: "個相關章節", en: "related sections found" },
  clearSearch: { zh: "清除搜尋", en: "Clear search" },

  // Empty state
  noResults: { zh: "沒有找到相關內容", en: "No matching content found" },
  resetFilters: { zh: "重置篩選", en: "Reset Filters" },

  // Footer
  footerText: { zh: "Life in the UK 快速記憶寶典 — 祝你考試順利通過！", en: "Life in the UK Quick Study Guide — Good luck with your exam!" },

  // Section Renderer
  hasWrongQ: { zh: "有易錯題", en: "Has wrong answers" },
  wrongQHeader: { zh: "⚠️ 易錯題目 — 你曾答錯的考點", en: "⚠️ Wrong Answers — Topics you got wrong" },
  wrongQCount: { zh: "題", en: "Qs" },
  yourAnswer: { zh: "✗ 你的答案", en: "✗ Your answer" },
  correctAnswer: { zh: "✓ 正確答案", en: "✓ Correct answer" },

  // Flashcard Page
  backToGuide: { zh: "返回寶典", en: "Back to Guide" },
  flashcardTitle: { zh: "🧠 記憶卡片", en: "🧠 Flashcards" },
  mastered: { zh: "已掌握", en: "Mastered" },
  wrongModeOn: { zh: "易錯模式 ON", en: "Wrong Answers ON" },
  wrongModeOff: { zh: "只看易錯題", en: "Wrong Answers Only" },
  allCards: { zh: "全部", en: "All" },
  showMastered: { zh: "顯示已掌握", en: "Show mastered" },
  hideMastered: { zh: "隱藏已掌握", en: "Hide mastered" },
  answer: { zh: "答案", en: "Answer" },
  question: { zh: "問題", en: "Question" },
  wrongQ: { zh: "易錯", en: "Wrong" },
  clickToFlip: { zh: "點擊翻轉查看答案", en: "Click to flip and see the answer" },
  markMastered: { zh: "標記掌握", en: "Mark as mastered" },
  alreadyMastered: { zh: "已掌握", en: "Mastered" },
  congrats: { zh: "🎉 恭喜！", en: "🎉 Congratulations!" },
  allWrongMastered: { zh: "你已經掌握了所有易錯卡片！", en: "You've mastered all wrong-answer cards!" },
  allMastered: { zh: "你已經掌握了所有卡片！", en: "You've mastered all cards!" },
  restart: { zh: "重新開始", en: "Start Over" },
  totalCards: { zh: "總卡片數", en: "Total" },
  wrongCards: { zh: "易錯題", en: "Wrong" },
  masteredCards: { zh: "已掌握", en: "Mastered" },
  toReview: { zh: "待複習", en: "To Review" },

  // Language toggle
  langLabel: { zh: "EN", en: "中" },
  langTooltip: { zh: "Switch to English", en: "切換為中文" },
} as const;

export type TranslationKey = keyof typeof translations;
