import { Children } from "../../types/Children"

interface ToolContainerProps extends Children {
    shadowColor: string
}

const ToolContainer = ({ children, shadowColor }: ToolContainerProps) => {
    return (
        <div
            className={`p-4 bg-surface rounded-lg  hover:shadow-3xl ${shadowColor} transition-shadow ease-in-out hover:duration-100 duration-[2s]`}
        >
            {children}
        </div>
    )
}
export default ToolContainer
