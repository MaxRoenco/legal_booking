import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getServices } from "@/lib/content/services";
import { SITE_URL } from "@/lib/site";

// O intrare pe limbă pentru fiecare pagină, cu legături hreflang către celelalte limbi
function localizedEntries(path: string): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    );

    return routing.locales.map((locale) => ({
        url: `${SITE_URL}/${locale}${path}`,
        alternates: { languages },
    }));
}

// /sitemap.xml: pagina principală, lista de servicii și fiecare serviciu
export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [
        "",
        "/servicii",
        ...getServices(routing.defaultLocale).map((service) => `/servicii/${service.slug}`),
    ];

    return paths.flatMap(localizedEntries);
}
