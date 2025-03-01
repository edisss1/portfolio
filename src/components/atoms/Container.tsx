import { Children } from "../../types/Children"

interface ContainerProps extends Children {
    id?: string
}

const Container = ({ children, id }: ContainerProps) => {
    return (
        <div
            id={id}
            className="w-full max-w-[1000px] mb-[clamp(2rem,20vh,8.625rem)] grid place-items-center mx-auto gap-9"
        >
            {children}
        </div>
    )
}
export default Container
