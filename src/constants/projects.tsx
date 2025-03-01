import { ProjectCardProps } from "../types/ProjectCardProps"
import ArtiflareIcon from "../assets/ArtiflareIcon.svg"
import FurniroIcon from "../assets/FurniroLogo.png"

export const projects: ProjectCardProps[] = [
    {
        id: 1,
        description:
            "A digital canvas for teams to draw, visualize and brainstorm ideas",
        icon: ArtiflareIcon,
        image: "/src/assets/ArtiflareImage.webp",
        isFeatured: true,
        link: "http://edisss1.github.io/artiflare",
        title: "Artiflare"
    },
    {
        id: 2,
        description: "A marketplace for furniture",
        icon: FurniroIcon,
        image: "/src/assets/FurniroImage.webp",
        isFeatured: false,
        link: "https://edisss1.github.io/Furniro/",
        title: "Furniro"
    }
]
