import Image from "next/image"
import { useTranslations } from "next-intl"

export default function WhyChooseUs({ scrollToServices } : {scrollToServices: () => void}) {
    const t = useTranslations("whyChooseUs");

    return (
        <div className="py-20 bg-white grid grid-cols-2 items-start max-[900px]:grid-cols-1 max-[900px]:items-center max-[900px]:gap-10">
            <Image src={t("imageSrc")} width={860} height={880} alt={t("imageAlt")} sizes="(max-width: 900px) 90vw, 50vw" className="w-full max-[900px]:w-[90%] h-auto" />
            <div className="pr-[15%] max-[1150px]:pr-[5%] max-[900px]:p-[5%]">
                <h2 className="font-bold text-[50px] font-playfair text-[#1B1E21] max-[900px]:text-center max-[690px]:text-[30px]">
                  {t("title")}
                </h2>
                <p className="font-inter text-[#3F4242] mb-8 max-[900px]:text-center">
                  {t("description")}
                </p>
                <div className="flex font-inter text-[#1B1E21] gap-5 mb-4 max-[900px]:hidden">
                  {Array.from({length: 2}).map((_, idx) => (
                    <p className="flex gap-3" key={idx}>
                        <Image src="/svgs/check.svg" width={24} height={24} alt="" />
                        {t(`highlights.${idx}`)}
                    </p>
                  ))}
                </div>
                <div className="flex font-inter text-[#1B1E21] gap-5 max-[900px]:hidden">
                  {Array.from({length: 2}).map((_, idx) => (
                    <p className="flex gap-3 text-[16px]" key={idx}>
                        <Image src="/svgs/check.svg" width={24} height={24} alt="" />
                        {t(`highlights.${idx+2}`)}
                    </p>
                  ))}
                </div>
                <div className="flex mt-15 max-[900px]:flex-col max-[900px]:items-center">
                    <div onClick={scrollToServices} className="font-inter button-animation box-border border-1 border-[#141414] bg-[#141414] text-white rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        {t("seeServices")}
                    </div>
                    <div className="font-inter box-border border-1 border-white bg-white text-[#141414] rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        {t("callNow")}
                    </div>
                </div>
            </div>
        </div>
    )
}