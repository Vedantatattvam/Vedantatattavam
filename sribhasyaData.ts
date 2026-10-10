import { TextEntry } from "./types";
import { SRIBHASHYA_CHAPTERS_PART1 } from "./sribhasyaPart1Data";
import { SRIBHASHYA_CHAPTERS_PART2 } from "./sribhasyaPart2Data";
import { SRIBHASHYA_CHAPTERS_PART3 } from "./sribhasyaPart3Data";
import { SRIBHASHYA_CHAPTERS_PART4 } from "./sribhasyaPart4Data";

export const SRIBHASHYA_GRANTHA: TextEntry = {
  id: "sribhasya",
  title: "Śrībhāṣya",
  transliteratedTitle: "Śrībhāṣyam (श्रीभाष्यम् — जिज्ञासाधिकरणम् १.१.१)",
  author: "Bhagavān Śrī Rāmānujācārya (भगवच्छ्रीरामानुजाचार्यविरचितम्)",
  century: "11th - 12th Century CE (1017–1137 CE)",
  school: "Viśiṣṭādvaita (Śrī Sampradāya — Ubhayavedānta)",
  paramparaId: "visistadvaita",
  schoolTag: "Prasthānatrayī Bhāṣya",
  foundationalText: "Epochal Viśiṣṭādvaita Bhāṣya on the Brahma Sūtras (Complete 56-Page Jijñāsādhikaraṇam 1.1.1)",
  totalVersesOrSutras: "8 Dialectical Chapters (मङ्गलाचरणम्, सूत्राक्षरव्याख्या, लघुसिद्धान्तः, महापूर्वपक्षः, महासिद्धान्तः, सप्तविधाऽनुपपत्तिः, सत्ख्यातिवादः, शरीर-शरीरि-भावसमन्वयः)",
  language: "Classical Philosophical Sanskrit (संस्कृतम्)",
  scriptStyle: "Classical Mīmāṁsā Dialectics with Śrutaprakāśikā Commentary by Śrī Sudarśana Sūri",
  description:
    "The Śrībhāṣya of Bhagavān Śrī Rāmānujācārya is the definitive, epoch-making philosophical commentary on the Brahma Sūtras from the Viśiṣṭādvaita perspective, following the ancient Bodhāyana Vṛtti. Its opening Jijñāsādhikaraṇam (1.1.1), spanning 56 dense pages of classical dialectics, is the most celebrated treatise in Indian philosophy: establishing the organic unity of Pūrva and Uttara Mīmāṁsā (Eka-śāstratva), defining Brahman as Bhagavān Śrīnivāsa endowed with infinite auspicious attributes, establishing Dhyāna (loving meditation) and Bhakti as the means of liberation through the Saptasādhana, presenting the comprehensive Mahāpūrvapakṣa of Advaita Vedānta, refuting Nirviśeṣavāda through the Mahāsiddhānta, dismantling the concept of positive inexplicable ignorance via the Saptavidha-Anupapatti (Seven Great Untenables), establishing Satkhyātivāda (the reality of all cognitions), and harmonizing all Vedic scriptures through the supreme architectural key of Śarīra-Śarīrī-Bhāva (all souls and cosmos constituting the living body of Śrīman Nārāyaṇa).",
  refutationsDet:
    "Directly refutes the Nirguna Brahman (attributeless Absolute), Vivartavāda (cosmic illusion), and Anirvacanīya Avidyā of Kevalādvaita via the famous Saptavidha-Anupapatti (Āśraya, Tirodhāna, Svarūpa, Anirvacanīyatva, Pramāṇa, Nivartaka, and Nivṛtti-anupapattis); refutes Bhedābhedavāda of Bhāskara and Yādavaprakāśa by showing that associating upādhis or defects with Brahman compromises divine immutability; and refutes Mīmāṁsaka ritualism by proving that actions without knowledge yield petty, perishable fruits.",
  supportsDet:
    "Firmly establishes the fundamental pillars of Viśiṣṭādvaita: Saviśeṣa-Brahmavāda (Brahman as Śrīnivāsa possessing infinite Kalyāṇa-guṇas); Eka-śāstratva of 20-chapter Mīmāṁsā; Jñātṛtvam of Ātman (the Self is the conscious Knower and 'I', not bare awareness); Dharmabhūta-jñāna (attributive consciousness); Satkhyātivāda (epistemological realism); Dhyāna-Upāsanā as Bhakti culminating in Darśana-samānākāratā; the Saptasādhana (Viveka, Vimoka, Abhyāsa, Kriyā, Kalyāṇa, Anavasāda, Anuddharsa); and the crowning relational model of Śarīra-Śarīrī-Bhāva.",
  chapters: [
    ...SRIBHASHYA_CHAPTERS_PART1,
    ...SRIBHASHYA_CHAPTERS_PART2,
    ...SRIBHASHYA_CHAPTERS_PART3,
    ...SRIBHASHYA_CHAPTERS_PART4
  ]
};
