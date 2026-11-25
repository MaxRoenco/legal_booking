import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

// Punctele din services.items care au pagină proprie: [grupă][punct] -> slug din /servicii
const POINT_LINKS: Record<number, (string | null)[]> = {
    0: [null, "abonament-juridic-firme", null, null],
    1: ["redactare-contracte", "inregistrare-srl", "lichidare-srl"],
    2: ["reprezentare-in-instanta", null, null],
    4: ["inregistrare-marca-agepi", null],
    5: [null, "dreptul-familiei"],
}

export default function Services({ servicesRef }: { servicesRef: React.RefObject<HTMLDivElement | null> }) {
    const t = useTranslations("services")
    const tPages = useTranslations("pages")

    return (
        <div ref={servicesRef as React.RefObject<HTMLDivElement>} className="bg-white px-44 max-[1250px]:px-20 max-[760px]:px-10 pt-30 max-[760px]:pt-10 flex flex-col">
            <h2 className="font-playfair text-[50px] font-bold mb-3 text-[#1B1E21] max-[760px]:text-center max-[760px]:text-[35px]">
                {t("title")}
            </h2>
            <p className="font-inter text-[#3F4242] max-w-[580px] max-[760px]:text-center">
                {t("description")}
            </p>
            <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1 gap-15 py-20">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-5">
                        <Image
                            src={t(`items.${i}.icon`)}
                            width={75}
                            height={75}
                            alt=""
                        />
                        <h3 className="font-playfair font-bold text-[#1B1E21] text-[18px] uppercase">
                            {t(`items.${i}.title`)}
                        </h3>
                        <ul>
                            {Array.from({ length: t.raw(`items.${i}.points`).length }).map((_, j) => {
                                const slug = POINT_LINKS[i]?.[j]
                                return (
                                    <li key={j} className="text-[#3F4242] text-[16px] ml-2 font-inter">
                                        <span className="font-bold text-[25px] mr-2 text-black">•</span>
                                        {slug ? (
                                            <Link
                                                href={`/servicii/${slug}`}
                                                className="underline decoration-[#D2DE32] decoration-2 underline-offset-4 hover:text-[#003D35] transition-colors"
                                            >
                                                {t(`items.${i}.points.${j}`)}
                                            </Link>
                                        ) : (
                                            t(`items.${i}.points.${j}`)
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
            <Link
                href="/servicii"
                className="self-center -mt-6 mb-24 font-inter button-animation box-border border-1 border-[#141414] bg-[#141414] text-white rounded-full px-8 py-5 font-semibold text-sm"
            >
                {tPages("allServices")}
            </Link>
            <div className="flex flex-col self-center mb-30">
                <div className="flex justify-center relative">
                    <div className="absolute w-[43px] h-[43px] bg-[#D2DE32] rounded-full top-[35%] left-[49%]"></div>
                    <Image src="/gifs/hammer.gif" width={220} height={190} alt="" className="self-center z-10" />
                </div>
                <p className="uppercase font-playfair font-bold text-[30px] text-[#1B1E21]">
                    {t("packageTitle")}
                </p>
                <p className="max-w-[620px] font-inter text-[16px] text-[#3F4242]">
                    {t("packageDescription")}
                </p>
                <Link href="/servicii/abonament-juridic-firme" className="mt-3 font-inter font-semibold text-sm text-[#003D35] hover:underline">
                    {tPages("learnMore")} →
                </Link>
            </div>
        </div>
    )
}