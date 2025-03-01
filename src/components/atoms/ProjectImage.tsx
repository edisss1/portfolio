interface ProjectImageProps {
    image: string
}

const ProjectImage = ({ image }: ProjectImageProps) => {
    return <img src={image} className="aspect-[8/5] " />
}
export default ProjectImage
