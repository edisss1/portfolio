interface ProjectImageProps {
    image: string
}

const ProjectImage = ({ image }: ProjectImageProps) => {
    return (
        <img
            src={image}
            className="aspect-[8/5] max-w-[400px] object-cover rounded-lg w-full "
        />
    )
}
export default ProjectImage
