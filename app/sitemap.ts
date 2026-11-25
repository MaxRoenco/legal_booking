import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/content/articles";
import { getServices } from "@/lib/content/services";
import { SITE_URL } from "@/lib/site";

// O intrare pe limbă pentru fiecare pagină, cu legături hreflang către celelalte limbi
function localizedEntries(path: string, lastModified?: string): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    );

    return routing.locales.map((locale) => ({
        url: `${SITE_URL}/${locale}${path}`,
        ...(lastModified && { lastModified }),
        alternates: { languages },
    }));
}

// /sitemap.xml: pagina principală, serviciile și articolele (cu data reală a ultimei modificări)
export default function sitemap(): MetadataRoute.Sitemap {
    const services = getServices(routing.defaultLocale);
    const articles = getArticles(routing.defaultLocale);

    return [
        ...localizedEntries(""),
        ...localizedEntries("/servicii"),
        ...services.flatMap((service) => localizedEntries(`/servicii/${service.slug}`)),
        ...localizedEntries("/articole"),
        ...articles.flatMap((article) => localizedEntries(`/articole/${article.slug}`, article.dateModified)),
    ];
}
