import { useEffect, useState } from "react"
import Anchor from "../atoms/Anchor"
import Logo from "../atoms/Logo"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            id="nav"
            className={`${
                scrolled && " py-6"
            } flex items-center justify-between gap-4 sticky top-0 bg-bg z-40 transition-all duration-300`}
        >
            <Logo />
            <ul className="flex gap-4 text-[clamp(1rem,2vw,1.5rem)]">
                <li>
                    <Anchor href="#nav">home</Anchor>
                </li>

                <li>
                    <Anchor href="#work">projects</Anchor>
                </li>
                <li>
                    <Anchor href="#form">contact</Anchor>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
