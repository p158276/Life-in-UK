/*
 * English translations for study data content blocks
 * Maps section ID -> array of translated blocks
 * Each block mirrors the Chinese version's structure
 */

import type { ContentBlock, WrongQuestion } from "./studyData";

interface SectionTranslation {
  title: string;
  number: string;
  blocks: ContentBlock[];
  wrongQuestions?: WrongQuestion[];
}

export const sectionTranslations: Record<string, SectionTranslation> = {
  "history-timeline": {
    title: "Historical Timeline",
    number: "1",
    wrongQuestions: [
      { question: "Which was the last successful foreign invasion of England in 1066?", correctAnswer: "The Norman Conquest", wrongAnswer: "The Viking invasion", explanation: "The Norman Conquest of 1066 was the last successful foreign invasion of England, led by William the Conqueror." },
      { question: "Which two houses fought in the Wars of the Roses?", correctAnswer: "House of York and House of Lancaster", wrongAnswer: "House of Newcastle", explanation: "The Wars of the Roses were between York and Lancaster — there is no House of Newcastle." },
      { question: "Under which king did the Anglo-Saxon kingdoms unite to defeat the Vikings?", correctAnswer: "King Alfred the Great", wrongAnswer: "William of Orange", explanation: "King Alfred the Great united the Anglo-Saxon kingdoms. William of Orange was from the Glorious Revolution." },
      { question: "Where did the first farmers come from?", correctAnswer: "South-east Europe", wrongAnswer: "South-west Europe", explanation: "The first farmers came from South-east Europe, not South-west." },
      { question: "When was the Magna Carta created?", correctAnswer: "1215", wrongAnswer: "1514", explanation: "The Magna Carta was created in 1215 by King John of England." },
      { question: "When did the Black Death take place?", correctAnswer: "The Middle Ages (1348)", wrongAnswer: "The Iron Age", explanation: "The Black Death occurred during the Middle Ages, not the Iron Age." },
      { question: "Who was the tribal leader who fought against the Romans?", correctAnswer: "Boudicca", wrongAnswer: "St Augustine", explanation: "Boudicca fought the Romans. St Augustine was the first Archbishop of Canterbury." },
      { question: "Who supported King Charles I during the Civil War?", correctAnswer: "Cavaliers (Royalists)", wrongAnswer: "Roundheads (Parliamentarians)", explanation: "Cavaliers supported King Charles I; Roundheads supported Parliament." },
      { question: "During Charles II's reign, what destroyed parts of London?", correctAnswer: "A fire (Great Fire of London)", wrongAnswer: "A war", explanation: "The Great Fire of London destroyed parts of London during Charles II's reign, not a war." },
      { question: "Which country was invaded by Germany in 1939?", correctAnswer: "Poland", wrongAnswer: "Russia", explanation: "Germany invaded Poland in 1939, starting WWII." },
      { question: "In which battle did Admiral Nelson die?", correctAnswer: "The Battle of Trafalgar", wrongAnswer: "The Battle of Hastings", explanation: "Admiral Nelson died at the Battle of Trafalgar, not Hastings." },
      { question: "Where did the Boer War (1899-1902) take place?", correctAnswer: "South Africa", wrongAnswer: "Netherlands", explanation: "The Boer War took place in South Africa, though the Boers were of Dutch descent." },
      { question: "When did Ireland become a republic?", correctAnswer: "1949", wrongAnswer: "1925", explanation: "Ireland became a republic in 1949, not 1925." },
      { question: "What led the American colonies to want independence?", correctAnswer: "The British government wanted to tax them", wrongAnswer: "Control their borders", explanation: "The colonies sought independence because Britain wanted to tax them." },
      { question: "What destroyed individual small farms in Scotland?", correctAnswer: "The Highland Clearances", wrongAnswer: "The Enlightenment", explanation: "The Highland Clearances displaced small farmers for sheep grazing." },
      { question: "Who did the English defeat in 1588?", correctAnswer: "The Spanish Armada", wrongAnswer: "The Romans", explanation: "England defeated the Spanish Armada in 1588 under Elizabeth I." },
      { question: "Which two records tell us about William I's England?", correctAnswer: "The Domesday Book and the Bayeux Tapestry", wrongAnswer: "The Magna Carta", explanation: "The Domesday Book and Bayeux Tapestry record William I's reign, not the Magna Carta." },
    ],
    blocks: [
      { type: "subsection", title: "1.1 Prehistory & Early History" },
      { type: "table", table: { headers: ["Period", "Event", "Key Point"], rows: [
        { cells: ["6,000 years ago", "First farmers arrived in Britain", "⚠️ From **South-east Europe** (NOT south-west! Wrong x2)"] },
        { cells: ["Stone Age", "Earliest people were **Hunters**", "Not farmers!"] },
        { cells: ["Iron Age", "First coins appeared", "Coins featured a **King**"] },
        { cells: ["—", "**Julius Caesar** first invaded Britain", "Leader of the first invasion"] },
        { cells: ["AD 3-4th century", "First Christians appeared", "—"] },
        { cells: ["AD 410", "**Jutes** came from Europe", "—"] },
        { cells: ["—", "**Emperor Hadrian** built a wall in northern England", "Purpose: to keep out the **Picts**"] },
        { cells: ["—", "⚠️ **Boudicca** — tribal leader who fought the Romans", "Not St Augustine! St Augustine was the first Archbishop of Canterbury"] },
      ]}},
      { type: "subsection", title: "1.2 Medieval & Early Modern" },
      { type: "table", table: { headers: ["Period", "Event", "Key Point"], rows: [
        { cells: ["Middle Ages", "⚠️ **Black Death**", "Occurred in the **Middle Ages** (NOT the Iron Age!); killed **1/3** of the population"] },
        { cells: ["1066", "⚠️ **The Norman Conquest**", "The **last successful foreign invasion** (not the Vikings!); **1086 Domesday Book**"] },
        { cells: ["1066", "**Battle of Hastings**", "⚠️ **Bayeux Tapestry** and **Domesday Book** are William I's two records (NOT Magna Carta!)"] },
        { cells: ["⚠️ **1215**", "**Magna Carta**", "Year is **1215** (not 1514!); created by **King John of England**"] },
        { cells: ["1314", "**Battle of Bannockburn**", "Scottish King **Robert the Bruce**; First Scottish War of Independence"] },
        { cells: ["1337-1453", "**Hundred Years War**", "Between England and France"] },
        { cells: ["1455-1485", "⚠️ **Wars of the Roses**", "**York vs Lancaster** (no Newcastle!)"] },
        { cells: ["1588", "⚠️ England defeated the **Spanish Armada**", "Not the Romans! During Elizabeth I's reign"] },
        { cells: ["—", "⚠️ **Highland Clearances**", "Scottish landlords cleared small farms for sheep (NOT The Enlightenment!)"] },
      ]}},
      { type: "subsection", title: "1.3 English Civil Wars (Three)" },
      { type: "table", table: { headers: ["Period", "Civil War", "Key Point"], rows: [
        { cells: ["1642-1646", "First Civil War", "⚠️ **Cavaliers** supported the King (NOT Roundheads!); Roundheads = Parliamentarians"] },
        { cells: ["1648-1649", "Second Civil War", "Key battles: 1644 Battle of **Marston Moor**, 1645 Battle of **Naseby**"] },
        { cells: ["1649-1651", "Third Civil War", "Charles I executed (1649); defeated by **Oliver Cromwell**"] },
      ]}},
      { type: "memo", content: "Mnemonic: Father (Charles I) executed, son (Charles II) fled. Charles II fled to the Netherlands, hid behind an Oak tree; after Cromwell died in 1658, Charles II returned. ⚠️ London was destroyed during Charles II's reign by the **Great Fire of London** (NOT a war!)" },
      { type: "subsection", title: "1.4 Modern Wars" },
      { type: "table", table: { headers: ["Period", "War", "Key Point"], rows: [
        { cells: ["1815", "**Battle of Waterloo**", "Final battle between England and France; Napoleon's last battle"] },
        { cells: ["1853-1856", "**Crimean War**", "England vs Russia; **first war widely reported by the media**"] },
        { cells: ["1899-1902", "⚠️ **The Boer War**", "Took place in **South Africa** (NOT the Netherlands!)"] },
        { cells: ["1914-1918", "⚠️ **WWI**", "Ended: **11.11.11**; women gained voting rights after WWI (NOT the Civil War!)"] },
        { cells: ["⚠️ **1939**-1945", "**WWII**", "**1939 Germany invaded Poland** (NOT Russia!); Dunkirk evacuation"] },
        { cells: ["1940", "**Battle of Britain**", "Air battle: Britain vs Germany (summer)"] },
        { cells: ["—", "⚠️ **Battle of Trafalgar**", "**Admiral Nelson** died here (NOT Battle of Hastings!)"] },
      ]}},
      { type: "subsection", title: "1.5 Irish Independence" },
      { type: "text", content: "⚠️ Ireland became a republic in **1949** (not 1925!). Independence was first proposed in **1912**. The Fenians supported independence. It was delayed by WWI, and Ireland finally became independent **after WWII**." },
      { type: "subsection", title: "1.6 American Colonies" },
      { type: "text", content: "⚠️ The American colonies wanted independence because **Britain wanted to tax them** (NOT control their borders!)" },
    ],
  },
  "major-events-laws": {
    title: "Major Events & Laws",
    number: "2",
    wrongQuestions: [
      { question: "What was the period of new ideas about politics, philosophy and science?", correctAnswer: "The Enlightenment", wrongAnswer: "The Reformation", explanation: "The Enlightenment was the 18th-century period of new ideas. The Reformation was about religion." },
    ],
    blocks: [
      { type: "subsection", title: "2.1 Major Historical Events" },
      { type: "table", table: { headers: ["Event", "Key Point"], rows: [
        { cells: ["**The Glorious Revolution**", "**William of Orange** invited by Protestants; origin of **Constitutional Monarchy**"] },
        { cells: ["⚠️ **The Enlightenment**", "18th century; new ideas in politics, philosophy, science (NOT The Reformation!); economist **Adam Smith**"] },
        { cells: ["**The Reformation**", "**Henry VIII** established Protestantism; opposed the Pope; reason: **he wanted a divorce**"] },
      ]}},
      { type: "subsection", title: "2.2 Major Laws" },
      { type: "table", table: { headers: ["Year", "Law", "Core Content"], rows: [
        { cells: ["⚠️ **1215** (earliest)", "**Magna Carta**", "Created by King John; limited royal power; beginning of rule of law in Britain"] },
        { cells: ["1679", "**Habeas Corpus Act**", "Every prisoner has the right to appear in court"] },
        { cells: ["1689", "**The Bill of Rights**", "Established parliamentary power; limited the monarch's power"] },
        { cells: ["1833", "**Emancipation Act**", "Abolished slavery throughout the British Empire"] },
        { cells: ["1944", "**The Butler Act**", "Introduced free secondary education in England and Wales"] },
      ]}},
      { type: "memo", content: "The British constitution is an **unwritten constitution**!" },
    ],
  },
  "monarchy": {
    title: "Monarchy",
    number: "3",
    wrongQuestions: [
      { question: "Who was given the title of Lord Protector?", correctAnswer: "Oliver Cromwell", wrongAnswer: "Winston Churchill", explanation: "Oliver Cromwell received the title Lord Protector in 1658, not Churchill." },
      { question: "Why did Henry VIII establish the Church of England?", correctAnswer: "The Pope wouldn't let him divorce Catherine of Aragon", wrongAnswer: "Anne of Cleves", explanation: "Henry VIII established the Church of England because the Pope refused his divorce from Catherine of Aragon, not Anne of Cleves." },
      { question: "Who was reigning when English settlers began to colonise America?", correctAnswer: "Elizabeth I", wrongAnswer: "Henry VIII", explanation: "Elizabeth I was the reigning monarch when colonisation of America began." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Monarch", "Key Exam Point"], rows: [
        { cells: ["⚠️ **King Alfred the Great**", "United Anglo-Saxons to defeat **Vikings** (NOT William of Orange! Wrong x2)"] },
        { cells: ["**King Robert the Bruce**", "Scottish King; 1314 Battle of Bannockburn"] },
        { cells: ["⚠️ **William the Conqueror (William I)**", "Built **Tower of London** (NOT Elizabeth I! Wrong x2); **Domesday Book**; Bayeux Tapestry"] },
        { cells: ["**Charles I**", "Believed in Divine Right of Kings; **executed**"] },
        { cells: ["**Charles II**", "Fled to Netherlands; hid behind an **Oak tree**; returned after Cromwell died"] },
        { cells: ["⚠️ **Oliver Cromwell**", "Given title **Lord Protector** in 1658 (NOT Winston Churchill!)"] },
        { cells: ["**Mary Stuart (Queen of Scots)**", "**Catholic**; imprisoned for **20 years** then executed"] },
        { cells: ["⚠️ **Henry VIII**", "Established **Church of England**; Pope refused divorce from **Catherine of Aragon** (NOT Anne of Cleves!)"] },
        { cells: ["⚠️ **Elizabeth I**", "**Protestant**; defeated Spanish Armada 1588; ⚠️ **Reigning monarch during American colonisation** (NOT Henry VIII!)"] },
        { cells: ["**James I**", "From Scotland; succeeded Elizabeth I; **King James Version Bible** = **Authorised Version**"] },
        { cells: ["⚠️ **Boudicca**", "Tribal leader who fought the Romans (NOT St Augustine!)"] },
        { cells: ["**Bonnie Prince Charlie**", "Scottish Highlands; 1745"] },
      ]}},
    ],
  },
  "prime-ministers": {
    title: "Prime Ministers",
    number: "4",
    wrongQuestions: [
      { question: "Who was the first female Prime Minister of the UK?", correctAnswer: "Margaret Thatcher", wrongAnswer: "Mary Stuart", explanation: "Margaret Thatcher was the first female PM. Mary Stuart was Queen of Scots, not a PM." },
      { question: "Where is the official home of the Prime Minister?", correctAnswer: "10 Downing Street", wrongAnswer: "Buckingham Palace", explanation: "The PM's official residence is 10 Downing Street. Buckingham Palace is the monarch's residence." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Role", "Name", "Memory Tip"], rows: [
        { cells: ["**First PM**", "**Sir Robert Walpole** (1721)", "Pick the **longest name**"] },
        { cells: ["⚠️ **First female PM**", "**Margaret Thatcher**", "NOT Mary Stuart! Mary Stuart was Queen of Scots"] },
        { cells: ["PM after Thatcher", "**John** (Major)", "—"] },
        { cells: ["**WWII PM**", "**Winston Churchill**", "Greatest Briton; **lost office in 1945**"] },
        { cells: ["PM appointed in 1945", "**Clement Attlee**", "After Churchill"] },
        { cells: ["**Labour leader**", "**Tony Blair**", "Introduced Scottish Parliament and Welsh Assembly"] },
      ]}},
      { type: "memo", content: "⚠️ The PM's official residence is **10 Downing Street** (NOT Buckingham Palace! That's the monarch's home)" },
    ],
  },
  "religion": {
    title: "Religion",
    number: "5",
    wrongQuestions: [
      { question: "Who is the head of the Church of England?", correctAnswer: "The monarch", wrongAnswer: "The Pope", explanation: "The head of the Church of England is the Monarch, not the Pope. The Pope heads the Catholic Church." },
      { question: "Wales has its own established church. True or False?", correctAnswer: "False — Wales has no established church", wrongAnswer: "True", explanation: "Wales and Northern Ireland have no established church." },
    ],
    blocks: [
      { type: "subsection", title: "5.1 Established Churches by Region" },
      { type: "table", table: { headers: ["Region", "Church", "Notes"], rows: [
        { cells: ["**England**", "⚠️ **Church of England**", "Head = **Monarch** (NOT the Pope!); spiritual leader = **Archbishop of Canterbury**; first Archbishop = **St Augustine**"] },
        { cells: ["**Scotland**", "**Presbyterian Church**", "—"] },
        { cells: ["⚠️ **Wales**", "**No established church**", "Wales has NO established church (answer is False!)"] },
        { cells: ["⚠️ **Northern Ireland**", "**No established church**", "—"] },
      ]}},
      { type: "subsection", title: "5.2 Religious Groups" },
      { type: "table", table: { headers: ["Religion", "Key Point"], rows: [
        { cells: ["**Hindus**", "Diwali = **The Festival of Lights**"] },
        { cells: ["**Sikhs**", "Also celebrate Diwali = **The Festival of Lights**"] },
        { cells: ["**Muslims**", "**Eid al-Fitr**; during **Ramadan**"] },
        { cells: ["**Puritans**", "Strict **Protestants**"] },
        { cells: ["**Church of England**", "Henry VIII + Elizabeth I; Protestant"] },
        { cells: ["**Catholic**", "Mary Stuart (Queen of Scots); imprisoned 20 years then executed"] },
      ]}},
      { type: "memo", content: "Religious persecution: French **Huguenots** (Protestants) fled to England for refuge." },
    ],
  },
  "festivals": {
    title: "Festivals & Symbols",
    number: "6",
    wrongQuestions: [
      { question: "Who is the patron Saint of Scotland?", correctAnswer: "St Andrew", wrongAnswer: "St George", explanation: "St Andrew is Scotland's patron saint. St George is England's." },
      { question: "What is a bank holiday?", correctAnswer: "A public holiday when banks and many businesses are closed", wrongAnswer: "An additional day off for every worker", explanation: "A bank holiday is a public holiday, not an extra entitlement for workers." },
      { question: "When is St David's day celebrated?", correctAnswer: "1st March", wrongAnswer: "17th April", explanation: "St David's Day is 1 March. St David is the patron saint of Wales." },
      { question: "What is known as Lent?", correctAnswer: "The 40 days before Easter", wrongAnswer: "The 40 days after Christmas", explanation: "Lent is the 40 days before Easter, not after Christmas." },
    ],
    blocks: [
      { type: "subsection", title: "6.1 Patron Saints & Symbols" },
      { type: "table", table: { headers: ["Region", "Patron Saint", "Date", "New Year's Eve", "Traditional Food", "Flower"], rows: [
        { cells: ["**England**", "St George", "**23 Apr**", "—", "—", "**Rose**"] },
        { cells: ["⚠️ **Scotland**", "**St Andrew** (NOT St George!)", "**30 Nov**", "**Hogmanay**", "**Haggis**", "**Thistle**"] },
        { cells: ["⚠️ **Wales**", "**St David**", "⚠️ **1 Mar** (NOT 17 Apr!)", "—", "—", "**Daffodil**"] },
        { cells: ["**N. Ireland**", "St Patrick", "**17 Mar**", "—", "**Ulster Fry**", "**Shamrock**"] },
      ]}},
      { type: "subsection", title: "6.2 Other Important Festivals" },
      { type: "table", table: { headers: ["Festival", "Description"], rows: [
        { cells: ["**Good Friday**", "The day Christ died"] },
        { cells: ["⚠️ **Lent**", "40 days **before** Easter (NOT after Christmas!)"] },
        { cells: ["**The Fringe**", "Edinburgh's biggest festival"] },
        { cells: ["**Diwali**", "The Festival of Lights; **Hindus + Sikhs**"] },
        { cells: ["**Eid al-Fitr**", "End of Ramadan; **Muslims**"] },
        { cells: ["⚠️ **Bank Holiday**", "Public holiday, banks and businesses closed (NOT extra worker entitlement!)"] },
      ]}},
    ],
  },
  "womens-rights": {
    title: "Women's Rights",
    number: "7",
    wrongQuestions: [
      { question: "When were men and women given the right to vote at 21?", correctAnswer: "1928", wrongAnswer: "1918", explanation: "1918 gave voting rights only to women over 30. Equal voting at 21 came in 1928." },
      { question: "Women over 30 gained voting rights due to which war?", correctAnswer: "The First World War", wrongAnswer: "The Civil War", explanation: "Women gained voting rights in 1918 due to their WWI contributions, not the Civil War." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Year", "Event", "Notes"], rows: [
        { cells: ["⚠️ **1918**", "Women **over 30** gained voting rights", "Due to **WWI** contributions (NOT the Civil War!)"] },
        { cells: ["⚠️ **1928**", "Equal voting at **21** for men and women", "1928 was equal voting age (NOT 1918!)"] },
        { cells: ["**1960s**", "Laws relaxed: divorce + abortion", "**True/False exam favourite**"] },
        { cells: ["—", "**Suffragettes**", "Key figure: **Emmeline Pankhurst**; goal: women's right to vote"] },
      ]}},
    ],
  },
  "science": {
    title: "Science & Inventions",
    number: "8",
    wrongQuestions: [
      { question: "What did Sir Frank Whittle invent in the 1930s?", correctAnswer: "Jet engine", wrongAnswer: "Radar", explanation: "Frank Whittle invented the jet engine. Radar was invented by Sir Robert Watson-Watt." },
      { question: "What did Scottish John Logie Baird develop?", correctAnswer: "Television", wrongAnswer: "Radio", explanation: "John Logie Baird invented television, not radio." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Invention/Discovery", "Person", "Memory Tip"], rows: [
        { cells: ["**Radar**", "**Sir Robert Watson-Watt**", "—"] },
        { cells: ["**DNA structure**", "**Francis Crick**", "—"] },
        { cells: ["**World Wide Web**", "**Sir Tim Berners-Lee**", "Pick the **longest name**"] },
        { cells: ["**18-19th C. Industrial Revolution**", "—", "Powered by **Steam Power**"] },
        { cells: ["⚠️ **Jet Engine**", "**Frank Whittle**", "Jet engine (NOT radar! Radar = Watson-Watt)"] },
        { cells: ["⚠️ **Television**", "**John Logie Baird**", "John Lewis buys TV (NOT Radio!)"] },
        { cells: ["**Split the atom**", "**Ernest Rutherford**", "—"] },
        { cells: ["**Sailed to Australia**", "**Captain James Cook**", "—"] },
        { cells: ["**Father of printing**", "**William Caxton**", "—"] },
      ]}},
    ],
  },
  "literature-arts": {
    title: "Literature, Arts & Film",
    number: "9",
    blocks: [
      { type: "subsection", title: "9.1 Literature" },
      { type: "table", table: { headers: ["Work", "Author", "Memory Tip"], rows: [
        { cells: ["**Sherlock Holmes**", "**Sir Arthur Conan Doyle**", "Longest name; Author ≈ Arthur"] },
        { cells: ["**A Midsummer Night's Dream**", "**William Shakespeare**", "Born in **Stratford-upon-Avon**"] },
        { cells: ["**The Daffodils**", "**William Wordsworth**", "—"] },
        { cells: ["**The Canterbury Tales**", "**Geoffrey Chaucer**", "It's a **poem**"] },
      ]}},
      { type: "subsection", title: "9.2 Music & Art" },
      { type: "table", table: { headers: ["Category", "Person/Name", "Memory Tip"], rows: [
        { cells: ["**Composer EE**", "**Edward Elgar**", "EE = Edward Elgar"] },
        { cells: ["**Ceramics CC**", "**Clarice Cliff**", "CC = Clarice Cliff"] },
        { cells: ["**Pop Art**", "**David Hockney** (1960s)", "Same era: Beatles + Rolling Stones"] },
        { cells: ["**the Proms**", "8-week summer classical music season", "At the Royal Albert Hall, London"] },
        { cells: ["**Turner Prize**", "**Contemporary art**", "—"] },
        { cells: ["**Man Booker Prize**", "**Literature**", "Book prize ≈ literature"] },
        { cells: ["**Oscar-winning actresses**", "Tilda Swinton, Dame Judi Dench, Kate Winslet", "—"] },
      ]}},
      { type: "subsection", title: "9.3 Film" },
      { type: "table", table: { headers: ["Film", "Key Point"], rows: [
        { cells: ["**Highest-grossing**", "**007 James Bond**"] },
        { cells: ["**Most popular (2003)**", "**The Lord of the Rings**; JRR Tolkien"] },
        { cells: ["**Longest series**", "**Harry Potter**"] },
        { cells: ["**Wallace and Gromit**", "**Nick Park** animation"] },
        { cells: ["**The Tramp**", "**Charlie Chaplin** performance"] },
      ]}},
    ],
  },
  "sports": {
    title: "Sports",
    number: "10",
    wrongQuestions: [
      { question: "Which two are famous British Paralympians?", correctAnswer: "Baroness Tanni Grey-Thompson and Ellie Simmonds", wrongAnswer: "Dame Kelly Holmes (Olympic, not Paralympic)", explanation: "Tanni Grey-Thompson and Ellie Simmonds are Paralympians. Dame Kelly Holmes is an Olympian!" },
    ],
    blocks: [
      { type: "table", table: { headers: ["Sport", "Key Point"], rows: [
        { cells: ["**Golf**", "Originated in **15th century Scotland**"] },
        { cells: ["**Rugby**", "**The Six Nations Championship**"] },
        { cells: ["**Cricket**", "England and Australia play in **The Ashes** (AA = Australia + Ashes)"] },
        { cells: ["**Rowing**", "**Oxford and Cambridge** universities"] },
        { cells: ["⚠️ **Paralympics**", "Famous athletes: **Baroness Tanni Grey-Thompson** + **Ellie Simmonds** (NOT Dame Kelly Holmes! She's Olympic! Wrong x2)"] },
        { cells: ["**Running**", "First sub-4-minute mile: **Sir Roger Bannister** (R = Run)"] },
      ]}},
      { type: "subsection", title: "Horse Racing" },
      { type: "table", table: { headers: ["Location", "Event"], rows: [
        { cells: ["**Berkshire** (England)", "**Royal Ascot** — most prestigious"] },
        { cells: ["**Ayr** (Scotland)", "The Scottish Grand National"] },
        { cells: ["**Liverpool**", "The Grand National at Aintree"] },
        { cells: ["**Newmarket**", "Largest horse racing museum"] },
      ]}},
      { type: "memo", content: "1966 World Cup England captain: Bobby Moore" },
    ],
  },
  "landmarks": {
    title: "Landmarks",
    number: "11",
    wrongQuestions: [
      { question: "Who built the Tower of London?", correctAnswer: "William the Conqueror", wrongAnswer: "Queen Elizabeth I", explanation: "The Tower of London was built by William the Conqueror, not Elizabeth I." },
      { question: "Where are the Crown Jewels kept?", correctAnswer: "At the Tower of London", wrongAnswer: "At Windsor Castle", explanation: "The Crown Jewels are kept at the Tower of London, not Windsor Castle." },
      { question: "Where was Anne Boleyn executed?", correctAnswer: "Tower of London", wrongAnswer: "Whitehall", explanation: "Anne Boleyn was executed at the Tower of London, not Whitehall." },
      { question: "Where is Snowdonia located?", correctAnswer: "Wales", wrongAnswer: "Scotland", explanation: "Snowdonia is in Wales, not Scotland." },
      { question: "What was voted Britain's favourite view in 2007?", correctAnswer: "Lake District (Wastwater)", wrongAnswer: "Big Ben", explanation: "Wastwater in the Lake District was voted Britain's favourite view in 2007." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Region", "Landmark", "Key Point"], rows: [
        { cells: ["**England**", "**Theatreland**", "Located in London's **West End**"] },
        { cells: ["", "⚠️ **Tower of London**", "⚠️ Built by **William the Conqueror** (NOT Elizabeth I! Wrong x2); guides called **Beefeaters**; ⚠️ **Crown Jewels** kept here (NOT Windsor Castle!); ⚠️ **Anne Boleyn** executed here (NOT Whitehall!)"] },
        { cells: ["", "**Stonehenge**", "In **Wiltshire**"] },
        { cells: ["", "⚠️ **Lake District**", "**Largest National Park**; ⚠️ 2007 **Wastwater** voted Britain's favourite view (NOT Big Ben!)"] },
        { cells: ["**Scotland**", "**Crathes Castle**", "Most XXX National Parks are in **Scotland**"] },
        { cells: ["", "**Loch Lomond and the Trossachs**", "National Park; UK has **15** National Parks"] },
        { cells: ["⚠️ **Wales**", "**Snowdonia**", "In **Wales** (NOT Scotland!)"] },
        { cells: ["", "**Eden Project**", "In **Cornwall**"] },
        { cells: ["**N. Ireland**", "**Giant's Causeway**", "Northern Ireland"] },
      ]}},
      { type: "subsection", title: "Cultural Tourism" },
      { type: "table", table: { headers: ["Name", "Key Point"], rows: [
        { cells: ["**Cenotaph**", "Designed by **Sir Edwin Lutyens** (win ≈ victory ≈ memorial); located in **Whitehall**"] },
        { cells: ["**The National Trust**", "**Charity** protecting important buildings, coastline and countryside"] },
        { cells: ["**1851 Great Exhibition**", "In **Hyde Park**; venue = **The Crystal Palace**"] },
      ]}},
    ],
  },
  "territories": {
    title: "Territories",
    number: "12",
    wrongQuestions: [
      { question: "Where is the UK geographically located?", correctAnswer: "North west of Europe", wrongAnswer: "North east of Europe", explanation: "The UK is in the north-west of Europe, not the north-east." },
      { question: "Where is Swansea located?", correctAnswer: "Wales", wrongAnswer: "Northern Ireland", explanation: "Swansea is in Wales, not Northern Ireland." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Category", "Includes", "Notes"], rows: [
        { cells: ["⚠️ **UK location**", "**North west of Europe**", "NOT north-east!"] },
        { cells: ["**Great Britain**", "England, Scotland, Wales", "—"] },
        { cells: ["**Crown Dependencies**", "St Helena, Falkland Islands, **Isle of Man**, **Channel Islands**", "**Linked to UK, NOT a part of** UK"] },
        { cells: ["⚠️ **Swansea**", "Located in **Wales**", "NOT Northern Ireland!"] },
      ]}},
    ],
  },
  "political-system": {
    title: "Political System",
    number: "13",
    wrongQuestions: [
      { question: "Which TWO types of media must give balanced coverage before an election?", correctAnswer: "Television and Radio", wrongAnswer: "Television and Newspapers", explanation: "By law, TV and radio must give balanced coverage. Newspapers are not required to be impartial." },
      { question: "How is a jury selected?", correctAnswer: "Randomly from the electoral register", wrongAnswer: "From a postcode selection", explanation: "Juries are randomly selected from the electoral register, not by postcode." },
      { question: "Which two issues can devolved administrations pass laws on?", correctAnswer: "Health and Education", wrongAnswer: "Defence and Social security", explanation: "Devolved administrations can legislate on health and education. Defence and social security are reserved for central government." },
    ],
    blocks: [
      { type: "subsection", title: "13.1 Parliament Structure" },
      { type: "table", table: { headers: ["House", "Composition", "Memory Tip"], rows: [
        { cells: ["**House of Lords**", "Nobility; Life peers appointed by the monarch", "**Lord = upper = Upper House**"] },
        { cells: ["**House of Commons**", "Requires **The Speaker**", "—"] },
      ]}},
      { type: "subsection", title: "13.2 Members of Parliament" },
      { type: "table", table: { headers: ["Topic", "Detail"], rows: [
        { cells: ["MP responsibilities", "1. Accountable to constituents 2. Debate and vote on new laws"] },
        { cells: ["MP election system", "**By-election** (when an MP dies or resigns)"] },
        { cells: ["MP candidacy age", "**18 years old**"] },
        { cells: ["Before voting", "Voters receive **a poll card**"] },
        { cells: ["Parliamentary debates", "TV broadcast; records called **Hansard**"] },
        { cells: ["Door-to-door campaigning", "**Canvassing**"] },
      ]}},
      { type: "subsection", title: "13.3 Parties & Coalitions" },
      { type: "table", table: { headers: ["Topic", "Detail"], rows: [
        { cells: ["**2010 Coalition**", "**Conservative Party** + **Liberal Democrats** (Cameron); pick the **two longest** options"] },
        { cells: ["**Commonwealth**", "= **association of countries** (NOT group, organisation, or social!)"] },
        { cells: ["**PM's Questions**", "**Once a week**"] },
      ]}},
      { type: "subsection", title: "13.4 Responsibilities" },
      { type: "table", table: { headers: ["Area", "Responsible Body"], rows: [
        { cells: ["**Crime, Policing**", "**Home Secretary**"] },
        { cells: ["**Immigration**", "**Home Secretary** + **Parliament**"] },
        { cells: ["**Defence**", "**Parliament**"] },
        { cells: ["⚠️ **Health, Education**", "⚠️ **Devolved administrations** can legislate (NOT Defence and Social security! Those are central government!)"] },
      ]}},
      { type: "memo", content: "⚠️ Media required to be impartial before elections: **Television** and **Radio** (NOT newspapers! Newspapers can have political leanings)" },
      { type: "memo", content: "⚠️ Jury members are **randomly** selected from the **electoral register** (NOT by postcode!)" },
    ],
  },
  "law-daily-life": {
    title: "Law & Daily Life",
    number: "14",
    wrongQuestions: [
      { question: "How do you apply for a National Insurance Number?", correctAnswer: "Contact the Department for Work and Pensions (DWP)", wrongAnswer: "Ask your employer", explanation: "You must contact DWP yourself to apply for a NI Number, not ask your employer." },
    ],
    blocks: [
      { type: "subsection", title: "14.1 Fundamental Principles" },
      { type: "text", content: "Fundamental principles of British life include: **democracy** (democratic parliamentary system), **the rule of law**, **individual liberty**, and **respect for different beliefs and community life**." },
      { type: "subsection", title: "14.2 Types of Crime" },
      { type: "table", table: { headers: ["Type", "Example"], rows: [
        { cells: ["**Civil offence**", "**Discrimination in the workplace**"] },
        { cells: ["**Criminal offence**", "**Racial discrimination**"] },
        { cells: ["Alcohol & tobacco", "No smoking in public places; **under 18** cannot drink alcohol"] },
      ]}},
      { type: "subsection", title: "14.3 Complaining About Police" },
      { type: "text", content: "Three ways to complain about police: go to the police station directly, write to the **Chief** of the police force, or contact the **Independent Police Complaints Commission**." },
      { type: "subsection", title: "14.4 Northern Ireland Voting" },
      { type: "text", content: "Northern Ireland uses **individual registration** — everyone eligible to vote must fill in their own registration form." },
      { type: "subsection", title: "14.5 National Insurance Number" },
      { type: "text", content: "⚠️ To apply for a National Insurance Number, contact the **Department for Work and Pensions (DWP)** (NOT your employer!)" },
    ],
  },
  "four-regions": {
    title: "Four Regions Comparison",
    number: "15",
    wrongQuestions: [
      { question: "Northern Ireland has its own banknotes, valid everywhere in the UK.", correctAnswer: "True — NI and Scotland both have their own banknotes", wrongAnswer: "False", explanation: "Both Northern Ireland and Scotland can issue their own banknotes, valid across the UK." },
    ],
    blocks: [
      { type: "table", table: { headers: ["Region", "Jury Size", "Parliament Size/Title", "Election Cycle", "Minor Crime Court", "Banknotes"], rows: [
        { cells: ["**England**", "12", "MPs", "5 years", "Magistrates' Court", "Pound sterling"] },
        { cells: ["**Scotland**", "**15**", "**129**", "—", "**Justice of the Peace Court**", "**Own banknotes**"] },
        { cells: ["**Wales**", "12", "60 MSs", "**4 years**", "Magistrates' Court", "Pound sterling"] },
        { cells: ["⚠️ **N. Ireland**", "12", "90 MLAs", "—", "Magistrates' Court", "⚠️ **Own banknotes** (valid across UK! Answer is True!)"] },
      ]}},
      { type: "memo", content: "Scotland is most unique: jury of 15 (others have 12), different court name, own banknotes." },
    ],
  },
  "age-requirements": {
    title: "Age Requirements",
    number: "16",
    blocks: [
      { type: "table", table: { headers: ["Age", "What You Can Do"], rows: [
        { cells: ["**16**", "Ride a **moped**"] },
        { cells: ["**16-17**", "Join the **National Citizen Service programme** (NOT compulsory — it's **optional**! True/False)"] },
        { cells: ["**17**", "Apply for a **car or motorcycle driving licence**"] },
        { cells: ["**18**", "Stand for election as MP; alcohol & clubs; **serve on a jury**"] },
      ]}},
    ],
  },
  "people-mnemonics": {
    title: "People Mnemonics",
    number: "17",
    blocks: [
      { type: "subsection", title: "'Pick the Longest Name' Series (if you see Sir, pick Sir)" },
      { type: "table", table: { headers: ["Person", "Achievement", "Memory Tip"], rows: [
        { cells: ["**Sir Edwin Lutyens**", "Cenotaph designer", "**win** ≈ victory ≈ memorial"] },
        { cells: ["**Sir Roger Bannister**", "Sub-4-minute mile", "**R** = **Run**"] },
        { cells: ["**Sir Arthur Conan Doyle**", "Sherlock Holmes author", "**Author** ≈ **Arthur**"] },
        { cells: ["**Sir Christopher Wren**", "St Paul's Cathedral architect", "**Chris** ≈ church"] },
        { cells: ["**Sir Tim Berners-Lee**", "World Wide Web", "Pick the **longest name**"] },
        { cells: ["**Sir Robert Walpole**", "First Prime Minister", "Pick the **longest** option"] },
      ]}},
      { type: "memo", content: "Tip: If you see 'Sir' in the options, pick Sir. If there are two Sirs, use other clues to distinguish." },
      { type: "subsection", title: "Other Important People" },
      { type: "table", table: { headers: ["Person", "Role/Achievement"], rows: [
        { cells: ["**Isambard Kingdom Brunel**", "Great Western **Railway** (if you see railway, pick this)"] },
        { cells: ["**Adam Smith**", "Economist (The Enlightenment)"] },
        { cells: ["**Emmeline Pankhurst**", "Suffragettes leader"] },
        { cells: ["**Admiral Nelson**", "Battle of Trafalgar"] },
        { cells: ["**Bobby Moore**", "1966 World Cup England captain"] },
      ]}},
    ],
  },
  "misc-high-freq": {
    title: "Miscellaneous High-Frequency",
    number: "18",
    blocks: [
      { type: "table", table: { headers: ["Topic", "Answer"], rows: [
        { cells: ["Small claims limit", "**£5,000**"] },
        { cells: ["UK population born overseas", "**10%**"] },
        { cells: ["Victorian era characteristic", "Taxes on imported goods"] },
        { cells: ["1930s Great Depression impact", "**Shipbuilding** industry affected"] },
        { cells: ["MacDonalds of Glencoe", "Were killed (massacred)"] },
        { cells: ["Religious persecution", "French **Huguenots** (Protestants) fled to England"] },
        { cells: ["British constitution", "**Unwritten constitution**"] },
      ]}},
    ],
  },
};
