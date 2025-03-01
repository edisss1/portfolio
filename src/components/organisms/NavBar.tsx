import Logo from "../atoms/Logo"

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between gap-4">
            <Logo />
            <ul className="flex gap-4">
                <li>
                    <a>home</a>
                </li>

                <li>
                    <a>projects</a>
                </li>
                <li>
                    <a>contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
