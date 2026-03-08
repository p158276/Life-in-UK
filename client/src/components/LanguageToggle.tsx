/*
 * LanguageToggle — Compact language switch button
 * British Heritage Editorial Design
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "header" | "sidebar";
}

export default function LanguageToggle({ variant = "header" }: LanguageToggleProps) {
  const { lang, toggleLang } = useLanguage();

  if (variant === "sidebar") {
    return (
      <button
        onClick={toggleLang}
        className="w-full text-left px-3 py-2 rounded-md text-sm transition-colors hover:bg-white/10 flex items-center gap-2"
        style={{ color: '#FAF8F5' }}
        title={lang === "zh" ? "Switch to English" : "切換為中文"}
      >
        <Globe size={14} style={{ color: '#C8A96E' }} />
        <span>{lang === "zh" ? "English Version" : "中文版本"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all hover:scale-105 border"
      style={{
        borderColor: 'rgba(200,169,110,0.4)',
        color: '#C8A96E',
        backgroundColor: 'rgba(200,169,110,0.08)',
      }}
      title={lang === "zh" ? "Switch to English" : "切換為中文"}
    >
      <Globe size={13} />
      <span>{lang === "zh" ? "EN" : "中"}</span>
    </button>
  );
}
