import BlurredCircle from "../atoms/BlurredCircle"
import CallToActionHeader from "../atoms/CallToActionHeader"
import CallToActionText from "../atoms/CallToActionText"

const CallToAction = () => {
    return (
        <section className="mt-[clamp(2rem,20vh,10.125rem)] flex flex-col gap-9">
            <CallToActionHeader>
                Turning Ideas into Reality with Code.
            </CallToActionHeader>
            <CallToActionText>
                I build scalable, high-performance web applications with React,
                TypeScript, and Redux.
            </CallToActionText>
            <BlurredCircle />
        </section>
    )
}
export default CallToAction
