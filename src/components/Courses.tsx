"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion';

/** Easier to trigger on narrow viewports; stay visible after first reveal (no opacity reset on scroll-away). */
const coursesInView = {
  once: true,
  amount: 0.08,
  margin: '0px 0px 120px 0px',
} as const;

const courses = [
  {
    levelText1: "German A1",
    levelText2: "Beginner Level",
    desc: "Build a basic understanding of German for everyday communication.",
    img: "/learning_journey_1.png"
  },
  {
    levelText1: "German A2",
    levelText2: "Elementary Level",
    desc: "Expand vocabulary and build confidence in simple interactions.",
    img: "/learning_journey_2.png"
  },
  {
    levelText1: "German B1",
    levelText2: "Intermediate Level",
    desc: "Improve fluency and express yourself clearly in real-life situations.",
    img: "/learning_journey_3.png"
  },
  {
    levelText1: "German B2",
    levelText2: "Upper Intermediate Level",
    desc: "Communicate effectively in professional and academic settings.",
    img: "/learning_journey_4.png"
  }
];

export default function Courses() {
  return (
    <section
      className="courses-section"
      id="courses"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#051636',
        padding: '100px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      {/* Animation Styles */}
      <style>{`
        .courses-marquee-container {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollCourses 20s linear infinite;
          padding-right: 24px;
        }

        .courses-marquee-container:hover {
          animation-play-state: paused;
        }

        @keyframes scrollCourses {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      {/* Decorative Vector 4 */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '250px', height: '500px',
        backgroundImage: 'url("/Vector 4.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6, zIndex: 0
      }} />

      {/* Decorative Vector 5 */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '320px', height: '200px',
        backgroundImage: 'url("/Vector 5.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6, zIndex: 0
      }} />

      <div style={{
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1240px',
        padding: '0 20px',
        marginBottom: '60px'
      }}>
        <Reveal>
          <h2 className="courses-title" style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '32px',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Start Your <span style={{ color: '#FFB61E' }}>German Learning</span> Journey
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="courses-desc" style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '20px',
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '30px'
          }}>
            Build strong language skills from A1 to B2 with practical speaking, easy grammar, and step-by-step guidance.
          </p>
        </Reveal>
      </div>

      {/* Full Width Carousel */}
      <div style={{ width: '100%', overflow: 'hidden', paddingBottom: '20px', zIndex: 10 }}>
        <style>{`
          .courses-marquee-container {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: scrollCourses 30s linear infinite;
            padding-right: 24px;
          }

          .courses-marquee-container:hover {
            animation-play-state: paused;
          }

          @keyframes scrollCourses {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.3333%);
            }
          }
        `}</style>
        <div className="courses-marquee-container">
          {[...courses, ...courses, ...courses].map((course, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '20px',
                minWidth: '380px',
                width: '380px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                flexShrink: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '220px',
                backgroundImage: `url(${course.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px'
              }} />

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#2E2E2E',
                  margin: 0
                }}>
                  {course.levelText1} <br /> {course.levelText2}
                </h3>

                <p style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#4B5563',
                  margin: 0
                }}>
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1240px' }}>
        <Reveal delay={0.22}>
          <Link href="/courses#course-levels">
            <button className="btn-yellow" style={{ marginTop: '50px' }}>
              Explore Details
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}