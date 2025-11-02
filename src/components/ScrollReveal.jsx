'use client'

import { motion } from 'framer-motion'

export function ScrollReveal({ children, delay = 0, direction = 'up' }) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for smooth feel
            }}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({ children, staggerDelay = 0.1 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: staggerDelay }}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, direction = 'up' }) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    }

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    ...directions[direction]
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }
                }
            }}
        >
            {children}
        </motion.div>
    )
}

