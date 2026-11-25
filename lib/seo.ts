import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE = "/og-image.jpg";

// Open Graph folosește formatul limba_ȚARA
const OG_LOCALES: Record<string, string> = {
    ro: "ro_MD",
    ru: "ru_MD",
};

type PageMetadataInput = {
    locale: string;
    // calea de după limbă: "" pentru pagina principală, "/servicii/inregistrare-srl" etc.
    path: string;
    title: string;
    description: string;
    ogImageAlt: string;
    article?: {
        publishedTime: string;
        modifiedTime: string;
        authors: string[];
    };
};

// Metadata comună pentru orice pagină: canonical, hreflang, Open Graph și Twitter
export function buildPageMetadata({
    locale,
    path,
    title,
    description,
    ogImageAlt,
    article,
}: PageMetadataInput): Metadata {
    const common = {
        url: `/${locale}${path}`,
        siteName: SITE_NAME,
        title,
        description,
        locale: OG_LOCALES[locale],
        alternateLocale: routing.locales
            .filter((l) => l !== locale)
            .map((l) => OG_LOCALES[l]),
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ogImageAlt }],
    };

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        // canonical + hreflang: aceeași pagină în fiecare limbă
        alternates: {
            canonical: `/${locale}${path}`,
            languages: {
                ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
                "x-default": `/${routing.defaultLocale}${path}`,
            },
        },
        openGraph: article
            ? { ...common, type: "article", ...article }
            : { ...common, type: "website" },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}
