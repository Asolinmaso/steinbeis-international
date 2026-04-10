"use client";
import React from 'react';

const cards = [
  {
    title: "Certified Trainers",
    desc: "Learn from certified German language experts",
    color: "#2C4B82",
    rotation: "-6.91deg",
    mt: "50px"
  },
  {
    title: "Practical Learning",
    desc: "Interactive sessions focused on real-life communication",
    color: "#FFB61E",
    rotation: "14.26deg",
    mt: "-20px"
  },
  {
    title: "Career Support",
    desc: "Guidance for exams, jobs, and opportunities",
    color: "#25CAD8",
    rotation: "-10.25deg",
    mt: "80px"
  },
  {
    title: "Flexible Programs",
    desc: "Courses designed to fit your schedule and goals",
    color: "#FA4516",
    rotation: "22.82deg",
    mt: "-40px"
  }
];

export default function Features() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '800px',
      backgroundColor: '#061B42',
      padding: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Decorative dashed line */}
      <div style={{
        position: 'absolute',
        width: '1434px', height: '396px',
        left: '4px', top: '270px',
        border: '4px dashed rgba(255,255,255,0.2)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      {/* Blur Ellipses */}
      <div style={{
        position: 'absolute',
        width: '215px', height: '215px',
        right: '100px', top: '34px',
        background: '#0256EB', filter: 'blur(175px)', borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        width: '215px', height: '215px',
        left: '-56px', bottom: '100px',
        background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        <h2 style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
          color: '#FFFFFF', textAlign: 'center', marginBottom: '24px'
        }}>
          What Sets Us Apart
        </h2>
        <p style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
          lineHeight: '32px', color: '#FFFFFF', textAlign: 'center', maxWidth: '809px'
        }}>
          A learning experience designed to go beyond basics, focused on practical skills, expert guidance, and real career outcomes.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '100px',
        zIndex: 10,
        flexWrap: 'wrap'
      }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            width: '280px', height: '330px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.25)',
            borderRadius: '32px',
            padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '24px',
            transform: `rotate(${card.rotation})`,
            marginTop: card.mt,
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
             e.currentTarget.style.transform = `rotate(0deg) translateY(-10px) scale(1.05)`;
          }}
          onMouseLeave={(e) => {
             e.currentTarget.style.transform = `rotate(${card.rotation})`;
          }}
          >
            <div style={{
              width: '60px', height: '60px',
              backgroundColor: card.color,
              borderRadius: '60px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ width: '25px', height: '25px', backgroundColor: '#FFF', borderRadius: '5px' }} />
            </div>
            <h3 style={{
              fontFamily: 'Inter', fontWeight: 600, fontSize: '32px',
              lineHeight: '39px', color: card.color
            }}>
              {card.title}
            </h3>
            <p style={{
              fontFamily: 'Inter', fontWeight: 500, fontSize: '24px',
              lineHeight: '32px', color: '#2E2E2E'
            }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
