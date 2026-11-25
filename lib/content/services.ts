import type { ContentSection, FaqEntry, Locale } from "./types";
import { servicesRo } from "./services.ro";
import { servicesRu } from "./services.ru";

// Conținutul unei pagini de serviciu (/servicii/[slug]); același slug în ambele limbi
export type ServicePage = {
    slug: string;
    // H1 și numele serviciului în listări
    title: string;
    metaTitle: string;
    metaDescription: string;
    // o frază pentru cardurile din listări
    summary: string;
    intro: string[];
    sections: ContentSection[];
    steps: { title: string; text: string }[];
    faq: FaqEntry[];
    related: string[];
};

const SERVICES: Record<Locale, ServicePage[]> = {
    ro: servicesRo,
    ru: servicesRu,
};

export function getServices(locale: Locale): ServicePage[] {
    return SERVICES[locale];
}

export function getService(locale: Locale, slug: string): ServicePage | undefined {
    return SERVICES[locale].find((service) => service.slug === slug);
}
