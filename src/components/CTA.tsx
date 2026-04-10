import React from 'react';

export default function CTA() {
  return (
    <section style={{
      padding: '100px 72px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1266px',
        height: '385px',
        backgroundColor: '#FFB61E',
        borderRadius: '32px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        overflow: 'hidden'
      }}>
        
        {/* Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px', zIndex: 10, maxWidth: '679px' }}>
          <h2 style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', color: '#2E2E2E', lineHeight: '1.1'
          }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#2E2E2E', lineHeight: '32px'
          }}>
            Take the first step towards building your future with structured learning, expert guidance, and real career opportunities.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            <button className="btn-navy" style={{ width: '236px' }}>
              Enroll Now
            </button>
            <button className="btn-navy" style={{ width: '193px' }}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Right Side */}
        <div style={{
          position: 'absolute',
          right: '0', top: '0',
          width: '490px', height: '474px', // Taller than container to bleed out based on design or fill
          backgroundImage: 'url(/cta-students.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '32px 0 0 32px' // Curving inner edge
        }} />

      </div>
    </section>
  );
}
