import type { RefObject } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

type Piece = {
  clipPath: string;
  x: number;
  y: number;
  rotate: number;
  delay: number;
};

type BrokenWordProps = {
  src: string;
  alt: string;
  heroRef: RefObject<HTMLElement | null>;
  className?: string;
  pieces: readonly Piece[];
};

function WordPiece({
  src,
  heroRef,
  piece,
}: {
  src: string;
  heroRef: RefObject<HTMLElement | null>;
  piece: Piece;
}) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const start = 0.18 + piece.delay;
  const end = Math.min(start + 0.45, 1);

  const x = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0, 0, shouldReduceMotion ? 0 : piece.x, shouldReduceMotion ? 0 : piece.x],
  );

  const y = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0, 0, shouldReduceMotion ? 0 : piece.y, shouldReduceMotion ? 0 : piece.y],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [
      0,
      0,
      shouldReduceMotion ? 0 : piece.rotate,
      shouldReduceMotion ? 0 : piece.rotate,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.62, 0.96, 1],
    [1, 1, shouldReduceMotion ? 1 : 0, shouldReduceMotion ? 1 : 0],
  );

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 will-change-transform"
      style={{
        clipPath: piece.clipPath,
        opacity,
        rotate,
        x,
        y,
      }}
    >
      <img src={src} alt="" className="h-full w-full select-none" draggable="false" />
    </motion.div>
  );
}

export function BrokenWord({
  src,
  alt,
  heroRef,
  className = "",
  pieces,
}: BrokenWordProps) {
  return (
  <div
    aria-hidden="true"
    className={`relative isolate ${className}`}
  >
    {pieces.map((piece, index) => (
      <WordPiece
        key={`${alt}-${index}`}
        src={src}
        heroRef={heroRef}
        piece={piece}
      />
    ))}
  </div>
);
}