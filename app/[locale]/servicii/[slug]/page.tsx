import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/content/articles";
import { getService } from "@/lib/content/services";
import { SITE_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import ContentSections from "../../_components/ContentSections";
import FaqSection from "../../_components/FaqSection";
import JsonLd from "../../_components/JsonLd";
import LinkCard from "../../_components/LinkCard";
import PageHero from "../../_components/PageHero";

type Props = { params: Promise<{ locale: string; slug: string }> };

async function loadService(params: Props["params"]) {
    const { locale, slug } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    const service = getService(locale, slug);
    if (!service) notFound();
    return { locale, service };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, service } = await loadService(params);

    return buildPageMetadata({
        locale,
        path: `/servicii/${service.slug}`,
        title: service.metaTitle,
        description: service.metaDescription,
        ogImageAlt: service.title,
    });
}

export default async function ServicePage({ params }: Props) {
    const { locale, service } = await loadService(params);
    const t = await getTranslations({ locale, namespace: "pages" });
    const path = `/servicii/${service.slug}`;
    const related = service.related
        .map((slug) => getService(locale, slug))
        .filter((item) => item !== undefined);
    const articles = getArticles(locale).filter((article) => article.relatedService === service.slug);

    return (
        <main>
            <PageHero
                locale={locale}
                breadcrumbLabel={t("breadcrumbLabel")}
                crumbs={[
                    { name: t("home"), path: "" },
                    { name: t("services"), path: "/servicii" },
                    { name: service.title, path },
                ]}
                title={service.title}
                intro={service.intro}
            />
            <div className="bg-white px-[12%] max-md:px-6 py-20 max-md:py-14">
                <div className="max-w-[860px] flex flex-col gap-16 max-md:gap-12">
                    <ContentSections sections={service.sections} />

                    <section>
                        <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">
                            {t("howWeWork")}
                        </h2>
                        <ol className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                            {service.steps.map((step, idx) => (
                                <li key={step.title} className="rounded-3xl border border-[#003D35]/15 p-6">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D2DE32] text-[#141414] font-inter font-bold">
                                        {idx + 1}
                                    </span>
                                    <h3 className="font-playfair font-bold text-xl text-[#1B1E21] mt-4 mb-2">{step.title}</h3>
                                    <p className="font-inter text-[#3F4242] text-[15px] leading-relaxed">{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <FaqSection title={t("faqTitle")} items={service.faq} />

                    {articles.length > 0 && (
                        <section>
                            <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">
                                {t("usefulArticles")}
                            </h2>
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
                                {articles.map((article) => (
                                    <LinkCard
                                        key={article.slug}
                                        href={`/articole/${article.slug}`}
                                        title={article.title}
                                        text={article.summary}
                                        linkLabel={t("readArticle")}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {related.length > 0 && (
                        <section>
                            <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">
                                {t("relatedServices")}
                            </h2>
                            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5">
                                {related.map((item) => (
                                    <LinkCard
                                        key={item.slug}
                                        href={`/servicii/${item.slug}`}
                                        title={item.title}
                                        text={item.summary}
                                        linkLabel={t("learnMore")}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "@id": `${SITE_URL}/${locale}${path}#service`,
                            name: service.title,
                            serviceType: service.title,
                            description: service.metaDescription,
                            url: `${SITE_URL}/${locale}${path}`,
                            inLanguage: locale,
                            provider: { "@id": `${SITE_URL}/#organization` },
                            areaServed: { "@type": "Country", name: "Moldova" },
                        },
                        {
                            "@type": "FAQPage",
                            mainEntity: service.faq.map(({ question, answer }) => ({
                                "@type": "Question",
                                name: question,
                                acceptedAnswer: { "@type": "Answer", text: answer },
                            })),
                        },
                    ],
                }}
            />
        </main>
    );
}
