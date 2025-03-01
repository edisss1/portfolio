import GitHubIcon from "../../assets/GitHubIcon"

const Footer = () => {
    return (
        <footer className="flex items-center flex-wrap gap-4 justify-between">
            <a
                className="font-medium"
                href="mailto:sergeysudakovworks@gmail.com"
                target="_blank"
            >
                sergeysudakovworks@gmail.com
            </a>
            <a href="https://github.com/edisss1" target="_blank">
                <GitHubIcon />
            </a>
        </footer>
    )
}
export default Footer
