"use client";

import { motion } from "motion/react";

export const FadeIn = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    viewport = { once: true, margin: "-50px" },
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    viewport?: {
        once?: boolean;
        margin?: string;
        amount?: number | "some" | "all";
    };
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
