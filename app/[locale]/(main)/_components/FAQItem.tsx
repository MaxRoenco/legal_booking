import { FAQType } from "@/lib/types/FAQType"
import { cn } from "@/lib/utils"
import Image from "next/image"


const FAQItem = ({question, answer}: FAQType) => {
  return (
    <div className="flex gap-6 max-w-[600px]">
        <Image  
            src="/svgs/question.svg"
            width={50}
            height={50}
            alt=""
            className="items-center justify-center w-10 h-10 mt-1"
        />
        <div className="flex flex-col gap-2">
            <h3 className={cn("font-bold text-2xl", "max-sm:text-xl")}>{question}</h3>
            <p className="text-[#3F4242] font-inter text-sm">{answer}</p>
        </div>
    </div>
  )
}

export default FAQItem