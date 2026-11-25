import { ReactElement, useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

export default function Carousel({ slides }: { slides: ReactElement[] }) {
    const t = useTranslations("vouches")
    const [currentSlide, setCurrentSlide] = useState(0)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            loop: true
        },
        [
            // add plugins here
        ]
    )

    return (<div ref={sliderRef} className="keen-slider flex pb-20">
        {slides}
        <Image
            onClick={() => instanceRef.current?.next()}
            src="/svgs/rightArrow.svg"
            height={25}
            width={15}
            alt={t("next")}
            className="absolute top-[50%] right-[15%] cursor-pointer max-[500px]:right-[5%]"
        />
        <Image
            onClick={() => instanceRef.current?.prev()}
            src="/svgs/leftArrow.svg"
            height={25}
            width={15}
            alt={t("previous")}
            className="absolute top-[50%] left-[15%] cursor-pointer max-[500px]:left-[5%]"
        />
        <div className="absolute flex gap-5 bottom-0 left-1/2 -translate-x-1/2">
            {slides.map((e, i) => <div
                key={i}
                className={cn(`bg-white w-[8px] h-[8px] rounded-full cursor-pointer`, { 'opacity-20': currentSlide !== i })}
                onClick={() => instanceRef.current?.moveToIdx(i)}
            ></div>)}
        </div>
    </div>
    )
}