import { useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollArrow() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector(".scrollArrow").style.display = "block";
            } else {
                document.querySelector(".scrollArrow").style.display = "none";
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <FaArrowAltCircleUp onClick={scrollToTop} color="#FF7D29" className="scrollArrow hidden fixed bottom-6 right-3 text-3xl cursor-pointer z-50" />
        </>
    )
}

export default ScrollArrow
