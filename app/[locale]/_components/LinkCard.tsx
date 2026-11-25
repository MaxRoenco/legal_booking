import { Link } from "@/i18n/navigation";

// Card cu link spre un serviciu sau articol (listări și „conexe”)
export default function LinkCard({
    href,
    title,
    text,
    linkLabel,
}: {
    href: string;
    title: string;
    text: string;
    linkLabel: string;
}) {
    return (
        <Link
            href={href}
            className="group flex flex-col gap-3 rounded-3xl border border-[#003D35]/15 p-7 hover:border-[#003D35] transition-colors"
        >
            <h3 className="font-playfair font-bold text-2xl text-[#1B1E21]">{title}</h3>
            <p className="font-inter text-[#3F4242] text-[15px] leading-relaxed grow">{text}</p>
            <span className="font-inter font-semibold text-sm text-[#003D35]">
                {linkLabel} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
        </Link>
    );
}
