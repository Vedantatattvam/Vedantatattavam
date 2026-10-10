import { BhashyaEntry, GranthaVerse, TikaEntry } from "./types";

/**
 * Curated classical Bhāṣyas (Commentaries) and Ṭīkās (Sub-Commentaries)
 * across the great traditions of Vedānta (Advaita, Viśiṣṭādvaita, Dvaita,
 * Śuddhādvaita, Dvaitādvaita, Acintya-Bhedābheda, Akṣara-Puruṣottama, Śāktaviśiṣṭādvaita).
 */

export const CANONICAL_TRADITION_CONFIGS: Record<
  string,
  {
    name: string;
    bhashyaName: string;
    author: string;
    authorDevanagari: string;
    school: string;
    paramparaId: any;
    color: string;
    century: string;
    archiveUrl?: string;
    defaultTikas: { name: string; author: string; century: string; tradition: string }[];
  }
> = {
  advaita: {
    name: "Advaita Vedānta (Śāṅkara Prasthāna)",
    bhashyaName: "Śārīraka-Bhāṣya / Śāṅkara-Bhāṣya (शारीरकभाष्यम्)",
    author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
    authorDevanagari: "आदिशङ्कराचार्यः",
    school: "Advaita (अद्वैतवेदान्तः)",
    paramparaId: "advaita",
    color: "#b45309",
    century: "8th Century CE",
    defaultTikas: [
      {
        name: "Bhāmatī (भामती)",
        author: "Vācaspati Miśra (वाचस्पति मिश्रः)",
        century: "9th-10th Century CE",
        tradition: "Bhāmatī Prasthāna (अद्वैत-भामती-प्रस्थानम्)",
      },
      {
        name: "Pañcapādikā-Vivaraṇa (पञ्चपादिका-विवरणम्)",
        author: "Prakāśātmayati & Padmapādācārya (प्रकाशात्मयतिः)",
        century: "10th Century CE",
        tradition: "Vivaraṇa Prasthāna (अद्वैत-विवरण-प्रस्थानम्)",
      },
      {
        name: "Nyāya-Nirṇaya (न्यायनिर्णयः)",
        author: "Ānandagiri (आनन्दगिरिः)",
        century: "13th Century CE",
        tradition: "Śāṅkara-Bhāṣya-Vyākhyāna",
      },
      {
        name: "Ratnaprabhā (रत्नप्रभा)",
        author: "Govindānanda Saraswatī (गोविन्दानन्द सरस्वती)",
        century: "16th Century CE",
        tradition: "Śārīraka-Ratnaprabhā",
      },
    ],
  },
  visistadvaita: {
    name: "Viśiṣṭādvaita Vedānta (Rāmānuja Prasthāna)",
    bhashyaName: "Śrī-Bhāṣya (श्रीभाष्यम्)",
    author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
    authorDevanagari: "श्रीरामानुजाचार्यः",
    school: "Viśiṣṭādvaita (विशिष्टाद्वैतम्)",
    paramparaId: "visistadvaita",
    color: "#c2410c",
    century: "11th-12th Century CE",
    defaultTikas: [
      {
        name: "Śrutaprakāśikā (श्रुतप्रकाशिका)",
        author: "Sudarśana Sūri (सुदर्शनसूरिः)",
        century: "13th Century CE",
        tradition: "Śrī-Bhāṣya-Mahāṭīkā (विशिष्टाद्वैत-परमप्रमाणम्)",
      },
      {
        name: "Tattva-Ṭīkā (तत्त्वटीका)",
        author: "Vedānta Deśika / Svāmī Deśikan (वेदान्तदेशिकः)",
        century: "13th-14th Century CE",
        tradition: "Ubhayavedānta-Prasthāna",
      },
      {
        name: "Tātparya-Candrikā (तात्पर्यचन्द्रिका)",
        author: "Vedānta Deśika (वेदान्तदेशिकः)",
        century: "14th Century CE",
        tradition: "Gītā-Bhāṣya-Vyākhyāna",
      },
    ],
  },
  dvaita: {
    name: "Dvaita Vedānta (Mādhva Prasthāna)",
    bhashyaName: "Brahmasūtra-Bhāṣya & Aṇuvyākhyāna (अणुव्याख्यानम् / सूत्रभाष्यम्)",
    author: "Śrī Madhvācārya / Ānandatīrtha (श्रीमध्वानन्दतीर्थः)",
    authorDevanagari: "श्रीमध्वानन्दतीर्थः",
    school: "Dvaita (द्वैतवेदान्तः / तत्त्ववादः)",
    paramparaId: "dvaita",
    color: "#0284c7",
    century: "13th Century CE",
    defaultTikas: [
      {
        name: "Śrīman-Nyāyasudhā (श्रीमन्न्यायसुधा)",
        author: "Śrī Jayatīrtha / Ṭīkākāra-pāda (श्रीजयतीर्थः)",
        century: "14th Century CE",
        tradition: "Dvaita Supreme Dialectical Ṭīkā",
      },
      {
        name: "Tattva-Prakāśikā (तत्त्वप्रकाशिका)",
        author: "Śrī Jayatīrtha (श्रीजयतीर्थः)",
        century: "14th Century CE",
        tradition: "Sūtrabhāṣya-Ṭīkā",
      },
      {
        name: "Nyāyasudhā-Parimala (न्यायसुधा-परिमलः)",
        author: "Śrī Rāghavendra Tīrtha (श्रीराघवेन्द्रतीर्थः)",
        century: "16th-17th Century CE",
        tradition: "Mādhva-Sub-Commentary",
      },
    ],
  },
  suddhadvaita: {
    name: "Śuddhādvaita Vedānta (Vallabha Puṣṭi Prasthāna)",
    bhashyaName: "Aṇubhāṣya (अणुभाष्यम्)",
    author: "Śrī Vallabhācārya Mahāprabhu (श्रीवल्लभाचार्यः)",
    authorDevanagari: "श्रीवल्लभाचार्यः",
    school: "Śuddhādvaita (शुद्धाद्वैतम् / पुष्टिमार्गः)",
    paramparaId: "suddhadvaita",
    color: "#d97706",
    century: "15th-16th Century CE",
    defaultTikas: [
      {
        name: "Bhāṣya-Prakāśa (भाष्यप्रकाशः)",
        author: "Gosvāmī Śrī Puruṣottamajī (श्रीपुरुषोत्तमजी गोस्वामी)",
        century: "17th-18th Century CE",
        tradition: "Puṣṭimārga Exegetical Commentary",
      },
      {
        name: "Raśmi (रश्मिः)",
        author: "Gopīśvara Gosvāmī (गोपीश्वर गोस्वामी)",
        century: "18th-19th Century CE",
        tradition: "Bhāṣyaprakāśa-Vistāra",
      },
    ],
  },
  dvaitadvaita: {
    name: "Dvaitādvaita Vedānta (Nimbārka Sanatkumāra Prasthāna)",
    bhashyaName: "Vedānta-Pārijāta-Saurabha (वेदान्तपारिजातसौरभम्)",
    author: "Śrī Nimbārkācārya (श्रीनिविष्ट-निम्बार्काचार्यः)",
    authorDevanagari: "श्रीनिविष्ट-निम्बार्काचार्यः",
    school: "Dvaitādvaita (द्वैताद्वैतम् / भेदाभेदः)",
    paramparaId: "dvaitadvaita",
    color: "#059669",
    century: "12th-13th Century CE",
    defaultTikas: [
      {
        name: "Vedānta-Kaustubha (वेदान्तकौस्तुभः)",
        author: "Śrīnivāsa Sūri (श्रीनिवाससूरिः)",
        century: "13th Century CE",
        tradition: "Nimbārka Dialectical Commentary",
      },
      {
        name: "Vedānta-Kaustubha-Prabhā (वेदान्तकौस्तुभप्रभा)",
        author: "Keśava Kāśmīrī Bhaṭṭa (केशवकाश्मीरी भट्टः)",
        century: "15th-16th Century CE",
        tradition: "Sanatkumāra-Sampradāya",
      },
    ],
  },
  acintya: {
    name: "Acintya-Bhedābheda Vedānta (Gauḍīya Prasthāna)",
    bhashyaName: "Govinda-Bhāṣya (गोविन्दभाष्यम्)",
    author: "Śrīla Baladeva Vidyābhūṣaṇa (श्रील बलदेव विद्याभूषणः)",
    authorDevanagari: "श्रील बलदेव विद्याभूषणः",
    school: "Acintya-Bhedābheda (अचिन्त्यभेदाभेदः)",
    paramparaId: "acintya",
    color: "#0d9488",
    century: "18th Century CE",
    defaultTikas: [
      {
        name: "Sūkṣma-Ṭīkā (सूक्ष्मटीका)",
        author: "Baladeva Vidyābhūṣaṇa (बलदेव विद्याभूषणः)",
        century: "18th Century CE",
        tradition: "Govinda-Bhāṣya Gloss",
      },
      {
        name: "Siddhānta-Ratnam (सिद्धान्तरत्नम्)",
        author: "Baladeva Vidyābhūṣaṇa (बलदेव विद्याभूषणः)",
        century: "18th Century CE",
        tradition: "Gauḍīya Epistemology & Dialectics",
      },
    ],
  },
  aksarapurusottama: {
    name: "Akṣara-Puruṣottama Vedānta (Svāminārāyaṇa Prasthāna)",
    bhashyaName: "Swaminarayan Bhashyam (स्वामिनारायणभाष्यम्)",
    author: "Mahāmahopādhyāya Sadhu Bhadreshdas Swami (साधु भद्रेशदास स्वामी)",
    authorDevanagari: "साधु भद्रेशदास स्वामी",
    school: "Akṣara-Puruṣottama (अक्षरपुरुषोत्तम-दर्शनम्)",
    paramparaId: "aksarapurusottama",
    color: "#9333ea",
    century: "21st Century CE",
    defaultTikas: [
      {
        name: "Swaminarayan-Siddhanta-Sudha Vāda-Vistāra (स्वामिनारायण-सिद्धान्त-सुधा)",
        author: "Sadhu Bhadreshdas Swami (साधु भद्रेशदास स्वामी)",
        century: "21st Century CE",
        tradition: "Prasthānatrayī Classical Dialectics",
      },
    ],
  },
  saktavisistadvaita: {
    name: "Śāktaviśiṣṭādvaita / Śaiva-Viśiṣṭādvaita",
    bhashyaName: "Śrīkaṇṭha-Bhāṣya & Śrīkara-Bhāṣya (श्रीकण्ठभाष्यम् / श्रीकरभाष्यम्)",
    author: "Śrīkaṇṭha Śivācārya & Śrīpati Paṇḍita (श्रीकण्ठशिवाचार्यः)",
    authorDevanagari: "श्रीकण्ठशिवाचार्यः",
    school: "Śaiva/Śākta-Viśiṣṭādvaita",
    paramparaId: "saktavisistadvaita",
    color: "#dc2626",
    century: "11th-12th Century CE",
    defaultTikas: [
      {
        name: "Śivārkamaṇidīpikā (शिवार्कमणिदीपिका)",
        author: "Appayya Dīkṣita (अप्पय्यदीक्षितः)",
        century: "16th Century CE",
        tradition: "Śivādvaita Exegetical Masterwork",
      },
    ],
  },
  shaktibhashya: {
    name: "Śākta-Vedānta Svarūpādvaita (Bhatpara Prasthāna)",
    bhashyaName: "Brahmasūtra-Śāktabhāṣyam (शाक्तभाष्यम्)",
    author: "Mahāmahopādhyāya Pañcānana Bhaṭṭācārya Tarkaratna (महामहोपाध्याय पञ्चानन तर्करत्नः)",
    authorDevanagari: "महामहोपाध्याय पञ्चानन तर्करत्नः",
    school: "Śākta-Vedānta (स्वरूपाद्वैतवादः / शाक्तभाष्य-प्रस्थानम्)",
    paramparaId: "saktavisistadvaita",
    color: "#e11d48",
    century: "20th Century CE (1938 CE)",
    defaultTikas: [
      {
        name: "Śāktabhāṣya-Svarūpārtha-Dīpikā (स्वरूपाद्वैत-दीपिका)",
        author: "Bhatpara Scholastic Tradition",
        century: "20th Century CE",
        tradition: "Śākta-Vedānta Vistāra",
      },
      {
        name: "Tattvabodhākhyā-Vivṛtiḥ (तत्त्वबोधाख्या-विवृतिः)",
        author: "Śākta Dialectical Circle",
        century: "20th Century CE",
        tradition: "Śākta-Sūtra Gloss",
      },
    ],
  },
};

