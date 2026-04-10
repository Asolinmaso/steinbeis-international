"use client";
import React from 'react';

const advantages = [
  { text: "A1 to B2 Detailed Brochure", bg: "#FFF7E5", color: "#FFB61E", top: "130px", left: "0px" },
  { text: "Mock Exams & Real-world Practice", bg: "#EAF2FF", color: "#2C4B82", top: "2px", left: "298px" },
  { text: "Study Materials Included", bg: "#EEFEFF", color: "#25CAD8", top: "130px", left: "400px" },
  { text: "Access Demo Class Footage", bg: "#FFECE7", color: "#FA4516", top: "258px", left: "0px" }
];

export default function Advantage() {
  return (
    <section style={{
      padding: '100px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      minHeight: '600px'
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
          color: '#2E2E2E'
        }}>
          The <span style={{ color: '#FA4516' }}>Steinbeis</span> Advantage
        </h2>
        <p style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
          lineHeight: '32px', color: '#2E2E2E', maxWidth: '397px'
        }}>
          A comprehensive guide to help you decide. We provide practical and engaging German language training designed to help students and professionals.
        </p>

        <button className="btn-navy" style={{ width: '193px', marginTop: '20px' }}>
          Enquire Now
        </button>
      </div>

      <div style={{ flex: 2, position: 'relative', height: '400px' }}>
        {advantages.map((adv, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: adv.top, left: adv.left,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px 30px', gap: '15px',
            backgroundColor: adv.bg,
            border: `1px solid ${adv.color}`,
            boxShadow: `0px 0px 24px ${adv.color}80`,
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: adv.color, borderRadius: '4px' }} />
            <span style={{
              fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: adv.color
            }}>
              {adv.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
