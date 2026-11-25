import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Services({ servicesRef }: { servicesRef: React.RefObject<HTMLDivElement | null> }) {
    const t = useTranslations("services")

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
                            {Array.from({ length: t.raw(`items.${i}.points`).length }).map((_, j) => (
                                <li key={j} className="text-[#3F4242] text-[16px] ml-2 font-inter">
                                    <span className="font-bold text-[25px] mr-2 text-black">•</span>
                                    {t(`items.${i}.points.${j}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
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
            </div>
        </div>
    )
}