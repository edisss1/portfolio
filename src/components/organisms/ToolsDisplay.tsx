import Container from "../atoms/Container"
import Header from "../atoms/Header"
import Tools from "../molecules/Tools"

const ToolsDisplay = () => {
    return (
        <Container>
            <Header key={"tools"}>Tools that I use</Header>
            <Tools />
        </Container>
    )
}
export default ToolsDisplay
