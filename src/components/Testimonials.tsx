"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, replayViewport, staggerItemVariants } from "@/components/motion";
import Image from "next/image";
import "./Testimonials.css";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      {/* Desktop Blur Backgrounds */}
      {!isMobile && (
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
      )}

      <Reveal>
        <h2
          className="testimonials-title"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: isMobile ? "32px" : "48px",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "24px",
            zIndex: 10,
          }}
        >
          {isMobile ? (
            "From Learning to Living in Germany"
          ) : (
            <>
              From <span style={{ color: "#FFB61E" }}>Learning</span> to{" "}
              <span style={{ color: "#FFB61E" }}>Living in Germany</span>
            </>
          )}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p
          className="testimonials-subtitle"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: isMobile ? "16px" : "24px",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: isMobile ? "280px" : "586px",
            marginBottom: isMobile ? "40px" : "80px",
            zIndex: 10,
          }}
        >
          Discover how our students transformed their lives through German language learning.
        </p>
      </Reveal>

      {!isMobile ? (
        /* DESKTOP VIEW - UNCHANGED */
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
                Student <br /> <span style={{ color: "#FA4516" }}>Testimonial</span>
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
      ) : (
        /* MOBILE VIEW - NEW DESIGN */
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="testimonial-card"
              style={{
                position: "relative",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Mobile Quote Image */}
              <div
                style={{
                  position: "absolute",
                  right: "-30px",
                  top: "-35px",
                  width: "120px",
                  height: "120px",
                  zIndex: 20,
                }}
              >
                <Image
                  src="/comma.png"
                  alt="quote"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <h3
                className="testimonial-card-title"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#2E2E2E",
                  marginBottom: "8px",
                }}
              >
                Student <br />
                <span style={{ color: "#FA4516" }}>Testimonial</span>
              </h3>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#FA4516", marginBottom: "20px" }} />

              <p
                className="testimonial-card-text"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2E2E2E",
                  marginBottom: "24px",
                }}
              >
                {testimonials[currentIndex].text}
              </p>

              <div style={{ marginTop: "auto" }}>
                <h4
                  className="testimonial-card-name"
                  style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "18px", color: "#2E2E2E", marginBottom: "4px" }}
                >
                  {testimonials[currentIndex].name}
                </h4>
                <span className="testimonial-card-location" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "14px", color: "#666666" }}>
                  {testimonials[currentIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="testimonials-nav">
            <button className="nav-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="nav-btn" onClick={nextTestimonial} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
