import { Children } from "../../types/Children"

const CallToActionText = ({ children }: Children) => {
    return (
        <p className="max-w-[600px] text-[clamp(1rem,2.5vw,1.5rem)]">
            {children}
        </p>
    )
}
export default CallToActionText
