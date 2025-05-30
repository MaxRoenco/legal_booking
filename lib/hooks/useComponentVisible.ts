import { useState, useEffect, useRef } from "react";
export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    );
    const ref = useRef<HTMLElement | null>(null);
    const toggleElement = useRef<HTMLElement | null>(null);


    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node) && toggleElement.current && !toggleElement.current?.contains(event.target as Node)) {
            setIsComponentVisible(false);
        } else if (toggleElement.current && toggleElement.current?.contains(event.target as Node)) {
            setIsComponentVisible(p => !p);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, toggleElement, isComponentVisible, setIsComponentVisible };
}