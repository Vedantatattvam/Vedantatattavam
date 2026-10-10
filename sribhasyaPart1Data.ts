import { GranthaChapter } from "./types";

export const SRIBHASHYA_CHAPTERS_PART1: GranthaChapter[] = [
  // =========================================================================
  // CHAPTER 1: मङ्गलाचरणम् प्रस्तावना च (Invocatory Verses & Lineage Foundation)
  // =========================================================================
  {
    id: "sb-mangalacarana",
    chapterTitle: "Chapter 1: Maṅgalācaraṇam & Prastāvanā (Invocations to Śrīnivāsa & Bodhāyana Tradition)",
    chapterTitleSanskrit: "प्रथमोऽध्यायः — मङ्गलाचरणम् बोधायनपरम्पराप्रस्तावना च",
    summary:
      "The glorious opening invocations of the Śrībhāṣya by Bhagavān Śrī Rāmānujācārya. He defines Parabrahman as Bhagavān Śrīnivāsa (Lord of Śrī), whose sport is cosmic creation, preservation, and dissolution, praying that his intellect (śemuṣī) transforms into loving devotion (bhakti-rūpā). He pays homage to Maharṣi Bādarāyaṇa Vyāsa and Sage Parāśara, and explicitly establishes that the Śrībhāṣya faithfully condenses the ancient, extensive Brahma-Sūtra-Vṛtti composed by revered Bhagavān Bodhāyana.",
    verses: [
      {
        id: "sb-m-1",
        number: "मङ्गलश्लोक १",
        title: "श्रीनिवास-परब्रह्म-प्रणामः — Prayer for Intellect to Flower into Devotion",
        mulaSanskrit: "अखिलभुवनजन्मस्थेमभङ्गादिलीले विनतविविधभूतव्रातरक्षैकदीक्षे ।\nश्रुतिशिरसि विदीप्ते ब्रह्मणि श्रीनिवासे भवतु मम परस्मिन् शेमुषी भक्तिरूपा ॥ १ ॥",
        mulaIast: "akhila-bhuvana-janma-sthema-bhaṅgādi-līle vinata-vividha-bhūta-vrāta-rakṣaika-dīkṣe |\nśruti-śirasi vidīpte brahmaṇi śrīnivāse bhavatu mama parasmin śemuṣī bhakti-rūpā || 1 ||",
        padaccheda: "अखिल-भुवन-जन्म-स्थेम-भङ्ग-आदि-लीले, विनत-विविध-भूत-व्रात-रक्ष-एक-दीक्षे, श्रुति-शिरसि, विदीप्ते, ब्रह्मणि, श्रीनिवासे, भवतु, मम, परस्मिन्, शेमुषी, भक्ति-रूपा",
        anvaya: "अखिलभुवनजन्मस्थेमभङ्गादिलीले विनतविविधभूतव्रातरक्षैकदीक्षे श्रुतिशिरसि विदीप्ते परस्मिन् ब्रह्मणि श्रीनिवासे मम शेमुषी भक्तिरूपा भवतु ।",
        englishTranslation: "May my intellect (śemuṣī) transform into loving devotion (bhakti-rūpā) directed towards that Supreme Brahman known as Śrīnivāsa (the Abode of Lakṣmī)—whose effortless cosmic sport is the origination, preservation, and dissolution of all the worlds; who is single-mindedly dedicated to protecting the host of all surrendered beings; and who shines resplendent upon the crest-jewel of the Vedas (the Upaniṣads).",
        commentaryNotes: "This inaugural śloka encapsulates the entirety of Viśiṣṭādvaita: Brahman is not a cold, featureless abstract void (Nirviśeṣa), but Bhagavān Śrīnivāsa endowed with infinite auspicious qualities (Ananta-kalyāṇa-guṇa-gaṇa). The purpose of knowledge (śemuṣī) is not dry academic dialectics, but its spontaneous culmination in continuous loving meditation (Bhakti).",
        bhashyas: [
          {
            id: "sb-bh-m-1",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita (Śrī Sampradāya)",
            century: "13th Century CE",
            mulaExtract: "अत्र परब्रह्मशब्दाभिधेयो नारायणः निरस्तनिखिलदोषगन्धः स्वाभाविकानवधिकातिशय-अपरिमितोदारगुणसागरः अखिलहेयप्रत्यनीकः सर्वेश्वरः श्रीनिवासापरपर्यायः परं तत्त्वमिति प्रतीयते ।",
            englishExplanation: "Parabrahman is identified as Śrīman Nārāyaṇa, the sole Lord of the cosmos, devoid of the slightest trace of defilement, the infinite ocean of unsurpassed auspicious virtues, shining on the summits of the Upaniṣads."
          }
        ]
      },
      {
        id: "sb-m-2",
        number: "मङ्गलश्लोक २",
        title: "पाराशर्यवचस्सुधा — The Upaniṣadic Nectar of Maharṣi Vyāsa",
        mulaSanskrit: "पाराशर्यवचस्सुधामुपनिषद्दुग्धाब्धिमध्योद्धृतां संसाराग्निविदीपनव्यपगतप्राणात्मसञ्जीविनीम् ॥ २ ॥",
        mulaIast: "pārāśarya-vacas-sudhām upaniṣad-dugdhābdhi-madhyoddhṛtāṁ saṁsārāgni-vidīpana-vyapagata-prāṇātma-sañjīvinīm || 2 ||",
        padaccheda: "पाराशर्य-वचः-सुधाम्, उपनिषद्-दुग्ध-अब्धि-मध्य-उद्धृताम्, संसार-अग्नि-विदीपन-व्यपगत-प्राण-आत्म-सञ्जीविनीम्",
        anvaya: "उपनिषद्दुग्धाब्धिमध्योद्धृतां संसाराग्निविदीपनव्यपगतप्राणात्मसञ्जीविनीं पाराशर्यवचस्सुधां (सेवे) ।",
        englishTranslation: "I venerate that immortal nectar of sage Bādarāyaṇa Vyāsa's speech (the Brahma Sūtras), churned and drawn from the deep midst of the milk-ocean of the Upaniṣads, which acts as the supreme life-giving herb (sañjīvinī) rejuvenating souls whose spiritual vitality has been scorched by the blazing fires of worldly transmigration (saṁsāra).",
        commentaryNotes: "The metaphor is classical: The Upaniṣads are the Dugdhābdhi (Ocean of Milk), Maharṣi Kṛṣṇa Dvaipāyana Vyāsa (son of Parāśara) is the cosmic churner, and the Brahma Sūtras are the Amṛta (Nectar of Immortality).",
        bhashyas: [
          {
            id: "sb-bh-m-2",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita (Śrī Sampradāya)",
            century: "13th Century CE",
            mulaExtract: "पाराशर्यो व्यासः । तद्वचनं सूत्रजातम् । तस्य सुधासाम्यं संसारतापशामकत्वेन मोक्षप्रदत्वेन च ।",
            englishExplanation: "The aphorisms of Vyāsa are likened to nectar because they extinguish worldly suffering and bestow immortal liberation."
          }
        ]
      },
      {
        id: "sb-m-3",
        number: "मङ्गलश्लोक ३",
        title: "पूर्वाचार्य-संरक्षणम् — Bringing Forth the Pure Ancient Stream",
        mulaSanskrit: "पूर्वाचार्यसुरक्षितां बहुमतिव्याघातदूरस्थिताम् ।\nआनीतां तु निजाक्षरैस्सुमनसो भौमाः पिबन्त्वन्वहम् ॥ ३ ॥",
        mulaIast: "pūrvācārya-surakṣitāṁ bahumati-vyāghāta-dūrasthitām |\nānītāṁ tu nijākṣarais sumanaso bhaumāḥ pibantv anvaham || 3 ||",
        padaccheda: "पूर्व-आचार्य-सुरक्षिताम्, बहु-मति-व्याघात-दूर-स्थिताम्, आनीताम्, तु, निज-अक्षरैः, सुमनसः, भौमाः, पिबन्तु, अन्वहम्",
        anvaya: "पूर्वाचार्यसुरक्षितां बहुमतिव्याघातदूरस्थितां तु निजाक्षरैः आनीतां (एतां वचस्सुधां) भौमाः सुमनसः अन्वहं पिबन्तु ।",
        englishTranslation: "Safeguarded by the pristine ancient commentators (Bodhāyana, Dramiḍa, and Ṭaṅka), kept far away from the distortions of erroneous philosophical systems, and now brought forth in my own words—may the noble-minded scholars and seekers upon this earth drink this immortal nectar day after day!",
        commentaryNotes: "Rāmānuja disclaims any intellectual innovation or personal speculation. His mission is the faithful restoration of the ancient Vedic commentary tradition.",
        bhashyas: [
          {
            id: "sb-bh-m-3",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita (Śrī Sampradāya)",
            century: "13th Century CE",
            mulaExtract: "पूर्वाचार्या बोधायनटङ्कद्रमिडगुहदेवप्रभृतयः । बहुमतयो भास्करादयः कुदृष्टयः । तैः कृताद्व्याघाताद्दूरस्थिताम् ।",
            englishExplanation: "The ancient masters are Bodhāyana, Ṭaṅka, Dramiḍa, Guhadeva, and others. The distortions refer to rival misinterpretations by Bhedābhedavādins and Māyāvādins."
          }
        ]
      },
      {
        id: "sb-m-4",
        number: "प्रस्तावना",
        title: "भगवद्बोधायन-वृत्ति-संक्षेपः — Fidelity to the Bodhāyana Vṛtti",
        mulaSanskrit: "भगवद्बोधायनकृतां विस्तीर्णां ब्रह्मसूत्रवृत्तिं पूर्वाचार्या: संचिक्षिपुः; तन्मतानुसारेण सूत्राक्षराणि व्याख्यास्यन्ते ॥",
        mulaIast: "bhagavad-bodhāyana-kṛtāṁ vistīrṇāṁ brahma-sūtra-vṛttiṁ pūrvācāryāḥ sañcikṣipuḥ; tan-matānusāreṇa sūtrākṣarāṇi vyākhyāsyante ||",
        padaccheda: "भगवद्-बोधायन-कृताम्, विस्तीर्णाम्, ब्रह्म-सूत्र-वृत्तिम्, पूर्व-आचार्याः, संचिक्षिपुः, तत्-मत-अनुसारेण, सूत्र-अक्षराणि, व्याख्यास्यन्ते",
        anvaya: "भगवद्बोधायनकृतां विस्तीर्णां ब्रह्मसूत्रवृत्तिं पूर्वाचार्याः संचिक्षिपुः; तन्मतानुसारेण सूत्राक्षराणि व्याख्यास्यन्ते ।",
        englishTranslation: "Ancient preceptors condensed the extensive Brahma-Sūtra-Vṛtti composed by the venerable sage Bhagavān Bodhāyana; in strict accordance with his established doctrine, the syllables of the sūtras will now be expounded.",
        commentaryNotes: "This historic statement establishes the uninterrupted antiquity of Viśiṣṭādvaita. Rāmānuja traveled personally to the Śāradā Pīṭha in Kashmir to inspect Bodhāyana's ancient manuscripts.",
        bhashyas: [
          {
            id: "sb-bh-m-4",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita (Śrī Sampradāya)",
            century: "13th Century CE",
            mulaExtract: "बोधायनवृत्तौ हि कर्मब्रह्मकाण्डयोरेकशास्त्रत्वं सविशेषब्रह्मप्रतिपादनं च स्पष्टमभिहितम् ।",
            englishExplanation: "The Bodhāyana Vṛtti explicitly upholds the unity of the entire Vedic canon and the Saviśeṣa nature of Parabrahman."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 2: सूत्राक्षरव्याख्या शास्त्रैकत्वनिरूपणं च (Sūtra 1.1.1 & Eka-Śāstratva)
  // =========================================================================
  {
    id: "sb-sutra-vivarana",
    chapterTitle: "Chapter 2: Sūtra 1.1.1 Analysis & The Unity of Mīmāṁsā (Athāto Brahma-Jijñāsā)",
    chapterTitleSanskrit: "द्वितीयोऽध्यायः — सूत्राक्षरव्याख्या मीमांसाशास्त्रैकत्वनिरूपणं च",
    summary:
      "Rāmānuja's rigorous grammatical, etymological, and hermeneutic analysis of Brahma Sūtra 1.1.1 ('अथातो ब्रह्मजिज्ञासा'). He proves that 'Atha' signifies immediate spiritual succession after studying ritual actions; 'Ataḥ' signifies the causal reason, namely the perishable, finite nature of karma compared to the infinite, imperishable fruit of Brahman-knowledge; analyzes 'Brahma-jijñāsā' as a Ṣaṣṭhī Tatpuruṣa compound governed by 'kartṛ-karmaṇoḥ kṛti' where Brahman is the direct objective accusative of inquiry; defines Brahman as Puruṣottama endowed with infinite auspicious qualities; and establishes that Pūrva-Mīmāṁsā and Uttara-Mīmāṁsā constitute a single, continuous, 20-chapter body of revealed scripture (Eka-śāstra).",
    verses: [
      {
        id: "sb-s-1",
        number: "सूत्र १.१.१",
        title: "अथातो ब्रह्मजिज्ञासा — The Commencing Aphorism of Spiritual Inquiry",
        mulaSanskrit: "अथातो ब्रह्मजिज्ञासा ॥ १.१.१ ॥",
        mulaIast: "athāto brahma-jijñāsā || 1.1.1 ||",
        padaccheda: "अथ, अतः, ब्रह्म-जिज्ञासा",
        anvaya: "अथ (कर्मज्ञानानन्तरम्) अतः (कर्मफलाल्पत्वाद् ब्रह्मफलानन्त्याच्च) ब्रह्मजिज्ञासा (कर्तव्या) ।",
        englishTranslation: "Henceforward, therefore, should be undertaken the inquiry into Brahman (Parabrahman Śrīman Nārāyaṇa).",
        commentaryNotes: "The foundational gate of Uttara-Mīmāṁsā. It announces the earnest quest for the ultimate Truth upon realizing the limitations of worldly and heavenly achievements.",
        bhashyas: [
          {
            id: "sb-bh-s-1",
            name: "Śrībhāṣya Mūla",
            author: "Bhagavān Śrī Rāmānujācārya",
            school: "Viśiṣṭādvaita",
            century: "11th-12th Century CE",
            mulaExtract: "अत्रायमथशब्द आनंतर्ये भवति । अतश्शब्दो वृत्तस्य हेतुभावे । अधीतसाङ्गसशिरस्कवेदस्य अधिगताल्पास्थिरफलकेवलकर्मज्ञानतया सञ्जातमोक्षाभिलाषस्य अनन्तस्थिरफलब्रह्मजिज्ञासा ह्यनन्तरभाविनी ।",
            englishExplanation: "The word 'Atha' denotes immediate succession; 'Ataḥ' denotes the causal reason. For the seeker who has studied the entire Veda and realized the ephemeral, petty fruits of mere works, the inquiry into the eternal, infinite fruit of Brahman follows as an immediate necessity."
          }
        ]
      },
      {
        id: "sb-s-2",
        number: "पदार्थविचार १",
        title: "ब्रह्मणो जिज्ञासा — Grammatical Analysis of the Compound as Objective Genitive",
        mulaSanskrit: "ब्रह्मणो जिज्ञासा — ब्रह्मजिज्ञासा, ब्रह्मण इति कर्मणि षष्ठी 'कर्तृकर्मणोः कृति' इति विशेषविधानात् । यद्यपि सम्बन्धसामान्यपरिग्रहेऽपि जिज्ञासायाः कर्मापेक्षत्वेन कर्मार्थत्वसिद्धिः, तथाप्याक्षेपतः प्राप्तादाभिधानिकस्यैव ग्राह्यत्वात् कर्मणि षष्ठी गृह्यते । न च 'प्रतिपदविधाना षष्ठी न समस्यते' इति कर्मणि षष्ठ्याः समासनिषेधः शङ्कनीयः; 'कृद्योगा च षष्ठी समस्यते' इति प्रतिप्रसव-सद्भावात् ॥",
        mulaIast: "brahmaṇo jijñāsā — brahma-jijñāsā, brahmaṇa iti karmaṇi ṣaṣṭhī 'kartṛ-karmaṇoḥ kṛti' iti viśeṣa-vidhānāt | yadyapi sambandha-sāmānya-parigrahe'pi jijñāsāyāḥ karmāpekṣatvena karmārthatva-siddhiḥ, tathāpy ākṣepataḥ prāptād ābhidhānikasyaiva grāhyatvāt karmaṇi ṣaṣṭhī gṛhyate | na ca 'pratipada-vidhānā ṣaṣṭhī na samasyate' iti karmaṇi ṣaṣṭhyāḥ samāsa-niṣedhaḥ śaṅkanīyaḥ; 'kṛd-yogā ca ṣaṣṭhī samasyate' iti pratiprasava-sadbhāvāt ||",
        padaccheda: "ब्रह्मणः, जिज्ञासा, ब्रह्म-जिज्ञासा, ब्रह्मणः, इति, कर्मणि, षष्ठी, कर्तृ-कर्मणोः, कृति, इति, विशेष-विधानात्",
        anvaya: "ब्रह्मणो जिज्ञासा ब्रह्मजिज्ञासा; अत्र 'कर्तृकर्मणोः कृति' इति विशेषविधानात् 'ब्रह्मणः' इति कर्मणि षष्ठी ।",
        englishTranslation: "The compound 'Brahma-jijñāsā' resolves as 'Brahmaṇo jijñāsā' (inquiry concerning Brahman). The genitive case in 'Brahmaṇaḥ' is in the sense of the direct object (karmaṇi ṣaṣṭhī), in accordance with Pāṇini's specific rule 'kartṛ-karmaṇoḥ kṛti' (2.3.65). Although taking the genitive in a general relational sense (sambandha-sāmānya) might indirectly imply an object, that which is directly expressed by grammatical rule is superior to inferential presumption. Nor can it be objected that an objective genitive cannot enter into a compound, for there is an explicit counter-rule permitting compounds formed with verbal nouns.",
        commentaryNotes: "Syntactic precision: Brahman is not just loosely 'related' to inquiry, but is the supreme direct object (Karman) to be known, meditated upon, and attained.",
        bhashyas: [
          {
            id: "sb-bh-s-2",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita",
            century: "13th Century CE",
            mulaExtract: "कर्मणि षष्ठीस्वीकारेण ब्रह्मण एव साक्षात् ज्ञातव्यत्वं मुख्यविषयत्वं च प्रतिपादितं भवति ।",
            englishExplanation: "Adopting the objective genitive establishes Brahman Himself as the direct, paramount object of realization, dismissing all secondary topics."
          }
        ]
      },
      {
        id: "sb-s-3",
        number: "ब्रह्मलक्षणम्",
        title: "पुरुषोत्तमनिरूपणम् — Definition of Brahman as the Supreme Person",
        mulaSanskrit: "ब्रह्मशब्देन च स्वभावतो निरस्तनिखिलदोषोऽनवधिकातिशयासङ्ख्येयकल्याणगुणगणः पुरुषोत्तमोऽभिधीयते । सर्वत्र बृहत्त्वगुणयोगेन हि ब्रह्मशब्दः, बृहत्त्वं च स्वरूपेण गुणैश्च यत्रानवधिकातिशयं सोऽस्य मुख्योऽर्थः । स च सर्वेश्वर एव, अतो ब्रह्मशब्दस्तत्रैव मुख्यवृत्तः । तस्मादन्यत्र तद्गुणलेशयोगादौपचारिकः, अनेकार्थकल्पनायोगात्, भगवच्छब्दवत् । तापत्रयातुराणाममृतत्वाय स एव जिज्ञास्यः ॥",
        mulaIast: "brahma-śabdena ca svabhāvato nirasta-nikhila-doṣo'navadhikātiśayāsaṅkhyeya-kalyāṇa-guṇa-gaṇaḥ puruṣottamo'bhidhīyate | sarvatra bṛhattva-guṇa-yogena hi brahma-śabdaḥ, bṛhattvaṁ ca svarūpeṇa guṇaiś ca yatrānavadhikātiśayaṁ so'sya mukhyo'rthaḥ | sa ca sarveśvara eva, ato brahma-śabdas tatraiva mukhya-vṛttaḥ | tasmād anyatra tad-guṇa-leśa-yogād aupacārikaḥ, anekārtha-kalpanāyogāt, bhagavac-chabdavat | tāpa-trayāturāṇām amṛtatvāya sa eva jijñāsyaḥ ||",
        padaccheda: "ब्रह्म-शब्देन, च, स्वभावतः, निरस्त-निखिल-दोषः, अनवधिक-अतिशय-असङ्ख्येय-कल्याण-गुण-गणः, पुरुषोत्तमः, अभिधीयते, सर्वत्र, बृहत्त्व-गुण-योगेन, हि, ब्रह्म-शब्दः",
        anvaya: "ब्रह्मशब्देन स्वभावतो निरस्तनिखिलदोषोऽनवधिकातिशयासङ्ख्येयकल्याणगुणगणः पुरुषोत्तमोऽभिधीयते; बृहत्त्वं स्वरूपेण गुणैश्च यत्रानवधिकातिशयं स सर्वेश्वर एव ब्रह्मशब्दस्य मुख्योऽर्थः ।",
        englishTranslation: "By the term 'Brahman' is denoted the Supreme Person (Puruṣottama), who by His very essential nature is free from every shadow of defect or blemish, and who is an ocean of countless, unsurpassed, infinite auspicious attributes. The word 'Brahman' is derived from the root 'bṛh' (to grow, to surpass, to be great); wherever infinite greatness in both essential reality (svarūpa) and attributes (guṇa) exists without limitation, that is its primary meaning. That is Bhagavān, the Lord of all (Sarveśvara) alone. Elsewhere its usage is secondary or metaphorical.",
        commentaryNotes: "Rāmānuja grounds the definition of Brahman in strict semantic etymology: Bṛhattvāt bṛṁhaṇatvāc ca brahma. Brahman is infinitely great in Himself and makes all those who contemplate Him share in His divine greatness.",
        bhashyas: [
          {
            id: "sb-bh-s-3",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita",
            century: "13th Century CE",
            mulaExtract: "बृह धातोर्मनिन्प्रत्यये ब्रह्मशब्दनिष्पत्तिः । स्वरूपतो गुणतश्च निरतिशयबृहत्त्वं नारायणस्यैवेति भावः ।",
            englishExplanation: "Formed from the root bṛh with the manin affix, the primary denotation of unsurpassed grandeur in essence and qualities belongs exclusively to Śrīman Nārāyaṇa."
          }
        ]
      },
      {
        id: "sb-s-4",
        number: "शास्त्रैकत्वम्",
        title: "मीमांसाशास्त्रैकत्वसिद्धिः — The Organic Unity of Pūrva & Uttara Mīmāṁsā",
        mulaSanskrit: "तदाह वृत्तिकारः—'वृत्तात् कर्माधिगमादनन्तरं ब्रह्मविविदिषा' इति । वक्ष्यति च कर्मब्रह्ममीमांसयोरेकशास्त्र्यं 'संहितमेतच्छारीरकं जैमिनीयेन षोडशलक्षणेनेति शास्त्रैकत्वसिद्धिः' इति । अतः प्रतिपिपादयिषितार्थभेदेन षट्कभेदवदध्यायभेदवच्च पूर्वोत्तरमीमांसयोर्भेदः । मीमांसाशास्त्रम्—'अथातो धर्मजिज्ञासा' इत्यारभ्य 'अनावृत्तिश्शब्दादनावृत्तिश्शब्दात्' इत्येवमन्तं सङ्गतिविशेषेण विशिष्टक्रमम् ॥",
        mulaIast: "tad āha vṛttikāraḥ — 'vṛttāt karmādhigamād anantaraṁ brahma-vividiṣā' iti | vakṣyati ca karma-brahma-mīmāṁsayor eka-śāstryaṁ 'saṁhitam etac chārīrakaṁ jaiminīyena ṣoḍaśa-lakṣaṇeneti śāstraikatva-siddhiḥ' iti | ataḥ pratipādayiṣitārtha-bhedena ṣaṭka-bhedavad adhyāya-bhedavac ca pūrvottara-mīmāṁsayor bhedaḥ | mīmāṁsā-śāstram — 'athāto dharma-jijñāsā' ity ārabhya 'anāvṛttiḥ śabdād anāvṛttiḥ śabdāt' ity evam antaṁ saṅgati-viśeṣeṇa viśiṣṭa-kramam ||",
        padaccheda: "तत्, आह, वृत्तिकारः, वृत्तात्, कर्माधिगमात्, अनन्तरम्, ब्रह्म-विविदिषा, इति, संहितम्, एतत्, शारीरकम्, जैमिनीयेन, षोडश-लक्षणेन, इति, शास्त्र-एकत्व-सिद्धिः",
        anvaya: "वृत्तिकारः आह—'वृत्तात् कर्माधिगमादनन्तरं ब्रह्मविविदिषा' इति; जैमिनीयेन षोडशलक्षणेन एतत् शारीरकं संहितमिति शास्त्रैकत्वसिद्धिः ।",
        englishTranslation: "Thus declares the ancient Vṛttikāra (Bodhāyana): 'After the comprehension of works has taken place, there arises the desire to know Brahman.' He will further declare the integral single-science nature (Eka-śāstratva) of the entire Mīmāṁsā: 'This Śārīraka treatise of four chapters is unified with Jaimini's sixteen-chapter work, establishing that the entire Mīmāṁsā is one single continuous treatise of twenty chapters.' The division between Pūrva and Uttara Mīmāṁsā is like the division between chapters or six-chapter sections (ṣaṭkas), unfolding in a systematic progression from 'Athāto dharma-jijñāsā' (Jaimini Sūtra 1.1.1) to 'Anāvṛttiḥ śabdāt' (Brahma Sūtra 4.4.22).",
        commentaryNotes: "One of Rāmānuja's most pivotal contributions: Karma-kāṇḍa and Jñāna-kāṇḍa are not contradictory poles, but stages of one continuous organic curriculum. First one learns what action is; then one realizes its limitations; then one ascends to the loving contemplation of the Supreme Lord.",
        bhashyas: [
          {
            id: "sb-bh-s-4",
            name: "Śrutaprakāśikā",
            author: "Śrī Sudarśana Sūri",
            school: "Viśiṣṭādvaita",
            century: "13th Century CE",
            mulaExtract: "धर्मजिज्ञासातः प्रभृति मोक्षपर्यन्तमेकमेव शास्त्रम् । कर्मणामुपासनाङ्गतया समुच्चितत्वादेकप्रबन्धत्वम् ।",
            englishExplanation: "From the inquiry into duty up to final liberation, it is one seamless revelation, because ritual actions performed without selfish attachment serve as auxiliaries to meditative knowledge."
          }
        ]
      }
    ]
  }
];
