import { Children } from "../../types/Children"

const Container = ({ children }: Children) => {
    return (
        <div className="w-full max-w-[1000px] mb-[clamp(2rem,20vh,8.625rem)]">
            {children}
        </div>
    )
}
export default Container
