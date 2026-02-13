"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
  start = true,
  staggerDuration = 0.06,
  onComplete,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  start?: boolean;
  staggerDuration?: number;
  onComplete?: () => void;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && start) {
      const totalDuration = wordsArray.length * staggerDuration + duration;

      animate(
        "span",
        {
          opacity: 1,
          transform: "translateY(0px)",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(staggerDuration),
        }
      );

      const timer = setTimeout(() => {
        onComplete?.();
      }, (totalDuration + delay) * 1000); // Add delay to timeout if needed, though delay here seems unused in animate

      return () => clearTimeout(timer);
    }
  }, [isInView, start]);

  return (
    <div className={cn(className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block"
            style={{
              willChange: "opacity, transform",
              transform: "translateY(10px)",
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};