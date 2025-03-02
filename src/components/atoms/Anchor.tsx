import { Children } from "../../types/Children"

interface AnchorProps extends Children {
    href: string
    target?: string
}

const Anchor = ({ children, href, target }: AnchorProps) => {
    return (
        <a
            className="hover:text-accent transition-colors duration-200"
            href={href}
            target={target}
        >
            {children}
        </a>
    )
}
export default Anchor
