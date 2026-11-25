import { getTranslations } from "next-intl/server";
import {
    SITE_EMAIL,
    SITE_INSTAGRAM,
    SITE_NAME,
    SITE_PHONE,
    SITE_URL,
} from "@/lib/site";
import JsonLd from "./JsonLd";

type ServiceGroup = { title: string; points: string[] };

// Cine este firma (LegalService) și numele site-ului (WebSite), pe toate paginile
export default async function SiteJsonLd({ locale }: { locale: string }) {
    const t = await getTranslations({ locale });
    const serviceGroups = t.raw("services.items") as ServiceGroup[];
    const organizationId = `${SITE_URL}/#organization`;

    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "LegalService",
                        "@id": organizationId,
                        name: SITE_NAME,
                        url: `${SITE_URL}/${locale}`,
                        description: t("metadata.description"),
                        logo: `${SITE_URL}/logo.png`,
                        image: `${SITE_URL}/og-image.jpg`,
                        telephone: SITE_PHONE,
                        email: SITE_EMAIL,
                        areaServed: { "@type": "Country", name: "Moldova" },
                        sameAs: [SITE_INSTAGRAM],
                        employee: {
                            "@type": "Person",
                            name: t("footer.profileName"),
                            jobTitle: t("footer.profileRole"),
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: SITE_PHONE,
                            email: SITE_EMAIL,
                            contactType: "customer service",
                            areaServed: "MD",
                            availableLanguage: ["Romanian", "Russian"],
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: t("services.title"),
                            itemListElement: serviceGroups.map((group) => ({
                                "@type": "OfferCatalog",
                                name: group.title,
                                itemListElement: group.points.map((point) => ({
                                    "@type": "Offer",
                                    itemOffered: { "@type": "Service", name: point },
                                })),
                            })),
                        },
                    },
                    {
                        "@type": "WebSite",
                        "@id": `${SITE_URL}/#website`,
                        name: SITE_NAME,
                        url: `${SITE_URL}/`,
                        inLanguage: locale,
                        publisher: { "@id": organizationId },
                    },
                ],
            }}
        />
    );
}
