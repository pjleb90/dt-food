"use client"

import { useEffect, useState } from "react"
import { TbSquareChevronsUpFilled } from "react-icons/tb";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
        window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
        }
        window.addEventListener("scroll", toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        isVisible &&
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            className={`fixed bottom-4 right-0 rounded-full p-2 outline-none transition-opacity duration-200 ${
                isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
        >
            <TbSquareChevronsUpFilled className="width: w-8 height: h-8 text-gray-600 dark:text-white dark:hover:bg-red-700 dark:hover:rounded-lg dark:focus:ring-white"/>
        </button>
    )
}

export default ScrollToTopButton