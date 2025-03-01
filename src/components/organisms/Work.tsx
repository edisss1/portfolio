import Container from "../atoms/Container"
import Header from "../atoms/Header"
import ProjectCard from "../molecules/ProjectCard"
import { projects } from "../../constants/projects"

const Work = () => {
    return (
        <Container id="work">
            <Header>My work</Header>
            <div className="flex flex-col gap-12 ">
                {projects.map((project) => (
                    <ProjectCard
                        description={project.description}
                        icon={project.icon}
                        image={project.image}
                        isFeatured={project.isFeatured}
                        link={project.link}
                        title={project.title}
                    />
                ))}
            </div>
        </Container>
    )
}
export default Work
