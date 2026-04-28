"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, replayViewport } from "@/components/motion";

const advantages = [
  {
    text: "Mock Exams & Real-world Practice",
    bg: "#EAF2FF",
    color: "#2C4B82",
    shadow: "rgba(44, 75, 130, 0.4)",
    top: "-30px",
    left: "885px",
    right: "unset",
    width: "495px",
    icon: <Image src="/exam.png" alt="Exams" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />,
  },
  {
    text: "Affordable Fee Structure",
    bg: "#FFF7E5",
    color: "#FFB61E",
    shadow: "rgba(255, 182, 30, 0.4)",
    top: "130px",
    left: "560px",
    width: "381px",
    icon: <Image src="/Group.png" alt="Fees" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />,
  },
  {
    text: "Flexible Learning Timings",
    bg: "#FFECE7",
    color: "#FA4516",
    shadow: "rgba(250, 69, 22, 0.4)",
    top: "130px",
    left: "975px",
    width: "405px",
    icon: <Image src="/time.png" alt="time" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />,
  },
  {
    text: "Hostel Accommodation",
    bg: "#EEFEFF",
    color: "#25CAD8",
    shadow: "rgba(37, 202, 216, 0.4)",
    top: "258px",
    left: "767px",
    width: "366px",
    icon: <Image src="/hostel.png" alt="Hostel" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />,
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
          minHeight: "440px",
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
                  fontSize: "20px",
                  fontWeight: 500,
                  borderRadius: "16px",
                  backgroundColor: "#2C4B82",
                  border: "none",
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

      <style jsx>{`
        @media (max-width: 1280px) {
          .advantage-pills-wrapper {
            position: relative !important;
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 20px !important;
            margin-top: 60px !important;
            height: auto !important;
            padding: 0 40px !important;
            justify-content: center !important;
            pointer-events: auto !important;
            top: unset !important;
            left: unset !important;
          }
          .advantage-pill {
            position: static !important;
            width: 100% !important;
            max-width: 500px !important;
          }
          .advantage-container {
            padding: 0 40px !important;
            align-items: center !important;
            text-align: center !important;
            min-height: auto !important;
          }
          .advantage-content-left {
            max-width: 100% !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .advantage-content-left p {
            max-width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .advantage-container {
            padding: 0 20px !important;
          }
          .advantage-pill {
            height: auto !important;
            padding: 16px !important;
          }
          .advantage-pill span {
            font-size: 18px !important;
            line-height: normal !important;
          }
        }
      `}</style>
    </section >
  );
}
