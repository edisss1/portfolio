import CallToAction from "./components/organisms/CallToAction"
import ToolsDisplay from "./components/organisms/ToolsDisplay"
import NavBar from "./components/organisms/NavBar"
import Work from "./components/organisms/Work"
import ContactForm from "./components/organisms/ContactForm"
import Footer from "./components/organisms/Footer"

const Home = () => {
    return (
        <>
            <NavBar />
            <CallToAction />
            <ToolsDisplay />
            <Work />
            <ContactForm />
            <Footer />
        </>
    )
}
export default Home
