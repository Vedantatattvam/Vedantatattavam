/**
 * Academic Dataset: A History of Early Vedānta Philosophy
 * Grounded in the Monumental Research of Prof. Hajime Nakamura (中村 元, 1912–1999)
 * Source Reference: "A History of Early Vedānta Philosophy" (Volumes 1–4)
 * English Translation by Trevor Leggett, Sengaku Mayeda, Taitetsu Unno, et al.
 * Published by Motilal Banarsidass / Harvard-Yenching Institute Monograph Series.
 * Archive Reference: https://archive.org/details/AHistoryOfEarlyVedantaPhilosophyHajimeNakamura
 */

export interface PreSankaraThinker {
  id: string;
  name: string;
  devanagariName: string;
  centuryPeriod: string;
  philosophicalSchool: string;
  coreDoctrine: string;
  epistemologyAndOntology: string;
  citationsInLaterTraditions: string[];
  keyExtantFragmentsOrWorks: string[];
  nakamuraAnalysis: string;
}

export interface EarlyVedantaSutraTeacher {
  name: string;
  devanagariName: string;
  sutraReferences: string[];
  viewOnJivaBrahmanRelation: string;
  nakamuraHistoricalAssessment: string;
}

export interface EarlyVedantaSourceVolume {
  volumeNumber: number;
  volumeTitle: string;
  subtitle: string;
  keyThemes: string[];
  historicalPeriodCovered: string;
  coreFindings: string;
  chapters: {
    chapterNumber: string;
    title: string;
    summary: string;
    keyInsights: string[];
  }[];
}

export interface EarlyVedantaBuddhistJainaCitation {
  sourceWork: string;
  author: string;
  century: string;
  tradition: "Buddhist" | "Jaina";
  sectionOrChapter: string;
  vedanticViewDescribed: string;
  nakamuraCommentary: string;
}

export interface EarlyVedantaResearch {
  workTitle: string;
  japaneseTitle: string;
  author: string;
  authorBio: string;
  archiveUrl: string;
  publicationDetails: string;
  epigraphSanskrit: string;
  epigraphIAST: string;
  epigraphTranslation: string;
  monographOverview: string;
  historicalSignificance: string;
  volumes: EarlyVedantaSourceVolume[];
  preSankaraThinkers: PreSankaraThinker[];
  sutraDisputants: EarlyVedantaSutraTeacher[];
  externalCitations: EarlyVedantaBuddhistJainaCitation[];
}

