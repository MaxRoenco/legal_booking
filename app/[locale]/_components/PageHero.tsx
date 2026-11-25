import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import ContactCta from "./ContactCta";

// Antetul verde al subpaginilor: fir de navigare, H1, introducere și butoanele de contact
export default function PageHero({
    locale,
    breadcrumbLabel,
    crumbs,
    title,
    intro,
    children,
}: {
    locale: string;
    breadcrumbLabel: string;
    crumbs: Crumb[];
    title: string;
    intro: string[];
    children?: React.ReactNode;
}) {
    return (
        <section className="bg-[#003D35] px-[12%] max-md:px-6 pt-6 pb-20 max-md:pb-14">
            <Breadcrumbs locale={locale} label={breadcrumbLabel} items={crumbs} />
            <h1 className="font-playfair text-white font-bold text-6xl max-xl:text-5xl max-md:text-4xl mt-8 max-w-[900px]">
                {title}
            </h1>
            {children}
            <div className="flex flex-col gap-4 mt-6 mb-10 max-w-[760px]">
                {intro.map((paragraph, idx) => (
                    <p key={idx} className="font-inter text-white/70 text-base leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
            <ContactCta />
        </section>
    );
}
