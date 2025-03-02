import Anchor from "../atoms/Anchor"
import Logo from "../atoms/Logo"

const NavBar = () => {
    return (
        <nav id="nav" className="flex items-center justify-between gap-4 ">
            <Logo />
            <ul className="flex gap-4 text-[clamp(1rem,2.5vw,1.5rem)]">
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
