export interface GlossaryTerm {
  term: string; // Transliterated IAST term e.g. "Prasthānatrayī"
  altSpellings?: string[]; // e.g. ["prasthanatrayi", "Prasthanatrayi"]
  devanagari: string; // e.g. "प्रस्थानत्रयी"
  category: "Scripture" | "Ontology" | "Epistemology" | "Grammar" | "School" | "Hermeneutics";
  definition: string;
  explanation: string;
}

export const GLOSSARY_DICTIONARY: Record<string, GlossaryTerm> = {
  prasthanatrayi: {
    term: "Prasthānatrayī",
    devanagari: "प्रस्थानत्रयी",
    category: "Scripture",
    definition: "The triple canon of Vedānta Philosophy.",
    explanation: "Comprises the Upaniṣads (Śruti prasthāna - revealed scripture), the Bhagavad Gītā (Smṛti prasthāna - remembered tradition), and the Brahma Sūtras (Nyāya prasthāna - logical foundation)."
  },
  avidya: {
    term: "Avidyā",
    devanagari: "अविद्या",
    category: "Ontology",
    definition: "Primordial ignorance or cosmic nescience.",
    explanation: "In Advaita Vedānta, Avidyā is the root cause of cosmic illusion (Māyā) that veils the non-dual identity of Ātman and Brahman, leading to the perception of multiplicity."
  },
  maya: {
    term: "Māyā",
    devanagari: "माया",
    category: "Ontology",
    definition: "The mysterious power of illusion and projection.",
    explanation: "The inherent power (Śakti) of Brahman or Ishvara that projects the material universe. In Advaita, it is anirvacanīya (indescribable as either strictly real or unreal)."
  },
  brahman: {
    term: "Brahman",
    devanagari: "ब्रह्मन्",
    category: "Ontology",
    definition: "The Supreme Ultimate Uncaused Reality.",
    explanation: "The ground of all existence, pure unconditioned consciousness (Sat-Cit-Ānanda). In Advaita it is Nirguṇa (attributeless), while in Viśiṣṭādvaita and Dvaita it is Saguṇa (endowed with supreme divine attributes)."
  },
  atman: {
    term: "Ātman",
    devanagari: "आत्मन्",
    category: "Ontology",
    definition: "The true, immortal inner Self.",
    explanation: "The pure subjective consciousness within living beings. Distinct from the physical body, subtle body, mind, and ego."
  },
  jiva: {
    term: "Jīva",
    devanagari: "जीव",
    category: "Ontology",
    definition: "The individual embodied soul or living entity.",
    explanation: "The conscious agent experiencing samsāra. Advaita views the Jīva as non-different from Brahman, Viśiṣṭādvaita views it as a qualitative mode/body of Brahman, and Dvaita views it as eternally distinct."
  },
  jagat: {
    term: "Jagat",
    devanagari: "जगत्",
    category: "Ontology",
    definition: "The manifest changing universe.",
    explanation: "The physical and subtle material world. Deemed an impermanent appearance (mithyā) in Advaita, but a real transformation/creation in Viśiṣṭādvaita and Dvaita."
  },
  moksa: {
    term: "Mokṣa",
    devanagari: "मोक्ष",
    category: "Ontology",
    definition: "Supreme spiritual liberation.",
    explanation: "Release from the cycle of birth and death (samsāra), realized through direct knowledge (Jñāna), loving devotion (Bhakti), or divine grace (Anugraha)."
  },
  bhasya: {
    term: "Bhāṣya",
    devanagari: "भाष्य",
    category: "Hermeneutics",
    definition: "An authoritative scholarly commentary.",
    explanation: "Exposition that explains sūtras verse-by-verse, anticipates objections (Pūrvapakṣa), provides grammatical derivation, and establishes formal philosophical conclusions (Siddhānta)."
  },
  purvapaksa: {
    term: "Pūrvapakṣa",
    devanagari: "पूर्वपक्ष",
    category: "Hermeneutics",
    definition: "The prima facie view or opponent's argument.",
    explanation: "In Vedantic dialectics, an opponent's thesis is presented thoroughly and fairly before being systematically dismantled."
  },
  siddhanta: {
    term: "Siddhānta",
    devanagari: "सिद्धान्त",
    category: "Hermeneutics",
    definition: "The demonstrated philosophical conclusion.",
    explanation: "The final, logically validated thesis established by an Ācārya after refuting all counter-arguments."
  },
  sampradaya: {
    term: "Sampradāya",
    devanagari: "सम्प्रदाय",
    category: "School",
    definition: "A traditional lineage of spiritual wisdom.",
    explanation: "A continuous master-disciple lineage (guru-paramparā) preserving specific commentary traditions and hermeneutical methods."
  },
  sandhi: {
    term: "Sandhi",
    devanagari: "सन्धि",
    category: "Grammar",
    definition: "Euphonic phonetic combination in Sanskrit.",
    explanation: "Grammatical transformation rules defined by Pāṇini where word boundaries or adjacent sounds blend together in recitation and manuscript transcription."
  },
  upadhi: {
    term: "Upādhi",
    devanagari: "उपाधि",
    category: "Ontology",
    definition: "Limiting adjunct or conditioning factor.",
    explanation: "Superimposed conditions (like a red flower reflecting in a clear crystal) that make an undivided entity appear divided or conditioned."
  },
  vyakarana: {
    term: "Vyākaraṇa",
    devanagari: "व्याकरण",
    category: "Grammar",
    definition: "Sanskrit grammatical science.",
    explanation: "One of the six Vedāṅgas (auxiliary sciences), codified classically by Pāṇini in the Aṣṭādhyāyī."
  },
  saguna: {
    term: "Saguṇa",
    devanagari: "सगुण",
    category: "Ontology",
    definition: "Endowed with divine qualities and attributes.",
    explanation: "Refers to Ishvara or Brahman manifesting with auspicious attributes (kalyāṇa-guṇa), form, and personality."
  },
  nirguna: {
    term: "Nirguṇa",
    devanagari: "निर्गुण",
    category: "Ontology",
    definition: "Transcending all empirical attributes and material qualities.",
    explanation: "Brahman beyond all human concepts, categories, and triple modes of material nature (guṇas)."
  },
  abheda: {
    term: "Abheda",
    devanagari: "अभेद",
    category: "Hermeneutics",
    definition: "Non-difference; non-duality.",
    explanation: "The philosophical position that ultimate reality is single, without internal or external divisions."
  },
  bheda: {
    term: "Bheda",
    devanagari: "भेद",
    category: "Hermeneutics",
    definition: "Real, foundational difference.",
    explanation: "The doctrine (prominent in Dvaita) that differences between God, souls, and matter are absolute and eternal."
  },
  anusvara: {
    term: "Anusvāra",
    devanagari: "अनुस्वार",
    category: "Grammar",
    definition: "Nasalized vowel sound mark (ṁ).",
    explanation: "Represented by a dot above Devanagari characters, signifying pure nasal resonance."
  },
  visarga: {
    term: "Visarga",
    devanagari: "विसर्ग",
    category: "Grammar",
    definition: "Unvoiced post-vocalic aspiration mark (ḥ).",
    explanation: "Represented by two vertical dots in Devanagari, producing an aspirated echo of the preceding vowel."
  },
  acintya: {
    term: "Acintya",
    devanagari: "अचिन्त्य",
    category: "Ontology",
    definition: "Inconceivable beyond human logic.",
    explanation: "Key concept in Caitanya's school (Acintya Bhedābheda) holding that the relation between God and creation is simultaneously different and non-different beyond finite logic."
  },
  pramana: {
    term: "Pramāṇa",
    devanagari: "प्रमाण",
    category: "Epistemology",
    definition: "Valid means of knowledge.",
    explanation: "Epistemological sources of valid knowledge accepted in Vedānta, primarily Pratyakṣa (perception), Anumāna (inference), and Śabda (verbal/scriptural testimony)."
  },
  mahavakya: {
    term: "Mahāvākya",
    devanagari: "महावाक्य",
    category: "Scripture",
    definition: "Great Upanishadic statement of identity.",
    explanation: "Profound aphorisms such as 'Tat Tvam Asi' (That Thou Art) or 'Aham Brahmāsmi' (I am Brahman) declaring supreme spiritual truth."
  }
};

/**
 * Finds a glossary term by loose string matching
 */
export function lookupTerm(rawWord: string): GlossaryTerm | null {
  if (!rawWord) return null;
  const cleanKey = rawWord.toLowerCase().replace(/[^a-zāīūṛṅñṭḍṇśṣḥṁ]/g, "");
  
  if (GLOSSARY_DICTIONARY[cleanKey]) {
    return GLOSSARY_DICTIONARY[cleanKey];
  }

  // Fallback search through keys and alternate terms
  for (const item of Object.values(GLOSSARY_DICTIONARY)) {
    if (
      item.term.toLowerCase() === rawWord.toLowerCase() ||
      item.devanagari === rawWord ||
      (item.altSpellings && item.altSpellings.some(s => s.toLowerCase() === rawWord.toLowerCase()))
    ) {
      return item;
    }
  }

  return null;
}
