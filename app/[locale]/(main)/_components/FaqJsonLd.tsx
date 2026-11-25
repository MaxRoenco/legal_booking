import { getTranslations } from "next-intl/server";
import JsonLd from "../../_components/JsonLd";

type FaqEntry = { question: string; answer: string };

// Întrebările frecvente din pagină, ca FAQPage pentru Google
export default async function FaqJsonLd() {
    const t = await getTranslations("faq");
    const questions = t.raw("questions") as FaqEntry[];

    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: questions.map(({ question, answer }) => ({
                    "@type": "Question",
                    name: question,
                    acceptedAnswer: { "@type": "Answer", text: answer },
                })),
            }}
        />
    );
}
