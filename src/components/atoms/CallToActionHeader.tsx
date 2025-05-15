import { Children } from "../../types/Children"
import { motion } from "framer-motion"

const CallToActionHeader = ({ children }: Children) => {
    return (
        <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2rem,4.5vw,3rem)] font-bold"
        >
            {children}
        </motion.h1>
    )
}
export default CallToActionHeader
