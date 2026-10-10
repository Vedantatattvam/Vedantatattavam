import { TextEntry } from "./types";
import { ISOPANISAD_GRANTHA } from "./isopanisadData";
import { KENOPANISAD_GRANTHA } from "./kenopanisadData";
import { KATHOPANISAD_GRANTHA } from "./kathopanisadData";
import { PRASNOPANISAD_GRANTHA } from "./prasnopanisadData";
import { MUNDAKOPANISAD_GRANTHA } from "./mundakopanisadData";
import { MANDUKYOPANISAD_GRANTHA } from "./mandukyopanisadData";
import { AITAREYOPANISAD_GRANTHA } from "./aitareyopanisadData";
import { TAITTIRIYOPANISAD_GRANTHA } from "./taittiriyopanisadData";
import { CHANDOGYOPANISAD_GRANTHA } from "./chandogyopanisadData";
import { BRHADARANYAKOPANISAD_GRANTHA } from "./brhadaranyakopanisadData";
import { BRAHMASUTRA_GRANTHA } from "./brahmasutraniData";
import { BHAGAVADGITA_GRANTHA } from "./bhagavadgitaData";
import { VEDANTASARA_GRANTHA } from "./vedantasaraData";
import { JIVANMUKTIVIVEKA_GRANTHA } from "./jivanmuktivivekaData";
import { VEDANTAPARIBHASA_GRANTHA } from "./vedantaparibhasaData";
import { ADVAITAMAKARANDA_GRANTHA } from "./advaitamakarandaData";
import { ADVAITARASAMANJARI_GRANTHA } from "./advaitarasamanjariData";
import { SHAKTI_BHASHYA_GRANTHA } from "./shaktibhashyaData";
import { SRIBHASHYA_GRANTHA } from "./sribhasyaData";

export const OCR_EXAMPLES = [
  {
    name: "Śāṅkarabhāṣya fragment (Brahma Sūtra 1.1.1) with noise",
    raw: "अथातो ब्रह्मजिज्ञासा| अ्रथ शब्द आनन्तयार्थ। अतः शब्दः हेत्वथः। ब्रह्मजज्ञासा ब्रह्मणो जिज्ञासा व्मह्मजिज्ञासा| ब्रह्म च वक्ष्यमाणलक्षणं जन्माद्यस्य यतः",
    note: "Contains spelling typos like 'जज्ञासा' / 'व्मह्मजिज्ञासा', and character noise like 'अ्रथ' / 'हेत्वथः' instead of 'हेत्वर्थः'."
  },
  {
    name: "Īśa Upaniṣad Verse 1 raw digitizer print",
    raw: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्या जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥ १",
    note: "Sanskrit verse missing anusvaras (जगत् instead of जगत्), punctuation issues, and spacing irregularities."
  },
  {
    name: "Kaṭha Upaniṣad (Anusvara & Visarga errors)",
    raw: "न जायते म्रियते वा विपश्चिन्नायं कुतश्चिन्न बभूव कश्चित्. अजो नित्य शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे",
    note: "Missing visarga on 'नित्य' (should be 'नित्यः'), and 'शाश्वतो' / 'बभूव' spacing and punctuation issues."
  }
];

export const TRANSLATION_EXAMPLES = [
  {
    title: "Kenopaniṣad 1.5 (Nedam Yadidam Upāsate)",
    text: "यद्वाचानभ्युदितं येन वागभ्युद्यते । तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ५ ॥",
    context: "Declaration that Brahman is the conscious witness illuminating speech, not any finite object of external worship."
  },
  {
    title: "Īśopaniṣad Mantra 1 (Universal Divine Presence)",
    text: "ईशा वास्यमिदं सर्वं यत्किं च जगत्यां जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्य स्विद्धनम् ॥ १ ॥",
    context: "The seminal opening mantra of the Īśāvāsyopaniṣad, commanding perception of the Divine in all mutable phenomena and living in active detachment."
  },
  {
    title: "Chāndogya Upaniṣad 6.8.7 (Tat Tvam Asi)",
    text: "स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति",
    context: "The instruction of Uddālaka Āruṇi to his son Śvetaketu, teaching supreme non-duality."
  },
  {
    title: "Brahma Sūtra 1.1.1 (Athāto Brahmajijñāsā)",
    text: "अथातो ब्रह्मजिज्ञासा ॥ १ ॥",
    context: "The opening aphorism of Bādarāyaṇa's Brahma Sūtras, initiating the inquiry into ultimate reality."
  },
  {
    title: "Bhagavad Gītā 2.20 (Nature of Ātman)",
    text: "न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः । अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥",
    context: "Lord Kṛṣṇa explaining the eternal, unslayable nature of the Supreme Ātman to Arjuna."
  }
];

export const COMPARATIVE_EXAMPLES = [
  {
    title: "Īśopaniṣad Mantra 11 (Vidyā & Avidyā Harmony)",
    text: "विद्यां चाविद्यां च यस्तद्वेदोभयं सह । अविद्यया मृत्युं तीर्त्वा विद्ययामृतमश्नुते ॥ ११ ॥",
    description: "The celebrated synthesis of action/discipline (Avidyā) and spiritual realization (Vidyā) across Vedantic traditions."
  },
  {
    title: "Brahma Sūtra 1.1.2 (Origin of Jagat)",
    text: "जन्माद्यस्य यतः ॥ २ ॥",
    description: "Definition of Brahman as that from which the origin, sustenance, and dissolution of this universe proceed."
  },
  {
    title: "Bhagavad Gītā 15.7 (Amśa of Brahman)",
    text: "ममैवांशो जीवलोके जीवभूतः सनातनः । मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥",
    description: "How the individual Jīva relates to Brahman (Is it an identical reflection, a qualitative part, or eternally distinct?)."
  },
  {
    title: "Bṛhadāraṇyaka Upaniṣad 1.4.10 (Aham Brahmāsmi)",
    text: "अहं ब्रह्मास्मीति तस्मात्तत्सर्वमभवत्",
    description: "The Great Saying (Mahāvākya): 'I am Brahman.' Śaṅkara uses this for identity, while Rāmānuja interprets it via modes (Prakāra)."
  }
];

