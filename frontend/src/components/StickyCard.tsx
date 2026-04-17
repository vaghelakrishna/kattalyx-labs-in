"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import  { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSpzM_k1-Bt_G8Mnz9wZo-hisocPIna97fA&s",
  },
  {
    title: "Project 2",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSpzM_k1-Bt_G8Mnz9wZo-hisocPIna97fA&s",
  },
  {
    title: "Project 3",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSpzM_k1-Bt_G8Mnz9wZo-hisocPIna97fA&s",
  },
  {
    title: "Project 4",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSpzM_k1-Bt_G8Mnz9wZo-hisocPIna97fA&s",
  },
  {
    title: "Project 5",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSpzM_k1-Bt_G8Mnz9wZo-hisocPIna97fA&s",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-[300px] w-[500px] origin-top flex-col overflow-hidden"
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh]"
      >
      
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
