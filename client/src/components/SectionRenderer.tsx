/*
 * SectionRenderer — British Heritage Editorial Design
 * Renders each study section with tables, memos, text blocks, and WRONG QUESTION alerts
 * Navy (#1B2A4A) + Gold (#C8A96E) + Cream (#FAF8F5) + Alert Red (#B91C1C)
 * Bilingual: Chinese / English
 */

import { Section, ContentBlock, WrongQuestion } from "@/lib/studyData";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

function highlightBold(text: string, searchQuery?: string): React.JSX.Element {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const inner = part.slice(2, -2);
          const isMatch = searchQuery && inner.toLowerCase().includes(searchQuery.toLowerCase());
          return (
            <strong
              key={i}
              className={`font-semibold ${isMatch ? 'bg-yellow-200/60 px-0.5 rounded' : ''}`}
              style={{ color: '#1B2A4A' }}
            >
              {inner}
            </strong>
          );
        }
        if (searchQuery && part.toLowerCase().includes(searchQuery.toLowerCase())) {
          const idx = part.toLowerCase().indexOf(searchQuery.toLowerCase());
          return (
            <span key={i}>
              {part.slice(0, idx)}
              <mark className="bg-yellow-200/60 px-0.5 rounded">{part.slice(idx, idx + searchQuery.length)}</mark>
              {part.slice(idx + searchQuery.length)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function TableBlock({ table, searchQuery }: { table: NonNullable<ContentBlock['table']>; searchQuery?: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgba(200,169,110,0.25)' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: '#1B2A4A' }}>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="px-3 py-2.5 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
                style={{ color: '#C8A96E', borderBottom: '2px solid rgba(200,169,110,0.3)' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr
              key={ri}
              className="transition-colors hover:bg-gold-light/10"
              style={{
                backgroundColor: ri % 2 === 0 ? 'rgba(250,248,245,0.8)' : 'rgba(200,169,110,0.06)',
                borderBottom: '1px solid rgba(200,169,110,0.12)',
              }}
            >
              {row.cells.map((cell, ci) => (
                <td key={ci} className="px-3 py-2.5 leading-relaxed" style={{ color: '#2a2a3a' }}>
                  {highlightBold(cell, searchQuery)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MemoBlock({ content, searchQuery }: { content: string; searchQuery?: string }) {
  return (
    <div
      className="rounded-lg p-4 border-l-4 relative"
      style={{
        backgroundColor: 'rgba(200,169,110,0.08)',
        borderLeftColor: '#C8A96E',
      }}
    >
      <div className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm" style={{ backgroundColor: '#C8A96E', color: '#1B2A4A' }}>
        💡
      </div>
      <p className="text-sm leading-relaxed italic pl-2" style={{ color: '#3a3a4a' }}>
        {highlightBold(content, searchQuery)}
      </p>
    </div>
  );
}

function TextBlock({ content, searchQuery }: { content: string; searchQuery?: string }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: '#3a3a4a' }}>
      {highlightBold(content, searchQuery)}
    </p>
  );
}

/* ⚠️ Wrong Question Alert Block */
function WrongQuestionBlock({ questions }: { questions: WrongQuestion[] }) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][lang];

  return (
    <div className="space-y-3">
      {/* Header banner */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-t-lg"
        style={{ backgroundColor: '#B91C1C' }}
      >
        <AlertTriangle size={16} className="flex-shrink-0" style={{ color: '#FEE2E2' }} />
        <span className="text-sm font-bold tracking-wide" style={{ color: '#FEE2E2' }}>
          {t("wrongQHeader")}
        </span>
        <span
          className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ backgroundColor: 'rgba(254,226,226,0.2)', color: '#FEE2E2' }}
        >
          {questions.length} {t("wrongQCount")}
        </span>
      </div>

      {/* Question cards */}
      {questions.map((q, idx) => (
        <div
          key={idx}
          className="rounded-lg border-l-4 overflow-hidden transition-all"
          style={{
            borderLeftColor: '#B91C1C',
            backgroundColor: 'rgba(185,28,28,0.04)',
            border: '1px solid rgba(185,28,28,0.15)',
            borderLeftWidth: '4px',
          }}
        >
          {/* Question header - always visible */}
          <button
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-red-50/50 transition-colors"
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
              style={{ backgroundColor: '#B91C1C', color: '#FEE2E2' }}
            >
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-relaxed" style={{ color: '#1B2A4A' }}>
                {q.question}
              </p>
            </div>
            <span
              className="flex-shrink-0 text-xs mt-0.5 transition-transform"
              style={{ color: '#B91C1C', transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              ▼
            </span>
          </button>

          {/* Expanded details */}
          {expandedIdx === idx && (
            <div className="px-4 pb-4 pt-1 space-y-2.5" style={{ borderTop: '1px solid rgba(185,28,28,0.1)' }}>
              {/* Wrong answer */}
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(185,28,28,0.12)', color: '#B91C1C' }}>
                  {t("yourAnswer")}
                </span>
                <p className="text-sm line-through opacity-60" style={{ color: '#B91C1C' }}>
                  {q.wrongAnswer}
                </p>
              </div>
              {/* Correct answer */}
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(22,163,74,0.12)', color: '#16A34A' }}>
                  {t("correctAnswer")}
                </span>
                <p className="text-sm font-semibold" style={{ color: '#16A34A' }}>
                  {q.correctAnswer}
                </p>
              </div>
              {/* Explanation */}
              <div
                className="rounded-md px-3 py-2 mt-1"
                style={{ backgroundColor: 'rgba(200,169,110,0.08)', borderLeft: '3px solid #C8A96E' }}
              >
                <p className="text-xs leading-relaxed" style={{ color: '#3a3a4a' }}>
                  💡 {q.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function SectionRenderer({ section, searchQuery, showWrongQuestions = true }: { section: Section; searchQuery?: string; showWrongQuestions?: boolean }) {
  const { lang } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][lang];

  const categoryColors: Record<string, string> = {
    history: '#8B7355',
    politics: '#1B2A4A',
    culture: '#C8A96E',
    society: '#2D5F2D',
  };

  const catColor = categoryColors[section.category] || '#1B2A4A';
  const hasWrongQuestions = section.wrongQuestions && section.wrongQuestions.length > 0;

  return (
    <article
      className="rounded-xl overflow-hidden shadow-sm border"
      style={{
        backgroundColor: '#FDFCFA',
        borderColor: hasWrongQuestions ? 'rgba(185,28,28,0.25)' : 'rgba(200,169,110,0.2)',
        boxShadow: hasWrongQuestions ? '0 0 0 1px rgba(185,28,28,0.08), 0 2px 8px rgba(185,28,28,0.06)' : undefined,
      }}
    >
      {/* Section Header */}
      <div className="px-5 py-4 border-b flex items-center gap-3" style={{ borderColor: 'rgba(200,169,110,0.15)' }}>
        <span className="text-2xl flex-shrink-0">{section.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2
              className="font-serif text-xl lg:text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1B2A4A' }}
            >
              {section.number}. {section.title}
            </h2>
            {hasWrongQuestions && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1"
                style={{ backgroundColor: 'rgba(185,28,28,0.1)', color: '#B91C1C' }}
              >
                <AlertTriangle size={11} />
                {t("hasWrongQ")}
              </span>
            )}
          </div>
        </div>
        <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: hasWrongQuestions ? '#B91C1C' : catColor }} />
      </div>

      {/* Wrong Questions Alert — shown FIRST for maximum visibility */}
      {hasWrongQuestions && showWrongQuestions && (
        <div className="px-5 pt-4">
          <WrongQuestionBlock questions={section.wrongQuestions!} />
        </div>
      )}

      {/* Section Content */}
      <div className="px-5 py-4 space-y-5">
        {section.blocks.map((block, i) => {
          switch (block.type) {
            case 'subsection':
              return (
                <h3
                  key={i}
                  className="font-serif text-base font-semibold pt-2 pb-1 border-b"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1B2A4A',
                    borderColor: 'rgba(200,169,110,0.2)',
                  }}
                >
                  {block.title}
                </h3>
              );
            case 'table':
              return block.table ? <TableBlock key={i} table={block.table} searchQuery={searchQuery} /> : null;
            case 'memo':
              return block.content ? <MemoBlock key={i} content={block.content} searchQuery={searchQuery} /> : null;
            case 'text':
              return block.content ? <TextBlock key={i} content={block.content} searchQuery={searchQuery} /> : null;
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}
