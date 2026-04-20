"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { replayViewport } from "@/components/motion";

const spring = { type: "spring" as const, stiffness: 82, damping: 16 };

export default function CTA() {
  return (
    <section
      className="cta-section"
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="cpage-ready-outer">
        <div
          className="cpage-ready-container"
          style={{ position: "relative", width: "1266px", height: "474px", borderRadius: "32px" }}
        >
          <motion.div
            className="cpage-ready-yellow-bg"
            style={{
              position: "absolute",
              left: "0",
              top: "45px",
              width: "100%",
              height: "385px",
              backgroundColor: "#FFB61E",
              borderRadius: "32px",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={replayViewport}
            transition={spring}
          />

          <motion.div
            className="cpage-ready-img"
            style={{
              position: "absolute",
              width: "490px",
              height: "474px",
              left: "752px",
              top: "0px",
              backgroundImage: "url(/start_journey.png)",
              backgroundSize: "cover",
              borderRadius: "32px",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, x: 56, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={replayViewport}
            transition={{ ...spring, delay: 0.1 }}
          />

          <motion.div
            className="cpage-ready-content"
            style={{
              position: "absolute",
              width: "679px",
              height: "252px",
              left: "40px",
              top: "calc(50% - 252px/2 + 0.5px)",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={replayViewport}
            transition={{ ...spring, delay: 0.05 }}
          >
            <h2
              className="cpage-ready-title"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "60px",
                color: "#2E2E2E",
              }}
            >
              Ready to Start Your Journey?
            </h2>
            <p
              className="cpage-ready-desc"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#2E2E2E",
              }}
            >
              Take the first step towards building your future with structured learning, expert guidance, and real career opportunities.
            </p>

            <div className="cpage-ready-btn-row" style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
              <Link href="/courses">
                <button
                  className="cpage-ready-btn cpage-ready-btn-explore"
                  type="button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px 24px",
                    width: "236px",
                    height: "61px",
                    backgroundColor: "#2C4B82",
                    border: "1px solid #FFFFFF",
                    borderRadius: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  Explore Courses
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="cpage-ready-btn cpage-ready-btn-enquire"
                  type="button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px 24px",
                    width: "193px",
                    height: "61px",
                    backgroundColor: "#2C4B82",
                    border: "1px solid #FFFFFF",
                    borderRadius: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  Enquire Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
