/**
 * Dedicated Academic Dataset: The Contribution of Bengal to Vedānta
 * Reference & Grounded Citation:
 * Buddhodev Ghosh (2024). "The Contribution of Bengal to Vedānta".
 */

export interface LocalizedDescription {
  bengali: string;
  devanagari: string;
  tamil: string;
  telugu: string;
  kannada: string;
  malayalam: string;
  odia: string;
  gujarati: string;
  gurmukhi: string;
  iast: string;
}

export interface BengalVedantaScholar {
  id: number;
  name: string;
  bengaliName?: string;
  devanagariName?: string;
  eraPeriod: "500 CE (Early Classical)" | "14th–17th Century" | "18th–19th Century" | "20th–21st Century";
  category: 1 | 2 | 3;
  categoryLabel: string;
  majorWorks: string[];
  keyContribution: string;
  traditionOrSchool: string;
}

export interface BengalVedantaResearch {
  paperTitle: string;
  authorReference: string;
  year: number;
  facilityBadge: LocalizedDescription;
  oneLinerDescription: LocalizedDescription;
  epigraphSanskrit: string;
  epigraphCitation: string;
  epigraphTranslation: string;
  coreThesis: string;
  swamiAtmapriyanandaQuote: string;
  threeCategories: {
    categoryNumber: number;
    title: string;
    description: string;
    prominentExamples: string;
  }[];
  scholars: BengalVedantaScholar[];
}

