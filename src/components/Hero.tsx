"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1] as const;

/** Calmer than site-wide `replayViewport` — fewer in/out toggles while scrolling over the hero. */
const heroStaggerViewport = {
  once: false,
  amount: 0.48,
  margin: "0px",
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 78, damping: 15 },
  },
};

/** Person banner: slower rise from below (replays with viewport). */
const heroMainImageReveal = {
  hidden: { opacity: 0, y: 168, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 42,
      damping: 22,
      mass: 1.05,
    },
  },
};

const circles = [
  { delay: 0.2, width: 863, top: 507, bg: "#0A2A66", className: "hero-circle-3" },
  { delay: 0.4, width: 805, top: 536, bg: "#082458", className: "hero-circle-4" },
  { delay: 0.6, width: 753, top: 562, bg: "#061C45", className: "hero-circle-5" },
  { delay: 0.8, width: 686, top: 595, bg: "#06193B", className: "hero-circle-2" },
  { delay: 1.0, width: 622, top: 627, bg: "#041431", className: "hero-circle-1" },
];

const pills: {
  text: string;
  left?: string;
  top: string;
  right?: string;
  className: string;
  floatDelay: string;
}[] = [
  { text: "Beginner to Advanced (A1–B2)", left: "163px", top: "93px", className: "hero-pill-advanced", floatDelay: "0s" },
  { text: "Flexible Batch Timings", top: "93px", right: "50px", className: "hero-pill-batch", floatDelay: "0.45s" },
  { text: "Visa Support Assistance", top: "255px", right: "-50px", className: "hero-pill-visa", floatDelay: "0.9s" },
  { text: "German Job Guidance", top: "425px", right: "20px", className: "hero-pill-job", floatDelay: "1.35s" },
  { text: "100% Practical Learning", left: "106px", top: "255px", className: "hero-pill-practical", floatDelay: "1.8s" },
  { text: "experienced Trainers", left: "97px", top: "425px", className: "hero-pill-trainers", floatDelay: "2.25s" },
];

export default function Hero() {
  return (
    <section
      className="hero-section-root"
      style={{
        position: "relative",
        width: "100%",
        marginTop: "120px",
        backgroundColor: "#061B42",
        /* Do not set overflow-x: hidden here — same quirk as body: it can make this
           section the scroll container and “eat” the first wheel gesture over the hero. */
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {circles.map((c) => (
        <motion.div
          key={c.className}
          className={`hero-circle ${c.className}`}
          style={{
            position: "absolute",
            width: `${c.width}px`,
            height: `${c.width}px`,
            left: `calc(50% - ${c.width}px/2)`,
            top: `${c.top}px`,
            background: c.bg,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          initial={{ scale: 0.35, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          /* Circles: animate once only — replayViewport on 5 large layers caused IO + style churn while scrolling the hero. */
          viewport={{ once: true, amount: 0.12 }}
          transition={{ delay: c.delay * 0.5, duration: 1.35, ease }}
        />
      ))}

      <div
        className="hero-decorative-blur"
        style={{
          position: "absolute",
          width: "215px",
          height: "215px",
          left: "1201px",
          top: "844px",
          background: "#0256EB",
          filter: "blur(200px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-decorative-blur"
        style={{
          position: "absolute",
          width: "215px",
          height: "215px",
          left: "1122px",
          top: "-54px",
          background: "#0256EB",
          filter: "blur(200px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-decorative-blur"
        style={{
          position: "absolute",
          width: "215px",
          height: "215px",
          left: "73px",
          top: "291px",
          background: "#0256EB",
          filter: "blur(200px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="hero-content-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          marginTop: "80px",
          zIndex: 10,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={heroStaggerViewport}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.11, delayChildren: 0.04 },
          },
        }}
      >
        <motion.div
          className="hero-content-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "100%",
          }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h3
            className="hero-subtitle"
            variants={heroItem}
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "29px",
              textAlign: "center",
              color: "#EDEDED",
            }}
          >
            German Language Training in Chennai
          </motion.h3>
          <motion.h1
            className="hero-title"
            variants={heroItem}
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "60px",
              lineHeight: "70px",
              textAlign: "center",
              color: "#FFFFFF",
              width: "100%",
            }}
          >
            Build Your <span style={{ color: "#FFB61E" }}>Career in Germany</span> with <br />
            German Language Training
          </motion.h1>
          <motion.p
            className="hero-subtitle hero-description"
            variants={heroItem}
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "29px",
              textAlign: "center",
              color: "#EDEDED",
            }}
          >
            Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-btn-row"
          style={{ display: "flex", gap: "24px" }}
          variants={heroItem}
        >
          <Link href="/courses">
            <button
              type="button"
              className="btn-yellow"
              style={{ width: "236px", height: "61px" }}
            >
              Explore Courses
            </button>
          </Link>
          <Link href="/contact">
            <button type="button" className="btn-yellow" style={{ width: "193px", height: "61px" }}>
              Enquire Now
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-wrapper"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          marginTop: "50px",
          height: "714px",
          zIndex: 10,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={heroStaggerViewport}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.12 },
          },
        }}
      >
        <div className="hero-mobile-ellipses" aria-hidden="true">
          <div className="hero-mobile-ellipse hero-mobile-ellipse--4" />
          <div className="hero-mobile-ellipse hero-mobile-ellipse--5" />
          <div className="hero-mobile-ellipse hero-mobile-ellipse--2" />
          <div className="hero-mobile-ellipse hero-mobile-ellipse--1" />
        </div>
        <motion.div
          className="hero-main-image"
          variants={heroMainImageReveal}
          style={{
            position: "absolute",
            width: "520px",
            height: "714px",
            left: "calc(50% - 260px)",
            backgroundImage: "url(/hero-student.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "24px",
          }}
        />

        {pills.map((p) => (
          <motion.div
            key={p.className}
            className={`hero-pill ${p.className}`}
            variants={heroItem}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              left: p.left ?? "auto",
              right: p.right ?? "auto",
              top: p.top,
              zIndex: 11,
            }}
          >
            <span className="hero-pill-float-wrap" style={{ animationDelay: p.floatDelay }}>
              <span
                className="hero-pill-text"
                style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "24px", color: "#EDEDED" }}
              >
                {p.text}
              </span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
