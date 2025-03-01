import { Children } from "../../types/Children"

const CallToActionHeader = ({ children }: Children) => {
    return (
        <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold">{children}</h1>
    )
}
export default CallToActionHeader
