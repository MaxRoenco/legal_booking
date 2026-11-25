import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTranslations } from "next-intl"

const Team = ({ scrollToServices } : {scrollToServices: () => void}) => {
  const t = useTranslations("teamHero");
  return (
    <div className={cn("flex bg-[#003D35] pb-[100px] pt-[60px]", "max-lg:flex-col max-md:py-[40px]")}>
      <div className="w-full h-full">
        <Image 
          src="/images/team.png"
          alt={t("imageAlt")}
          width={600}
          height={500}
          sizes="(max-width: 640px) 320px, (max-width: 767px) 500px, 600px"
          className={cn("max-xl:mt-20 max-md:max-w-[500px] max-sm:max-w-[320px] max-[450px]:max-w-[300px] max-md:mt-0 max-sm:mb-10")}
        />
      </div>
      <div className={cn("flex flex-col gap-8 px-[100px] mt-10 justify-center h-[600px] relative z-10", "max-md:px-4 max-lg:mt-0")}>
        <h2 className={cn("text-6xl text-white font-bold text-left", "max-xl:text-4xl max-md:text-3xl max-lg:text-center")}>
          {t("title")}
        </h2>
        <p className={cn("text-base text-start text-white/60 font-inter", "max-xl:text-sm max-lg:text-center")}>
          {t("description")}
        </p>
        <ul className={cn("grid grid-cols-2 gap-4 text-base font-inter font-semibold", "max-xl:grid-cols-1 max-sm:text-sm max-xl:self-center")}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <li key={idx} className="text-white text-start flex gap-2 items-center">
                <Image 
                    src="/svgs/star.svg"
                    alt=""
                    width={20}
                    height={20}
                />
                {t(`bullets.${idx}`)}
            </li>
            ))}
        </ul>
        <div className={cn("flex gap-10 items-center mt-10 font-inter", "max-xl:mt-6 max-lg:mt-2 max-lg:justify-center max-sm:flex-col")}>
          <div onClick={scrollToServices} className="button-animation text-[#141414] bg-[#D2DE32] px-8 py-4 rounded-full text-sm font-bold">
            {t("seeServices")}
          </div>
          <p className="text-white">{t("callNow")}</p>
        </div>
      </div>
      <Image 
        src="/images/lines2.png"
        alt=""
        width={650}
        height={650}
        className={cn("absolute top-[920px] right-[0px]", "max-xl:hidden")}
      />
    </div>
  )
}

export default Team