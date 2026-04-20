"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, replayViewport } from "@/components/motion";

const advantages = [
  {
    text: "Mock Exams & Real-world Practice",
    bg: "#EAF2FF",
    color: "#2C4B82",
    shadow: "rgba(44, 75, 130, 0.5)",
    top: "0px",
    left: "auto",
    right: "0px",
    width: "496px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="transparent"/>
        <path d="M22 10H10C8.89543 10 8 10.8954 8 12V22C8 23.1046 8.89543 24 10 24H22C23.1046 24 24 23.1046 24 22V12C24 10.8954 23.1046 10 22 10Z" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14H20M12 18H20M12 21H16" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 14L23 15L24 14" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    text: "Affordable Fee Structure",
    bg: "#FFF7E5",
    color: "#FFB61E",
    shadow: "rgba(255, 182, 30, 0.5)",
    top: "130px",
    left: "580px",
    width: "381px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="#FFB61E" strokeWidth="2"/>
        <path d="M11 12H21M11 16H21M18 10L13 22" stroke="#FFB61E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: "Study Materials Included",
    bg: "#EEFEFF",
    color: "#25CAD8",
    shadow: "rgba(37, 202, 216, 0.5)",
    top: "130px",
    left: "980px",
    width: "394px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24S10 22 16 22S24 24 24 24V10S22 8 16 8S8 10 8 10V24Z" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8V22" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: "Hostel Accommodation",
    bg: "#EEFEFF",
    color: "#25CAD8",
    shadow: "rgba(37, 202, 216, 0.5)",
    top: "258px",
    left: "600px",
    width: "366px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26V10L16 6L26 10V26M6 16H26M11 16V26M16 16V26M21 16V26" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: "Flexible Learning Timings",
    bg: "#FFECE7",
    color: "#FA4516",
    shadow: "rgba(250, 69, 22, 0.5)",
    top: "258px",
    left: "985px",
    width: "390px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#FA4516" strokeWidth="2"/>
        <path d="M16 10V16L20 20" stroke="#FA4516" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const pillVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.88, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 85, damping: 14 },
  },
};

export default function Advantage() {
  return (
    <section
      className="advantage-root"
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        overflowX: "hidden",
        overflowY: "visible",
        padding: "120px 0",
      }}
    >
      <div
        className="advantage-container"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 100px",
          position: "relative",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="advantage-content-left"
          style={{
            width: "100%",
            maxWidth: "592px",
            zIndex: 5,
          }}
        >
          <Reveal>
            <h2
              className="advantage-title"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "58px",
                color: "#2E2E2E",
                marginBottom: "32px",
              }}
            >
              The <span style={{ color: "#FA4516" }}>Steinbeis</span> Advantage
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              className="advantage-desc"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#2E2E2E",
                maxWidth: "397px",
                marginBottom: "40px",
              }}
            >
              A practical learning experience designed to help you master German, clear exams, and unlock global opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Link href="/contact">
              <button
                className="btn-navy"
                style={{
                  width: "193px",
                  height: "61px",
                  fontSize: "24px",
                  fontWeight: 500,
                  borderRadius: "16px",
                  backgroundColor: "#2C4B82",
                  border: "1px solid #FFFFFF",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Enquire Now
              </button>
            </Link>
          </Reveal>
        </div>

        <motion.div
          className="advantage-pills-wrapper"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            perspective: 1200,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.11, delayChildren: 0.12 },
            },
          }}
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="advantage-pill"
              variants={pillVariants}
              style={{
                position: "absolute",
                top: adv.top,
                left: adv.left === "auto" ? "unset" : adv.left,
                right: adv.right === "auto" ? "unset" : adv.right,
                width: adv.width,
                height: "88px",
                backgroundColor: adv.bg,
                border: `1px solid ${adv.color}`,
                boxShadow: `0px 0px 24px ${adv.shadow}`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                gap: "16px",
                pointerEvents: "auto",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: `0px 12px 36px ${adv.shadow}`,
                transition: { type: "spring", stiffness: 400, damping: 22 },
              }}
            >
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {adv.icon}
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "29px",
                  color: adv.color,
                  textAlign: "left",
                }}
              >
                {adv.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
