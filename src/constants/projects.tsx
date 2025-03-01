import { ProjectCardProps } from "../types/ProjectCardProps"
import ArtiflareIcon from "../assets/ArtiflareIcon.svg"
import FurniroIcon from "../assets/FurniroLogo.png"
import ArtiflareImage from "../assets/ArtiflareImage.webp"
import FurniroImage from "../assets/FurniroImage.webp"

export const projects: ProjectCardProps[] = [
    {
        id: 1,
        description:
            "A digital canvas for teams to draw, visualize and brainstorm ideas",
        icon: ArtiflareIcon,
        image: ArtiflareImage,
        isFeatured: true,
        link: "http://edisss1.github.io/artiflare",
        title: "Artiflare"
    },
    {
        id: 2,
        description: "A marketplace for furniture",
        icon: FurniroIcon,
        image: FurniroImage,
        isFeatured: false,
        link: "https://edisss1.github.io/Furniro/",
        title: "Furniro"
    }
]
