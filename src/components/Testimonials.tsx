"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal, replayViewport, staggerItemVariants } from "@/components/motion";

const testimonials = [
  {
    text: "Learning German up to B1 opened the door for me to pursue my dream of studying Automotive Engineering in Germany. It made my transition smoother and helped me grow both academically and personally.",
    name: "Chandru Cholan",
    location: "Vellore, India · Hochschule Trier",
  },
  {
    text: "Without German, my initial experience in Germany was very difficult. Learning the language made a huge difference in my daily life and opportunities. I highly recommend starting with German before moving.",
    name: "Sisindri Gullapalli",
    location: "Andhra Pradesh, India · Hochschule Trier",
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "800px",
        backgroundColor: "#061B42",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "262px",
          height: "262px",
          left: "-23px",
          top: "480px",
          background: "#0256EB",
          filter: "blur(220px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Reveal>
        <h2
          className="testimonials-title"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "48px",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "24px",
            zIndex: 10,
          }}
        >
          From <span style={{ color: "#FFB61E" }}>Learning</span> to{" "}
          <span style={{ color: "#FFB61E" }}>Living in Germany</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p
          className="testimonials-subtitle"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "24px",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: "586px",
            marginBottom: "80px",
            zIndex: 10,
          }}
        >
          Discover how our students transformed their lives through German language learning.
        </p>
      </Reveal>

      <motion.div
        className="testimonials-cards-row"
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          flexWrap: "wrap",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={replayViewport}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.08 } },
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            variants={staggerItemVariants}
            style={{
              position: "relative",
              width: "599px",
              height: "502px",
              backgroundColor: "#FFFFFF",
              borderRadius: "40px",
              padding: "60px 40px 40px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <svg
              style={{ position: "absolute", right: "-20px", top: "-40px", zIndex: 20 }}
              width="175"
              height="187"
              viewBox="0 0 175 187"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H95C139.183 0 175 35.8172 175 80V187H0V0Z" fill="#FFB61E" />
              <path
                d="M42.9956 105H57.2393C55.8899 110.1 52.1915 117.55 41.7961 120.15L37.9978 121.1V135H42.9956C56.8894 135 67.5347 131.15 74.5316 123.55C83.9775 113.3 83.0279 100.15 82.9779 100V65C82.9779 59.5 78.4799 55 72.9823 55H42.9956C37.498 55 33 59.5 33 65V95C33 100.5 37.498 105 42.9956 105ZM102.969 105H117.213C115.863 110.1 112.165 117.55 101.77 120.15L97.9713 121.1V135H102.969C116.863 135 127.508 131.15 134.505 123.55C143.951 113.3 143.001 100.15 142.951 100V65C142.951 59.5 138.453 55 132.956 55H102.969C97.4715 55 92.9735 59.5 92.9735 65V95C92.9735 100.5 97.4715 105 102.969 105Z"
                fill="black"
              />
            </svg>

            <h3
              className="testimonial-card-title"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "35px",
                color: "#2E2E2E",
                maxWidth: "300px",
                marginBottom: "10px",
              }}
            >
              Student <br /> <span style={{ color: "#FA4516" }}>TESTIMONIAL</span>
            </h3>
            <div style={{ width: "60px", height: "2px", backgroundColor: "#FA4516", marginBottom: "20px" }} />

            <p
              className="testimonial-card-text"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#2E2E2E",
                flex: 1,
                marginTop: "10px",
                zIndex: 2,
              }}
            >
              {t.text}
            </p>

            <div style={{ marginTop: "auto" }}>
              <h4 className="testimonial-card-name" style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "24px", color: "#2E2E2E" }}>
                {t.name}
              </h4>
              <span className="testimonial-card-location" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", color: "#2E2E2E" }}>
                {t.location}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.28}>
        <div className="testimonials-controls" style={{ display: "flex", gap: "40px", marginTop: "60px", zIndex: 10 }}>
          <button
            type="button"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "1px solid #FFFFFF",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#FFF", fontSize: "20px" }}>&larr;</span>
          </button>
          <button
            type="button"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "1px solid #FFFFFF",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#FFF", fontSize: "20px" }}>&rarr;</span>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
