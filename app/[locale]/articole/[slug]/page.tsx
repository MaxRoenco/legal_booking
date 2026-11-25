import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticle, getArticles } from "@/lib/content/articles";
import { getService } from "@/lib/content/services";
import { SITE_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import ContentSections from "../../_components/ContentSections";
import FaqSection from "../../_components/FaqSection";
import JsonLd from "../../_components/JsonLd";
import LinkCard from "../../_components/LinkCard";
import PageHero from "../../_components/PageHero";

type Props = { params: Promise<{ locale: string; slug: string }> };

const DATE_LOCALES: Record<string, string> = { ro: "ro-MD", ru: "ru-MD" };

// toate articolele se generează la build, pentru fiecare limbă
export function generateStaticParams() {
    return getArticles(routing.defaultLocale).map((article) => ({ slug: article.slug }));
}

async function loadArticle(params: Props["params"]) {
    const { locale, slug } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);
    const article = getArticle(locale, slug);
    if (!article) notFound();
    return { locale, article };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, article } = await loadArticle(params);
    const tFooter = await getTranslations({ locale, namespace: "footer" });

    return buildPageMetadata({
        locale,
        path: `/articole/${article.slug}`,
        title: article.metaTitle,
        description: article.metaDescription,
        ogImageAlt: article.title,
        article: {
            publishedTime: article.datePublished,
            modifiedTime: article.dateModified,
            authors: [tFooter("profileName")],
        },
    });
}

export default async function ArticlePage({ params }: Props) {
    const { locale, article } = await loadArticle(params);
    const t = await getTranslations({ locale, namespace: "pages" });
    // autorul articolelor este juristul prezentat în footer
    const tFooter = await getTranslations({ locale, namespace: "footer" });
    const path = `/articole/${article.slug}`;
    const service = getService(locale, article.relatedService);
    const published = new Intl.DateTimeFormat(DATE_LOCALES[locale], { dateStyle: "long" })
        .format(new Date(article.datePublished));

    return (
        <main>
            <PageHero
                locale={locale}
                breadcrumbLabel={t("breadcrumbLabel")}
                crumbs={[
                    { name: t("home"), path: "" },
                    { name: t("articles"), path: "/articole" },
                    { name: article.title, path },
                ]}
                title={article.title}
                intro={article.intro}
            >
                <p className="font-inter text-sm text-white/60 mt-5">
                    {t("author")}: {tFooter("profileName")}, {tFooter("profileRole").toLowerCase()} · {t("published")}{" "}
                    <time dateTime={article.datePublished}>{published}</time>
                </p>
            </PageHero>
            <div className="bg-white px-[12%] max-md:px-6 py-20 max-md:py-14">
                <article className="max-w-[860px] flex flex-col gap-16 max-md:gap-12">
                    <ContentSections sections={article.sections} />
                    {article.faq.length > 0 && <FaqSection title={t("faqTitle")} items={article.faq} />}
                    <p className="font-inter text-sm italic text-[#3F4242]/80">{t("disclaimer")}</p>
                    {service && (
                        <section>
                            <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">
                                {t("relatedServiceTitle")}
                            </h2>
                            <div className="max-w-[520px]">
                                <LinkCard
                                    href={`/servicii/${service.slug}`}
                                    title={service.title}
                                    text={service.summary}
                                    linkLabel={t("learnMore")}
                                />
                            </div>
                        </section>
                    )}
                </article>
            </div>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BlogPosting",
                            "@id": `${SITE_URL}/${locale}${path}#article`,
                            headline: article.title,
                            description: article.metaDescription,
                            inLanguage: locale,
                            datePublished: article.datePublished,
                            dateModified: article.dateModified,
                            url: `${SITE_URL}/${locale}${path}`,
                            mainEntityOfPage: `${SITE_URL}/${locale}${path}`,
                            image: `${SITE_URL}/og-image.jpg`,
                            author: {
                                "@type": "Person",
                                name: tFooter("profileName"),
                                jobTitle: tFooter("profileRole"),
                                worksFor: { "@id": `${SITE_URL}/#organization` },
                            },
                            publisher: { "@id": `${SITE_URL}/#organization` },
                        },
                        ...(article.faq.length > 0
                            ? [
                                {
                                    "@type": "FAQPage",
                                    mainEntity: article.faq.map(({ question, answer }) => ({
                                        "@type": "Question",
                                        name: question,
                                        acceptedAnswer: { "@type": "Answer", text: answer },
                                    })),
                                },
                            ]
                            : []),
                    ],
                }}
            />
        </main>
    );
}
