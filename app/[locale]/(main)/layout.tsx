import FaqJsonLd from "./_components/FaqJsonLd";

// Layout pe server pentru pagina principală (page.tsx e client component)
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FaqJsonLd />
            {children}
        </>
    );
}