export const BENGAL_VEDANTA_RESEARCH: BengalVedantaResearch = {
  paperTitle: "The Contribution of Bengal to Vedānta",
  authorReference: "Buddhodev Ghosh, 2024",
  year: 2024,
  facilityBadge: {
    bengali: "বিশেষ গবেষণা শাখা • বঙ্গীয় বেদান্ত-ঐতিহ্য",
    devanagari: "विशेष-अनुसन्धान-कक्षः • वङ्गीय-वेदान्त-परम्परा",
    tamil: "சிறப்பு ஆராய்ச்சி மையம் • வங்காள வேதாந்த மரபு",
    telugu: "ప్రత్యేక పరిశోధన విభాగం • వంగీయ వేదాంత సంప్రదాయం",
    kannada: "ವಿಶೇಷ ಸಂಶೋಧನಾ ವಿಭಾಗ • ವಂಗೀಯ ವೇದಾಂತ ಪರಂಪರೆ",
    malayalam: "പ്രത്യേക ഗവേഷണ വിഭാഗം • വംഗീയ വേദാന്ത പാരമ്പര്യം",
    odia: "ବିଶେଷ ଗବେଷଣା ଶାଖା • ବଙ୍ଗୀୟ ବେଦାନ୍ତ ପରମ୍ପରା",
    gujarati: "વિશેષ અનુસંધાન વિભાગ • વંગીય વેદાંત પરંપરા",
    gurmukhi: "ਵਿਸ਼ੇਸ਼ ਖੋਜ ਵਿਭਾਗ • ਵੰਗੀਯ ਵੇਦਾਂਤ ਪਰੰਪਰਾ",
    iast: "Viśeṣa-Anusandhāna-Kakṣaḥ • Vaṅgīya-Vedānta-Paramparā"
  },
  oneLinerDescription: {
    bengali: "বঙ্গদেশে বেদান্ত দর্শনের ঐতিহাসিক অবদান ও ঋষিকুল — প্রাচীন গৌড়পাদ হইতে আধুনিক যুগ পর্যন্ত মনীষীদের প্রামাণ্য কালানুক্রমিক বিবরণ।",
    devanagari: "वङ्गदेशे वेदान्तदर्शनस्यैतिहासिकं योगदानं ऋषिकुलं च — प्राचीनाद् गौडपादादारभ्याधुनिकयुगपर्यन्तं मनीषिणां प्रामाणिक-कालानुक्रमिक-विवरणम्।",
    tamil: "வங்கத்தில் வேதாந்த தத்துவத்தின் வரலாற்றுப் பங்களிப்பும் ரிஷிகுலமும் — கௌடபாதர் முதல் தற்காலம் வரை அறிஞர்களின் காலவரிசைப்படியான விரிவான ஆய்வு.",
    telugu: "వంగదేశంలో వేదాంత దర్శన చారిత్రక సేవలు మరియు ఋషికులం — గౌడపాదుల నుండి ఆధునిక కాలం వరకు విద్వాంసుల కాలక్రమానుసార సమగ్ర పరిశోధన.",
    kannada: "ಬಂಗಾಳದಲ್ಲಿ ವೇದಾಂತ ದರ್ಶನದ ಐತಿಹಾಸಿಕ ಕೊಡುಗೆ ಮತ್ತು ಋಷಿಕುಲ — ಗೌಡಪಾದರಿಂದ ಇಂದಿನವರೆಗೆ ವಿದ್ವಾಂಸರ ಕಾಲಾನುಕ್ರಮಿಕ ಪ್ರಾಮಾಣಿಕ ದಾಖಲೆ.",
    malayalam: "ബംഗാളിലെ വേദാന്ത ദർശന ചരിത്ര സംഭാവനകളും ഋഷികുലവും — ഗൗഡപാദർ മുതൽ ആധുനിക കാലം വരെയുള്ള മനീഷികളുടെ കാലാനുക്രമമായ വിവരണം.",
    odia: "ବଙ୍ଗଦେଶରେ ବେଦାନ୍ତ ଦର୍ଶନର ଐତିହାସିକ ଅବଦାନ ଓ ଋଷିକୂଳ — ଗୌଡ଼ପାଦଙ୍କଠାରୁ ଆଧୁନିକ ଯୁଗ ପର୍ଯ୍ୟନ୍ତ ମନୀଷୀଙ୍କ ପ୍ରାମାଣିକ କାଳାନୁକ୍ରମିକ ବିବରଣୀ।",
    gujarati: "બંગાળમાં વેદાંત દર્શનનું ઐતિહાસિક પ્રદાન અને ઋષિકુળ — ગૌડપાદથી માંડીને આધુનિક યુગ સુધીના મનીષીઓનું કાળક્રમાનુસાર પ્રામાણિક વિવરણ.",
    gurmukhi: "ਬੰਗਾਲ ਵਿੱਚ ਵੇਦਾਂਤ ਦਰਸ਼ਨ ਦਾ ਇਤਿਹਾਸਕ ਯੋਗਦਾਨ ਅਤੇ ਰਿਸ਼ੀਕੁਲ — ਗੌੜਪਾਦ ਤੋਂ ਲੈ ਕੇ ਆਧੁਨਿਕ ਕਾਲ ਤੱਕ ਵਿਦਵਾਨਾਂ ਦਾ ਕਾਲਕ੍ਰਮਿਕ ਪ੍ਰਮਾਣਿਕ ਵਰਣਨ।",
    iast: "Vaṅgadeśe Vedānta-darśanasya aitihāsikaṁ yogadānaṁ ṛṣikulaṁ ca — Gauḍapādād ārabhya ādhunika-kāla-paryantaṁ manīṣiṇāṁ prāmāṇika-kālānukramika-vivaraṇam."
  },
  epigraphSanskrit: "दाम्यत दत्त दयध्वमिति तदेतत्त्रयं शिक्षेद् दमं दानं दयामिति ।",
  epigraphCitation: "Chāndogyopaniṣad / Bṛhadāraṇyakopaniṣad (V.ii.3)",
  epigraphTranslation: "That very thing is repeated even today by the heavenly voice, in the form of thunder, as 'Da', 'Da', 'Da', which means: 'Control yourselves' (Dāmyata), 'Give' (Datta), and 'Have compassion' (Dayadhvam). Therefore, one should learn these three: self-control, charity, and mercy.",
  coreThesis: "The wisdom of the Vedas and Vedānta (the concept of the One Reality with diverse manifestations, accepting karma and rebirth) has formed an integral part of life across India. In Bengal, Vedānta was uniquely harnessed not merely for individual salvation or academic exposition, but as the foundational spiritual engine for socio-political reformation, nation-building, social justice, and India's freedom struggle. From ancient Gauḍapāda to classical Navya-Nyāya Advaitins, Gauḍīya Vaiṣṇavas, Śākta poet-philosophers, 19th-century renaissance leaders, and contemporary 20th–21st century academic and monastic thinkers, Bengal's intellectual uniqueness and devotional depth shaped the trajectory of Vedāntic thought.",
  swamiAtmapriyanandaQuote: "Every Indian knows what the Vedānta is from its core value. If you ask even a rickshaw driver about something related to trouble and sorrow in this world, sometimes you might get the answer—'Everything is Māyā' only.",
  threeCategories: [
    {
      categoryNumber: 1,
      title: "Category I: Independent Commentaries & New Traditions",
      description: "Original philosophical systems, distinct darśanas, and groundbreaking conceptual frameworks originating from Bengal thinkers that expanded classical Vedānta beyond conventional boundaries.",
      prominentExamples: "Śāktaviśiṣṭādvaita (MM Pañcānana Tarkaratna), Gauḍīya Acintya Bhedābheda (Śrī Caitanya, Jīva & Sanātana Gosvāmī), Vijñāna Vedānta (Sri Ramakrishna, Ayon Maharaj), Cinmayapratyakṣavāda (Śrīmat Anirvān), Sārasvata Samanvaya (Swami Nigamananda), Pūrṇa Vedānta (Sri Aurobindo), and The Subject as Freedom (K.C. Bhattacharyya)."
    },
    {
      categoryNumber: 2,
      title: "Category II: Translations, Expositions & Classical Dialectics",
      description: "Rigorous scholarly translations, exhaustive commentaries, and monumental dialectical defenses of traditional Prasthānatrayī and classical Advaita Kevalādvaita texts.",
      prominentExamples: "Madhusūdana Sarasvatī's Advaitasiddhi, Vāsudeva Sārvabhauma, MM Sri Mohan Bhattacharya Tarkavedāntatīrtha, Swami Gambhirananda, Durgācaraṇa Sāṁkhyavedāntatīrtha, and contemporary manuscript preservation."
    },
    {
      categoryNumber: 3,
      title: "Category III: Applied, Syncretic & Non-Nominal Vedānta",
      description: "Spiritual movements that lived and propagated the core essence of Vedānta through alternative idioms, devotional lyrics, socio-religious reformation, or mystic songs without necessarily adopting standard sectarian Vedānta labels.",
      prominentExamples: "The Śākta poets (Rāmprasād Sen, Kamalakanta), the Bauls of Bengal (Lalon Fakir), Brāhma Samāj reformers (Raja Ram Mohan Roy, Debendranath Tagore), and saint-teachers (Lokenath Baba)."
    }
  ],
  scholars: [
    // =========================================================================
    // 1. 500 CE (Early Classical)
    // =========================================================================
    {
      id: 1,
      name: "Gauḍapādācārya",
      bengaliName: "গৌড়পাদাচার্য",
      devanagariName: "गौडपादाचार्यः",
      eraPeriod: "500 CE (Early Classical)",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Māṇḍūkya-Kārikā (Āgama Śāstra)", "Sāṅkhyakārikā-Bhāṣya (attr.)"],
      keyContribution: "Paramaguru of Ādi Śaṅkara, widely associated by tradition with the Gauḍa region (Bengal). Propounded Ajātivāda (doctrine of non-origination) and systematic non-dual epistemology.",
      traditionOrSchool: "Early Classical Advaita (Ajātivāda)"
    },

    // =========================================================================
    // 2. 14th - 17th Century (Pre-Modern Classical & Gauḍīya Vedānta)
    // =========================================================================
    {
      id: 2,
      name: "Vāsudeva Sārvabhauma",
      bengaliName: "বাসুদেব সার্বভৌম",
      devanagariName: "वासुदेव सार्वभौमः",
      eraPeriod: "14th–17th Century",
      category: 2,
      categoryLabel: "Category II: Classical Dialectics & Bhāṣya",
      majorWorks: ["Navya-Nyāya Treatises", "Tattvacintāmaṇi-Vyākhyā", "Caitanya-Śataka"],
      keyContribution: "Supreme scholar of Advaita and Navya-Nyāya in Navadvīpa and Puri; famous teacher who recognized the divine revelation of Śrī Caitanya Mahāprabhu.",
      traditionOrSchool: "Navya-Nyāya & Classical Vedānta"
    },
    {
      id: 3,
      name: "Śrī Caitanya Mahāprabhu",
      bengaliName: "শ্রীচৈতন্য মহাপ্রভু",
      devanagariName: "श्रीचैतन्य महाप्रभुः",
      eraPeriod: "14th–17th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Śikṣāṣṭakam", "Oral Exegesis of the Brahma Sūtras (Ātmārāma Verse)"],
      keyContribution: "Theological fountainhead of Acintya-Bhedābheda Vedānta; revolutionized Indian spirituality through Nāma-Saṅkīrtana and supreme Prema-Bhakti.",
      traditionOrSchool: "Acintya Bhedābheda Gauḍīya Vedānta"
    },
    {
      id: 4,
      name: "Sanātana Gosvāmī",
      bengaliName: "সনাতন গোস্বামী",
      devanagariName: "सनातन गोस्वामी",
      eraPeriod: "14th–17th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Bṛhad-Bhāgavatāmṛta", "Daśama-Ṭippaṇī (Bṛhad-Vaiṣṇava-Toṣaṇī)"],
      keyContribution: "Explicated the 10th Skandha of Śrīmad-Bhāgavatam as the accumulated culmination of the three Prasthānas of Vedānta.",
      traditionOrSchool: "Gauḍīya Vedānta & Bhāgavata Hermeneutics"
    },
    {
      id: 5,
      name: "Rūpa Gosvāmī",
      bengaliName: "রূপ গোস্বামী",
      devanagariName: "रूप गोस्वामी",
      eraPeriod: "14th–17th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Bhakti-Rasāmṛta-Sindhu", "Ujjvala-Nīlamaṇi", "Laghu-Bhāgavatāmṛta"],
      keyContribution: "Systematized Rasa-Theology, establishing Bhakti as the supreme independent Pramāṇa and ultimate spiritual objective (Pumacarthaḥ).",
      traditionOrSchool: "Bhakti-Rasa Vedānta Epistemology"
    },
    {
      id: 6,
      name: "Jīva Gosvāmī",
      bengaliName: "জীব গোস্বামী",
      devanagariName: "जीव गोस्वामी",
      eraPeriod: "14th–17th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Ṣaṭ-Sandarbha (Paramātma-Sandarbha, Tattva-Sandarbha, etc.)", "Sarva-Saṁvādinī"],
      keyContribution: "Architect of Gauḍīya Vedāntic epistemology; systematically established Acintya-Bhedābheda and the intrinsic energy (*Svarūpa-Śakti*) doctrine.",
      traditionOrSchool: "Acintya Bhedābheda Systematic Philosophy"
    },
    {
      id: 7,
      name: "Madhusūdana Sarasvatī",
      bengaliName: "মধুসূদন সরস্বতী",
      devanagariName: "मधुसूदन सरस्वती",
      eraPeriod: "14th–17th Century",
      category: 2,
      categoryLabel: "Category II: Classical Dialectics & Bhāṣya",
      majorWorks: ["Advaitasiddhi", "Gūḍhārtha Dīpikā (Gītā Commentary)", "Bhaktirasāyana", "Siddhāntabindu"],
      keyContribution: "Born in Bengal (Kotalipara); composed Advaitasiddhi, the supreme Navya-Nyāya defense of Advaita refuting Nyāyāmṛta, while synthesizing non-duality with supreme Kṛṣṇa-Bhakti.",
      traditionOrSchool: "Classical Advaita & Navya-Nyāya Dialectics"
    },
    {
      id: 8,
      name: "Viśvanātha Cakravartī",
      bengaliName: "বিশ্বনাথ চক্রবর্তী",
      devanagariName: "विश्वनाथ चक्रवर्ती",
      eraPeriod: "14th–17th Century",
      category: 2,
      categoryLabel: "Category II: Classical Dialectics & Bhāṣya",
      majorWorks: ["Gopāla-Tāpanī Upaniṣad Commentary", "Sārārtha-Darśinī (Bhāgavatam Commentary)", "Sārārtha-Varṣiṇī (Gītā Commentary)"],
      keyContribution: "Śikṣā-Guru of Baladeva Vidyābhūṣaṇa (author of Govinda Bhāṣya); illuminated Upaniṣadic and Purāṇic esoteric aesthetics.",
      traditionOrSchool: "Gauḍīya Vedānta Hermeneutics"
    },

    // =========================================================================
    // 3. 18th - 19th Century (Bengal Renaissance, Commentaries & Synthesis)
    // =========================================================================
    {
      id: 9,
      name: "Baladeva Vidyābhūṣaṇa",
      bengaliName: "বলদেব বিদ্যাভূষণ",
      devanagariName: "बलदेव विद्याभूषणः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation & Bhāṣyakāra",
      majorWorks: ["Govinda Bhāṣya (Brahma Sūtra Commentary)", "Siddhāntaratna", "Prameyaratnāvalī", "Gītā-Bhūṣaṇa"],
      keyContribution: "Composed the canonical Govinda Bhāṣya on the Brahma Sūtras for Gauḍīya Vedānta at the Royal Court of Amber (Jaipur), establishing its Prasthānatrayī authority.",
      traditionOrSchool: "Gauḍīya Vedānta (Govinda Bhāṣya)"
    },
    {
      id: 10,
      name: "Rāmprasād Sen",
      bengaliName: "রামপ্রসাদ সেন",
      devanagariName: "रामप्रसाद सेनः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Mystic Vedānta",
      majorWorks: ["Śākta Padāvalī (Devotional Songs to Mother Kālī)"],
      keyContribution: "Celebrated Śākta mystic-poet whose lyrics seamlessly harmonize Advaitic non-dual realization with profound filial devotion to the Divine Mother.",
      traditionOrSchool: "Śākta-Advaita Synthesis"
    },
    {
      id: 11,
      name: "Lokenath Baba (Baba Lokenath Brahmachari)",
      bengaliName: "লোকনাথ বাবা",
      devanagariName: "लोकनाथ ब्रह्मचारी (बाबा)",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Mystic Vedānta",
      majorWorks: ["Oral Teachings on Gītā & Śāstras"],
      keyContribution: "Himalayan Yogi and spiritual master who taught practical Vedantic self-discipline, compassion, and the living essence of the Gītā.",
      traditionOrSchool: "Applied Yogic Vedānta"
    },
    {
      id: 12,
      name: "Charles Wilkins",
      bengaliName: "চার্লস উইলকিন্স",
      devanagariName: "चार्ल्स विल्किन्स",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["First English Translation of the Bhagavad Gītā (1785)", "Bengali Typography & Printing"],
      keyContribution: "Pioneered the first Bengali metal typography in Calcutta and produced the landmark first English translation of the Bhagavad Gītā.",
      traditionOrSchool: "Historical Typography & Gītā Translation"
    },
    {
      id: 13,
      name: "Sādhak Kavi Kamalakanta Bhattacharya",
      bengaliName: "সাধক কবি কমলাকান্ত ভট্টাচার্য",
      devanagariName: "कमलाकान्त भट्टाचार्यः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Mystic Vedānta",
      majorWorks: ["Sādhakarañjana", "Śākta Padāvalī"],
      keyContribution: "Authored Sādhakarañjana, a profound esoteric treatise synthesizing Tantric Kuṇḍalinī Yoga with Vedāntic non-duality.",
      traditionOrSchool: "Śākta-Advaita Hermeneutics"
    },
    {
      id: 14,
      name: "Raja Ram Mohan Roy",
      bengaliName: "রাজা রামমোহন রায়",
      devanagariName: "राजा राममोहन रायः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Reform Vedānta",
      majorWorks: ["Vedāntasāra", "Ātmānātmaviveka", "Translations of Kena, Īśa, Kaṭha, Muṇḍaka, Māṇḍūkya Upaniṣads"],
      keyContribution: "Father of modern Indian Renaissance; translated primary Upaniṣads into Bengali and English, establishing monotheistic Vedānta as the basis for social reform.",
      traditionOrSchool: "Brāhma Vedānta & Social Reform"
    },
    {
      id: 15,
      name: "Lalon Fakir",
      bengaliName: "লালন ফকির",
      devanagariName: "लालन फकीरः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Mystic Vedānta",
      majorWorks: ["Baul Songs of Non-Duality & Sahaja Sādhanā"],
      keyContribution: "Mystic songwriter whose Baul compositions embody the lived non-dual core of Vedānta, discarding caste and sectarian dogma in favor of the 'Maner Manush'.",
      traditionOrSchool: "Baul Sahajiya & Non-Dual Mysticism"
    },
    {
      id: 16,
      name: "Maharshi Debendranath Tagore",
      bengaliName: "মহর্ষি দেবেন্দ্রনাথ ঠাকুর",
      devanagariName: "महर्षि देवेन्द्रनाथ ठाकुरः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Reform Vedānta",
      majorWorks: ["Brāhmadharma (Anthology of Upaniṣadic Verses)", "Ātmatattvavidyā"],
      keyContribution: "Reorganized the Brāhma Samāj around pure Upaniṣadic theism; compiled the foundational Brāhmadharma text.",
      traditionOrSchool: "Brāhma Upaniṣadic Theism"
    },
    {
      id: 17,
      name: "Bhagavan Sri Ramakrishna Paramahamsa",
      bengaliName: "শ্রীশ্রীরামকৃষ্ণ পরমহংস",
      devanagariName: "श्रीश्रीरामकृष्ण परमहंसः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Śrī Śrī Rāmakṛṣṇa Kathāmṛta (Gospel of Sri Ramakrishna)"],
      keyContribution: "Fountainhead of Vijñāna Vedānta; verified all spiritual paths through direct experience (*Yata Mat, Tata Path*), reconciling Jñāna (*Neti Neti*) with Vijñāna (*Iti Iti*).",
      traditionOrSchool: "Vijñāna Vedānta & Universal Harmony"
    },
    {
      id: 18,
      name: "Pandit Jīvānanda Vidyāsāgara",
      bengaliName: "জীবানন্দ বিদ্যাসাগর",
      devanagariName: "जीवानन्द विद्यासागरः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Critical Editions of Vedāntaparibhāṣā, Vedāntasāra, and Upaniṣads"],
      keyContribution: "Prolific 19th-century Sanskrit scholar and editor who published accessible critical editions of foundational Vedānta treatises.",
      traditionOrSchool: "Classical Sanskrit Textual Scholarship"
    },
    {
      id: 19,
      name: "Sītānāth Tattvabhūṣaṇ",
      bengaliName: "সীতানাথ তত্ত্বভূষণ",
      devanagariName: "सीतानाथ तत्त्वभूषणः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["The Philosophy of Brahmaism", "The Upanishads with English Commentary", "Vedāntism: What it is?"],
      keyContribution: "Systematized Brāhma theology into a coherent philosophical system harmonizing Hegel, Green, and Upaniṣadic Monism.",
      traditionOrSchool: "Brāhma Idealist Vedānta"
    },
    {
      id: 20,
      name: "Sohaṁ Svāmī (Tiger Swami / Shyamakanta Banerjee)",
      bengaliName: "সোহং স্বামী",
      devanagariName: "सोहं स्वामी (श्यामकान्त बनर्जी)",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Soham Gītā", "Soham Saṁhitā", "Common Sense (Vedāntic Rationalism)"],
      keyContribution: "Advaita sannyasin who preached pure monistic Self-realization (*Soham* - 'I am He') and rationalist rejection of superstition.",
      traditionOrSchool: "Monistic Advaita Vedānta"
    },
    {
      id: 21,
      name: "Bipin Chandra Pal",
      bengaliName: "বিপিন চন্দ্র পাল",
      devanagariName: "विपिनचन्द्र पालः",
      eraPeriod: "18th–19th Century",
      category: 3,
      categoryLabel: "Category III: Applied & Political Vedānta",
      majorWorks: ["The Soul of India", "Bengal Vaishnavism", "Swaraj and the Present Situation"],
      keyContribution: "Architect of the Indian National Movement who articulated Indian nationalism as the divine socio-political manifestation of Vedāntic spiritual freedom.",
      traditionOrSchool: "Political & Cultural Vedānta"
    },
    {
      id: 22,
      name: "Swami Vivekananda (Narendranath Datta)",
      bengaliName: "স্বামী বিবেকানন্দ",
      devanagariName: "स्वामी विवेकानन्दः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Practical Vedānta", "Raja Yoga", "Jnana Yoga", "Karma Yoga", "Bhakti Yoga"],
      keyContribution: "Global ambassador of Vedānta; synthesized Advaita into 'Practical Vedānta' (*Service to living beings as worship of God*) and fourfold Yoga.",
      traditionOrSchool: "Practical Vedānta (Vyāvahārika-Advaita)"
    },
    {
      id: 23,
      name: "Brajendranath Seal",
      bengaliName: "ব্রজেন্দ্রনাথ শীল",
      devanagariName: "ब्रजेन्द्रनाथ शीलः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["The Positive Sciences of the Ancient Hindus", "Comparative Studies in Vaishnavism and Christianity"],
      keyContribution: "Polymath philosopher who analyzed the scientific, chemical, and physical theories embedded in classical Vedānta and Sāṅkhya.",
      traditionOrSchool: "Scientific & Comparative Vedānta"
    },
    {
      id: 24,
      name: "Swami Saradananda (Sarat Chandra Chakravarty)",
      bengaliName: "স্বামী সারদানন্দ",
      devanagariName: "स्वामी सारदानन्दः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Śrī Śrī Rāmakṛṣṇa Līlāprasaṅga (Sri Ramakrishna the Great Master)", "Vedānta and Socialism"],
      keyContribution: "First General Secretary of Ramakrishna Math & Mission; composed the definitive theological biography analyzing Sri Ramakrishna's realization through classical Advaita and Tantric frames.",
      traditionOrSchool: "Ramakrishna-Vedānta Synthesis"
    },
    {
      id: 25,
      name: "MM Pañcānana Bhaṭṭācārya Tarkaratna",
      bengaliName: "মহামহোপাধ্যায় পঞ্চানন ভট্টাচার্য তর্করত্ন",
      devanagariName: "महामहोपाध्याय पञ्चानन भट्टाचार्य तर्करत्नः",
      eraPeriod: "18th–19th Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation & Classical Bhāṣya",
      majorWorks: [
        "Brahmasūtra-Śāktabhāṣyam (Sarvavidyānidhāna - Monumental Commentary on Brahma Sūtras)",
        "Īśopaniṣad Śāktabhāṣyam",
        "Sarvamaṅgalā Mahākāvyam (20 Cantos)",
        "Critical Editions & Translations of 18 Mahāpurāṇas & Upapurāṇas (Bangabasi Press)"
      ],
      keyContribution: "Founded Śāktaviśiṣṭādvaita (शाक्तविशिष्टाद्वैतवादः). Master polymath from Bhatpara who composed the definitive Sanskrit Śāktabhāṣya on the Brahma Sūtras, proving that Brahman is inseparable from Parā-Śakti and elevating Śākta philosophy to orthodox canonical Vedāntic standing.",
      traditionOrSchool: "Śāktaviśiṣṭādvaita (Śākta-Vedānta Synthesis)"
    },
    {
      id: 26,
      name: "Swami Abhedananda (Kaliprasad Chandra)",
      bengaliName: "স্বামী অভেদানন্দ",
      devanagariName: "स्वामी अभेदानन्दः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Doctrine of Karma", "Vedānta Philosophy", "Attitude of Vedānta Towards Religion"],
      keyContribution: "Direct monastic disciple of Sri Ramakrishna; lectured for over 25 years across the West defending the scientific and psychological foundations of Vedānta.",
      traditionOrSchool: "Comparative & Analytical Vedānta"
    },
    {
      id: 27,
      name: "Kālivara Vedāntavāgīśa",
      bengaliName: "কালীবর বেদান্তবাগীশ",
      devanagariName: "कालीवर वेदान्तवागीशः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntadarśanam (Bengali Exposition)", "Sāṅkhyatattvakaumudī Annotations"],
      keyContribution: "Eminent traditional pandit who authored accessible Bengali commentaries on the Brahma Sūtras and Śaṅkarabhāṣya.",
      traditionOrSchool: "Traditional Advaita Hermeneutics"
    },
    {
      id: 28,
      name: "Brahmacārī Medhācaitanya / Daṇḍī Svāmī Dāmodarānanda / Dinanātha Tripaṭhī",
      bengaliName: "ব্রহ্মচারী মেধাচৈতন্য / দণ্ডী স্বামী দামোদারানন্দ / দীননাথ ত্রিপাঠী",
      devanagariName: "मेधाचैतन्य / दामोदरानन्द / दीनानाथ त्रिपाठी",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntasāra Bengali Commentary & Critical Textual Studies"],
      keyContribution: "Distinguished teachers and editors who disseminated primary Vedantic texts (Vedāntasāra, Vivekacūḍāmaṇi) across Bengal.",
      traditionOrSchool: "Classical Advaita Sādhana"
    },
    {
      id: 29,
      name: "Devaratha",
      bengaliName: "দেবরথ",
      devanagariName: "देवरथः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Mokṣadharma-Parva Commentary"],
      keyContribution: "Authored profound philosophical commentary on the Mokṣadharma section of the Mahābhārata Śāntiparva.",
      traditionOrSchool: "Mahābhārata Mokṣadharma Exegesis"
    },
    {
      id: 30,
      name: "Arjuna Mishra",
      bengaliName: "অর্জুন মিশ্র",
      devanagariName: "अर्जुन मिश्रः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Bhīṣmaparva Commentary including the Anugītā"],
      keyContribution: "Celebrated commentator on the philosophical dialogues of the Mahābhārata, elucidating the Anugītā.",
      traditionOrSchool: "Epic Vedānta Commentator"
    },
    {
      id: 31,
      name: "Bhūtanāth Saptatīrtha",
      bengaliName: "ভূতনাথ সপ্ততীর্থ",
      devanagariName: "भूतनाथ सप्ततीर्थः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Śrīmadbhagavadgītā Bhāṣyānuvāda & Commentary"],
      keyContribution: "Master of seven classical branches of Sanskrit learning; authored monumental translations and explanations of the Gītā.",
      traditionOrSchool: "Classical Shastric Hermeneutics"
    },
    {
      id: 32,
      name: "Durgācaraṇa Sāṁkhyavedāntatīrtha",
      bengaliName: "দুর্গা চরণ সাংখ্যবেদান্ততীর্থ",
      devanagariName: "दुर्गाचरण सांख्यवेदान्ततीर्थः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Ten Principal Upaniṣads (Complete 10-Volume Bengali Translation & Śaṅkarabhāṣya Exegesis)"],
      keyContribution: "Monumental translation and analytical commentary on the ten principal Upaniṣads with Śaṅkara's Bhāṣya and Ānandagiri's glosses.",
      traditionOrSchool: "Prasthānatrayī Śruti Exegesis"
    },
    {
      id: 33,
      name: "Yogendranath Bagchi",
      bengaliName: "যোগেন্দ্রনাথ বাগচী",
      devanagariName: "योगेन्द्रनाथ बागची",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntavāde Avidyā (The Doctrine of Avidyā in Vedānta)"],
      keyContribution: "Pioneering philosophical monograph investigating the epistemological and ontological status of Avidyā in Advaita.",
      traditionOrSchool: "Advaita Epistemology"
    },
    {
      id: 34,
      name: "Rāmanārāyaṇa",
      bengaliName: "রামনাবায়ণ",
      devanagariName: "रामनारायणः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Explanatory Commentary on Bhagavad Gītā"],
      keyContribution: "Illuminated the syntactical and philosophical flow of Gītā verses for Bengali practitioners.",
      traditionOrSchool: "Gītā Hermeneutics"
    },
    {
      id: 35,
      name: "Rāmānanda Tīrtha",
      bengaliName: "রামানন্দ তীর্থ",
      devanagariName: "रामानन्द तीर्थः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Exposition and Bengali Commentary on Gītā"],
      keyContribution: "Promoted non-dual contemplation and Renunciation (*Sannyāsa*) through the Gītā.",
      traditionOrSchool: "Advaita Sannyāsa Lineage"
    },
    {
      id: 36,
      name: "Mukunda Dāsa",
      bengaliName: "মুকুন্দ দাস",
      devanagariName: "मुकुन्द दासः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Gītā-Vyākhyā"],
      keyContribution: "Detailed commentary emphasizing devotional devotion within Vedantic framework.",
      traditionOrSchool: "Gītā Exegesis"
    },
    {
      id: 37,
      name: "Paramānanda Bhaṭṭācārya",
      bengaliName: "পরমানন্দ ভট্টাচার্য",
      devanagariName: "परमानन्द भट्टाचार्यः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Sanskrit Commentary on Bhagavad Gītā"],
      keyContribution: "Rigorous traditional grammatical and philosophical annotation of the Gītā.",
      traditionOrSchool: "Classical Shastric Commentary"
    },
    {
      id: 38,
      name: "Haridāsa Siddhāntavāgīśa",
      bengaliName: "হরিদাস সিদ্ধান্তবাগীশ",
      devanagariName: "हरिदास सिद्धान्तवागीशः",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Complete Bengali Translation & Commentary of Mahābhārata (Bharata-Kaumudī)"],
      keyContribution: "Rendered the entire Mahābhārata into Bengali with profound Vedantic and ethical annotations.",
      traditionOrSchool: "Itihāsa & Vedānta Scholarship"
    },
    {
      id: 39,
      name: "Ashutosh Bhattacharya Shastri",
      bengaliName: "আশুতোষ ভট্টাচার্য শাস্ত্রী",
      devanagariName: "आशुतोष भट्टाचार्य शास्त्री",
      eraPeriod: "18th–19th Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntadarśana-Advaitavāda (Studies in Advaita Vedānta)", "Post-Śaṅkara Dialectics"],
      keyContribution: "Authored definitive academic treatises analyzing the historical evolution of Advaitavāda from Śaṅkara to post-Śaṅkara dialecticians.",
      traditionOrSchool: "Academic Advaita Vedānta"
    },

    // =========================================================================
    // 4. 20th - 21st Century (Modern, Contemporary & Global Exponents)
    // =========================================================================
    {
      id: 40,
      name: "Sri Aurobindo Ghose",
      bengaliName: "শ্রী অরবিন্দ ঘোষ",
      devanagariName: "श्री अरविन्द घोषः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["The Life Divine", "The Synthesis of Yoga", "Savitri", "Essays on the Gita"],
      keyContribution: "Propounded Pūrṇa Vedānta (Integral Vedānta) and the Supramental descent, harmonizing Spirit and Matter to divinize earthly life.",
      traditionOrSchool: "Integral Vedānta (Pūrṇādvaita)"
    },
    {
      id: 41,
      name: "Rabindranath Tagore",
      bengaliName: "রবীন্দ্রনাথ ঠাকুর",
      devanagariName: "रवीन्द्रनाथ ठाकुरः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Aesthetic Vedānta",
      majorWorks: ["Gītāñjali", "Sādhanā: The Realisation of Life", "The Religion of Man", "Upaniṣadic Songs"],
      keyContribution: "Nobel Laureate who imbued his poetry and music with the spirit of the Upaniṣads, seeing the Divine play in nature, beauty, and humanity.",
      traditionOrSchool: "Upaniṣadic Aesthetic Humanism"
    },
    {
      id: 42,
      name: "Krishna Chandra Bhattacharyya (K.C. Bhattacharya)",
      bengaliName: "কৃষ্ণচন্দ্র ভট্টাচার্য",
      devanagariName: "कृष्णचन्द्र भट्टाचार्यः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["The Subject as Freedom (1930)", "Studies in Vedantism", "Swaraj in Ideas", "The Concept of Philosophy"],
      keyContribution: "Developed a groundbreaking phenomenological philosophy of subjectivity as progressive freedom from the object; championed intellectual decolonization.",
      traditionOrSchool: "Phenomenological Advaita & Subjectivity as Freedom"
    },
    {
      id: 43,
      name: "Svāmī Nigamānanda Saraswatī",
      bengaliName: "স্বামী নিগমানন্দ সরস্বতী",
      devanagariName: "स्वामी निगमानन्द सरस्वती",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Vedānta Viveka", "Yogī Guru", "Jñānī Guru", "Tāntrika Guru", "Premika Guru"],
      keyContribution: "Propounded Sārasvata Samanvaya (*Jñāne Śaṅkara, Bhāve Gaurāṅga, Yoge Patāñjali*), harmonizing non-dual wisdom with divine love.",
      traditionOrSchool: "Sārasvata Vedānta Samanvaya"
    },
    {
      id: 44,
      name: "Swami Prabhavananda",
      bengaliName: "স্বামী প্রভাবানন্দ",
      devanagariName: "स्वामी प्रभावानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["The Spiritual Heritage of India", "The Upanishads: Breath of the Eternal", "Bhagavad Gita translation with Christopher Isherwood"],
      keyContribution: "Founder of Vedanta Society of Southern California; produced classic English translations of Upaniṣads, Gītā, and Śaṅkara's Crest-Jewel of Discrimination.",
      traditionOrSchool: "Global English Vedānta Translation"
    },
    {
      id: 45,
      name: "Swami Nikhilananda",
      bengaliName: "স্বামী নিখিলানন্দ",
      devanagariName: "स्वामी निखिलानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["The Upanishads (4 Volumes)", "The Gospel of Sri Ramakrishna (Unabridged English Translation)", "Atmabodha"],
      keyContribution: "Founder of the Ramakrishna-Vivekananda Center of New York; translated the complete Kathamrita into English and published monumental 4-volume Upanishads.",
      traditionOrSchool: "Upaniṣadic & Ramakrishna Literature Translation"
    },
    {
      id: 46,
      name: "Śrīmat Anirvān (Nirvānānanda Saraswatī)",
      bengaliName: "শ্ৰীমৎ অনির্বাণ",
      devanagariName: "श्रीमत् अनिर्वाणः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Veda-Mīmāṁsā (3 Volumes, Rabindra Puraskar)", "Upaniṣat-Prasaṅga", "Divya Jīvan Vārtā"],
      keyContribution: "Founded Cinmayapratyakṣavāda (Luminous Vedic Perception), demonstrating that the Ṛgveda is the direct supramental experience of the Ṛṣis.",
      traditionOrSchool: "Vedic Mystic Cinmaya-Pratyakṣavāda"
    },
    {
      id: 47,
      name: "MM Sri Mohan Bhattacharya Tarkavedāntatīrtha",
      bengaliName: "মহামহোপাধ্যায় শ্রী মোহন ভট্টাচার্য তর্কবেদান্ততীর্থ",
      devanagariName: "महामहोपाध्याय श्रीमोहन भट्टाचार्य तर्कवेदान्ततीर्थः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Khaṇḍanakhaṇḍakhādyaṁ with Exhaustive Commentary & Anvaya (Calcutta Sanskrit College)"],
      keyContribution: "Mahāmahopādhyāya who translated and annotated Sri Harṣa's insurmountable dialectical masterpiece Khaṇḍanakhaṇḍakhādya.",
      traditionOrSchool: "Advanced Advaita Vāda-Grantha"
    },
    {
      id: 48,
      name: "Swami Gambhirananda",
      bengaliName: "স্বামী গম্ভীরানন্দ",
      devanagariName: "स्वामी गंभीरानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Eight Principal Upanishads with Commentary of Sankaracarya (English & Bengali)", "Brahma Sutra Bhasya of Sankaracarya", "Bhagavad Gita Bhasya"],
      keyContribution: "11th President of Ramakrishna Math & Mission; authored definitive, internationally celebrated English and Bengali translations of Śaṅkarabhāṣya on all major scriptures.",
      traditionOrSchool: "Prasthānatrayī Classical Translations"
    },
    {
      id: 49,
      name: "Swami Bhuteshananda",
      bengaliName: "স্বামী ভূতেশানন্দ",
      devanagariName: "स्वामी भूतेशानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Upaniṣad Prasangā (Exposition of Kaṭha, Kena, Īśa, etc.)", "Śrī Śrī Rāmakṛṣṇa Kathāmṛta Vyākhyā (Multi-Volume Exegesis)"],
      keyContribution: "12th President of Ramakrishna Math & Mission; revered spiritual master whose discourses illuminated Upaniṣadic Brahmavidyā.",
      traditionOrSchool: "Upaniṣadic & Ramakrishna Exegesis"
    },
    {
      id: 50,
      name: "Swami Tapasyananda",
      bengaliName: "স্বামী তপস্যানন্দ",
      devanagariName: "स्वामी तपस्यानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Srimad Bhagavata (4 Volumes with Sanskrit & English)", "Bhakti Schools of Vedanta", "Adhyatma Ramayana"],
      keyContribution: "Authored definitive comparative treatises on the four major Vaishnava Vedantic schools and translated Srimad Bhagavatam.",
      traditionOrSchool: "Comparative Vedānta & Bhāgavata Studies"
    },
    {
      id: 51,
      name: "Swami Ranganathananda",
      bengaliName: "স্বামী রঙ্গনাথানন্দ",
      devanagariName: "स्वामी रंगनाथानन्दः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Universal Vedānta",
      majorWorks: ["The Message of the Upanishads", "Universal Message of the Bhagavad Gita (3 Volumes)", "Eternal Values for a Changing Society"],
      keyContribution: "13th President of Ramakrishna Math & Mission; celebrated orator who integrated Vedantic consciousness with modern biological and physical sciences.",
      traditionOrSchool: "Scientific & Ethical Vedānta"
    },
    {
      id: 52,
      name: "Swami Lokeswarananda",
      bengaliName: "স্বামী লোকেশ্বরানন্দ",
      devanagariName: "स्वामी लोकेश्वरानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Interpretations of Eight Upanishads (Īśa, Kena, Kaṭha, Praśna, Muṇḍaka, Māṇḍūkya, Taittirīya, Chāndogya)", "Practical Vedanta"],
      keyContribution: "Founder of Ramakrishna Mission Institute of Culture (Golpark); published lucid English and Bengali commentaries on the major Upaniṣads.",
      traditionOrSchool: "Upaniṣadic Global Hermeneutics"
    },
    {
      id: 53,
      name: "Swami Atmasthananda",
      bengaliName: "স্বামী আত্মস্থানন্দ",
      devanagariName: "स्वामी आत्मस्थानन्दः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Humanitarian Vedānta",
      majorWorks: ["Spiritual Discourses on Practical Vedanta & Ramakrishna Movement"],
      keyContribution: "15th President of Ramakrishna Math & Mission; guided millions worldwide in living the active Vedāntic ideal of service to humanity as divine worship.",
      traditionOrSchool: "Applied Vedānta & Spiritual Leadership"
    },
    {
      id: 54,
      name: "Swami Swahananda",
      bengaliName: "স্বামী স্বহানন্দ",
      devanagariName: "स्वामी स्वाहानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Chandogya Upanishad (English Translation with Sankara Bhashya)", "Pancadasi", "Meditation and Other Spiritual Disciplines"],
      keyContribution: "Senior monk who led the Vedanta Society of Southern California, producing definitive English translation of Chandogya Upanishad.",
      traditionOrSchool: "Prasthānatrayī English Translation"
    },
    {
      id: 55,
      name: "Swami Smaranananda",
      bengaliName: "স্বামী স্মরণানন্দ",
      devanagariName: "स्वामी स्मरणानन्दः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Monastic Vedānta",
      majorWorks: ["Spiritual Writings & Discourses on Vedānta and Devotion"],
      keyContribution: "16th President of Ramakrishna Math & Mission; exemplary monastic scholar fostering educational, rural, and spiritual initiatives across India.",
      traditionOrSchool: "Practical Monastic Vedānta"
    },
    {
      id: 56,
      name: "MM Pramathanātha Tarkabhūṣaṇa",
      bengaliName: "মহামহোপাধ্যায় প্রমথনাথ তর্কভূষণ",
      devanagariName: "महामहोपाध्याय प्रमथनाथ तर्कभूषणः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Māyāvāda (বাঙ্গালী ভাষায় মায়াবাদ ও অদ্বৈতবেদান্ত)", "Brahmasūtra Śāṅkarabhāṣya with Bengali Exposition", "Vedānta Darśana"],
      keyContribution: "Eminent Mahāmahopādhyāya of Bhatpara and Professor of Vedānta at Banaras Hindu University; authored the authoritative philosophical treatise 'Māyāvāda' and served as President of Bangiya Sahitya Parishat.",
      traditionOrSchool: "Classical Bhatpara Advaita-Vedānta"
    },
    {
      id: 57,
      name: "Rājendranāth Ghosh / Swami Cidghanānanda Purī",
      bengaliName: "রাজেন্দ্রনাথ ঘোষ / স্বামী চিদ্ঘনানন পুরী",
      devanagariName: "राजेन्द्रनाथ घोष / स्वामी चिद्घनानन्द पुरी",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Advaitasiddhi Bengali Translation & Exhaustive Gloss", "Śaṅkara o Rāmānuja"],
      keyContribution: "Eminent scholar who rendered Madhusūdana Sarasvatī's Advaitasiddhi into Bengali with masterful annotations.",
      traditionOrSchool: "Classical Navya-Nyāya Advaita"
    },
    {
      id: 58,
      name: "Swami Vishwarupananda",
      bengaliName: "স্বামী বিশ্বরূপানন্দ",
      devanagariName: "स्वामी विश्वरूपानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Brahma Sūtra Śaṅkarabhāṣya with Bengali Exposition (4 Volumes)"],
      keyContribution: "Provided monumental Bengali translation and exhaustive commentary on Śaṅkara's Brahma Sūtra Bhāṣya.",
      traditionOrSchool: "Brahma Sūtra Śaṅkarabhāṣya"
    },
    {
      id: 59,
      name: "Mahānāmvrata Brahmacārī",
      bengaliName: "মহানামব্রত ব্রহ্মচারী",
      devanagariName: "महान्-नामव्रत ब्रह्मचारी",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Veda-Vedānta", "Vaiṣṇava-Vedānta", "Mahanām Sandeśa"],
      keyContribution: "Global cultural envoy and theologian (Ph.D. Chicago); established the ontological harmony of Vedic, Upaniṣadic, and Gauḍīya Vaiṣṇava Vedānta.",
      traditionOrSchool: "Mahanām & Vaiṣṇava Vedānta"
    },
    {
      id: 60,
      name: "Chandrakanta Tarkālaṅkāra",
      bengaliName: "চন্দ্রকান্ত তর্কালঙ্কার",
      devanagariName: "चन्द्रकान्त तर्कालङ्कारः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Hindu Darśana-Vedānta (Fellowship Lectures)", "Vaiśeṣikabhāṣya Commentary"],
      keyContribution: "Legendary Sanskrit college professor whose lectures codified Hindu philosophical darsanas for modern scholars.",
      traditionOrSchool: "Classical Nyāya-Vedānta Synthesis"
    },
    {
      id: 61,
      name: "Suresh Chandra Chattopadhyay",
      bengaliName: "সুরেশ চন্দ্র চট্টোপাধ্যায়",
      devanagariName: "सुरेशचन्द्र चट्टोपाध्यायः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Sarala Vedānta Darśana (Simple Guide to Vedānta)"],
      keyContribution: "Demystified esoteric Vedānta terminology into accessible prose for Bengali readers.",
      traditionOrSchool: "Popular Vedānta Exposition"
    },
    {
      id: 62,
      name: "Sitanath Goswami",
      bengaliName: "সীতানাথ গোস্বামী",
      devanagariName: "सीतानाथ गोस्वामी",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Adhyāsabhāṣyaṁ with Exhaustive Bengali Exegesis", "Brahma Sūtra Studies"],
      keyContribution: "Renowned Jadavpur University professor who produced definitive pedagogical studies of Śaṅkara's Adhyāsabhāṣya.",
      traditionOrSchool: "Academic Advaita Hermeneutics"
    },
    {
      id: 63,
      name: "Swami Vishuddhānanda",
      bengaliName: "স্বামী বিশুদ্ধানন্দ",
      devanagariName: "स्वामी विशुद्धानन्दः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Yogic Vedānta",
      majorWorks: ["Teachings on Sūryavijñāna & Vedāntic Yoga"],
      keyContribution: "Master of Yogic sciences and Vedānta, illuminating subtle cosmic laws of consciousness.",
      traditionOrSchool: "Yogic-Vedānta Synthesis"
    },
    {
      id: 64,
      name: "Śrī Jīva Nyāyatīrtha",
      bengaliName: "শ্রীজীব ন্যায়তীর্থ",
      devanagariName: "श्रीजीव न्यायतीर्थ भट्टाचार्यः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Śāktaviśiṣṭādvaita Philosophical Exegeses", "Sanskrit Philosophical Treatises and Dramas", "Exposition on Brahmasūtra Śāktabhāṣyam"],
      keyContribution: "Celebrated son and scholastic successor of MM Pañcānana Tarkaratna of Bhatpara; President of Bangiya Sahitya Parishat who rigorously formulated and disseminated Śāktaviśiṣṭādvaita, synthesizing Vedic Brahma Sūtras with the Śākta Tantric tradition.",
      traditionOrSchool: "Bhatpara Śāktaviśiṣṭādvaita Tradition"
    },
    {
      id: 65,
      name: "Ayon Maharaj (Swami Medhananda)",
      bengaliName: "অয়ন মহারাজ (স্বামী মেধানন্দ)",
      devanagariName: "अयन महाराज (स्वामी मेधानन्दः)",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Infinite Paths to Infinite Reality: Sri Ramakrishna & Cross-Cultural Philosophy of Religion (Oxford, 2018)", "Swami Vivekananda's Vedāntic Cosmopolitanism"],
      keyContribution: "Rigorous philosophical reconstruction of Sri Ramakrishna's thought as 'Vijñāna Vedānta', articulating a model of religious and ontological pluralism.",
      traditionOrSchool: "Analytical Vijñāna Vedānta"
    },
    {
      id: 66,
      name: "Swami Sarvapriyananda",
      bengaliName: "স্বামী সর্বপ্রিয়ানন্দ",
      devanagariName: "स्वामी सर्वप्रियानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Lectures on Māṇḍūkya Kārikā, Aparokṣānubhūti, Dṛg-Dṛśya-Viveka", "Vedānta Society of New York Discourses"],
      keyContribution: "Minister of the Vedanta Society of New York; world-renowned exponent of Advaita Vedānta bridging classical texts with modern Western philosophy of mind.",
      traditionOrSchool: "Modern Global Advaita Vedānta"
    },
    {
      id: 67,
      name: "Swami Atmapriyananda",
      bengaliName: "স্বামী আত্মপ্রিয়ানন্দ",
      devanagariName: "स्वामी आत्मप्रियानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Theoretical Physics & Upaniṣadic Consciousness Studies", "Vice-Chancellor RKMVERI Lectures"],
      keyContribution: "Theoretical physicist-monk and educator; articulates the unity of modern quantum reality and Vedantic non-duality.",
      traditionOrSchool: "Science-Vedānta Synthesis"
    },
    {
      id: 68,
      name: "Swami Samarpanananda",
      bengaliName: "স্বামী সমর্পণানন্দ",
      devanagariName: "स्वामी समर्पणान्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Tiya: A Mirror of Hope", "Living Hinduism", "Gītā for Daily Life"],
      keyContribution: "Prolific author and educator presenting Vedānta as practical life philosophy for modern youth.",
      traditionOrSchool: "Practical Applied Vedānta"
    },
    {
      id: 69,
      name: "Jharna Bhattacharya",
      bengaliName: "ঝর্ণা ভট্টাচার্য",
      devanagariName: "झर्णा भट्टाचार्य",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Bṛhadāraṇyakopaniṣad (Critical Study & Bengali Exegesis)"],
      keyContribution: "Authored in-depth scholastic treatises exploring the metaphysical depths of the Bṛhadāraṇyaka Upaniṣad.",
      traditionOrSchool: "Upaniṣadic Textual Scholarship"
    },
    {
      id: 70,
      name: "Minati Kar",
      bengaliName: "মিনতি কর",
      devanagariName: "मिनति कर",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Uttara-Gītā Commentary & Translation", "Sanskrit Shastric Studies"],
      keyContribution: "Illuminated lesser-known esoteric texts such as the Uttara-Gītā within the Vedantic tradition.",
      traditionOrSchool: "Esoteric Gītā Scholarship"
    },
    {
      id: 71,
      name: "Loknath Chakraborty",
      bengaliName: "লোকনাথ চক্রবর্তী",
      devanagariName: "लोकनाथ चक्रवर्ती",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntasāra Study & Bengali Commentary"],
      keyContribution: "Provided comprehensive line-by-line analyses of Sadānanda's Vedāntasāra.",
      traditionOrSchool: "Prakaraṇa-Grantha Pedagogy"
    },
    {
      id: 72,
      name: "Vivek Karmakar",
      bengaliName: "বিবেক কর্মকার",
      devanagariName: "विवेक कर्मकारः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Studies in Non-Śaṅkara Vedānta Commentaries (Rāmānuja, Madhva, Nimbārka, Vallabha in Bengali)"],
      keyContribution: "Pioneering contemporary scholar researching and translating classical non-Śaṅkara Vedānta commentaries into Bengali.",
      traditionOrSchool: "Comparative Vedānta Bhāṣya Studies"
    },
    {
      id: 73,
      name: "Dwijendranath Thakur (Tagore)",
      bengaliName: "দ্বিজেন্দ্রনাথ ঠাকুর",
      devanagariName: "द्विजेन्द्रनाथ ठाकुरः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Vedānta Vicāra", "Tattvavidyā (Science of Reality)"],
      keyContribution: "Elder brother of Rabindranath Tagore; formulated an original philosophical synthesis of Kantian critique and Vedānta metaphysics.",
      traditionOrSchool: "Brāhma-Advaita Philosophical System"
    },
    {
      id: 74,
      name: "Dr. Rama Choudhury",
      bengaliName: "ড. রমা চৌধুরী",
      devanagariName: "डॉ. रमा चौधुरी",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Vedānta o Sufi Darśana", "Comparative Study of Nimbārka Vedānta (3 Volumes)", "Doctrine of Nimbārka"],
      keyContribution: "First woman Vice-Chancellor (Rabindra Bharati); world authority on Nimbārka's Dvaitādvaita and comparative Sufi-Vedantic mysticism.",
      traditionOrSchool: "Comparative Sufi-Vedānta & Dvaitādvaita"
    },
    {
      id: 75,
      name: "Kalyan Sengupta",
      bengaliName: "কল্যাণ সেনগুপ্ত",
      devanagariName: "कल्याण सेनगुप्तः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntasāra (Annotated Bengali Translation)"],
      keyContribution: "Pedagogical commentary on Sadānanda's Vedāntasāra.",
      traditionOrSchool: "Advaita Textual Studies"
    },
    {
      id: 76,
      name: "Swami Vishwashrayananda",
      bengaliName: "স্বামী বিশ্বাস্রয়ানন",
      devanagariName: "स्वामी विश्वाश्रयानन्दः",
      eraPeriod: "20th–21st Century",
      category: 3,
      categoryLabel: "Category III: Applied & Narrative Vedānta",
      majorWorks: ["Golpe Vedānta (Vedānta in Stories)"],
      keyContribution: "Pioneered popular storytelling narratives communicating profound Upaniṣadic truths to children and common readers.",
      traditionOrSchool: "Narrative Vedānta Pedagogy"
    },
    {
      id: 77,
      name: "Swami Amritattwananda",
      bengaliName: "স্বামী অমৃততত্ত্বানন্দ",
      devanagariName: "स्वामी अमृततत्त्वानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Expository Commentary on Vedāntasāra"],
      keyContribution: "Authored detailed monastic commentary clarifying subtle epistemological points in Vedāntasāra.",
      traditionOrSchool: "Monastic Advaita Pedagogy"
    },
    {
      id: 78,
      name: "Swami Santa Das (Babaji Maharaj)",
      bengaliName: "স্বামী শান্ত দাস বাবাজী",
      devanagariName: "स्वामी शान्तदास बाबाजी",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntapārijātasaurabha Bengali Translation & Commentary"],
      keyContribution: "Nimbārka Sampradāya master who translated and explicated Nimbārkācārya's Vedāntapārijātasaurabha into Bengali.",
      traditionOrSchool: "Nimbārka Dvaitādvaita Vedānta"
    },
    {
      id: 79,
      name: "Śrīmat Vijaykṛṣṇa Devsharma",
      bengaliName: "শ্রীমৎ বিজয়কৃষ্ণ দেবশর্মা",
      devanagariName: "श्रीमत् विजयकृष्ण देवशर्मा",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Aparājitā Brahmavidyā"],
      keyContribution: "Expounded 'Aparājitā Brahmavidyā', synthesizing Vedic self-realization with practical spiritual power and yoga.",
      traditionOrSchool: "Brahmavidyā Sādhana"
    },
    {
      id: 80,
      name: "Dhananjay Das",
      bengaliName: "ধনঞ্জয় দাস",
      devanagariName: "धनञ्जय दासः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Interpretation of Vedāntakāmadhenu"],
      keyContribution: "Authored definitive commentary on Nimbārka's Daśaślokī (Vedāntakāmadhenu).",
      traditionOrSchool: "Dvaitādvaita Hermeneutics"
    },
    {
      id: 81,
      name: "Swami Dhireshananda",
      bengaliName: "স্বামী ধীরেশানন্দ",
      devanagariName: "स्वामी धीरेशानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedānta Saṁjñā Mālikā (Lexicon of Vedantic Technical Terms)"],
      keyContribution: "Compiled the authoritative Sanskrit-Bengali glossary explaining technical terminology of Advaita.",
      traditionOrSchool: "Vedantic Lexicography"
    },
    {
      id: 82,
      name: "Swami Vedānanda",
      bengaliName: "স্বামী বেদানন্দ",
      devanagariName: "स्वामी वेदानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Vedāntasāra (Bengali Analysis & Sadhana Path)"],
      keyContribution: "Monastic guide correlating Vedāntasāra's theory with internal meditation practice.",
      traditionOrSchool: "Advaita Contemplative Practice"
    },
    {
      id: 83,
      name: "Swami Baneshananda",
      bengaliName: "স্বামী বানেশানন্দ",
      devanagariName: "स्वामी बानेशानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Pañcadaśī (Exposition of Vidyāraṇya's 15 Chapters)"],
      keyContribution: "Disseminated Vidyāraṇya Svāmī's Pañcadaśī with lucid contemporary philosophical explanations.",
      traditionOrSchool: "Prakaraṇa Grantha Exegesis"
    },
    {
      id: 84,
      name: "Swami Sarvagananda",
      bengaliName: "স্বামী সর্বগানন্দ",
      devanagariName: "स्वामी सर्वगानन्दः",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Phalita Vedānta (Applied Vedānta in Life)"],
      keyContribution: "Propounded 'Phalita Vedānta' (Fruitional / Lived Vedānta), translating abstract non-dual metaphysics into ethical everyday conduct.",
      traditionOrSchool: "Practical Applied Vedānta"
    },
    {
      id: 85,
      name: "Swami Apurvananda",
      bengaliName: "স্বামী অপূর্বানন্দ",
      devanagariName: "स्वामी अपूर्वानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Gītā-Tattva (Essence of Gītā)", "Acharya Shankara o Ramanuja"],
      keyContribution: "Authored widely read biographies and philosophical expositions of Ādi Śaṅkara and the Gītā.",
      traditionOrSchool: "Biographical & Textual Vedānta"
    },
    {
      id: 86,
      name: "Swami Suhitananda",
      bengaliName: "স্বামী সুহিতানন্দ",
      devanagariName: "स्वामी सुहितानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Gītā-Cintan (Meditations on the Bhagavad Gītā)"],
      keyContribution: "Explicated the devotional and psychological dimensions of Gītā sādhanā.",
      traditionOrSchool: "Gītā Contemplative Studies"
    },
    {
      id: 87,
      name: "Vasudevananda (Swami Vasudevananda)",
      bengaliName: "বাসুদেবানন্দ",
      devanagariName: "वासुदेवानन्दः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Bhagavad Gītā with Śaṅkarabhāṣya Detailed Exposition"],
      keyContribution: "Authored line-by-line analyses correlating the Gītā text with Śaṅkara's Bhāṣya.",
      traditionOrSchool: "Gītā Śaṅkarabhāṣya Studies"
    },
    {
      id: 88,
      name: "Dr. Chandam Pai",
      bengaliName: "ড. ছন্দম পাই",
      devanagariName: "डॉ. छन्दम् पाई",
      eraPeriod: "20th–21st Century",
      category: 1,
      categoryLabel: "Category I: Independent Innovation",
      majorWorks: ["Doctoral Thesis on Śrīmat Anirvān's Philosophy & Vedantic Hermeneutics"],
      keyContribution: "Academic researcher who systematically analyzed Śrīmat Anirvān's Cinmayapratyakṣavāda and its place in modern Vedānta.",
      traditionOrSchool: "Contemporary Academic Anirvān Studies"
    },
    {
      id: 89,
      name: "Sanjay Biswas",
      bengaliName: "সঞ্জয় বিশ্বাস",
      devanagariName: "सञ्जय विश्वासः",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Critical Monograph on Śrīmat Anirvān's Īśopaniṣad Commentary"],
      keyContribution: "Scholarly research annotating and analyzing Śrīmat Anirvān's esoteric commentary on Īśopaniṣad.",
      traditionOrSchool: "Contemporary Upaniṣad Studies"
    },
    {
      id: 90,
      name: "Sangvidananda Saraswati",
      bengaliName: "সংবিদানন্দ সরস্বতী",
      devanagariName: "संविदानन्द सरस्वती",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Interpretations of Classical Vedānta Texts & Upaniṣads"],
      keyContribution: "Authored traditional expositions clarifying classical Advaita polemics.",
      traditionOrSchool: "Traditional Advaita Sannyāsa"
    },
    {
      id: 91,
      name: "Prof. Kakali Ghosh",
      bengaliName: "অধ্যাপিকা কাকলি ঘোষ",
      devanagariName: "प्राध्यापिका काकली घोष",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Scholastic Research on the Works & Manuscripts of Śrīmat Anirvān (Jadavpur University)"],
      keyContribution: "Professor of Sanskrit at Jadavpur University; prominent researcher editing, analyzing, and preserving the Vedāntic corpus of Śrīmat Anirvān.",
      traditionOrSchool: "Academic Sanskrit & Vedic Philology"
    },
    {
      id: 92,
      name: "Dr. Ratna Bose",
      bengaliName: "ড. রত্না বসু",
      devanagariName: "डॉ. रत्ना बसु",
      eraPeriod: "20th–21st Century",
      category: 2,
      categoryLabel: "Category II: Classical Translations & Expositions",
      majorWorks: ["Manuscriptological Studies & Critical Editions of Bengal Vedānta Texts (University of Calcutta)"],
      keyContribution: "Distinguished Indologist and manuscriptologist at the University of Calcutta; leads critical archival cataloging of rare Sanskrit Vedānta manuscripts across Bengal.",
      traditionOrSchool: "Vedantic Manuscriptology & Archival Research"
    }
  ]
};
