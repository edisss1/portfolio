import { useRef } from "react"
import { Children } from "../../types/Children"
import { motion, useInView } from "framer-motion"

const Header = ({ children }: Children) => {
    const headerRef = useRef<HTMLHeadingElement | null>(null)
    const inView = useInView(headerRef, { once: true })

    return (
        <motion.h3
            ref={headerRef}
            initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
            animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-[clamp(1.5rem,10vw,2.25rem)] font-bold"
        >
            {children}
        </motion.h3>
    )
}
export default Header