export const EARLY_VEDANTA_RESEARCH: EarlyVedantaResearch = {
  workTitle: "A History of Early Vedānta Philosophy",
  japaneseTitle: "初期のヴェーダーンタ哲学史 (Shoki no Vēdānta Tetsugakushi)",
  author: "Prof. Hajime Nakamura (中村 元, 1912–1999)",
  authorBio: "Distinguished Professor of Indian and Comparative Philosophy at the University of Tokyo, Member of the Japan Academy, and Honorary Fellow of the Indian Council for Cultural Relations. One of the 20th century's foremost philologists of Sanskrit, Pāli, Tibetan, and Chinese Indological sources.",
  archiveUrl: "https://archive.org/details/AHistoryOfEarlyVedantaPhilosophyHajimeNakamura",
  publicationDetails: "Motilal Banarsidass Publishers (Religions of Asia Series) / Harvard-Yenching Institute Monograph Series. Translated into English by Trevor Leggett, Sengaku Mayeda, Taitetsu Unno, et al.",
  epigraphSanskrit: "सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम् । तदैक्षत बहु स्यां प्रजायेयेति तत्तेजोऽसृजत ॥",
  epigraphIAST: "Sad eva somyedam agra āsīd ekam evādvitiyam | Tad aikṣata bahu syāṁ prajāyeyeti tat tejo'sṛjata ||",
  epigraphTranslation: "'In the beginning, my dear, this universe was Being alone, one only without a second. It thought: May I be many, may I grow forth. It created fire.' — Chāndogya Upaniṣad (VI.ii.1–3)",
  monographOverview: "Hajime Nakamura's four-volume opus represents the first exhaustive, scientifically grounded historical reconstruction of the Pre-Śaṅkara and Early Vedānta period. By rigorously mining not only the Brahmanical Prasthānatrayī and sub-commentaries, but also Mahāyāna Buddhist treatises (such as Bhāviveka's Madhyamakahṛdayakārikā and Śāntarakṣita's Tattvasaṅgraha) and early Jaina canonical texts (such as Mallavādin's Dvādaśāranayacakra), Nakamura rescued a dozen forgotten pre-Śaṅkara Vedāntic masters and demonstrated how early Vedānta evolved from Upaniṣadic intuitions through Bhedābheda and early Śabdādvaita to classical Advaita.",
  historicalSignificance: "Prior to Nakamura's research, standard academic narratives often treated Vedānta as jumping straight from the Upaniṣads to Ādi Śaṅkara with Gauḍapāda as a lone intermediary. Nakamura proved that between 300 BCE and 700 CE, there flourished a rich, vibrant landscape of Vedāntic philosophical inquiry characterized by competing hermeneutical schools (Bhedābhedavāda, Pariṇāmavāda, Śabdādvaita, and early Advaita) led by illustrious thinkers such as Upavarṣa, Bodhāyana, Ṭaṅka (Brahmānandin), Dramiḍācārya, Bhartṛprapañca, Bhartṛhari, and Maṇḍana Miśra.",

  volumes: [
    {
      volumeNumber: 1,
      volumeTitle: "Volume 1: The Scope of Early Vedānta & The Upaniṣadic Core",
      subtitle: "The Formulation of the Upaniṣadic Worldview and Early Philosophical Milieu",
      historicalPeriodCovered: "800 BCE – 200 BCE",
      keyThemes: [
        "Chronological Stratification of the Principal Upaniṣads",
        "The Evolution of the Concept of Brahman and Ātman",
        "Early Theories of Creation (Sṛṣṭi) and Cosmogony",
        "The Germination of Māyā and Avidyā",
        "Relation between Upaniṣadic Seers and Vedic Ritualism (Mīmāṁsā)"
      ],
      coreFindings: "Nakamura establishes a rigorous philological chronology for the Upaniṣads, dividing them into three distinct eras: (1) Older Prose Upaniṣads (Bṛhadāraṇyaka, Chāndogya, Taittirīya, Aitareya, Kauṣītaki), (2) Metric Upaniṣads (Kaṭha, Īśa, Śvetāśvatara, Muṇḍaka, Mahānārāyaṇa), and (3) Later Prose Upaniṣads (Praśna, Maitrī, Māṇḍūkya). He demonstrates that early Vedāntic philosophy was fundamentally realistic-monistic, interpreting the world as a genuine emanation (Pariṇāma) of Brahman rather than pure illusion.",
      chapters: [
        {
          chapterNumber: "Vol 1, Part I",
          title: "Introduction: What is Vedānta?",
          summary: "Defines the historical scope of Vedānta, the meaning of the term 'Vedānta' across Vedic literature, and the hermeneutical method required to disentangle pre-Śaṅkara philosophy from post-Śaṅkara scholastic overlays.",
          keyInsights: [
            "Vedānta originally designated the concluding portions of the Veda (Upaniṣads) before signifying a formal philosophical Darśana.",
            "The early Vedāntins saw no absolute contradiction between the ritualistic Karma-kāṇḍa and the meditative Jñāna-kāṇḍa.",
            "Nakamura establishes the methodological necessity of cross-referencing external heterodox (Buddhist and Jaina) polemics."
          ]
        },
        {
          chapterNumber: "Vol 1, Part II",
          title: "The Historical Development of Upaniṣadic Thought",
          summary: "Detailed linguistic and doctrinal analysis tracing the evolution of fundamental concepts: Brahman, Ātman, Sat, Puruṣa, and the transition from ritual sacrificial symbolism to internal psychological contemplation.",
          keyInsights: [
            "The older Upaniṣads (Chāndogya, Bṛhadāraṇyaka) teach a pantheistic or panentheistic non-duality with cosmic transformation.",
            "The concept of 'Māyā' in the Ṛgveda and older Upaniṣads meant divine creative power (*prajñā* / *kratu*), not illusion; illusionary connotation matured later under Mādhyamika dialogue.",
            "Early Upaniṣadic seers like Yājñavalkya, Uddālaka Āruṇi, and Śāṇḍilya formulated distinct conceptual approaches."
          ]
        }
      ]
    },
    {
      volumeNumber: 2,
      volumeTitle: "Volume 2: Pre-Śaṅkara Vedānta Thinkers & The Lost Commentaries",
      subtitle: "Reconstruction of the Masters Quoted by Śaṅkara, Rāmānuja, Bhāskara, and Yamunācārya",
      historicalPeriodCovered: "200 CE – 750 CE",
      keyThemes: [
        "Upavarṣa: The Grand Vṛttikāra on Mīmāṁsā and Vedānta",
        "Bodhāyana: The Expansive Vṛtti and Visiṣṭādvaita Roots",
        "Ṭaṅka (Brahmānandin) & Dramiḍācārya: The Chāndogya Exegetes",
        "Bhartṛprapañca: The Champion of Ancient Bhedābhedavāda",
        "Bhartṛhari: Śabdādvaita and the Metaphysics of Language",
        "Gauḍapāda: Ajātivāda, Asparśayoga, and Buddhist Epistemological Dialogue",
        "Maṇḍana Miśra: Brahmasiddhi and the Jīvāśritāvidyā Doctrine"
      ],
      coreFindings: "This volume represents the crowning achievement of Nakamura's scholarship. He collects and analyzes dozens of fragments preserved in later bhāṣyas. He proves that before Śaṅkara, the predominant school of Vedānta was Bhedābhedavāda (Advocated by Bhartṛprapañca and early commentators) which held that the individual self is both different and non-different from Brahman.",
      chapters: [
        {
          chapterNumber: "Vol 2, Part I",
          title: "The Ancient Vṛttikāras: Upavarṣa and Bodhāyana",
          summary: "Examines the identity and fragments of 'Bhagavān Upavarṣa', who commented on both Jaimini and Bādarāyaṇa Sūtras, and Bodhāyana, whose extensive Vṛtti formed the basis for the Śrī Bhāṣya.",
          keyInsights: [
            "Upavarṣa lived c. 350–450 CE and rejected the Sphoṭa theory, arguing that the phonemes (Varṇa) themselves convey meaning.",
            "Śaṅkara explicitly appeals to Upavarṣa's authority on Brahma Sūtras 1.1.1, 1.3.28, and 3.3.53.",
            "Bodhāyana advocated a unified study of Karma and Jñāna as two halves of a single spiritual enterprise (Aikyaśāstrya)."
          ]
        },
        {
          chapterNumber: "Vol 2, Part II",
          title: "Bhartṛprapañca: The Pre-Śaṅkara Philosophy of Bhedābheda",
          summary: "Reconstructs Bhartṛprapañca's lost Bṛhadāraṇyaka commentary from Śaṅkara's extensive refutations in the Bṛhadāraṇyakopaniṣad-Bhāṣya and Ānandagiri's glosses.",
          keyInsights: [
            "Bhartṛprapañca taught Dvaitādvaita (identity-in-difference): Brahman possesses both unity (Abheda) as cause and multiplicity (Bheda) as effect.",
            "Maintained Pariṇāmavāda: The universe is a real transformation of Brahman's power, like waves arising on the ocean or coilings of a serpent.",
            "Advocated Jñāna-Karma-Samuccaya: Liberation requires both self-knowledge and the lifelong performance of Vedic duties."
          ]
        },
        {
          chapterNumber: "Vol 2, Part III",
          title: "Bhartṛhari and Gauḍapāda: Language Metaphysics and Ajātivāda",
          summary: "Analyzes Bhartṛhari's Vākyapadīya (Śabda-Brahman) and Gauḍapāda's Māṇḍūkya-Kārikā, placing both in their historical dialogue with Buddhist Yogācāra and Mādhyamika dialectics.",
          keyInsights: [
            "Bhartṛhari (c. 450–500 CE) proved that non-dual consciousness cannot be divorced from linguistic cognition (*Śabdānuvedha*).",
            "Gauḍapāda utilized Buddhist logical terminology (Samvṛti, Kalpita, Dharmas) to rigorously demonstrate the Upanishadic doctrine of Non-origination (Ajātivāda).",
            "Nakamura establishes that Gauḍapāda was not a crypto-Buddhist, but an orthodox Upaniṣadic thinker employing contemporary dialectical tools."
          ]
        }
      ]
    },
    {
      volumeNumber: 3,
      volumeTitle: "Volume 3: Early Vedānta in Buddhist and Jaina Sources",
      subtitle: "External Testimonies, Polemics, and Doxographical Records of Pre-Śaṅkara Vedānta",
      historicalPeriodCovered: "500 CE – 800 CE",
      keyThemes: [
        "Bhāviveka's Madhyamakahṛdayakārikā & Tarkajvālā (Vedāntatattvaniścayāvatāra)",
        "Dignāga and Dharmakīrti on Vedāntic Epistemology",
        "Śāntarakṣita and Kamalaśīla's Tattvasaṅgraha (Upaniṣanmata-parīkṣā)",
        "Mallavādin's Dvādaśāranayacakra and Early Jaina Critiques",
        "Haribhadrasūri's Ṣaḍdarśanasamuccaya"
      ],
      coreFindings: "Nakamura provides the definitive translation and analysis of Chapter 8 of Bhāviveka's Tarkajvālā, which contains the oldest surviving external systematic exposition of Vedāntic philosophy written by a non-Brahmanical philosopher. This confirms that Vedānta was already recognized as an independent, formidable philosophical system by the 6th century CE.",
      chapters: [
        {
          chapterNumber: "Vol 3, Part I",
          title: "Bhāviveka's Exposition of Vedānta in the Tarkajvālā",
          summary: "Exhaustive critical study of the 8th chapter of Tarkajvālā (c. 550 CE), in which Bhāviveka presents the Vedāntic purvapakṣa with remarkable sympathy and scholarly precision before offering Mādhyamika critiques.",
          keyInsights: [
            "Bhāviveka quotes several pre-Śaṅkara kārikās that match or parallel Gauḍapāda's Māṇḍūkya-Kārikā and other lost Vedānta texts.",
            "The Vedāntins depicted by Bhāviveka maintain that liberation is the realization of the all-pervading, permanent Ātman, free from defilements.",
            "Bhāviveka acknowledges the close ethical and meditative affinities between Mahāyāna Bodhisattva practice and Vedāntic Sarvātmabhāva."
          ]
        },
        {
          chapterNumber: "Vol 3, Part II",
          title: "Śāntarakṣita and Kamalaśīla on the 'Upaniṣad Doctrine'",
          summary: "Analysis of the Tattvasaṅgraha (8th century) section dedicated to refuting the Vedāntic theory of the eternal Self (Śāśvata-Ātman).",
          keyInsights: [
            "Śāntarakṣita praises the Upaniṣadic view as being 'very close to the truth' (*alpāparādham*), with only one error: conceiving consciousness as eternal and unchanging.",
            "Demonstrates that 8th-century Buddhist thinkers viewed Vedānta as the most sophisticated among the orthodox Brahmanical systems."
          ]
        }
      ]
    },
    {
      volumeNumber: 4,
      volumeTitle: "Volume 4: The Composition & Evolution of the Brahma Sūtras",
      subtitle: "Philological Stratification, Competing Preceptors, and the Formation of the Sūtra Canon",
      historicalPeriodCovered: "400 BCE – 400 CE",
      keyThemes: [
        "The Historical Identity of Bādarāyaṇa and Jaimini",
        "The Seven Pre-Bādarāyaṇa Preceptors Mentioned in the Brahma Sūtras",
        "The Four Adhyāyas: Samanvaya, Avirodha, Sādhana, and Phala",
        "Interpolations and Redactional Layers in the Sūtra Text",
        "The Evolution from Upaniṣadic Dialogue to Sūtra Aphorisms"
      ],
      coreFindings: "Nakamura demonstrates that the Brahma Sūtras (Vedānta Sūtras) were not composed at a single stroke by one individual, but underwent gradual redaction between 200 BCE and 400 CE. He analyzes the divergent philosophical positions of the ancient masters cited within the sūtras themselves—proving that competing Vedāntic schools existed even before the Brahma Sūtras were finalized.",
      chapters: [
        {
          chapterNumber: "Vol 4, Part I",
          title: "The Compilation of the Brahma Sūtras",
          summary: "Historical-critical investigation of the textual layers of the Brahma Sūtras, their structure, mnemonic purpose, and relation to the Pūrva-Mīmāṁsā Sūtras.",
          keyInsights: [
            "The sūtras represent the synthesis of multiple regional traditions of Upaniṣadic exegesis across ancient India.",
            "Bādarāyaṇa frequently contrasts his own conclusions with named predecessors, demonstrating a democratic, debate-driven scholastic culture.",
            "The sūtras deliberately leave certain metaphysical questions open to allow multiple legitimate exegetical interpretations."
          ]
        },
        {
          chapterNumber: "Vol 4, Part II",
          title: "The Pre-Bādarāyaṇa Sūtra Commentators and Disputants",
          summary: "Comprehensive matrix of the seven ancient preceptors cited by name in the Brahma Sūtras: Auḍulomi, Kāśakṛtsna, Āśmarathya, Bādari, Jaimini, Kārṣṇājini, and Ātreya.",
          keyInsights: [
            "Kāśakṛtsna taught pure non-difference (Avikṛtavāda) — later favored by Śaṅkara.",
            "Āśmarathya taught Bhedābheda (identity-in-difference, like sparks to fire) — later favored by Bhāskara and Nimbārka.",
            "Auḍulomi taught Satyabhedavāda (difference during bondage, absolute identity upon release) — prefiguring Gauḍīya and Bhedābheda models."
          ]
        }
      ]
    }
  ],

  preSankaraThinkers: [
    {
      id: "upavarsa",
      name: "Upavarṣa (Bhagavān Upavarṣa)",
      devanagariName: "उपवर्षः (भगवानुपवर्षः)",
      centuryPeriod: "c. 350–450 CE",
      philosophicalSchool: "Early Mīmāṁsā-Vedānta Synthesis (Vṛttikāra)",
      coreDoctrine: "Pramāṇavāda & Unified Exegesis (Aikyaśāstrya)",
      epistemologyAndOntology: "Composed the foundational Vṛtti on both Jaimini's Pūrva-Mīmāṁsā and Bādarāyaṇa's Brahma Sūtras. Rejected the Sphoṭa theory; maintained that the letter-sounds (Varṇa) themselves, perceived in sequence, convey meaning. Held that the Ātman is self-luminous and known directly through introspective consciousness.",
      citationsInLaterTraditions: [
        "Śaṅkara cites him with highest reverence as 'Bhagavān Upavarṣa' in Brahma Sūtra Bhāṣya 1.1.1, 1.3.28, and 3.3.53.",
        "Śabarasvāmin quotes Upavarṣa's epistemology extensively in Mīmāṁsāsūtra-Bhāṣya 1.1.5.",
        "Rāmānuja in Śrī Bhāṣya and Bhāskara acknowledge his ancient authority."
      ],
      keyExtantFragmentsOrWorks: [
        "Upavarṣa-Vṛtti (Mīmāṁsā & Brahma Sūtra Commentary — preserved via quotations in Śabara and Śaṅkara)"
      ],
      nakamuraAnalysis: "Nakamura identifies Upavarṣa as the central bridge between early Vedic ritual exegesis and classical Vedānta. His realistic epistemology established that sensory and scriptural pramāṇas have objective validity without requiring esoteric linguistic intermediates."
    },
    {
      id: "bodhayana",
      name: "Bodhāyana",
      devanagariName: "बोधायनः",
      centuryPeriod: "c. 400–500 CE",
      philosophicalSchool: "Early Viśiṣṭādvaitic Exegesis (Vṛttikāra)",
      coreDoctrine: "Kṛtsna-Śāstrya (Unity of the Two Mīmāṁsās) & Upāsanā-rūpa Jñāna",
      epistemologyAndOntology: "Authored the massive Bodhāyana-Vṛtti on the Brahma Sūtras. Taught that the study of Vedic ritual (Dharma-jijñāsā) and the inquiry into Brahman (Brahma-jijñāsā) form a single, contiguous 20-chapter scripture. Taught that liberation requires continuous devotional meditation (Upāsanā / Dhyāna) transformed into visual perception (Darśana-rūpāpanna).",
      citationsInLaterTraditions: [
        "Rāmānuja explicitly states in the introductory verse of Śrī Bhāṣya: 'Bhagavad-Bodhāyana-kṛtāṁ vistīrṇāṁ brahmasūtra-vṛttiṁ pūrvācāryāḥ saṁcikṣipuḥ; tan-matānusāreṇa sūtrākṣarāṇi vyākhyāsyante.'",
        "Yamunācārya cites Bodhāyana in Siddhitraya as the foremost authority of the ancient Sri Vaishnava tradition."
      ],
      keyExtantFragmentsOrWorks: [
        "Bodhāyana-Vṛtti (Kṛtakoṭi / Brahma Sūtra Vṛtti)"
      ],
      nakamuraAnalysis: "Nakamura's philological reconstruction proves that Bodhāyana represents the pre-Śaṅkara theological ancestor of Viśiṣṭādvaita, preserving an ancient theistic tradition that read the Brahma Sūtras through personalist Upāsanā rather than pure illusionism."
    },
    {
      id: "tanka_brahmanandin",
      name: "Ṭaṅka (Brahmānandin)",
      devanagariName: "टङ्कः (ब्रह्मानन्दी)",
      centuryPeriod: "c. 500–550 CE",
      philosophicalSchool: "Chāndogya Vākyakāra (Early Bhedābheda / Viśiṣṭādvaita)",
      coreDoctrine: "Saptāṅga Sādhana (Sevenfold Discipline for Brahmavidyā)",
      epistemologyAndOntology: "Composed concise, aphoristic Vākyas on the Chāndogya Upaniṣad. Systematized the seven prerequisites for Brahman-realization: Viveka (discrimination of food), Vimoka (freedom from desire), Abhyāsa (continuous practice), Kriyā (performance of five great sacrifices), Kalyāṇa (virtues like truthfulness), Anavasāda (freedom from dejection), and Anuddharṣa (freedom from exultation).",
      citationsInLaterTraditions: [
        "Rāmānuja in Śrī Bhāṣya (1.1.1) quotes the Vākyakāra verbatim on the nature of Upāsanā and the sevenfold discipline.",
        "Vedānta Deśika praises Ṭaṅka in Tattvamuktākalāpa.",
        "Śaṅkara refers to the Vākyakāra in Chāndogya-Bhāṣya and Brahma Sūtra Bhāṣya."
      ],
      keyExtantFragmentsOrWorks: [
        "Chāndogya-Vākya (Aphoristic Commentary on Chāndogya Upaniṣad)"
      ],
      nakamuraAnalysis: "Nakamura highlights Ṭaṅka as the philosopher who first established the exact psychological and ethical methodology of Upaniṣadic contemplation, demonstrating that spiritual realization in early Vedānta was rigorously rooted in psychosomatic discipline."
    },
    {
      id: "dramidacarya",
      name: "Dramiḍācārya",
      devanagariName: "द्रमिडाचार्यः",
      centuryPeriod: "c. 550–600 CE",
      philosophicalSchool: "Early Vedānta Bhāṣyakāra",
      coreDoctrine: "Rāja-Putra Dṛṣṭānta (The Parable of the Lost Prince) & Saguna Realism",
      epistemologyAndOntology: "Composed an extensive Bhāṣya on Brahmānandin's Chāndogya-Vākyas. Famous for his pedagogical analogies, especially the 'Parable of the Prince' who was separated from his royal parents in infancy and raised by a hunter tribe; when an elder informs him of his true identity, he realizes his inherent royal sovereignty. This illustrates how the Jīva discovers its divine nature through Guru-upadeśa.",
      citationsInLaterTraditions: [
        "Śaṅkara quotes Dramiḍa with deep respect in Bṛhadāraṇyaka-Bhāṣya (2.1.20) and Chāndogya-Bhāṣya (3.10.4).",
        "Rāmānuja quotes Dramiḍācārya on multiple occasions in Śrī Bhāṣya and Vedārthasaṅgraha.",
        "Ānandagiri identifies 'Dramiḍabhāṣyakāra' as a venerable ancient preceptor."
      ],
      keyExtantFragmentsOrWorks: [
        "Dramiḍa-Bhāṣya on Chāndogya-Vākya"
      ],
      nakamuraAnalysis: "Nakamura notes that Dramiḍācārya was uniquely revered by both Śaṅkara and Rāmānuja—proving that the earliest Vedāntic commentators wrote with an inclusive profundity that later parted into Advaita and Viśiṣṭādvaita lineages."
    },
    {
      id: "bhartrprapanca",
      name: "Bhartṛprapañca",
      devanagariName: "भर्तृप्रपञ्चः",
      centuryPeriod: "c. 550–650 CE",
      philosophicalSchool: "Ancient Bhedābhedavāda (Identity-in-Difference)",
      coreDoctrine: "Brahma-Pariṇāmavāda & Jñāna-Karma-Samuccaya",
      epistemologyAndOntology: "The leading pre-Śaṅkara exponent of Bhedābhedavāda. Commented on the Bṛhadāraṇyaka Upaniṣad. Taught that Brahman has two aspects: the unmanifest supreme state (Para-Brahman) and the manifest cosmic state (Apara-Brahman). The universe is not an illusion (Māyā), but a real transformation (Pariṇāma) of Brahman's power, just as waves are real modifications of the ocean.",
      citationsInLaterTraditions: [
        "Śaṅkara devotes huge portions of his Bṛhadāraṇyakopaniṣad-Bhāṣya (especially on 1.4, 2.3, 3.8, and 4.3) and Brahma Sūtra Bhāṣya to refuting Bhartṛprapañca's views.",
        "Sureśvarācārya in Bṛhadāraṇyaka-Upaniṣad-Bhāṣya-Vārtika dedicates thousands of verses to critiquing Bhartṛprapañca's Bhedābheda.",
        "Ānandagiri names Bhartṛprapañca as the primary target of Śaṅkara's polemics."
      ],
      keyExtantFragmentsOrWorks: [
        "Bṛhadāraṇyakopaniṣad-Bhāṣya (Reconstructed from Śaṅkara and Sureśvara citations)"
      ],
      nakamuraAnalysis: "Nakamura's meticulous collection of over 80 fragments of Bhartṛprapañca provides the definitive blueprint of pre-Śaṅkara Vedānta. Nakamura argues that Bhartṛprapañca's Bhedābheda was likely the dominant academic interpretation of the Upaniṣads across India immediately prior to Ādi Śaṅkara."
    },
    {
      id: "bhartrhari",
      name: "Bhartṛhari",
      devanagariName: "भर्तृहरिः",
      centuryPeriod: "c. 450–500 CE",
      philosophicalSchool: "Śabdādvaita (Grammar-Philosophy & Language Monism)",
      coreDoctrine: "Śabda-Brahman & Sphoṭavāda",
      epistemologyAndOntology: "Author of the Vākyapadīya (Brahmakāṇḍa, Vākyakāṇḍa, Padakāṇḍa). Propounded that the ultimate reality is Śabda-Tattva (the eternal Word-Principle / Brahman), which is without beginning or end and manifests the entire cosmos through meaning and language (*Vivartate 'rthabhāvena prakriyā jagato yataḥ*). Consciousness is intrinsically intertwined with linguistic expression.",
      citationsInLaterTraditions: [
        "Maṇḍana Miśra adopts Bhartṛhari's linguistic ontology in Brahmasiddhi and Sphoṭasiddhi.",
        "Śaṅkara and Sureśvara engage deeply with Bhartṛhari's Vivartavāda and Sphoṭa theories.",
        "Praśastapāda, Dignāga, Dharmakīrti, and Bhāviveka quote Bhartṛhari's kārikās extensively."
      ],
      keyExtantFragmentsOrWorks: [
        "Vākyapadīya (Complete in three kāṇḍas with autocommentary Vṛtti)",
        "Mahābhāṣyadīpikā (Tripādī)"
      ],
      nakamuraAnalysis: "Nakamura shows that Bhartṛhari was the first philosopher to formulate a systematic theory of Vivarta (apparent manifestation) in Sanskrit, and that his metaphysics of language deeply shaped the conceptual vocabulary of Gauḍapāda and post-Śaṅkara Advaita."
    },
    {
      id: "gaudapada",
      name: "Gauḍapādācārya",
      devanagariName: "गौडपादाचार्यः",
      centuryPeriod: "c. 500–600 CE",
      philosophicalSchool: "Early Classical Advaita Vedānta",
      coreDoctrine: "Ajātivāda (Non-Origination) & Asparśayoga (Yoga of Non-Contact)",
      epistemologyAndOntology: "Author of the Māṇḍūkya-Kārikā (Āgama Śāstra) in four Prakaraṇas: (1) Āgama, (2) Vaitathya, (3) Advaita, and (4) Alātaśānti. Demonstrated that the empirical world of waking and dream is fundamentally unreal like a circle of fire produced by a whirling firebrand (Alātacakra); Brahman is never born, never changes, and is eternal peace.",
      citationsInLaterTraditions: [
        "Śaṅkara composed a full commentary on the Māṇḍūkya-Kārikā, hailing Gauḍapāda as his Paramaguru ('sampradāyavit').",
        "Sureśvara quotes Gauḍapāda in Naiṣkarmyasiddhi (4.41–44) as the supreme master of non-dual realization.",
        "Bhāviveka quotes verses from Gauḍapāda's third and fourth prakaraṇas in Tarkajvālā Chapter 8."
      ],
      keyExtantFragmentsOrWorks: [
        "Māṇḍūkya-Kārikā (Āgamaśāstra, 215 verses in 4 chapters)",
        "Sāṅkhyakārikā-Bhāṣya (attributed)",
        "Uttaragītā-Vṛtti (attributed)"
      ],
      nakamuraAnalysis: "Nakamura conducted an internationally renowned verse-by-verse comparison between Gauḍapāda's Kārikās and Buddhist texts (Nāgārjuna, Āryadeva, Asaṅga, Vasubandhu). Nakamura concluded that while Gauḍapāda borrowed Buddhist dialectical arguments and terminology to refute dualism, his ultimate ontology remained firmly anchored in the Upaniṣadic eternal Ātman."
    },
    {
      id: "mandana_misra",
      name: "Maṇḍana Miśra",
      devanagariName: "मण्डनमिश्रः",
      centuryPeriod: "c. 680–740 CE",
      philosophicalSchool: "Pre-Śaṅkara / Contemporary Independent Advaita",
      coreDoctrine: "Brahmasiddhi, Bhāvādvaita, & Jīvāśritāvidyā",
      epistemologyAndOntology: "Author of the Brahmasiddhi, Vidhiviveka, Sphoṭasiddhi, and Vibhramaviveka. Proposed that Avidyā (ignorance) resides in the individual self (Jīva-āśritā) but has Brahman as its object (Brahma-viṣayā). Held that non-dual realization requires prolonged meditation (Prasaṅkhyāna) on Upaniṣadic mahāvākyas.",
      citationsInLaterTraditions: [
        "Vācaspati Miśra in Bhāmatī relies heavily on Maṇḍana Miśra's Brahmasiddhi to develop the Bhāmatī sub-school of Advaita.",
        "Prakāśātman in Pañcapādikā-Vivaraṇa critiques Maṇḍana's view of Jīvāśritāvidyā.",
        "Śāntarakṣita quotes Maṇḍana's Vidhiviveka in Tattvasaṅgraha."
      ],
      keyExtantFragmentsOrWorks: [
        "Brahmasiddhi (Master treatise on Advaita ontology and epistemology)",
        "Sphoṭasiddhi (Defense of linguistic monism)",
        "Vidhiviveka (Mīmāṁsā philosophy of Vedic injunctions)",
        "Vibhramaviveka (Theory of error)"
      ],
      nakamuraAnalysis: "Nakamura underscores Maṇḍana Miśra as an independent colossus who synthesized Kumārila Bhaṭṭa's Mīmāṁsā, Bhartṛhari's linguistic metaphysics, and non-dual Vedānta—representing a distinct, highly influential branch of early Advaita alongside Śaṅkara."
    }
  ],

  sutraDisputants: [
    {
      name: "Kāśakṛtsna",
      devanagariName: "काशकृत्स्नः",
      sutraReferences: ["Brahma Sūtra 1.4.22 (अवस्थितेरिति काशकृत्स्नः)"],
      viewOnJivaBrahmanRelation: "Avikṛtavāda (Pure Non-Difference): The Jīva is non-different from the supreme Brahman itself, existing in the embodied state without undergoing any real intrinsic alteration.",
      nakamuraHistoricalAssessment: "Kāśakṛtsna's ancient formulation is celebrated by Śaṅkara as the most accurate interpretation of the Upaniṣads ('Kāśakṛtsnīyaṁ matam śrutyanusāri'). Nakamura highlights Kāśakṛtsna as the earliest known precursor of classical Advaitic non-duality."
    },
    {
      name: "Āśmarathya",
      devanagariName: "आश्मरथ्यः",
      sutraReferences: ["Brahma Sūtra 1.2.29", "Brahma Sūtra 1.4.20 (प्रतिज्ञासिद्धेर्लिङ्गमाश्मरथ्यः)"],
      viewOnJivaBrahmanRelation: "Bhedābheda (Identity-in-Difference): The Jīva is both different and non-different from Brahman, like sparks leaping out of a blazing fire. They share the same luminous nature yet differ in individual manifestation.",
      nakamuraHistoricalAssessment: "Nakamura identifies Āśmarathya as the early champion of causal Pariṇāmavāda, whose spark analogy directly inspired later Vaiṣṇava Vedāntins including Bhāskara, Nimbārka, and the Gauḍīya thinkers."
    },
    {
      name: "Auḍulomi",
      devanagariName: "औडुलोमिः",
      sutraReferences: ["Brahma Sūtra 1.4.21 (उत्क्रमिष्यत एवंभावादित्यौडुलोमिः)", "Brahma Sūtra 3.4.45", "Brahma Sūtra 4.4.6"],
      viewOnJivaBrahmanRelation: "Satyabhedavāda / Kālāntara-Abheda: The Jīva is genuinely different from Brahman during the state of transmigratory bondage (Saṁsāra), but becomes completely identical with Brahman upon spiritual liberation (Mokṣa).",
      nakamuraHistoricalAssessment: "Nakamura shows that Auḍulomi's temporal-difference model prefigures the nuanced dialectic of later Bhedābheda and Dvaitādvaita systems, providing a realistic basis for spiritual practice while maintaining the ultimate transcendence of liberation."
    },
    {
      name: "Bādari",
      devanagariName: "बादरिः",
      sutraReferences: ["Brahma Sūtra 1.2.30", "Brahma Sūtra 3.1.11", "Brahma Sūtra 4.3.7 (कार्यं बादरिरस्य गत्युपपत्तेः)", "Brahma Sūtra 4.4.10"],
      viewOnJivaBrahmanRelation: "Kārya-Brahman & Actionless Mokṣa: Maintained that the departed soul travels via the path of the gods (Devayāna) to the conditioned, qualified Brahman (Kārya / Hiraṇyagarbha), not to the supreme unconditioned Brahman.",
      nakamuraHistoricalAssessment: "Bādari's distinction between the relative path and the absolute truth was utilized by Śaṅkara to establish the two-tier hierarchy of Saguna and Nirguna Brahman."
    },
    {
      name: "Jaimini",
      devanagariName: "जैमिनिः",
      sutraReferences: ["Brahma Sūtra 1.2.28", "Brahma Sūtra 1.2.31", "Brahma Sūtra 1.3.31", "Brahma Sūtra 1.4.18", "Brahma Sūtra 3.4.1", "Brahma Sūtra 4.4.5"],
      viewOnJivaBrahmanRelation: "Para-Brahman Attributes & Karma Primacy: Taught that the liberated soul realizes Brahman in its full divine attributes (Guṇas like omniscience, sovereign will) and that ritual action retains foundational spiritual significance.",
      nakamuraHistoricalAssessment: "Nakamura demonstrates the intimate, reciprocal relationship between Bādarāyaṇa and Jaimini: each quotes the other with immense respect in their respective Sūtra texts, proving that early Pūrva and Uttara Mīmāṁsā developed in close fraternal collaboration."
    },
    {
      name: "Kārṣṇājini",
      devanagariName: "कार्ष्णाजिनिः",
      sutraReferences: ["Brahma Sūtra 3.1.9 (चरणोपलक्षितव्यञ्जनेति कार्ष्णाजिनिः)"],
      viewOnJivaBrahmanRelation: "Caraṇa / Moral Conduct Exegesis: Taught that rebirth is governed by general moral conduct (Caraṇa / Śīla), not merely specific ritual performances.",
      nakamuraHistoricalAssessment: "Nakamura emphasizes Kārṣṇājini's ethical interpretation of the law of Karma as an early Upaniṣadic triumph over rigid ritualism."
    },
    {
      name: "Ātreya",
      devanagariName: "आत्रेयः",
      sutraReferences: ["Brahma Sūtra 3.4.44 (स्वामिनः फलश्रुतेरित्यात्रेयः)"],
      viewOnJivaBrahmanRelation: "Svāmi-phala: Maintained that the spiritual fruit of meditative Upāsanā belongs directly to the spiritual aspirant (Yajamāna / Self), not the officiating priest.",
      nakamuraHistoricalAssessment: "Ātreya asserted the individual spiritual agency of the aspirant, reinforcing the interiorized contemplative path of the Upaniṣads."
    }
  ],

  externalCitations: [
    {
      sourceWork: "Madhyamakahṛdayakārikā & Tarkajvālā (Chapter 8: Vedāntatattvaniścayāvatāra)",
      author: "Bhāviveka (Bhavya)",
      century: "c. 550–570 CE",
      tradition: "Buddhist",
      sectionOrChapter: "Chapter 8 (148 Verses with Commentary)",
      vedanticViewDescribed: "Presents early Vedāntic non-duality: Brahman is omnipresent, subtle, eternal, knowing, unborn, and free from phenomenal distinctions. Quotes early Vedānta kārikās directly that match Gauḍapāda and other lost texts.",
      nakamuraCommentary: "Nakamura's translation and philological analysis of Bhāviveka's 8th chapter is one of the most celebrated breakthroughs in modern Indology. It proves that by 550 CE, Vedānta was studied and debated in Buddhist universities like Nālandā as a primary philosophical system."
    },
    {
      sourceWork: "Tattvasaṅgraha (Section: Upaniṣad-mata-parīkṣā)",
      author: "Śāntarakṣita & Kamalaśīla (Commentator)",
      century: "c. 725–788 CE",
      tradition: "Buddhist",
      sectionOrChapter: "Verses 327–335 and Pañjikā gloss",
      vedanticViewDescribed: "Examines the Upaniṣadic doctrine of the eternal, all-pervading Ātman (*Vedāntavādinām ātmatattvam*). Describes the Vedāntic realization as pure consciousness free from subject-object dualism.",
      nakamuraCommentary: "Śāntarakṣita makes the famous observation: 'Teṣāṁ alpāparādhaṁ tu darśanaṁ nityatocyate' ('Their philosophical system has only a very small error—namely, asserting that consciousness is eternal'). Nakamura highlights how close 8th-century Buddhist logicians felt to Vedāntic non-duality."
    },
    {
      sourceWork: "Dvādaśāranayacakra",
      author: "Mallavādin Kṣamāśramaṇa",
      century: "c. 550–600 CE",
      tradition: "Jaina",
      sectionOrChapter: "Section on Puruṣavāda / Advaita-naya",
      vedanticViewDescribed: "Critiques the Vedāntic assertion that a single permanent universal reality (Brahman/Puruṣa) can manifest diverse empirical phenomena without losing its intrinsic unity.",
      nakamuraCommentary: "Nakamura uses Mallavādin's Jaina testimony to establish the geographical spread of pre-Śaṅkara Vedānta in western India (Gujarat/Rajasthan) and to show how Jaina Anekāntavāda challenged Vedāntic monism."
    },
    {
      sourceWork: "Ṣaḍdarśanasamuccaya",
      author: "Haribhadrasūri",
      century: "c. 750–800 CE",
      tradition: "Jaina",
      sectionOrChapter: "Chapter on Vedānta / Uttara-Mīmāṁsā",
      vedanticViewDescribed: "Summarizes the orthodox Vedāntic epistemological pramāṇas and the doctrine of Brahman as the material and efficient cause (Abhinnanimittopādāna-kāraṇa) of the universe.",
      nakamuraCommentary: "Nakamura demonstrates that by Haribhadra's era, the classification of Vedānta within the canonical six systems (Ṣaḍdarśana) was firmly fixed in Indian doxography."
    }
  ]
};
