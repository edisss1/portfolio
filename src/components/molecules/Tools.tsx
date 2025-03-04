import CSSIcon from "../../assets/CSSIcon"
import HTMLIcon from "../../assets/HTMLIcon"
import ReactIcon from "../../assets/ReactIcon"
import ReduxIcon from "../../assets/ReduxIcon"
import TailwindIcon from "../../assets/TailwindIcon"
import TypeScriptIcon from "../../assets/TypeScriptIcon"
import ToolContainer from "../atoms/ToolContainer"

const Tools = () => {
    return (
        <div className="flex items-center flex-wrap justify-center  gap-6">
            <ToolContainer shadowColor="hover:shadow-[#53C1DE]">
                <ReactIcon />
            </ToolContainer>
            <ToolContainer shadowColor="hover:shadow-[#007ACC]">
                <TypeScriptIcon />
            </ToolContainer>
            <ToolContainer shadowColor="hover:shadow-[#764ABC]">
                <ReduxIcon />
            </ToolContainer>
            <ToolContainer shadowColor="hover:shadow-[#44A8B3]">
                <TailwindIcon />
            </ToolContainer>
            <ToolContainer shadowColor="hover:shadow-[#1572B6]">
                <CSSIcon />
            </ToolContainer>
            <ToolContainer shadowColor="hover:shadow-[#E44D26]">
                <HTMLIcon />
            </ToolContainer>
        </div>
    )
}
export default Tools
