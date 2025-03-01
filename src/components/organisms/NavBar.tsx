import Logo from "../atoms/Logo"

const NavBar = () => {
    return (
        <nav id="nav" className="flex items-center justify-between gap-4 ">
            <Logo />
            <ul className="flex gap-4 text-[clamp(1rem,2.5vw,1.5rem)]">
                <li>
                    <a href="#nav">home</a>
                </li>

                <li>
                    <a href="#work">projects</a>
                </li>
                <li>
                    <a href="#form">contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
