// Life in the UK 快速記憶寶典 - Complete Study Data
// British Heritage Editorial Design
// Updated with ALL wrong questions from Exam 1-8

export interface TableRow {
  cells: string[];
}

export interface StudyTable {
  headers: string[];
  rows: TableRow[];
}

export interface ContentBlock {
  type: 'table' | 'memo' | 'text' | 'subsection';
  title?: string;
  content?: string;
  table?: StudyTable;
}

export interface WrongQuestion {
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  explanation: string;
  timesWrong?: number;
}

export interface Section {
  id: string;
  number: string;
  title: string;
  titleEn?: string;
  icon: string;
  category: 'history' | 'politics' | 'culture' | 'society';
  blocks: ContentBlock[];
  wrongQuestions?: WrongQuestion[];
}

export const categories = [
  { id: 'history', label: '歷史', labelEn: 'History', color: '#8B7355' },
  { id: 'politics', label: '政治法律', labelEn: 'Politics & Law', color: '#1B2A4A' },
  { id: 'culture', label: '文化藝術', labelEn: 'Culture & Arts', color: '#C8A96E' },
  { id: 'society', label: '社會生活', labelEn: 'Society & Life', color: '#2D5F2D' },
] as const;

export const sections: Section[] = [
  {
    id: 'history-timeline',
    number: '一',
    title: '歷史時間線',
    titleEn: 'Historical Timeline',
    icon: '⚔️',
    category: 'history',
    wrongQuestions: [
      {
        question: 'Which was the last successful foreign invasion of England that took place in 1066?',
        correctAnswer: 'The Norman Conquest',
        wrongAnswer: 'The Viking invasion',
        explanation: '1066 年的諾曼征服是英格蘭最後一次成功的外國入侵，由 William the Conqueror 領導。',
      },
      {
        question: 'Which two houses fought in the Wars of the Roses?',
        correctAnswer: 'The House of York and the House of Lancaster',
        wrongAnswer: 'The House of Newcastle',
        explanation: '玫瑰之戰是 York 和 Lancaster 兩個家族之間的內戰，沒有 Newcastle。',
      },
      {
        question: 'Under which king did the Anglo-Saxon kingdoms in England unite to defeat the Vikings?',
        correctAnswer: 'King Alfred the Great',
        wrongAnswer: 'William of Orange',
        explanation: 'King Alfred the Great 聯合了盎格魯-撒克遜王國打敗維京人。William of Orange 是光榮革命的人物。',
        timesWrong: 2,
      },
      {
        question: 'Where did the first farmers come from?',
        correctAnswer: 'South-east Europe 歐洲東南部',
        wrongAnswer: 'South-west Europe 歐洲西南部',
        explanation: '第一批農民來自歐洲東南部（South-east Europe），不是西南部。',
        timesWrong: 2,
      },
      {
        question: 'When was the Magna Carta created?',
        correctAnswer: '1215',
        wrongAnswer: '1514',
        explanation: '大憲章 Magna Carta 是 1215 年由 King John of England 創建的。',
      },
      {
        question: 'When did the Black Death take place?',
        correctAnswer: 'The Middle Ages (1348)',
        wrongAnswer: 'The Iron Age',
        explanation: '黑死病發生在中世紀 Middle Ages，不是鐵器時代 Iron Age。',
      },
      {
        question: 'Who was the tribal leader who fought against the Romans?',
        correctAnswer: 'Boudicca',
        wrongAnswer: 'St Augustine',
        explanation: 'Boudicca 是對抗羅馬的部落領袖。St Augustine 是第一任坎特伯雷大主教。',
      },
      {
        question: 'Who supported King Charles I during the Civil War?',
        correctAnswer: 'Cavaliers 保皇派',
        wrongAnswer: 'Roundheads 國會派',
        explanation: 'Cavaliers 支持國王查理一世，Roundheads 是國會派支持議會。',
      },
      {
        question: 'During the reign of Charles II parts of London were destroyed, what was the cause?',
        correctAnswer: 'A fire (Great Fire of London)',
        wrongAnswer: 'A war',
        explanation: '查理二世時期倫敦被毀是因為倫敦大火 Great Fire of London，不是戰爭。',
      },
      {
        question: 'Which country was invaded by Germany in 1939?',
        correctAnswer: 'Poland 波蘭',
        wrongAnswer: 'Russia 俄羅斯',
        explanation: '1939 年德國入侵波蘭是二戰的開始，不是俄羅斯。',
      },
      {
        question: 'In which battle did Admiral Nelson die?',
        correctAnswer: 'The Battle of Trafalgar',
        wrongAnswer: 'The Battle of Hastings',
        explanation: 'Admiral Nelson 在特拉法加海戰中陣亡，不是黑斯廷斯之戰。',
      },
      {
        question: 'In which country of the British Empire did the Boer War (1899-1902) take place?',
        correctAnswer: 'South Africa 南非',
        wrongAnswer: 'Netherlands 荷蘭',
        explanation: '波爾戰爭發生在南非，雖然 Boers 是荷蘭移民，但戰爭在南非進行。',
      },
      {
        question: 'When did Ireland become a republic?',
        correctAnswer: '1949',
        wrongAnswer: '1925',
        explanation: '愛爾蘭在 1949 年成為共和國，不是 1925 年。',
      },
      {
        question: 'What led the American colonies to want their independence from Britain?',
        correctAnswer: 'The British government wanted to tax them 徵稅',
        wrongAnswer: 'The British government wanted to control their borders',
        explanation: '美國殖民地想獨立是因為英國政府想對他們徵稅，不是控制邊境。',
      },
      {
        question: 'What is the name of the process by which Scottish landlords destroyed individual small farms?',
        correctAnswer: 'The Highland Clearances',
        wrongAnswer: 'The Enlightenment',
        explanation: 'Highland Clearances 是蘇格蘭地主摧毀小農場為牧羊騰地的過程，不是啟蒙運動。',
      },
      {
        question: 'Who did the English defeat in 1588?',
        correctAnswer: 'The Spanish Armada 西班牙無敵艦隊',
        wrongAnswer: 'The Romans',
        explanation: '1588 年英國打敗的是西班牙無敵艦隊，不是羅馬人。伊麗莎白一世時期。',
      },
      {
        question: 'Which two records give us information about England during the reign of William I?',
        correctAnswer: 'The Domesday Book and the Bayeux Tapestry',
        wrongAnswer: 'The Magna Carta (instead of Domesday Book)',
        explanation: '威廉一世時期的兩個重要記錄是 Domesday Book 和 Bayeux Tapestry，不是 Magna Carta。',
      },
      {
        question: 'Which was a crucial aerial battle fought between Germany and Britain during WWII?',
        correctAnswer: 'The Battle of Britain',
        wrongAnswer: 'The Battle of Worcester',
        explanation: '不列顛之戰 Battle of Britain 是二戰中英德之間的關鍵空戰，不是 Battle of Worcester。',
      },
      {
        question: 'Which two languages combined to become one English language?',
        correctAnswer: 'Norman French + Anglo-Saxon',
        wrongAnswer: 'Latin + Anglo-Saxon',
        explanation: '諾曼征服後，Norman French（貴族語言）和 Anglo-Saxon（平民語言）合併成英語。',
      },
      {
        question: 'Which Scottish king defeated the English at the Battle of Bannockburn?',
        correctAnswer: 'Robert the Bruce',
        wrongAnswer: 'King James I',
        explanation: '1314 年 Robert the Bruce 在班諾克本戰役中打敗英格蘭，不是 King James I。',
      },
      {
        question: 'What did the Butler Act introduce in 1944?',
        correctAnswer: 'Free secondary education in England and Wales',
        wrongAnswer: 'Free primary education in England, Wales and Scotland',
        explanation: 'Butler Act 1944 引入的是英格蘭和威爾士的免費中等教育 secondary education，不是初等教育，也不包括蘇格蘭。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '1.1 史前與早期歷史',
      },
      {
        type: 'table',
        table: {
          headers: ['時間', '事件', '記憶要點'],
          rows: [
            { cells: ['6,000 年前', '第一批農民抵達英國', '⚠️ 農民來自**歐洲東南部 South-east Europe**（不是西南部！錯了2次）'] },
            { cells: ['石器時代', '最早出現的是**獵人 Hunter**', '不是農民！'] },
            { cells: ['鐵器時代 Iron Age', '出現第一枚硬幣', '硬幣上面是 **King**'] },
            { cells: ['—', '**Julius Caesar** 第一次入侵英國', '第一次 invasion 的領導人'] },
            { cells: ['AD 3-4 世紀', '首次出現基督徒', '—'] },
            { cells: ['AD 410', '**Jutes** 人從歐洲來到英國', '—'] },
            { cells: ['—', '**Emperor Hadrian** 在英格蘭北部修建城牆', '目的：阻擋 **Picts** 人'] },
            { cells: ['—', '⚠️ **Boudicca** 對抗羅馬的部落領袖', '不是 St Augustine！St Augustine 是第一任坎特伯雷大主教'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '1.2 中世紀與近代',
      },
      {
        type: 'table',
        table: {
          headers: ['時間', '事件', '記憶要點'],
          rows: [
            { cells: ['中世紀', '⚠️ **黑死病 Black Death**', '發生在**中世紀 Middle Ages**（不是鐵器時代！）；死了 **1/3** 人口'] },
            { cells: ['1066', '⚠️ **諾曼征服 The Norman Conquest**', '是**最後一次成功的外國入侵**（不是維京人入侵！）；**1086 年 Domesday Book**'] },
            { cells: ['1066', '**黑斯廷斯之戰 Battle of Hastings**', '⚠️ **Bayeux Tapestry** 和 **Domesday Book** 是威廉一世的兩個記錄（不是 Magna Carta！）'] },
            { cells: ['⚠️ **1215**', '**大憲章 Magna Carta**', '年份是 **1215**（不是 1514！）；**King John of England** 創建'] },
            { cells: ['1314', '**班諾克本戰役 Bannockburn**', '蘇格蘭王 **Robert the Bruce** 第一次蘇格蘭獨立戰爭'] },
            { cells: ['1337-1453', '**英法百年戰爭 Hundred Years War**', '英、法兩國百餘年間斷續進行'] },
            { cells: ['1455-1485', '⚠️ **玫瑰之戰 Wars of Roses**', '**York vs Lancaster** 家族對戰（沒有 Newcastle！）'] },
            { cells: ['1588', '⚠️ 英國打敗**西班牙無敵艦隊 Spanish Armada**', '不是打敗羅馬人！伊麗莎白一世時期'] },
            { cells: ['—', '⚠️ **Highland Clearances 高地清洗**', '蘇格蘭地主摧毀小農場為牧羊騰地（不是 The Enlightenment！）'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '1.3 英國內戰（三次）',
      },
      {
        type: 'table',
        table: {
          headers: ['時間', '內戰', '記憶要點'],
          rows: [
            { cells: ['1642-1646', '第一次 Civil War', '⚠️ 保皇派 **Cavalier** 支持國王（不是 Roundheads！）；Roundheads = 國會派'] },
            { cells: ['1648-1649', '第二次 Civil War', '著名戰役：1644 Battle of **Marston Moor**、1645 Battle of **Naseby**'] },
            { cells: ['1649-1651', '第三次 Civil War', '查理一世被處死（1649）；被 **Oliver Cromwell** 打敗'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '口訣：一世老爸處死，二世兒子流亡。查理二世流亡荷蘭，躲到 Oak 樹下面；Cromwell 1658 年死後，查理二世回來復辟。⚠️ 查理二世時期倫敦被毀是因為**大火 Great Fire of London**（不是戰爭！）',
      },
      {
        type: 'subsection',
        title: '1.4 近現代戰爭',
      },
      {
        type: 'table',
        table: {
          headers: ['時間', '戰爭', '記憶要點'],
          rows: [
            { cells: ['1815', '**滑鐵盧之戰 Battle of Waterloo**', '英法最後一戰；拿破崙的最後一戰'] },
            { cells: ['1853-1856', '**克里米亞戰爭 Crimean War**', '英 vs 俄；**第一場被媒體廣泛報道的戰爭**'] },
            { cells: ['1899-1902', '⚠️ **波爾戰爭 The Boer War**', '發生在**南非 South Africa**（不是荷蘭！）'] },
            { cells: ['1914-1918', '⚠️ **一戰 WWI**', '結束日：**11.11.11**；一戰後女性獲投票權（不是內戰！）'] },
            { cells: ['⚠️ **1939**-1945', '**二戰 WWII**', '**1939 德國入侵波蘭 Poland**（不是俄羅斯！）；敦刻爾克大撤退'] },
            { cells: ['1940', '**不列顛之戰 Battle of Britain**', '空軍對決：英國 vs 德國（夏天）'] },
            { cells: ['—', '⚠️ **特拉法加海戰 Battle of Trafalgar**', '**Admiral Nelson** 在此戰陣亡（不是 Battle of Hastings！）'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '1.5 愛爾蘭獨立',
      },
      {
        type: 'text',
        content: '⚠️ **1949** 年愛爾蘭成為共和國（不是 1925！）。獨立最早在 **1912** 年提出，Fenians 分尼亞人支持獨立，因一戰耽誤，最後**二戰結束後**才獨立。',
      },
      {
        type: 'subsection',
        title: '1.6 美洲殖民',
      },
      {
        type: 'text',
        content: '⚠️ 美國殖民地想獨立的原因是**英國政府想對他們徵稅 tax**（不是控制邊境 control borders！）',
      },
    ],
  },
  {
    id: 'major-events-laws',
    number: '二',
    title: '重大事件與法案',
    titleEn: 'Major Events & Laws',
    icon: '📜',
    category: 'history',
    wrongQuestions: [
      {
        question: 'What is the name of the period when new ideas about politics, philosophy and science were developed?',
        correctAnswer: 'The Enlightenment 啟蒙運動',
        wrongAnswer: 'The Reformation 宗教改革',
        explanation: '啟蒙運動 The Enlightenment 是 18 世紀政治、哲學、科學新思想的時期。The Reformation 是宗教改革。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '2.1 重大歷史事件',
      },
      {
        type: 'table',
        table: {
          headers: ['事件', '考點'],
          rows: [
            { cells: ['**光榮革命 The Glorious Revolution**', '**William of Orange** 被新教徒邀請入侵英格蘭；**君主立憲制 Constitutional Monarchy** 起源於此'] },
            { cells: ['⚠️ **啟蒙運動 The Enlightenment**', '18 世紀；政治、哲學、科學新思想（不是 The Reformation 宗教改革！）；經濟學家 **Adam Smith**'] },
            { cells: ['**宗教改革 The Reformation**', '**亨利八世**建立新教 Protestants；反對天主教和教皇控制；原因：**他想離婚**'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '2.2 重大法案',
      },
      {
        type: 'table',
        table: {
          headers: ['時間', '法案', '核心內容'],
          rows: [
            { cells: ['⚠️ **1215**（選最早的）', '**大憲章 Magna Carta**', 'King John of England 創建；減少王權；英國法治開始'] },
            { cells: ['1679', '**人身保護法 Habeas Corpus Act**', '每個犯人有權上庭'] },
            { cells: ['1689', '**權力法案 The Bill of Rights**', '確定議會權力；限制國王權力'] },
            { cells: ['1833', '**廢奴法案 Emancipation Act**', '廢除大英帝國全境奴隸制'] },
            { cells: ['1944', '**巴特勒法案 The Butler Act**', '引入英格蘭和威爾士**免費中等教育**'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '英國憲法是 unwritten constitution（不成文的）！',
      },
    ],
  },
  {
    id: 'monarchy',
    number: '三',
    title: '君主 Monarchy',
    titleEn: 'Monarchy',
    icon: '👑',
    category: 'history',
    wrongQuestions: [
      {
        question: 'Who was given the title of Lord Protector?',
        correctAnswer: 'Oliver Cromwell',
        wrongAnswer: 'Winston Churchill',
        explanation: 'Oliver Cromwell 在 1658 年獲得護國公 Lord Protector 稱號，不是 Churchill。',
      },
      {
        question: 'Why did Henry VIII establish the Church of England?',
        correctAnswer: 'Because the Pope didn\'t let him divorce Catherine of Aragon',
        wrongAnswer: 'Anne of Cleves',
        explanation: '亨利八世建立英格蘭教會是因為教皇不讓他和第一任妻子 Catherine of Aragon 離婚，不是 Anne of Cleves。',
      },
      {
        question: 'Who was reigning when English settlers first began to colonise the eastern coast of America?',
        correctAnswer: 'Elizabeth I 伊麗莎白一世',
        wrongAnswer: 'Henry VIII 亨利八世',
        explanation: '殖民北美東海岸時的在位君主是伊麗莎白一世，不是亨利八世。',
      },
      {
        question: 'The version of the Bible created by King James I is known as:',
        correctAnswer: 'The Authorised Version',
        wrongAnswer: 'The Reformed Version',
        explanation: 'King James 聖經 = King James Version = Authorised Version，不是 Reformed Version。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['君主', '關鍵考點'],
          rows: [
            { cells: ['⚠️ **King Alfred the Great**', 'Anglo-Saxon 聯合打敗 **Vikings 維京人**（不是 William of Orange！錯了2次）'] },
            { cells: ['**King Robert the Bruce**', '蘇格蘭國王；1314 班諾克本戰役'] },
            { cells: ['⚠️ **William the Conqueror（威廉一世）**', '建立 **Tower of London**（不是 Elizabeth I 建的！錯了2次）；**Domesday Book**；Bayeux Tapestry'] },
            { cells: ['**查理一世 Charles I**', '君權神授 Divine Right of Kings；**被處死**'] },
            { cells: ['**查理二世 Charles II**', '流亡荷蘭；躲在 **Oak tree** 後面；Cromwell 死後回來復辟'] },
            { cells: ['⚠️ **Oliver Cromwell**', '1658 年獲 **Lord Protector 護國公**稱號（不是 Winston Churchill！）'] },
            { cells: ['**Mary Stuart (Queen of Scots)**', '**天主教 Catholic**；監禁 **20 年**後處決'] },
            { cells: ['⚠️ **Henry VIII 亨利八世**', '建立 **Church of England**；因教皇不讓他和 **Catherine of Aragon** 離婚（不是 Anne of Cleves！）'] },
            { cells: ['⚠️ **Elizabeth I 伊麗莎白一世**', '**Protestant 新教徒**；1588 打敗西班牙艦隊；⚠️ **殖民北美時的在位君主**（不是 Henry VIII！）'] },
            { cells: ['**James I 詹姆士一世**', '來自蘇格蘭；伊麗莎白一世後繼位；**King James Version 聖經** = **Authorised Version**'] },
            { cells: ['⚠️ **Boudicca**', '對抗羅馬的部落領袖（不是 St Augustine！）'] },
            { cells: ['**Bonnie Prince Charlie**', '蘇格蘭高地 Scottish Highlands；1745 年'] },
          ],
        },
      },
    ],
  },
  {
    id: 'prime-ministers',
    number: '四',
    title: '首相',
    titleEn: 'Prime Ministers',
    icon: '🎩',
    category: 'politics',
    wrongQuestions: [
      {
        question: 'Who was the first female Prime Minister of the UK?',
        correctAnswer: 'Margaret Thatcher 撒切爾夫人',
        wrongAnswer: 'Mary Stuart',
        explanation: 'Margaret Thatcher 是英國第一位女首相，Mary Stuart 是蘇格蘭女王，不是首相。',
      },
      {
        question: 'Where is the official home of the Prime Minister?',
        correctAnswer: '10 Downing Street',
        wrongAnswer: 'Buckingham Palace',
        explanation: '首相官邸是 10 Downing Street，白金漢宮 Buckingham Palace 是君主住的。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['身份', '名字', '記憶技巧'],
          rows: [
            { cells: ['**第一個首相**', '**Sir Robert Walpole**（1721 年）', '選名字**最長**的選項'] },
            { cells: ['⚠️ **第一個女首相**', '**Margaret Thatcher**', '撒切爾夫人（不是 Mary Stuart！Mary Stuart 是蘇格蘭女王）'] },
            { cells: ['女首相之後的首相', '**John**（Major）', '—'] },
            { cells: ['**二戰期間首相**', '**Winston Churchill**', '最偉大的人；**1945 年下崗**'] },
            { cells: ['1945 年被任命首相', '**Clement Attlee**', '丘吉爾之後'] },
            { cells: ['**工黨領袖**', '**Tony Blair**', '口訣：**勞動是理髮師 Tony**；引入蘇格蘭議會和威爾士議會'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '⚠️ 首相官邸是 **10 Downing Street**（不是 Buckingham Palace！白金漢宮是君主住的）',
      },
    ],
  },
  {
    id: 'religion',
    number: '五',
    title: '宗教',
    titleEn: 'Religion',
    icon: '⛪',
    category: 'society',
    wrongQuestions: [
      {
        question: 'Who is the head of the Church of England?',
        correctAnswer: 'The monarch 君主',
        wrongAnswer: 'The Pope 教皇',
        explanation: '英格蘭教會的首腦是君主（Monarch），不是教皇（Pope）。教皇是天主教的首腦。',
      },
      {
        question: 'Wales has its own established church. True or False?',
        correctAnswer: 'False — Wales 沒有國教',
        wrongAnswer: 'True',
        explanation: 'Wales 和 Northern Ireland 都沒有自己的國教（established church）。',
      },
      {
        question: 'In 1560, the Scottish Parliament established what type of church?',
        correctAnswer: 'A Protestant church (Presbyterian)',
        wrongAnswer: 'A Catholic church',
        explanation: '1560 年蘇格蘭議會建立的是新教 Protestant 教會（長老教會 Presbyterian），不是天主教 Catholic。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '5.1 四地區國教',
      },
      {
        type: 'table',
        table: {
          headers: ['地區', '國教', '備註'],
          rows: [
            { cells: ['**England**', '⚠️ **Church of England**', '首腦是**君主 Monarch**（不是教皇 Pope！）；精神領袖 = **坎特伯雷大主教**；第一任大教主 = **St Augustine**'] },
            { cells: ['**Scotland**', '**Presbyterian Church 長老教會**', '—'] },
            { cells: ['⚠️ **Wales**', '**沒有自己的教會**', 'Wales 沒有國教（你答了 True！正確答案是 False）'] },
            { cells: ['⚠️ **Northern Ireland**', '**沒有自己的教會**', '—'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '5.2 宗教派別',
      },
      {
        type: 'table',
        table: {
          headers: ['宗教', '關鍵考點'],
          rows: [
            { cells: ['**Hindus 印度教**', 'Diwali 節 = **The Festival of Lights**'] },
            { cells: ['**Sikhs 錫克教**', '也過 Diwali 節 = **The Festival of Lights**'] },
            { cells: ['**Muslims 穆斯林**', '開齋節 **Eid al-Fitr**；在 **Ramadan** 齋月舉行'] },
            { cells: ['**Puritans 清教徒**', '屬於嚴格的新教徒 **Protestants**'] },
            { cells: ['**英格蘭教**', '亨利八世 + 伊麗莎白一世；屬於 Protestants'] },
            { cells: ['**Catholic 天主教**', 'Mary Stuart (Queen of Scots)；監禁 20 年後處決'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '宗教迫害：法國 Huguenots 胡格諾派（新教徒）逃到英國避難。',
      },
    ],
  },
  {
    id: 'festivals',
    number: '六',
    title: '節日與四地區象徵',
    titleEn: 'Festivals & Symbols',
    icon: '🎉',
    category: 'culture',
    wrongQuestions: [
      {
        question: 'Who is the patron Saint of Scotland?',
        correctAnswer: 'St Andrew',
        wrongAnswer: 'St George',
        explanation: 'St Andrew 是蘇格蘭的守護聖人，St George 是英格蘭的守護聖人。',
      },
      {
        question: 'What is a bank holiday?',
        correctAnswer: 'A public holiday when banks and many other businesses are closed',
        wrongAnswer: 'An additional day off that every worker is entitled to',
        explanation: 'Bank holiday 是公共假日，銀行和許多企業都會關門，不是每個工人額外的帶薪假。',
      },
      {
        question: 'When is St David\'s day celebrated?',
        correctAnswer: '1st March (3月1日)',
        wrongAnswer: '17th April (4月17日)',
        explanation: 'St David\'s Day 是 3 月 1 日，不是 4 月 17 日。St David 是 Wales 的守護聖人。',
      },
      {
        question: 'What is known as Lent?',
        correctAnswer: 'The 40 days before Easter 復活節前40天',
        wrongAnswer: 'The 40 days after Christmas',
        explanation: 'Lent 是復活節前的 40 天齋期，不是聖誕節後 40 天。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '6.1 四地區守護聖人與象徵',
      },
      {
        type: 'table',
        table: {
          headers: ['地區', '守護聖人', '日期', '新年前夕', '傳統食物', '花朵'],
          rows: [
            { cells: ['**England**', 'St George', '**4.23**', '—', '—', '**Rose 玫瑰**'] },
            { cells: ['⚠️ **Scotland**', '**St Andrew**（不是 St George！）', '**11.30**', '**Hogmanay**', '**Haggis**', '**Thistle 薊**'] },
            { cells: ['⚠️ **Wales**', '**St David**', '⚠️ **3.1**（不是 4月17日！）', '—', '—', '**Daffodil 水仙**'] },
            { cells: ['**N. Ireland**', "St Patrick's", '**3.17**', '—', '**Ulster Fry**', '**Shamrock 三葉草**'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '6.2 其他重要節日',
      },
      {
        type: 'table',
        table: {
          headers: ['節日', '說明'],
          rows: [
            { cells: ['**Good Friday**', '受難日，基督死掉的那天'] },
            { cells: ['⚠️ **Lent**', '復活節**前** 40 天（不是聖誕節後 40 天！）'] },
            { cells: ['**The Fringe**', '**愛丁堡**最大的節日'] },
            { cells: ['**Diwali**', 'The Festival of Lights；**Hindus + Sikhs**'] },
            { cells: ['**Eid al-Fitr**', '開齋節；Ramadan 齋月後；**Muslims**'] },
            { cells: ['⚠️ **Bank Holiday**', '公共假日，銀行和企業關門（不是每個工人的額外假日！）'] },
          ],
        },
      },
    ],
  },
  {
    id: 'womens-rights',
    number: '七',
    title: '女權里程碑',
    titleEn: "Women's Rights",
    icon: '✊',
    category: 'society',
    wrongQuestions: [
      {
        question: 'When were men and women given the right to vote at the age of 21?',
        correctAnswer: '1928',
        wrongAnswer: '1918',
        explanation: '1918 年只是 30 歲以上女性獲得投票權，1928 年才是 21 歲男女同權投票。',
      },
      {
        question: 'Women over 30 were given the right to vote as a result of their contribution towards which war?',
        correctAnswer: 'The First World War 一戰',
        wrongAnswer: 'The Civil War 內戰',
        explanation: '1918 年女性獲得投票權是因為一戰期間的貢獻，不是內戰。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['時間', '事件', '備註'],
          rows: [
            { cells: ['⚠️ **1918**', '**30 歲**女性獲投票權', '因為**一戰 WWI** 女性貢獻（不是內戰 Civil War！）'] },
            { cells: ['⚠️ **1928**', '**21 歲**男女同權投票', '1928 才是男女同齡投票（不是 1918！）'] },
            { cells: ['**1960s**', '法律放寬：離婚 divorce + 墮胎 abortion', '**對錯題常考**'] },
            { cells: ['—', '**Suffragettes 女權運動**', '代表人物：**Emmeline Pankhurst**；目標：女性投票權'] },
          ],
        },
      },
    ],
  },
  {
    id: 'science',
    number: '八',
    title: '科學與發明',
    titleEn: 'Science & Inventions',
    icon: '🔬',
    category: 'culture',
    wrongQuestions: [
      {
        question: 'What did Sir Frank Whittle invent in the 1930s?',
        correctAnswer: 'Jet engine 噴射引擎',
        wrongAnswer: 'Radar 雷達',
        explanation: 'Frank Whittle 發明的是噴射引擎 Jet Engine，不是雷達。雷達是 Sir Robert Watson-Watt 發明的。',
      },
      {
        question: 'What did the Scottish John Logie Baird develop?',
        correctAnswer: 'Television 電視',
        wrongAnswer: 'Radio 收音機',
        explanation: 'John Logie Baird 發明的是電視 Television，不是收音機 Radio。',
      },
      {
        question: 'What is Isaac Newton famous for?',
        correctAnswer: 'Discovering gravity 發現萬有引力',
        wrongAnswer: 'Inventing the telephone',
        explanation: 'Isaac Newton 是科學家，以發現萬有引力（gravity）聞名。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['發明/發現', '人物', '記憶技巧'],
          rows: [
            { cells: ['**雷達**', '**Sir Robert Watson-Watt**', '—'] },
            { cells: ['**DNA 結構**', '**Francis Crick**', '—'] },
            { cells: ['**萬維網 WWW**', '**Sir Tim Berners-Lee**', '選 **Lee 最長的名字**'] },
            { cells: ['**18-19 世紀工業革命**', '—', '得益於 **Steam Power 蒸汽動力**'] },
            { cells: ['⚠️ **噴射引擎 Jet Engine**', '**Frank Whittle**', '是噴射引擎（不是雷達！雷達是 Watson-Watt）'] },
            { cells: ['⚠️ **電視機**', '**John Logie Baird**', '口訣：John Lewis 買 TV（不是 Radio！）'] },
            { cells: ['**分裂原子 split the atom**', '**Ernest Rutherford**', '—'] },
            { cells: ['**航海到澳大利亞**', '**Captain James Cook**', '庫克船長'] },
            { cells: ['**印刷之父 print books**', '**William Caxton**', '—'] },
          ],
        },
      },
    ],
  },
  {
    id: 'literature-arts',
    number: '九',
    title: '文學、藝術與電影',
    titleEn: 'Literature, Arts & Film',
    icon: '🎭',
    category: 'culture',
    blocks: [
      {
        type: 'subsection',
        title: '9.1 文學作品',
      },
      {
        type: 'table',
        table: {
          headers: ['作品', '作者', '記憶技巧'],
          rows: [
            { cells: ['**夏洛克福爾摩斯**', '**Sir Arthur Conan Doyle**', '選最長；Author ≈ Arthur'] },
            { cells: ['**仲夏夜之夢**', '**William Shakespeare**', '出生在 **Stratford-upon-Avon**'] },
            { cells: ['**The Daffodils 水仙花詩**', '**William Wordsworth**', '威廉華爾茲'] },
            { cells: ['**The Canterbury Tales 坎特伯雷故事集**', '**Geoffrey Chaucer**', '是**詩歌**'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '9.2 音樂與藝術',
      },
      {
        type: 'table',
        table: {
          headers: ['類別', '人物/名稱', '記憶技巧'],
          rows: [
            { cells: ['**作曲家 EE**', '**Edward Elgar**', 'EE = Edward Elgar'] },
            { cells: ['**陶瓷藝術 CC**', '**Clarice Cliff**', 'CC = Clarice Cliff'] },
            { cells: ['**流行藝術 Pop Art**', '**David Hockney**（1960 年代）', '大衛；同期：披頭士 + 滾石樂隊'] },
            { cells: ['**the Proms**', '為期八周的夏季古典音樂季', '包括倫敦皇家阿爾伯特音樂廳'] },
            { cells: ['**透納獎 Turner Prize**', '**當代藝術** contemporary art', '—'] },
            { cells: ['**布克獎 Man Booker Prize**', '**文學** Literature', 'book 獎 ≈ 文獻'] },
            { cells: ['**奧斯卡女演員**', 'Tilda Swinton、Dame Judi Dench、Kate Winslet', '—'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '9.3 電影',
      },
      {
        type: 'table',
        table: {
          headers: ['電影', '考點'],
          rows: [
            { cells: ['**最高收入 highest-grossing**', '**007 James Bond**'] },
            { cells: ['**最受歡迎（2003）**', '**指環王 The Lord of the Rings**；JRR Tolkien'] },
            { cells: ['**最長系列**', '**哈利波特**'] },
            { cells: ['**Wallace and Gromit**', '**Nick Park** 動物電影'] },
            { cells: ['**流浪漢 tramp**', '**卓別林**表演'] },
          ],
        },
      },
    ],
  },
  {
    id: 'sports',
    number: '十',
    title: '體育',
    titleEn: 'Sports',
    icon: '🏆',
    category: 'culture',
    wrongQuestions: [
      {
        question: 'Which two of the following are famous British Paralympians?',
        correctAnswer: 'Baroness Tanni Grey-Thompson and Ellie Simmonds',
        wrongAnswer: 'Dame Kelly Holmes (she is Olympic, not Paralympic)',
        explanation: 'Baroness Tanni Grey-Thompson 和 Ellie Simmonds 是殘奧會運動員。Dame Kelly Holmes 是奧運會選手，不是殘奧會！',
        timesWrong: 2,
      },
      {
        question: 'Where is the Scottish Grand National held?',
        correctAnswer: 'Ayr',
        wrongAnswer: 'Edinburgh',
        explanation: 'Scottish Grand National 在 Ayr 舉行，不是 Edinburgh。',
      },
      {
        question: 'Where is Mary Peters from?',
        correctAnswer: 'Northern Ireland 北愛爾蘭',
        wrongAnswer: 'England',
        explanation: 'Mary Peters 是北愛爾蘭運動員，不是英格蘭。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['運動', '考點'],
          rows: [
            { cells: ['**高爾夫 Golf**', '起源於 **15 世紀 Scotland**'] },
            { cells: ['**橄欖球 Rugby**', '**The Six Nations Championship**'] },
            { cells: ['**板球 Cricket**', 'England and Australia 在 **The Ashes** 舉行（口訣：**AA = Australia + Ashes**）'] },
            { cells: ['**划船 Rowing**', '**牛津、劍橋**大學'] },
            { cells: ['⚠️ **殘奧會 Paralympics**', '知名運動員：**Baroness Tanni Grey-Thompson** + **Ellie Simmonds**（不是 Dame Kelly Holmes！Kelly Holmes 是奧運會！錯了2次）'] },
            { cells: ['**跑步**', '第一個 4 分鐘跑完 1 英里：**Sir Roger Bannister**（R 開頭 ≈ Run）'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '馬賽 Horse Racing',
      },
      {
        type: 'table',
        table: {
          headers: ['地點', '賽事'],
          rows: [
            { cells: ['**Berkshire**（英格蘭）', '**Royal Ascot** 最盛大'] },
            { cells: ['**Ayr**（蘇格蘭）', 'The Scottish Grand National'] },
            { cells: ['**Liverpool**', 'The Grand National at Aintree'] },
            { cells: ['**Newmarket**', '最大賽馬博物館（地名是考點）'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '1966 世界杯英國隊長：Bobby Moore',
      },
    ],
  },
  {
    id: 'landmarks',
    number: '十一',
    title: '景點',
    titleEn: 'Landmarks',
    icon: '🏰',
    category: 'culture',
    wrongQuestions: [
      {
        question: 'Who built the Tower of London?',
        correctAnswer: 'William the Conqueror 威廉一世',
        wrongAnswer: 'Queen Elizabeth I',
        explanation: 'Tower of London 是威廉一世（William the Conqueror）建的，不是伊麗莎白一世。',
        timesWrong: 2,
      },
      {
        question: 'Where are the Crown Jewels kept?',
        correctAnswer: 'At the Tower of London',
        wrongAnswer: 'At Windsor Castle',
        explanation: '皇冠珠寶 Crown Jewels 保存在 Tower of London，不是 Windsor Castle。',
      },
      {
        question: 'Where was Anne Boleyn executed?',
        correctAnswer: 'Tower of London',
        wrongAnswer: 'Whitehall',
        explanation: 'Anne Boleyn（亨利八世的妻子）在 Tower of London 被處決，不是 Whitehall。',
      },
      {
        question: 'Where is Snowdonia located?',
        correctAnswer: 'Wales',
        wrongAnswer: 'Scotland',
        explanation: 'Snowdonia 山峰位於 Wales，不是 Scotland。',
      },
      {
        question: 'What UK landmark was voted as Britain\'s favourite view in 2007?',
        correctAnswer: 'Lake District (Wastwater)',
        wrongAnswer: 'Big Ben',
        explanation: '2007 年 Wastwater（湖區）被票選為英國最佳景觀，不是 Big Ben。',
      },
      {
        question: 'Where is the Lake District located?',
        correctAnswer: 'England',
        wrongAnswer: 'Wales',
        explanation: 'Lake District 湖區位於 England，不是 Wales。它是英格蘭最大的國家公園。',
      },
      {
        question: 'What sport is played at Lord\'s Cricket Ground?',
        correctAnswer: 'Cricket 板球',
        wrongAnswer: 'Football 足球',
        explanation: 'Lord\'s 是板球場（Cricket Ground），不是足球場，位於倫敦。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['地區', '景點', '考點'],
          rows: [
            { cells: ['**England**', '**Theatreland**', '位於 London\'s **West End**'] },
            { cells: ['', '⚠️ **Tower of London**', '⚠️ **威廉一世 William the Conqueror 建**（不是 Elizabeth I！錯了2次）；導遊叫 **Beefeaters**；⚠️ **Crown Jewels** 在此（不是 Windsor Castle！）；⚠️ **Anne Boleyn** 在此被處決（不是 Whitehall！）'] },
            { cells: ['', '**Stonehenge 巨石陣**', '在 **Wiltshire 威爾特郡**'] },
            { cells: ['', '⚠️ **Lake District 湖區**', '**最大的國家公園**；⚠️ 2007 年 **Wastwater** 被票選為英國最佳景觀（不是 Big Ben！）'] },
            { cells: ['**Scotland**', '**Crathes Castle**', '凡是考 XXX National Park 基本都是**蘇格蘭**'] },
            { cells: ['', '**Loch Lomond and the Trossachs**', '國家公園；英國有 **15 個**國家公園'] },
            { cells: ['⚠️ **Wales**', '**Snowdonia 山峰**', '在 **Wales**（不是 Scotland！）'] },
            { cells: ['', '**Eden Project**', '在 **Cornwall 康沃爾**'] },
            { cells: ['**N. Ireland**', '**Giant\'s Causeway 巨石堤**', '北愛爾蘭'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '文化旅遊補充',
      },
      {
        type: 'table',
        table: {
          headers: ['名稱', '考點'],
          rows: [
            { cells: ['**紀念碑 Cenotaph**', '**Sir Edwin Lutyens** 設計（口訣：**win** 勝利 ≈ 紀念碑）；位於 **Whitehall**'] },
            { cells: ['**The National Trust**', '保護英國重要建築、海岸線和鄉村的**慈善組織**'] },
            { cells: ['**1851 年大展覽**', '在 **Hyde Park**；場館 = **The Crystal Palace 水晶宮**'] },
          ],
        },
      },
    ],
  },
  {
    id: 'territories',
    number: '十二',
    title: '領土',
    titleEn: 'Territories',
    icon: '🗺️',
    category: 'politics',
    wrongQuestions: [
      {
        question: 'Where is the UK geographically located?',
        correctAnswer: 'North west of Europe 歐洲西北部',
        wrongAnswer: 'North east of Europe',
        explanation: '英國位於歐洲的西北部，不是東北部。',
      },
      {
        question: 'Where is Swansea located?',
        correctAnswer: 'Wales',
        wrongAnswer: 'Northern Ireland',
        explanation: 'Swansea 位於 Wales，不是 Northern Ireland。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['類別', '包含', '備註'],
          rows: [
            { cells: ['⚠️ **UK 地理位置**', '位於歐洲**西北部 North west of Europe**', '不是東北部 North east！'] },
            { cells: ['**Great Britain 領土**', '英格蘭、蘇格蘭、威爾士', '—'] },
            { cells: ['**Crown dependency 皇室屬地**', 'St Helena、Falkland Islands、**the Isle of Man**、**The Channel Islands**', '**link of UK，不是 a part of**'] },
            { cells: ['⚠️ **Swansea**', '位於 **Wales**', '不是 Northern Ireland！'] },
          ],
        },
      },
    ],
  },
  {
    id: 'political-system',
    number: '十三',
    title: '政治制度',
    titleEn: 'Political System',
    icon: '🏛️',
    category: 'politics',
    wrongQuestions: [
      {
        question: 'By law, which TWO types of media must give balanced coverage before an election?',
        correctAnswer: 'Television and Radio 電視和廣播',
        wrongAnswer: 'Television and Newspapers',
        explanation: '法律規定電視和廣播必須給予各政黨平等的報導時間，報紙不在此限制之內。',
      },
      {
        question: 'How is a jury selected?',
        correctAnswer: 'Randomly from the electoral register 從選民登記冊隨機選取',
        wrongAnswer: 'From a postcode selection',
        explanation: '陪審團是從選民登記冊中隨機選取的，不是按郵編選的。',
      },
      {
        question: 'Which two issues can the devolved administrations pass laws on?',
        correctAnswer: 'Health and Education 衛生和教育',
        wrongAnswer: 'Defence and Social security',
        explanation: '分權行政部門可以立法管理衛生和教育。國防和社會保障歸中央政府管。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '13.1 議會結構',
      },
      {
        type: 'table',
        table: {
          headers: ['議院', '組成', '記憶技巧'],
          rows: [
            { cells: ['**上議院 House of Lords**', '貴族君主；終生貴族 Life peers 由君主任命', '**Lord 老爺 = 高高在上 = 上議院**'] },
            { cells: ['**下議院 House of Commons**', '需要 **The Speaker**', '—'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '13.2 議員 MPs',
      },
      {
        type: 'table',
        table: {
          headers: ['考點', '內容'],
          rows: [
            { cells: ['MPs 責任', '1. 對選民負責 2. 參加辯論和對新法律投票'] },
            { cells: ['MP 選舉制度', '**By-election 補缺選舉**（死了或辭職補缺）'] },
            { cells: ['MP 競選年齡', '**18 歲**'] },
            { cells: ['選民投票前', '會收到 **A poll card**'] },
            { cells: ['議會辯論公開', '電視 broadcast，過程叫 **Hansard**'] },
            { cells: ['拉票', '**Canvassing**'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '13.3 政黨與聯盟',
      },
      {
        type: 'table',
        table: {
          headers: ['考點', '內容'],
          rows: [
            { cells: ['**2010 年聯盟**', '**保守黨 Conservative Party** + **自由民主黨 Liberal Democrats**（卡梅倫）；選兩個**最長**的選項'] },
            { cells: ['**英聯邦 Commonwealth**', '= **association of countries 國家聯盟**（group、組織、social 都不對！）'] },
            { cells: ['**總理問答**', '**每周一次**'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '13.4 職責分工',
      },
      {
        type: 'table',
        table: {
          headers: ['職責範圍', '負責機構'],
          rows: [
            { cells: ['**犯罪 Crime、警察 Policing**', '**Home Secretary 內政部長**'] },
            { cells: ['**移民 Immigration**', '**Home Secretary** + **Parliament**'] },
            { cells: ['**國防 Defence**', '**Parliament 國會**'] },
            { cells: ['⚠️ **衛生 Health、教育 Education**', '⚠️ **分權行政部門**可以立法（不是 Defence 和 Social security！這兩個歸中央管！）'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '⚠️ 選舉前必須保持公正報道的媒體是**電視 Television** 和**廣播 Radio**（不包括報紙 Newspapers！報紙可以有政治立場）',
      },
      {
        type: 'memo',
        content: '⚠️ 陪審團成員是從**選民登記冊 electoral register** 中**隨機 randomly** 選出的（不是按郵編 postcode 選的！）',
      },
    ],
  },
  {
    id: 'law-daily-life',
    number: '十四',
    title: '法律與日常生活',
    titleEn: 'Law & Daily Life',
    icon: '⚖️',
    category: 'politics',
    wrongQuestions: [
      {
        question: 'What do you need to do to apply for a National Insurance Number?',
        correctAnswer: 'Contact the Department for Work and Pensions (DWP)',
        wrongAnswer: 'Ask your employer to get it for you',
        explanation: '申請 National Insurance Number 需要自己聯繫 DWP（Department for Work and Pensions），不是讓雇主幫你辦。',
      },
      {
        question: 'How can you complain about the police? Who do you write to?',
        correctAnswer: 'Write to the Chief Constable',
        wrongAnswer: 'Write to your local MP',
        explanation: '投訴警察應該寫信給 Chief Constable，不是寫給 MP 議員。',
      },
      {
        question: 'How are civil servants chosen in the UK?',
        correctAnswer: 'Chosen on merit and are politically neutral',
        wrongAnswer: 'Chosen by political parties',
        explanation: '英國公務員擇優錄取（chosen on merit）且政治中立（politically neutral），不屬於任何政黨。',
      },
      {
        question: 'How are towns and cities in the UK governed?',
        correctAnswer: 'By democratically elected councils',
        wrongAnswer: 'By government-appointed officials',
        explanation: '英國城鎮由民選議會（democratically elected councils）管理，不是政府任命的官員。',
      },
      {
        question: 'What is the Union Jack?',
        correctAnswer: 'The flag of the United Kingdom 英國國旗',
        wrongAnswer: 'A trade union 工會',
        explanation: 'Union Jack 是英國國旗，不是工會 trade union。',
      },
      {
        question: 'What is the largest denomination banknote in the UK?',
        correctAnswer: '£50',
        wrongAnswer: '£100',
        explanation: '英國最大面值紙幣是 £50，沒有 £100 紙幣。',
      },
      {
        question: 'What was Florence Nightingale famous for?',
        correctAnswer: 'Being a nurse 護士（現代護理之母）',
        wrongAnswer: 'Being a poet 詩人',
        explanation: 'Florence Nightingale 是護士，現代護理之母，不是詩人。',
      },
      {
        question: 'Who wrote Oliver Twist?',
        correctAnswer: 'Charles Dickens',
        wrongAnswer: 'Shakespeare',
        explanation: 'Oliver Twist 是 Charles Dickens 寫的，不是 Shakespeare。',
      },
      {
        question: 'When is Boxing Day?',
        correctAnswer: '26 December (12月26日)',
        wrongAnswer: '25 December',
        explanation: 'Boxing Day 是 12 月 26 日，聖誕節後一天。',
      },
    ],
    blocks: [
      {
        type: 'subsection',
        title: '14.1 英國法律基本原則',
      },
      {
        type: 'text',
        content: '英國生活的基本原則包括：**democracy 民主**（民主議會制度 Democratic parliamentary system）、**the rule of law 法治**、**individual liberty 個人自由**、以及**尊重不同信仰 different beliefs and community life**。',
      },
      {
        type: 'subsection',
        title: '14.2 犯罪分類',
      },
      {
        type: 'table',
        table: {
          headers: ['類型', '例子'],
          rows: [
            { cells: ['**民事犯罪**', '工作場所歧視 **Discrimination in the workplace**'] },
            { cells: ['**刑事犯罪**', '**種族歧視**'] },
            { cells: ['煙酒', '公共場所禁煙；**18 歲以下**禁止喝酒'] },
          ],
        },
      },
      {
        type: 'subsection',
        title: '14.3 投訴警察方式',
      },
      {
        type: 'text',
        content: '投訴警察有三種方式：直接去警局、寫信給警察局的 **Chief**、找**獨立警察投訴委員會**。',
      },
      {
        type: 'subsection',
        title: '14.4 北愛爾蘭投票',
      },
      {
        type: 'text',
        content: 'Northern Ireland 使用 **individual registration** 制度，所有有投票權的人必須自己填寫登記表。',
      },
      {
        type: 'subsection',
        title: '14.5 國民保險號碼',
      },
      {
        type: 'text',
        content: '⚠️ 申請 National Insurance Number 需要聯繫 **Department for Work and Pensions (DWP)**（不是讓雇主幫你辦！）',
      },
    ],
  },
  {
    id: 'four-regions',
    number: '十五',
    title: '四地區比較',
    titleEn: 'Four Regions Comparison',
    icon: '🏴',
    category: 'politics',
    wrongQuestions: [
      {
        question: 'Northern Ireland has its own banknotes, which are valid everywhere in the UK.',
        correctAnswer: 'True — 北愛爾蘭和蘇格蘭都有自己的紙幣',
        wrongAnswer: 'False',
        explanation: '北愛爾蘭和蘇格蘭都有權發行自己的紙幣，這些紙幣在全英國都是有效的。',
      },
      {
        question: 'What is the capital of Northern Ireland?',
        correctAnswer: 'Belfast',
        wrongAnswer: 'Dublin',
        explanation: '北愛爾蘭的首都是 Belfast，不是 Dublin。Dublin 是愛爾蘭共和國（Republic of Ireland）的首都。',
      },
      {
        question: 'How many members does the Welsh Parliament (Senedd) have?',
        correctAnswer: '60 MSs',
        wrongAnswer: '90 MSs',
        explanation: '威爾士議會有 60 位議員（MSs），不是 90。90 是北愛爾蘭議會（MLAs）的人數。',
      },
    ],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['地區', '陪審團人數', '議會人數/稱呼', '選舉週期', '小型犯罪法庭', '紙幣'],
          rows: [
            { cells: ['**England**', '12', 'MPs', '5 年', "Magistrates' Court", '英鎊'] },
            { cells: ['**Scotland**', '**15**', '**129**', '—', '**Justice of the Peace Court**（和平法庭）', '**自己有紙幣**'] },
            { cells: ['**Wales**', '12', '60 MSs', '**4 年**', "Magistrates' Court", '英鎊'] },
            { cells: ['⚠️ **N. Ireland**', '12', '90 MLAs', '—', "Magistrates' Court", '⚠️ **自己有紙幣**（在全英有效！答案是 True！）'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '蘇格蘭最特殊：陪審團 15 人（其他都是 12）、法庭名稱不同、自己有紙幣。',
      },
    ],
  },
  {
    id: 'age-requirements',
    number: '十六',
    title: '年齡相關考點',
    titleEn: 'Age Requirements',
    icon: '🎂',
    category: 'society',
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['年齡', '可以做什麼'],
          rows: [
            { cells: ['**16 歲**', '騎 **moped**（輕型摩托車）'] },
            { cells: ['**16-17 歲**', '參加 **National Citizen Service programme**（不是強制的 compulsory，是 **optional**！對錯題）'] },
            { cells: ['**17 歲**', '考 **car or motorcycle 駕照**'] },
            { cells: ['**18 歲**', '競選議員 MP；公務員競選（擇優錄取、立場中立）；煙酒俱樂部；**serve on a jury 當陪審員**'] },
          ],
        },
      },
    ],
  },
  {
    id: 'people-mnemonics',
    number: '十七',
    title: '人物速記口訣',
    titleEn: 'People Mnemonics',
    icon: '🧠',
    category: 'society',
    blocks: [
      {
        type: 'subsection',
        title: '「選最長名字」系列（基本出現 Sir 都選 Sir）',
      },
      {
        type: 'table',
        table: {
          headers: ['人物', '成就', '記憶口訣'],
          rows: [
            { cells: ['**Sir Edwin Lutyens**', '紀念碑設計師', '**win** 勝利 ≈ 紀念碑'] },
            { cells: ['**Sir Roger Bannister**', '4 分鐘跑 1 英里', '**R** 開頭 ≈ **Run**'] },
            { cells: ['**Sir Arthur Conan Doyle**', '夏洛克福爾摩斯作者', '**Author** ≈ **Arthur**'] },
            { cells: ['**Sir Christopher Wren**', '聖保羅大教堂設計師', '**Chris** ≈ 教堂'] },
            { cells: ['**Sir Tim Berners-Lee**', '萬維網 WWW', '選 **Lee 最長的名字**'] },
            { cells: ['**Sir Robert Walpole**', '第一個首相', '選**最長**選項'] },
          ],
        },
      },
      {
        type: 'memo',
        content: '技巧：基本出現 Sir 都選 Sir。如果有兩個 Sir 選項，再看其他記憶點區分。',
      },
      {
        type: 'subsection',
        title: '其他重要人物',
      },
      {
        type: 'table',
        table: {
          headers: ['人物', '身份/成就'],
          rows: [
            { cells: ['**Isambard Kingdom Brunel**', 'Great Western **Railway** 鐵路（出現鐵路直接選）'] },
            { cells: ['**Adam Smith**', '經濟學家（啟蒙運動）'] },
            { cells: ['**Emmeline Pankhurst**', '女權運動 Suffragettes 代表'] },
            { cells: ['**Admiral Nelson**', '特拉法加海戰'] },
            { cells: ['**Bobby Moore**', '1966 世界杯英國隊長'] },
          ],
        },
      },
    ],
  },
  {
    id: 'misc-high-freq',
    number: '十八',
    title: '雜項高頻考點',
    titleEn: 'Miscellaneous High-Frequency',
    icon: '📌',
    category: 'society',
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['考點', '答案'],
          rows: [
            { cells: ['小額賠償上限', '**5,000 磅**'] },
            { cells: ['英國人出生在海外的比例', '**10%**'] },
            { cells: ['維多利亞時代特徵', '貨物進口商稅 taxes on imported goods'] },
            { cells: ['1930 大蕭條影響', '**造船業 Shipbuilding** 受影響'] },
            { cells: ['麥當勞夫婦 MacDonalds of Glencoe', '被刺殺 killed'] },
            { cells: ['宗教迫害', '法國 **Huguenots** 胡格諾派逃到英國'] },
            { cells: ['英國憲法', '**不成文 unwritten constitution**'] },
          ],
        },
      },
    ],
  },
];

// Flashcard data for quiz mode - now includes wrong question flashcards
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  section: string;
  isWrongQuestion?: boolean;
}

export const flashcards: Flashcard[] = [
  // Original flashcards
  { id: 'f1', question: '誰是第一個入侵英國的人？', answer: 'Julius Caesar', category: 'history', section: '歷史時間線' },
  { id: 'f2', question: 'Emperor Hadrian 修建城牆的目的是什麼？', answer: '阻擋 Picts 人', category: 'history', section: '歷史時間線' },
  { id: 'f3', question: '黑死病 Black Death 死了多少人口？', answer: '1/3 人口', category: 'history', section: '歷史時間線' },
  { id: 'f4', question: '1066 年的 Domesday Book 是什麼？', answer: '威廉一世搞的土地調查記錄（末日書）', category: 'history', section: '歷史時間線' },
  { id: 'f5', question: '大憲章 Magna Carta 是哪一年？由誰創建？', answer: '1215 年，由 King John of England 創建', category: 'history', section: '重大法案' },
  { id: 'f6', question: '光榮革命的結果是什麼？', answer: '君主立憲制 Constitutional Monarchy 的起源', category: 'history', section: '重大事件' },
  { id: 'f7', question: '亨利八世為什麼進行宗教改革？', answer: '因為他想離婚，建立了 Church of England', category: 'history', section: '宗教改革' },
  { id: 'f8', question: '英國憲法是什麼類型的？', answer: '不成文的 unwritten constitution', category: 'politics', section: '法案' },
  { id: 'f9', question: '誰是英國第一個首相？', answer: 'Sir Robert Walpole（1721 年）— 選最長名字', category: 'politics', section: '首相' },
  { id: 'f10', question: '誰是英國第一個女首相？', answer: 'Margaret Thatcher 撒切爾夫人', category: 'politics', section: '首相' },
  { id: 'f11', question: '二戰期間的首相是誰？', answer: 'Winston Churchill，1945 年下崗', category: 'politics', section: '首相' },
  { id: 'f12', question: 'England 的國教是什麼？精神領袖是誰？', answer: 'Church of England；精神領袖是坎特伯雷大主教 Archbishop of Canterbury', category: 'society', section: '宗教' },
  { id: 'f13', question: 'Scotland 的國教是什麼？', answer: 'Presbyterian Church 長老教會', category: 'society', section: '宗教' },
  { id: 'f14', question: 'Diwali 節是哪些宗教的節日？', answer: 'Hindus 印度教 和 Sikhs 錫克教', category: 'society', section: '宗教' },
  { id: 'f15', question: 'England 的守護聖人和花朵是什麼？', answer: 'St George；Rose 玫瑰', category: 'culture', section: '節日' },
  { id: 'f16', question: 'Scotland 的守護聖人日期和傳統食物是什麼？', answer: '11.30 St Andrew；Haggis', category: 'culture', section: '節日' },
  { id: 'f17', question: '女性什麼時候獲得投票權？', answer: '1918 年 30 歲；1928 年 21 歲男女同權', category: 'society', section: '女權' },
  { id: 'f18', question: 'Suffragettes 的代表人物是誰？', answer: 'Emmeline Pankhurst', category: 'society', section: '女權' },
  { id: 'f19', question: '萬維網 WWW 的發明者是誰？', answer: 'Sir Tim Berners-Lee（選 Lee 最長的名字）', category: 'culture', section: '科學' },
  { id: 'f20', question: '電視機的發明者是誰？', answer: 'John Logie Baird（口訣：John Lewis 買 TV）', category: 'culture', section: '科學' },
  { id: 'f21', question: '莎士比亞出生在哪裡？', answer: 'Stratford-upon-Avon', category: 'culture', section: '文學' },
  { id: 'f22', question: '最高收入的英國電影是什麼？', answer: '007 James Bond', category: 'culture', section: '電影' },
  { id: 'f23', question: '高爾夫起源於哪裡？', answer: '15 世紀 Scotland', category: 'culture', section: '體育' },
  { id: 'f24', question: '第一個 4 分鐘跑完 1 英里的人是誰？', answer: 'Sir Roger Bannister（R 開頭 ≈ Run）', category: 'culture', section: '體育' },
  { id: 'f25', question: 'Tower of London 的導遊叫什麼？', answer: 'Beefeaters', category: 'culture', section: '景點' },
  { id: 'f26', question: 'Stonehenge 巨石陣在哪個郡？', answer: 'Wiltshire 威爾特郡', category: 'culture', section: '景點' },
  { id: 'f27', question: 'Crown dependency 皇室屬地和 UK 的關係是什麼？', answer: 'link of UK，不是 a part of', category: 'politics', section: '領土' },
  { id: 'f28', question: '上議院 House of Lords 的記憶技巧是什麼？', answer: 'Lord 老爺 = 高高在上 = 上議院', category: 'politics', section: '政治' },
  { id: 'f29', question: 'Commonwealth 英聯邦的正確定義是什麼？', answer: 'association of countries 國家聯盟（group、組織、social 都不對）', category: 'politics', section: '政治' },
  { id: 'f30', question: '蘇格蘭的陪審團有多少人？', answer: '15 人（其他地區都是 12 人）', category: 'politics', section: '四地區' },
  { id: 'f31', question: '16 歲可以做什麼？', answer: '騎 moped（輕型摩托車）', category: 'society', section: '年齡' },
  { id: 'f32', question: '18 歲可以做什麼？', answer: '競選議員 MP；煙酒俱樂部；serve on a jury 當陪審員', category: 'society', section: '年齡' },
  { id: 'f33', question: '紀念碑 Cenotaph 的設計師是誰？', answer: 'Sir Edwin Lutyens（口訣：win 勝利 ≈ 紀念碑）', category: 'culture', section: '人物' },
  { id: 'f34', question: '小額賠償上限是多少？', answer: '5,000 磅', category: 'society', section: '雜項' },
  { id: 'f35', question: '二戰是哪一年開始的？起因是什麼？', answer: '1939 年，德國入侵波蘭', category: 'history', section: '戰爭' },
  { id: 'f36', question: '一戰的結束日期是什麼？', answer: '1918 年 11 月 11 日 11 時（11.11.11）', category: 'history', section: '戰爭' },
  { id: 'f37', question: 'Isambard Kingdom Brunel 的成就是什麼？', answer: 'Great Western Railway 鐵路（出現鐵路直接選）', category: 'culture', section: '人物' },
  { id: 'f38', question: '查理一世和查理二世的口訣是什麼？', answer: '一世老爸處死，二世兒子流亡（躲在 Oak 樹後面）', category: 'history', section: '君主' },
  { id: 'f39', question: '民事犯罪和刑事犯罪的例子分別是什麼？', answer: '民事：工作場所歧視；刑事：種族歧視', category: 'politics', section: '法律' },
  { id: 'f40', question: 'National Citizen Service programme 是強制的嗎？', answer: '不是！是 optional 可選的（對錯題常考）', category: 'society', section: '年齡' },

  // ⚠️ NEW: Wrong question flashcards from Exam 1-8
  { id: 'w1', question: '⚠️ 第一批農民來自哪裡？', answer: '歐洲東南部 South-east Europe（不是西南部！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w2', question: '⚠️ 哪位國王統一 Anglo-Saxon 打敗維京人？', answer: 'King Alfred the Great（不是 William of Orange！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w3', question: '⚠️ Tower of London 是誰建的？', answer: 'William the Conqueror 威廉一世（不是 Elizabeth I！）', category: 'culture', section: '景點', isWrongQuestion: true },
  { id: 'w4', question: '⚠️ 英國殘奧會著名運動員是誰？', answer: 'Baroness Tanni Grey-Thompson + Ellie Simmonds（不是 Dame Kelly Holmes！Kelly Holmes 是奧運會）', category: 'culture', section: '體育', isWrongQuestion: true },
  { id: 'w5', question: '⚠️ 英國在歐洲的地理位置？', answer: '歐洲西北部 North west of Europe（不是東北部！）', category: 'politics', section: '領土', isWrongQuestion: true },
  { id: 'w6', question: '⚠️ 蘇格蘭守護聖人是誰？', answer: 'St Andrew（不是 St George！St George 是英格蘭的）', category: 'culture', section: '節日', isWrongQuestion: true },
  { id: 'w7', question: '⚠️ 1928 年的投票權改革是什麼？', answer: '21 歲男女同權投票（1918 年只是 30 歲女性）', category: 'society', section: '女權', isWrongQuestion: true },
  { id: 'w8', question: '⚠️ Frank Whittle 發明了什麼？', answer: '噴射引擎 Jet Engine（不是雷達！雷達是 Watson-Watt）', category: 'culture', section: '科學', isWrongQuestion: true },
  { id: 'w9', question: '⚠️ Oliver Cromwell 獲得什麼稱號？', answer: 'Lord Protector 護國公（不是 Winston Churchill！）', category: 'history', section: '君主', isWrongQuestion: true },
  { id: 'w10', question: '⚠️ 選舉前哪兩種媒體必須公正報道？', answer: '電視 Television 和廣播 Radio（不包括報紙！）', category: 'politics', section: '政治', isWrongQuestion: true },
  { id: 'w11', question: '⚠️ 北愛爾蘭有自己的紙幣嗎？', answer: 'True！北愛和蘇格蘭都有自己的紙幣，全英有效', category: 'politics', section: '四地區', isWrongQuestion: true },
  { id: 'w12', question: '⚠️ Crown Jewels 保存在哪裡？', answer: 'Tower of London（不是 Windsor Castle！）', category: 'culture', section: '景點', isWrongQuestion: true },
  { id: 'w13', question: '⚠️ John Logie Baird 發明了什麼？', answer: '電視 Television（不是 Radio！）', category: 'culture', section: '科學', isWrongQuestion: true },
  { id: 'w14', question: '⚠️ 愛爾蘭何時成為共和國？', answer: '1949 年（不是 1925！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w15', question: '⚠️ Wales 有自己的教會嗎？', answer: 'False！Wales 沒有國教', category: 'society', section: '宗教', isWrongQuestion: true },
  { id: 'w16', question: '⚠️ Henry VIII 為何建立英格蘭教會？', answer: '教皇不讓他和 Catherine of Aragon 離婚（不是 Anne of Cleves！）', category: 'history', section: '君主', isWrongQuestion: true },
  { id: 'w17', question: '⚠️ Snowdonia 在哪裡？', answer: 'Wales（不是 Scotland！）', category: 'culture', section: '景點', isWrongQuestion: true },
  { id: 'w18', question: '⚠️ 1939 年德國入侵哪國開始二戰？', answer: 'Poland 波蘭（不是 Russia！）', category: 'history', section: '戰爭', isWrongQuestion: true },
  { id: 'w19', question: '⚠️ 波爾戰爭在哪裡？', answer: 'South Africa 南非（不是 Netherlands！）', category: 'history', section: '戰爭', isWrongQuestion: true },
  { id: 'w20', question: '⚠️ 殖民北美時的在位君主是誰？', answer: 'Elizabeth I 伊麗莎白一世（不是 Henry VIII！）', category: 'history', section: '君主', isWrongQuestion: true },
  { id: 'w21', question: '⚠️ Swansea 在哪裡？', answer: 'Wales（不是 Northern Ireland！）', category: 'politics', section: '領土', isWrongQuestion: true },
  { id: 'w22', question: '⚠️ 分權行政部門可以立法管理什麼？', answer: 'Health 衛生和 Education 教育（不是 Defence 和 Social security！）', category: 'politics', section: '政治', isWrongQuestion: true },
  { id: 'w23', question: '⚠️ 2007 年英國最佳景觀是什麼？', answer: 'Lake District (Wastwater)（不是 Big Ben！）', category: 'culture', section: '景點', isWrongQuestion: true },
  { id: 'w24', question: '⚠️ 申請 NI Number 聯繫誰？', answer: 'Department for Work and Pensions (DWP)（不是雇主！）', category: 'politics', section: '法律', isWrongQuestion: true },
  { id: 'w25', question: '⚠️ Lent 是什麼？', answer: '復活節前 40 天（不是聖誕節後 40 天！）', category: 'culture', section: '節日', isWrongQuestion: true },
  { id: 'w26', question: '⚠️ St David\'s Day 是哪天？', answer: '3月1日（不是 4月17日！）', category: 'culture', section: '節日', isWrongQuestion: true },
  { id: 'w27', question: '⚠️ 首相官邸在哪裡？', answer: '10 Downing Street（不是 Buckingham Palace！）', category: 'politics', section: '首相', isWrongQuestion: true },
  { id: 'w28', question: '⚠️ 啟蒙運動叫什麼？', answer: 'The Enlightenment（不是 The Reformation！Reformation 是宗教改革）', category: 'history', section: '重大事件', isWrongQuestion: true },
  { id: 'w29', question: '⚠️ Admiral Nelson 在哪場戰役陣亡？', answer: 'Battle of Trafalgar（不是 Battle of Hastings！）', category: 'history', section: '戰爭', isWrongQuestion: true },
  { id: 'w30', question: '⚠️ Anne Boleyn 在哪被處決？', answer: 'Tower of London（不是 Whitehall！）', category: 'culture', section: '景點', isWrongQuestion: true },
  { id: 'w31', question: '⚠️ Highland Clearances 是什麼？', answer: '蘇格蘭地主摧毀小農場為牧羊騰地（不是 The Enlightenment！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w32', question: '⚠️ Boudicca 是誰？', answer: '對抗羅馬的部落領袖（不是 St Augustine！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w33', question: '⚠️ 英格蘭教會首腦是誰？', answer: '君主 Monarch（不是教皇 Pope！）', category: 'society', section: '宗教', isWrongQuestion: true },
  { id: 'w34', question: '⚠️ 內戰中誰支持國王？', answer: 'Cavaliers 保皇派（不是 Roundheads！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
  { id: 'w35', question: '⚠️ 1588 年英國打敗誰？', answer: 'Spanish Armada 西班牙無敵艦隊（不是 Romans！）', category: 'history', section: '歷史時間線', isWrongQuestion: true },
];
