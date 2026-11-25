import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

// /sitemap.xml: câte o intrare pe limbă, fiecare cu legături hreflang către celelalte
export default function sitemap(): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
    );

    return routing.locales.map((locale) => ({
        url: `${SITE_URL}/${locale}`,
        alternates: { languages },
    }));
}
