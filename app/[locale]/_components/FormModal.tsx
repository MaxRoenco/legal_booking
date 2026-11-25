"use client";

import { Modal } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Form from "./Form"
import * as m from 'motion/react-m';
import { SITE_NAME } from "@/lib/site";
const TalkModal = ({ setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("contactForm");
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
            onClose={() => setIsOpen(false)}
            disableScrollLock={true}
            className="flex justify-center items-center outline-none no-doc-scroll"
        >
            <m.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -400 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white w-[70%] max-[700px]:w-[95%] h-[90%] rounded-[35px] py-[25px] overflow-hidden shadow-lg">
                <div className="flex justify-between mb-[25px] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]">
                    <Image
                        src="/svgs/formLogo.svg"
                        width={74}
                        height={74}
                        alt={SITE_NAME}
                    />
                    <Image
                        src="/svgs/cross.svg"
                        width={13}
                        height={13}
                        className="cursor-pointer"
                        alt={t("close")}
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <Form className="overflow-auto custom-scrollbar max-h-[60vh] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]" />
            </m.div>
        </Modal>
    );
};

export default TalkModal;