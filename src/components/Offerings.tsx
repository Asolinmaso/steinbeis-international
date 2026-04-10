import React from 'react';

export default function Offerings() {
  return (
    <section style={{
      padding: '100px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px'
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
          color: '#2E2E2E'
        }}>
          Our Key <span style={{ color: '#FA4516' }}>Offerings</span>
        </h2>
        <p style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
          lineHeight: '32px', color: '#2E2E2E', maxWidth: '557px'
        }}>
          Comprehensive programs designed to support your learning journey, from classroom training to job placement, and visa assistance.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
          {[
            { title: "German Language Classes" },
            { title: "Specialized Training" },
            { title: "Goethe & TELC Exam Preparation" },
            { title: "Placement Assistance" }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50px',
                backgroundColor: '#25CAD8', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', color: '#2E2E2E'
              }}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute',
          width: '100%', height: '100%',
          background: '#FFF0D2',
          borderRadius: '50%',
          transform: 'scale(0.8)',
          zIndex: 0
        }} />
        <div style={{
          width: '500px', height: '500px',
          backgroundImage: 'url(/cta-students.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50% 50% 10% 10% / 40% 40% 20% 20%',
          zIndex: 1
        }} />
      </div>
    </section>
  );
}
