import { Children } from "../../types/Children"
import { motion } from "framer-motion"

const CallToActionText = ({ children }: Children) => {
    return (
        <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-[600px] text-[clamp(1rem,2.5vw,1.5rem)]"
        >
            {children}
        </motion.p>
    )
}
export default CallToActionText
