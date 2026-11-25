import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

export type FaqEntry = { question: string; answer: string };

// Un bloc de text: titlu (h2), paragrafe și/sau listă
export type ContentSection = {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
};
