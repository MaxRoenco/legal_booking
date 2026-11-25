import type { ContentSection, FaqEntry, Locale } from "./types";
import { articlesRo } from "./articles.ro";
import { articlesRu } from "./articles.ru";

// Conținutul unui articol (/articole/[slug]); același slug în ambele limbi
export type ArticlePage = {
    slug: string;
    // H1 și titlul în listări
    title: string;
    metaTitle: string;
    metaDescription: string;
    // o frază pentru cardurile din listări
    summary: string;
    // date ISO (AAAA-LL-ZZ)
    datePublished: string;
    dateModified: string;
    intro: string[];
    sections: ContentSection[];
    faq: FaqEntry[];
    // serviciul spre care trimite articolul (slug din /servicii)
    relatedService: string;
};

const ARTICLES: Record<Locale, ArticlePage[]> = {
    ro: articlesRo,
    ru: articlesRu,
};

export function getArticles(locale: Locale): ArticlePage[] {
    return ARTICLES[locale];
}

export function getArticle(locale: Locale, slug: string): ArticlePage | undefined {
    return ARTICLES[locale].find((article) => article.slug === slug);
}
