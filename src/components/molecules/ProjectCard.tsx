import { ProjectCardProps } from "../../types/ProjectCardProps"
import ProjectImage from "../atoms/ProjectImage"
import ProjectInfo from "../atoms/ProjectInfo"

const ProjectCard = ({
    description,
    icon,
    image,
    isFeatured,
    link,
    title,
    isWIP
}: ProjectCardProps) => {
    return (
        <div className="flex max-lg:flex-col-reverse  items-center gap-9 w-full max-w-[950px]">
            <ProjectInfo
                isWIP={isWIP}
                description={description}
                icon={icon}
                isFeatured={isFeatured}
                link={link}
                title={title}
            />
            <ProjectImage image={image} />
        </div>
    )
}
export default ProjectCard
