import { GuruNode, ParamparaId, ParamparaTradition, SubPrasthana } from "./types";

export const PARAMPARA_TRADITIONS: ParamparaTradition[] = [
  {
    id: "vedic_root",
    name: "Vedic Śruti Root",
    devanagariName: "वैदिक-श्रुतिमूलम् (प्रस्थानत्रयी)",
    englishTitle: "Vedic Revelation & Prasthānatrayī Fountainhead",
    sampradayaName: "Apauruṣeya Śruti / Ṛṣi Paramparā",
    founderOrPreceptor: "Vedic Ṛṣis & Maharṣi Bādarāyaṇa Kṛṣṇa Dvaipāyana Vyāsa",
    avatarOrDeity: "Parabrahman / Nārāyaṇa (परब्रह्म)",
    primaryPhilosophy: "Śruti-Prasthāna (Revealed Spiritual Science)",
    coreDoctrine: "Īśāvāsyam Idaṁ Sarvam; Sarvaṁ Khalvidam Brahma; Tat Tvam Asi; Satyaṁ Jñānam Anantam Brahma.",
    realityModel: "Brahmavāda (Brahman as the sole supreme reality and cosmic foundation).",
    jivaBrahmanRelation: "Brahmātmaikya & Śarīra-Śarīrī-Bhāva (The fountainhead of all Vedāntic realizations).",
    mokshaMeans: "Brahmavidyā (Supreme direct realization of the Infinite Brahman through renunciation, dedicated duty, and wisdom).",
    badgeColor: "bg-amber-100 text-amber-950 border-amber-400",
    borderColor: "border-amber-600",
    accentBg: "from-amber-600/15 via-orange-500/10 to-transparent",
    canonicalGranthaIds: ["isopanisad", "kenopanisad", "kathopanisad", "prasnopanisad", "mundakopanisad", "mandukyopanisad", "aitareyopanisad", "taittiriyopanisad", "chandogyopanisad", "brhadaranyakopanisad", "brahmasutra", "bhagavadgita"],
    subPrasthānas: [
      {
        id: "sruti_prasthana",
        name: "Śruti Prasthāna (Principal Upaniṣads)",
        sanskritName: "श्रुति-प्रस्थानम् (दशोपनिषदः)",
        proponent: "Vedic Ṛṣis (Śukla Yajurveda Saṁhitā)",
        century: "Vedic Antiquity",
        coreEpistemology: "Apauruṣeya Śabda-Pramāṇa (Direct divine revelation beyond empirical sensory defect).",
        keyWorks: ["Īśāvāsyopaniṣad", "Kena Upaniṣad", "Kaṭha Upaniṣad", "Praśna Upaniṣad", "Muṇḍaka Upaniṣad", "Māṇḍūkya Upaniṣad", "Aitareya Upaniṣad", "Taittirīya Upaniṣad", "Chāndogya Upaniṣad", "Bṛhadāraṇyaka Upaniṣad"]
      },
      {
        id: "nyaya_prasthana",
        name: "Nyāya Prasthāna (Brahma Sūtras)",
        sanskritName: "न्याय-प्रस्थानम् (ब्रह्मसूत्राणि)",
        proponent: "Maharṣi Bādarāyaṇa Vyāsa",
        century: "Vedic Antiquity",
        coreEpistemology: "Yukti-Samanvaya & Tarka-Avirodha (Systematic logical reconciliation of all Śruti texts).",
        keyWorks: ["Brahma Sūtras (555 Sūtras across 4 Adhyāyas)"]
      },
      {
        id: "smrti_prasthana",
        name: "Smṛti Prasthāna (Śrīmad Bhagavad Gītā)",
        sanskritName: "स्मृति-प्रस्थानम् (श्रीमद्भगवद्गीता)",
        proponent: "Bhagavān Śrī Kṛṣṇa & Maharṣi Veda-Vyāsa",
        century: "Mahābhārata Antiquity",
        coreEpistemology: "Anubhava & Upāsanā (Experiential, living synthesis of Jñāna, Bhakti, and Karma-Yoga).",
        keyWorks: ["Śrīmad Bhagavad Gītā (700 Ślokas across 18 Adhyāyas)"]
      }
    ],
    keyGurus: [
      {
        id: "sri_krishna_gitacharya",
        name: "Bhagavān Śrī Kṛṣṇa (Gītācārya)",
        devanagariName: "भगवान् श्रीकृष्णः (गीताचार्यः)",
        title: "Jagadguru & Pārthasārathi",
        century: "Dvāpara Yuga / Antiquity",
        paramparaId: "vedic_root",
        lineageStage: "divine",
        keyWorks: ["Śrīmad Bhagavad Gītā"],
        primaryDoctrines: ["Niṣkāma Karma-Yoga", "Śaraṇāgati / Prapatti", "Sarvātma-Bhāva", "Puruṣottama-Tattva"],
        famousQuoteOrMantra: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज । अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
        historicalContext: "The Supreme Teacher who delivered the Bhagavad Gītā to Arjuna on the battlefield of Kurukṣetra.",
        primaryGranthaId: "bhagavadgita"
      },
      {
        id: "badarayana_vyasa_root",
        name: "Maharṣi Bādarāyaṇa Vyāsa",
        devanagariName: "महर्षि बादरायण व्यासः",
        title: "Veda-Vyāsa & Sūtrakāra",
        century: "Vedic Antiquity",
        paramparaId: "vedic_root",
        lineageStage: "rishi",
        keyWorks: ["Brahma Sūtras", "Mahābhārata / Gītā", "Veda-Vibhāga", "Śrīmad Bhāgavatam"],
        primaryDoctrines: ["Uttara-Mīmāṁsā", "Samanvaya of all Śrutis", "Brahmajijñāsā"],
        famousQuoteOrMantra: "अथातो ब्रह्मजिज्ञासा ॥",
        historicalContext: "Divided the single eternal Veda into four recensions and codified the Brahma Sūtras.",
        primaryGranthaId: "brahmasutra"
      }
    ]
  },
  {
    id: "advaita",
    name: "Advaita Vedānta",
    devanagariName: "केवलाद्वैत-वेदान्तः (शाङ्कर-सम्प्रदायः)",
    englishTitle: "Unconditional Non-Dualism",
    sampradayaName: "Śmārta / Daśanāmī Sampradāya",
    founderOrPreceptor: "Bhagavān Śrī Dakṣiṇāmūrti & Jagadguru Ādi Śaṅkarācārya",
    avatarOrDeity: "Bhagavān Śrī Dakṣiṇāmūrti (आदिगुरुः दक्षिणामूर्तिः)",
    primaryPhilosophy: "Kevalādvaita (Absolute Monism)",
    coreDoctrine: "Brahma Satyam, Jagan Mithyā, Jīvo Brahmaiva Nāparaḥ (Brahman alone is real, the world is apparent/illusory, the individual soul is non-different from Brahman).",
    realityModel: "Vivartavāda (Apparent illusory transformation without intrinsic mutation of the underlying substratum).",
    jivaBrahmanRelation: "Abheda (Absolute ontological identity; apparent individuality is caused by limiting adjuncts / Upādhi and Avidyā).",
    mokshaMeans: "Jñāna-Mārga (Pure discriminative self-knowledge through Śravaṇa, Manana, and Nididhyāsana of the Mahāvākyas).",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    borderColor: "border-amber-500",
    accentBg: "from-amber-500/10 via-orange-500/5 to-transparent",
    canonicalGranthaIds: ["advaitamakaranda", "advaitarasamanjari", "vedantasara", "vivekacudamani", "mandukyopanisad", "vedantaparibhasa", "sankara-catuhsutri", "bhamati"],
    subPrasthānas: [
      {
        id: "bhamati",
        name: "Bhāmatī Prasthāna",
        sanskritName: "भामती-प्रस्थानम्",
        proponent: "Vācaspati Miśra (9th c. CE), Amalānanda, Appayya Dīkṣita",
        century: "9th - 16th Century CE",
        coreEpistemology: "Avacchedavāda (Limitation Theory). The individual soul (Jīva) is the locus (Āśraya) of Avidyā, while Brahman is the content/object (Viṣaya). Mind (Manas) is recognized as an indriya.",
        keyWorks: ["Bhāmatī (on Śāṅkarabhāṣya)", "Vedānta-Kalpataru", "Siddhāntaleśasaṅgraha"]
      },
      {
        id: "vivarana",
        name: "Vivaraṇa Prasthāna",
        sanskritName: "विवरण-प्रस्थानम्",
        proponent: "Padmapādācārya, Prakāśātman (10th c. CE), Vidyāraṇya Svāmī, Dharmarāja Adhvarīndra",
        century: "9th - 17th Century CE",
        coreEpistemology: "Pratibimbavāda (Reflection Theory). Brahman is both the locus (Āśraya) and content (Viṣaya) of Avidyā. The Jīva is a reflection of Brahman in the internal organ (Antaḥkaraṇa).",
        keyWorks: ["Pañcapādikā", "Pañcapādikā-Vivaraṇa", "Pañcadaśī", "Vedāntaparibhāṣā", "Advaitasiddhi"]
      },
      {
        id: "vartika",
        name: "Vārtika Prasthāna",
        sanskritName: "वार्तिक-प्रस्थानम्",
        proponent: "Sureśvarācārya & Sarvajñātman",
        century: "8th - 10th Century CE",
        coreEpistemology: "Ābhāsavāda (Semblance Theory). The Jīva is a illusory semblance (Ābhāsa) of consciousness appearing in Avidyā. Deep refutation of Jñāna-Karma Samuccaya.",
        keyWorks: ["Bṛhadāraṇyaka-Upaniṣad-Bhāṣya-Vārtika", "Taittirīya-Bhāṣya-Vārtika", "Naiṣkarmyasiddhi", "Saṅkṣepaśārīraka"]
      }
    ],
    keyGurus: [
      {
        id: "daksinamurti_advaita",
        name: "Bhagavān Śrī Dakṣiṇāmūrti",
        devanagariName: "भगवान् श्रीदक्षिणामूर्तिः (आदिगुरुः)",
        title: "Primordial Silent Preceptor of Non-Dual Wisdom",
        century: "Beginningless (Anādi) / Eternal Archetype",
        paramparaId: "advaita",
        lineageStage: "divine",
        prominentDisciples: ["Sanaka, Sanandana, Sanātana, Sanatsujāta & Maharṣis"],
        keyWorks: ["Dakṣiṇāmūrti Stotram (by Ādi Śaṅkara)", "Mānasa-Mūla-Darśana"],
        primaryDoctrines: ["Mauna-Vyākhyā-Prakaṭita-Parabrahmatattvam (Revelation of Brahman through Silent Luminous Consciousness)", "Absolute Brahmātma-Aikya"],
        famousQuoteOrMantra: "चित्रं वटतरोर्मूले वृद्धाः शिष्या गुरुर्युवा । गुरोस्तु मौनं व्याख्यानं शिष्यास्तु छिन्नसंशयाः ॥ ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा ॥",
        historicalContext: "The supreme primordial fountainhead of Kevalādvaita Paramparā, revealing the identity of Ātman and Brahman through transcendental silence."
      },
      {
        id: "gaudapada",
        name: "Śrī Gauḍapādācārya",
        devanagariName: "गौडपादाचार्यः",
        title: "Grand-preceptor (Paramaguru) of Ādi Śaṅkara",
        century: "6th - 7th Century CE",
        paramparaId: "advaita",
        lineageStage: "rishi",
        guruName: "Śrī Śukadeva Paramahaṁsa",
        prominentDisciples: ["Govinda Bhagavatpāda"],
        seatsOrMathas: ["Badarikāśrama / Narmadā"],
        keyWorks: ["Māṇḍūkya Kārikā (Āgama Śāstra)", "Sāṅkhya-Kārikā-Bhāṣya", "Uttaragītā-Vṛtti"],
        primaryDoctrines: ["Ajātivāda (Doctrine of Absolute Non-Origination)", "Asparśa Yoga (Yoga of Non-Touch/Transcendence)", "Unreality of Duality in the Three States of Waking, Dream, and Sleep"],
        famousQuoteOrMantra: "न निरोधो न चोत्पत्तिर् न बद्धो न च साधकः । न मुमुक्षुर्न वै मुक्त इत्येषा परमार्थता ॥",
        historicalContext: "The first historical systematic philosopher of Advaita Vedānta to articulate Ajātivāda through rigorous dialectics.",
        primaryGranthaId: "mandukyopanisad"
      },
      {
        id: "govinda_bhagavatpada",
        name: "Śrī Govinda Bhagavatpāda",
        devanagariName: "गोविन्दभगवत्पादः",
        title: "Direct Guru of Ādi Śaṅkarācārya",
        century: "7th - 8th Century CE",
        paramparaId: "advaita",
        lineageStage: "rishi",
        guruName: "Gauḍapādācārya",
        prominentDisciples: ["Ādi Śaṅkarācārya"],
        seatsOrMathas: ["Omkāreśvara (Narmadā Cave)"],
        keyWorks: ["Rasahṛdaya Tantra", "Advaita Precepts (Oral Tradition)"],
        primaryDoctrines: ["Transmission of the Four Mahāvākyas", "Realization of Sākṣī Caitanya in Nirvikalpa Samādhi"],
        famousQuoteOrMantra: "सर्ववेदान्तसिद्धान्तगोचरं तमगोचरम् । गोविन्दं परमानन्दं सद्गुरुं प्रणतोऽस्म्यहम् ॥",
        historicalContext: "Initiated the young Śaṅkara into Sannyāsa at the holy banks of the Narmadā, transmitting the apostolic mantle of non-duality."
      },
      {
        id: "adi_sankara",
        name: "Jagadguru Ādi Śaṅkarācārya",
        devanagariName: "जगद्गुरु आदि शङ्कराचार्यः",
        title: "Bhagavatpāda, Revitalizer of Advaita Vedānta",
        century: "788–820 CE (Classical chronology: 8th c. CE)",
        paramparaId: "advaita",
        lineageStage: "acharya",
        guruName: "Govinda Bhagavatpāda",
        prominentDisciples: ["Padmapāda", "Sureśvara (Maṇḍana Miśra)", "Toṭakācārya", "Hastāmalaka"],
        seatsOrMathas: [
          "Dakṣiṇāmnāya Śṛṅgerī Śāradā Pīṭham",
          "Paścimāmnāya Dvārakā Śāradā Maṭha",
          "Pūrvāmnāya Purī Govardhana Maṭha",
          "Uttarāmnāya Badarī Jyotirmaṭha",
          "Kāñcī Kāmakoṭi Pīṭham"
        ],
        keyWorks: [
          "Prasthānatrayī Bhāṣya (Brahma Sūtras, 10 Principal Upaniṣads, Bhagavad Gītā)",
          "Vivekacūḍāmaṇi",
          "Upadeśasāhasrī",
          "Ātmabodha",
          "Dakṣiṇāmūrti Stotra",
          "Soundaryalaharī",
          "Bhaja Govindam"
        ],
        primaryDoctrines: [
          "Vivartavāda (Superimposition / Adhyāsa-Bhāṣya)",
          "Nirguṇa-Saguna Brahman Distinction (Pāramārthika vs. Vyāvahārika Satya)",
          "Rejection of Jñāna-Karma-Samuccaya (Knowledge alone liberates)",
          "Establishment of Daśanāmī Sannyāsa and Shanmata Pañcāyatana Pūjā"
        ],
        famousQuoteOrMantra: "श्लोकार्थेन प्रवक्ष्यामि यदुक्तं ग्रन्थकोटिभिः । ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः ॥",
        historicalContext: "Traveled the entirety of Bhāratavarṣa on foot, defeating ritualistic and nihilistic schools in Digvijaya debates, unifying Sanātana Dharma under Vedic non-dualism."
      },
      {
        id: "suresvaracarya",
        name: "Śrī Sureśvarācārya",
        devanagariName: "सुरेश्वराचार्यः (मण्डनमिश्रः)",
        title: "Chief Vārtikakāra, First Pontiff of Śṛṅgerī",
        century: "8th - 9th Century CE",
        paramparaId: "advaita",
        lineageStage: "acharya",
        guruName: "Ādi Śaṅkarācārya",
        prominentDisciples: ["Sarvajñātman"],
        seatsOrMathas: ["Śṛṅgerī Śāradā Pīṭham (South)"],
        keyWorks: [
          "Bṛhadāraṇyakopaniṣad-Bhāṣya-Vārtika",
          "Taittirīyopaniṣad-Bhāṣya-Vārtika",
          "Naiṣkarmyasiddhi",
          "Mānasollāsa (on Dakṣiṇāmūrti Stotra)",
          "Pañcīkaraṇa-Vārtika"
        ],
        primaryDoctrines: [
          "Vārtika Dialectics (Supplying the omitted, correcting the flawed, affirming the sound)",
          "Naiṣkarmya: Liberation transcends all ritual obligation",
          "Direct Mahāvākya cognition is the immediate cause of Aparokṣa Jñāna"
        ],
        famousQuoteOrMantra: "अज्ञानसंशयाक्रान्तं यद्यत्स्याद् वस्तुजातितः । तत्तत्प्रकाशकं ज्ञानं नैव कर्म कदाचन ॥",
        historicalContext: "Formerly the celebrated Mīmāṁsā master Maṇḍana Miśra, converted by Śaṅkara in legendary philosophical debate at Mahiṣmatī."
      },
      {
        id: "vacaspati_misra",
        name: "Śrī Vācaspati Miśra",
        devanagariName: "वाचस्पति मिश्रः (सर्वतन्त्रस्वतन्त्रः)",
        title: "Founder of Bhāmatī Prasthāna",
        century: "9th - 10th Century CE",
        paramparaId: "advaita",
        lineageStage: "commentator",
        prominentDisciples: ["Amalānanda"],
        seatsOrMathas: ["Mithilā"],
        keyWorks: [
          "Bhāmatī (Master commentary on Śāṅkarabhāṣya)",
          "Nyāyavārtikatātparyaṭīkā",
          "Tattvabindu",
          "Sāṅkhyatattvakaumudī",
          "Yogavaiśāradī"
        ],
        primaryDoctrines: [
          "Avacchedavāda: Jīva is the locus of ignorance (Nānā-Jīva-Vāda)",
          "Prasaṅkhyāna: Need for continued meditation on verbal cognition to yield direct realization",
          "Mind is an internal sensory organ (Indriya)"
        ],
        famousQuoteOrMantra: "नमो महद्गभीरार्थ-शङ्कराचार्य-भाषिते । भामतीं रचयेऽहं च वेदान्तरहस्यवित् ॥",
        historicalContext: "Known as Sarvatantra-Svatantra for writing authoritative treatises on all six orthodox Darśanas without conflicting their internal integrity."
      },
      {
        id: "dharmaraja_adhvarindra",
        name: "Śrī Dharmarāja Adhvarīndra",
        devanagariName: "धर्मराजाध्वरीन्द्रः",
        title: "Supreme Master of Advaita Epistemology",
        century: "17th Century CE",
        paramparaId: "advaita",
        lineageStage: "commentator",
        seatsOrMathas: ["Tañjāvūr / South India"],
        keyWorks: ["Vedāntaparibhāṣā", "Tarka-Cūḍāmaṇi"],
        primaryDoctrines: [
          "Epistemology of Six Pramāṇas in Advaita",
          "Perception defined as unity of Pramātṛ, Pramāṇa, and Viṣaya Caitanya through Antaḥkaraṇa-vṛtti",
          "Pramātva as Anadhigatābādhitārtha-viṣayakatvam"
        ],
        famousQuoteOrMantra: "इह खलु धर्मार्थकाममोक्षाख्येषु चतुर्विधपुरुषार्थेषु मोक्ष एव परमपुरुषार्थः । तस्य च कारणं ब्रह्मज्ञानम् ॥",
        historicalContext: "Synthesized Navya-Nyāya technical terminology to place Advaita epistemological proof on an invincible foundation."
      },
      {
        id: "madhusudana_sarasvati",
        name: "Śrī Madhusūdana Sarasvatī",
        devanagariName: "मधुसूदन सरस्वती",
        title: "The Lion of Non-Duality (Advaita-Siṁha)",
        century: "16th Century CE",
        paramparaId: "advaita",
        lineageStage: "commentator",
        guruName: "Viśveśvara Sarasvatī & Mādhava Sarasvatī",
        seatsOrMathas: ["Vārāṇasī"],
        keyWorks: [
          "Advaitasiddhi (Epochal masterpiece refuting Vyāsatīrtha's Nyāyāmṛta)",
          "Gūḍhārtha Dīpikā (Gītā Commentary)",
          "Bhakti-Rasāyanam",
          "Siddhānta-Bindu"
        ],
        primaryDoctrines: [
          "Five definitions of Mithyātva established with impenetrable Navya-Nyāya logic",
          "Synthesis of Advaita Monism with supreme ecstatic devotion to Lord Kṛṣṇa"
        ],
        famousQuoteOrMantra: "वंशीविभूषितकरान्नवनीरदाभात् पीताम्बरादरुणबिम्बफलाधरोष्ठात् । पूर्णेन्दुसुन्दरमुखादरविन्दनेत्रात् कृष्णात्परं किमपि तत्त्वमहं न जाने ॥",
        historicalContext: "Reconciled supreme philosophical Non-dualism with spontaneous Kṛṣṇa-Bhakti; contemporary of Emperor Akbar and Gosvāmī Tulsīdās."
      },
      {
        id: "sadananda_yogindra",
        name: "Śrī Sadānanda Yogīndra Sarasvatī",
        devanagariName: "सदानन्दयोगीन्द्रसरस्वती",
        title: "Author of Vedāntasāra (Prakaraṇa-Kāra)",
        century: "15th Century CE (c. 1500 CE)",
        paramparaId: "advaita",
        lineageStage: "acharya",
        guruName: "Advayānanda Sarasvatī",
        keyWorks: ["Vedāntasāra (वेदान्तसारः)"],
        primaryDoctrines: [
          "Anubandha-Catuṣṭaya & Sādhana-Catuṣṭaya",
          "Adhyāropāpavāda-Nyāya (Deliberate Superimposition & Sublation)",
          "Jahadajahallakṣaṇā (Bhāgalakṣaṇā in Tat Tvam Asi)",
          "Vṛtti-Vyāpti vs. Phala-Vyāpti in Brahman-Cognition",
          "Jīvanmukti & Spontaneous Ornaments of Virtue (Adveṣṭṛtvādi)"
        ],
        famousQuoteOrMantra: "अखण्डं सच्चिदानन्दमवाङ्मनसगोचरम् । आत्मानमखिलाधारमाश्रयेऽभीष्टसिद्धये ॥",
        historicalContext: "Composed the definitive pedagogical manual of Kevalādvaita Vedānta, celebrated across monastic and academic traditions for its structural perfection.",
        primaryGranthaId: "vedantasara"
      },
      {
        id: "sadasiva_brahmendra",
        name: "Śrī Sadāśiva Brahmendra Sarasvatī",
        devanagariName: "सदाशिवब्रह्मेन्द्रसरस्वती",
        title: "Avadhūta Sage & Master of Sahaja-Samādhi",
        century: "18th Century CE",
        paramparaId: "advaita",
        lineageStage: "acharya",
        guruName: "Śrī Paramaśivendra Sarasvatī (57th Pīṭhādhipati of Kāñcī Kāmakoṭi Pīṭha)",
        seatsOrMathas: ["Nerūr (Kāverī River)"],
        keyWorks: [
          "Advaitarasamañjarī (अद्वैतरसमञ्जरी)",
          "Ātma-Vidyā-Vilāsa (आत्मविद्याविलासः)",
          "Brahmasūtra-Vṛtti (ब्रह्मसूत्रवृत्तिः / ब्रह्मतत्त्वप्रकाशिका)",
          "Siddhānta-Kalpavallī"
        ],
        primaryDoctrines: [
          "Sahaja Samādhi (Effortless unbroken abidance in Brahman)",
          "Māyā-Mithyātva demonstrated through 20+ pristine poetic analogies",
          "Ativarṇāśrama-Sthiti (Transcendence of social roles & rituals)",
          "Pure Sākṣī-Caitanya untouched by bodily states or cosmic play"
        ],
        famousQuoteOrMantra: "अद्वैतमेव परमार्थतया प्रसिद्धं द्वैतं मृषा मतिविलासमवेत्य धीराः । सच्चित्सुखामृतमपारमखण्डमेकं ब्रह्मैव केवलमहं न ममास्ति संशयः ॥",
        historicalContext: "Revered throughout India as a supreme Avadhūta and Jīvanmukta who lived in silent ecstasy on the banks of the Kāverī; author of immortal Advaita kīrtanas and seminal Vedāntic commentaries.",
        primaryGranthaId: "advaitarasamanjari"
      }
    ]
  },
  {
    id: "visistadvaita",
    name: "Viśiṣṭādvaita",
    devanagariName: "विशिष्टाद्वैत-वेदान्तः (श्रीसम्प्रदायः)",
    englishTitle: "Qualified Non-Dualism",
    sampradayaName: "Śrī Sampradāya (Rāmānuja Tradition)",
    founderOrPreceptor: "Śrī Rāmānujācārya, Nāthamuni & Yāmunācārya",
    avatarOrDeity: "Śrīman Nārāyaṇa & Mahālakṣmī (Śrī)",
    primaryPhilosophy: "Viśiṣṭādvaita (Non-Duality of the Qualified Whole)",
    coreDoctrine: "Cit (sentient souls) and Acit (insentient matter) are real attributes (Prakāra) forming the eternal body (Śarīra) of the Supreme Lord (Śarīrī), who is Śrīman Nārāyaṇa.",
    realityModel: "Brahma-Prakāra-Pariṇāmavāda (Cosmic manifestation as real transformation of the divine body/modes while the Lord's essential nature remains immutable).",
    jivaBrahmanRelation: "Śarīra-Śarīrī-Bhāva & Aprathak-Siddhi (Inseparable, dependent attribute-substance relationship). Jīva is eternal, atomic (Aṇu), and distinct in individuality yet organically one with Brahman.",
    mokshaMeans: "Bhakti-Rūpā-Śemuṣī (loving continuous meditation) & Prapatti / Śaraṇāgati (unreserved, total self-surrender).",
    badgeColor: "bg-amber-100 text-yellow-900 border-yellow-400",
    borderColor: "border-yellow-600",
    accentBg: "from-yellow-500/10 via-amber-500/5 to-transparent",
    canonicalGranthaIds: ["sribhasya", "yatindramatadipika", "vedarthasangraha"],
    subPrasthānas: [
      {
        id: "vadakalai",
        name: "Vaḍakalai (Northern Lineage)",
        sanskritName: "वडकलै — देशिक-सम्प्रदायः",
        proponent: "Svāmī Vedānta Deśika (1268–1369 CE)",
        century: "13th - 14th Century CE",
        coreEpistemology: "Markaṭa-Kiśora-Nyāya (The Monkey Analogy): Prapatti requires active cooperative surrender and self-effort, just as a baby monkey must hold fast to its mother. Sanskrit Śāstra and Tamil Prabandham given equal sovereign authority (Ubhayavedānta).",
        keyWorks: ["Tattvamuktākalāpa", "Nyāyapariśuddhi", "Rahasyatrayasāra", "Śatadūṣaṇī"]
      },
      {
        id: "tenkalai",
        name: "Teṅkalai (Southern Lineage)",
        sanskritName: "तेङ्कलै — लोक-सम्प्रदायः",
        proponent: "Piḷḷai Lokācārya (1264–1327 CE) & Maṇavāḷa Māmuni",
        century: "13th - 15th Century CE",
        coreEpistemology: "Mārjāra-Kiśora-Nyāya (The Cat Analogy): Grace (Nirhetuka Kṛpā) is unconditional and absolute; the mother cat carries her kitten without requiring the kitten's effort. Primacy given to the Nālāyira Divya Prabandham (Drāviḍa Veda).",
        keyWorks: ["Śrīvacanabhūṣaṇam", "Mumukṣuppaḍi", "Tattvatraya"]
      }
    ],
    keyGurus: [
      {
        id: "nammalvar",
        name: "Śaṭhakopa (Nammāḻvār)",
        devanagariName: "नम्माऴ्वार् (शठकोपमुनिः)",
        title: "Foremost of the 12 Āḻvārs, Head of Prapanna Kula",
        century: "9th Century CE (Traditional: 3000 BCE)",
        paramparaId: "visistadvaita",
        lineageStage: "rishi",
        guruName: "Viṣvaksena & Mahālakṣmī",
        prominentDisciples: ["Madhurakavi Āḻvār", "Śrīman Nāthamuni (through mystic vision)"],
        seatsOrMathas: ["Āḻvārtirunagari (Tirukkurugūr)"],
        keyWorks: ["Tiruvāymoḻi (The Sāma Veda of Tamil)", "Tiruviruttam", "Tiruvāśiriyam", "Periya Tiruvandādi"],
        primaryDoctrines: [
          "Bhakti-Prapatti as supreme ecstasy",
          "Nārāyaṇa as the indweller of all beings (Antaryāmin)",
          "Singing and dancing in divine love as liberation on earth"
        ],
        famousQuoteOrMantra: "उच्चैः शठारि-वचनानि निशम्य हृष्टाः संसार-सिन्धु-तरणे दृढ-निश्चयाः स्युः ॥",
        historicalContext: "Spent sixteen years in silent communion under the sacred tamarind tree, pouring forth the sublime Tiruvāymoḻi."
      },
      {
        id: "nathamuni",
        name: "Śrīman Nāthamuni",
        devanagariName: "श्रीमन्नाथमूनिः",
        title: "First Achārya of Ubhaya-Vedānta",
        century: "9th - 10th Century CE (c. 823–924 CE)",
        paramparaId: "visistadvaita",
        lineageStage: "acharya",
        guruName: "Nammāḻvār (via Yoga-Samādhi)",
        prominentDisciples: ["Puṇḍarīkākṣa (Uyyakkoṇḍār)", "Kuruhaikāvalappan"],
        seatsOrMathas: ["Vīranārāyaṇapuram (Kāṭṭumannārkoil) / Śrīraṅgam"],
        keyWorks: ["Nyāyatattva (Foundational Viśiṣṭādvaita Logic)", "Yogarahasya", "Purushaniyamam"],
        primaryDoctrines: [
          "Recovery and music-codification of the 4,000 Divya Prabandhams",
          "Integration of Sanskrit Vedic ritual and Tamil devotional hymnody (Ubhaya Vedānta)",
          "Prāpya-Prāpaka-Aikyata (The Lord is both the goal and the means)"
        ],
        famousQuoteOrMantra: "नमोऽचिन्त्याद्भुताक्लिष्ट-ज्ञानवैराग्यराशये । नाथाय मुनयेऽगाध-भगवद्भक्तिसिन्धवे ॥",
        historicalContext: "Traveled across Tamil Nadu to collect the lost stanzas of Nammāḻvār, institutionalizing temple music and Divya Prabandham chanting at Śrīraṅgam."
      },
      {
        id: "yamunacarya",
        name: "Śrī Yāmunācārya (Āḻavandār)",
        devanagariName: "श्री यामुनाचार्यः (आळवन्दार)",
        title: "Great Preceptor, Grandson of Nāthamuni",
        century: "10th - 11th Century CE (c. 916–1041 CE)",
        paramparaId: "visistadvaita",
        lineageStage: "acharya",
        guruName: "Rāmamiśra (Maṇakkāl Nambi)",
        prominentDisciples: ["Mahāpūrṇa (Periya Nambi)", "Tirukkoṭṭiyūr Nambi", "Tirumālai Āṇḍān"],
        seatsOrMathas: ["Śrīraṅgam Śrī Raṅganātha Swāmī Temple"],
        keyWorks: [
          "Siddhitraya (Ātmasiddhi, Īśvarasiddhi, Saṁvitsiddhi)",
          "Gītārthasaṅgraha",
          "Āgamaprāmāṇya (Defense of Pāñcarātra)",
          "Stotraratnam (Alavandar Stotram)",
          "Catuḥślokī"
        ],
        primaryDoctrines: [
          "Rigorous defense of individual selfhood (Ātman) as eternal Knower (Jñātā)",
          "Authenticity of Pāñcarātra Āgamas as Vedic revelation",
          "Formulation of the three vows that summoned Śrī Rāmānuja"
        ],
        famousQuoteOrMantra: "न धर्मनिष्ठोऽस्मि न चात्मवेदी न भक्तिमांस्त्वच्चरणारविन्दे । अकिञ्चनोऽनन्यगतिः शरण्य त्वत्पादमूलं शरणं प्रपद्ये ॥",
        historicalContext: "Won a kingdom in childhood debate, lived as a king, then renounced the throne upon hearing the Gītā from Rāmamiśra to head the Śrīraṅgam monastery."
      },
      {
        id: "ramanuja",
        name: "Jagadguru Śrī Rāmānujācārya",
        devanagariName: "जगद्गुरु श्रीरामानुजाचार्यः (यतिराजः)",
        title: "Yatirāja, Systematizer of Viśiṣṭādvaita",
        century: "1017–1137 CE (120 years of divine life)",
        paramparaId: "visistadvaita",
        lineageStage: "acharya",
        guruName: "Mahāpūrṇa (Periya Nambi), Yādavaprakāśa (early), Gosthīpūrṇa",
        prominentDisciples: ["Kūreśa (Śrīvatsāṅka Miśra)", "Mudaliyāṇḍān (Dāśarathi)", "Anantāḻvān", "Kūra-Nārāyaṇa"],
        seatsOrMathas: ["Śrīraṅgam", "Tirumala Tirupati", "Melukote (Yādavādri)", "Kāñcīpuram"],
        keyWorks: [
          "Śrībhāṣya (Monumental commentary on Brahma Sūtras)",
          "Vedārthasaṅgraha",
          "Vedāntadīpa",
          "Vedāntasāra",
          "Bhagavad Gītā Bhāṣya",
          "Gadyatrayam (Śaraṇāgati, Śrīraṅga, Vaikuṇṭha Gadya)",
          "Nityagrantha"
        ],
        primaryDoctrines: [
          "Śarīra-Śarīrī-Bhāva: Cosmos as the body of Nārāyaṇa",
          "Saptavidha-Anupapatti (Seven fatal dialectical defects in Advaita's Avidyā doctrine)",
          "Universal dissemination of the sacred Aṣṭākṣarī Mantra from the temple tower of Tirukkoṭṭiyūr",
          "Elevation of all castes and communities into spiritual parity (Prapatti)"
        ],
        famousQuoteOrMantra: "अखिलभुवनजन्मस्थेमभङ्गादिलीले विद्रुतविविधदुःखव्रातसंसारिबन्धुः । श्रुतिशिरसि विदीप्ते ब्रह्मणि श्रीनिवासे भवतु मम परस्मिन् शेमुषी भक्तिरूपा ॥",
        historicalContext: "Traveled across India to write the Śrībhāṣya using the Bodhāyana Vṛtti in Kashmir; reconstructed Melukote, consecrated Cheluvanārāyaṇa, and reformed temple worship."
      },
      {
        id: "vedanta_desika",
        name: "Svāmī Vedānta Deśika",
        devanagariName: "स्वामी वेदान्त देशिकः (कवितार्किकसिंहः)",
        title: "Lion of Poets and Dialecticians, Pillar of Vaḍakalai",
        century: "1268–1369 CE",
        paramparaId: "visistadvaita",
        lineageStage: "acharya",
        guruName: "Appuḷḷār (Vādihamsāmbuvāha)",
        prominentDisciples: ["Nayanācārya (Kumāra Varadācārya)", "Brahmatantrasvatantra Jīyar"],
        seatsOrMathas: ["Śrīraṅgam", "Kāñcīpuram", "Satyagala", "Ahobila Maṭha / Parakāla Maṭha"],
        keyWorks: [
          "Śatadūṣaṇī (100 dialectical refutations of Advaita)",
          "Tattvamuktākalāpa & Sarvārthasiddhi",
          "Nyāyapariśuddhi",
          "Rahasyatrayasāra (Magnum opus on Prapatti)",
          "Pādukāsahasram (1008 verses in one night)",
          "Yādavābhyudayam",
          "Haṁsasandeśa"
        ],
        primaryDoctrines: [
          "Ubhaya-Vedānta Synthesis: Perfect harmony of Vedic Sanskrit and Tamil canon",
          "Rigorous defense of Prapatti with Angas (Anukūlyasya Saṅkalpa, etc.)",
          "Polymathic defense of Śrīraṅgam during 14th-century invasions"
        ],
        famousQuoteOrMantra: "श्रीमते निगमान्तमहादेशिकाय नमः । कवितार्किकसिंहाय कल्याणगुणशालिने । श्रीमते वेङ्कटेशाय वेदान्तगुरवे नमः ॥",
        historicalContext: "Saved the Śrībhāṣya manuscript and Rāmānuja's legacy during the sack of Śrīraṅgam, hiding among the slain bodies and fleeing to Satyagala."
      }
    ]
  },
  {
    id: "dvaita",
    name: "Dvaita Vedānta",
    devanagariName: "द्वैत-वेदान्तः (माध्व-तत्त्ववादः)",
    englishTitle: "Absolute Realist Dualism",
    sampradayaName: "Brahmā-Mādhva Sampradāya",
    founderOrPreceptor: "Śrī Madhvācārya (Pūrṇaprajña / Ānandatīrtha)",
    avatarOrDeity: "Śrīman Nārāyaṇa (Viṣṇu) & Vāyu Avatāra",
    primaryPhilosophy: "Tattvavāda (Philosophy of Ultimate Distinctions and Absolute Reality)",
    coreDoctrine: "Svatantra (Independent Reality - Lord Viṣṇu alone) and Paratantra (Dependent Reality - all Jīvas and insentient Prakṛti). The world is absolutely real, not illusory.",
    realityModel: "Satyatva of the Universe (Unchangeable ontological reality of both matter and souls).",
    jivaBrahmanRelation: "Bimba-Pratibimba-Bhāva & Pañca-Bheda (Five eternal real differences: God-Jīva, God-Matter, Jīva-Jīva, Jīva-Matter, Matter-Matter). Jīvas have innate eternal hierarchy (Tāratamya).",
    mokshaMeans: "Amalā-Bhakti (pure, untainted devotion backed by correct knowledge of God's majesty and sovereign independence) & Prasāda (Divine Grace).",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    borderColor: "border-blue-600",
    accentBg: "from-blue-500/10 via-sky-500/5 to-transparent",
    canonicalGranthaIds: ["upadhikhandana", "nyayamrta", "anuvyakhyana"],
    subPrasthānas: [
      {
        id: "tikacarya_line",
        name: "Ṭīkākāra Tradition (Scholastic Dialectic)",
        sanskritName: "टीकाकार-परम्परा — जयतीर्थ-प्रस्थानम्",
        proponent: "Śrī Jayatīrtha (1345–1388 CE)",
        century: "14th Century CE",
        coreEpistemology: "Rigorous formal dialectics of Sākṣī Pramāṇa (infallible direct intuitive witness) and absolute realism. Systematized the entire Sarvamūla corpus.",
        keyWorks: ["Śrīman Nyāyasudhā", "Tattvaprakāśikā", "Vādāvalī"]
      },
      {
        id: "vyasathirtha_line",
        name: "Vyāsatraya Tradition (Polemical Zenith)",
        sanskritName: "व्यासत्रय-प्रस्थानम्",
        proponent: "Śrī Vyāsatīrtha (1460–1539 CE)",
        century: "15th - 16th Century CE",
        coreEpistemology: "Supreme logical refutation of Advaita non-dualism and Mithyātva; integration of Haridāsa Bhakti movement (Purandara Dāsa, Kanaka Dāsa).",
        keyWorks: ["Nyāyāmṛta", "Tarkatāṇḍava", "Tātparyacandrikā"]
      }
    ],
    keyGurus: [
      {
        id: "madhvacarya",
        name: "Jagadguru Śrī Madhvācārya",
        devanagariName: "जगद्गुरु श्रीमन्मध्वाचार्यः (आनन्दतीर्थः)",
        title: "Pūrṇaprajña, Third Incarnation of Mukhyaprāṇa (Vāyu)",
        century: "1238–1317 CE",
        paramparaId: "dvaita",
        lineageStage: "acharya",
        guruName: "Acyutaprekṣa (initiation) & Maharṣi Veda Vyāsa (at Badarī)",
        prominentDisciples: [
          "Padmanābha Tīrtha",
          "Narahari Tīrtha",
          "Mādhava Tīrtha",
          "Akṣobhya Tīrtha",
          "8 Monks of Ashta Mathas (Udupi)"
        ],
        seatsOrMathas: [
          "Udupi Śrī Kṛṣṇa Maṭha (8 Mathas: Pejawara, Palimaru, Admaru, Puttige, Krishnapura, Shirur, Sode, Kaniyoor)",
          "Uttarādi Maṭha"
        ],
        keyWorks: [
          "Sarvamūla Granthas (37 Texts)",
          "Brahmasūtra-Bhāṣya & Anuvyākhyāna",
          "Daśa Prakaraṇas (Upādhikhaṇḍana, Māyāvādakhaṇḍana, Tattvodyota, etc.)",
          "Bhagavad Gītā Bhāṣya & Tātparya Nirṇaya",
          "Mahābhārata Tātparya Nirṇaya",
          "Dvādaśa Stotram"
        ],
        primaryDoctrines: [
          "Svatantra-Asvatantra-Vibhāga (Viṣṇu alone is Svatantra)",
          "Pañca-Bheda (Five-fold absolute eternal differences)",
          "Svarūpa-Tāratamya (Inherent eternal hierarchy of souls)",
          "Sākṣī Pramāṇa (Infallible witness consciousness)",
          "Concealed presence in Badarikāśrama learning from Vyāsa"
        ],
        famousQuoteOrMantra: "श्रीमन्मध्वमते हरिः परतरः सत्यं जगत् तत्त्वतो भेदो जीवगणा हरेरनुचरा नीचोच्चभावं गताः । मुक्तिर्नैजसुखानुभूतिरमला भक्तिश्च तत्साधनम् ॥",
        historicalContext: "Discovered the divine idol of Lord Bālakṛṣṇa encased in Gopīcandana clay off the coast of Malpe and consecrated Udupi Kṛṣṇa Temple."
      },
      {
        id: "jayathirtha",
        name: "Śrī Jayatīrtha (Ṭīkācārya)",
        devanagariName: "श्रीजयतीर्थः (टीकाचार्यः)",
        title: "Master Commentator of Dvaita Vedānta",
        century: "1345–1388 CE",
        paramparaId: "dvaita",
        lineageStage: "acharya",
        guruName: "Akṣobhya Tīrtha",
        prominentDisciples: ["Vidyādhirāja Tīrtha"],
        seatsOrMathas: ["Malkhed (Uttarādi Maṭha)"],
        keyWorks: [
          "Śrīman Nyāyasudhā (Immortal exposition of Anuvyākhyāna)",
          "Tattvaprakāśikā (Commentary on Brahmasūtrabhāṣya)",
          "Vādāvalī",
          "Pramāṇapaddhati (Foundational text on Dvaita Epistemology)",
          "Nyāyadīpikā"
        ],
        primaryDoctrines: [
          "Exhaustive defense of realism against Advaita illusionism",
          "Rigorous formulation of Sākṣī, Pratyakṣa, Anumāna, and Śabda",
          "Complete philosophical synthesis of Madhva's cryptic aphoristic statements"
        ],
        famousQuoteOrMantra: "यस्य वागामृतं नाम पीत्वा मुक्ता भवन्ति वै । तं वन्दे जयतीर्थार्यं टीकाकृत्प्रवरं गुरुम् ॥",
        historicalContext: "Born to an aristocratic general, renounced riches after a mystical encounter with Akṣobhya Tīrtha drinking water directly from a river like a saint."
      },
      {
        id: "vyasathirtha",
        name: "Śrī Vyāsatīrtha (Vyāsarāja)",
        devanagariName: "श्रीव्यासतीर्थः (व्यासराजः)",
        title: "Kulaguru of the Vijayanagara Empire, Master of Polemics",
        century: "1460–1539 CE",
        paramparaId: "dvaita",
        lineageStage: "acharya",
        guruName: "Śrī Brahmanya Tīrtha & Śrīpadarāja",
        prominentDisciples: ["Vādirāja Tīrtha", "Purandara Dāsa", "Kanaka Dāsa", "Vijayīndra Tīrtha"],
        seatsOrMathas: ["Vyāsarāja Maṭha / Hampi / Tirumala"],
        keyWorks: [
          "Nyāyāmṛta (The immortal nectar of dualist dialectics)",
          "Tarkatāṇḍava (Refutation of Navya-Nyāya epistemology)",
          "Tātparyacandrikā (Commentary on Tattvaprakāśikā)",
          "Bhedojjīvana",
          "Numerous Kannada Devaranāmas"
        ],
        primaryDoctrines: [
          "Uncompromising refutation of the concept of Anirvacanīyatva (indescribability)",
          "Royal patronage and spiritual guardianship of King Kṛṣṇadevarāya",
          "Father figure to the Dāsa Sāhitya movement integrating all social classes"
        ],
        famousQuoteOrMantra: "अर्थाधिष्ठितशास्त्रज्ञं तर्कताण्डवपारगम् । व्यासतीर्थगुरुं वन्दे न्यायसुधार्णवोद्धरम् ॥",
        historicalContext: "Saved King Kṛṣṇadevarāya from the deadly astrologic affliction (Kuhu Yoga) by ascending the throne of Vijayanagara, worshipped Lord Veṅkaṭeśvara at Tirumala for 12 years."
      },
      {
        id: "raghavendra_swami",
        name: "Śrī Rāghavendra Swāmī (Rayaru)",
        devanagariName: "श्रीराघवेन्द्रस्वामी (मन्त्रालय-प्रभुः)",
        title: "Great Saint of Mantralaya, Parimalācārya",
        century: "1595–1671 CE",
        paramparaId: "dvaita",
        lineageStage: "acharya",
        guruName: "Śrī Sudhīndra Tīrtha",
        prominentDisciples: ["Yādavārya", "Appaṇṇācārya"],
        seatsOrMathas: ["Mantralayam (Andhra Pradesh) / Rāghavendra Swamy Maṭha"],
        keyWorks: [
          "Parimala (Super-commentary on Nyāyasudhā)",
          "Bhāvadīpa (on Tattvaprakāśikā)",
          "Gītā-Vivṛti",
          "Nyāyamuktāvalī",
          "Bhaṭṭa-Saṅgraha (on Pūrva-Mīmāṁsā)"
        ],
        primaryDoctrines: [
          "Deep compassion, accessible scriptural synthesis, and universal grace",
          "Entering live Jīva Samādhi (Bṛndāvana) at Mantralaya to grant boons for 700 years"
        ],
        famousQuoteOrMantra: "पूज्याय राघवेन्द्राय सत्यधर्मरताय च । भजतां कल्पवृक्षाय नमतां कामधेनुवे ॥",
        historicalContext: "Celebrated philosopher-saint whose living Bṛndāvana at Mantralaya continues to be a supreme center of spiritual refuge."
      }
    ]
  },
  {
    id: "suddhadvaita",
    name: "Śuddhādvaita",
    devanagariName: "शुद्धाद्वैत-वेदान्तः (पुष्टिमार्गः)",
    englishTitle: "Pure Non-Dualism",
    sampradayaName: "Rudra Sampradāya (Vallabha Tradition)",
    founderOrPreceptor: "Śrī Vallabhācārya (Mahāprabhuji) & Viṣṇusvāmī",
    avatarOrDeity: "Śrī Śrīnāthajī (Lord Kṛṣṇa as Govardhanadhārī)",
    primaryPhilosophy: "Śuddhādvaita (Pure Non-Dualism untainted by Māyā)",
    coreDoctrine: "Brahman and the Universe are purely one without the necessity of any illusory Māyā. The world is a real manifestation (Āvirbhāva) of Brahman's Being (Sat) and Consciousness (Cit), while His Bliss (Ānanda) is latent.",
    realityModel: "Avikṛta-Pariṇāmavāda (Unmodified material transformation; like gold transformed into ornaments without losing its pure gold nature).",
    jivaBrahmanRelation: "Aṁśa-Aṁśī-Bhāva (Sparks from a blazing fire). Jīva is a real spark of Brahman with bliss unmanifest during Saṁsāra.",
    mokshaMeans: "Puṣṭi-Bhakti (Divine grace nourishment, selfless loving service / Sevā of Śrī Kṛṣṇa) culminating in Sayujya with Lord Kṛṣṇa in Goloka.",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
    borderColor: "border-red-600",
    accentBg: "from-red-500/10 via-rose-500/5 to-transparent",
    canonicalGranthaIds: ["anubhasya", "tattvadipanibandha", "subodhini"],
    keyGurus: [
      {
        id: "vallabhacarya",
        name: "Jagadguru Śrī Vallabhācārya",
        devanagariName: "जगद्गुरु श्रीवल्लभाचार्यः (महाप्रभुजी)",
        title: "Mahāprabhuji, Incarnation of Lord Kṛṣṇa's Agni Mukh",
        century: "1479–1531 CE",
        paramparaId: "suddhadvaita",
        lineageStage: "acharya",
        guruName: "Viṣṇucitta & Direct Command of Lord Śrīnāthajī",
        prominentDisciples: ["Gopinātha", "Viṭṭhalanātha (Gusāīnjī)", "Dāmodaradāsa Harsānī", "84 Vaiṣṇavas"],
        seatsOrMathas: ["Jatīpura (Govardhana)", "Aḍail (Prayāga)", "Vārāṇasī", "84 Baithaks across India"],
        keyWorks: [
          "Anubhāṣya (Commentary on Brahma Sūtras)",
          "Subodhinī (Monumental commentary on Śrīmad Bhāgavatam)",
          "Tattvadīpanibandha (Śāstrārtha, Sarvanirṇaya, Bhāgavatārtha)",
          "Ṣoḍaśa Granthas (Yamunāṣṭakam, Siddhāntamuktāvalī, Puṣṭipravāhamaryādā, etc.)",
          "Madhurāṣṭakam"
        ],
        primaryDoctrines: [
          "Śuddhādvaita: Non-duality untainted by the concept of illusory Māyā",
          "Avikṛta-Pariṇāmavāda (Unmodified creation)",
          "Puṣṭi-Mārga: The path of divine nourishment where God's Grace (Kṛpā) alone is both means and end",
          "Āvirbhāva and Tirobhāva (Manifestation and Concealment as the cosmic sport / Līlā)"
        ],
        famousQuoteOrMantra: "सर्वदा सर्वभावेन भजनीयो व्रजाधिपः । स्वामिन्या सहितः कृष्णः परमानन्दरूपकः ॥",
        historicalContext: "Won the Kanakābhiṣeka gold coronation in debate at the Vijayanagara court of King Kṛṣṇadevarāya; consecrated the worship of Śrī Śrīnāthajī on Govardhana Hill."
      },
      {
        id: "vitthalanatha",
        name: "Śrī Viṭṭhalanātha (Gusāīnjī)",
        devanagariName: "श्रीविट्ठलनाथः (गुसांईजी)",
        title: "Second Son of Vallabhācārya, Organizer of Aṣṭachāp",
        century: "1516–1586 CE",
        paramparaId: "suddhadvaita",
        lineageStage: "acharya",
        guruName: "Śrī Vallabhācārya & Śrī Gopināthajī",
        prominentDisciples: ["Gokulanātha", "Giri-dhara", "The 8 Great Ashta-chhap Poets (Surdās, Nandadās, etc.)"],
        seatsOrMathas: ["Gokula", "Govardhana", "Mathurā"],
        keyWorks: [
          "Vidvanmaṇḍanam (Polemics establishing Śuddhādvaita over other schools)",
          "Anubhāṣya-Pūraṇa (Completed his father's Brahma Sūtra commentary from 3.2.34 onwards)",
          "Bhakti-Hetu Nirṇaya",
          "Śṛṅgāra-Rasa-Maṇḍana"
        ],
        primaryDoctrines: [
          "Elaboration of Rāgānugā Sevā rituals (Nava-Nidhi worship and royal aesthetics)",
          "Philosophical defense of the divine emotional moods of Vraja Bhakti"
        ],
        famousQuoteOrMantra: "नमामि पितरं वल्लभं सकलागमपारगम् । यस्य वाक्यप्रसादेन मुच्यन्ते भवबन्धनात् ॥",
        historicalContext: "Structured the enduring daily temple aesthetic, music, textile, and liturgical traditions of Puṣṭimārga temples."
      }
    ]
  },
  {
    id: "dvaitadvaita",
    name: "Dvaitādvaita",
    devanagariName: "द्वैताद्वैत-वेदान्तः (निम्बार्क-सम्प्रदायः)",
    englishTitle: "Natural Dualism-in-Non-Dualism",
    sampradayaName: "Sanakādi / Haṁsa Sampradāya",
    founderOrPreceptor: "Śrī Nimbārkācārya",
    avatarOrDeity: "Śrī Rādhā-Mādhava (Yugala-Kṛṣṇa)",
    primaryPhilosophy: "Svābhāvika Bhedābheda (Natural Simultaneous Difference and Non-Difference)",
    coreDoctrine: "Brahman (Śrī Kṛṣṇa), the Jīvas, and the insentient universe (Jagat) are naturally both different (Bheda) and non-different (Abheda), just as rays are both distinct from and part of the sun, or waves of the ocean.",
    realityModel: "Svābhāvika-Pariṇāma (Natural modification of divine energetic power without mutation of the Lord's essential nature).",
    jivaBrahmanRelation: "Natural Bhedābheda. The Jīva is distinct in its individual existence (Paratantra) yet non-different because its existence and functioning depend wholly on Brahman.",
    mokshaMeans: "Prapatti & Rādhā-Kṛṣṇa Upāsanā (Continuous meditation on the divine sports of the Divine Couple in Nitya Vṛndāvana).",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    borderColor: "border-emerald-600",
    accentBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
    canonicalGranthaIds: ["vedanta-parijata-saurabha", "dasasloki"],
    keyGurus: [
      {
        id: "nimbarkacarya",
        name: "Jagadguru Śrī Nimbārkācārya",
        devanagariName: "जगद्गुरु श्रीनिम्बार्काचार्यः (सुदर्शन-अवतारः)",
        title: "Incarnation of Sudarśana Cakra",
        century: "11th - 12th Century CE",
        paramparaId: "dvaitadvaita",
        lineageStage: "acharya",
        guruName: "Devarṣi Nārada (who received from the Sanakādi Ṛṣis)",
        prominentDisciples: ["Śrī Śrīnivāsācārya", "Audumbara Ṛṣi"],
        seatsOrMathas: ["Nimbagrāma / Vṛndāvana / Nimba Tīrtha"],
        keyWorks: [
          "Vedānta-Pārijāta-Saurabha (Brahma Sūtra Commentary)",
          "Daśaślokī (Siddhānta-Ratnam)",
          "Saviśeṣa-Nirviśeṣa-Śrīkṛṣṇa-Stava",
          "Prapanna-Kalpavallī",
          "Gītā-Tattva-Prakāśikā"
        ],
        primaryDoctrines: [
          "Svābhāvika Bhedābheda (Natural Co-existence of Difference and Non-Difference)",
          "Yugala-Upāsanā (First ācārya to place Śrīmatī Rādhārāṇī alongside Lord Kṛṣṇa on the supreme Vedantic altar)",
          "Guru-Prapatti as indispensable doorway to Brahman"
        ],
        famousQuoteOrMantra: "स्वाभाविकं भेदमभेदमेव सत्यं ब्रुवन्तं श्रुतिसत्यसङ्घम् । वन्दे मुकुन्दं शरणं प्रपद्ये निम्बार्कमाद्यं जगदेकबन्धुम् ॥",
        historicalContext: "Reconciled conflicting Vedic verses on absolute monism and dualism through the natural analogy of the coiled serpent and the solar radiance."
      },
      {
        id: "srinivasacarya_nimbarka",
        name: "Śrī Śrīnivāsācārya",
        devanagariName: "श्रीश्रीनिवासाचार्यः",
        title: "Chief Disciple of Nimbārka",
        century: "12th Century CE",
        paramparaId: "dvaitadvaita",
        lineageStage: "acharya",
        guruName: "Śrī Nimbārkācārya",
        prominentDisciples: ["Viśvācārya", "Puruṣottamācārya"],
        seatsOrMathas: ["Vṛndāvana"],
        keyWorks: ["Vedānta-Kaustubha (Master commentary expanding the Pārijāta-Saurabha)"],
        primaryDoctrines: [
          "Detailed exegetical exposition of every Brahma Sūtra according to Svābhāvika Bhedābheda"
        ],
        famousQuoteOrMantra: "श्रीमन्निम्बार्कपादाम्बुज-युगल-रजः-स्पर्धमानो विमुक्तिं दातुं शक्तः सदा यः प्रणतजन-हिताय...",
        historicalContext: "Systematized the theological and liturgical canons of the Sanakādi Sampradāya in Vraja."
      }
    ]
  },
  {
    id: "acintya",
    name: "Acintyabhedābheda",
    devanagariName: "अचिन्त्यभेदाभेद-वेदान्तः (गौडीय-सम्प्रदायः)",
    englishTitle: "Inconceivable Simultaneous Difference-and-Identity (Acintyabhedābheda)",
    sampradayaName: "Gauḍīya Vaiṣṇava Sampradāya (Brahma-Mādhva-Gauḍīya)",
    founderOrPreceptor: "Śrī Caitanya Mahāprabhu, Ṣaḍ-Gosvāmīs & Baladeva Vidyābhūṣaṇa",
    avatarOrDeity: "Svayaṁ Bhagavān Śrī Kṛṣṇa Caitanya Mahāprabhu",
    primaryPhilosophy: "Acintya Bhedābheda (अचिन्त्यभेदाभेद-वेदान्तः)",
    coreDoctrine: "Lord Kṛṣṇa is the Supreme Absolute Truth possessing infinite energies (Parā-Śakti, Cit, Jīva, Māyā). The relation between energy (Śakti) and energetic source (Śaktimān) is simultaneously identical and different, surpassing mundane intellectual logic (Acintya).",
    realityModel: "Acintya-Pariṇāmavāda (Inconceivable divine energetic transformation preserving eternal transcendent perfection).",
    jivaBrahmanRelation: "Vibhinnāṁśa & Jīva-Śakti (The Jīva is an eternal, atomic conscious spark of Kṛṣṇa's marginal energy / Taṭasthā-Śakti, eternally serving Him in Prema).",
    mokshaMeans: "Prema-Pumacarthaḥ (Love of God as the fifth and supreme goal of life beyond Mukti) achieved through Hari-Nāma Saṅkīrtana and Rāgānugā Bhakti.",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    borderColor: "border-purple-600",
    accentBg: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    canonicalGranthaIds: ["siddhantaratna", "govinda-bhasya", "tattva-sandarbha"],
    keyGurus: [
      {
        id: "caitanya_mahaprabhu",
        name: "Śrī Kṛṣṇa Caitanya Mahāprabhu",
        devanagariName: "श्रीकृष्णचैतन्य महाप्रभुः (गौरहरिः)",
        title: "Yugāvatāra of Prema, Combined Manifestation of Rādhā-Kṛṣṇa",
        century: "1486–1534 CE",
        paramparaId: "acintya",
        lineageStage: "divine",
        guruName: "Īśvara Purī (Bhakti diksha) & Keśava Bhāratī (Sannyāsa)",
        prominentDisciples: [
          "Nityānanda Prabhu",
          "Advaita Ācārya",
          "Svarūpa Dāmodara",
          "Rāmānanda Rāya",
          "Ṣaḍ-Gosvāmīs (Rūpa, Sanātana, Jīva, etc.)"
        ],
        seatsOrMathas: ["Māyāpur Navadvīpa", "Purī Jagannātha Dhāma", "Vṛndāvana"],
        keyWorks: ["Śikṣāṣṭakam (The Eight Nectarine Instructions)"],
        primaryDoctrines: [
          "Hari-Nāma Saṅkīrtana as the sole sovereign Yuga-Dharma",
          "Prema-Pumacarthaḥ: Transcendental Divine Love surpassing even Mokṣa",
          "Acintya Bhedābheda Tattva transmitted to Sanātana and Rūpa Gosvāmī",
          "Spiritual egalitarianism delivering all souls without distinction"
        ],
        famousQuoteOrMantra: "तृणादपि सुनीचेन तरोरपि सहिष्णुना । अमानिना मानदेन कीर्तनीयः सदा हरिः ॥",
        historicalContext: "Inundated the Indian subcontinent with spontaneous love of God, dancing in ecstasy before Lord Jagannātha in Purī."
      },
      {
        id: "jiva_goswami",
        name: "Śrī Jīva Gosvāmī",
        devanagariName: "श्रीजीव गोस्वामी (षट्-सन्दर्भकारः)",
        title: "Supreme Theologian of Gauḍīya Vedānta",
        century: "1513–1598 CE",
        paramparaId: "acintya",
        lineageStage: "acharya",
        guruName: "Śrī Rūpa Gosvāmī & Śrī Sanātana Gosvāmī",
        prominentDisciples: ["Śrīnivāsa Ācārya", "Narottama Dāsa Ṭhākura", "Śyāmānanda Prabhu"],
        seatsOrMathas: ["Rādhā-Dāmodara Temple, Sevā Kuñja (Vṛndāvana)"],
        keyWorks: [
          "Ṣaṭ-Sandarbha (Tattva, Bhagavat, Paramātma, Kṛṣṇa, Bhakti, Prīti Sandarbhas)",
          "Sarva-Saṁvādinī (Dialectical super-commentary)",
          "Hari-nāmāmṛta-vyākaraṇa",
          "Gopāla-Campū"
        ],
        primaryDoctrines: [
          "Formalized Acintya Bhedābheda into an unassailable philosophical framework",
          "Śrīmad Bhāgavatam as the pristine, natural commentary on the Brahma Sūtras",
          "Sambandha, Abhidheya, and Prayojana Tattva analysis"
        ],
        famousQuoteOrMantra: "अचिन्त्यत्वं च तर्क-असह-अविभाव्यमान-कार्य-कारणत्वम् । स्वभावतः परस्पर-विरुद्ध-गुण-समावेश-सामर्थ्यम् ॥",
        historicalContext: "Maintained the world-famous manuscript library at Rādhā Dāmodara Temple, acclaimed as the foremost Sanskrit scholar of his era."
      },
      {
        id: "baladeva_vidyabhusana",
        name: "Śrī Baladeva Vidyābhūṣaṇa",
        devanagariName: "श्रीबलदेव विद्याभूषणः",
        title: "Author of Govinda Bhāṣya",
        century: "18th Century CE (c. 1700–1793 CE)",
        paramparaId: "acintya",
        lineageStage: "commentator",
        guruName: "Viśvanātha Cakravartī Ṭhākura",
        prominentDisciples: ["Nanda-kiśora"],
        seatsOrMathas: ["Galta Gādī (Jaipur) / Vṛndāvana"],
        keyWorks: [
          "Govinda Bhāṣya (The celebrated Gauḍīya commentary on Brahma Sūtras)",
          "Siddhāntaratna",
          "Prameyaratnāvalī",
          "Gītā-Bhūṣaṇa",
          "Siddhānta-Darpaṇa"
        ],
        primaryDoctrines: [
          "Vindicated Gauḍīya Vedānta's legitimate Prasthānatrayī status at the royal court of Jaipur",
          "Dictation of the Govinda Bhāṣya directly received through the mystic grace of Govindadevajī"
        ],
        famousQuoteOrMantra: "विद्योत्कृष्टं भूषणं यस्य तं वै विद्याभूषणं वेदान्तभाष्यकारम् । गोविन्दतोषास्पद-भक्तिसारं वन्दे महाभागवतं शरण्यम् ॥",
        historicalContext: "Defended Gauḍīya theological authenticity at the Royal Sabha of Amber (Jaipur), writing the Govinda Bhāṣya in record time."
      }
    ]
  },
  {
    id: "saktavisistadvaita",
    name: "Śāktaviśiṣṭādvaita",
    devanagariName: "शाक्तविशिष्टाद्वैत-वेदान्तः (शाक्तभाष्य-प्रस्थानम्)",
    englishTitle: "Śakti-Qualified Non-Dualism & Integral Tantra-Vedānta Synthesis",
    sampradayaName: "Śākta-Vedānta / Bhaṭpara Śāktabhāṣya Sampradāya",
    founderOrPreceptor: "Mahāmahopādhyāya Pañcānana Bhaṭṭācārya Tarkaratna (1866–1940)",
    avatarOrDeity: "Parā-Śakti / Jagadambā / Śiva-Śakti Svarūpa",
    primaryPhilosophy: "Śāktaviśiṣṭādvaita (Non-Dualism Qualified by Dynamic Parā-Śakti)",
    coreDoctrine: "Brahma-Śaktyor-Abhedaḥ (Brahman and Śakti are eternally non-different like fire and its heat; the universe is the real, luminous vibration/unfolding of Parā-Śakti, not an illusion).",
    realityModel: "Parāśakti-Pariṇāmavāda & Spandavāda (Real conscious unfolding of the Supreme Power without mutation of the transcendent substratum).",
    jivaBrahmanRelation: "Aṁśāṁśi-bhāva & Śakti-Śaktimad-Abheda (The individual soul is a conscious ray of Parā-Śakti, inherently non-different from Śiva-Śakti in liberation).",
    mokshaMeans: "Jñāna-Śāktānugraha & Bhakti-Samanvaya (Discriminative wisdom culminated through Divine Grace / Śaktipāta and supreme devotion to the Mother of the Universe).",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    borderColor: "border-rose-500",
    accentBg: "from-rose-500/10 via-pink-500/5 to-transparent",
    canonicalGranthaIds: ["brahmasutra-saktabhasya"],
    subPrasthānas: [
      {
        id: "saktabhasya_prasthana",
        name: "Śāktabhāṣya Prasthāna",
        sanskritName: "शाक्तभाष्य-प्रस्थानम्",
        proponent: "Mahāmahopādhyāya Pañcānana Bhaṭṭācārya Tarkaratna (1866–1940)",
        century: "19th - 20th Century CE",
        coreEpistemology: "Integration of Śākta Āgamas with Upaniṣadic Brahmavidyā. The Brahma Sūtras are expounded as establishing Parā-Śakti as both the material and instrumental cause (Abhinna-Nimittopādāna-Kāraṇa) of the cosmos.",
        keyWorks: ["Brahmasūtra-Śāktabhāṣyam (Sarvavidyānidhāna)", "Īśopaniṣad-Śākta-Vyākhyā", "Sarvamaṅgalā-Kāvyam"]
      }
    ],
    keyGurus: [
      {
        id: "panchanana_tarkaratna",
        name: "MM Pañcānana Bhaṭṭācārya Tarkaratna",
        devanagariName: "महामहोपाध्याय पञ्चानन भट्टाचार्य तर्करत्नः",
        title: "Creator of the monumental Brahmasūtra-Śāktabhāṣyam, Polymath of Bhatpara",
        century: "1866–1940 CE",
        paramparaId: "saktavisistadvaita",
        lineageStage: "acharya",
        guruName: "MM Nandakumāra Bhaṭṭācārya Vidyāratna (Father & Guru)",
        prominentDisciples: ["Śrī Jīva Nyāyatīrtha", "Pandit Rākhāladāsa Nyāyaratna scholars of Bhatpara"],
        seatsOrMathas: ["Bhatpara Sanskrit Mandala (Bengal)", "Kashi Vidvat Parishad"],
        keyWorks: [
          "Brahmasūtra-Śāktabhāṣyam (Sanskrit Commentary on Bādarāyaṇa's Brahma Sūtras)",
          "Īśopaniṣad Śāktabhāṣyam",
          "Sarvamaṅgalā (Mahākāvyam in 20 Cantos)",
          "Pārthiva-Pūjā-Paddhati",
          "Critical Edition & Bengali Translations of 18 Mahāpurāṇas & Upapurāṇas (Bangabasi Press)"
        ],
        primaryDoctrines: [
          "Śaktiviśiṣṭa-Brahma-Vāda: Brahman is never impotent or static; Cit-Śakti is the intrinsic nature of Supreme Reality",
          "Parāśakti-Pariṇāma: The world is the real, blissful sportive play (Vilāsa) of the Divine Mother, refuting world-illusionism",
          "Harmony of Śruti and Tantra-Āgama: Proved that Brahma Sūtras naturally support Śākta Non-Dualism",
          "Jīva is a luminous ray of Parā-Śakti capable of direct divinization through Jñāna-Bhakti synthesis"
        ],
        famousQuoteOrMantra: "यथा वह्नेः स्थितिर्नैव वह्नित्वेन विना क्वचित् । तथा ब्रह्मणो नैवास्ति शक्तिहीनस्य संस्थितिः ॥\n(Just as fire cannot exist without its burning power, even so Brahman cannot exist devoid of Parā-Śakti.)",
        historicalContext: "Born in Bhatpara (the traditional Oxford of Bengal Sanskrit learning), Pañcānana Tarkaratna was awarded the title Mahāmahopādhyāya and the honorary D.Litt. from Banaras Hindu University for establishing the definitive Vedantic commentary (Śāktabhāṣya) for the Śākta tradition."
      },
      {
        id: "nandakumara_bhattacharya",
        name: "MM Nandakumāra Vidyāratna Bhaṭṭācārya",
        devanagariName: "महामहोपाध्याय नन्दकुमार विद्यारत्न भट्टाचार्यः",
        title: "Father & Preceptor of Pañcānana Tarkaratna, Bhatpara Lineage",
        century: "19th Century CE",
        paramparaId: "saktavisistadvaita",
        lineageStage: "acharya",
        prominentDisciples: ["MM Pañcānana Tarkaratna"],
        seatsOrMathas: ["Bhatpara Tole Tradition"],
        keyWorks: ["Traditional Nyāya-Smṛti-Tantra treatises"],
        primaryDoctrines: ["Preservation of the classical Bhatpara scholastic heritage", "Synthesis of Smārta ritualism and Śākta metaphysics"],
        historicalContext: "Revered patriarch of the celebrated Bhatpara Sanskrit lineage who trained his son in all branches of traditional Indian philosophy."
      },
      {
        id: "jiva_nyayatirtha",
        name: "Śrī Jīva Nyāyatīrtha (Bhaṭṭācārya)",
        devanagariName: "श्रीजीव न्यायतीर्थ भट्टाचार्यः",
        title: "Eminent Son and Scholastic Successor of Pañcānana Tarkaratna",
        century: "1894–1978 CE",
        paramparaId: "saktavisistadvaita",
        lineageStage: "modern",
        guruName: "MM Pañcānana Tarkaratna",
        seatsOrMathas: ["Bhatpara Sanskrit Parishad", "Government Sanskrit College Calcutta"],
        keyWorks: ["Numerous Sanskrit Dramas & Philosophical Exegeses", "Expositions on Śāktaviśiṣṭādvaita"],
        primaryDoctrines: ["Dissemination of Śāktabhāṣya philosophical principles through creative Sanskrit literature and academic pedagogy"],
        famousQuoteOrMantra: "माता पराशक्तिरनन्यरूपा जगन्मयी चिद्घनरूपवन्ती ।",
        historicalContext: "Carried forward the colossal scholastic and literary heritage of his father Pañcānana Tarkaratna, serving as the President of Bangiya Sahitya Parishat."
      }
    ]
  },
  {
    id: "swaminarayan",
    name: "Akṣarapurūṣottama Bhāṣya (स्वामिनारायण-भाष्यम्)",
    devanagariName: "अक्षरपुरुषोत्तम-भाष्यम् (स्वामिनारायण-वेदान्तः)",
    englishTitle: "Akṣara-Puruṣottama Bhāṣya & Darśana (Ontology of Five Eternal Realities)",
    sampradayaName: "Akṣara-Puruṣottama / Svāminārāyaṇa Sampradāya (BAPS & Vadtal/Ahmedabad Tradition)",
    founderOrPreceptor: "Bhagavān Svāminārāyaṇa (Sahajānanda Svāmī, 1781–1830 CE)",
    avatarOrDeity: "Parabrahman Bhagavān Svāminārāyaṇa & Akṣarabrahman Guṇātītānanda Svāmī",
    primaryPhilosophy: "Akṣara-Puruṣottama Darśana (अक्षरपुरुषोत्तम-भाष्य-प्रस्थानम्)",
    coreDoctrine: "Five eternal, distinct ontological realities (Pañca-Tattvas): Jīva, Īśvara, Māyā, Akṣarabrahman, and Parabrahman. Mukti is attained by becoming Akṣararūpa (Brahmarūpa) to offer eternal, loving servitude to Puruṣottama.",
    realityModel: "Akṣara-Puruṣottama-Siddhānta: Absolute ontological distinction between finite Jīvas, cosmic Īśvaras, insentient Māyā, all-pervasive Akṣarabrahman, and Supreme Sovereign Parabrahman.",
    jivaBrahmanRelation: "Sevak-Sevya-Bhāva through Akṣararūpatā. By association with the manifest Akṣarabrahman Guru (Guṇātīta Sādhu), the Jīva sheds its triple bodies (Sthūla, Sūkṣma, Kāraṇa), attains Brahmarūpatā, and serves Parabrahman in Akṣaradhāma.",
    mokshaMeans: "Ekāntika Dharma (Dharma, Jñāna, Vairāgya, Bhakti) & unreserved devotion (Prīti) to the Pragaṭa (Living) Akṣarabrahman Guru.",
    badgeColor: "bg-orange-100 text-orange-950 border-orange-300",
    borderColor: "border-orange-600",
    accentBg: "from-orange-500/10 via-amber-500/5 to-transparent",
    canonicalGranthaIds: [
      "swaminarayan-brahmasutra-bhashyam",
      "swaminarayan-upanishad-bhashyam",
      "swaminarayan-gita-bhashyam",
      "swaminarayan-siddhanta-sudha",
      "vachanamrut"
    ],
    subPrasthānas: [
      {
        id: "akshar_purushottam_sub",
        name: "Akṣara-Puruṣottama Prasthāna",
        sanskritName: "अक्षरपुरुषोत्तम-प्रस्थानम् (स्वामिनारायण-भाष्य-परम्परा)",
        proponent: "Mahāmahopādhyāya Bhadreśadāsa Svāmī, Brahmasvarūpa Śāstrījī Mahārāj",
        century: "19th - 21st Century CE",
        coreEpistemology: "Formalized via classical Sanskrit commentary on the complete Prasthānatrayī (Swaminarayan Bhashyam) and the dialectical treatise Swaminarayan-Siddhanta-Sudha. Establishes Akṣara and Puruṣottama as two distinct, eternal conscious entities recognized by the World Sanskrit Conference and Kashi Vidwat Parishad.",
        keyWorks: ["Swaminarayan Bhashyam (Brahma Sutras, 10 Upanishads, Bhagavad Gita)", "Swaminarayan-Siddhanta-Sudha", "Vachanāmrut", "Shikshāpatrī"]
      }
    ],
    keyGurus: [
      {
        id: "bhagwan_swaminarayan",
        name: "Bhagavān Svāminārāyaṇa",
        devanagariName: "भगवान् स्वामिनारायणः (सहजानन्द स्वामी)",
        title: "Supreme Parabrahman, Founder of Svāminārāyaṇa Sampradāya",
        century: "1781–1830 CE",
        paramparaId: "swaminarayan",
        lineageStage: "divine",
        guruName: "Svāmī Rāmānanda (Uddhava-Avatāra)",
        prominentDisciples: ["Guṇātītānanda Svāmī", "Gopālānanda Svāmī", "Muktānanda Svāmī", "Brahmānanda Svāmī", "Nityānanda Svāmī"],
        seatsOrMathas: ["Gadhada (Dada Khachar Darbar)", "Vadtal", "Ahmedabad", "Akshardham"],
        keyWorks: [
          "Vachanāmrut (273 Discourses in Gujarati, transcribed verbatim by 4 leading Paramahamsas)",
          "Shikshāpatrī (212 Sanskrit ethical and spiritual injunctions)",
          "Satsangijivan"
        ],
        primaryDoctrines: [
          "Five Eternal Realities (Pañca-Tattvas: Jīva, Īśvara, Māyā, Akṣarabrahman, Parabrahman)",
          "Akṣararūpa-Bhavitvā (Becoming Brahmarūpa to offer Bhakti to Puruṣottama)",
          "Manifest Guru Tradition (The unbroken living presence of Akṣarabrahman on earth)",
          "Ahimsa, moral purity, eradication of addiction, upliftment of women, and inter-caste brotherhood"
        ],
        famousQuoteOrMantra: "परब्रह्म स्वामिनारायणः साक्षात् पुरुषोत्तमोऽक्षरधामाधिपतिः । निजभक्तानां मोक्षाय स्वयमेवावतीर्णः ॥",
        historicalContext: "Traveled across the length and breadth of India on foot for 7 years as Nilkanth Varni from the age of 11, settling in Gujarat to inaugurate a spiritual, social, and moral revolution."
      },
      {
        id: "gunatitanand_swami",
        name: "Akṣaramūrti Guṇātītānanda Svāmī",
        devanagariName: "अक्षरमूर्ति गुणातीतानन्द स्वामी",
        title: "First Spiritual Successor, Personified Akṣarabrahman",
        century: "1785–1867 CE",
        paramparaId: "swaminarayan",
        lineageStage: "acharya",
        guruName: "Bhagavān Svāminārāyaṇa",
        prominentDisciples: ["Bhagatji Maharaj (Pragji Bhakta)", "Jaga Bhakta", "Balmukunddas Swami"],
        seatsOrMathas: ["Junagadh Mandir (Mahant for 40 years)"],
        keyWorks: ["Swamini Vato (Profound oral discourses on spiritual realization and detachment)"],
        primaryDoctrines: [
          "Revealed as the primordial abode and manifest Akṣarabrahman by Bhagavān Svāminārāyaṇa",
          "Constant unbroken remembrance of God while engaged in service",
          "Eradication of base instincts (Svabhāva-Nivṛtti) through association with the Satpurusha"
        ],
        famousQuoteOrMantra: "अक्षरं ब्रह्म साक्षाद् गुणातीतानन्द एव । तदन्वयेन मोक्षः स्यात् सर्वजीवात्मनां ध्रुवम् ॥",
        historicalContext: "Served as the Mahant of Junagadh temple, continuously dispensing life-transforming spiritual wisdom recorded by disciples in the immortal Swamini Vato."
      },
      {
        id: "shastriji_maharaj",
        name: "Brahmasvarūpa Śāstrījī Mahārāj",
        devanagariName: "ब्रह्मस्वरूप शास्त्रीजी महाराज (यज्ञपुरुषदासजी)",
        title: "Founder of BAPS, Champion of Akṣara-Puruṣottama Darśana",
        century: "1865–1951 CE",
        paramparaId: "swaminarayan",
        lineageStage: "acharya",
        guruName: "Bhagatji Maharaj & Vignandas Swami",
        prominentDisciples: ["Yogiji Maharaj", "Pramukh Swami Maharaj"],
        seatsOrMathas: ["Bochasan", "Sarangpur", "Gondal", "Atladra", "Gadhada"],
        keyWorks: ["Akṣara-Puruṣottama Upāsanā Establishments", "Consecration of 5 historic Shikharbaddha Mandirs"],
        primaryDoctrines: [
          "Doctrinal consecration of the dual murtis of Akṣarabrahman (Gunatitanand Swami) and Parabrahman (Bhagwan Swaminarayan)",
          "Unyielding adherence to scriptural truth despite severe opposition and physical austerities"
        ],
        famousQuoteOrMantra: "अक्षरं गुणसम्पन्नं पुरुषोत्तममीश्वरम् । उभयं पूजयेन्नित्यं शास्त्रोक्त-विधिना सदा ॥",
        historicalContext: "Braved extreme hardships and ostracism to establish BAPS in 1907, ensuring the pure philosophical doctrine of Akshar-Purushottam was preserved in stone temples and scripture."
      },
      {
        id: "bhadreshdas_swami",
        name: "Mahāmahopādhyāya Bhadreśadāsa Svāmī",
        devanagariName: "महामहोपाध्याय भद्रेशदास स्वामी (वेदान्तभाष्यकारः)",
        title: "Contemporary Bhāṣyakāra of Prasthānatrayī, Author of Swaminarayan Bhashyam",
        century: "21st Century CE (Contemporary)",
        paramparaId: "swaminarayan",
        lineageStage: "commentator",
        guruName: "Pramukh Swami Maharaj & Mahant Swami Maharaj",
        seatsOrMathas: ["BAPS Swaminarayan Research Institute (New Delhi / Global)"],
        keyWorks: [
          "Swaminarayan Bhashyam on the Prasthānatrayī (5 Volumes: Brahma Sutras, 10 Principal Upanishads, Bhagavad Gita in classical Sanskrit)",
          "Swaminarayan-Siddhanta-Sudha (Comprehensive dialectical treatise on Akṣara-Puruṣottama Darśana)",
          "Prabodhini (Commentary on the Vachanamrut)"
        ],
        primaryDoctrines: [
          "Exegetical proof that Akṣara and Puruṣottama are distinct ontological entities throughout the Śruti, Sūtra, and Smṛti",
          "Formally celebrated by the 17th World Sanskrit Conference (Vancouver, 2018) and Kashi Vidwat Parishad as a canonical Bhāṣyakāra in the unbroken line of Śaṅkara, Rāmānuja, and Madhva"
        ],
        famousQuoteOrMantra: "अक्षरपुरुषोत्तमयोः साक्षाद् भेदः श्रुतिप्रमाणकः । भाष्यं श्रीमद्भद्रेशेन विहितं शास्त्रसम्मतम् ॥",
        historicalContext: "Commissioned by Pramukh Swami Maharaj, composed the monumental multi-volume Sanskrit commentaries adhering strictly to ancient Pāṇinian grammar and classical Vedantic hermeneutics."
      }
    ]
  },
  {
    id: "neo_vedanta",
    name: "Navyānubhava Vedānta",
    devanagariName: "नव्यानुभव-वेदान्तः",
    englishTitle: "Navyanubhava Vedanta",
    sampradayaName: "Ramakrishna-Vivekananda / Saraswata / Integral / Ramanashramam Traditions",
    founderOrPreceptor: "Sri Ramakrishna, Swami Vivekananda, Swami Nigamananda, Śrīmat Anirvān, Sri Aurobindo, Bhagavan Ramana Maharshi",
    avatarOrDeity: "Parabrahman / Supreme Universal Consciousness / Divine Mother Kālī / Puruṣottama",
    primaryPhilosophy: "Vijñāna Vedānta (श्रीरामकृष्ण-विज्ञानवेदान्तः), Practical Vedānta & Cinmaya-Pratyakṣavāda",
    coreDoctrine: "All genuine spiritual paths are salvifically efficacious routes to the same Infinite Reality ('Yata Mat, Tata Path'). Harmonization of Nitya (Transcendent Impersonal Brahman) and Līlā (Dynamic Personal Divine / Śakti). Synthesis of profound Advaitic knowledge ('Jñāna') with cosmic divine vision ('Vijñāna') and service to living beings as direct worship of God ('Śiva-Jñāne Jīva-Sevā').",
    realityModel: "Integral Manifestation, Vijñāna-Samamanvaya & Cinmaya-Pratyakṣa (The universe is not an absolute illusion to be fled, but the conscious, living expression / Līlā of Brahman realized through direct supra-sensory luminous perception).",
    jivaBrahmanRelation: "Inherent Divinity & Divine Expression. The Jīva is inherently divine; in Jñāna it realizes identity with the Nirguṇa Absolute; in Vijñāna it perceives with open eyes that Brahman has become all living beings and the cosmos.",
    mokshaMeans: "Fourfold Yoga Harmony (Jñāna, Bhakti, Karma, Rāja), Vijñāna-Samādhi, Cinmaya-Pratyakṣa, and Direct Self-Inquiry (Vicāra).",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
    borderColor: "border-teal-600",
    accentBg: "from-teal-500/10 via-cyan-500/5 to-transparent",
    canonicalGranthaIds: [
      "vijnana-vedanta-infinite-paths",
      "anirvan-veda-mimamsa",
      "nigamananda-vedanta-viveka",
      "vivekananda-practical-vedanta",
      "aurobindo-life-divine",
      "ramana-ulladu-narpadu",
      "chinmayananda-holy-geeta",
      "radhakrishnan-idealist-view"
    ],
    subPrasthānas: [
      {
        id: "vijnana_vedanta_sub",
        name: "Vijñāna Vedānta (Sri Ramakrishna's Epistemology of Inclusivism)",
        sanskritName: "विज्ञानवेदान्तः (श्रीरामकृष्ण-भाव-प्रस्थानम्)",
        proponent: "Sri Ramakrishna Paramahamsa & Ayon Maharaj (Swami Medhananda)",
        century: "19th - 21st Century CE",
        coreEpistemology: "Epistemological and metaphysical reconstruction of Sri Ramakrishna's teachings: distinguishing Jñāna (initial Advaitic negation / Neti Neti / Nirvikalpa Samādhi) from Vijñāna (higher integral affirmation / Iti Iti / opening eyes after Samādhi to experience Brahman as everything). Resolves religious pluralism, reconciles Saguṇa and Nirguṇa, and rescues real experiential ontology.",
        keyWorks: [
          "Infinite Paths to Infinite Reality: Sri Ramakrishna & Cross-Cultural Philosophy of Religion (Ayon Maharaj / Oxford)",
          "The Bloomsbury Research Handbook of Vedānta",
          "Sri Sri Ramakrishna Kathamrita (Gospel of Sri Ramakrishna)",
          "The Philosophy of Sri Ramakrishna: Vijñāna Vedānta (Ayon Maharaj)"
        ]
      },
      {
        id: "cinmaya_pratyaksa_sub",
        name: "Cinmaya-Pratyakṣavāda (Luminous Vedic Perception)",
        sanskritName: "चिन्मयप्रत्यक्षवादः (श्रीमद्-अनिर्वाण-प्रस्थानम्)",
        proponent: "Śrīmat Anirvān (Nirvanananda Saraswati)",
        century: "20th Century CE (1896–1978)",
        coreEpistemology: "Vedic hermeneutics based on direct supra-sensory luminous spiritual perception (Cinmaya Pratyakṣa). Rejects colonial and dry ritualistic reductionism, demonstrating that the Ṛgvedic Mantras are direct experiential visions of awakened spiritual consciousness (Mantra-Draṣṭṛtva).",
        keyWorks: [
          "Veda-Mīmāṁsā (3 Volumes, Rabindra Puraskar winner)",
          "Upaniṣat-Prasaṅga (Series on Īśa, Kena, Kaṭha, Chāndogya)",
          "Divya Jīvan Vārtā (Translation of The Life Divine)",
          "Gītā-Anuvāda & Patrāvalī"
        ]
      },
      {
        id: "kc_bhattacharya_subjectivity",
        name: "Philosophy of Subjectivity & Freedom (Svarūpa-Mārgadṛṣṭi)",
        sanskritName: "आत्मस्वातन्य्र्यवादः (के. सी. भट्टाचार्य-प्रस्थानम्)",
        proponent: "Krishna Chandra Bhattacharyya (K.C. Bhattacharya)",
        century: "20th Century CE (1875–1949)",
        coreEpistemology: "Phenomenological reconstruction of Advaita Vedānta conceiving subjectivity as progressive freedom from the object. Reinterprets Māyā and the Absolute as the 'Indefinite' and 'Alternation in the Absolute', advancing decolonial philosophical autonomy ('Swaraj in Ideas').",
        keyWorks: [
          "The Subject as Freedom (1930 - Landmark phenomenological treatise)",
          "Studies in Vedantism (1909)",
          "Swaraj in Ideas (1928 - Seminal manifesto on intellectual decolonization)",
          "The Concept of Philosophy (Alternations of the Absolute)",
          "Studies in Philosophy (2 Volumes, edited by Gopinath Bhattacharyya)"
        ]
      },
      {
        id: "saraswata_samanvaya_sub",
        name: "Sārasvata-Vedānta-Samanvaya (Integral Synthesis)",
        sanskritName: "सारस्वत-वेदान्त-समन्वयः (निगमानन्द-प्रस्थानम्)",
        proponent: "Swami Nigamananda Saraswati Paramahamsa",
        century: "20th Century CE (1880–1935)",
        coreEpistemology: "Grand synthesis encapsulated in the formula: 'Jñāne Śaṅkara, Bhāve Gaurāṅga, Yoge Patāñjali'. Non-dual Advaitic discriminative wisdom in intellect, combined with Sri Chaitanya's ecstatic divine love (Prema-Bhakti) in emotion, and Tantric-Yogic mastery in spiritual practice.",
        keyWorks: [
          "Vedānta Viveka (Exhaustive Sanskrit-Bengali philosophical treatise)",
          "Yogī Guru",
          "Jñānī Guru",
          "Tāntrika Guru",
          "Premika Guru",
          "Brahmacarya Sādhana"
        ]
      },
      {
        id: "practical_vedanta",
        name: "Practical Vedānta (Vyāvahārika-Vedānta)",
        sanskritName: "व्यावहारिक-वेदान्तः (विवेकानन्द-प्रस्थानम्)",
        proponent: "Swami Vivekananda & Sri Ramakrishna Paramahamsa",
        century: "19th - 20th Century CE",
        coreEpistemology: "Translating transcendental non-dual knowledge into dynamic, compassionate social service, educational uplifting, and universal spiritual democracy. 'Service to man is service to God.'",
        keyWorks: ["Complete Works of Swami Vivekananda", "Jnana Yoga", "Raja Yoga", "Karma Yoga", "Bhakti Yoga"]
      },
      {
        id: "integral_vedanta",
        name: "Pūrṇa Vedānta (Integral Supramental Vision)",
        sanskritName: "पूर्ण-वेदान्तः (श्रीअरविन्द-प्रस्थानम्)",
        proponent: "Sri Aurobindo & The Mother",
        century: "20th Century CE",
        coreEpistemology: "Evolution of consciousness from Matter, Life, Mind to the Supermind (Vijñāna). Reconciles Spirit and Matter: not world-negation, but the divinization of earthly existence.",
        keyWorks: ["The Life Divine", "The Synthesis of Yoga", "Savitri", "Essays on the Gita"]
      },
      {
        id: "vicara_marga",
        name: "Direct Vicāra-Mārga (Self-Inquiry)",
        sanskritName: "विचारमार्गः (रमणाश्रम-प्रस्थानम्)",
        proponent: "Bhagavan Sri Ramana Maharshi",
        century: "20th Century CE",
        coreEpistemology: "Direct pursuit of the source of the 'I'-thought (Aham-vṛtti) into the spiritual Heart (Hṛdayam), dismantling the illusory ego without needing prolonged intellectual syllogisms.",
        keyWorks: ["Nan Yar? (Who am I?)", "Uḷḷadu Nāṟpadu (Forty Verses on Reality / Sad-Darśanam)", "Upadeśa Sāram"]
      }
    ],
    keyGurus: [
      {
        id: "ramakrishna",
        name: "Bhagavan Sri Ramakrishna Paramahamsa",
        devanagariName: "भगवान् श्रीरामकृष्ण परमहंसः",
        title: "Prophet of Harmony, Fountainhead of Vijñāna Vedānta",
        century: "1836–1886 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Bhairavi Brahmani (Tantra), Totapuri (Advaita Nirvikalpa Samādhi), Jatadhari (Bhakti)",
        prominentDisciples: [
          "Swami Vivekananda (Narendranath)",
          "Swami Brahmananda (Rakhal)",
          "Swami Saradananda",
          "Swami Shivananda",
          "Holy Mother Sri Sarada Devi"
        ],
        seatsOrMathas: ["Dakshineswar Kali Temple", "Cossipore Garden House", "Belur Math (Legacy)"],
        keyWorks: ["The Gospel of Sri Ramakrishna (Śrī Śrī Rāmakṛṣṇa Kathāmṛta compiled by 'M.')"],
        primaryDoctrines: [
          "Vijñāna: The Vijñānī sees that Brahman Itself has become the universe and all living beings",
          "Yata Mat, Tata Path (As many faiths, so many paths to the one God)",
          "Brahman and Kālī (Śakti) are inseparable like fire and its burning power",
          "Śiva-Jñāne Jīva-Sevā (Serving mankind knowing them as living embodiments of God)"
        ],
        famousQuoteOrMantra: "যত মত, তত পথ (यतो मत, ततो पथ) — ज्ञानी 'नेति नेति' बोले जगत् त्यागे, विज्ञानी 'इति इति' बोले सबाय ईश्वर देखे ।",
        historicalContext: "Practiced and mastered all major Hindu paths (Advaita, Visiṣṭādvaita, Tantra, Dvaita) as well as Islam and Christianity, verifying through direct experience their underlying unity."
      },
      {
        id: "ayon_maharaj",
        name: "Ayon Maharaj (Swami Medhananda)",
        devanagariName: "अयोन महाराज (स्वामी मेधानन्दः)",
        title: "Philosopher of Vijñāna Vedānta, Senior Research Fellow",
        century: "21st Century CE (Contemporary)",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Ramakrishna Order Lineage",
        seatsOrMathas: ["Vedanta Society of Southern California (Hollywood)", "Ramakrishna Mission"],
        keyWorks: [
          "Infinite Paths to Infinite Reality: Sri Ramakrishna & Cross-Cultural Philosophy of Religion (Oxford University Press, 2018)",
          "The Bloomsbury Research Handbook of Vedānta (Editor)",
          "Swami Vivekananda's Vedāntic Cosmopolitanism",
          "Fourteen-article Symposium in the International Journal of Hindu Studies"
        ],
        primaryDoctrines: [
          "Rigorous analytical formulation of Sri Ramakrishna's philosophy as 'Vijñāna Vedānta'",
          "Distinction between Jñāna (Advaitic neti neti negation) and Vijñāna (holistic iti iti affirmation of Nitya & Līlā)",
          "A non-relativist, epistemologically sound model of religious and salvific pluralism",
          "Refutation of the claim that Ramakrishna was merely an orthodox Śaṅkara Advaitin or an unsophisticated mystic"
        ],
        famousQuoteOrMantra: "Sri Ramakrishna's Vijñāna Vedānta provides an expansive nonsectarian worldview rooted in the mystical experience of Vijñāna that harmonizes seemingly contradictory spiritual paths.",
        historicalContext: "Earned his doctorate at UC Berkeley/Oxford, served as Associate Professor at Ramakrishna Mission Vivekananda University, and ordained into Sannyāsa as Swami Medhananda in 2020."
      },
      {
        id: "kc_bhattacharyya",
        name: "Krishna Chandra Bhattacharyya (K.C. Bhattacharya)",
        devanagariName: "कृष्णचन्द्र भट्टाचार्यः (के. सी. भट्टाचार्य)",
        title: "Pioneer of Modern Phenomenological Vedānta & Decolonial Philosophy",
        century: "1875–1949 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Presidency College & Classical Navya-Nyāya / Vedānta Masters",
        prominentDisciples: ["Gopinath Bhattacharyya", "Kalidas Bhattacharyya", "Daya Krishna", "Generations of Indian Philosophers"],
        seatsOrMathas: ["University of Calcutta (George V Professor of Philosophy)", "Amalner Indian Institute of Philosophy", "Hooghly Mohsin College"],
        keyWorks: [
          "The Subject as Freedom (1930 - Revolutionary phenomenological thesis on subjectivity)",
          "Studies in Vedantism (1909)",
          "Swaraj in Ideas (1928 - Celebrated address on cultural and intellectual decolonization)",
          "The Concept of Philosophy",
          "Studies in Philosophy (2 Volumes)",
          "The Place of the Indefinite in Logic"
        ],
        primaryDoctrines: [
          "The Subject as Freedom: The subjective Self is realized not as an object among objects, but through progressive disengagement/freedom from bodily, psychic, and mental objectivity",
          "Māyā as the Indefinite: Reinterpreting Anirvacanīya not as an ontological riddle, but as that which demands subjective spiritual transcendence",
          "Alternation of the Absolute: Absolute Truth realized under alternate experiential modes (Knowing/Truth, Willing/Freedom, Feeling/Value)",
          "Swaraj in Ideas: Calling for authentic indigenous philosophical creativity free from European conceptual subjugation"
        ],
        famousQuoteOrMantra: "The subject is freedom itself. Philosophy is the self-conscious realization of the spirit's freedom from the bondage of the object.",
        historicalContext: "Regarded by contemporary scholars as one of modern India's most original, rigorous philosophical minds who synthesized Kantian/Hegelian critique with pure Advaitic consciousness."
      },
      {
        id: "swami_gambhirananda",
        name: "Swami Gambhirananda",
        devanagariName: "स्वामी गम्भीरानन्दः",
        title: "11th President of Ramakrishna Math & Mission, Renowned Translator of Prasthānatrayī Śāṅkarabhāṣya",
        century: "1899–1988 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "commentator",
        guruName: "Swami Shivananda (Mahapurush Maharaj)",
        seatsOrMathas: ["Belur Math", "Advaita Ashrama (Mayavati)"],
        keyWorks: [
          "Brahma Sūtra Bhāṣya of Śrī Śaṅkarācārya (Definitive English Translation)",
          "Eight Upaniṣads with the Commentary of Śaṅkarācārya (2 Volumes)",
          "Bhagavad Gītā with the Commentary of Śaṅkarācārya",
          "History of the Ramakrishna Math and Ramakrishna Mission"
        ],
        primaryDoctrines: [
          "Literal, precise, and authentic English translation preserving the exact nuances of classical Advaita hermeneutics",
          "Synthesis of traditional sannyāsa discipline with the Ramakrishna-Vivekananda ideal of Practical Vedānta",
          "Exacting historical scholarship on modern Vedāntic monastic lineages"
        ],
        famousQuoteOrMantra: "The ultimate aim of Vedānta is the direct realization of identity between the Jīva and Brahman through steady discernment and self-effacing service.",
        historicalContext: "Revered scholar-monk whose authoritative translations of Śaṅkara's commentaries on the Brahma Sūtras and major Upaniṣads remain standard academic and monastic references worldwide."
      },
      {
        id: "shrimat_anirvan",
        name: "Śrīmat Anirvān (Nirvānānanda Saraswatī)",
        devanagariName: "श्रीमद् अनिर्वाणः (निर्वाणानन्द सरस्वती)",
        title: "Vedic Ṛṣi of the Modern Era, Proponent of Cinmaya-Pratyakṣavāda",
        century: "1896–1978 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Swami Saccidananda Saraswati & Inner Vedic Intuition",
        prominentDisciples: ["Lizelle Reymond", "Ram Swarup", "Gautam Dharmapal", "Supriya Devi"],
        seatsOrMathas: ["Almora (Himalayas)", "Shillong", "Calcutta"],
        keyWorks: [
          "Veda-Mīmāṁsā (3 Volumes, Magnum Opus on Vedic interpretation, Rabindra Puraskar recipient)",
          "Upaniṣat-Prasaṅga (Detailed esoteric expositions of Īśa, Kena, Kaṭha, Chāndogya)",
          "Divya Jīvan Vārtā (Monumental Bengali rendering of Sri Aurobindo's The Life Divine)",
          "Antaryoga & Patrāvalī",
          "Gītā-Anuvāda"
        ],
        primaryDoctrines: [
          "Cinmaya-Pratyakṣavāda: The Veda is the direct utterance of luminous spiritual perception (Cinmaya Pratyakṣa), not primitive ritualism",
          "Ṛṣitva: The ancient seers perceived the rhythms of cosmic consciousness (Mantra-Draṣṭā)",
          "Synthesis of Vedic, Tantric, Sāṅkhya, and Vedantic spiritual disciplines into a seamless inner communion (Antaryoga)"
        ],
        famousQuoteOrMantra: "वेदो हि प्रत्यक्षं चिन्मयं सत्यम् — वेद केवल कर्मकाण्ड नहीं, अपितु ऋषियों के चिन्मय प्रत्यक्ष की अपरोक्ष अनुभूति है।",
        historicalContext: "Memorized Pāṇini's Aṣṭādhyāyī and the Gītā in early childhood; lived as a secluded contemplative scholar in the Himalayas unlocking the mystical depths of Vedic revelation."
      },
      {
        id: "swami_nigamananda",
        name: "Swami Nigamananda Saraswati",
        devanagariName: "स्वामी निगमानन्द सरस्वती परमहंसः",
        title: "Sadguru of Integral Synthesis, Founder of Saraswata Math",
        century: "1880–1935 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Swami Saccidananda Saraswati (Pushkar - Jñāna), Bamakhyapa (Tarapith - Tantra), Sumeru Himalayan Yogis (Yoga), Gauranga Prema (Vrindavan)",
        prominentDisciples: ["Swami Chidghanananda", "Swami Prajnananda", "Thousands of Saraswata Sangha initiates"],
        seatsOrMathas: [
          "Sāraswata Matha (Kokilamukh, Jorhat, Assam)",
          "Nīlācala Sāraswata Saṅgha (Purī, Odisha)",
          "Halisahar Shanti Ashram"
        ],
        keyWorks: [
          "Vedānta Viveka (Profound classical philosophical treatise on Advaita and Non-duality)",
          "Yogī Guru (Systematic treatise on Patañjali and Kundalini Yoga)",
          "Jñānī Guru (Exposition of discriminative Self-Knowledge)",
          "Tāntrika Guru (Science of Tantric rituals and internal transformation)",
          "Premika Guru (Science of divine ecstasy in the mood of Gaurāṅga Mahāprabhu)",
          "Brahmacarya Sādhana"
        ],
        primaryDoctrines: [
          "Samanvaya: 'Jñāne Śaṅkara, Bhāve Gaurāṅga, Yoge Patāñjali' (Advaita knowledge of Śaṅkara in intellect, divine love of Śrī Caitanya in emotion, and Yogic control in action)",
          "Integration of the four great disciplines (Jñāna, Yoga, Tantra, Bhakti) under a single verified path",
          "Establishment of Ādarśa Gṛhī (Ideal Household Life) alongside Sannyāsa",
          "Propagation of Sanātana Dharma through Bhāva-Sammilani spiritual congregations"
        ],
        famousQuoteOrMantra: "ज्ञाने शङ्करः, भावे गौराङ्गः, योगे पतञ्जलिः — ज्ञानी हो शङ्कराचार्यों के समान, प्रेमी हो श्रीगौराङ्ग के समान।",
        historicalContext: "Attained Nirvikalpa Samādhi at Mount Abu / Sumeru, realized Tantric mastery at Tarapith, and had the divine vision of Rādhā-Kṛṣṇa at Vṛndāvana, synthesizing all four paths into the Saraswata tradition."
      },
      {
        id: "vivekananda",
        name: "Swami Vivekananda",
        devanagariName: "स्वामी विवेकानन्दः",
        title: "Voice of Vedantic Awakening, Global Ambassador of Sanātana Dharma",
        century: "1863–1902 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Sri Ramakrishna Paramahamsa",
        prominentDisciples: ["Sister Nivedita (Margaret Noble)", "Swami Swarupananda", "Swami Vijnanananda"],
        seatsOrMathas: ["Belur Math (Headquarters of Ramakrishna Math & Mission)", "Advaita Ashrama (Mayavati)"],
        keyWorks: [
          "Practical Vedānta (Discourses in London & India)",
          "Raja Yoga (Patāñjali Commentary)",
          "Jnana Yoga",
          "Karma Yoga",
          "Bhakti Yoga",
          "Addresses at the Parliament of Religions, Chicago (1893)"
        ],
        primaryDoctrines: [
          "Practical Vedānta: Bringing Vedantic truths out of mountain caves into the home, street, and marketplace",
          "Potential Divinity of the Soul: 'Each soul is potentially divine. The goal is to manifest this divinity within.'",
          "Fourfold Yoga Synthesis: Work, worship, philosophy, and psychic control combined harmoniously",
          "Rejection of spiritual fatalism; cultivation of muscular spirituality and universal compassion"
        ],
        famousQuoteOrMantra: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत । Arise, awake, and stop not till the goal is reached!",
        historicalContext: "Electrified the 1893 World Parliament of Religions in Chicago, introducing the sublime universal message of Vedānta to the Western hemisphere."
      },
      {
        id: "aurobindo",
        name: "Sri Aurobindo Ghose",
        devanagariName: "श्री अरविन्दः (महायोगी)",
        title: "Mahāyogi, Master of Integral Vedānta and the Supermind",
        century: "1872–1950 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Direct Inner Realization & Sri Krishna at Alipore",
        prominentDisciples: ["The Mother (Mirra Alfassa)", "Nolini Kanta Gupta", "Sri Chinmoy", "A.B. Purani"],
        seatsOrMathas: ["Sri Aurobindo Ashram (Pondicherry)", "Auroville"],
        keyWorks: [
          "The Life Divine (Monumental 1,000-page philosophical masterpiece)",
          "The Synthesis of Yoga",
          "Savitri: A Legend and a Symbol (Epic poem in blank verse)",
          "Essays on the Gita",
          "The Secret of the Veda",
          "The Upanishads"
        ],
        primaryDoctrines: [
          "Pūrṇa-Advaita / Integral Vedānta: Reality is both transcendent Being (Sat) and dynamic Becoming (Śakti)",
          "Involution and Evolution: Spirit involved in Matter evolves through Life and Mind up to Supermind (Vijñāna)",
          "Supramental Descent: Transforming physical human nature into a divine life on earth",
          "Rejection of world-denying ascetic illusionism in favor of cosmic divinization"
        ],
        famousQuoteOrMantra: "All life is Yoga. The earth-life is not an illusion, but the field of divine manifestation.",
        historicalContext: "Revolutionary freedom fighter turned Mahāyogi who spent four decades in solitary contemplation in Pondicherry developing the Integral Yoga of world-transformation."
      },
      {
        id: "ramana_maharshi",
        name: "Bhagavan Sri Ramana Maharshi",
        devanagariName: "भगवान् श्री रमण महर्षिः",
        title: "Sage of Arunachala, Master of Direct Self-Inquiry",
        century: "1879–1950 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Holy Hill Arunachala (Direct inner Awakening at age 16)",
        prominentDisciples: ["Kavyakantha Ganapati Muni", "Muruganar", "Paul Brunton", "Arthur Osborne"],
        seatsOrMathas: ["Sri Ramanasramam (Tiruvannamalai / Mount Arunachala)"],
        keyWorks: [
          "Nan Yar? (Who am I?)",
          "Uḷḷadu Nāṟpadu (Forty Verses on Reality / Sad-Darśanam)",
          "Upadeśa Sāram (The Essence of Instruction)",
          "Akṣaramaṇamālai (Marital Garland of Letters to Arunachala)"
        ],
        primaryDoctrines: [
          "Ātma-Vicāra (Self-Inquiry: Constantly questioning 'Who am I?' to dissolve the mind in the Heart)",
          "The Heart (Hṛdayam) located on the right side of the chest as the spiritual seat of pure 'I-I' (Aham-sphuraṇa)",
          "Direct transmission of supreme silence (Mouna-Dīkṣā) resolving all doubts instantaneously"
        ],
        famousQuoteOrMantra: "हृदयकुहरे सत्यमेकं विभाति स्वयमहमिह यत्प्रत्यगात्मस्वरूपम् । विश मनसा मग्नः स्वं विचार्य हृदि विरम सर्वथा मुक्तबन्धः ॥",
        historicalContext: "Attained spontaneous, permanent realization of the immortal Self at age 16 upon simulating his own physical death, living thereafter at the foot of Arunachala."
      },
      {
        id: "chinmayananda",
        name: "Swami Chinmayananda",
        devanagariName: "स्वामी चिन्मयानन्दः",
        title: "Founder of Chinmaya Mission, Pioneer of Modern Gītā Jñāna Yajñas",
        century: "1916–1993 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        guruName: "Swami Sivananda (initiation) & Swami Tapovan Maharaj (Vedānta Śāstra training)",
        prominentDisciples: ["Swami Tejomayananda", "Swami Swaroopananda", "Swami Dayananda Saraswati (early)"],
        seatsOrMathas: ["Sandeepany Sadhanalaya (Mumbai)", "Chinmaya Mission Global"],
        keyWorks: [
          "The Holy Geeta (Exhaustive commentary)",
          "Upaniṣad Commentaries (Kaṭha, Kena, Īśa, Muṇḍaka, Māṇḍūkya)",
          "Vivekacūḍāmaṇi Commentary",
          "The Art of Man Making",
          "Meditation & Life"
        ],
        primaryDoctrines: [
          "Demystifying Vedānta through rigorous logical clarity for the modern scientific mind",
          "Gītā Jñāna Yajña tradition conducting over 500 open public scripture lectures worldwide",
          "Youth awakening and cultural revitalization across all continents"
        ],
        famousQuoteOrMantra: "To give maximum happiness to maximum people for maximum time — that is the secret of life.",
        historicalContext: "Formerly an agnostic journalist, transformed under Himalayan masters into one of the most prolific global ambassadors of Advaita Vedānta in the 20th century."
      },
      {
        id: "radhakrishnan",
        name: "Dr. Sarvepalli Radhakrishnan",
        devanagariName: "डॉ. सर्वपल्ली राधाकृष्णन्",
        title: "Philosopher-Statesman, Spalding Professor of Eastern Religions, Oxford",
        century: "1888–1975 CE",
        paramparaId: "neo_vedanta",
        lineageStage: "modern",
        prominentDisciples: ["Generations of global comparative philosophy scholars"],
        seatsOrMathas: ["University of Oxford", "University of Calcutta", "Rashtrapati Bhavan (2nd President of India)"],
        keyWorks: [
          "The Principal Upanishads (Definitive translation & commentary)",
          "The Brahma Sutra: The Philosophy of Spiritual Life",
          "Indian Philosophy (Volumes 1 & 2)",
          "The Bhagavadgita",
          "An Idealist View of Life (Hibbert Lectures)",
          "Eastern Religions and Western Thought"
        ],
        primaryDoctrines: [
          "Vedānta as the perennial philosophy and pinnacle of world spiritual thought",
          "Intuition (Aparokṣānubhūti) as the direct validation of philosophical truth superior to dry intellect",
          "Synthesis of Western existential inquiry with Eastern metaphysical certitude"
        ],
        famousQuoteOrMantra: "Religion is not a creed or a code, but an insight into reality — anubhava, personal experience.",
        historicalContext: "Knighthood recipient and President of India whose erudite works bridged the intellectual traditions of East and West, celebrating teachers on his birthday across India."
      }
    ]
  }
];