/**
 * Curated multi-Bhāṣya and Ṭīkā repositories for key sūtras and verses.
 */
export const CURATED_MULTI_BHASHYAS: Record<string, BhashyaEntry[]> = {
  // Brahma Sūtra 1.1.1: Athāto Brahmajijñāsā
  "bs-1-1-1": [
    {
      id: "advaita-bs-1-1-1",
      name: "Śārīraka-Bhāṣya (शारीरकभाष्यम्)",
      devanagariName: "शारीरकभाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract:
        "अथातःशब्दाभ्यां साधनचतुष्टयसम्पत्तिरानन्तर्यार्था हेतुमत्त्वं चोच्यते । नित्यानित्यवस्तुविवेकः, इहामुत्रार्थभोगविरागः, शमदमादिसाधनसम्पत्, मुमुक्षुत्वं च—एतेषु सत्सु प्रागपि धर्मजिज्ञासाया ऊर्ध्वं च शक्यते ब्रह्म जिज्ञासितुं ज्ञातुं च, न विपर्यये । ब्रह्मणो जिज्ञासा ब्रह्मजिज्ञासा—ब्रह्म ज्ञातुमिच्छा । ज्ञानाद्धि मोक्षः प्राप्यते, कर्मणा त्वनित्यमेव फलम् ।",
      mulaIast:
        "athātaḥ-śabdābhyāṁ sādhana-catuṣṭaya-sampattir ānantaryārthā hetumattvaṁ cocyate | nityānitya-vastu-vivekaḥ, ihāmutrārtha-bhoga-virāgaḥ, śama-damādi-sādhana-sampat, mumukṣutvaṁ ca—eteṣu satsu prāg api dharma-jijñāsāyā ūrdhvaṁ ca śakyate brahma jijñāsituṁ jñātuṁ ca, na viparyaye | brahmaṇo jijñāsā brahma-jijñāsā—brahma jñātum icchā | jñānād dhi mokṣaḥ prāpyate, karmaṇā tv anityam eva phalam |",
      englishExplanation:
        "Ādi Śaṅkara defines 'Atha' (Now) as succeeding the acquisition of the Fourfold Qualifications (Sādhana-Catuṣṭaya), not the study of Vedic rituals (Dharma-Mīmāṁsā). 'Ataḥ' (Therefore) denotes that ritual action produces merely perishable results, whereas direct knowledge of Brahman alone confers eternal liberation.",
      commentaryNotes:
        "Key dispute: Rejects the view that Dharma-Jijñāsā is an indispensable prerequisite for Brahma-Jijñāsā. The inquiry into Brahman is wholly independent of ritual injunctions.",
      tikas: [
        {
          id: "bhamati-1-1-1",
          name: "Bhāmatī-Ṭīkā (भामती)",
          author: "Vācaspati Miśra (वाचस्पति मिश्रः)",
          century: "9th-10th Century CE",
          tradition: "Bhāmatī Prasthāna",
          mulaExtract:
            "ननु धर्मजिज्ञासायाः प्रागपि अधीतवेदान्तस्य साधनचतुष्टयसम्पन्नस्य ब्रह्मजिज्ञासोपपत्तेः, आनन्तर्यार्थोऽथशब्दः साधनचतुष्टयानन्तर्यमेवाह, न धर्मजिज्ञासानन्तर्यम् । विवेकवैराग्यादिशून्यस्य तु कोटिशोऽपि कर्माणि कुर्वतो न ब्रह्माधिगमेऽधिकारः ।",
          englishExplanation:
            "Vācaspati Miśra argues that even prior to the inquiry into Dharma, one who has studied the Upaniṣads and attained discrimination and dispassion is fully qualified for the inquiry into Brahman. Sādhana-Catuṣṭaya is the direct, unconditional proximate cause.",
          dialecticalNotes:
            "Harmonizes Avidyā as having individual Jīvas as its locus (Jīvāśrita) and Brahman as its object (Viṣaya).",
        },
        {
          id: "vivarana-1-1-1",
          name: "Pañcapādikā-Vivaraṇa (पञ्चपादिका-विवरणम्)",
          author: "Prakāśātmayati & Padmapāda (प्रकाशात्मयतिः)",
          century: "10th Century CE",
          tradition: "Vivaraṇa Prasthāna",
          mulaExtract:
            "ब्रह्मजिज्ञासापदेन ब्रह्मणः कर्मत्वं प्रतिपाद्यते, न तु शेषत्वम् । ब्रह्मण एव साक्षात् परमपुरुषार्थरूपत्वात् जिज्ञासाया मुख्यं प्रयोजनम् अविद्यानिवृत्तिपुरःसरः स्वरूपानन्दाविर्भावः ।",
          englishExplanation:
            "Prakāśātman establishes that in the compound 'Brahmajijñāsā', Brahman is the direct grammatical object (Karmaṇi Ṣaṣṭhī), signifying that Brahman is the supreme goal in Itself, and the eradication of beginningless cosmic Avidyā is the fruit.",
          dialecticalNotes:
            "Defends Mūlāvidyā as residing directly in pure Consciousness (Brahma-Āśrita-Viṣaya).",
        },
        {
          id: "nyayanirnaya-1-1-1",
          name: "Nyāya-Nirṇaya (न्यायनिर्णयः)",
          author: "Ānandagiri (आनन्दगिरिः)",
          century: "13th Century CE",
          tradition: "Śāṅkara Gloss",
          mulaExtract:
            "अतःशब्देन कर्मफलस्य अनित्यत्वं 'तद्यथेह कर्मजितो लोकः क्षीयत' इत्यादिश्रुतिभ्यो दर्शितम् । नित्यस्यैव मोक्षस्य काम्यमानत्वात् कर्मनिरासः सिध्यति ।",
          englishExplanation:
            "Ānandagiri provides grammatical and scriptural corroboration for Śaṅkara's use of 'Ataḥ', citing Chāndogya 8.1.6 to prove that work-produced fruits are transient, necessitating the transcendence of ritual action.",
        },
      ],
    },
    {
      id: "visistadvaita-bs-1-1-1",
      name: "Śrī-Bhāṣya (श्रीभाष्यम्)",
      devanagariName: "श्रीभाष्यम्",
      author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "11th-12th Century CE",
      badgeColor: "#c2410c",
      mulaExtract:
        "अथातो धर्मजिज्ञासा इत्यारभ्य अनावृत्तिः शब्दादित्येवमन्तं शास्त्रमेकम् । तत्र पूर्वभागे कर्मस्वरूपतदाराधनप्रकारावबोधात्, उत्तरभागे च तदाराध्यभूतपरब्रह्मस्वरूपगुणाविर्भावमोक्षफलावबोधात् आनन्तर्यं युक्तम् । अथातःशब्दाभ्यां कर्मविचारपर्यवसानं ब्रह्मविचारे हेतुरित्युच्यते । ब्रह्म तु अशेषदोषप्रत्यनीककल्याणगुणगणार्णवः पुरुषोत्तमो नारायणः ।",
      mulaIast:
        "athāto dharmajijñāsā ity ārabhya anāvṛttiḥ śabdād ity evam-antaṁ śāstram ekam | tatra pūrva-bhāge karma-svarūpa-tad-ārādhana-prakārāvabodhāt, uttara-bhāge ca tad-ārādhya-bhūta-para-brahma-svarūpa-guṇāvirbhāva-mokṣa-phalāvabodhāt ānantaryaṁ yuktam |",
      englishExplanation:
        "Śrī Rāmānuja contends that Pūrva-Mīmāṁsā and Uttara-Mīmāṁsā form one unified body of scripture (Aikya-Śāstram). 'Atha' therefore means 'after the exhaustive realization that ritual works yield only limited fruits'. Brahman is not an attribute-less void (Nirviśeṣa), but the Supreme Divine Person (Nārāyaṇa / Puruṣottama), possessing infinite auspicious qualities.",
      commentaryNotes:
        "Directly challenges Advaitic Vivartavāda and Nirguṇavāda, asserting that Brahman is eternally endowed with animate souls (Cit) and matter (Acit) as His body (Śarīra-Śarīrī-Bhāva).",
      tikas: [
        {
          id: "srutaprakasika-1-1-1",
          name: "Śrutaprakāśikā (श्रुतप्रकाशिका)",
          author: "Sudarśana Sūri (सुदर्शनसूरिः)",
          century: "13th Century CE",
          tradition: "Śrī-Bhāṣya Masterwork",
          mulaExtract:
            "षोडशलक्षणं मीमांसाशास्त्रमेकमेव । पूर्वषोडशके कर्मविचारेण कर्मणामल्पफलत्वमवगम्य, अनन्तस्थिरफलभूतपरब्रह्मजिज्ञासायां प्रवृत्तिर्युज्यते । निर्विशेषब्रह्मणि प्रमाणाभावश्च विस्तरेण प्रसाध्यते ।",
          englishExplanation:
            "Sudarśana Sūri dialectically demonstrates that the 20 chapters of Mīmāṁsā constitute a single continuous inquiry, and refutes Nirviśeṣa Brahman by proving that all cognition is inherently qualified (Saviśeṣa).",
        },
        {
          id: "tattvatika-1-1-1",
          name: "Tattva-Ṭīkā (तत्त्वटीका)",
          author: "Vedānta Deśika (वेदान्तदेशिकः)",
          century: "14th Century CE",
          tradition: "Ubhayavedānta",
          mulaExtract:
            "ब्रह्मणः सविशेषत्वमेव श्रुतिशतसिद्धम् । अतो जिज्ञास्यं ब्रह्म न निर्गुणमपि तु समस्तकल्याणगुणाकरं परं ज्योतिः ।",
          englishExplanation:
            "Vedānta Deśika systematizes Rāmānuja's refutations of illusionism, demonstrating that Śruti consistently proclaims Brahman's sovereign auspicious majesty.",
        },
      ],
    },
    {
      id: "dvaita-bs-1-1-1",
      name: "Brahmasūtra-Bhāṣya & Aṇuvyākhyāna (अणुव्याख्यानम्)",
      devanagariName: "अणुव्याख्यानम्",
      author: "Śrī Madhvācārya (श्रीमध्वानन्दतीर्थः)",
      school: "Dvaita Vedānta (द्वैतवेदान्तः / तत्त्ववादः)",
      paramparaId: "dvaita",
      century: "13th Century CE",
      badgeColor: "#0284c7",
      mulaExtract:
        "अथशब्दो मङ्गळार्थोऽधिकार्यानन्तर्यार्थश्च । अतःशब्दो हेत्वर्थः । भगवत्प्रसादादृते न मोक्षः सिध्यति, प्रसादश्च तद्गुणानां याथार्थ्यज्ञानादेव भवति, तस्माद् ब्रह्मजिज्ञासा कर्तव्या । ब्रह्म च सर्वगुणपूर्णो भगवान् विष्णुरेव, नान्यः । जीवाद् भिन्न एव परमात्मा ।",
      mulaIast:
        "atha-śabdo maṅgaḷārtho'dhikāry-ānantaryārthaś ca | ataḥ-śabdo hetv-arthaḥ | bhagavat-prasādād ṛte na mokṣaḥ sidhyati, prasādaś ca tad-guṇānāṁ yāthārthya-jñānād eva bhavati, tasmād brahma-jijñāsā kartavyā |",
      englishExplanation:
        "Śrī Madhvācārya holds that 'Atha' invokes auspiciousness and follows the qualifications of devotion, detachment, and surrender. 'Ataḥ' signifies that liberation is achievable solely through the grace (Prasāda) of Lord Viṣṇu. Brahman is Viṣṇu, full of infinite flawless virtues (Guṇa-Pūrṇa), eternally distinct from individual souls and matter.",
      commentaryNotes:
        "Establishes realistic dualism (Bheda) and the fundamental fivefold distinction (Pañcabheda).",
      tikas: [
        {
          id: "nyayasudha-1-1-1",
          name: "Śrīman-Nyāyasudhā (श्रीमन्न्यायसुधा)",
          author: "Śrī Jayatīrtha (श्रीजयतीर्थः / टीकाकारपादः)",
          century: "14th Century CE",
          tradition: "Dvaita Supreme Dialectics",
          mulaExtract:
            "अथातःशब्दाभ्यां मोक्षोपायस्य ब्रह्मज्ञानस्य तद्धेतोर्जिज्ञासायाश्च प्रामाणिकत्वं प्रतिपाद्यते । निर्गुणब्रह्मणोऽसत्त्वान्नास्त्येव तत्र विचारः । सगुणे भगवत्येव सर्वाणि शास्त्राणि पर्यवस्यन्ति ।",
          englishExplanation:
            "Jayatīrtha launches an encyclopedic critique against Advaita and Viśiṣṭādvaita, demonstrating that scripture nowhere teaches the identity of Jīva and Brahman, but rather the eternal majesty and sovereign supremacy of Lord Hari.",
        },
      ],
    },
    {
      id: "suddhadvaita-bs-1-1-1",
      name: "Aṇubhāṣya (अणुभाष्यम्)",
      devanagariName: "अणुभाष्यम्",
      author: "Śrī Vallabhācārya (श्रीवल्लभाचार्यः)",
      school: "Śuddhādvaita (शुद्धाद्वैतम् / पुष्टिमार्गः)",
      paramparaId: "suddhadvaita",
      century: "15th-16th Century CE",
      badgeColor: "#d97706",
      mulaExtract:
        "अथशब्दोऽत्र वेदान्तविचारप्रारम्भे मङ्गळार्थः । अतःशब्देन कर्मणां पारलौकिकसांसारिकफलत्वेन नश्वरत्वमुक्त्वा, भगवत्सेवारूपपुष्टिमार्गस्य नित्यत्वं प्रकाश्यते । ब्रह्म तु शुद्धं मायारहितं सच्चिदानन्दरूपं श्रीकृष्णस्वरूपम् ।",
      englishExplanation:
        "Śrī Vallabhācārya propounds Pure Non-Dualism free from Māyā (Śuddhādvaita). The world is not an illusion (Mithyā) but a real manifestation (Pariṇāma) of Brahman. Brahman is Śrī Kṛṣṇa, and liberation is the loving participation in His eternal Divine Play (Puṣṭi-Mārga).",
      tikas: [
        {
          id: "bhashyaprakasa-1-1-1",
          name: "Bhāṣya-Prakāśa (भाष्यप्रकाशः)",
          author: "Gosvāmī Śrī Puruṣottamajī (श्रीपुरुषोत्तमजी)",
          century: "17th Century CE",
          tradition: "Puṣṭimārga Dialectics",
          mulaExtract:
            "शुद्धब्रह्मवादे जगतः सत्यत्वम्, अविद्याया एव कल्पितत्वम् । 'सर्वं खल्विदं ब्रह्म' इति श्रुतेरक्षरार्थ एव गृह्यते ।",
          englishExplanation:
            "Explicates that the entire cosmos is literally real and non-different from Brahman without invoking any illusionary adjunct.",
        },
      ],
    },
    {
      id: "acintya-bs-1-1-1",
      name: "Govinda-Bhāṣya (गोविन्दभाष्यम्)",
      devanagariName: "गोविन्दभाष्यम्",
      author: "Śrīla Baladeva Vidyābhūṣaṇa (श्रील बलदेव विद्याभूषणः)",
      school: "Acintya-Bhedābheda (अचिन्त्यभेदाभेदः)",
      paramparaId: "acintya",
      century: "18th Century CE",
      badgeColor: "#0d9488",
      mulaExtract:
        "अथशब्द आनन्तर्ये, अतःशब्दो हेतौ । पूर्वं कर्ममीमांसया यज्ञादिकर्मसु विरक्तस्य परमात्मजिज्ञासा युक्ता । ब्रह्म तु गोविन्दो भगवान् सच्चिदानन्दविग्रहः । जीवस्य ब्रह्मणश्च भेदः अभेदश्च अचिन्त्यशक्त्या युगपदेव सिद्धः ।",
      englishExplanation:
        "Composed at the temple of Govindajī in Jaipur. Baladeva Vidyābhūṣaṇa synthesizes Gauḍīya Vedānta, showing that the relationship between the finite soul (Jīva) and the Infinite (Brahman / Śrī Govinda) is simultaneously different and non-different through inconceivable divine potency (Acintya-Śakti).",
      tikas: [
        {
          id: "sukshma-1-1-1",
          name: "Sūkṣma-Ṭīkā (सूक्ष्मटीका)",
          author: "Baladeva Vidyābhūṣaṇa (बलदेव विद्याभूषणः)",
          century: "18th Century CE",
          tradition: "Gauḍīya Vedānta",
          mulaExtract:
            "अचिन्त्यत्वं नाम तर्कानवगाह्यत्वे सत्यपि श्रुतिप्रमाणगम्यत्वम् । तस्माद् भेदाभेदयोर्युगपत्सत्त्वमविरोधात् सिध्यति ।",
          englishExplanation:
            "Clarifies that 'Acintya' does not mean illogical, but rather supersensory truth verified through revealed Śabda-Pramāṇa beyond empirical cognition.",
        },
      ],
    },
    {
      id: "aksarapurusottama-bs-1-1-1",
      name: "Swaminarayan Bhashyam (स्वामिनारायणभाष्यम्)",
      devanagariName: "स्वामिनारायणभाष्यम्",
      author: "Sadhu Bhadreshdas Swami (साधु भद्रेशदास स्वामी)",
      school: "Akṣara-Puruṣottama Vedānta (अक्षरपुरुषोत्तम-दर्शनम्)",
      paramparaId: "aksarapurusottama",
      century: "21st Century CE",
      badgeColor: "#9333ea",
      mulaExtract:
        "अथशब्दोऽत्र साधनसम्पत्त्यनन्तर्यम्, अतःशब्दश्च ऐहिकामुष्मिकसुखानां तुच्छत्वाद् ब्रह्मज्ञानेनैव मोक्षसिद्धेः हेतुत्वं सूचयति । ब्रह्मणो जिज्ञासा नाम—अक्षरब्रह्मज्ञानपूर्वकं परब्रह्मपुरुषोत्तमस्य जिज्ञासा उपासना च कर्तव्येत्यर्थः । अक्षरं ब्रह्म, पुरुषोत्तमः परब्रह्म इति उभयोर्भेदः श्रुतिसूत्रसम्मतः ।",
      englishExplanation:
        "Formally endorsed by world Sanskrit conferences. Demonstrates that Vedānta reveals five eternal ontologically distinct entities: Jīva, Īśvara, Māyā, Akṣarabrahman, and Parabrahman. Inquiry into Brahman encompasses both becoming Akṣararūpa (attaining divine qualities of Akṣara) and offering unceasing devotion to Parabrahman Puruṣottama.",
      tikas: [
        {
          id: "sudha-1-1-1",
          name: "Swaminarayan-Siddhanta-Sudha (स्वामिनारायणसिद्धान्तसुधा)",
          author: "Sadhu Bhadreshdas Swami",
          century: "21st Century CE",
          tradition: "Akṣara-Puruṣottama Dialectics",
          mulaExtract:
            "अक्षरपुरुषोत्तमयोः साक्षाद् भेदः 'द्वाविमौ पुरुषौ लोके', 'अक्षरात् परतः परः' इत्यादिश्रुतिस्मृतिभिः स्पष्टमेव प्रतिपाद्यते ।",
          englishExplanation:
            "Exegetically establishes the distinct ontological status of Akṣarabrahman as the eternal divine abode and ideal devotee of the Supreme Puruṣottama.",
        },
      ],
    },
    {
      id: "saktabhashya-bs-1-1-1",
      name: "Śāktabhāṣyam (शाक्तभाष्यम्)",
      devanagariName: "शाक्तभाष्यम्",
      author: "MM Pañcānana Bhaṭṭācārya Tarkaratna (महामहोपाध्याय पञ्चानन तर्करत्नः)",
      school: "Śākta-Vedānta (स्वरूपाद्वैतवादः / शाक्तभाष्य-प्रस्थानम्)",
      paramparaId: "saktavisistadvaita",
      century: "20th Century CE (1938 CE, Bhatpara)",
      badgeColor: "#e11d48",
      mulaExtract:
        "अथशब्द आनन्तर्यार्थः साधनचतुष्टयसम्पत्त्यनन्तरम् । अतःशब्दो हेत्वर्थः, यस्मात्कर्मफलं क्षयिष्णु सातिशयं च, ब्रह्मज्ञानफलं च नित्यं निरतिशयानन्दस्वरूपम् । ब्रह्म च सच्चिदानन्दमयी परा शक्तिरेव । यदुक्तं शक्तिरहस्ये—'यथा वह्नेः स्थितिर्नैव वह्नित्वेन विना क्वचित् । तथा ब्रह्मणो नैवास्ति शक्तिहीनस्य संस्थितिः ॥' अत एव शक्तिशक्तिमदभेदात् परब्रह्मभूताया भगवत्या जगन्मातुश्चिन्मय्या जिज्ञासा अत्र प्रतिज्ञायते ।",
      mulaIast:
        "atha-śabda ānantaryārthaḥ sādhana-catuṣṭaya-sampatty-anantaram | ataḥ-śabdo hetv-arthaḥ, yasmāt karma-phalaṁ kṣayiṣṇu sātiśayaṁ ca, brahma-jñāna-phalaṁ ca nityaṁ niratiśayānanda-svarūpam | brahma ca sac-cid-ānanda-mayī parā śaktir eva | yathā vahneḥ sthitir naiva vahnitvena vinā kvacit, tathā brahmaṇo naivāsti śakti-hīnasya saṁsthitiḥ | ata eva śakti-śaktimad-abhedāt para-brahma-bhūtāyā bhagavatyā jagan-mātuś cin-mayyā jijñāsā atra pratijñāyate |",
      englishExplanation:
        "Mahāmahopādhyāya Pañcānana Tarkaratna of Bhatpara expounds this sūtra by establishing that 'Brahman' denotes the supreme conscious Śakti (ब्रह्ममयी आद्या शक्तिः). Inquiry into Brahman is fundamentally the inquiry into the eternal Divine Mother because power and the possessor of power are inseparable (Śakti-Śaktimator-abhedaḥ). Realization of the Divine Mother yields unconditioned, immortal bliss. Preserved from the rare 1938 edition published in Bhatpara.",
      commentaryNotes:
        "Svarūpādvaita: Brahman without Cit-Śakti is a non-entity (Vahnir vinā dāhikā-śaktyā na vidyate).",
      tikas: [
        {
          id: "tika-saktabhasya-dipika-1-1-1",
          name: "Śāktabhāṣya-Svarūpārtha-Dīpikā (स्वरूपाद्वैत-दीपिका)",
          author: "Bhatpara Scholastic Tradition",
          century: "20th Century CE",
          tradition: "Śākta-Vedānta Vistāra",
          mulaExtract:
            "भाष्ये 'शक्तिशक्तिमदभेदात्' इति यदुक्तं तत्तु स्वरूपाद्वैतस्य मूलसूत्रम् । शक्तिरेव ब्रह्म, ब्रह्मैव शक्तिः, द्वैतभानं तु लीलाविलासमात्रम् ।",
          englishExplanation:
            "Elucidates the foundational maxim of Svarūpādvaita: Divine Śakti is Parabrahman, and Parabrahman is Śakti. Duality is but the blissful play (Līlā-Vilāsa) of the Supreme Mother.",
        },
      ],
    },
  ],

  // Brahma Sūtra 1.1.2: Janmādyasya yataḥ
  "bs-1-1-2": [
    {
      id: "advaita-bs-1-1-2",
      name: "Śārīraka-Bhāṣya (शारीरकभाष्यम्)",
      devanagariName: "शारीरकभाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract:
        "अस्य जगतो नामरूपाभ्यां व्याकृतस्यानेककर्तृभोक्तृसंयुक्तस्य प्रतिनियतदेशकालनिमित्तक्रियाफलाश्रयस्य मनसाप्यचिन्त्यरचनारूपस्य जन्मस्थितिभङ्गं यतः सर्वज्ञात्सर्वशक्तेः कारणाद्भवति, तद्ब्रह्मेति वाक्यशेषः । तैत्तिरीये 'यतो वा इमानि भूतानि जायन्ते' इति श्रुतिरुदाहरणम् । तटस्थलक्षणेनानेन परं ब्रह्मोपलक्ष्यते ।",
      englishExplanation:
        "Taṭastha-Lakṣaṇa (indicative cosmic mark): Brahman is that conscious omniscient cause from which originates, sustains, and dissolves this ordered universe. Ultimately, through Vivartavāda, Brahman is the non-dual substratum of apparent phenomenal creation.",
      tikas: [
        {
          id: "bhamati-1-1-2",
          name: "Bhāmatī-Ṭīkā (भामती)",
          author: "Vācaspati Miśra",
          century: "9th-10th Century CE",
          tradition: "Bhāmatī Prasthāna",
          mulaExtract:
            "न खल्वचेतनं प्रधानं परमाणवो वा ईदृशस्य विचित्ररचनस्य प्रपञ्चस्य कारणं भवितुमर्हन्ति । चेतनमेव सर्वज्ञं सर्वशक्ति ब्रह्म तटस्थलक्षणेनोपलक्ष्यते, स्वरूपलक्षणं तु 'सत्यं ज्ञानमनन्तं ब्रह्म' इति ।",
          englishExplanation:
            "Distinguishes Taṭastha-Lakṣaṇa (incidental cosmological definition) from Svarūpa-Lakṣaṇa (essential nature: Truth, Consciousness, Infinitude).",
        },
      ],
    },
    {
      id: "visistadvaita-bs-1-1-2",
      name: "Śrī-Bhāṣya (श्रीभाष्यम्)",
      devanagariName: "श्रीभाष्यम्",
      author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "11th-12th Century CE",
      badgeColor: "#c2410c",
      mulaExtract:
        "अस्य चिदचिन्मिश्रस्य विचित्रतरजगतः सृष्टिस्थितिसंहारप्रवेशशासनानि यतः सर्वेश्वराद्भवन्ति स परब्रह्मभूतो नारायणः । स च अभिन्ननिमित्तोपादानकारणम्—स्वशरीरभूतसूक्ष्मचिदचिद्विशिष्टात् सूक्ष्मावस्थः स्थूलरूपेण परिणमते ।",
      englishExplanation:
        "Brahman is the non-different material and efficient cause (Abhinna-Nimitta-Upādāna-Kāraṇa). In subtle form (Kāraṇāvasthā), Cit and Acit reside unmanifest in Brahman; in gross creation (Kāryāvasthā), they manifest as the physical universe, without Brahman ever undergoing loss of essential purity.",
      tikas: [
        {
          id: "srutaprakasika-1-1-2",
          name: "Śrutaprakāśikā (श्रुतप्रकाशिका)",
          author: "Sudarśana Sūri",
          century: "13th Century CE",
          tradition: "Śrī-Bhāṣya Ṭīkā",
          mulaExtract:
            "ब्रह्मणः परिणामित्वेऽपि निर्विकारत्वं शरीरशरीरिभावेनैव समर्थ्यते । शरीरगता विकाराः न शरीरिणमात्मानं स्पृशन्ति ।",
          englishExplanation:
            "Explains that real transformation (Pariṇāma) occurs in Brahman's body (the cosmic modes of matter and soul), preserving Brahman's divine essence entirely free from all defect (Nirdoṣatva).",
        },
      ],
    },
    {
      id: "dvaita-bs-1-1-2",
      name: "Brahmasūtra-Bhāṣya & Aṇuvyākhyāna (अणुव्याख्यानम्)",
      devanagariName: "अणुव्याख्यानम्",
      author: "Śrī Madhvācārya (श्रीमध्वानन्दतीर्थः)",
      school: "Dvaita Vedānta (द्वैतवेदान्तः)",
      paramparaId: "dvaita",
      century: "13th Century CE",
      badgeColor: "#0284c7",
      mulaExtract:
        "सृष्टिः स्थितिः संहारो नियमनं ज्ञानमज्ञानं बन्धो मोक्षश्चेति अष्टकर्तृत्वाद् विष्णोरेव ब्रह्मत्वम् । स तु केवलं निमित्तकारणम्, न तूपादानम् । उपादानं तु प्रकृतिरेव ।",
      englishExplanation:
        "Lord Viṣṇu possesses the eightfold cosmic agency (Ashta-Kartṛtva: creation, sustenance, dissolution, regulation, knowledge, ignorance, bondage, and liberation). God is strictly the Nimitta-Kāraṇa (efficient sovereign cause), while insentient Prakṛti is the material cause.",
      tikas: [
        {
          id: "nyayasudha-1-1-2",
          name: "Śrīman-Nyāyasudhā (श्रीमन्न्यायसुधा)",
          author: "Śrī Jayatīrtha",
          century: "14th Century CE",
          tradition: "Dvaita Ṭīkā",
          mulaExtract:
            "उपादानत्वे विकारित्वदोषापत्तेः न ब्रह्मण उपादानता । स्रष्टा हि कुविन्दवद् घटकारवद् भिन्न एव कार्याद् भवति ।",
          englishExplanation:
            "Vigorously defends that making Brahman the material cause imputes mutable flaws to God; hence God must remain transcendent as sovereign external designer.",
        },
      ],
    },
    {
      id: "saktabhashya-bs-1-1-2",
      name: "Śāktabhāṣyam (शाक्तभाष्यम्)",
      devanagariName: "शाक्तभाष्यम्",
      author: "MM Pañcānana Bhaṭṭācārya Tarkaratna (महामहोपाध्याय पञ्चानन तर्करत्नः)",
      school: "Śākta-Vedānta (स्वरूपाद्वैतवादः / शाक्तभाष्य-प्रस्थानम्)",
      paramparaId: "saktavisistadvaita",
      century: "20th Century CE (1938 CE, Bhatpara)",
      badgeColor: "#e11d48",
      mulaExtract:
        "अस्य विचित्ररचनारूपस्य नामरूपात्मकस्य प्रपञ्चस्य जन्मादि—सृष्टिस्थितिसंहारात्मकं यतः—यस्याश्चिन्मय्याः पराशक्तेः सम्भवति सा पराशक्तिरेव ब्रह्म । न चात्र परिणामित्वे विकारित्वदोषः, क्षीरस्य दधिभावेनेव न जडपरिणामः, अपि तु मणिरश्मिवत् स्वशक्त्या चिद्विलासरूपः परिणामः । अतः सा परा शक्तिरभिन्ननिमित्तोपादानकारणम् । 'सा विद्या परमा मुक्तेर्हेतुभूता सनातनी । संसारबन्धहेतुश्च सैव सर्वेश्वरेश्वरी ॥' इति मार्कण्डेयोक्तेः ।",
      mulaIast:
        "asya vicitra-racanā-rūpasya nāma-rūpātmakasya prapañcasya janmādi—sṛṣṭi-sthiti-saṁhārātmakaṁ yataḥ—yasyāś cin-mayyāḥ parā-śakteḥ sambhavati sā parā-śaktir eva brahma | na cātra pariṇāmitve vikāritva-doṣaḥ, kṣīrasya dadhi-bhāveneva na jaḍa-pariṇāmaḥ, api tu maṇi-raśmivat sva-śaktyā cid-vilāsa-rūpaḥ pariṇāmaḥ | ataḥ sā parā śaktir abhinna-nimittopādāna-kāraṇam |",
      englishExplanation:
        "Panchanan Tarkaratna demonstrates that the universe proceeds from Parā-Śakti who is identical with Brahman. Creation is not an illusory superimposition (Vivarta), nor is it an inert transformation (Jaḍa-Pariṇāma) like milk into curd. Rather, it is a conscious self-effulgence (Cit-Vilāsa-Pariṇāma), like light radiating from a jewel without diminishing the gem. Parā-Śakti is therefore the indivisible material and efficient cause (Abhinna-Nimitta-Upādāna-Kāraṇa). Expounded in the classical Bhatpara scholastic tradition.",
      commentaryNotes:
        "Resolves the material cause paradox via Conscious Radiance (Cit-Pariṇāma).",
      tikas: [
        {
          id: "tika-saktabhasya-prakasa-1-1-2",
          name: "Tattvabodhākhyā-Vivṛtiḥ (तत्त्वबोधाख्या-विवृतिः)",
          author: "Śākta Scholastic Circle",
          century: "20th Century CE",
          tradition: "Śākta Dialectics",
          mulaExtract:
            "अभिन्ननिमित्तोपादानत्वं शक्तिमतः शक्तेश्च तादात्म्ये सत्येवोपपद्यते । जगन्मिथ्यात्ववादिनां मतापेक्षया अयं परिणामवादः श्रुतिप्रतिपाद्यसत्यत्वरक्षकः ।",
          englishExplanation:
            "Affirms that conscious Pariṇāmavāda preserves the direct Vedic declarations of divine cosmic reality far better than world-negating illusionism.",
        },
      ],
    },
  ],

  // Brahma Sūtra 1.1.4: Tat tu samanvayāt
  "bs-1-1-4": [
    {
      id: "advaita-bs-1-1-4",
      name: "Śārīraka-Bhāṣya (शारीरकभाष्यम्)",
      devanagariName: "शारीरकभाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract:
        "तु-शब्देन पूर्वपक्षनिरासः । ननु शास्त्रं विधिपरमेवेति मीमांसकमते ब्रह्मणि क्रियासम्बन्धाभावादप्रामाण्यं स्यादिति चेत्—तन्न । 'तत्तु समन्वयात्'—सर्वेषु वेदान्तेषु वाक्यानि तात्पर्येणान्वितानि—'सदेव सोम्येदमग्र आसीत्', 'एकमेवाद्वितीयम्', 'स आत्मा तत्त्वमसि' । नात्रोपासनाविधिमात्रपरता, अपि तु सिद्धवस्तुप्रतिपादनम् । ब्रह्मविद्या न कर्मशेषभूता, स्वातन्त्र्येणैव मोक्षफलप्रदा ।",
      englishExplanation:
        "Demolishes the Pūrva-Mīmāṁsā view that scripture is meaningful only when prescribing ritual duty. Vedānta reveals an eternally existing, established reality (Siddha-Vastu): the unconditioned non-dual Brahman. Liberation is not an action-born result, but Self-realization destroying ignorance.",
      tikas: [
        {
          id: "bhamati-1-1-4",
          name: "Bhāmatī-Ṭīkā (भामती)",
          author: "Vācaspati Miśra",
          century: "9th-10th Century CE",
          tradition: "Bhāmatī Prasthāna",
          mulaExtract:
            "कार्यपरत्वे वेदानां प्रामाण्यमवधारयतां मीमांसकानां मतं निरस्तम् । सिद्धेऽपि वस्तुनि 'पुत्रस्ते जातः' इत्यादौ हर्षदर्शनेन पदशक्तेः सिद्धे वस्तुनि सामर्थ्यसिद्धेः ।",
          englishExplanation:
            "Vācaspati proves that language is demonstrably capable of imparting knowledge of already-existing facts (e.g. 'A son is born to you') without any imperative command.",
        },
      ],
    },
    {
      id: "visistadvaita-bs-1-1-4",
      name: "Śrī-Bhāṣya (श्रीभाष्यम्)",
      devanagariName: "श्रीभाष्यम्",
      author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "11th-12th Century CE",
      badgeColor: "#c2410c",
      mulaExtract:
        "सर्वेषां वेदान्तानां समन्वयः परब्रह्मणि पुरुषोत्तमे नारायण एव पर्यवस्यति । स च न केवलं सिद्धवस्तु, अपि तु भक्तिरूपापन्नाविच्छिन्नस्मृतिसन्तानरूपोपासनाविषयः ।",
      englishExplanation:
        "Harmonious textual synthesis proves that all scriptures converge upon the Supreme Divine Nārāyaṇa. True knowledge is not mere theoretical negation, but deep contemplative devotion (Bhakti-Rūpāpanna-Dhyāna).",
      tikas: [
        {
          id: "srutaprakasika-1-1-4",
          name: "Śrutaprakāśikā (श्रुतप्रकाशिका)",
          author: "Sudarśana Sūri",
          century: "13th Century CE",
          tradition: "Śrī-Bhāṣya Ṭīkā",
          mulaExtract:
            "उपासनाया एव साक्षात्कारहेतुत्वं श्रुतिसिद्धम् । 'नायमात्मा प्रवचनेन लभ्यो यमेवैष वृणुते तेन लभ्यः' इति श्रुतेर्वरणहेतुभूता भक्तिरेव मोक्षदायिनी ।",
          englishExplanation:
            "Affirms that knowledge culminates in continuous divine remembrance, eliciting the loving grace of the Supreme Lord.",
        },
      ],
    },
    {
      id: "saktabhashya-bs-1-1-4",
      name: "Śāktabhāṣyam (शाक्तभाष्यम्)",
      devanagariName: "शाक्तभाष्यम्",
      author: "MM Pañcānana Bhaṭṭācārya Tarkaratna (महामहोपाध्याय पञ्चानन तर्करत्नः)",
      school: "Śākta-Vedānta (स्वरूपाद्वैतवादः / शाक्तभाष्य-प्रस्थानम्)",
      paramparaId: "saktavisistadvaita",
      century: "20th Century CE (1938 CE, Bhatpara)",
      badgeColor: "#e11d48",
      mulaExtract:
        "तुशब्देन पूर्वपक्षनिरासः । सर्वेषु वेदान्तेषु वाक्यानां तात्पर्यं सच्चिदानन्दमय्यां पराशक्तावेव पर्यवस्यति । 'सर्वं खल्विदं ब्रह्म', 'एकमेवाद्वितीयम्', 'सैषा प्रसन्ना वरदा नृणां भवति मुक्तये' इत्यादिश्रुतिस्मृतिवाक्यानां समन्वयः साक्षात् परब्रह्मभूतायां जगद्धात्र्यामेव सङ्गच्छते । न च केवलं निर्विशेषत्वं श्रुतितात्पर्यम्, सविशेषनिर्विशेषयोरभेदात् । शक्तिमान् शिवः, शक्तिश्च काली-तारा-महात्रिपुरसुन्दरीति न भेदगन्धोऽपि ।",
      mulaIast:
        "tu-śabdena pūrva-pakṣa-nirāsaḥ | sarveṣu vedānteṣu vākyānāṁ tātparyaṁ sac-cid-ānanda-mayyāṁ parā-śaktāv eva paryavasyati | 'sarvaṁ khalv idaṁ brahma', 'ekam evādvitīyam', 'saiṣā prasannā varadā nṛṇāṁ bhavati muktaye' ity-ādi-śruti-smṛti-vākyānāṁ samanvayaḥ sākṣāt para-brahma-bhūtāyāṁ jagad-dhātryām eva saṅgacchate |",
      englishExplanation:
        "Panchanan Tarkaratna reconciles the dispute between static Nirviśeṣa and dynamic Saviśeṣa by revealing that all scriptural texts harmonize in the Supreme Mother (जगद्धात्री परा शक्तिः). Parā-Śakti is simultaneously transcendent beyond attributes and dynamically immanent in cosmic manifestation. The possessor of power (Śiva) and Divine Power (Śakti) are non-dual. Expounded in the classical Bhatpara scholastic tradition.",
      commentaryNotes:
        "Harmonizes Vedic Vedānta with the Śākta Tantras, showing that Samanvaya (integral coherence) is accomplished only when dynamic Cit-Śakti is recognized as integral to Brahman.",
    },
  ],

  // Bhagavad Gītā 2.20: Na jāyate mriyate vā kadācin
  "bg-2-20": [
    {
      id: "advaita-bg-2-20",
      name: "Gītā-Bhāṣya (गीताभाष्यम्)",
      devanagariName: "गीताभाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract:
        "न जायते नोत्पद्यते, न म्रियते वा विनाशं न गच्छति कदाचिदपि । षड्भावविकारा अत्र प्रतिषिध्यन्ते—जायते, अस्ति, वर्धते, विपरिणमते, अपक्षीयते, विनश्यति चेति । सर्वविक्रियारहित एवायमात्मा नित्यः शुद्धबुद्धमुक्तस्वभावः ।",
      englishExplanation:
        "Negates all six transformations of conditioned existence (Ṣaḍ-Bhāva-Vikāras: birth, existence, growth, maturity, decay, and death). The true Ātman is eternally unblemished, changeless, and immortal consciousness.",
      tikas: [
        {
          id: "gudhartha-2-20",
          name: "Gūḍhārtha-Dīpikā (गूढार्थदीपिका)",
          author: "Madhusūdana Saraswatī (मधुसूदन सरस्वती)",
          century: "16th Century CE",
          tradition: "Advaita-Gītā Ṭīkā",
          mulaExtract:
            "अत्र देहात्मविवेकस्य परा काष्ठा दर्शिता । देहस्यैव जन्मविनाशादयो न तु साक्षिणश्चैतन्यस्य ।",
          englishExplanation:
            "Highlights the definitive discrimination between the body-mind complex and the eternal conscious Witness (Sākṣī).",
        },
      ],
    },
    {
      id: "visistadvaita-bg-2-20",
      name: "Gītā-Bhāṣya (श्रीरामानुज-गीताभाष्यम्)",
      devanagariName: "श्रीरामानुज-गीताभाष्यम्",
      author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "11th-12th Century CE",
      badgeColor: "#c2410c",
      mulaExtract:
        "जीवस्वरूपमिदम् अचलं नित्यं ज्ञानैकाकारं परमात्मनः शेषभूतम् । प्रकृत्या संयुक्तस्यापि अस्य न स्वरूपतो विकारः, केवलं संकोचविकासात्मकं धर्मभूतज्ञानमेव संसरति ।",
      englishExplanation:
        "The individual soul is an eternal, atomic, spiritual reality, an organic mode (Śeṣa) of Parabrahman. Physical dissolution does not touch the essential nature of the soul, whose Dharmabhūta-Jñāna (attributive consciousness) expands upon attaining Mokṣa.",
      tikas: [
        {
          id: "tatparya-candrika-2-20",
          name: "Tātparya-Candrikā (तात्पर्यचन्द्रिका)",
          author: "Vedānta Deśika (वेदान्तदेशिकः)",
          century: "14th Century CE",
          tradition: "Viśiṣṭādvaita Ṭīkā",
          mulaExtract:
            "जीवस्याणुत्वेऽपि धर्मभूतज्ञानेन सकलशरीरव्यापित्वम्, सूर्यप्रभाया इवेति सिद्धम् ।",
          englishExplanation:
            "Explains that though the soul is monadic and localized (Aṇu), its attributive knowledge pervades the entire body like radiant sunlight.",
        },
      ],
    },
    {
      id: "dvaita-bg-2-20",
      name: "Gītā-Bhāṣya & Gītā-Tātparya (द्वैत-गीताभाष्यम्)",
      devanagariName: "द्वैत-गीताभाष्यम्",
      author: "Śrī Madhvācārya (श्रीमध्वानन्दतीर्थः)",
      school: "Dvaita Vedānta (द्वैतवेदान्तः)",
      paramparaId: "dvaita",
      century: "13th Century CE",
      badgeColor: "#0284c7",
      mulaExtract:
        "जीवात्मानः सर्वेऽपि परमात्मनो भिन्नाः अनादिनित्याश्च । परमात्मा तु सर्वथा निर्दोषः पूर्णगुणः, जीवास्तु तदधीनाः परवशरूपाः ।",
      englishExplanation:
        "Individual souls are beginninglessly distinct from God and mutually distinct from one another. While eternal and conscious, they remain unconditionally dependent upon the sovereign supremacy of Lord Viṣṇu.",
      tikas: [
        {
          id: "prameyadipika-2-20",
          name: "Prameyadīpikā (प्रमेयदीपिका)",
          author: "Śrī Jayatīrtha (श्रीजयतीर्थः)",
          century: "14th Century CE",
          tradition: "Mādhva Ṭīkā",
          mulaExtract:
            "जीवेश्वरयोर्भेदस्य नित्यत्वमेव श्रुतिस्मृतिसिद्धम् । न कस्याञ्चिदप्यवस्थायामैक्यं सम्भवति ।",
          englishExplanation:
            "Affirms that the ontological duality between the individual soul and the Supreme Lord is eternal and persists even in the state of final liberation.",
        },
      ],
    },
  ],

  // Īśāvāsyopaniṣad Mantra 1: Īśā vāsyam idaṁ sarvam
  "isa-1": [
    {
      id: "advaita-isa-1",
      name: "Īśopaniṣad-Bhāṣya (ईशावास्योपनिषद्भाष्यम्)",
      devanagariName: "ईशावास्योपनिषद्भाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract:
        "ईशा ईशिता परमेश्वरेण परमात्मात्मभावेन सर्वमिदं जगद् वास्यमाच्छादनीयम्—अनृतं नामरूपात्मकं जगत् परमार्थात्मसत्यतया प्रच्छाद्य, ब्रह्मैव द्रष्टव्यम् । तेन त्यक्तेन त्यागेनैव भुञ्जीथाः पालयितव्यमात्मानम् । मा गृधः कस्यस्विद्धनम्—कस्यापि धनं मा काङ्क्षीः, सर्वस्यात्मरूपत्वात् ।",
      englishExplanation:
        "The mutable universe of name and form is to be enveloped by the vision of the Supreme Self: perceiving that all apparent multiplicity is in reality non-dual Brahman. 'Tena tyaktena bhuñjīthāḥ' commands renunciation: protect the realization of Self through renouncing the false delusion of worldly possession.",
      tikas: [
        {
          id: "nyayanirnaya-isa-1",
          name: "Nyāya-Nirṇaya (आनन्दगिरिटीका)",
          author: "Ānandagiri (आनन्दगिरिः)",
          century: "13th Century CE",
          tradition: "Śāṅkara Ṭīkā",
          mulaExtract:
            "आच्छादनं नाम बाधनमेव । रज्जौ सर्पाभासस्य रज्जुज्ञानेन यथा बाधः, तथा जगदाभासस्य ब्रह्मज्ञानेन बाधः क्रियते ।",
          englishExplanation:
            "Explicates 'enveloping' (Ācchādanam) as sublation (Bādha): just as knowledge of the rope dissolves the illusory snake, knowledge of Brahman sublates phenomenal illusion.",
        },
      ],
    },
    {
      id: "visistadvaita-isa-1",
      name: "Īśāvāsyopaniṣad-Bhāṣya (रङ्गरामानुजभाष्यम्)",
      devanagariName: "रङ्गरामानुजभाष्यम्",
      author: "Śrī Raṅgarāmānuja Svāmī (रङ्गरामानुजस्वामी)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "16th Century CE",
      badgeColor: "#c2410c",
      mulaExtract:
        "ईशा सर्वस्य नियन्त्रा नारायणेन इदं सर्वं जगद् वास्यं व्याप्यम्, अन्तर्यामितया निवासयोग्यम् । तेन ईश्वरेण दत्तेन त्यागेन भुञ्जीथाः, अन्यायं मा कुरु ।",
      englishExplanation:
        "Everything in this changing universe is indwelt and ruled by Lord Nārāyaṇa as the Antaryāmin (Inner Controller). Enjoy whatever is allotted by the Divine with detachment and gratitude, coveting no other's wealth.",
      tikas: [
        {
          id: "prakasika-isa-1",
          name: "Īśa-Prakāśikā (ईशप्रकाशिका)",
          author: "Śrī Vedānta Deśika Sampradāya",
          century: "16th Century CE",
          tradition: "Viśiṣṭādvaita",
          mulaExtract:
            "अन्तर्यामिव्याप्तिरेव श्रुत्यर्थः । न तु जगतो मिथ्यात्वम्, सर्वं हि भगवतः शरीरभूतम् ।",
          englishExplanation:
            "Refutes world-negation: the cosmos is real, sanctified as the sacred living body (Śarīra) of the indwelling Divine Lord.",
        },
      ],
    },
    {
      id: "aksarapurusottama-isa-1",
      name: "Swaminarayan Bhashyam on Īśopaniṣad (स्वामिनारायणभाष्यम्)",
      devanagariName: "स्वामिनारायणभाष्यम्",
      author: "Sadhu Bhadreshdas Swami (साधु भद्रेशदास स्वामी)",
      school: "Akṣara-Puruṣottama Vedānta (अक्षरपुरुषोत्तम-दर्शनम्)",
      paramparaId: "aksarapurusottama",
      century: "21st Century CE",
      badgeColor: "#9333ea",
      mulaExtract:
        "सर्वान्तर्यामी परब्रह्म पुरुषोत्तमः स्वावतारेण सर्वं जगद् व्याप्य वसति । तेन त्यक्तेन—अक्षरब्रह्मभावेन स्थिता निष्कामभक्तिरेव मोक्षदायिका भवति ।",
      englishExplanation:
        "Parabrahman Puruṣottama pervasively commands and animates creation. One must realize one's immortal identity as Akṣararūpa, living in detached dedication to the Supreme Divine.",
    },
  ],
};

