import type { FaqEntry } from "@/lib/content/types";

// Întrebările frecvente ale unei subpagini (datele FAQPage sunt în JSON-LD-ul paginii)
export default function FaqSection({ title, items }: { title: string; items: FaqEntry[] }) {
    return (
        <section>
            <h2 className="font-playfair text-[#1B1E21] text-4xl max-md:text-3xl font-bold mb-6">{title}</h2>
            <div className="flex flex-col">
                {items.map((item) => (
                    <div key={item.question} className="py-6 border-b border-[#003D35]/15 last:border-b-0">
                        <h3 className="font-playfair font-bold text-xl text-[#1B1E21] mb-2">{item.question}</h3>
                        <p className="font-inter text-[#3F4242] text-[16px] leading-relaxed">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
