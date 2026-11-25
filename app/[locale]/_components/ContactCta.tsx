"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import FormModal from "./FormModal";

// Butoanele de contact din antetul paginilor de servicii și articole
export default function ContactCta() {
    const t = useTranslations("pages");
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex flex-wrap items-center gap-8 max-sm:gap-5 font-inter">
            <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="button-animation cursor-pointer text-[#141414] bg-[#D2DE32] px-8 py-4 rounded-full text-sm font-bold"
            >
                {t("requestConsultation")}
            </button>
            <a href="tel:+37360366660" className="text-white hover:text-[#D2DE32] transition-colors">
                {t("callNow")}
            </a>
            <AnimatePresence>
                {modalOpen && <FormModal isOpen={modalOpen} setIsOpen={setModalOpen} />}
            </AnimatePresence>
        </div>
    );
}
