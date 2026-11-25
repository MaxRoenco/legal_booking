'use client'
import Image from 'next/image'
import Carousel from './Carousel'
import { useTranslations } from 'next-intl'

export default function Vouches() {
    const t = useTranslations("vouches");

    const vouchCount = 5;

    return (
        <div className='flex flex-col justify-center items-center py-20 w-full relative overflow-hidden'>
            <h2 className='text-[50px] font-playfair font-bold text-white text-center mb-10 max-[550px]:text-[35px]'>
                {t('title')}
            </h2>
            <div className='absolute bg-[#002C26] w-[500px] h-[1000px] rounded-full bottom-[-75%] right-0 -z-10 opacity-30'></div>
            <div className='absolute bg-[#002C26] w-[500px] h-[1000px] rounded-full top-[-75%] left-0 -z-10 opacity-30'></div>
            <div className='absolute border-1 border-[#D2DE32] w-[500px] h-[1000px] rounded-full top-[-72%] left-[2%] -z-10 opacity-30'></div>
            <Carousel slides={
                Array.from({ length: vouchCount }).map((_, idx) => (
                    <div key={idx} className="keen-slider__slide flex justify-center flex-col items-center gap-8 w-full">
                        <div className='w-[125px] h-[125px] overflow-hidden rounded-full flex justify-center items-center'>
                            <Image src={t(`list.${idx}.image`)} width={125} height={125} alt={t(`list.${idx}.title`)} className='w-full h-full object-center object-cover' />
                        </div>
                        <p className='text-white font-inter w-[50%]  max-[500px]:w-[70%] text-center text-[18px]'>{t(`list.${idx}.text`)}</p>
                        <p className='text-white font-inter text-center text-[16px]'>{t(`list.${idx}.title`)}</p>
                    </div>
                ))
            } />
        </div>
    )
}