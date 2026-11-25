'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import TalkModal from "../../_components/FormModal";

const Home = ({ scrollToServices } : {scrollToServices: () => void}) => {
  const t = useTranslations("homeHero");
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={cn("flex bg-[#003D35] px-[80px] py-[40px]", "max-xl:px-[10px] max-lg:flex-col-reverse max-md:px-4 max-md:py-[40px]")}>
      <div className={cn("flex flex-col gap-8 px-[60px] mt-10 justify-center z-10", "max-lg:mt-15 max-md:px-4")}>
        <h1 className={cn("text-7xl text-white font-bold text-left font-playfair", "max-xl:text-5xl max-md:text-4xl max-lg:text-center")}>
          {t("title")}
        </h1>
        <p className={cn("text-[#2D9285] text-base text-start font-inter", "max-xl:text-sm max-lg:text-center")}>
          {t("description")}
        </p>
        <div className={cn("w-full flex justify-between gap-6 items-center font-inter", "max-md:hidden")}>
          <div onClick={scrollToServices} className="button-animation text-[#141414] bg-[#D2DE32] px-8 py-4 rounded-full text-sm font-bold">
            {t("seeServices")}
          </div>
          <p className="text-white">{t("callNow")}</p>
        </div>
        <div className="flex items-center justify-center">
          <div onClick={() => setModalOpen(true)} className="md:hidden font-inter max-w-[300px] box-border border-1 border-white bg-white text-[#003D35] rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
            {t("contact")}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex max-lg:items-center max-lg:justify-center relative">
        <Image
          src={t("imageSrc")}
          alt={t("imageAlt")}
          width={700}
          height={700}
          // imaginea LCP: se încarcă imediat, cu prioritate, la lățimea afișată
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 320px, (max-width: 767px) 400px, 700px"
          className={cn("z-10 lg:min-w-[500px]", "max-md:max-w-[400px] max-sm:max-w-[320px] max-[450px]:max-w-[300px] max-md:mt-0 max-sm:mb-0 max-lg:static max-lg:left-0 max-lg:top-0")}
        />
      </div>
      <Image
        src="/images/lines1.png"
        alt=""
        width={500}
        height={500}
        className={cn("absolute top-[0px] left-[-200px]", "max-xl:hidden")}
      />
      <AnimatePresence>
        {modalOpen && <TalkModal isOpen={modalOpen} setIsOpen={setModalOpen} />}
      </AnimatePresence>
    </div>
  )
}

export default Home