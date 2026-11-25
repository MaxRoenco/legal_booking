import type { ContentSection } from "@/lib/content/types";

// Blocurile de text ale paginilor de servicii și articole: h2 + paragrafe + listă
export default function ContentSections({ sections }: { sections: ContentSection[] }) {
    return (
        <>
            {sections.map((section) => (
                <section key={section.heading}>
                    <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">
                        {section.heading}
                    </h2>
                    <div className="flex flex-col gap-4 font-inter text-[#3F4242] text-[16px] leading-relaxed">
                        {section.paragraphs?.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                        {section.bullets && (
                            <ul className="flex flex-col gap-3">
                                {section.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span aria-hidden="true" className="mt-[9px] w-2 h-2 shrink-0 rounded-full bg-[#D2DE32]" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}
