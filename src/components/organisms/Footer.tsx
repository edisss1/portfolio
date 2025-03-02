import GitHubIcon from "../../assets/GitHubIcon"
import Anchor from "../atoms/Anchor"

const Footer = () => {
    return (
        <footer className="flex items-center flex-wrap gap-4 justify-between">
            <Anchor target="_blank" href="mailto:sergeysudakovworks@gmail.com">
                sergeysudakovworks@gmail.com
            </Anchor>
            <a
                className="hover:shadow-accent shadow-2xl transition-all"
                href="https://github.com/edisss1"
                target="_blank"
            >
                <GitHubIcon />
            </a>
        </footer>
    )
}
export default Footer