export interface TimelineEpoch {
  id: string;
  name: string;
  devanagariName: string;
  period: string;
  theme: string;
  description: string;
  badgeColor: string;
  milestones: TimelineMilestone[];
}

export interface TimelineMilestone {
  id: string;
  yearOrCentury: string;
  title: string;
  sanskritTitle: string;
  sampradayaId: ParamparaId;
  primaryFigures: string[];
  keyTexts: string[];
  coreEventOrDebate: string;
  dialecticalSignificance: string;
  granthaIdToRead?: string;
}

export const VEDANTA_HISTORICAL_TIMELINE: TimelineEpoch[] = [
  {
    id: "epoch_vedic",
    name: "1. Vedic & Upaniṣadic Dawn",
    devanagariName: "१. वैदिक-औपनिषदिक-उषःकालः",
    period: "c. 1500 BCE – 500 BCE",
    theme: "Revelation of the Mahāvākyas & Experiential Monism of the Ṛṣis",
    description: "The primordial revelation of Brahman in the Ṛgveda Saṁhitā and the classical Upaniṣadic dialogues exploring the ultimate unity of Ātman and Brahman.",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    milestones: [
      {
        id: "m_nasadiya",
        yearOrCentury: "c. 1500 BCE",
        title: "Nāsadīya & Puruṣa Sūktas (Ṛgveda X)",
        sanskritTitle: "नासदीयसूक्तम् पुरुषसूक्तं च",
        sampradayaId: "vedic_root",
        primaryFigures: ["Ṛṣi Prajāpati Parameṣṭhī", "Nārāyaṇa Ṛṣi"],
        keyTexts: ["Ṛgveda Saṁhitā 10.129, 10.90"],
        coreEventOrDebate: "The world's earliest profound inquiry into the cosmic origin: 'Then was not non-existence nor existence... That One breathed, calm and windless by its own intrinsic power (Ānīd Avātam Svadhayā Tad Ekam)'.",
        dialecticalSignificance: "Establishes the foundation of non-dual reality (Tad Ekam) and the divine immanence-transcendence that later matured into Vedānta."
      },
      {
        id: "m_yajnavalkya",
        yearOrCentury: "c. 800 BCE",
        title: "Yājñavalkya-Maitreyī & Janaka Assembly (Bṛhadāraṇyaka)",
        sanskritTitle: "याज्ञवल्क्य-मैत्रेयी-संवादः (बृहदारण्यक-उपनिषद्)",
        sampradayaId: "vedic_root",
        primaryFigures: ["Sage Yājñavalkya", "Maitreyī", "Gārgī Vācaknavī", "King Janaka"],
        keyTexts: ["Bṛhadāraṇyaka Upaniṣad (Madhu Kāṇḍa & Muni Kāṇḍa)"],
        coreEventOrDebate: "Yājñavalkya articulates the Neti-Neti ('Not this, not this') negative theology and the Supreme Truth: 'Ātmanastukāmāya sarvaṁ priyaṁ bhavati' and 'Vijñātāramare kena vijānīyāt'.",
        dialecticalSignificance: "The bedrock of non-dual consciousness philosophy. All later Ācāryas take Yājñavalkya's dialogues as primary epistemological proof."
      },
      {
        id: "m_chandogya",
        yearOrCentury: "c. 700 BCE",
        title: "Uddālaka Āruṇi & Śvetaketu (Chāndogya VI)",
        sanskritTitle: "उद्दालक-श्वेतकेतु-संवादः (तत्त्वमसि)",
        sampradayaId: "vedic_root",
        primaryFigures: ["Sage Uddālaka Āruṇi", "Śvetaketu"],
        keyTexts: ["Chāndogya Upaniṣad Chapter 6 (Sad-Vidyā)"],
        coreEventOrDebate: "Uddālaka reveals the Mahāvākya 'Tat Tvam Asi' (That Thou Art) through the nine analogies of clay, gold, rivers entering the sea, and salt in water.",
        dialecticalSignificance: "The supreme pivotal statement in Vedantic hermeneutics, debated across millennia between Advaita (Abheda), Viśiṣṭādvaita (Śarīra-Śarīrī-bhāva), and Dvaita (Atattvamasi / Sādrśya)."
      }
    ]
  },
  {
    id: "epoch_sutra",
    name: "2. Proto-Vedānta & Sūtra Codification",
    devanagariName: "२. पूर्व-वेदान्तः सूत्र-प्रस्थान-युगं च",
    period: "c. 500 BCE – 600 CE",
    theme: "Systematization of Uttara-Mīmāṁsā & Dialectical Defense",
    description: "Maharṣi Bādarāyaṇa composes the 555 Brahma Sūtras to harmonize the Upaniṣads, while early Proto-Ācāryas lay the groundwork for competing traditions.",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    milestones: [
      {
        id: "m_badarayana",
        yearOrCentury: "c. 400–200 BCE",
        title: "Bādarāyaṇa Compiles the Brahma Sūtras",
        sanskritTitle: "बादरायण-प्रणीत-ब्रह्मसूत्रम्",
        sampradayaId: "vedic_root",
        primaryFigures: ["Maharṣi Bādarāyaṇa Kṛṣṇa Dvaipāyana Vyāsa"],
        keyTexts: ["Brahma Sūtras (Catuḥsūtrī, Samanvaya, Avirodha, Sādhana, Phala)"],
        coreEventOrDebate: "Aphoristic codification of the entire Upaniṣadic corpus to refute contemporary Sāṅkhya, Vaiśeṣika, and early heterodox schools.",
        dialecticalSignificance: "Established the Nyāya-Prasthāna. Composition of a Bhāṣya on this text became the mandatory requirement for founding an authentic Vedānta Sampradāya.",
        granthaIdToRead: "sankara-catuhsutri"
      },
      {
        id: "m_gita",
        yearOrCentury: "c. 400 BCE",
        title: "Bhagavad Gītā (Smṛti-Prasthāna Formulation)",
        sanskritTitle: "श्रीमद्भगवद्गीता (स्मृति-प्रस्थानम्)",
        sampradayaId: "vedic_root",
        primaryFigures: ["Bhagavān Śrī Kṛṣṇa", "Arjuna"],
        keyTexts: ["Bhagavad Gītā (18 Adhyāyas)"],
        coreEventOrDebate: "Synthesis of Jñāna-Yoga, Karma-Yoga, and Bhakti-Yoga on the battlefield of Kurukṣetra, establishing the personal-impersonal facets of Brahman.",
        dialecticalSignificance: "Provided the ethical, cosmological, and soteriological bridge making Upaniṣadic wisdom applicable to worldly action without bondage."
      },
      {
        id: "m_proto_acharyas",
        yearOrCentury: "c. 100 BCE – 500 CE",
        title: "Early Proto-Ācāryas (Bodhāyana, Dramiḍa, Ṭaṅka, Bhartṛprapañca)",
        sanskritTitle: "प्राचीन-वृत्तिकाराः (बोधायन-द्रमिड-टङ्क-भर्तृप्रपञ्चाः)",
        sampradayaId: "vedic_root",
        primaryFigures: ["Bodhāyana", "Dramiḍācārya", "Ṭaṅkācārya", "Bhartṛprapañca", "Kāśakṛtsna"],
        keyTexts: ["Bodhāyana-Vṛtti (lost monumental gloss)", "Early Upaniṣad-Vṛttis"],
        coreEventOrDebate: "Debates on whether Brahman undergoes real transformation (Brahma-Pariṇāmavāda) or whether the relationship with Jīva is simultaneous identity and difference (Bhedābheda).",
        dialecticalSignificance: "Preserved the diverse strands of interpretation that later Śaṅkara, Rāmānuja, and Bhāskara resurrected in their systematic Bhāṣyas."
      }
    ]
  },
  {
    id: "epoch_classical",
    name: "3. Classical Darśana & Bhāṣya Golden Age",
    devanagariName: "३. शास्त्रीय-दर्शन-भाष्य-स्वर्णयुगम्",
    period: "c. 600 CE – 1300 CE",
    theme: "Apostolic Giants: Kevalādvaita, Viśiṣṭādvaita, Dvaita & Sub-Prasthānas",
    description: "The golden epoch where Ādi Śaṅkara, Rāmānuja, Madhva, and Nimbārka wrote epochal commentaries on the Prasthānatrayī, creating systematic darśanas that defined Indian intellectual history.",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    milestones: [
      {
        id: "m_gaudapada_mandukya",
        yearOrCentury: "c. 600–700 CE",
        title: "Gauḍapādācārya Propounds Ajātivāda",
        sanskritTitle: "गौडपाद-प्रणीता माण्डूक्य-कारिका (अजातिवादः)",
        sampradayaId: "advaita",
        primaryFigures: ["Sage Gauḍapāda (Paramaguru of Śaṅkara)"],
        keyTexts: ["Māṇḍūkya Kārikā (Āgama, Vaitathya, Advaita, Alātaśānti Prakaraṇas)"],
        coreEventOrDebate: "Systematic dialectical proof that absolute reality never originates (Ajāti), and waking experience is as phenomenally unreal as dreams.",
        dialecticalSignificance: "The first extant systematic philosophical treatise on Kevalādvaita, bridging Upaniṣadic insight with unshakeable dialectics."
      },
      {
        id: "m_sankara_renaissance",
        yearOrCentury: "c. 788–820 CE",
        title: "Jagadguru Ādi Śaṅkarācārya Revitalizes Kevalādvaita",
        sanskritTitle: "जगद्गुरु-आदि-शङ्कराचार्य-दिग्विजयः शाङ्करभाष्यं च",
        sampradayaId: "advaita",
        primaryFigures: ["Ādi Śaṅkarācārya", "Padmapāda", "Sureśvara", "Toṭaka", "Hastāmalaka"],
        keyTexts: ["Prasthānatrayī Bhāṣya", "Vivekacūḍāmaṇi", "Upadeśasāhasrī"],
        coreEventOrDebate: "Composes the landmark Śāṅkarabhāṣya establishing Vivartavāda and Adhyāsa (superimposition). Defeats Maṇḍana Miśra in historical debate and establishes the Four Amnāya Mathas.",
        dialecticalSignificance: "United India under non-dual Vedic spirituality, proving that Brahman alone is reality (Satya), the world is apparent (Mithyā), and the Jīva is non-different from Brahman.",
        granthaIdToRead: "vivekacudamani"
      },
      {
        id: "m_bhamati_vivarana",
        yearOrCentury: "c. 850–1000 CE",
        title: "Rise of Bhāmatī & Vivaraṇa Sub-Prasthānas",
        sanskritTitle: "भामती-विवरण-प्रस्थानयोः उद्भवः",
        sampradayaId: "advaita",
        primaryFigures: ["Vācaspati Miśra", "Prakāśātman", "Padmapāda"],
        keyTexts: ["Bhāmatī", "Pañcapādikā-Vivaraṇa"],
        coreEventOrDebate: "Internal debate within Advaita on the locus of Avidyā (Avacchedavāda where Jīva is locus vs Pratibimbavāda where Brahman is locus).",
        dialecticalSignificance: "Created the two rigorous post-Śaṅkara intellectual lineages dominating academic Advaita jurisprudence."
      },
      {
        id: "m_ramanuja_visistadvaita",
        yearOrCentury: "1017–1137 CE",
        title: "Bhagavad Rāmānujācārya Establishes Viśiṣṭādvaita",
        sanskritTitle: "भगवद्-रामानुजाचार्य-प्रणीतं श्रीभाष्यम् (विशिष्टाद्वैतम्)",
        sampradayaId: "visistadvaita",
        primaryFigures: ["Śrī Rāmānujācārya", "Yamunācārya", "Kūrattāḻvān"],
        keyTexts: ["Śrībhāṣya", "Vedārthasaṅgraha", "Gītābhāṣya", "Śaraṇāgatigadya"],
        coreEventOrDebate: "Composes Śrībhāṣya formulating Śarīra-Śarīrī-Bhāva (the universe of sentient Jīvas and insentient Jagat forms the real body of Supreme Lord Nārāyaṇa) and refutes Śaṅkara's Māyāvāda with the Saptavidha-Anupapatti.",
        dialecticalSignificance: "Elevated Bhakti and Prapatti (absolute surrender) to the highest Vedantic authority, proving that personal devotion and non-duality are harmonized in Qualified Monism."
      },
      {
        id: "m_nimbarka",
        yearOrCentury: "c. 1100–1200 CE",
        title: "Śrī Nimbārkācārya Expounds Dvaitādvaita",
        sanskritTitle: "श्री-निम्बार्काचार्य-प्रणीतं वेदान्तपारिजातसौरभम् (द्वैताद्वैतः)",
        sampradayaId: "dvaitadvaita",
        primaryFigures: ["Nimbārkācārya", "Śrīnivāsācārya"],
        keyTexts: ["Vedāntapārijātasaurabha", "Daśaślokī (Siddhāntaratna)"],
        coreEventOrDebate: "Articulates Svābhāvika Bhedābheda (Natural Identity-in-Difference) centered on the eternal divine pastimes of Rādhā-Kṛṣṇa.",
        dialecticalSignificance: "Solved the dualism-monism debate by showing that Jīva and Brahman are naturally different in attributes but inseparable in ontological essence."
      },
      {
        id: "m_madhva_dvaita",
        yearOrCentury: "1238–1317 CE",
        title: "Śrī Madhvācārya Founds Dvaita (Tattvavāda)",
        sanskritTitle: "श्रीमध्व-आनन्दतीर्थ-प्रणीतानि सर्वमूलग्रन्थाः (द्वैत-तत्त्ववादः)",
        sampradayaId: "dvaita",
        primaryFigures: ["Śrī Madhvācārya (Ānandatīrtha / Pūrṇaprajña)"],
        keyTexts: ["Anuvyākhyāna", "Brahmasūtra-Bhāṣya", "Tattvasaṅkhyāna", "Viṣṇutattvanirṇaya"],
        coreEventOrDebate: "Establishes Pañcabheda (Five-fold eternal differences: God-Soul, Soul-Soul, God-Matter, Soul-Matter, Matter-Matter) and absolute independence (Svatantra) of Lord Viṣṇu.",
        dialecticalSignificance: "Radical realist and pluralist critique of non-dualism that spawned an epic multi-century dialectical rivalry with Advaita."
      }
    ]
  },
  {
    id: "epoch_scholastic",
    name: "4. Scholastic Dialectics & Regional Renaissance",
    devanagariName: "४. नव्य-तर्क-प्रौढ-वादः प्रान्तीय-नवजागरणम्",
    period: "c. 1300 CE – 1800 CE",
    theme: "Epic Polemics (Advaitasiddhi vs Nyāyāmṛta), Acintya Bhedābheda & Śuddhādvaita",
    description: "The era of breathtaking Navya-Nyāya intellectual polemics between traditions, alongside the ecstatic devotional Vedānta renaissance in Bengal, Gujarat, and South India.",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    milestones: [
      {
        id: "m_vidyaranya_panchadasi",
        yearOrCentury: "c. 1350 CE",
        title: "Vidyāraṇya Svāmī Compiles the Pañcadaśī",
        sanskritTitle: "विद्यारण्य-स्वामी-प्रणीता पञ्चदशी",
        sampradayaId: "advaita",
        primaryFigures: ["Vidyāraṇya Svāmī (Jagadguru of Śṛṅgerī)"],
        keyTexts: ["Pañcadaśī (15 Chapters in 3 Pentads)", "Sarvadarśanasaṅgraha"],
        coreEventOrDebate: "Synthesized the entire post-Śaṅkara Advaita metaphysics into 15 accessible poetic chapters, demonstrating the reality of Cit and the illusion of the empirical world.",
        dialecticalSignificance: "The definitive pedagogical handbook of Advaita, widely studied across all traditional monastic orders.",
        granthaIdToRead: "vedantaparibhasa"
      },
      {
        id: "m_vallabha_suddhadvaita",
        yearOrCentury: "1479–1531 CE",
        title: "Śrī Vallabhācārya Establishes Śuddhādvaita & Puṣṭimārga",
        sanskritTitle: "श्रीवल्लभाचार्य-प्रणीतं अणुभाष्यम् (शुद्धाद्वैतः पुष्टिमार्गश्च)",
        sampradayaId: "suddhadvaita",
        primaryFigures: ["Śrī Vallabhācārya (Mahāprabhujī)", "Viṭṭhalanātha"],
        keyTexts: ["Aṇubhāṣya on Brahma Sūtras", "Subodhinī (on Bhāgavatam)", "Tattvārthadīpanibandha"],
        coreEventOrDebate: "Articulates Pure Non-Dualism (Śuddhādvaita) unpolluted by Māyā: the entire universe is Brahman's pure real transformation (Aviḳrta-Pariṇāma) via the grace (Puṣṭi) of Śrī Kṛṣṇa.",
        dialecticalSignificance: "Reconciled total monism with passionate aesthetic adoration of the Divine Child Kṛṣṇa."
      },
      {
        id: "m_caitanya_acintya",
        yearOrCentury: "1486–1534 CE",
        title: "Śrī Kṛṣṇa Caitanya Mahāprabhu Reveals Acintya Bhedābheda",
        sanskritTitle: "श्रीकृष्णचैतन्यमहाप्रभु-आविर्भावः अचिन्त्यभेदाभेदवादश्च",
        sampradayaId: "acintya",
        primaryFigures: ["Śrī Caitanya Mahāprabhu", "Sanātana Gosvāmī", "Rūpa Gosvāmī", "Jīva Gosvāmī"],
        keyTexts: ["Ṣaṭ-Sandarbhas (Tattva, Bhāgavata, Paramātma, Kṛṣṇa, Bhakti, Prīti)", "Bhakti-Rasāmṛta-Sindhu"],
        coreEventOrDebate: "Revealed Acintya Bhedābheda Tattva (Inconceivable simultaneous oneness and difference between Śakti and Śaktimān) manifested through Harināma Saṅkīrtana and Prema Bhakti.",
        dialecticalSignificance: "Founded the Gauḍīya Vaiṣṇava philosophy of Bengal, later codified in the definitive Govinda Bhāṣya."
      },
      {
        id: "m_advaitasiddhi_debate",
        yearOrCentury: "c. 1580–1600 CE",
        title: "The Great Dialectical Battle: Advaitasiddhi vs Nyāyāmṛta",
        sanskritTitle: "अद्वैतसिद्धि-न्यायामृतयोः महावाद-सङ्ग्रामः",
        sampradayaId: "advaita",
        primaryFigures: ["Madhusūdana Sarasvatī (Bengal)", "Vyāsatīrtha (Karnataka)", "Rāmācārya"],
        keyTexts: ["Advaitasiddhi", "Nyāyāmṛta", "Nyāyāmṛtataraṅgiṇī", "Laghucandrikā (Gauḍa Brahmānanda)"],
        coreEventOrDebate: "The highest peak of Indian philosophical polemics. Madhusūdana Sarasvatī answered all 100+ objections raised by Dvaita's Vyāsatīrtha with insurmountable Navya-Nyāya precision.",
        dialecticalSignificance: "Secured the intellectual invulnerability of Advaita against realist dualism for all subsequent centuries."
      },
      {
        id: "m_baladeva_govinda_bhasya",
        yearOrCentury: "c. 1706–1720 CE",
        title: "Baladeva Vidyābhūṣaṇa Composes the Govinda Bhāṣya at Galta",
        sanskritTitle: "बलदेव-विद्याभूषण-विरचितं गोविन्दभाष्यम् (गलता-पीठम्)",
        sampradayaId: "acintya",
        primaryFigures: ["Śrīla Baladeva Vidyābhūṣaṇa", "Viśvanātha Cakravartī Ṭhākura"],
        keyTexts: ["Govinda Bhāṣya (on Brahma Sūtras)", "Prameyaratnāvalī", "Siddhāntaratna"],
        coreEventOrDebate: "Challenged by the scholars of Jaipur to prove the Vedantic orthodoxy of the Gauḍīya school, Baladeva composed the Govinda Bhāṣya under the direct revelation of Śrī Govindadeva in a matter of days.",
        dialecticalSignificance: "Established Gauḍīya Acintya Bhedābheda as an independent, fully authorized canonical Vedānta Sampradāya."
      }
    ]
  },
  {
    id: "epoch_modern",
    name: "5. Modern Syntheses, Śākta-Vedānta & Navyānubhava Vedānta Revival",
    devanagariName: "५. आधुनिक-समन्वयः शाक्तवेदान्तः नव-वेदान्त-जागरणम्",
    period: "c. 1800 CE – Present",
    theme: "Śāktaviśiṣṭādvaita, Practical Vedānta & Global Philosophical Renaissance",
    description: "The modern renaissance where traditional giants like MM Pañcānana Tarkaratna integrated Śākta Tantra into the Brahma Sūtras, while Ramakrishna, Vivekananda, and Sri Aurobindo carried Vedānta to global frontiers.",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    milestones: [
      {
        id: "m_panchanana_saktabhasya",
        yearOrCentury: "1866–1940 CE",
        title: "MM Pañcānana Bhaṭṭācārya Tarkaratna Establishes Śāktaviśiṣṭādvaita",
        sanskritTitle: "महामहोपाध्याय-पञ्चानन-तर्करत्न-प्रणीतं ब्रह्मसूत्र-शाक्तभाष्यम्",
        sampradayaId: "saktavisistadvaita",
        primaryFigures: ["Mahāmahopādhyāya Pañcānana Bhaṭṭācārya Tarkaratna"],
        keyTexts: ["Brahmasūtra-Śāktabhāṣyam (Sarvavidyānidhāna)", "Īśopaniṣad Śāktabhāṣyam", "Sarvamaṅgalā Mahākāvyam"],
        coreEventOrDebate: "Composed the first monumental Sanskrit commentary on the Brahma Sūtras from the Śākta perspective, proving that Parā-Śakti (Divine Mother) is the integral dynamic nature of Brahman (Śaktiviśiṣṭa-Brahma-Vāda), synthesizing Upaniṣads, Brahma Sūtras, and Tantra-Āgamas.",
        dialecticalSignificance: "Provided the Śākta tradition with an unshakeable canonical Vedantic foundation, establishing Śāktaviśiṣṭādvaita as a major classical darśana.",
        granthaIdToRead: "brahmasutra-saktabhasya"
      },
      {
        id: "m_ramakrishna_vijnana",
        yearOrCentury: "1836–1886 CE",
        title: "Sri Ramakrishna Paramahamsa: Vijñāna Vedānta & Yato Mat Tato Path",
        sanskritTitle: "श्रीरामकृष्ण-परमहंसः (विज्ञान-वेदान्तः सर्वधर्म-समन्वयश्च)",
        sampradayaId: "neo_vedanta",
        primaryFigures: ["Bhagavān Sri Ramakrishna", "Holy Mother Sri Sarada Devi"],
        keyTexts: ["Śrī Śrī Rāmakṛṣṇa Kathāmṛta (The Gospel of Sri Ramakrishna)"],
        coreEventOrDebate: "Realized the supreme truth through Advaita (under Totapuri), Tantra (under Bhairavi Brahmani), Vaiṣṇava devotion, Islam, and Christianity, formulating Vijñāna Vedānta: 'Jñāna is knowing that Brahman alone is real; Vijñāna is seeing that Brahman has become everything'.",
        dialecticalSignificance: "Dismantled sectarian dogmatism and inaugurated the modern harmonious era of experiential Vedānta."
      },
      {
        id: "m_vivekananda_chicago",
        yearOrCentury: "1863–1902 CE",
        title: "Swami Vivekananda: Practical Vedānta & World Parliament of Religions",
        sanskritTitle: "स्वामी-विवेकानन्दः व्यावहारिक-वेदान्तः विश्वधर्म-महासभा च (१८९३)",
        sampradayaId: "neo_vedanta",
        primaryFigures: ["Swami Vivekananda"],
        keyTexts: ["Complete Works (Jñāna, Rāja, Karma, Bhakti Yoga, Practical Vedanta)", "Rouse the Sleeping Soul Lectures"],
        coreEventOrDebate: "Electrified the 1893 Chicago Parliament of Religions and founded the Ramakrishna Math & Mission, preaching 'Practical Vedānta': serving Jīva as Śiva (Daridra-Nārāyaṇa Seva) and realizing the innate divinity of every soul.",
        dialecticalSignificance: "Transformed Vedānta from an ascetic recluse philosophy into an empowering global worldview for human dignity, science, and service."
      },
      {
        id: "m_aurobindo_integral",
        yearOrCentury: "1872–1950 CE",
        title: "Sri Aurobindo Propounds Pūrṇa Vedānta (Integral Non-Dualism)",
        sanskritTitle: "श्री-अরবিন্দ-प्रणीतं पूर्णवेदान्तदर्शनम् (अतिमानस-अवतरणम्)",
        sampradayaId: "neo_vedanta",
        primaryFigures: ["Sri Aurobindo Ghose", "The Mother (Mirra Alfassa)"],
        keyTexts: ["The Life Divine", "The Synthesis of Yoga", "Essays on the Gita", "Savitri"],
        coreEventOrDebate: "Formulated the philosophy of Cosmic Evolution and Supramental Descent, demonstrating that Matter is slumbering Spirit and human life must be divinized on earth (Pūrṇādvaita).",
        dialecticalSignificance: "Extended classical Advaita into an evolutionary metaphysical paradigm reconciling world-affirmation with spiritual transcendence."
      },
      {
        id: "m_chinmayananda_global",
        yearOrCentury: "1916–1993 CE",
        title: "Swami Tapovan Maharaj & Swami Chinmayananda: Global Jñāna Yajña Revival",
        sanskritTitle: "स्वामी-तपोवन-महाराजः स्वामी-चिन्मयानन्दश्च (ज्ञान-यज्ञ-पुनर्जागरणम्)",
        sampradayaId: "neo_vedanta",
        primaryFigures: ["Swami Tapovan Maharaj", "Swami Chinmayananda"],
        keyTexts: ["Iśvara Darśana", "Holy Geeta Commentary", "Upaniṣad Exegeses"],
        coreEventOrDebate: "Brought traditional Upaniṣadic and Gītā discourses out of the Himalayas into modern auditoriums through dynamic 'Gītā Jñāna Yajñas', creating Chinmaya Mission worldwide.",
        dialecticalSignificance: "Democratized the study of classical Prasthānatrayī for educated householders and modern youth across six continents."
      },
      {
        id: "m_contemporary_vedanta",
        yearOrCentury: "Late 20th – 21st Century",
        title: "Contemporary Global Vedānta & Mind-Consciousness Science Dialogue",
        sanskritTitle: "समकालीन-वैश्विक-वेदान्तः चेतना-विज्ञान-संवादश्च",
        sampradayaId: "neo_vedanta",
        primaryFigures: ["Swami Dayananda Saraswati (Arsha Vidya)", "Swami Sarvapriyananda", "Ayon Maharaj", "Swami Gambhirananda"],
        keyTexts: ["Contemporary Academic & Monastic Vedānta Publications"],
        coreEventOrDebate: "Engaging Advaita and Indian epistemology with contemporary Western philosophy of mind, cognitive science, and neuro-phenomenology of consciousness.",
        dialecticalSignificance: "Positions Vedānta at the forefront of the global hard problem of consciousness and universal ethical living."
      }
    ]
  }
];

