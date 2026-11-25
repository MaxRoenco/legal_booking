import { setRequestLocale } from "next-intl/server";
import FaqJsonLd from "./_components/FaqJsonLd";

// Layout pe server pentru pagina principală (page.tsx e client component)
export default async function MainLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // fiecare layout/pagină setează limba pentru randarea statică
    setRequestLocale((await params).locale);

    return (
        <>
            <FaqJsonLd />
            {children}
        </>
    );
}
