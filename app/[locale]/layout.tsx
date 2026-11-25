import type { Metadata } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SiteJsonLd from "./_components/SiteJsonLd";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Script from "next/script";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import { getArticles } from "@/lib/content/articles";
import { getServices } from "@/lib/content/services";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    variable: "--font-playfair",
});

// Metadata pentru pagina principală; subpaginile își suprascriu propria metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const requested = (await params).locale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        ...buildPageMetadata({
            locale,
            path: "",
            title: t("title"),
            description: t("description"),
            ogImageAlt: t("ogImageAlt"),
        }),
        icons: {
            icon: "/favicon.ico",
        },
    };
}

// /ro și /ru se generează la build, ca pagini statice
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    // limba vine din URL, nu din headere, deci paginile pot fi randate static
    setRequestLocale(locale);

    // doar titlul și adresa fiecărei pagini ajung în footer (client), nu tot conținutul
    const serviceLinks = getServices(locale).map((service) => ({
        href: `/servicii/${service.slug}`,
        title: service.title,
    }));
    const articleLinks = getArticles(locale).map((article) => ({
        href: `/articole/${article.slug}`,
        title: article.title,
    }));

    return (
        <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
        <body>

        {/* Google Tag Manager */}
        <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NK5JKM8C');
            `,
            }}
        />
        {/* End GTM */}

        {/* GTM NoScript */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NK5JKM8C"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
        {/* End GTM NoScript */}

        <SiteJsonLd locale={locale} />

        <LazyMotion features={domAnimation}>
            <NextIntlClientProvider>
                <Header />
                {children}
                <Footer serviceLinks={serviceLinks} articleLinks={articleLinks} />
            </NextIntlClientProvider>
        </LazyMotion>

        </body>
        </html>
    );
}