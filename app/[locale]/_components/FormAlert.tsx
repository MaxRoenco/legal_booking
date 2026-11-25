"use client";

import { Modal } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as m from 'motion/react-m';
import { SITE_NAME } from "@/lib/site";

const FormAlert = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("formAlert");

    function handleOnClose() {
        setIsOpen(false)
    }

    return (
        <Modal
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: "blur(10px)",
                    }
                }
            }}
            open={true}
            onClose={handleOnClose}
            className="px-[10%] max-[1000px]:px-[20px] max-[700px]:px-[0px] flex justify-center items-center no-doc-scroll"
        >
            <m.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -400 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-[40px] max-[700px]:p-[20px] max-[700px]:pt-[40px] rounded-[15px] relative flex flex-col justify-center items-center">
                {/* <Image
                    src="/images/icons/cross.svg"
                    alt="close cross"
                    width={70}
                    height={70}
                    className="absolute top-[-20px] max-[700px]:top-[-30px] right-0 cursor-pointer"
                    onClick={handleOnClose}
                /> */}
                <Image src="/svgs/logo_footer.svg" alt={SITE_NAME} width={106} height={106} className="pb-[24px]" />
                <p className="font-semibold text-[24px] pb-[40px] text-center">{t("success")}</p>
                <button onClick={handleOnClose} className="bg-[linear-gradient(90deg,_#8D139B_-111.43%,_#841BA1_-78.76%,_#6D32B1_-28.79%,_#4958CC_34.63%,_#2979E4_80.76%)] w-[70%] px-[20px] py-[14px] rounded-[8px] text-white font-medium text-[16px]">Ok</button>
            </m.div>
        </Modal>
    );
};

export default FormAlert;