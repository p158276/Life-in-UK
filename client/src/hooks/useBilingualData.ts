/*
 * Hook to get bilingual study data based on current language
 */

import { useMemo } from "react";
import { sections, flashcards, categories as rawCategories, type Section, type Flashcard } from "@/lib/studyData";
import { sectionTranslations } from "@/lib/studyDataEn";
import { useLanguage } from "@/contexts/LanguageContext";

export function useBilingualSections(): Section[] {
  const { lang } = useLanguage();

  return useMemo(() => {
    if (lang === "zh") return sections;

    return sections.map((section) => {
      const trans = sectionTranslations[section.id];
      if (!trans) return section;

      return {
        ...section,
        title: trans.title,
        number: trans.number,
        blocks: trans.blocks,
        wrongQuestions: trans.wrongQuestions ?? section.wrongQuestions,
      };
    });
  }, [lang]);
}

export function useBilingualFlashcards(): Flashcard[] {
  const { lang } = useLanguage();

  return useMemo(() => {
    if (lang === "zh") return flashcards;

    // For English, we translate the flashcard text
    return flashcards.map((card) => {
      const enCard = englishFlashcards[card.id];
      if (!enCard) return card;
      return { ...card, ...enCard };
    });
  }, [lang]);
}

export function useBilingualCategories() {
  const { lang } = useLanguage();

  return useMemo(() => {
    return rawCategories.map((cat) => ({
      ...cat,
      label: lang === "zh" ? cat.label : cat.labelEn,
    }));
  }, [lang]);
}