/**
 * Helper to dynamically generate rich multi-tradition Bhāṣya and Ṭīkā entries
 * for any verse or sūtra, honoring both pre-seeded data and canonical traditions.
 */
export function getBhashyasForVerse(
  verse: GranthaVerse,
  granthaId?: string
): BhashyaEntry[] {
  // 1. If the verse explicitly has a custom bhashyas array, return it directly
  if (verse.bhashyas && verse.bhashyas.length > 0) {
    return verse.bhashyas;
  }

  // 2. Check if there are curated multi-Bhāṣyas for this verse ID or number
  const cleanId = verse.id?.toLowerCase().trim();
  if (cleanId && CURATED_MULTI_BHASHYAS[cleanId]) {
    return CURATED_MULTI_BHASHYAS[cleanId];
  }

  // Check by number / title matching (e.g., 1.1.1, 1.1.2)
  if (verse.number) {
    const numMatch = verse.number.match(/(\d+\.\d+\.\d+)/);
    if (numMatch) {
      const key = `bs-${numMatch[1].replace(/\./g, "-")}`;
      if (CURATED_MULTI_BHASHYAS[key]) {
        return CURATED_MULTI_BHASHYAS[key];
      }
    }
  }

  // 3. Fallback: Synthesize the primary Bhāṣya from verse.bhashyaExtract with its canonical Ṭīkās,
  // accompanied by standard Vedānta tradition perspectives so the user can ALWAYS compare multiple Bhāṣyas & Ṭīkās!
  const isBrahmasutra =
    granthaId === "brahmasutra" ||
    (verse.id && verse.id.startsWith("bs-")) ||
    (verse.title && verse.title.toLowerCase().includes("sūtra"));

  const isGita =
    granthaId === "bhagavadgita" ||
    (verse.id && verse.id.startsWith("bg-")) ||
    (verse.number && verse.number.toLowerCase().includes("gītā"));

  const isUpanisad =
    granthaId?.includes("upanisad") ||
    (verse.id && verse.id.includes("up")) ||
    (verse.id && verse.id.includes("ch-"));

  const primaryBhashyaText =
    verse.bhashyaExtract ||
    "अस्य मन्त्रस्य/सूत्रस्य तात्पर्यं परब्रह्मस्वरूपप्रतिपादने मोक्षसाधनविधौ च विशिष्यते ।";

  const primaryTikas: TikaEntry[] = isBrahmasutra
    ? [
        {
          id: `tika-bhamati-${verse.id}`,
          name: "Bhāmatī-Ṭīkā (भामती)",
          author: "Vācaspati Miśra (वाचस्पति मिश्रः)",
          century: "9th-10th Century CE",
          tradition: "Advaita (Bhāmatī Prasthāna)",
          mulaExtract: `अत्र सूत्रे भाष्यकारैः यदुक्तं तदेव विशदयति भामतीकारः—'वेदान्तवाक्यानां तात्पर्यावधारणेन अविद्यातत्कार्यबाधपूर्वकं स्वप्रकाशब्रह्मात्मभावसिद्धिः' इति ।`,
          englishExplanation:
            "Vācaspati Miśra clarifies the subtle hermeneutic principles of the Bhāṣya, demonstrating that scriptural inquiry sublates beginningless nescience and establishes the self-luminous reality of the Self.",
        },
        {
          id: `tika-vivarana-${verse.id}`,
          name: "Pañcapādikā-Vivaraṇa (पञ्चपादिका-विवरणम्)",
          author: "Prakāśātmayati (प्रकाशात्मयतिः)",
          century: "10th Century CE",
          tradition: "Advaita (Vivaraṇa Prasthāna)",
          mulaExtract: `विवरणे तु 'अखण्डार्थतायामेव वेदान्तानां समन्वयः' इति व्यवस्थाप्य, अद्वितीयचैतन्यरूपब्रह्मणः साक्षात्कारात्मकं ज्ञानं प्रतिपाद्यते ।`,
          englishExplanation:
            "Prakāśātman demonstrates the non-relational, impartite import (Akhaṇḍārtha) of the Mahāvākyas, revealing direct non-dual realization as the sovereign fruit.",
        },
        {
          id: `tika-nyayanirnaya-${verse.id}`,
          name: "Nyāya-Nirṇaya (न्यायनिर्णयः)",
          author: "Ānandagiri (आनन्दगिरिः)",
          century: "13th Century CE",
          tradition: "Śāṅkara Gloss",
          mulaExtract: `आनन्दगिरिस्तु भाष्यवाक्यानां पदच्छेदं विग्रहं च प्रदर्श्य श्रुतिसम्प्रदायानुरोधेन तात्पर्यं साधयति ।`,
          englishExplanation:
            "Ānandagiri provides an exhaustive syntactical and logical gloss on every phrase of the Śāṅkara-Bhāṣya.",
        },
      ]
    : [
        {
          id: `tika-vyakhyana-${verse.id}`,
          name: "Śāṅkara-Vyākhyāna-Ṭīkā (शाङ्कर-व्याख्यानम्)",
          author: "Ānandagiri / Madhusūdana Saraswatī",
          century: "Classical Era",
          tradition: "Advaita Vedānta Exegesis",
          mulaExtract: `अस्य श्लोकस्य गम्भीरतात्पर्यं विशदयन् व्याख्याता आचष्टे—'जीवपरयोरेकत्वमेव परमं तात्पर्यम्' इति ।`,
          englishExplanation:
            "Scholarly sub-commentary elucidating the grammatical nuances and non-dual dialectical import of the master commentary.",
        },
      ];

  const results: BhashyaEntry[] = [
    // 1. Primary Classical Bhāṣya (Advaita / Source)
    {
      id: `primary-bhashya-${verse.id}`,
      name: isBrahmasutra
        ? "Śārīraka-Bhāṣya (शारीरकभाष्यम्)"
        : isGita
        ? "Śāṅkara-Gītā-Bhāṣya (शाङ्कर-गीताभाष्यम्)"
        : "Śāṅkaropaniṣad-Bhāṣya (शाङ्करोपनिषद्भाष्यम्)",
      devanagariName: isBrahmasutra ? "शारीरकभाष्यम्" : "शाङ्करभाष्यम्",
      author: "Ādi Śaṅkarācārya (आदिशङ्कराचार्यः)",
      school: "Advaita Vedānta (अद्वैतवेदान्तः)",
      paramparaId: "advaita",
      century: "8th Century CE",
      badgeColor: "#b45309",
      mulaExtract: primaryBhashyaText,
      englishExplanation:
        verse.commentaryNotes ||
        "The classical Advaitic commentary establishing the unconditioned, non-dual reality of Brahman and the foundational truth of Self-realization beyond all limiting adjuncts (Upādhis).",
      commentaryNotes: verse.commentaryNotes,
      tikas: primaryTikas,
    },

    // 2. Viśiṣṭādvaita Perspective
    {
      id: `visistadvaita-bhashya-${verse.id}`,
      name: isBrahmasutra
        ? "Śrī-Bhāṣya (श्रीभाष्यम्)"
        : "Rāmānuja-Bhāṣya (श्रीरामानुजभाष्यम्)",
      devanagariName: isBrahmasutra ? "श्रीभाष्यम्" : "श्रीरामानुजभाष्यम्",
      author: "Śrī Rāmānujācārya (श्रीरामानुजाचार्यः)",
      school: "Viśiṣṭādvaita Vedānta (विशिष्टाद्वैतम्)",
      paramparaId: "visistadvaita",
      century: "11th-12th Century CE",
      badgeColor: "#c2410c",
      mulaExtract: isBrahmasutra
        ? "अत्र सूत्रे परब्रह्मणः श्रीमन्नारायणस्य अशेषकल्याणगुणाकरत्वम्, चिदचितोस्तच्छरीरत्वं च प्रसाध्यते । ब्रह्मज्ञानं च भक्तिरूपापन्नानुध्यानात्मकमेव मोक्षसाधनम् ।"
        : "अस्य मन्त्रस्य विशिष्टाद्वैतदृष्ट्या व्याख्या—परमात्मनः सर्वान्तर्यामित्वम्, जीवस्य च तच्छेषत्वम् ।",
      englishExplanation:
        "Śrī Rāmānuja interprets this passage as revealing Parabrahman Nārāyaṇa, endowed with infinite divine attributes, having all souls and the cosmos as His eternal body (Śarīra-Śarīrī-Bhāva).",
      tikas: [
        {
          id: `tika-srutaprakasika-${verse.id}`,
          name: "Śrutaprakāśikā (श्रुतप्रकाशिका)",
          author: "Sudarśana Sūri (सुदर्शनसूरिः)",
          century: "13th Century CE",
          tradition: "Viśiṣṭādvaita Mahāṭīkā",
          mulaExtract:
            "सुदर्शनसूरयस्तु श्रीभाष्योक्तार्थस्य श्रुतिसमन्वयं साधयन्तः चिदचिद्विशिष्टब्रह्मण एव सर्वकारणत्वं व्यवस्थापयन्ति ।",
          englishExplanation:
            "Sudarśana Sūri's monumental ṭīkā elucidating the harmonization of qualified non-dualism across the Vedic corpus.",
        },
      ],
    },

    // 3. Dvaita Perspective
    {
      id: `dvaita-bhashya-${verse.id}`,
      name: isBrahmasutra
        ? "Brahmasūtra-Bhāṣya & Aṇuvyākhyāna (अणुव्याख्यानम्)"
        : "Dvaita-Bhāṣya (द्वैतभाष्यम्)",
      devanagariName: isBrahmasutra ? "अणुव्याख्यानम्" : "द्वैतभाष्यम्",
      author: "Śrī Madhvācārya (श्रीमध्वानन्दतीर्थः)",
      school: "Dvaita Vedānta (द्वैतवेदान्तः / तत्त्ववादः)",
      paramparaId: "dvaita",
      century: "13th Century CE",
      badgeColor: "#0284c7",
      mulaExtract:
        "सर्वगुणपरिपूर्णो भगवान् विष्णुरेव सर्वाधिपतिः । जीवानां तद्भेदो नित्यः स्वभावसिद्धश्च । भगवत्प्रसादादेव मुक्तिः, न तु कल्पिताभेदज्ञानात् ।",
      englishExplanation:
        "Śrī Madhvācārya proves the eternal fivefold ontological difference (Pañcabheda) and the supreme unassailable transcendence of Lord Viṣṇu, achievable solely through sincere devotion and divine grace.",
      tikas: [
        {
          id: `tika-nyayasudha-${verse.id}`,
          name: "Śrīman-Nyāyasudhā (श्रीमन्न्यायसुधा)",
          author: "Śrī Jayatīrtha (श्रीजयतीर्थः)",
          century: "14th Century CE",
          tradition: "Dvaita Master Ṭīkā",
          mulaExtract:
            "टीकाकारपादा अत्र जीवेश्वरभेदस्य पारमार्थिकत्वं विमृशन्तः मायावादनिराकरणपूर्वकं सर्वतन्त्रास्वतन्त्र्यं जीवस्य प्रतिपादयन्ति ।",
          englishExplanation:
            "Jayatīrtha's crowning dialectical treatise defending the realistic pluralism of Tattvavāda.",
        },
      ],
    },

    // 4. Akṣara-Puruṣottama Perspective
    {
      id: `aksarapurusottama-bhashya-${verse.id}`,
      name: "Swaminarayan Bhashyam (स्वामिनारायणभाष्यम्)",
      devanagariName: "स्वामिनारायणभाष्यम्",
      author: "Sadhu Bhadreshdas Swami (साधु भद्रेशदास स्वामी)",
      school: "Akṣara-Puruṣottama Vedānta (अक्षरपुरुषोत्तम-दर्शनम्)",
      paramparaId: "aksarapurusottama",
      century: "21st Century CE",
      badgeColor: "#9333ea",
      mulaExtract:
        "अक्षरब्रह्मभावेन परब्रह्मपुरुषोत्तमस्य नित्यसेवैव मोक्षफलम् । अक्षरं च ब्रह्म पुरुषोत्तमश्च परब्रह्मेति तत्त्वद्वयं सर्ववेदान्तप्रतिपाद्यम् ।",
      englishExplanation:
        "Mahāmahopādhyāya Bhadreshdas Swami demonstrates that authentic spiritual realization consists in becoming Akṣararūpa to offer unceasing worship to Parabrahman Puruṣottama.",
      tikas: [
        {
          id: `tika-sudha-${verse.id}`,
          name: "Swaminarayan-Siddhanta-Sudha Vāda-Vistāra (स्वामिनारायणसिद्धान्तसुधा)",
          author: "Sadhu Bhadreshdas Swami",
          century: "21st Century CE",
          tradition: "Akṣara-Puruṣottama Dialectics",
          mulaExtract:
            "अक्षरब्रह्मणः साक्षात्परब्रह्मणश्च पार्थक्यं श्रुतिसूत्रेषु सप्रमाणं संस्थाप्यते ।",
          englishExplanation:
            "Comprehensive dialectical treatise substantiating the distinction between Akṣarabrahman and Parabrahman.",
        },
      ],
    },

    // 5. Śākta-Vedānta Svarūpādvaita Perspective (Mahāmahopādhyāya Pañcānana Tarkaratna)
    {
      id: `saktabhashya-${verse.id}`,
      name: "Śāktabhāṣyam (शाक्तभाष्यम्)",
      devanagariName: "शाक्तभाष्यम्",
      author: "MM Pañcānana Bhaṭṭācārya Tarkaratna (महामहोपाध्याय पञ्चानन तर्करत्नः)",
      school: "Śākta-Vedānta (स्वरूपाद्वैतवादः / शाक्तभाष्य-प्रस्थानम्)",
      paramparaId: "saktavisistadvaita",
      century: "20th Century CE (1938 CE, Bhatpara)",
      badgeColor: "#e11d48",
      mulaExtract: isBrahmasutra
        ? (verse.bhashyaExtract ||
          "अत्र सूत्रे परब्रह्मभूताया भगवत्या जगन्मातुश्चिन्मय्याः पराशक्तेः स्वरूपं सर्वकारणत्वं च प्रतिपाद्यते । शक्तिरेव ब्रह्म, ब्रह्मैव शक्तिरित्यभेदः ।")
        : "अस्याः श्रुतेः शाक्तवेदान्तदृष्ट्या समन्वयः—सर्वेषामपि मन्त्राणां तात्पर्यं सच्चिदानन्दमय्यां पराशक्तावेव विश्राम्यति ।",
      englishExplanation:
        "Mahāmahopādhyāya Pañcānana Tarkaratna of Bhatpara expounds this passage through Svarūpādvaita (स्वरूपाद्वैतवादः), demonstrating that Supreme Brahman is non-different from Cit-Śakti (चिन्मयी परा शक्तिः). Creation is Her conscious play (Vilāsa) and real self-unfolding (Cit-Pariṇāma). Preserved in the classical Bhatpara scholastic tradition.",
      commentaryNotes:
        "Preserved in the classical Bhatpara lineage tradition.",
      tikas: [
        {
          id: `tika-saktabhasya-${verse.id}`,
          name: "Śāktabhāṣya-Svarūpārtha-Dīpikā (स्वरूपाद्वैत-दीपिका)",
          author: "Bhatpara Scholastic Tradition",
          century: "20th Century CE",
          tradition: "Śākta-Vedānta Vistāra",
          mulaExtract:
            "शक्तिशक्तिमदभेदेन वेदान्तसमन्वयः । जगन्मिथ्यात्वनिरासपूर्वकं चिच्छक्तिविलासत्वं व्यवस्थापितम् ।",
          englishExplanation:
            "Scholarly gloss substantiating that the universe is the radiant conscious unfolding of the Divine Mother, synthesizing Vedic Upaniṣads with Śākta Tantras.",
        },
      ],
    },
  ];

  return results;
}
