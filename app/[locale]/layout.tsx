import type { Metadata } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { getLocale, getTranslations } from "next-intl/server";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    variable: "--font-playfair",
});

const OG_IMAGE = "/og-image.jpg";

// Open Graph folosește formatul limba_ȚARA
const OG_LOCALES: Record<string, string> = {
    ro: "ro_MD",
    ru: "ru_MD",
};

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

    const title = t("title");
    const description = t("description");

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        icons: {
            icon: "/favicon.ico",
        },
        // canonical + hreflang: /ro și /ru sunt aceeași pagină în limbi diferite
        alternates: {
            canonical: `/${locale}`,
            languages: {
                ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
                "x-default": `/${routing.defaultLocale}`,
            },
        },
        openGraph: {
            type: "website",
            url: `/${locale}`,
            siteName: SITE_NAME,
            title,
            description,
            locale: OG_LOCALES[locale],
            alternateLocale: routing.locales
                .filter((l) => l !== locale)
                .map((l) => OG_LOCALES[l]),
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: t("ogImageAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();

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

        <LazyMotion features={domAnimation}>
            <NextIntlClientProvider>
                <Header />
                {children}
                <Footer />
            </NextIntlClientProvider>
        </LazyMotion>

        </body>
        </html>
    );
}