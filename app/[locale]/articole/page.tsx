import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/content/articles";
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
        path: "/articole",
        title: t("articlesMetaTitle"),
        description: t("articlesMetaDescription"),
        ogImageAlt: t("articlesIndexTitle"),
    });
}

// Lista articolelor, cu link spre fiecare
export default async function ArticlesPage({ params }: Props) {
    const locale = await resolveLocale(params);
    const t = await getTranslations({ locale, namespace: "pages" });
    const articles = getArticles(locale);

    return (
        <main>
            <PageHero
                locale={locale}
                breadcrumbLabel={t("breadcrumbLabel")}
                crumbs={[
                    { name: t("home"), path: "" },
                    { name: t("articles"), path: "/articole" },
                ]}
                title={t("articlesIndexTitle")}
                intro={[t("articlesIndexIntro")]}
            />
            <section className="bg-white px-[12%] max-md:px-6 py-20 max-md:py-14">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-w-[1100px]">
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
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: t("articlesIndexTitle"),
                    itemListElement: articles.map((article, idx) => ({
                        "@type": "ListItem",
                        position: idx + 1,
                        name: article.title,
                        url: `${SITE_URL}/${locale}/articole/${article.slug}`,
                    })),
                }}
            />
        </main>
    );
}
