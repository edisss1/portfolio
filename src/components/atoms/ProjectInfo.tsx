import ExternalLinkIcon from "../../assets/ExternalLinkIcon"

interface ProjectInfoProps {
    isFeatured: boolean
    isWIP: boolean
    icon: string
    title: string
    description: string
    link?: string
}

const ProjectInfo = ({
    isFeatured,
    isWIP,
    icon,
    title,
    description,
    link
}: ProjectInfoProps) => {
    return (
        <div className="flex flex-col max-lg:items-center gap-4 flex-1 w-full">
            <div className="grid gap-3">
                {isFeatured && (
                    <span className="text-sm text-accent">
                        Featured project
                    </span>
                )}
                {isWIP && (
                    <span className="text-sm text-accent">
                        Work In Progress
                    </span>
                )}
                <div className="flex items-center gap-4">
                    <img src={icon} alt="" />
                    <p className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold">
                        {title}
                    </p>
                </div>
            </div>
            <div className="w-full  grid gap-2 place-items-start  py-9 blurred-bg rounded-lg px-3">
                <p className="font-bold">{description}</p>
            </div>
            {link && (
                <a
                    target="_blank"
                    href={link}
                    className="text-accent self-start rounded-full p-2 group hover:bg-accent/70 transition-all"
                >
                    <ExternalLinkIcon />
                </a>
            )}
        </div>
    )
}
export default ProjectInfo
