import { Children } from "../../types/Children"

const Header = ({ children }: Children) => {
    return (
        <h3 className="text-[clamp(1.5rem,10vw,2.25rem)] font-bold">
            {children}
        </h3>
    )
}
export default Header
