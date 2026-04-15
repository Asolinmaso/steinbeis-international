import React from 'react';

export default function CTA() {
  return (
    <section className="cta-section" style={{
      padding: '100px 72px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className="cta-inner" style={{
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
        <div className="cta-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px', zIndex: 10, maxWidth: '679px' }}>
          <h2 className="cta-title" style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', color: '#2E2E2E', lineHeight: '1.1'
          }}>
            Ready to Start Your Journey?
          </h2>
          <p className="cta-desc" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#2E2E2E', lineHeight: '32px'
          }}>
            Take the first step towards building your future with structured learning, expert guidance, and real career opportunities.
          </p>

          <div className="cta-btn-row" style={{ display: 'flex', gap: '24px' }}>
            <button className="btn-navy" style={{ width: '236px' }}>
              Enroll Now
            </button>
            <button className="btn-navy" style={{ width: '193px' }}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="cta-image-right" style={{
          position: 'absolute',
          right: '0', top: '0',
          width: '490px', height: '474px',
          backgroundImage: 'url(/cta-students.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '32px 0 0 32px'
        }} />
      </div>
    </section>
  );
}
