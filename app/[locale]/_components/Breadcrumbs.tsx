import { Link } from "@/i18n/navigation";
import { SITE_URL } from "@/lib/site";
import JsonLd from "./JsonLd";

// path = calea de după limbă ("" = pagina principală); ultimul element e pagina curentă
export type Crumb = { name: string; path: string };

// Firul de navigare vizibil + BreadcrumbList pentru Google
export default function Breadcrumbs({
    locale,
    label,
    items,
}: {
    locale: string;
    label: string;
    items: Crumb[];
}) {
    return (
        <>
            <nav aria-label={label} className="font-inter text-sm text-white/60">
                <ol className="flex flex-wrap items-center gap-2">
                    {items.map((item, idx) => {
                        const isLast = idx === items.length - 1;
                        return (
                            <li key={item.path} className="flex items-center gap-2">
                                {isLast ? (
                                    <span aria-current="page" className="text-white/90">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link href={item.path || "/"} className="hover:text-[#D2DE32] transition-colors">
                                        {item.name}
                                    </Link>
                                )}
                                {!isLast && <span aria-hidden="true">›</span>}
                            </li>
                        );
                    })}
                </ol>
            </nav>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: items.map((item, idx) => ({
                        "@type": "ListItem",
                        position: idx + 1,
                        name: item.name,
                        item: `${SITE_URL}/${locale}${item.path}`,
                    })),
                }}
            />
        </>
    );
}