export const PRESEEDED_GRANTHAS: TextEntry[] = [
  // ==========================================
  // VEDIC REVELATION & PRASHTHĀNATRAYĪ (ŚRUTI)
  // ==========================================
  ISOPANISAD_GRANTHA,
  KENOPANISAD_GRANTHA,
  KATHOPANISAD_GRANTHA,
  PRASNOPANISAD_GRANTHA,
  MUNDAKOPANISAD_GRANTHA,
  MANDUKYOPANISAD_GRANTHA,
  AITAREYOPANISAD_GRANTHA,
  TAITTIRIYOPANISAD_GRANTHA,
  CHANDOGYOPANISAD_GRANTHA,
  BRHADARANYAKOPANISAD_GRANTHA,

  // ==========================================
  // NYĀYA-PRASTHĀNA (BRAHMA SŪTRAS)
  // ==========================================
  BRAHMASUTRA_GRANTHA,
  SHAKTI_BHASHYA_GRANTHA,

  // ==========================================
  // SMṚTI-PRASTHĀNA (BHAGAVAD GĪTĀ)
  // ==========================================
  BHAGAVADGITA_GRANTHA,

  // ==========================================
  // ADVAITA VEDĀNTA (KEVALĀDVAITA)
  // ==========================================
  ADVAITAMAKARANDA_GRANTHA,
  ADVAITARASAMANJARI_GRANTHA,
  VEDANTASARA_GRANTHA,
  JIVANMUKTIVIVEKA_GRANTHA,
  VEDANTAPARIBHASA_GRANTHA,
  {
    id: "vivekacudamani",
    title: "Vivekacūḍāmaṇi",
    transliteratedTitle: "Vivekacūḍāmaṇi (विवेकचूडामणि)",
    author: "Ādi Śaṅkarācārya (Attributed)",
    century: "8th Century CE",
    school: "Advaita (Unconditional Non-Dualism)",
    paramparaId: "advaita",
    schoolTag: "Kevalādvaita",
    foundationalText: "Prakaraṇa Grantha (Independent Dialectical Manual)",
    totalVersesOrSutras: "580 Verses in classical Anuṣṭubh & Śārdūlavikrīḍita metres",
    language: "Melodic Classical Sanskrit Verses",
    scriptStyle: "Nāgarī Recension",
    description: "The 'Crest-Jewel of Discrimination' is the quintessential introductory treatise on Advaita Vedānta. It elucidates the direct path of discriminating the eternal Witness Self (Sākṣī-Ātman) from the non-self (Anātman) through the systematic removal of the five sheaths (Pañcakośa).",
    refutationsDet: "Refutes the efficacy of ritual works (Karma) as a direct cause of liberation, asserting that light alone dispels darkness, just as pure knowledge (Jñāna) alone dispels ignorance (Avidyā).",
    supportsDet: "Establishes absolute non-dual identity (Brahmātmaikya) and the liberating truth of the Mahāvākyas (such as 'Tat Tvam Asi').",
    chapters: [
      {
        id: "vc-mangalacarana",
        chapterTitle: "Chapter 1: Maṅgalam & The Greatness of Human Birth",
        chapterTitleSanskrit: "प्रथमोऽध्यायः — मङ्गलं मानवजन्ममहिमा च",
        summary: "The invocation to Sadguru Govinda and the supreme rarity of human incarnation endowed with discrimination.",
        verses: [
          {
            id: "vc-1",
            number: "Verse 1",
            title: "Maṅgala Śloka to Guru Govinda",
            mulaSanskrit: "सर्ववेदान्तसिद्धान्तगोचरं तमगोचरम् ।\nगोविन्दं परमानन्दं सद्गुरुं प्रणतोऽस्म्यहम् ॥ १ ॥",
            mulaIast: "sarva-vedānta-siddhānta-gocaraṁ tam agocaram |\ngovindaṁ paramānandaṁ sadguruṁ praṇato'smyaham || 1 ||",
            padaccheda: "सर्व-वेदान्त-सिद्धान्त-गोचरम्, तम्, अगोचरम्, गोविन्दम्, परम्-आनन्दम्, सद्गुरुम्, प्रणतः, अस्मि, अहम्",
            anvaya: "सर्ववेदान्तसिद्धान्तगोचरम् अगोचरं परमानन्दं तं सद्गुरुं गोविन्दं प्रणतोऽस्मि ।",
            bhashyaExtract: "गोविन्दं परब्रह्मस्वरूपं स्वगुरुं गोविन्दभगवत्पादाभिधानं च नमति । स हि वेदान्तवाक्यजन्यवृत्त्या ज्ञेयः, इन्द्रियाणामविषयश्च ।",
            englishTranslation: "I bow down to that Supreme Bliss, the Sadguru Govinda, who is knowable only through the essential conclusions of all Vedantic scriptures, yet beyond the grasp of ordinary sensory perception.",
            commentaryNotes: "This double-entendre verse honors both the Supreme Lord (Govinda) and Śaṅkara's historical teacher, Śrī Govinda Bhagavatpāda."
          },
          {
            id: "vc-2",
            number: "Verse 2",
            title: "The Three Rare Blessings",
            mulaSanskrit: "जन्तूनां नरजन्म दुर्लभमतः पुंस्त्वं ततो विप्रता तस्माद्वैदिकधर्ममार्गपरता विद्वत्त्वमस्मात्परम् ।\nआत्मानात्मविवेचनं स्वनुभवो ब्रह्मात्मना संस्थितिर्-मुक्तिर्नो शतकोटिजन्मसु कृतैः पुण्यैर्विना लभ्यते ॥ २ ॥",
            mulaIast: "jantūnāṁ nara-janma durlabham ataḥ puṁstvaṁ tato vipratā tasmād vaidika-dharma-mārga-paratā vidvattvam asmāt param |\nātmānātma-vivecanaṁ svanubhavo brahmātmanā saṁsthitir-muktir no śata-koṭi-janmasu kṛtaiḥ puṇyair vinā labhyate || 2 ||",
            padaccheda: "जन्तूनाम्, नरजन्म, दुर्लभम्, अतः, पुंस्त्वम्, ततः, विप्रता, तस्मात्, वैदिक-धर्म-मार्ग-परता, विद्वत्त्वम्, अस्मात्, परम्, आत्म-अनात्म-विवेचनम्, स्व-अनुभवः, ब्रह्म-आत्मना, संस्थितिः, मुक्तिः, नो, शत-कोटि-जन्मसु, कृतैः, पुण्यैः, विना, लभ्यते",
            anvaya: "जन्तूनां नरजन्म दुर्लभम्, अतः पुंस्त्वम्, ततो विप्रता, तस्मात् वैदिकधर्ममार्गपरता, अस्मात् परं विद्वत्त्वम्, ततः आत्मानात्मविवेचनं स्वनुभवो ब्रह्मात्मना संस्थितिर्मुक्तिश्च शतकोटिजन्मसु कृतैः पुण्यैर्विना न लभ्यते ।",
            bhashyaExtract: "मानवशरीरं मोक्षसाधनस्य मूलम् । तत्रापि विवेक-वैराग्य-शमादि-सम्पत्तिः परमदुर्लभा ।",
            englishTranslation: "For all living beings, human birth is exceedingly difficult to attain; rarer still is a longing for virtue and spiritual wisdom; rarer still is discriminative inquiry between Self and non-Self (Ātmānātma-viveka); and final realization as Brahman (Mukti) cannot be achieved without the merits of billions of well-spent lifetimes.",
            commentaryNotes: "Emphasizes the critical urgency of utilizing this conscious human incarnation for spiritual illumination."
          },
          {
            id: "vc-3",
            number: "Verse 3",
            title: "The Three Divine Boons (Durlabha-trayam)",
            mulaSanskrit: "दुर्लभं त्रयमेवैतद्देवानुग्रहहेतुकम् ।\nमनुष्यत्वं मुमुक्षुत्वं महापुरुषसंश्रयः ॥ ३ ॥",
            mulaIast: "durlabhaṁ trayam evaitad devānugraha-hetukam |\nmanuṣyatvaṁ mumukṣutvaṁ mahāpuruṣa-saṁśrayaḥ || 3 ||",
            padaccheda: "दुर्लभम्, त्रयम्, एव, एतत्, देव-अनुग्रह-हेतुकम्, मनुष्यत्वम्, मुमुक्षुत्वम्, महापुरुष-संश्रयः",
            anvaya: "एतत् त्रयं दुर्लभं देवानुग्रहहेतुकं च — मनुष्यत्वं मुमुक्षुत्वं महापुरुषसंश्रयः ।",
            bhashyaExtract: "एतानि त्रीणि यस्य सन्ति, स एव मोक्षभाजनं भवति नापरः ।",
            englishTranslation: "These three blessings are rare indeed and attained solely through divine grace: human embodiment, an ardent yearning for spiritual liberation (Mumukṣutva), and the protective refuge of an illumined sage (Mahāpuruṣa-saṁśraya).",
            commentaryNotes: "The foundational triad prerequisite for entering Advaitic contemplation."
          }
        ]
      }
    ]
  },

  // ==========================================
  // VIŚIṢṬĀDVAITA (ŚRĪ SAMPRADĀYA)
  // ==========================================
  SRIBHASHYA_GRANTHA,
  {
    id: "yatindramatadipika",
    title: "Yatīndramatadīpikā",
    transliteratedTitle: "Yatīndramatadīpikā (यतीन्द्रमतदीपिका)",
    author: "Śrīnivāsadāsa",
    century: "17th Century CE",
    school: "Viśiṣṭādvaita (Śrī Sampradāya Manual)",
    paramparaId: "visistadvaita",
    schoolTag: "Vaḍakalai / Teṅkalai Harmony",
    foundationalText: "Prakaraṇa Grantha on Viśiṣṭādvaita Epistemology and Ontology",
    totalVersesOrSutras: "10 Avatāras (Chapters)",
    language: "Clear, Systematic Sanskrit Prose",
    scriptStyle: "Nāgarī Recension",
    description: "The most widely studied introductory manual of Viśiṣṭādvaita philosophy. It systematically covers the three Pramāṇas (Pratyakṣa, Anumāna, Śabda) and the six Prameyas (Prakṛti, Kāla, Śuddha-sattva, Dharmabhūta-jñāna, Jīva, and Īśvara).",
    refutationsDet: "Refutes Advaitic Nirguṇa theory and Nyāya atomism by establishing the organic ontology of Dravya and Adravya.",
    supportsDet: "Explains Aprathak-Siddhi (inseparable relationship), Dharmabhūta-jñāna (attributive consciousness), and the Five Forms of Īśvara (Para, Vyūha, Vibhava, Antaryāmin, Arcā).",
    chapters: [
      {
        id: "ymd-1",
        chapterTitle: "Prathama Avatāra: Epistemology & Pramāṇa Nirūpaṇa",
        chapterTitleSanskrit: "प्रथमोऽवतारः — प्रमाणनिरूपणम्",
        summary: "The definition of valid cognition (Pramā) and the three accepted Pramāṇas in Viśiṣṭādvaita.",
        verses: [
          {
            id: "ymd-v1",
            number: "Section 1",
            title: "Definition of Valid Knowledge (Yathārtha-Jñānam)",
            mulaSanskrit: "प्रमाकरणं प्रमाणम् । यथार्थज्ञानं प्रमा । सा च प्रत्यक्षानुमानशब्दभेदात् त्रिविधा ।",
            mulaIast: "pramā-karaṇaṁ pramāṇam | yathārtha-jñānaṁ pramā | sā ca pratyakṣānumāna-śabda-bhedāt trividhā |",
            padaccheda: "प्रमा-करणम्, प्रमाणम्, यथा-अर्थ-ज्ञानम्, प्रमा, सा, च, प्रत्यक्ष-अनुमान-शब्द-भेदात्, त्रिविधा",
            anvaya: "प्रमाकरणं प्रमाणम् । यथार्थज्ञानं प्रमा । सा च प्रत्यक्षानुमानशब्दभेदात् त्रिविधा भवति ।",
            bhashyaExtract: "सर्वेषां ज्ञानानां यथार्थत्वमेव (Satkhyātivāda) । भ्रमेऽपि वस्त्वंशस्यास्तित्वं श्रुतिसिद्धम् ।",
            englishTranslation: "Pramāṇa is the instrumental cause of valid knowledge. Valid knowledge (Pramā) is cognition that conforms faithfully to reality as it is. It is threefold: direct perception (Pratyakṣa), inference (Anumāna), and verbal testimony (Śabda).",
            commentaryNotes: "Affirms Satkhyāti: All cognitions are intrinsically real because creation everywhere involves the triplication/quintuplication of elements."
          }
        ]
      }
    ]
  },

  // ==========================================
  // DVAITA VEDĀNTA (TATTVAVĀDA)
  // ==========================================
  {
    id: "upadhikhandana",
    title: "Upādhikhaṇḍana",
    transliteratedTitle: "Upādhikhaṇḍana (उपाधिखण्डन)",
    author: "Śrī Madhvācārya (Ānandatīrtha)",
    century: "13th Century CE",
    school: "Dvaita (Absolute Dualism / Tattvavāda)",
    paramparaId: "dvaita",
    schoolTag: "Brahmā-Mādhva Sampradāya",
    foundationalText: "Daśa Prakaraṇa (The Ten Dialectical Treatises)",
    totalVersesOrSutras: "Kārikā and Vigraha Dialectic",
    language: "Rigorous Scholastic Sanskrit",
    scriptStyle: "Southern Nāgarī / Grantha",
    description: "A profound polemical masterpiece refuting the Advaitic theory of 'Upādhis' (limiting adjuncts). Śrī Madhva demonstrates with razor-sharp epistemological scrutiny that an indivisible, partless conscious entity cannot be divided into ignorant souls by fictitious external adjuncts.",
    refutationsDet: "Demolishes the Advaitic concept of Avidyā/Upādhi as a mechanism that allegedly fractures undivided Brahman into multiple suffering Jīvas.",
    supportsDet: "Establishes Pañca-Bheda (five fundamental, eternal, real differences: between God and Jīva, God and matter, Jīva and Jīva, Jīva and matter, and matter and matter).",
    chapters: [
      {
        id: "uk-mula",
        chapterTitle: "Section 1: The Logical Inconsistency of Upādhi",
        chapterTitleSanskrit: "प्रथमो भागः — उपाधिनिरूपण-भङ्गः",
        summary: "Madhvācārya questions whether the Upādhi causes the difference or operates on an already differentiated soul.",
        verses: [
          {
            id: "uk-1",
            number: "Kārikā 1",
            title: "Refutation of Upādhi Causing Division in Brahman",
            mulaSanskrit: "न चोपाधिकृतो भेदो ब्रह्मणो युज्यते क्वचित् ।\nअखण्डैकरसस्यास्य कथं भेदः प्रकल्प्यते ॥ १ ॥",
            mulaIast: "na copādhikṛto bhedo brahmaṇo yujyate kvacit |\nakhaṇḍaikarasasyāsya kathaṁ bhedaḥ prakalpyate || 1 ||",
            padaccheda: "न, च, उपाधि-कृतः, भेदः, ब्रह्मणः, युज्यते, क्वचित्, अखण्ड-एक-रसस्य, अस्य, कथम्, भेदः, प्रकल्प्यते",
            anvaya: "अखण्डैकरसस्य अस्य ब्रह्मणः उपाधिकृतो भेदः क्वचिदपि न युज्यते, कथं भेदः प्रकल्प्यते ?",
            bhashyaExtract: "यदीश्वर एवोपाधिना जीवभावमापद्यते, तर्ह्युपाधेस्तदन्तर्गतत्वे सर्वज्ञे ब्रह्मण्यविद्योपाधियोगो न घटते । भेदे सति उपाधियोगः, उपाधियोगे सति भेद इत्यन्योन्याश्रयदोषः ।",
            englishTranslation: "It is impossible for external limiting adjuncts (Upādhis) to produce division in Brahman under any circumstance. How can real or apparent differentiation be conceived in that which is postulated as partless and homogeneous?",
            commentaryNotes: "Madhva demonstrates the fatal fallacy of mutual dependence (Anyonyāśraya-doṣa): Does the Upādhi divide the soul, or does division exist prior to applying the Upādhi?"
          }
        ]
      }
    ]
  },
  {
    id: "nyayamrta",
    title: "Nyāyāmṛta",
    transliteratedTitle: "Nyāyāmṛta (न्यायामृत)",
    author: "Śrī Vyāsatīrtha (Vyāsarāja)",
    century: "15th-16th Century CE",
    school: "Dvaita (Polemical Realism)",
    paramparaId: "dvaita",
    schoolTag: "Vyāsatraya Tradition",
    foundationalText: "Independent Polemical Masterpiece",
    totalVersesOrSutras: "4 Paricchedas (Chapters of Dialectical Scrutiny)",
    language: "Peak Scholastic Navya-Nyāya Sanskrit",
    scriptStyle: "Nāgarī Recension",
    description: "The pinnacle of Dvaita polemical philosophy. It systematically deconstructs Advaita's concepts of Mithyātva (unreality/indescribability of the cosmos), Adhyāsa (superimposition), and Jīvanmukti, setting off the greatest multi-century debate in Indian philosophical history (Nyāyāmṛta vs. Advaitasiddhi).",
    refutationsDet: "Refutes all five definitions of Mithyātva formulated by Citsukha and Ānandabodha with relentless logical rigour.",
    supportsDet: "Proves that the universe is real (Satyatva), difference (Bheda) is positive and directly perceived by the Sākṣī witness, and Brahman is eternally possessed of all auspicious attributes.",
    chapters: [
      {
        id: "na-pariccheda-1",
        chapterTitle: "Pariccheda 1: Refutation of Mithyātva (Mithyātvamithyātva Nirūpaṇa)",
        chapterTitleSanskrit: "प्रथमः परिच्छेदः — मिथ्यात्वनिरूपण-भङ्गः",
        summary: "Deconstructing the Advaitic thesis that the world is neither real nor unreal.",
        verses: [
          {
            id: "na-v1",
            number: "Kārikā 1.1",
            title: "The Incoherence of the Anirvacanīya Concept",
            mulaSanskrit: "सत्त्वे न बाधः, असत्त्वे न प्रतीतिः । सदसद्विलक्षणत्वं च व्याघातान्न सिद्ध्यति ॥",
            mulaIast: "sattve na bādhaḥ, asattve na pratītiḥ | sadasad-vilakṣaṇatvaṁ ca vyāghātān na siddhyati ||",
            padaccheda: "सत्त्वे, न, बाधः, असत्त्वे, न, प्रतीतिः, सत्-असत्-विलक्षणत्वम्, च, व्याघातात्, न, सिद्ध्यति",
            anvaya: "सत्त्वे सति बाधो न घटते, असत्त्वे सति प्रतीतिर्न घटते, सदसद्विलक्षणत्वं च परस्परविरोधात् न सिद्ध्यति ।",
            bhashyaExtract: "भाव-अभावयोः तृतीयप्रकाराभावेन सदसद्वैलक्षण्यं बन्ध्यापुत्रवत् सर्वथा असङ्गतम् । प्रत्यक्षसिद्धं जगत्सत्यत्वं न केनापि बाधयितुं शक्यते ।",
            englishTranslation: "If an entity is real (Sat), it can never be sublated; if it is absolute unreality (Asat), it can never be experienced in perception. Positing a third category that is 'distinct from both real and unreal' (Sadasad-vilakṣaṇa) fails entirely due to the law of the excluded middle and self-contradiction.",
            commentaryNotes: "Vyāsatīrtha challenges the foundation of Advaitic epistemology: something must be either real or unreal; there is no third intermediate ontological state."
          }
        ]
      }
    ]
  },

  // ==========================================
  // ŚUDDHĀDVAITA (PUṢṬIMĀRGA)
  // ==========================================
  {
    id: "anubhasya",
    title: "Anubhāṣya",
    transliteratedTitle: "Anubhāṣya (अणुभाष्य)",
    author: "Śrī Vallabhācārya & Śrī Viṭṭhalanātha",
    century: "15th-16th Century CE",
    school: "Śuddhādvaita (Pure Non-Dualism)",
    paramparaId: "suddhadvaita",
    schoolTag: "Rudra / Puṣṭimārga Sampradāya",
    foundationalText: "Brahma Sūtras of Bādarāyaṇa",
    totalVersesOrSutras: "4 Adhyāyas (Completed by son Viṭṭhalanātha)",
    language: "Profound Devotional Scholastic Sanskrit",
    scriptStyle: "Devanāgarī Scholastic",
    description: "The foundational commentary on the Brahma Sūtras from the Śuddhādvaita perspective. It establishes that Brahman (Lord Kṛṣṇa) is pure Being, Consciousness, and Bliss (Saccidānanda) who manifests the cosmos through His own intrinsic nature without relying on any illusory Māyā.",
    refutationsDet: "Rejects the concept of Māyā as an illusion-creating agency, demonstrating that Brahman's creation is genuine and sacred.",
    supportsDet: "Establishes Avikṛta-Pariṇāmavāda (unmodified transformation) and Puṣṭi-Mārga (the path of divine nourishment and unconditional grace).",
    chapters: [
      {
        id: "ab-1-1",
        chapterTitle: "Adhyāya 1, Pāda 1: Samanvaya on Brahman as Saccidānanda",
        chapterTitleSanskrit: "प्रथमाध्याये प्रथमपादः — समन्वयाधिकरणम्",
        summary: "Brahman as the sole cause of the universe through self-manifestation (Āvirbhāva).",
        verses: [
          {
            id: "ab-v1",
            number: "Sūtra 1.1.1 Commentary",
            title: "Inquiry into Brahman Free from Illusion",
            mulaSanskrit: "शुद्धं ब्रह्म जगद्रूपेणाविर्भवति । न तत्र मायायाः कश्चित् सम्बन्धः । यथोग्रतपाः सुवर्णं भूषणरूपेण परिणमते न तु रूपान्तरं गच्छति, तथैव ब्रह्म ॥",
            mulaIast: "śuddhaṁ brahma jagad-rūpeṇāvirbhavati | na tatra māyāyāḥ kaścit sambandhaḥ | yathogratapāḥ suvarṇaṁ bhūṣaṇa-rūpeṇa pariṇamate na tu rūpāntaraṁ gacchati, tathaiva brahma ||",
            padaccheda: "शुद्धम्, ब्रह्म, जगत्-रूपेण, आविर्भवति, न, तत्र, मायायाः, कश्चित्, सम्बन्धः",
            anvaya: "शुद्धं ब्रह्म जगद्रूपेणाविर्भवति, तत्र मायायाः सम्बन्धो नास्ति ।",
            bhashyaExtract: "ब्रह्मणो रूपत्रयम् — आधिभौतिकं जगत्, आध्यात्मिकं जीवः, आधिदैविकं श्रीकृष्णरूपं परं ब्रह्म ।",
            englishTranslation: "Pure Brahman manifests in the form of the cosmos without any contact with illusory Māyā. Just as pure gold is fashioned into various ornaments without losing its inherent nature as gold, so too Brahman manifests as the world through His own delightful sport (Līlā).",
            commentaryNotes: "Vallabhācārya explains that creation is not a degradation or illusion, but a blissful divine manifestation (Āvirbhāva)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // DVAITĀDVAITA (NIMBĀRKA SAMPRADĀYA)
  // ==========================================
  {
    id: "vedanta-parijata-saurabha",
    title: "Vedānta-Pārijāta-Saurabha",
    transliteratedTitle: "Vedānta-Pārijāta-Saurabha (वेदान्तपारिजातसौरभ)",
    author: "Śrī Nimbārkācārya",
    century: "11th-12th Century CE",
    school: "Dvaitādvaita (Natural Dualism-in-Non-Dualism)",
    paramparaId: "dvaitadvaita",
    schoolTag: "Sanakādi / Nimbārka Sampradāya",
    foundationalText: "Brahma Sūtras of Bādarāyaṇa",
    totalVersesOrSutras: "545 Sūtras concised in lucid poetic prose",
    language: "Concise Classical Sanskrit",
    scriptStyle: "Nāgarī Recension",
    description: "The foundational commentary on the Brahma Sūtras by Śrī Nimbārkācārya. It presents the doctrine of Svābhāvika-Bhedābheda: the relationship between Brahman (Śrī Kṛṣṇa) and the world of souls and matter is naturally and eternally both distinct (Bheda) and non-distinct (Abheda).",
    refutationsDet: "Refutes absolute monism (which dissolves individuality) and absolute dualism (which severs organic relation with God).",
    supportsDet: "Presents the soul as a conscious dependent ray (Aṁśa) of Brahman, establishing eternal worship of Śrī Rādhā-Mādhava.",
    chapters: [
      {
        id: "vps-1-1",
        chapterTitle: "Sūtra 1.1.1: The Fragrance of the Divine Pārijāta Tree",
        chapterTitleSanskrit: "प्रथमोऽध्यायः — पारिजातसौरभ-प्रारम्भः",
        summary: "The natural coexistence of identity and difference between the soul and Supreme Brahman.",
        verses: [
          {
            id: "vps-v1",
            number: "Sūtra 1.1.1",
            title: "Athāto Brahmajijñāsā — The Natural Relationship",
            mulaSanskrit: "स्वाभाविको भेदाभेदश्च श्रुतिसिद्धः । यथार्कस्य प्रभा तद्वदभिन्नापि भिन्ना प्रतीयते, तथा जीवाः परब्रह्मणोऽंशाः ॥",
            mulaIast: "svābhāviko bhedābhedaś ca śruti-siddhaḥ | yathārkasya prabhā tadvad abhinnāpi bhinnā pratīyate, tathā jīvāḥ parabrahmaṇo'ṁśāḥ ||",
            padaccheda: "स्वाभाविकः, भेद-अभेदः, च, श्रुति-सिद्धः, यथा, अर्कस्य, प्रभा, तथा, जीवाः, परब्रह्मणः, अंशाः",
            anvaya: "स्वाभाविकः भेदाभेदः श्रुतिसिद्धः, यथा अर्कस्य प्रभा अभिन्नापि भिन्ना तथा जीवाः परब्रह्मणोऽंशाः ।",
            bhashyaExtract: "ब्रह्म श्रीकृष्णसंज्ञं निखिलदोषरहितं कल्याणगुणाकरं स्वाभाविकभेदाभेदविशिष्टं जगत्कारणम् ।",
            englishTranslation: "Natural difference-and-non-difference (Svābhāvika Bhedābheda) is established by the eternal authority of the Vedas. Just as the illumination of the sun is neither wholly separate from nor identically the sun itself, so too individual souls are eternal dependent parts (Aṁśas) of Supreme Brahman.",
            commentaryNotes: "Nimbārka avoids both artificial conditionality (Upādhi) and utter disconnectedness."
          }
        ]
      }
    ]
  },

  // ==========================================
  // ACINTYA BHEDĀBHEDA (GAUḌĪYA SAMPRADĀYA)
  // ==========================================
  {
    id: "siddhantaratna",
    title: "Siddhāntaratna",
    transliteratedTitle: "Siddhāntaratna (सिद्धान्तरत्न)",
    author: "Baladeva Vidyābhūṣaṇa",
    century: "18th Century CE",
    school: "Acintya Bhedābheda (Inconceivable Difference-in-Identity)",
    paramparaId: "acintya",
    schoolTag: "Brahma-Mādhva-Gauḍīya",
    foundationalText: "Prolegomena to Govinda Bhāṣya",
    totalVersesOrSutras: "8 Pādas (Chapters in Sūtra & Bhāṣya style)",
    language: "Śāstric Sanskrit Commentary",
    scriptStyle: "Bengali / Devanāgarī Scholastic",
    description: "The foundational prolegomena of the Gauḍīya Vedānta school, demonstrating how Lord Kṛṣṇa is the Supreme Brahman possessing inconceivable energies (Acintya-śakti), reconciling all conflicting Upaniṣadic statements of identity and difference.",
    refutationsDet: "Refutes Advaitic absolute monism by showing that energy and energetic source (Śakti & Śaktimān) are neither solely identical nor wholly distinct.",
    supportsDet: "Provides a scriptural basis for divine form (Saccidānanda-vigraha) and eternal loving service (Prema-bhakti).",
    chapters: [
      {
        id: "sr-pada-1",
        chapterTitle: "Prathama Pāda: Sambandha Tattva & Acintya-Śakti",
        chapterTitleSanskrit: "प्रथमः पादः — सम्बन्धतत्त्वम् अचिन्त्यशक्तिश्च",
        summary: "The nature of the Absolute and the synthesis of difference and non-difference through inconceivable divine power.",
        verses: [
          {
            id: "sr-1",
            number: "Pāda 1, Śloka 1",
            title: "The Inconceivable Union of Śakti and Śaktimān",
            mulaSanskrit: "नित्यं स्वप्रकाशं पूर्णानन्दं चिदचिच्छक्तियुक्तं परं तत्त्वं श्रीकृष्णसंज्ञं वन्दे ।\nयच्छक्त्या जगदुदयस्थितिभङ्गाः सम्पद्यन्ते यदनुग्रहेण च मुमुक्षवः परां गतिं प्राप्नुवन्ति ॥",
            mulaIast: "nityaṁ sva-prakāśaṁ pūrṇānandaṁ cid-acic-chakti-yuktaṁ paraṁ tattvaṁ śrī-kṛṣṇa-saṁjñaṁ vande |\nyac-chaktyā jagad-udaya-sthiti-bhaṅgāḥ sampadyante yad-anugraheṇa ca mumukṣavaḥ parāṁ gatiṁ prāpnuvanti ||",
            padaccheda: "नित्यम्, स्व-प्रकाशम्, पूर्ण-आनन्दम्, चित्-अचित्-शक्ति-युक्तम्, परम्, तत्त्वम्, श्री-कृष्ण-संज्ञम्, वन्दे, यत्-शक्त्या, जगत्-उदय-स्थिति-भङ्गाः, सम्पद्यन्ते, यत्-अनुग्रहेण, च, मुमुक्षवः, पराम्, गतिम्, प्राप्नुवन्ति",
            anvaya: "नित्यं स्वप्रकाशं पूर्णानन्दं चिदचिच्छक्तियुक्तं श्रीकृष्णसंज्ञं परतत्त्वं वन्दे यच्छक्त्या जगदुदयस्थितिभङ्गाः सम्पद्यन्ते ।",
            bhashyaExtract: "भेदाभेदयोर्युगपत्सत्त्वं दुर्घटमपि भगवतोऽचिन्त्यैश्वर्यप्रभावात् सुघटमेवेति वेदान्तवाक्यैर्निर्णयः ।",
            englishTranslation: "I offer humble obeisances to the Supreme Absolute Truth known as Śrī Kṛṣṇa, who is eternal, self-luminous, complete bliss, and endowed with conscious (Cit) and insentient (Acit) energies; by whose inconceivable potency the cosmic manifestation, preservation, and dissolution occur, and by whose grace the seekers of liberation attain the highest spiritual destination.",
            commentaryNotes: "Synthesizes the polarity of Bheda and Abheda through the principle of Acintya (inconceivable transcendent compatibility)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // NAVYĀNUBHAVA VEDĀNTA & MODERN INTEGRAL RENAISSANCE
  // ==========================================
  {
    id: "vivekananda-practical-vedanta",
    title: "Practical Vedānta",
    transliteratedTitle: "Practical Vedānta (व्यावहारिक-वेदान्तः)",
    author: "Swami Vivekananda",
    century: "19th-20th Century CE (1896)",
    school: "Navyānubhava Vedānta (Universal Practical Non-Dualism)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Ramakrishna-Vivekananda Lineage",
    foundationalText: "Lectures delivered in London on Jnana Yoga & Practical Vedanta",
    totalVersesOrSutras: "4 Master Discourses (Parts I - IV)",
    language: "Sublime Modern English with Sanskrit Citations",
    scriptStyle: "Roman & Devanāgarī",
    description: "The revolutionary manifesto bringing Vedānta from forest hermitages and monastic debates into the active, practical everyday life of all humanity. Swami Vivekananda demonstrates that the highest truths of the Upaniṣads are intensely practical, abolishing fatalism, cowardice, and sectarian privilege while inspiring selfless service to suffering humanity as the supreme form of worship.",
    refutationsDet: "Refutes the misconception that Vedānta leads to pessimism, world-negating escapism, or ivory-tower intellectual aloofness.",
    supportsDet: "Establishes 'Service to the living being as direct worship of God' (Śiva-Jñāne Jīva-Sevā), the potential divinity of every soul, and the unity of all spiritual paths.",
    chapters: [
      {
        id: "pv-part-1",
        chapterTitle: "Part 1: The Principle of Universal Oneness in Daily Life",
        chapterTitleSanskrit: "प्रथमः खण्डः — दैनन्दिनजीवने सर्वभूतात्मभावः",
        summary: "How the Vedantic vision of the omnipresent Self must be lived in every thought, word, and social action.",
        verses: [
          {
            id: "pv-v1",
            number: "Discourse 1, Extract 1",
            title: "Vedānta Must Become Living and Practical",
            mulaSanskrit: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
            mulaIast: "īśāvāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat | tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||",
            padaccheda: "ईशा, वास्यम्, इदम्, सर्वम्, यत्-किञ्च, जगत्याम्, जगत्, तेन, त्यक्तेन, भुञ्जीथाः, मा, गृधः, कस्य-स्वित्, धनम्",
            anvaya: "इदं यत्किञ्च जगत्यां जगत् सर्वमीशा वास्यम् । तेन त्यक्तेन भुञ्जीथाः, कस्यस्विद् धनं मा गृधः ।",
            bhashyaExtract: "The fictitious barriers between the secular and the sacred must be broken forever. If a fisherman thinks he is the Spirit, he will be a better fisherman; if a student thinks he is the Spirit, he will be a better student; if a lawyer thinks he is the Spirit, he will be a better lawyer.",
            englishTranslation: "Whatever there is in this universe, animate or inanimate, is enveloped by the Lord. Protect yourself through renunciation; covet not the wealth of anyone. (Vedānta does not ask you to run away from life; it asks you to deify the world — to see God in everything).",
            commentaryNotes: "Swami Vivekananda takes the opening verse of the Īśa Upaniṣad as the master key to Practical Vedānta: seeing the Divine in the beggar, the laborer, and the sinner."
          },
          {
            id: "pv-v2",
            number: "Discourse 1, Extract 2",
            title: "Potential Divinity of the Soul",
            mulaSanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत । क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥",
            mulaIast: "uttiṣṭhata jāgrata prāpya varān nibodhata | kṣurasya dhārā niśitā duratyayā durgaṁ pathas tat kavayo vadanti ||",
            padaccheda: "उत्तिष्ठत, जाग्रत, प्राप्य, वरान्, निबोधत, क्षुरस्य, धारा, निशिता, दुरत्यया, दुर्गम्, पन्थः, तत्, कवयः, वदन्ति",
            anvaya: "उत्तिष्ठत जाग्रत वरान् प्राप्य निबोधत । क्षुरस्य निशिता धारा दुरत्यया दुर्गं तत् पन्थः इति कवयो वदन्ति ।",
            bhashyaExtract: "Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal. Do this either by work, or worship, or psychic control, or philosophy — by one, or more, or all of these — and be free.",
            englishTranslation: "Arise! Awake! And stop not till the goal is reached! The path is sharp as the razor's edge and hard to tread, declare the illumined seers. (Awaken the sleeping divinity within you; all power is already inside you; you can do anything and everything).",
            commentaryNotes: "The clarion call of Navyānubhava Vedānta that revitalized modern India and bridged modern humanist ethics with ancient Transcendental Truth."
          }
        ]
      }
    ]
  },
  {
    id: "aurobindo-life-divine",
    title: "The Life Divine",
    transliteratedTitle: "The Life Divine (दिव्यजीवनम्)",
    author: "Sri Aurobindo",
    century: "20th Century CE (1939–1940)",
    school: "Navyānubhava Vedānta (Pūrṇa-Advaita / Integral Vedānta)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Sri Aurobindo Ashram (Integral Yoga)",
    foundationalText: "Comprehensive Philosophical Treatise (2 Volumes, 56 Chapters)",
    totalVersesOrSutras: "Over 1,000 pages of synthesized metaphysics",
    language: "Elevated Philosophical English with Upaniṣadic Foundations",
    scriptStyle: "English & Sanskrit",
    description: "The magnum opus of Integral Vedānta. Sri Aurobindo harmonizes the reality of Matter and Spirit through the evolutionary ascent of consciousness. He demonstrates that creation is not an illusory snare (Māyā to be escaped), but a progressive divine adventure of the Spirit manifesting through Matter, Life, Mind, and the Supramental Truth-Consciousness (Vijñāna).",
    refutationsDet: "Refutes the 'Refusal of the Ascetic' (illusionist world-negation) and the 'Denial of the Materialist' (mechanistic reductionism).",
    supportsDet: "Establishes Involution and Evolution, the Omnipresent Reality (Saccidānanda), the Supermind as the link between Infinite and Finite, and the Divinization of human earthly existence.",
    chapters: [
      {
        id: "ld-book-1",
        chapterTitle: "Book 1, Chapter 4: The Omnipresent Reality",
        chapterTitleSanskrit: "प्रथमो भागः — सर्वव्यापकं परमार्थ-तत्त्वम्",
        summary: "The nature of the Absolute as Saccidānanda manifesting both in silence and in cosmic dynamism.",
        verses: [
          {
            id: "ld-v1",
            number: "Chapter 4 Synthesis",
            title: "Brahman: The Transcendent and the Cosmic Reality",
            mulaSanskrit: "सर्वं खल्विदं ब्रह्म तज्जलानिति शान्त उपासीत । यतो वा इमानि भूतानि जायन्ते येन जातानि जीवन्ति यत् प्रयन्त्यभिसंविशन्ति तद्विजिज्ञासस्व तद् ब्रह्मेति ॥",
            mulaIast: "sarvaṁ khalv idaṁ brahma tajjalān iti śānta upāsīta | yato vā imāni bhūtāni jāyante yena jātāni jīvanti yat prayanty abhisaṁviśanti tad vijijñāsasva tad brahmeti ||",
            padaccheda: "सर्वम्, खलु, इदम्, ब्रह्म, तज्जलान्, इति, शान्तः, उपासीत, यतः, वै, इमानि, भूतानि, जायन्ते, तत्, ब्रह्म",
            anvaya: "सर्वं खल्विदं ब्रह्म, तज्जलानिति शान्त उपासीत । यतो वा इमानि भूतानि जायन्ते तद् ब्रह्म ।",
            bhashyaExtract: "An omnipresent Reality is the Brahman, not an omnipresent Cause of an unreal world. If the world is a dream, it is a dream of the Real; if it is a game, it is the sport of the Eternal. Matter is the sleeping Spirit; Life is the stirring Spirit; Mind is the awakening Spirit; Supermind is the fully self-revealed Spirit.",
            englishTranslation: "All this universe is verily Brahman; from Him all things emerge, into Him all things dissolve, by Him all things breathe — in peace should one contemplate Him. (Spirit and Matter are the two ends of one continuous ladder of being).",
            commentaryNotes: "Integral Vedānta reconciles the static silence of Nirguṇa Brahman with the dynamic creativity of Divine Śakti."
          }
        ]
      }
    ]
  },
  {
    id: "ramana-ulladu-narpadu",
    title: "Uḷḷadu Nāṟpadu (Sad-Darśanam)",
    transliteratedTitle: "Uḷḷadu Nāṟpadu / Sad-Darśanam (सद्दर्शनम् - उल्लदु नाऱ्पदु)",
    author: "Bhagavan Sri Ramana Maharshi (Sanskrit rendering by Kavyakantha Ganapati Muni)",
    century: "20th Century CE (1928)",
    school: "Navyānubhava Vedānta (Direct Vicāra-Mārga / Experiential Advaita)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Sri Ramanasramam (Arunachala)",
    foundationalText: "Forty Verses on Reality (Mūla Tamil & Classical Sanskrit Verse)",
    totalVersesOrSutras: "40 Verses + 2 Invocatory Verses",
    language: "Tamil & Sanskrit Metres (Upajāti / Śārdūlavikrīḍita)",
    scriptStyle: "Devanāgarī & Tamil",
    description: "The core philosophical exposition of Bhagavan Sri Ramana Maharshi. It cuts through scholastic intellectualism by providing the direct methodology of Self-Inquiry (Ātma-Vicāra): tracing the source of the 'I'-thought (Aham-vṛtti) to its resting place in the spiritual Heart (Hṛdayam), whereupon the ego vanishes and pure non-dual Consciousness shines uninterruptedly.",
    refutationsDet: "Refutes endless academic debates over whether the world is real or unreal, whether fate or free will prevails, showing that all debates belong to the unexamined ego.",
    supportsDet: "Establishes the supreme efficacy of Self-Inquiry, the direct silence of Arunachala, and the natural state of Sahaja Samādhi.",
    chapters: [
      {
        id: "un-mangalam",
        chapterTitle: "Maṅgala Ślokas: The Heart of Reality",
        chapterTitleSanskrit: "मङ्गलाचरणम् — सद्दर्शन-प्रारम्भः",
        summary: "Meditating upon that Reality which exists free of all conceptual thought.",
        verses: [
          {
            id: "un-v1",
            number: "Maṅgala Śloka 1",
            title: "Contemplating the Self as the Heart",
            mulaSanskrit: "सद्दर्शनं किं नु विहाय सन्तं हृद्येष चिन्तारहितः प्रतीतः ।\nसदाख्यहृद्गोचर एष भाति कथं नु तद्ध्येयमधीतमेव ॥ १ ॥",
            mulaIast: "sad-darśanaṁ kiṁ nu vihāya santaṁ hṛdyeṣa cintā-rahitaḥ pratītaḥ |\nsad-ākhya-hṛd-gocara eṣa bhāti kathaṁ nu tad dhyeyam adhītam eva || 1 ||",
            padaccheda: "सद्-दर्शनम्, किम्, नु, विहाय, सन्तम्, हृदि, एषः, चिन्ता-रहितः, प्रतीतः, सदाख्य-हृत्-गोचरः, एषः, भाति, कथम्, नु, तत्, ध्येयम्",
            anvaya: "सन्तं विहाय सद्दर्शनं किं नु ? एष चिन्तारहितः हृदि प्रतीतः भाति । सदाख्यहृद्गोचरः कथं नु ध्येयम् ?",
            bhashyaExtract: "Can there be any consciousness of existence other than Being itself? Because that Reality dwells in the Heart beyond all mental thought, who can meditate on It, and how? To abide in the Heart as It is, is truly to meditate on It.",
            englishTranslation: "Can there be any realization of Truth apart from Being? Since that Reality shines within the Heart free from all mentation, how can one meditate upon It? To abide in the Heart as the Heart (in thought-free awareness) is true contemplation.",
            commentaryNotes: "Bhagavan Ramana identifies the true Self not as an object of intellectual concentration, but as the pure Subject (Sākṣī)."
          },
          {
            id: "un-v2",
            number: "Verse 25",
            title: "The Nature of the Ghostly Ego (Ahaṅkāra)",
            mulaSanskrit: "रूपं गृहीत्वा जायते रूपं धृत्वा च तिष्ठति ।\nरूपं भुङ्क्ते विवर्धते रूपं त्यक्त्वा विधावति ।\nअन्वेषणे कृते नश्येत् चित्रमेतद् अहंतमः ॥ २५ ॥",
            mulaIast: "rūpaṁ gṛhītvā jāyate rūpaṁ dhṛtvā ca tiṣṭhati |\nrūpaṁ bhuṅkte vivardhate rūpaṁ tyaktvā vidhāvati |\nanveṣaṇe kṛte naśyet citram etad ahaṁ-tamaḥ || 25 ||",
            padaccheda: "रूपम्, गृहीत्वा, जायते, रूपम्, धृत्वा, च, तिष्ठति, रूपम्, भुङ्क्ते, विवर्धते, रूपम्, त्यक्त्वा, विधावति, अन्वेषणे, कृते, नश्येत्, चित्रम्, एतत्, अहम्-तमः",
            anvaya: "इदम् अहन्तमः रूपं गृहीत्वा जायते, रूपं धृत्वा तिष्ठति, रूपं भुक्त्वा विवर्धते, रूपं त्यक्त्वा विधावति, अन्वेषणे कृते च नश्यति ।",
            bhashyaExtract: "Holding a form it rises; holding a form it stays; feeding on forms it waxes big; abandoning one form it grabs another. But when sought for ('Who am I?'), it flees and dissolves into nothingness — this formless ghost of an ego!",
            englishTranslation: "Taking hold of a physical form (the body), the ego comes into being; grasping a form, it endures; feeding on sensory forms, it grows powerful; leaving one form, it seizes another. But when inquired into through vigilant inquiry, it takes to its heels and vanishes into thin air!",
            commentaryNotes: "The foundational diagnostic of Self-Inquiry: The ego exists only by identification with objects; look at the ego itself, and it disappears into pure Awareness."
          }
        ]
      }
    ]
  },
  {
    id: "chinmayananda-holy-geeta",
    title: "The Holy Geeta",
    transliteratedTitle: "The Holy Geeta (श्रीमद्भगवद्गीता-दीपिका)",
    author: "Swami Chinmayananda",
    century: "20th Century CE (1960)",
    school: "Navyānubhava Vedānta (Modern Systematic Exegesis)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Chinmaya Mission Lineage",
    foundationalText: "Bhagavad Gītā (700 Verses)",
    totalVersesOrSutras: "18 Chapters with Detailed Analytical Commentary",
    language: "Dynamic English with Word-for-Word Anvaya & Grammar",
    scriptStyle: "Devanāgarī & Roman",
    description: "The most celebrated modern commentary on the Bhagavad Gītā, renowned for making profound Vedantic metaphysics accessible, logical, and actionable for youth, professionals, and seekers across the globe. Swami Chinmayananda applies the Gītā's timeless wisdom to conquer the internal Kurukṣetra of human doubt, anxiety, and lethargy.",
    refutationsDet: "Refutes the passive, defeatist, or purely fatalistic interpretations of Karma, re-establishing the Gītā as the manual for heroic, ethical, dynamic action.",
    supportsDet: "Provides the BMI Chart (Body-Mind-Intellect vehicle vs. Om / Supreme Consciousness), synthesis of the 3 Gunas, and the art of self-transformation.",
    chapters: [
      {
        id: "hg-ch-2",
        chapterTitle: "Chapter 2: Sāṅkhya Yoga — The Yoga of Knowledge",
        chapterTitleSanskrit: "द्वितीयोऽध्यायः — साङ्ख्ययोगः",
        summary: "The immortal nature of the Self (Ātman) and the art of detached, dedicated action (Karma Yoga).",
        verses: [
          {
            id: "hg-v1",
            number: "Verse 2.47",
            title: "The Charter of Dynamic Action (Karmāṇyevādhikāraste)",
            mulaSanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ २.४७ ॥",
            mulaIast: "karmaṇy evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo'stv akarmaṇi || 2.47 ||",
            padaccheda: "कर्मणि, एव, अधिकारः, ते, मा, फलेषु, कदाचन, मा, कर्म-फल-हेतुः, भूः, मा, ते, सङ्गः, अस्तु, अकर्मणि",
            anvaya: "ते कर्मणि एव अधिकारः, फलेषु कदाचन मा । त्वं कर्मफलहेतुः मा भूः, अकर्मणि ते सङ्गः मा अस्तु ।",
            bhashyaExtract: "To work alone you have the right, but never to its fruits; let not the fruit of action be your motive, nor let your attachment be to inaction. Work done with anxious preoccupation for future rewards creates mental agitations that dissipate creative energy.",
            englishTranslation: "You have a right only to perform your designated action, never to its fruits; let not the desire for the fruits of action be your motive, nor let there be in you any attachment to inaction.",
            commentaryNotes: "Swami Chinmayananda explains the psychological genius of Karma Yoga: Operating with 100% focused energy in the present moment without mental leakage into the anxious future."
          }
        ]
      }
    ]
  },
  {
    id: "radhakrishnan-idealist-view",
    title: "An Idealist View of Life",
    transliteratedTitle: "An Idealist View of Life (आदर्शवादी जीवनदर्शनम्)",
    author: "Dr. Sarvepalli Radhakrishnan",
    century: "20th Century CE (1932)",
    school: "Navyānubhava Vedānta (Academic Comparative Philosophy)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Global Academic & Perennial Vedānta",
    foundationalText: "Hibbert Lectures delivered at Manchester College, Oxford & University of London",
    totalVersesOrSutras: "8 Lectures / Chapters",
    language: "Polished Scholastic English with Global Philosophical Syntheses",
    scriptStyle: "English & Classical Sanskrit Citations",
    description: "One of the 20th century's most luminous defenses of spiritual intuition and Vedantic idealism against Western naturalism, mechanistic materialism, and religious dogmatism. Dr. Radhakrishnan demonstrates that direct intuitive insight (Aparokṣānubhūti) provides the ultimate synthetic vision reconciling scientific inquiry with mystical transcendence.",
    refutationsDet: "Refutes mechanistic determinism, secular reductionism, and religious exclusivism.",
    supportsDet: "Articulates the primacy of religious experience (Anubhava), the spiritual destiny of mankind, and Vedānta as the perennial world philosophy.",
    chapters: [
      {
        id: "aiv-ch-5",
        chapterTitle: "Chapter 5: Matter, Life and Mind in Spiritual Evolution",
        chapterTitleSanskrit: "पञ्चमोऽध्यायः — जडे जीवने मनसि च आध्यात्मिक-विकासः",
        summary: "The continuity of cosmic emergence from physical energy up to the realization of the Divine Spirit.",
        verses: [
          {
            id: "aiv-v1",
            number: "Lecture 5, Extract",
            title: "Intuitive Apprehension of the Absolute",
            mulaSanskrit: "नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन । यमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम् ॥",
            mulaIast: "nāyam ātmā pravacanena labhyo na medhayā na bahunā śrutena | yam evaiṣa vṛṇute tena labhyas tasyaiṣa ātmā vivṛṇute tanūṁ svām ||",
            padaccheda: "न, अयम्, आत्मा, प्रवचनेन, लभ्यः, न, मेधया, न, बहुना, श्रुतेन, यम्, एव, एषः, वृणुते, तेन, लभ्यः",
            anvaya: "अयमात्मा प्रवचनेन न लभ्यः, न मेधया, न बहुना श्रुतेन । यमेवैष वृणुते तेन लभ्यः ।",
            bhashyaExtract: "Intuition is not contrary to reason, but its fulfillment. Conceptual analysis gives us knowledge of parts, but intuitive insight gives us realization of the Whole. The human spirit cannot rest until it touches the transcendent ground of its own existence.",
            englishTranslation: "This Self cannot be attained through mere intellectual exposition, nor by subtle intellect, nor by vast scholarship. It is attained only by that consciousness which longs for It; to such a soul the Supreme Self reveals Its true nature.",
            commentaryNotes: "Dr. Radhakrishnan bridges the Kaṭha Upaniṣad with modern epistemology to demonstrate that integral intuition is the crown of human intelligence."
          }
        ]
      }
    ]
  },
  // ==========================================
  // SVĀMINĀRĀYAṆA VEDĀNTA (AKṢARA-PURUṢOTTAMA PRASTHĀNATRAYĪ BHĀṢYAS)
  // ==========================================
  {
    id: "swaminarayan-brahmasutra-bhashyam",
    title: "Brahmasūtra-Svāminārāyaṇa-Bhāṣyam",
    transliteratedTitle: "Brahmasūtra-Svāminārāyaṇa-Bhāṣyam (ब्रह्मसूत्र-स्वामिनारायणभाष्यम् — न्यायप्रस्थानम्)",
    author: "Mahāmahopādhyāya Bhadreśadāsa Svāmī",
    century: "21st Century CE (Contemporary Classical Bhāṣya)",
    school: "Svāminārāyaṇa Vedānta (Akṣara-Puruṣottama Darśana)",
    paramparaId: "swaminarayan",
    isNeoVedanta: false,
    schoolTag: "Nyāya Prasthāna (Brahma Sūtras)",
    foundationalText: "Bādarāyaṇa's Brahma Sūtras (545 Sūtras in 4 Adhyāyas)",
    totalVersesOrSutras: "Complete 4 Adhyāyas in Sanskrit with Full Exegesis",
    language: "Classical Sanskrit (Pāṇinian Grammar & Vedantic Hermeneutics)",
    scriptStyle: "Devanāgarī & Roman IAST",
    description: "The monumental Sanskrit commentary on the Brahma Sūtras composed by Mahāmahopādhyāya Bhadreshdas Swami. Systematically demonstrates that Bādarāyaṇa's sūtras establish two distinct ontological conscious transcendent entities: Akṣarabrahman (the all-pervasive conscious divine abode and ideal servitor) and Parabrahman (the Supreme Sovereign Godhead, Puruṣottama). Recognized globally by the 17th World Sanskrit Conference and Kashi Vidwat Parishad as a canonical Bhāṣya in the unbroken classical lineage.",
    refutationsDet: "Refutes Advaitic Kevalādvaita illusionism (Māyāvāda), the doctrine that Akṣarabrahman is merely an illusory adjunct (Upādhi) of Nirguṇa Brahman, and the non-distinction between Akṣara and Puruṣottama.",
    supportsDet: "Establishes that Brahmajijñāsā is twofold (inquiry into Akṣarabrahman and Parabrahman), that Parabrahman creates, sustains, and dissolves universes through Akṣarabrahman, and that the liberated soul (Mukta) attains Brahmarūpatā (Akṣarasādharmya) to serve Puruṣottama in Akṣaradhāma.",
    chapters: [
      {
        id: "sb-bs-1-1-adh",
        chapterTitle: "Adhyāya 1, Pāda 1: Samanvayādhyāya — Jijñāsā & Janmādi",
        chapterTitleSanskrit: "प्रथमाध्याये प्रथमपादे — जिज्ञासाधिकरणं जन्माद्यधिकरणं च",
        summary: "Establishing the nature of Brahmajijñāsā and Parabrahman as the supreme independent cosmic cause.",
        verses: [
          {
            id: "sb-bs-1-1-1",
            number: "Brahma Sūtra 1.1.1",
            title: "Athāto Brahmajijñāsā: Twofold Inquiry",
            mulaSanskrit: "अथातो ब्रह्मजिज्ञासा ॥ १.१.१ ॥",
            mulaIast: "athāto brahma-jijñāsā || 1.1.1 ||",
            padaccheda: "अथ, अतः, ब्रह्म-जिज्ञासा",
            anvaya: "अथ साधन-चतुष्टय-सम्पत्त्यनन्तरम् अतः परब्रह्म-प्रसाद-हेतोः अक्षरात्मक-ब्रह्मणः पुरुषोत्तमात्मक-परब्रह्मणश्च जिज्ञासा कर्तव्या ।",
            bhashyaExtract: "अत्र 'ब्रह्म' शब्देन अक्षरब्रह्म परब्रह्म चेत्युभयोर्ब्रह्मणोर्जिज्ञासा विवक्षिता । कुतः ? अक्षरब्रह्म-ज्ञानं विना परब्रह्मणः पुरुषोत्तमस्य यथार्थज्ञानासम्भवात् । 'ब्रह्मविदामोति परम्' इत्यादिश्रुतिषु अक्षरब्रह्मज्ञानेनैव परब्रह्मप्राप्तिरुद्घोषिता । अतः मुमुक्षोः आद्यम् अक्षरब्रह्मसाधर्म्यापत्तिः तदनु परब्रह्मणः साक्षाद् भक्तिरिति सिद्धम् ।",
            englishTranslation: "Thereafter, therefore, arises the inquiry into Brahman. Here the word 'Brahman' signifies both Akṣarabrahman and Parabrahman. Why? Because without realizing Akṣarabrahman, true realization of and unswerving devotion to Parabrahman (Puruṣottama) is impossible. As Śruti declares ('Brahmavid āpnoti param'), only by knowing Brahman does one attain the Supreme.",
            commentaryNotes: "Mahāmahopādhyāya Bhadreshdas Swami demonstrates that Akṣarabrahman is the essential divine medium, gateway, and spiritual exemplar through which the seeker becomes Brahmarūpa to offer pure loving service to Parabrahman."
          },
          {
            id: "sb-bs-1-1-2",
            number: "Brahma Sūtra 1.1.2",
            title: "Janmādyasya Yataḥ: Cosmic Causation",
            mulaSanskrit: "जन्माद्यस्य यतः ॥ १.१.२ ॥",
            mulaIast: "janmādy asya yataḥ || 1.1.2 ||",
            padaccheda: "जन्म-आदि, अस्य, यतः",
            anvaya: "अस्य विचित्र-रचनस्य जगतः जन्म-स्थिति-भङ्गाः यतः पुरुषोत्तमात् परब्रह्मणः भवन्ति तत् परब्रह्म ।",
            bhashyaExtract: "यतः सर्वेश्वरात् स्वातन्त्र्येण सर्वकारणकारणात् परब्रह्मणः पुरुषोत्तमात् स्वामिनारायणात् अस्य प्रपञ्चस्य सृष्ट्यादयो भवन्ति । स तु अक्षरब्रह्मद्वारा प्रकृत्यादीन् प्रेरयन् जगदुत्पादयति पालयति संहरति च ।",
            englishTranslation: "Brahman is That Supreme Sovereign Entity from which proceed the creation, sustenance, and dissolution of this manifold universe. Parabrahman accomplishes this cosmic governance by energizing and directing primordial Prakṛti through the medium of Akṣarabrahman.",
            commentaryNotes: "Bhadreshdas Swami clarifies that while Parabrahman is the ultimate independent Efficient Cause (Nimitta Kāraṇa), He operates through Akṣarabrahman without Himself undergoing material transformation."
          }
        ]
      },
      {
        id: "sb-bs-4-4-adh",
        chapterTitle: "Adhyāya 4, Pāda 4: Phalādhyāya — Nature of Mukti",
        chapterTitleSanskrit: "चतुर्थाध्याये चतुर्थपादे — मुक्तस्वरूप-निरूपणम्",
        summary: "The liberated soul's divine experience in Akṣaradhāma enjoying the bliss of Puruṣottama.",
        verses: [
          {
            id: "sb-bs-4-4-19",
            number: "Brahma Sūtra 4.4.19",
            title: "Bhogamātra-Sāmya-Liṅgāc Ca: Service in Akṣaradhāma",
            mulaSanskrit: "भोगमात्रसाम्यलिङ्गाच्च ॥ ४.४.१९ ॥",
            mulaIast: "bhoga-mātra-sāmya-liṅgāc ca || 4.4.19 ||",
            padaccheda: "भोग-मात्र, साम्य, लिङ्गात्, च",
            anvaya: "मुक्तस्य जीवेन सह परब्रह्मणः भोगमात्रे साम्यं दृश्यते, न तु जगद्व्यापार-कर्तृत्वम् ।",
            bhashyaExtract: "मुक्तात्मानः अक्षरधाग्नि परब्रह्मणा सह दिव्यसुखभोगमात्रेण समाना भवन्ति । सर्वव्यापकत्वं सर्वकर्तृत्वं सर्वशासकत्वं च केवलं परब्रह्मणः पुरुषोत्तमस्यैव असाधारणं लक्षणम् । मुक्तास्तु दासभावेन तं नित्यं सेवेरन् ।",
            englishTranslation: "The liberated soul shares with Parabrahman only the equality of experiencing transcendental divine bliss in Akṣaradhāma. Cosmic authorship, universal governance, and supreme sovereignty remain the unique, inalienable prerogative of Parabrahman alone.",
            commentaryNotes: "Affirms that in Akṣara-Puruṣottama Darśana, liberation is never the extinguishing of individuality into voidness or identity of lordship, but eternal loving servitude (Dāsa-Bhāva / Sevak-Sevya) in radiant Brahmarūpa form."
          }
        ]
      }
    ]
  },
  {
    id: "swaminarayan-upanishad-bhashyam",
    title: "Upaniṣat-Svāminārāyaṇa-Bhāṣyam",
    transliteratedTitle: "Upaniṣat-Svāminārāyaṇa-Bhāṣyam (उपनिषत्-स्वामिनारायणभाष्यम् — श्रुतिप्रस्थानम्)",
    author: "Mahāmahopādhyāya Bhadreśadāsa Svāmī",
    century: "21st Century CE (Contemporary Classical Bhāṣya)",
    school: "Svāminārāyaṇa Vedānta (Akṣara-Puruṣottama Darśana)",
    paramparaId: "swaminarayan",
    isNeoVedanta: false,
    schoolTag: "Śruti Prasthāna (Daśopaniṣadaḥ)",
    foundationalText: "The 10 Principal Upaniṣads (Īśa, Kena, Kaṭha, Praśna, Muṇḍaka, Māṇḍūkya, Taittirīya, Aitareya, Chāndogya, Bṛhadāraṇyaka)",
    totalVersesOrSutras: "Comprehensive 10-Upanishad Sanskrit Commentaries",
    language: "Classical Sanskrit (Vedic Philology & Pāṇinian Exegesis)",
    scriptStyle: "Devanāgarī & Roman IAST",
    description: "The comprehensive Sanskrit Bhāṣya on all ten principal Upaniṣads by Mahāmahopādhyāya Bhadreshdas Swami. Systematically illuminates the Śruti's clear, consistent revelations regarding the five eternal realities, emphasizing the recurring Vedic distinction between Akṣarabrahman (the all-pervasive spiritual substrate and transcendent abode) and the supreme Puruṣa / Parabrahman who transcends even Akṣara ('Akṣarāt parataḥ paraḥ').",
    refutationsDet: "Refutes the view that the Upaniṣads teach world-falsity (Mithyātva) or that the personal Supreme Being is merely a lower phenomenal manifestation (Apara Brahman).",
    supportsDet: "Establishes that the Upaniṣadic Brahmavidyā is the science of knowing Akṣara and attaining Parabrahman; reveals the nature of Akṣaradhāma (Param Vyoma), and expounds the manifest Satpurusha as the living embodiment of the Śruti's Brahmavidyā Guru.",
    chapters: [
      {
        id: "sb-up-mundaka",
        chapterTitle: "Muṇḍaka Upaniṣad: Akṣarāt Parataḥ Paraḥ",
        chapterTitleSanskrit: "मुण्डकोपनिषद् — द्वितीये मुण्डके प्रथमः खण्डः (अक्षरात् परतः परः)",
        summary: "The defining Vedic mantra proving the transcendence of Parabrahman over Akṣarabrahman.",
        verses: [
          {
            id: "sb-up-mun-2-1-2",
            number: "Muṇḍaka Upaniṣad 2.1.2",
            title: "The Supreme Puruṣa Transcending Akṣara",
            mulaSanskrit: "दिव्यो ह्यमूर्तः पुरुषः स बाह्याभ्यन्तरो ह्यजः ।\nअप्राणो ह्यमनाः शुभ्रो ह्यक्षरात्परतः परः ॥ २.१.२ ॥",
            mulaIast: "divyo hy amūrtaḥ puruṣaḥ sa bāhyābhyantaro hy ajaḥ |\naprāṇo hy amanāḥ śubhro hy akṣarāt parataḥ paraḥ || 2.1.2 ||",
            padaccheda: "दिव्यः, हि, अमूर्तः, पुरुषः, सः, बाह्य-अभ्यन्तरः, हि, अजः, अप्राणः, हि, अमनाः, शुभ्रः, हि, अक्षरात्, परतः, परः",
            anvaya: "सः दिव्यः अमूर्तः अजः बाह्याभ्यन्तरः अप्राणः अमनाः शुभ्रः हि पुरुषः अक्षरात् परतः परः अस्ति ।",
            bhashyaExtract: "अत्र 'अक्षरात् परतः परः' इति श्रुत्या स्पष्टतया अक्षरात्मक-ब्रह्मणोऽपि परतरत्वेन परब्रह्म पुरुषोत्तम एव प्रतिपाद्यते । अक्षरं तावत् सर्वोत्कृष्टं परमं धाम, तस्मादपि परः सर्वेश्वरः पुरुषोत्तमः स्वामिनारायणः साक्षात् ।",
            englishTranslation: "That divine, formless (devoid of material form, having a divine transcendental form), unborn Puruṣa is both within and without; devoid of material prāṇa and mind, supremely pure, and higher even than the highest imperishable Akṣarabrahman.",
            commentaryNotes: "This landmark Śruti mantra provides unequivocal scriptural proof that Parabrahman (the Supreme Puruṣa) is distinct from and superior to Akṣarabrahman."
          }
        ]
      },
      {
        id: "sb-up-katha",
        chapterTitle: "Kaṭha Upaniṣad: The Goal of Viṣṇoḥ Paramaṁ Padam",
        chapterTitleSanskrit: "कठोपनिषद् — प्रथमाध्याये तृतीयवल्ली (विष्णोः परमं पदम्)",
        summary: "The chariot metaphor illustrating the soul's journey to Akṣaradhāma.",
        verses: [
          {
            id: "sb-up-kat-1-3-9",
            number: "Kaṭha Upaniṣad 1.3.9",
            title: "Reaching the Supreme Abode of Viṣṇu",
            mulaSanskrit: "विज्ञानसारथिर्यस्तु मनःप्रग्रहवान्नरः ।\nसोऽध्वनः पारमाप्नोति तद्विष्णोः परमं पदम् ॥ १.३.९ ॥",
            mulaIast: "vijñāna-sārathir yas tu manaḥ-pragrahavān naraḥ |\nso'dhvanaḥ pāram āpnoti tad viṣṇoḥ paramaṁ padam || 1.3.9 ||",
            padaccheda: "विज्ञान-सारथिः, यः, तु, मनः-प्रग्रहवान्, नरः, सः, अध्वनः, पारम्, आप्नोति, तत्, विष्णोः, परमम्, पदम्",
            anvaya: "यः तु नरः विज्ञानसारथिः मनःप्रग्रहवान्, सः अध्वनः पारम् आप्नोति, तत् विष्णोः परमं पदम् अक्षरधाम ।",
            bhashyaExtract: "विष्णोः सर्वव्यापिनः परब्रह्मणः पुरुषोत्तमस्य स्वामिनारायणस्य यत् 'परमं पदम्' नित्यं धाम अक्षरब्रह्माख्यं तत् स अध्वनः पारं प्राप्नोति । अक्षरब्रह्म-साधर्म्यमापन्न एव तत्र गत्वा परब्रह्म-साक्षात्कारसुखमनुभवति ।",
            englishTranslation: "The seeker who has discriminative wisdom as their charioteer and keeps the reins of the mind firmly controlled reaches the end of the spiritual path — that supreme transcendent abode of Viṣṇu (Akṣaradhāma).",
            commentaryNotes: "Bhadreshdas Swami identifies 'Viṣṇoḥ Paramaṁ Pada' with Akṣarabrahman, the eternal abode where liberated souls perpetually adore Parabrahman."
          }
        ]
      },
      {
        id: "sb-up-taittiriya",
        chapterTitle: "Taittirīya Upaniṣad: Brahmavidyā & Param Vyoma",
        chapterTitleSanskrit: "तैत्तिरीयोपनिषद् — ब्रह्मानन्दवल्ली (ब्रह्मविदाप्नोति परम्)",
        summary: "Knowing Brahman and attaining the Supreme Puruṣottama in the supreme divine realm.",
        verses: [
          {
            id: "sb-up-tai-2-1-1",
            number: "Taittirīya Upaniṣad 2.1.1",
            title: "Brahmavid Āpnoti Param: Attaining the Supreme",
            mulaSanskrit: "ब्रह्मविदाप्नोति परम् । तदेषाऽभ्युक्ता । सत्यं ज्ञानमनन्तं ब्रह्म ।\nयो वेद निहितं गुहायां परमे व्योमन् । सोऽश्नुते सर्वान् कामान् सह । ब्रह्मणा विपश्चितेति ॥ २.१.१ ॥",
            mulaIast: "brahmavid āpnoti param | tad eṣā'bhyuktā | satyaṁ jñānam anantaṁ brahma |\nyo veda nihitaṁ guhāyāṁ parame vyoman | so'śnute sarvān kāmān saha | brahmaṇā vipaściteti || 2.1.1 ||",
            padaccheda: "ब्रह्म-वित्, आप्नोति, परम्, तत्, एषा, अभ्युक्ता, सत्यम्, ज्ञानम्, अनन्तम्, ब्रह्म, यः, वेद, निहितम्, गुहायाम्, परमे, व्योमन्, सः, अश्नुते, सर्वान्, कामान्, सह, ब्रह्मणा, विपश्चिता, इति",
            anvaya: "ब्रह्मवित् परम् आप्नोति । यः परमे व्योमन् गुहायां निहितं सत्यं ज्ञानम् अनन्तं ब्रह्म वेद, सः विपश्चिता ब्रह्मणा सह सर्वान् कामान् अश्नुते ।",
            bhashyaExtract: "अत्र 'ब्रह्मवित्' अक्षरब्रह्मवित् सन् 'परम्' परब्रह्माणं पुरुषोत्तमम् आप्नोति । 'परमे व्योमन्' इति अक्षरधाम्नि परब्रह्मणा सह सर्वान् दिव्यकामान् भुङ्क्ते ।",
            englishTranslation: "The knower of Brahman (Akṣarabrahman) attains the Supreme (Parabrahman). He who knows that Brahman which is Truth, Consciousness, and Infinite, seated in the hidden cave of the heart and in the supreme heavenly realm (Param Vyoma / Akṣaradhāma), fulfills all divine aspirations in communion with the omniscient Lord.",
            commentaryNotes: "Demonstrates that the realization of Akṣarabrahman is the essential precursor to attaining the supreme fruit: communion with Parabrahman."
          }
        ]
      }
    ]
  },
  {
    id: "swaminarayan-gita-bhashyam",
    title: "Śrīmad-Bhagavad-Gītā-Svāminārāyaṇa-Bhāṣyam",
    transliteratedTitle: "Śrīmad-Bhagavad-Gītā-Svāminārāyaṇa-Bhāṣyam (श्रीमद्भगवद्गीता-स्वामिनारायणभाष्यम् — स्मृतिप्रस्थानम्)",
    author: "Mahāmahopādhyāya Bhadreśadāsa Svāmī",
    century: "21st Century CE (Contemporary Classical Bhāṣya)",
    school: "Svāminārāyaṇa Vedānta (Akṣara-Puruṣottama Darśana)",
    paramparaId: "swaminarayan",
    isNeoVedanta: false,
    schoolTag: "Smṛti Prasthāna (Bhagavad Gītā)",
    foundationalText: "Śrīmad Bhagavad Gītā (700 Verses in 18 Adhyāyas)",
    totalVersesOrSutras: "Complete 18 Chapters with Exhaustive Sanskrit Commentary",
    language: "Classical Sanskrit (Poetic and Dialectical Hermeneutics)",
    scriptStyle: "Devanāgarī & Roman IAST",
    description: "The classical Sanskrit Bhāṣya on the Bhagavad Gītā by Mahāmahopādhyāya Bhadreshdas Swami. Systematically illuminates the Gītā's core metaphysical triad of Kṣara, Akṣara, and Puruṣottama in Chapter 15 (Puruṣottama Yoga), as well as the path of becoming 'Brahmabhūta' in Chapter 18 to attain supreme Bhakti to Lord Puruṣottama.",
    refutationsDet: "Refutes the Advaitic interpretation that Kṣara and Akṣara are merely phenomenal conditions of a single undifferentiated Self, and rejects the notion that Bhakti is an inferior stepping-stone to knowledge.",
    supportsDet: "Provides the definitive exposition of Akṣarabrahman as the eternal unmanifest realm ('Avyakto 'vyaktāt sanātanaḥ' in 8.20) and demonstrates that Brahmabhāva (becoming Akṣararūpa) is the essential state for offering eternal Parā-Bhakti to Puruṣottama.",
    chapters: [
      {
        id: "sb-gita-15",
        chapterTitle: "Chapter 15: Puruṣottama Yoga — The Three Entities",
        chapterTitleSanskrit: "पञ्चदशोऽध्यायः — पुरुषोत्तमयोगः (क्षर-अक्षर-पुरुषोत्तम-विभागः)",
        summary: "The definitive revelation of Kṣara, Akṣarabrahman, and Supreme Puruṣottama.",
        verses: [
          {
            id: "sb-gita-15-16",
            number: "Bhagavad Gītā 15.16-17",
            title: "Dvāv Imau Puruṣau & Uttamaḥ Puruṣaḥ",
            mulaSanskrit: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च ।\nक्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ॥ १५.१६ ॥\nउत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः ।\nयो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ॥ १५.१७ ॥",
            mulaIast: "dvāv imau puruṣau loke kṣaraś cākṣara eva ca |\nkṣaraḥ sarvāṇi bhūtāni kūṭastho'kṣara ucyate || 15.16 ||\nuttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ |\nyo loka-trayam āviśya bibharty avyaya īśvaraḥ || 15.17 ||",
            padaccheda: "द्वौ, इमौ, पुरुषौ, लोके, क्षरः, च, अक्षरः, एव, च, क्षरः, सर्वाणि, भूतानि, कूटस्थः, अक्षरः, उच्यते, उत्तमः, पुरुषः, तु, अन्यः, परमात्मा, इति, उदाहृतः, यः, लोक-त्रयम्, आविश्य, बिभर्ति, अव्ययः, ईश्वरः",
            anvaya: "लोके क्षरः च अक्षरः एव च इति इमौ द्वौ पुरुषौ स्तः । सर्वाणि भूतानि क्षरः, कूटस्थः अक्षरः उच्यते । उत्तमः पुरुषः तु अन्यः यः परमात्मा इति उदाहृतः, यः अव्ययः ईश्वरः लोकत्रयम् आविश्य बिभर्ति ।",
            bhashyaExtract: "अत्र भगवता स्पष्टतया त्रीणि तत्त्वानि निरूपितानि — क्षरशब्देन बद्धात्मानः, अक्षरशब्देन नित्यमुक्तम् अक्षरब्रह्म, उत्तमपुरुषशब्देन च ताभ्यामुभाभ्यां सर्वथा भिन्नः परमात्मा परब्रह्म पुरुषोत्तमः । अयं भेदः पारमार्थिकः सनातनश्च ।",
            englishTranslation: "There are two orders of beings in this world: the perishable (Kṣara: all bound creatures) and the imperishable (Akṣara: the immutable Akṣarabrahman). But supreme above both is the Supreme Person (Uttama Puruṣa), designated as Paramātman, the immutable Lord who permeates and sustains the three worlds.",
            commentaryNotes: "Bhadreshdas Swami establishes that this verse proves an eternal, absolute ontological threefold distinction between bound souls, the imperishable Akṣarabrahman, and Supreme Puruṣottama."
          },
          {
            id: "sb-gita-15-18",
            number: "Bhagavad Gītā 15.18",
            title: "Puruṣottama Transcending Kṣara and Akṣara",
            mulaSanskrit: "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः ।\nअतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ॥ १५.१८ ॥",
            mulaIast: "yasmāt kṣaram atīto'ham akṣarād api cottamaḥ |\nato'smi loke vede ca prathitaḥ puruṣottamaḥ || 15.18 ||",
            padaccheda: "यस्मात्, क्षरम्, अतीतैः, अहम्, अक्षरात्, अपि, च, उत्तमः, अतः, अस्मि, लोके, वेदे, च, प्रथितः, पुरुषोत्तमः",
            anvaya: "यस्मात् अहं क्षरम् अतीतैः, अक्षरात् अपि च उत्तमः, अतः लोके वेदे च पुरुषोत्तमः इति प्रथितः अस्मि ।",
            bhashyaExtract: "यस्माद् अहं भगवान् पुरुषोत्तमः क्षरात् प्रकृतिसम्बद्धात् सर्वस्मादतीतः, मुक्तात्म-नित्यधामभूतात् अक्षराद् अपि उत्तमः श्रेष्ठः स्वातन्त्र्येण अधिष्ठाता च, तस्माद् वेदेषु लोकेषु च 'पुरुषोत्तमः' इति प्रसिद्धोऽस्मि ।",
            englishTranslation: "Because I transcend the perishable (bound creation) and am supreme even above the imperishable (Akṣarabrahman), therefore both in the world and in the Vedas I am proclaimed as Puruṣottama (the Supreme Person).",
            commentaryNotes: "The foundational climax of Gītā Chapter 15, confirming the distinct supremacy of Parabrahman."
          }
        ]
      },
      {
        id: "sb-gita-18",
        chapterTitle: "Chapter 18: Mokṣa Sannyāsa Yoga — Brahmabhāva & Parā Bhakti",
        chapterTitleSanskrit: "अष्टादशोऽध्यायः — मोक्षसंन्यासयोगः (ब्रह्मभूतः पराभक्तिम्)",
        summary: "Becoming Brahmarūpa to offer the highest loving devotion to Puruṣottama.",
        verses: [
          {
            id: "sb-gita-18-54",
            number: "Bhagavad Gītā 18.54",
            title: "Brahmabhūtaḥ Prasannātmā: Becoming Brahmarūpa",
            mulaSanskrit: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति ।\nसमः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् ॥ १८.५४ ॥",
            mulaIast: "brahma-bhūtaḥ prasannātmā na śocati na kāṅkṣati |\nsamaḥ sarveṣu bhūteṣu mad-bhaktiṁ labhate parām || 18.54 ||",
            padaccheda: "ब्रह्म-भूतः, प्रसन्न-आत्मा, न, शोचति, न, काङ्क्षति, समः, सर्वेषु, भूतेषु, मत्-भक्तिम्, लभते, पराम्",
            anvaya: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति, सर्वेषु भूतेषु समः सन् मत् पराम् भक्तिं लभते ।",
            bhashyaExtract: "अक्षरब्रह्म-साधर्म्यापन्नः 'ब्रह्मभूतः' सन् पुरुषोत्तमस्य भगवतः 'परां भक्तिम्' अहैतुकीम् अनन्यशरणभाव-लक्षणां लभते । ब्रह्मभावापत्तिः भक्तेः प्रतिबन्धिका न भवति, प्रत्युत परमोत्कृष्टभक्तेः एकाकी आधारभूता वर्तते ।",
            englishTranslation: "Having attained the nature of Brahman (Akṣarabrahman), joyful in spirit, neither grieving nor craving, looking equally upon all beings, he attains supreme, unalloyed devotion (Parā Bhakti) unto Me (Puruṣottama).",
            commentaryNotes: "Proves that becoming 'Brahmabhūta' is not the cessation of devotion, but the essential spiritual status required to offer supreme, pure Bhakti to Parabrahman."
          }
        ]
      }
    ]
  },
  {
    id: "swaminarayan-siddhanta-sudha",
    title: "Svāminārāyaṇa-Siddhānta-Sudhā",
    transliteratedTitle: "Svāminārāyaṇa-Siddhānta-Sudhā (स्वामिनारायण-सिद्धान्त-सुधा — वादग्रन्थः)",
    author: "Mahāmahopādhyāya Bhadreśadāsa Svāmī",
    century: "21st Century CE (Contemporary Sanskrit Dialectical Canon)",
    school: "Svāminārāyaṇa Vedānta (Akṣara-Puruṣottama Darśana)",
    paramparaId: "swaminarayan",
    isNeoVedanta: false,
    schoolTag: "Dialectical Treatise (Vāda-Grantha)",
    foundationalText: "Systematic Epistemological & Ontological Exposition of Akṣara-Puruṣottama Darśana",
    totalVersesOrSutras: "Comprehensive Classical Dialectical Treatise in 7 Kāṇḍas / Prakaraṇas",
    language: "Rigorous Classical Sanskrit (Vākyārtha & Dialectical Logic)",
    scriptStyle: "Devanāgarī & Roman IAST",
    description: "The definitive dialectical masterwork (Vāda-Grantha) authored by Mahāmahopādhyāya Bhadreshdas Swami, structured in the rigorous style of Sri Harṣa's Khaṇḍanakhaṇḍakhādya, Madhusūdana Sarasvatī's Advaitasiddhi, and Vedānta Deśika's Śatadūṣaṇī. Systematically expounds the Pramāṇa-Paddhati (epistemology), establishes the Pañca-Tattva ontology (Jīva, Īśvara, Māyā, Akṣarabrahman, Parabrahman), refutes counter-theories (Pūrvapakṣas), and formulates the theological proofs for the manifest Akṣarabrahman Guru lineage.",
    refutationsDet: "Refutes Advaitic Vivartavāda, Bhedābheda identity-in-difference compromises, and mechanical Dvaita separation without Brahmarūpatā.",
    supportsDet: "Provides complete syllogistic proofs demonstrating that Akṣara is both the personal transcendental servitor and the formless all-pervasive abode, and that spiritual liberation requires becoming Akṣararūpa.",
    chapters: [
      {
        id: "sss-tattva-prakarana",
        chapterTitle: "Prakaraṇa 1: Pañca-Tattva-Siddhānta (Ontological Verification)",
        chapterTitleSanskrit: "प्रथमं प्रकरणम् — पञ्चतत्त्व-सिद्धान्त-निरूपणम्",
        summary: "Syllogistic and scriptural proofs establishing the five distinct eternal entities.",
        verses: [
          {
            id: "sss-v1",
            number: "Siddhānta-Sudhā Kārikā 1.1",
            title: "The Five Eternal Ontological Realities",
            mulaSanskrit: "जीवश्चेशस्तथा माया ब्रह्म चाक्षरसंज्ञकम् ।\nपरं ब्रह्म तथा चेति तत्त्वानि कथितानि हि ॥ १.१ ॥",
            mulaIast: "jīvaś ceśas tathā māyā brahma cākṣara-saṁjñakam |\nparaṁ brahma tathā ceti tattvāni kathitāni hi || 1.1 ||",
            padaccheda: "जीवः, च, ईशः, तथा, माया, ब्रह्म, च, अक्षर-संज्ञकम्, परम्, ब्रह्म, तथा, च, इति, तत्त्वानि, कथितानि, हि",
            anvaya: "जीवः, ईशः, तथा माया, अक्षरसंज्ञकं ब्रह्म, तथा च परं ब्रह्म इति पञ्च तत्त्वानि हि कथितानि ।",
            bhashyaExtract: "एतानि पञ्च तत्त्वानि अनादीनि अनन्तानि परस्परं स्वरूपतो धर्मतश्च भिन्नानि वर्तन्ते । नैतेषां कदापि आत्यन्तिकः परस्परलयो भवति । परब्रह्म स्वामिनारायणः एतेषां सर्वेषां नियन्ता स्वामी च ।",
            englishTranslation: "Jīva (finite soul), Īśvara (cosmic ruler), Māyā (primordial material power), Akṣarabrahman (the eternal divine abode and supreme devotee), and Parabrahman (the Supreme Sovereign Lord) are the five eternal ontological realities established in all genuine scriptures.",
            commentaryNotes: "Mahāmahopādhyāya Bhadreshdas Swami provides rigorous logical syllogisms (Anumāna) and scriptural citations demonstrating that these five entities are eternally distinct in their intrinsic essence (Svarūpa) and attributes (Guṇa)."
          }
        ]
      }
    ]
  },
  {
    id: "vachanamrut",
    title: "Vachanāmrut & Shikshāpatrī",
    transliteratedTitle: "Vachanāmrut (वचनामृतम् एवं शिक्षापत्री)",
    author: "Bhagavān Svāminārāyaṇa",
    century: "19th Century CE (1819–1829 CE)",
    school: "Svāminārāyaṇa Vedānta",
    paramparaId: "swaminarayan",
    isNeoVedanta: false,
    schoolTag: "Foundational Canon of Swaminarayan Sampradaya",
    foundationalText: "273 Recorded Discourses & 212 Sanskrit Ethical Injunctions",
    totalVersesOrSutras: "273 Vachanāmruts in 10 Sections + 212 Shikshāpatrī Ślokas",
    language: "Gujarati & Classical Sanskrit",
    scriptStyle: "Devanāgarī & Gujarati Script",
    description: "The primary scripture of the Swaminarayan Sampradāya, containing the authenticated transcript of 273 philosophical and spiritual discourses delivered by Bhagwan Swaminarayan between 1819 and 1829 across Gujarat. The text was recorded in real time and verified by four senior Paramahamsas (Gopalanand, Muktanand, Nityanand, and Shuk Muni).",
    refutationsDet: "Refutes moral laxity, pseudo-monism that excuses unethical behavior, and the destruction of individual consciousness in liberation.",
    supportsDet: "Articulates the necessity of Ekāntika Dharma, total purity of mind and body, devotion with knowledge of God's majesty (Māhātmya-Jñāna), and finding refuge in the manifest Satpurusha (Gunatit Guru).",
    chapters: [
      {
        id: "vac-gad-1-71",
        chapterTitle: "Gadhada I-71: The Five Eternal Entities",
        chapterTitleSanskrit: "गढडा प्रथम प्रकरणम् — एकसप्ततितमं वचनामृतम् (पञ्चतत्त्वानि)",
        summary: "Bhagwan Swaminarayan defines the five eternally distinct ontological realities.",
        verses: [
          {
            id: "vac-v1",
            number: "Gadhada I-71 Extract",
            title: "Distinction of Jīva, Īśvara, Māyā, Brahman, and Parabrahman",
            mulaSanskrit: "जीव ईश्वरो माया ब्रह्म परब्रह्म च इति पञ्चतत्त्वानि अनादीनि परस्परं भिन्नानि च सन्ति ।",
            mulaIast: "jīva īśvaro māyā brahma parabrahma ca iti pañca-tattvāni anādīni parasparaṁ bhinnāni ca santi |",
            padaccheda: "जीवः, ईश्वरः, माया, ब्रह्म, परब्रह्म, च, इति, पञ्च-तत्त्वानि, अनादीनि, परस्परम्, भिन्नानि, च, सन्ति",
            anvaya: "जीवः, ईश्वरः, माया, ब्रह्म, परब्रह्म च इति पञ्चतत्त्वानि अनादीनि परस्परं भिन्नानि सन्ति ।",
            bhashyaExtract: "Bhagwan Swaminarayan states: 'In all the Vedas, Purāṇas, Itihāsas, and Smṛtis, it is mentioned that Jīva, Īśvara, Māyā, Brahman, and Parabrahman are five eternal entities. Brahman is the servant of Parabrahman and the abode of Parabrahman.'",
            englishTranslation: "Jīva, Īśvara, Māyā, Akṣarabrahman, and Parabrahman are five eternal entities, distinct from one another. Jīvas are infinite in number; Īśvaras govern cosmic cycles; Māyā is primordial darkness; Akṣarabrahman is the divine abode; and Parabrahman is the Supreme Lord.",
            commentaryNotes: "This fundamental discourse forms the ontological bedrock of the Akshar-Purushottam philosophy."
          }
        ]
      }
    ]
  },
  // ==========================================
  // VIJÑĀNA VEDĀNTA & CONTEMPORARY SCHOLARSHIP
  // ==========================================
  {
    id: "vijnana-vedanta-infinite-paths",
    title: "Infinite Paths to Infinite Reality: Vijñāna Vedānta",
    transliteratedTitle: "Infinite Paths to Infinite Reality (विज्ञानवेदान्तः — अनन्तपथाः अनन्तसत्याय)",
    author: "Ayon Maharaj (Swami Medhananda)",
    century: "21st Century CE (Oxford University Press, 2018)",
    school: "Navyānubhava Vedānta (Vijñāna Vedānta Epistemology)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Ramakrishna-Vivekananda Academic Philosophy",
    foundationalText: "Śrī Śrī Rāmakṛṣṇa Kathāmṛta & Cross-Cultural Epistemology",
    totalVersesOrSutras: "Monograph & Peer-Reviewed Research Series (Oxford / Bloomsbury / IJHS)",
    language: "Analytical English with Rigorous Bengali/Sanskrit Philology",
    scriptStyle: "English & Classical Sanskrit",
    description: "The seminal philosophical reconstruction of Sri Ramakrishna's thought as a distinct, sophisticated school of Vedānta termed 'Vijñāna Vedānta'. Ayon Maharaj (Swami Medhananda) demonstrates that Ramakrishna was not merely an unsystematic mystic or orthodox Advaitin, but a rigorous philosopher whose experiential realization of Vijñāna provides a nonsectarian, non-relativist framework for religious pluralism, reconciling the Impersonal Absolute (Nirguṇa) with the Personal God (Saguṇa) and the Nitya (Transcendent) with Līlā (Dynamic Play).",
    refutationsDet: "Refutes the colonial/modernist misinterpretation that Ramakrishna advocated shallow relativism ('all religions are equal without distinction') or simple Śaṅkaran world-negating illusionism.",
    supportsDet: "Establishes Vijñāna as the consummate spiritual stage beyond Jñāna: neti neti (negation) leads to Nirvikalpa Samādhi, while iti iti (affirmation) reveals that Brahman has become all living beings, nature, and the cosmos.",
    chapters: [
      {
        id: "vv-ch-3",
        chapterTitle: "Chapter 3: Jñāna and Vijñāna — Two Levels of Realization",
        chapterTitleSanskrit: "तृतीयोऽध्यायः — ज्ञानं विज्ञानं च (उभयस्तर-साक्षात्कारः)",
        summary: "Analyzing Sri Ramakrishna's distinction between the Jñānī (the seeker of non-dual negation) and the Vijñānī (the master of integral divine vision).",
        verses: [
          {
            id: "vv-v1",
            number: "Kathamrita Extract (Vijñāna Definition)",
            title: "The Stage of Vijñāna: Embracing Both Nitya and Līlā",
            mulaSanskrit: "ज्ञानी 'नेति नेति' इति विचारेण ब्रह्म प्राप्नोति । तदनन्तरं विज्ञानी चक्षुषी उन्मील्य सर्वत्र ब्रह्मैव पश्यति — नित्यं च लीलां च उभयमेव सत्यम् ।",
            mulaIast: "jñānī 'neti neti' iti vicāreṇa brahma prāpnoti | tad-anantaraṁ vijñānī cakṣuṣī unmīlya sarvatra brahmaiva paśyati — nityaṁ ca līlāṁ ca ubhayam eva satyam |",
            padaccheda: "ज्ञानी, नेति, नेति, इति, विचारेण, ब्रह्म, प्राप्नोति, तदनन्तरम्, विज्ञानी, चक्षुषी, उन्मील्य, सर्वत्र, ब्रह्म, एव, पश्यति, नित्यम्, च, लीलम्, च, उभयम्, एव, सत्यम्",
            anvaya: "ज्ञानी 'नेति नेति' इति विचारेण ब्रह्म प्राप्नोति । तदनन्तरं विज्ञानी चक्षुषी उन्मील्य सर्वत्र ब्रह्मैव पश्यति — नित्यं च लीलां च उभयं सत्यम् ।",
            bhashyaExtract: "As Ayon Maharaj (Swami Medhananda) articulates: 'The Jñānī ascends to the roof by discarding the stairs (Neti, Neti: not this, not this). But the Vijñānī, upon reaching the roof, realizes that the stairs are made of the very same brick, lime, and sand as the roof itself. The Vijñānī opens his eyes to behold Brahman manifest as the world and all beings.'",
            englishTranslation: "The Jñānī attains Brahman through the negative discrimination of 'not this, not this' (Neti Neti). But thereafter, the Vijñānī opens their eyes to behold Brahman everywhere — realizing that both the Transcendent (Nitya) and the Cosmic Play (Līlā) belong to the one Supreme Divine.",
            commentaryNotes: "Vijñāna Vedānta bridges non-dual transcendence with cosmic adoration, granting full ontological reality to both Personal and Impersonal Divine aspects."
          },
          {
            id: "vv-v2",
            number: "Epistemology of Prayer (Ayon Maharaj)",
            title: "Epistemic Attunement: Hearing the Ant's Anklets",
            mulaSanskrit: "सर्वान्तर्यामी परमात्मा पिपीलिकाया अपि नूपुर-ध्वनिं शृणोति — प्रार्थना नाम न तु केवलं याचना, अपितु सर्वचेतन-संवेदनम् ।",
            mulaIast: "sarvāntaryāmī paramātmā pipīlikāyā api nūpura-dhvaniṁ śṛṇoti — prārthanā nāma na tu kevalaṁ yācanā, apitu sarva-cetana-saṁvedanam |",
            padaccheda: "सर्व-अन्तर्यामी, परमात्मा, पिपीलिकायाः, अपि, नूपुर-ध्वनिम्, शृणोति, प्रार्थना, नाम, न, तु, केवलम्, याचना, अपितु, सर्व-चेतन-संवेदनम्",
            anvaya: "सर्वान्तर्यामी परमात्मा पिपीलिकायाः अपि नूपुरध्वनिं शृणोति — प्रार्थना नाम केवलं याचना न, अपितु सर्वचेतनसंवेदनम् ।",
            bhashyaExtract: "In Vijñāna Vedānta epistemology as articulated by Ayon Maharaj, God's omniscience is so exquisitely intimate that He hears even the faint sound of an ant's footsteps. Prayer is an epistemic tuning of the individual heart to this omnipresent listener.",
            englishTranslation: "The all-pervading Indweller hears even the tinkle of the anklets of an ant. True prayer is not mere petitionary begging, but an intimate epistemological attunement to Universal Consciousness.",
            commentaryNotes: "Highlights the rich phenomenology of consciousness and cross-cultural realism explored in Vijñāna Vedānta."
          }
        ]
      }
    ]
  },
  // ==========================================
  // CINMAYAPRATYAKṢAVĀDA (ŚRĪMAT ANIRVĀN)
  // ==========================================
  {
    id: "anirvan-veda-mimamsa",
    title: "Veda-Mīmāṁsā & Cinmayapratyakṣavāda",
    transliteratedTitle: "Veda-Mīmāṁsā (वेदमीमांसा एवं चिन्मयप्रत्यक्षवादः)",
    author: "Śrīmat Anirvān (Nirvānānanda Saraswatī)",
    century: "20th Century CE (1961–1970, Rabindra Puraskar)",
    school: "Navyānubhava Vedānta (Vedic Cinmaya-Pratyakṣa)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Vedic Mystic Hermeneutics",
    foundationalText: "Ṛgveda Saṁhitā & Principal Upaniṣads",
    totalVersesOrSutras: "3 Monumental Volumes on Vedic Epistemology and Esotericism",
    language: "Sublime Classical Bengali with Exhaustive Vedic Sanskrit Grammar",
    scriptStyle: "Devanāgarī & Bengali Script",
    description: "The magnum opus of Śrīmat Anirvān, recognized with the Rabindra Puraskar as one of the most profound Indian contributions to Vedic scholarship in modern history. Anirvān propounds 'Cinmaya-Pratyakṣavāda' (the doctrine of luminous direct spiritual perception) to unveil the esoteric, mystical core of the Vedas. He demonstrates that the Ṛgvedic Mantras are not primitive pastoral chants or barren sacrificial formulas, but direct transcripts of supramental consciousness experienced by the ancient Ṛṣis (Mantra-Draṣṭāraḥ).",
    refutationsDet: "Refutes 19th-century colonial reductionist Indology that treated the Vedas as polytheistic nature mythology or mechanical ritualism.",
    supportsDet: "Establishes the continuity between Ṛgvedic symbolism, Upaniṣadic Brahmavidyā, Tantric Antaryoga, and Integral Vedānta through the lens of Cinmaya Pratyakṣa.",
    chapters: [
      {
        id: "vm-vol-1",
        chapterTitle: "Volume 1: Cinmaya-Pratyakṣa and the Ṛṣi's Vision",
        chapterTitleSanskrit: "प्रथमखण्डम् — चिन्मयप्रत्यक्षम् एवं ऋषीणां दिव्यदृष्टिः",
        summary: "The supramental faculty by which the Vedic seer perceives transcendent Truth.",
        verses: [
          {
            id: "vm-v1",
            number: "Ṛgveda 1.164.46 (Anirvān Exegesis)",
            title: "Ekaṁ Sad Viprā Bahudhā Vadanti: The Integral Vision",
            mulaSanskrit: "इन्द्रं॑ मि॒त्रं वरु॑णम॒ग्निमा॑हु॒रथो॑ दि॒व्यः स सु॑प॒र्णो ग॒रुत्मान् ।\nएकं॒ सद् विप्रा॑ बहु॒धा व॑दन्त्य॒ग्निं य॒मं मा॑त॒रिश्वा॑नमाहुः ॥ १.१६४.४६ ॥",
            mulaIast: "indraṁ mitraṁ varuṇam agnim āhur atho divyaḥ sa suparṇo garutmān |\nekaṁ sad viprā bahudhā vadanty agniṁ yamaṁ mātariśvānam āhuḥ || 1.164.46 ||",
            padaccheda: "इन्द्रम्, मित्रम्, वरुणम्, अग्निम्, आहुः, अथो, दिव्यः, सः, सुपर्णः, गरुत्मान्, एकम्, सत्, विप्राः, बहुधा, वदन्ति, अग्निम्, यमम्, मातरिश्वानम्, आहुः",
            anvaya: "इन्द्रं मित्रं वरुणम् अग्निम् आहुः, अथो सः दिव्यः सुपर्णः गरुत्मान् । एकं सत् विप्राः बहुधा वदन्ति, अग्निं यमं मातरिश्वानम् आहुः ।",
            bhashyaExtract: "Śrīmat Anirvān writes in Veda-Mīmāṁsā: 'Cinmaya-Pratyakṣa is the inner lightning-flash of pure consciousness wherein the seer beholds the undivided One Reality vibrating behind all divine names and forms. The Veda is the fountainhead of all subsequent Indian yoga, Tantra, and Vedānta.'",
            englishTranslation: "They call Him Indra, Mitra, Varuṇa, Agni, and He is the celestial golden-winged Garutmān. The Truth is One; the enlightened seers express It in diverse ways — calling It Agni, Yama, and Mātariśvan.",
            commentaryNotes: "Anirvān's Cinmaya-Pratyakṣavāda proves that ancient Vedic vision was the direct luminous experience of supreme non-dual reality in manifold cosmic manifestations."
          }
        ]
      }
    ]
  },
  // ==========================================
  // KRISHNA CHANDRA BHATTACHARYYA (K.C. BHATTACHARYA)
  // ==========================================
  {
    id: "kc-bhattacharya-subject-freedom",
    title: "The Subject as Freedom & Studies in Vedantism",
    transliteratedTitle: "The Subject as Freedom (आत्मस्वातन्य्र्यवादः एवं वेदान्त-विमर्शः)",
    author: "Krishna Chandra Bhattacharyya (K.C. Bhattacharya)",
    century: "20th Century CE (1875–1949, Published 1930)",
    school: "Navyānubhava Vedānta (Phenomenology of Subjectivity)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Modern Analytical Advaita",
    foundationalText: "Advaita Vedānta & Transcendental Epistemology",
    totalVersesOrSutras: "Foundational Monograph & Collected Philosophical Papers",
    language: "Philosophical English & Sanskrit Terminology",
    scriptStyle: "Roman & Devanāgarī Glosses",
    description: "The seminal philosophical masterwork of Krishna Chandra Bhattacharyya (1875–1949), former George V Professor of Philosophy at the University of Calcutta. Bhattacharyya executes a pioneering phenomenological reconstruction of Advaita Vedānta, articulating the Self (Cit/Ātman) as 'the Subject as Freedom'. He demonstrates that consciousness is never an objective datum or relational entity, but progressive de-objectification (freedom from bodily, psychic, and conceptual constraints). In 'Studies in Vedantism' and 'Swaraj in Ideas', he championed rigorous intellectual autonomy and conceptual decolonization.",
    refutationsDet: "Refutes naturalistic reductions of consciousness, Western empirical objectivism, and the misconception that Advaitic Māyā is a speculative cosmological dogma rather than the 'Indefinite' in subjective experience.",
    supportsDet: "Establishes the stages of subjective freedom (Bodily Subjectivity, Psychic Subjectivity, Spiritual Subjectivity), the logic of the Indefinite (Anirvacanīya), and the triple alternation of the Absolute (Truth, Freedom, Value).",
    chapters: [
      {
        id: "kcb-ch-1",
        chapterTitle: "Chapter 1: The Notion of Subjectivity and the Stages of Freedom",
        chapterTitleSanskrit: "प्रथमोऽध्यायः — विषयिणः स्वातन्त्र्यम् एवं मुक्तिसोपानानि",
        summary: "Consciousness conceiving itself through progressive dissociation from the object.",
        verses: [
          {
            id: "kcb-v1",
            number: "The Subject as Freedom § 1-4",
            title: "The Subject as Pure Freedom from the Object",
            mulaSanskrit: "द्रष्टा दृशिमात्रः शुद्धोऽपि प्रत्ययानुपश्यः । आत्मनः स्वरूपं स्वातन्त्र्यमेव न तु विषयभावः ॥",
            mulaIast: "draṣṭā dṛśi-mātraḥ śuddho'pi pratyayānupaśyaḥ |\nātmanaḥ svarūpaṁ svātantryam eva na tu viṣaya-bhāvaḥ ||",
            padaccheda: "द्रष्टा, दृशि-मात्रः, शुद्धः, अपि, प्रत्यय-अनुपश्यः, आत्मनः, स्वरूपम्, स्वातन्त्र्यम्, एव, न, तु, विषय-भावः",
            anvaya: "द्रष्टा शुद्धः अपि दृशिमात्रः प्रत्ययानुपश्यः । आत्मनः स्वरूपं स्वातन्त्र्यमेव, न तु विषयभावः ।",
            bhashyaExtract: "K.C. Bhattacharyya writes: 'The subject is freedom itself. In knowing an object, the subject is in a sense identified with it, but in the reflexive consciousness of knowing, it feels its detachment from the object. Vedānta is the systematic fruition of this felt freedom: realizing the Self not as a thing meant by words, but as that unmeant, unobjective Reality before which all objectivity vanishes.'",
            englishTranslation: "The Subject is essentially freedom. The spiritual journey of Vedānta is not the acquisition of a new objective datum, but the progressive realization of the Self's intrinsic freedom from bodily, mental, and conceptual objectivity.",
            commentaryNotes: "K.C. Bhattacharyya's revolutionary synthesis unites classical Advaitic Anirvacanīyatā with rigorous modern phenomenology, influencing generations of 20th-century Indian philosophers."
          }
        ]
      }
    ]
  },
  // ==========================================
  // SĀRASVATA SAMANVAYA (SWAMI NIGAMANANDA)
  // ==========================================
  {
    id: "nigamananda-vedanta-viveka",
    title: "Vedānta Viveka & Sārasvata Granthāvalī",
    transliteratedTitle: "Vedānta Viveka (वेदान्त-विवेकः एवं सारस्वत-ग्रन्थावली)",
    author: "Swami Nigamananda Saraswati Paramahamsa",
    century: "20th Century CE (1880–1935 CE)",
    school: "Navyānubhava Vedānta (Sārasvata Samanvaya)",
    paramparaId: "neo_vedanta",
    isNeoVedanta: true,
    schoolTag: "Saraswata Math / Daśanāmī Lineage",
    foundationalText: "Vedānta Viveka, Yogī Guru, Jñānī Guru, Tāntrika Guru, Premika Guru",
    totalVersesOrSutras: "Comprehensive Philosophical Treatises & Sādhana Manuals",
    language: "Philosophical Bengali & Sanskrit",
    scriptStyle: "Devanāgarī & Bengali Script",
    description: "The complete philosophical and practical spiritual corpus of Swami Nigamananda Saraswati, the great master of the Saraswatī Daśanāmī order. Nigamananda synthesized the four principal paths of Indian spirituality into the immortal principle: 'Jñāne Śaṅkara, Bhāve Gaurāṅga, Yoge Patāñjali' (Advaita knowledge of Śaṅkarācārya in philosophical understanding, divine ecstasy of Śrī Caitanya Mahāprabhu in emotion, and Patāñjali-Tantra in meditative discipline). His 'Vedānta Viveka' stands as a luminous dialectical exposition of non-duality lived in everyday household and monastic life.",
    refutationsDet: "Refutes the compartmentalization of Jñāna and Bhakti, rejecting dry intellectualism divorced from divine love as well as emotional fanaticism lacking discriminative wisdom.",
    supportsDet: "Provides the complete harmony of Advaita Nirvikalpa realization, Kundalini Tantric mastery, Sahaja Prema-Bhakti, and the foundation of ideal householder spirituality (Ādarśa Gṛhī).",
    chapters: [
      {
        id: "vv-nigam-ch-1",
        chapterTitle: "Chapter 1: The Synthesis of Non-Duality and Divine Love",
        chapterTitleSanskrit: "प्रथमोऽध्यायः — अद्वैतज्ञानस्य प्रेमभक्तेश्च महासमन्वयः",
        summary: "How the liberated soul abides in Śaṅkara's Advaita while reveling in Gaurāṅga's Prema.",
        verses: [
          {
            id: "vv-nigam-v1",
            number: "Vedānta Viveka Extract",
            title: "Jñāne Śaṅkara, Bhāve Gaurāṅga: The Sārasvata Ideal",
            mulaSanskrit: "ज्ञाने शङ्करवद् भूत्वा भावे श्रीगौरसन्निभः । कर्मणि योगयुक्तश्च स वै सारस्वतो यतिः ॥",
            mulaIast: "jñāne śaṅkara-vad bhūtvā bhāve śrī-gaura-sannibhaḥ |\nkarmaṇi yoga-yuktaś ca sa vai sārasvato yatiḥ ||",
            padaccheda: "ज्ञाने, शङ्कर-वत्, भूत्वा, भावे, श्री-गौर-सन्निभः, कर्मणि, योग-युक्तः, च, सः, वै, सारस्वतः, यतिः",
            anvaya: "ज्ञाने शङ्करवत् भूत्वा, भावे श्रीगौरसन्निभः, कर्मणि च योगयुक्तः, स वै सारस्वतः यतिः भवति ।",
            bhashyaExtract: "Swami Nigamananda writes: 'True liberation does not end with the negation of the world in Nirvikalpa Samādhi. After realizing the absolute non-duality of Brahman (Jñāne Śaṅkara), the aspirant dives into the ocean of transcendental Divine Love (Bhāve Gaurāṅga), seeing the Lord in every creature and serving the world with detached yogic mastery (Yoge Patāñjali).'",
            englishTranslation: "Being like Śaṅkara in non-dual discriminative wisdom, like Śrī Gaurāṅga in ecstatic divine love, and established in yoga during all worldly actions — such a seeker is a true Sāraswata spiritual master.",
            commentaryNotes: "The quintessential synthesis of Swami Nigamananda, harmonizing the highest peaks of classical Advaita and devotional Gauḍīya Vedānta."
          }
        ]
      }
    ]
  }
];
