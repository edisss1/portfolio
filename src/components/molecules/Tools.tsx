import CSSIcon from "../../assets/CSSIcon"
import HTMLIcon from "../../assets/HTMLIcon"
import ReactIcon from "../../assets/ReactIcon"
import ReduxIcon from "../../assets/ReduxIcon"
import TailwindIcon from "../../assets/TailwindIcon"
import TypeScriptIcon from "../../assets/TypeScriptIcon"

const Tools = () => {
    return (
        <div className="flex items-center flex-wrap justify-center  gap-6">
            <ReactIcon />
            <TypeScriptIcon />
            <ReduxIcon />
            <TailwindIcon />
            <CSSIcon />
            <HTMLIcon />
        </div>
    )
}
export default Tools
