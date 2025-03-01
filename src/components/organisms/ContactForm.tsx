import { useRef, useState } from "react"
import Container from "../atoms/Container"
import FormInput from "../atoms/FormInput"
import Header from "../atoms/Header"
import TextArea from "../atoms/TextArea"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formRef.current && email && name && message) {
            emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_PUBLIC_KEY }
            )

            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return (
        <Container id="form">
            <Header>Contact</Header>
            <form
                onSubmit={sendEmail}
                ref={formRef}
                className="w-full flex flex-col  items-center  "
            >
                <div className="w-full flex flex-col gap-4 items-center">
                    <FormInput
                        name="user_name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="your name"
                        type="text"
                    />
                    <FormInput
                        name="user_email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="your email"
                        type="email"
                    />
                    <TextArea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        label="your message"
                    />
                </div>
                <input
                    disabled={!name || !email || !message}
                    className="px-6 py-3 bg-accent rounded-lg hover:opacity-80 transition-opacity mt-9 disabled:opacity-40 disabled:cursor-not-allowed"
                    type="submit"
                    value="Send message"
                />
            </form>
        </Container>
    )
}
export default ContactForm
