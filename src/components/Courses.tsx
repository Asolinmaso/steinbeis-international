"use client";
import React from 'react';
import Link from 'next/link';

const courses = [
  {
    levelText1: "German A1",
    levelText2: "Beginner Level",
    desc: "Learn basic words and phrases to communicate in everyday situations.",
    img: "/learning_journey_1.png"
  },
  {
    levelText1: "German A2",
    levelText2: "Elementary Level",
    desc: "Build confidence by using common sentences in everyday conversations.",
    img: "/learning_journey_2.png"
  },
  {
    levelText1: "German B1",
    levelText2: "Intermediate Level",
    desc: "Manage real-life conversations with clarity and better understanding.",
    img: "/learning_journey_3.png"
  },
  {
    levelText1: "German B2",
    levelText2: "Upper Intermediate Level",
    desc: "Improve fluency and understanding for academic and professional communication.",
    img: "/learning_journey_1.png"
  }
];

export default function Courses() {
  return (
    <section className="courses-section" id="courses" style={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#051636',
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Decorative Wavy Dotted Line */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '300px', height: '300px',
        borderRight: '2px dotted rgba(255,255,255,0.4)',
        borderBottom: '2px dotted rgba(255,255,255,0.4)',
        borderBottomRightRadius: '150px',
        opacity: 0.8, zIndex: 0, transform: 'translate(-50%, -50%)'
      }} />
      <div style={{
        position: 'absolute', top: '150px', left: '150px',
        width: '300px', height: '300px',
        borderLeft: '2px dotted rgba(255,255,255,0.4)',
        borderTop: '2px dotted rgba(255,255,255,0.4)',
        borderTopLeftRadius: '150px',
        opacity: 0.8, zIndex: 0, transform: 'translate(-50%, -50%)'
      }} />

      <div className="courses-inner" style={{
        zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        width: '100%', maxWidth: '1240px', padding: '0 20px'
      }}>
        <h2 className="courses-title" style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
          color: '#FFFFFF', textAlign: 'center', marginBottom: '20px'
        }}>
          Start Your German Learning Journey
        </h2>

        <p className="courses-desc" style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '22px',
          color: '#FFFFFF', textAlign: 'center', maxWidth: '800px',
          marginBottom: '60px', lineHeight: '30px'
        }}>
          Build strong language skills from A1 to B2 with practical speaking, easy grammar, and step-by-step guidance.
        </p>

        {/* Carousel Container */}
        <div style={{ width: '100%', overflow: 'hidden', paddingBottom: '20px' }}>
          <div className="courses-marquee-container">
            {[...courses, ...courses].map((course, i) => (
              <div key={i} className="courses-carousel-card" style={{
                display: 'flex', flexDirection: 'column',
                padding: '20px', gap: '20px',
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
                {/* Card Image */}
                <div style={{
                  width: '100%', height: '220px',
                  backgroundImage: `url(${course.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px'
                }} />

                {/* Card Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '10px' }}>
                  <h3 style={{
                    fontFamily: 'Inter', fontWeight: 700, fontSize: '28px',
                    color: '#2E2E2E', lineHeight: '1.2', margin: 0
                  }}>
                    {course.levelText1} <br/> {course.levelText2}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter', fontWeight: 400, fontSize: '20px',
                    color: '#4B5563', lineHeight: '28px', margin: 0
                  }}>
                    {course.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/courses">
          <button className="btn-yellow" style={{ marginTop: '50px' }}>
            Explore Details
          </button>
        </Link>
      </div>
    </section>
  );
}
