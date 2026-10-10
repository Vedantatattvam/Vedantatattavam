export type TabType = "tree" | "mapping" | "bengal_vedanta" | "early_vedanta" | "bharatiya_lipi" | "comparative_council" | "comparative" | "translation" | "qa" | "ocr" | "sastrartha" | "about_us";

export type ParamparaId = 
  | "all"
  | "vedic_root"
  | "advaita"
  | "visistadvaita"
  | "dvaita"
  | "suddhadvaita"
  | "dvaitadvaita"
  | "acintya"
  | "acintyabhedabheda"
  | "bhedabheda"
  | "saktavisistadvaita"
  | "swaminarayan"
  | "aksarapurusottama"
  | "neo_vedanta";

export interface GuruNode {
  id: string;
  name: string;
  devanagariName: string;
  title: string;
  century: string;
  paramparaId: ParamparaId;
  lineageStage: "divine" | "rishi" | "acharya" | "commentator" | "modern";
  guruName?: string;
  guruId?: string;
  prominentDisciples?: string[];
  seatsOrMathas?: string[];
  keyWorks: string[];
  primaryDoctrines: string[];
  famousQuoteOrMantra?: string;
  historicalContext: string;
  primaryGranthaId?: string;
}

export interface SubPrasthana {
  id: string;
  name: string;
  sanskritName: string;
  proponent: string;
  century: string;
  coreEpistemology: string;
  keyWorks: string[];
}

export interface ParamparaTradition {
  id: ParamparaId;
  name: string;
  devanagariName: string;
  englishTitle: string;
  sampradayaName: string;
  founderOrPreceptor: string;
  avatarOrDeity: string;
  primaryPhilosophy: string;
  coreDoctrine: string;
  realityModel: string; // e.g. Vivarta, Pariṇāma, Pañcabheda, Acintya
  jivaBrahmanRelation: string;
  mokshaMeans: string; // e.g. Jñāna, Bhakti-Prapatti, Puṣṭi, Prema
  badgeColor: string;
  borderColor: string;
  accentBg: string;
  keyGurus: GuruNode[];
  subPrasthānas?: SubPrasthana[];
  canonicalGranthaIds: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface OcrState {
  rawText: string;
  isProcessing: boolean;
  result: string | null;
  error: string | null;
}

export interface TranslationState {
  text: string;
  context: string;
  isProcessing: boolean;
  result: string | null;
  error: string | null;
}

export interface ComparativeState {
  verseOrSutra: string;
  selectedSchools: string[];
  isProcessing: boolean;
  result: string | null;
  error: string | null;
}

export interface BibliographicQueryState {
  title: string;
  isProcessing: boolean;
  result: string | null;
  error: string | null;
}

export interface TikaEntry {
  id: string;
  name: string;
  devanagariName?: string;
  author: string;
  century?: string;
  tradition?: string;
  mulaExtract: string;
  mulaIast?: string;
  englishExplanation?: string;
  dialecticalNotes?: string;
}

export interface BhashyaEntry {
  id: string;
  name: string;
  devanagariName?: string;
  author: string;
  devanagariAuthor?: string;
  school: string;
  paramparaId?: ParamparaId;
  century?: string;
  mulaExtract: string;
  mulaIast?: string;
  englishExplanation?: string;
  commentaryNotes?: string;
  badgeColor?: string;
  archiveUrl?: string;
  tikas?: TikaEntry[];
}

export interface GranthaVerse {
  id: string;
  number: string;
  title?: string;
  mulaSanskrit: string;
  mulaIast: string;
  padaccheda?: string;
  anvaya?: string;
  bhashyaExtract?: string;
  englishTranslation: string;
  commentaryNotes?: string;
  bhashyas?: BhashyaEntry[];
}

export interface GranthaChapter {
  id: string;
  chapterTitle: string;
  chapterTitleSanskrit: string;
  title?: string;
  summary: string;
  verses: GranthaVerse[];
}

export interface TextEntry {
  id: string;
  title: string;
  transliteratedTitle: string;
  author: string;
  century: string;
  school: string;
  paramparaId?: ParamparaId;
  isNeoVedanta?: boolean;
  schoolTag?: string;
  foundationalText: string;
  description: string;
  refutationsDet: string;
  supportsDet: string;
  totalVersesOrSutras?: string;
  language?: string;
  scriptStyle?: string;
  archiveUrl?: string;
  chapters?: GranthaChapter[];
}