export const VEDIC_ROOT_INFO = {
  id: "vedic_root",
  name: "Vedic Revelation & Prasthānatrayī",
  devanagariName: "वैदिक-प्रस्थानत्रयी-मूलम्",
  description: "The immutable fountainhead of all Vedantic lineages. Every legitimate Vedantic Sampradāya establishes its authenticity by composing rigorous Bhāṣyas (systematic commentaries) on the three foundational canons (Prasthānatrayī).",
  threePrasthānas: [
    {
      name: "Śruti Prasthāna (Upaniṣads)",
      sanskritName: "श्रुति-प्रस्थानम् (दशोपनिषदः)",
      authority: "Revealed Transcendent Word (Apauruṣeya Śabda)",
      coreTexts: ["Īśa", "Kena", "Kaṭha", "Praśna", "Muṇḍaka", "Māṇḍūkya", "Taittirīya", "Aitareya", "Chāndogya", "Bṛhadāraṇyaka", "Śvetāśvatara", "Kauṣītaki"],
      significance: "Direct experiential utterances of the ancient Ṛṣis revealing the identity, nature, and realization of Brahman."
    },
    {
      name: "Nyāya / Sūtra Prasthāna (Brahma Sūtras)",
      sanskritName: "न्याय-प्रस्थानम् / सूत्र-प्रस्थानम्",
      authority: "Maharṣi Bādarāyaṇa Kṛṣṇa Dvaipāyana Vyāsa",
      coreTexts: ["Brahma Sūtras (555 Aphorisms in 4 Adhyāyas: Samanvaya, Avirodha, Sādhana, Phala)"],
      significance: "Logical systematization and dialectical defense of all seemingly conflicting Upaniṣadic declarations."
    },
    {
      name: "Smṛti Prasthāna (Bhagavad Gītā)",
      sanskritName: "स्मृति-प्रस्थानम् (श्रीमद्भगवद्गीता)",
      authority: "Svayaṁ Bhagavān Śrī Kṛṣṇa in dialogue with Arjuna",
      coreTexts: ["Bhagavad Gītā (700 Verses in 18 Adhyāyas)"],
      significance: "Practical spiritual blueprint harmonizing Jñāna, Karma, Dhyāna, and Bhakti Yogas for lived realization."
    }
  ],
  protoAcharyas: [
    {
      name: "Maharṣi Bādarāyaṇa Vyāsa",
      era: "Vedic Antiquity",
      contribution: "Composed the Brahma Sūtras, codifying the entire Uttara-Mīmāṁsā philosophy."
    },
    {
      name: "Bodhāyanācārya",
      era: "Pre-Christian Era",
      contribution: "Authored the ancient extensive Brahma-Sūtra-Vṛtti cited by Rāmānuja and ancient commentators."
    },
    {
      name: "Dramiḍācārya & Ṭaṅkācārya",
      era: "Early Classical Era",
      contribution: "Early pre-Śaṅkara commentators on the Chāndogya and Brahma Sūtras."
    },
    {
      name: "Bhartṛprapañca",
      era: "6th Century CE",
      contribution: "Early proponent of Bhedābheda commentary on Bṛhadāraṇyaka Upaniṣad."
    }
  ]
};
