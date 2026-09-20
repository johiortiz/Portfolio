import type { RefObject } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import portrait from "@/assets/images/portrait.png";

type FragmentProps = {
  heroRef: RefObject<HTMLElement | null>;
  clipPath: string;
  x: number;
  y: number;
  rotate: number;
  delay?: number;
};

function PortraitFragment({
  heroRef,
  clipPath,
  x,
  y,
  rotate,
  delay = 0,
}: FragmentProps) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const start = Math.min(delay, 0.85);
  const end = Math.min(delay + 0.55, 1);

  const fragmentX = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0, 0, shouldReduceMotion ? 0 : x, shouldReduceMotion ? 0 : x],
  );

  const fragmentY = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0, 0, shouldReduceMotion ? 0 : y, shouldReduceMotion ? 0 : y],
  );

  const fragmentRotate = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0, 0, shouldReduceMotion ? 0 : rotate, shouldReduceMotion ? 0 : rotate],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, shouldReduceMotion ? 1 : 0],
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        clipPath,
        opacity,
        rotate: fragmentRotate,
        x: fragmentX,
        y: fragmentY,
      }}
    >
      <img
        src={portrait}
        alt=""
        className="h-full w-full object-cover mix-blend-screen contrast-125 grayscale"
      />
    </motion.div>
  );
}

type BrokenPortraitProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function BrokenPortrait({ heroRef }: BrokenPortraitProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-[-24%] z-10 aspect-[1080/1350] w-[112%] sm:right-[-12%] sm:w-[82%] lg:right-[-4%] lg:w-[57%] xl:w-[52%]"
    >
      <PortraitFragment
        heroRef={heroRef}
        clipPath="polygon(0 0, 48% 0, 42% 52%, 0 58%)"
        x={-130}
        y={-90}
        rotate={-12}
      />

      <PortraitFragment
        heroRef={heroRef}
        clipPath="polygon(48% 0, 100% 0, 100% 46%, 55% 55%, 42% 52%)"
        x={160}
        y={-120}
        rotate={14}
        delay={0.06}
      />

      <PortraitFragment
        heroRef={heroRef}
        clipPath="polygon(0 58%, 42% 52%, 55% 55%, 48% 100%, 0 100%)"
        x={-180}
        y={140}
        rotate={-16}
        delay={0.12}
      />

      <PortraitFragment
        heroRef={heroRef}
        clipPath="polygon(55% 55%, 100% 46%, 100% 100%, 48% 100%)"
        x={190}
        y={160}
        rotate={18}
        delay={0.18}
      />
    </div>
  );
}