// English translations for flashcards
const englishFlashcards: Record<string, Partial<Flashcard>> = {
  f1: { question: "Who first invaded Britain?", answer: "Julius Caesar", section: "Historical Timeline" },
  f2: { question: "Why did Emperor Hadrian build the wall?", answer: "To keep out the Picts", section: "Historical Timeline" },
  f3: { question: "How much of the population died in the Black Death?", answer: "1/3 of the population", section: "Historical Timeline" },
  f4: { question: "What was the 1086 Domesday Book?", answer: "William I's land survey record", section: "Historical Timeline" },
  f5: { question: "When was the Magna Carta created and by whom?", answer: "1215, by King John of England", section: "Major Laws" },
  f6: { question: "What was the result of the Glorious Revolution?", answer: "The origin of Constitutional Monarchy", section: "Major Events" },
  f7: { question: "Why did Henry VIII carry out the Reformation?", answer: "He wanted a divorce; established the Church of England", section: "Reformation" },
  f8: { question: "What type is the British constitution?", answer: "Unwritten constitution", section: "Laws" },
  f9: { question: "Who was the first British Prime Minister?", answer: "Sir Robert Walpole (1721) — pick the longest name", section: "Prime Ministers" },
  f10: { question: "Who was the first female Prime Minister?", answer: "Margaret Thatcher", section: "Prime Ministers" },
  f11: { question: "Who was PM during WWII?", answer: "Winston Churchill, lost office in 1945", section: "Prime Ministers" },
  f12: { question: "What is England's established church? Who is its spiritual leader?", answer: "Church of England; Archbishop of Canterbury", section: "Religion" },
  f13: { question: "What is Scotland's established church?", answer: "Presbyterian Church", section: "Religion" },
  f14: { question: "Which religions celebrate Diwali?", answer: "Hindus and Sikhs", section: "Religion" },
  f15: { question: "What are England's patron saint and flower?", answer: "St George; Rose", section: "Festivals" },
  f16: { question: "When is Scotland's patron saint day? What's the traditional food?", answer: "30 Nov, St Andrew; Haggis", section: "Festivals" },
  f17: { question: "When did women gain the right to vote?", answer: "1918: women over 30; 1928: equal at 21", section: "Women's Rights" },
  f18: { question: "Who was the key figure of the Suffragettes?", answer: "Emmeline Pankhurst", section: "Women's Rights" },
  f19: { question: "Who invented the World Wide Web?", answer: "Sir Tim Berners-Lee (pick the longest name)", section: "Science" },
  f20: { question: "Who invented the television?", answer: "John Logie Baird", section: "Science" },
  f21: { question: "Where was Shakespeare born?", answer: "Stratford-upon-Avon", section: "Literature" },
  f22: { question: "What is the highest-grossing British film?", answer: "007 James Bond", section: "Film" },
  f23: { question: "Where did golf originate?", answer: "15th century Scotland", section: "Sports" },
  f24: { question: "Who first ran a mile in under 4 minutes?", answer: "Sir Roger Bannister (R = Run)", section: "Sports" },
  f25: { question: "What are the Tower of London guides called?", answer: "Beefeaters", section: "Landmarks" },
  f26: { question: "Which county is Stonehenge in?", answer: "Wiltshire", section: "Landmarks" },
  f27: { question: "What is the relationship between Crown Dependencies and the UK?", answer: "Linked to UK, NOT a part of UK", section: "Territories" },
  f28: { question: "Memory tip for House of Lords?", answer: "Lord = upper = Upper House", section: "Politics" },
  f29: { question: "What is the correct definition of the Commonwealth?", answer: "Association of countries (NOT group, organisation, or social)", section: "Politics" },
  f30: { question: "How many people are on a Scottish jury?", answer: "15 (all other regions have 12)", section: "Four Regions" },
  f31: { question: "What can you do at 16?", answer: "Ride a moped", section: "Age Requirements" },
  f32: { question: "What can you do at 18?", answer: "Stand for election as MP; alcohol & clubs; serve on a jury", section: "Age Requirements" },
  f33: { question: "Who designed the Cenotaph?", answer: "Sir Edwin Lutyens (win ≈ victory ≈ memorial)", section: "People" },
  f34: { question: "What is the small claims limit?", answer: "£5,000", section: "Miscellaneous" },
  f35: { question: "When did WWII start and why?", answer: "1939, Germany invaded Poland", section: "Wars" },
  f36: { question: "When did WWI end?", answer: "11 November 1918 at 11am (11.11.11)", section: "Wars" },
  f37: { question: "What was Isambard Kingdom Brunel's achievement?", answer: "Great Western Railway (if you see railway, pick this)", section: "People" },
  f38: { question: "Mnemonic for Charles I and Charles II?", answer: "Father (Charles I) executed; son (Charles II) fled (hid behind Oak tree)", section: "Monarchy" },
  f39: { question: "Examples of civil vs criminal offences?", answer: "Civil: workplace discrimination; Criminal: racial discrimination", section: "Law" },
  f40: { question: "Is the National Citizen Service programme compulsory?", answer: "No! It's optional (True/False exam favourite)", section: "Age Requirements" },
  // Wrong question flashcards
  w1: { question: "⚠️ Where did the first farmers come from?", answer: "South-east Europe (NOT south-west!)", section: "Historical Timeline" },
  w2: { question: "⚠️ Which king united Anglo-Saxons to defeat the Vikings?", answer: "King Alfred the Great (NOT William of Orange!)", section: "Historical Timeline" },
  w3: { question: "⚠️ Who built the Tower of London?", answer: "William the Conqueror (NOT Elizabeth I!)", section: "Landmarks" },
  w4: { question: "⚠️ Who are famous British Paralympians?", answer: "Baroness Tanni Grey-Thompson + Ellie Simmonds (NOT Dame Kelly Holmes! She's Olympic)", section: "Sports" },
  w5: { question: "⚠️ Where is the UK in Europe?", answer: "North-west of Europe (NOT north-east!)", section: "Territories" },
  w6: { question: "⚠️ Who is Scotland's patron saint?", answer: "St Andrew (NOT St George! St George is England's)", section: "Festivals" },
  w7: { question: "⚠️ What was the 1928 voting reform?", answer: "Equal voting at 21 for men and women (1918 was only women over 30)", section: "Women's Rights" },
  w8: { question: "⚠️ What did Frank Whittle invent?", answer: "Jet engine (NOT radar! Radar = Watson-Watt)", section: "Science" },
  w9: { question: "⚠️ What title did Oliver Cromwell receive?", answer: "Lord Protector (NOT Winston Churchill!)", section: "Monarchy" },
  w10: { question: "⚠️ Which two media must be impartial before elections?", answer: "Television and Radio (NOT newspapers!)", section: "Politics" },
  w11: { question: "⚠️ Does Northern Ireland have its own banknotes?", answer: "True! Both NI and Scotland have their own banknotes, valid across UK", section: "Four Regions" },
  w12: { question: "⚠️ Where are the Crown Jewels kept?", answer: "Tower of London (NOT Windsor Castle!)", section: "Landmarks" },
  w13: { question: "⚠️ What did John Logie Baird invent?", answer: "Television (NOT Radio!)", section: "Science" },
  w14: { question: "⚠️ When did Ireland become a republic?", answer: "1949 (NOT 1925!)", section: "Historical Timeline" },
  w15: { question: "⚠️ Does Wales have its own established church?", answer: "False! Wales has no established church", section: "Religion" },
  w16: { question: "⚠️ Why did Henry VIII establish the Church of England?", answer: "Pope refused divorce from Catherine of Aragon (NOT Anne of Cleves!)", section: "Monarchy" },
  w17: { question: "⚠️ Where is Snowdonia?", answer: "Wales (NOT Scotland!)", section: "Landmarks" },
  w18: { question: "⚠️ Which country did Germany invade in 1939?", answer: "Poland (NOT Russia!)", section: "Wars" },
  w19: { question: "⚠️ Where was the Boer War?", answer: "South Africa (NOT Netherlands!)", section: "Wars" },
  w20: { question: "⚠️ Who was reigning during American colonisation?", answer: "Elizabeth I (NOT Henry VIII!)", section: "Monarchy" },
  w21: { question: "⚠️ Where is Swansea?", answer: "Wales (NOT Northern Ireland!)", section: "Territories" },
  w22: { question: "⚠️ What can devolved administrations legislate on?", answer: "Health and Education (NOT Defence and Social security!)", section: "Politics" },
  w23: { question: "⚠️ What was voted Britain's favourite view in 2007?", answer: "Lake District / Wastwater (NOT Big Ben!)", section: "Landmarks" },
  w24: { question: "⚠️ Who do you contact for a NI Number?", answer: "Department for Work and Pensions / DWP (NOT your employer!)", section: "Law" },
  w25: { question: "⚠️ What is Lent?", answer: "40 days before Easter (NOT after Christmas!)", section: "Festivals" },
  w26: { question: "⚠️ When is St David's Day?", answer: "1st March (NOT 17th April!)", section: "Festivals" },
  w27: { question: "⚠️ Where is the PM's official residence?", answer: "10 Downing Street (NOT Buckingham Palace!)", section: "Prime Ministers" },
  w28: { question: "⚠️ What was the Enlightenment?", answer: "The Enlightenment (NOT The Reformation! Reformation = religion)", section: "Major Events" },
  w29: { question: "⚠️ Where did Admiral Nelson die?", answer: "Battle of Trafalgar (NOT Battle of Hastings!)", section: "Wars" },
  w30: { question: "⚠️ Where was Anne Boleyn executed?", answer: "Tower of London (NOT Whitehall!)", section: "Landmarks" },
  w31: { question: "⚠️ What were the Highland Clearances?", answer: "Scottish landlords cleared small farms for sheep (NOT The Enlightenment!)", section: "Historical Timeline" },
  w32: { question: "⚠️ Who was Boudicca?", answer: "Tribal leader who fought the Romans (NOT St Augustine!)", section: "Historical Timeline" },
  w33: { question: "⚠️ Who heads the Church of England?", answer: "The Monarch (NOT the Pope!)", section: "Religion" },
  w34: { question: "⚠️ Who supported the King in the Civil War?", answer: "Cavaliers / Royalists (NOT Roundheads!)", section: "Historical Timeline" },
  w35: { question: "⚠️ Who did England defeat in 1588?", answer: "Spanish Armada (NOT the Romans!)", section: "Historical Timeline" },
};
