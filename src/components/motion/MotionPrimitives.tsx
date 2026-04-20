"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type SVGMotionProps,
  type Variants,
} from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/** Replay when the section enters the viewport (including initial paint when in view). */
export const replayViewport = {
  once: false,
  /** Slightly higher threshold + calmer root margin = less in/out flicker at scroll edges (smoother wheel). */
  amount: 0.32,
  margin: "0px 0px 0px 0px",
} as const;

const easePremium = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  scale = 0.96,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number; scale?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children as ReactNode}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={replayViewport}
      transition={{ duration: 0.75, delay, ease: easePremium }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealX({
  children,
  className,
  delay = 0,
  x = -48,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; x?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children as ReactNode}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={replayViewport}
      transition={{ type: "spring", stiffness: 88, damping: 18, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealScale({
  children,
  className,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children as ReactNode}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={replayViewport}
      transition={{ type: "spring", stiffness: 90, damping: 17, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    rotateX: -12,
    scale: 0.92,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 95, damping: 16 },
  },
};

export function StaggerList({
  children,
  className,
  stagger = 0.11,
  style,
  ...props
}: HTMLMotionProps<"div"> & { stagger?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} style={style as CSSProperties}>{children as ReactNode}</div>;
  return (
    <motion.div
      className={className}
      style={{ perspective: 1400, ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={replayViewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children as ReactNode}</div>;
  return (
    <motion.div className={className} variants={staggerItemVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerLi({
  children,
  className,
  ...props
}: HTMLMotionProps<"li">) {
  const reduce = useReducedMotion();
  if (reduce) return <li className={className}>{children as ReactNode}</li>;
  return (
    <motion.li className={className} variants={staggerItemVariants} {...props}>
      {children}
    </motion.li>
  );
}

export const featureListVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

export const featureCardVariants: Variants = {
  hidden: (rotateDeg: number) => ({
    opacity: 0,
    y: 72,
    scale: 0.82,
    rotate: rotateDeg,
  }),
  visible: (rotateDeg: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: rotateDeg,
    transition: { type: "spring", stiffness: 72, damping: 13 },
  }),
};

export function MotionFeatureCard({
  children,
  className,
  rotate,
  marginTop,
  style,
  danceDelay = 0,
  ...props
}: HTMLMotionProps<"div"> & { rotate: number; marginTop: string; danceDelay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div
        className={className}
        style={
          {
            ...(style as CSSProperties),
            marginTop,
            transform: `rotate(${rotate}deg)`,
          } as CSSProperties
        }
      >
        {children as ReactNode}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      custom={rotate}
      variants={featureCardVariants}
      style={{ marginTop, transformOrigin: "center center", ...style }}
      whileHover={{
        rotate: 0,
        y: -12,
        scale: 1.06,
        boxShadow: "0px 24px 48px rgba(0,0,0,0.28)",
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }}
      {...props}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          height: "100%",
          flex: 1,
          minHeight: 0,
          transformOrigin: "center center",
        }}
        animate={{
          rotate: [0, 5.5, -4.5, 4, -3.5, 3, -2, 0],
          y: [0, -8, 6, -7, 5, -5, 4, 0],
          x: [0, 4, -4, 3, -3, 2, -2, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: danceDelay,
        }}
      >
        {children as ReactNode}
      </motion.div>
    </motion.div>
  );
}

/** SVG path draw — replays on viewport. Dashed/dotted strokes must not use `pathLength` (it overrides dash arrays and looks solid). */
export function MotionDrawPath({
  d,
  stroke,
  strokeWidth,
  strokeDasharray,
  ...rest
}: Omit<SVGMotionProps<SVGPathElement>, "d" | "stroke" | "strokeWidth"> & {
  d: string;
  stroke: string;
  strokeWidth: number;
  strokeDasharray?: string;
}) {
  const reduce = useReducedMotion();
  const hasDash = Boolean(strokeDasharray?.trim());

  if (reduce) {
    return (
      <path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill="none"
      />
    );
  }

  if (hasDash) {
    return (
      <motion.path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={replayViewport}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        {...rest}
      />
    );
  }

  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={replayViewport}
      transition={{
        pathLength: { duration: 2.1, ease: [0.45, 0, 0.55, 1] },
        opacity: { duration: 0.35 },
      }}
      {...rest}
    />
  );
}

export { motion };
