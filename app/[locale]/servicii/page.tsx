import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getServices } from "@/lib/content/services";
import { SITE_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import JsonLd from "../_components/JsonLd";
import LinkCard from "../_components/LinkCard";
import PageHero from "../_components/PageHero";

type Props = { params: Promise<{ locale: string }> };

async function resolveLocale(params: Props["params"]) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const locale = await resolveLocale(params);
    const t = await getTranslations({ locale, namespace: "pages" });

    return buildPageMetadata({
        locale,
        path: "/servicii",
        title: t("servicesMetaTitle"),
        description: t("servicesMetaDescription"),
        ogImageAlt: t("servicesIndexTitle"),
    });
}

// Lista tuturor serviciilor, cu link spre pagina fiecăruia
export default async function ServicesPage({ params }: Props) {
    const locale = await resolveLocale(params);
    const t = await getTranslations({ locale, namespace: "pages" });
    const services = getServices(locale);

    return (
        <main>
            <PageHero
                locale={locale}
                breadcrumbLabel={t("breadcrumbLabel")}
                crumbs={[
                    { name: t("home"), path: "" },
                    { name: t("services"), path: "/servicii" },
                ]}
                title={t("servicesIndexTitle")}
                intro={[t("servicesIndexIntro")]}
            />
            <section className="bg-white px-[12%] max-md:px-6 py-20 max-md:py-14">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-w-[1100px]">
                    {services.map((service) => (
                        <LinkCard
                            key={service.slug}
                            href={`/servicii/${service.slug}`}
                            title={service.title}
                            text={service.summary}
                            linkLabel={t("learnMore")}
                        />
                    ))}
                </div>
            </section>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: t("servicesIndexTitle"),
                    itemListElement: services.map((service, idx) => ({
                        "@type": "ListItem",
                        position: idx + 1,
                        name: service.title,
                        url: `${SITE_URL}/${locale}/servicii/${service.slug}`,
                    })),
                }}
            />
        </main>
    );
}
