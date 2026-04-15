import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-root" style={{
      position: 'relative',
      width: '100%',
      minHeight: '830px',
      backgroundColor: '#061B42',
      borderTopLeftRadius: '100px',
      borderTopRightRadius: '100px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '150px'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        width: '100%', height: '100%',
        left: '0', top: '0',
        backgroundImage: 'linear-gradient(0deg, rgba(6, 27, 66, 0.8), rgba(6, 27, 66, 0.8)), url(/germany-campus.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />

      {/* Top Center Shield */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '180px', height: '140px',
        backgroundColor: '#FFFFFF',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
        display: 'flex', justifyContent: 'center', paddingTop: '30px',
        zIndex: 20
      }}>
        <div style={{
          width: '70px', height: '70px',
          backgroundImage: 'url(/logo.png)',
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
        }} />
      </div>

      <div className="footer-inner" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1240px' }}>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '80px', marginTop: '40px' }}>
          <h2 className="footer-title" style={{
            fontFamily: 'Inter', fontWeight: 700, fontSize: '64px',
            color: '#FFFFFF', textTransform: 'uppercase', textAlign: 'center',
            maxWidth: '600px', lineHeight: '1.2'
          }}>
            STEINBEIS INTERNATIONAL
          </h2>
          <p className="footer-subtitle" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', maxWidth: '584px'
          }}>
            Your trusted partner for German language training and international career growth.
          </p>
        </div>

        {/* Links Area */}
        <div className="footer-links-grid" style={{
          display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1123px',
          padding: '0 20px', marginBottom: '80px', flexWrap: 'wrap', gap: '40px'
        }}>
          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>Home</Link>
              <Link href="#courses" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>Courses</Link>
              <Link href="#contact" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>Contact</Link>
            </div>
          </div>

          {/* Courses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF' }}>Courses</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>German A1</span>
              <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>German A2</span>
              <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>German B1</span>
              <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>German B2</span>
            </div>
          </div>

          {/* Follow Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff' }}>Fb</span>
              </div>
              <div style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff' }}>In</span>
              </div>
              <div style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff' }}>Tw</span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#25CAD8', flexShrink: 0 }} />
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>09600116858</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#25CAD8', flexShrink: 0 }} />
                <span className="footer-col-link footer-contact-email" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>steinbeisinternational@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#25CAD8', flexShrink: 0 }} />
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#FFFFFF' }}>Chennai, TamilNadu – 600041</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '25px' }} />

        {/* Copyright */}
        <p className="footer-copyright" style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
          color: 'rgba(255,255,255,0.8)', textAlign: 'center', paddingBottom: '30px'
        }}>
          © 2026 Steinbeis International Academy. All rights reserved. | Designed & Developed By Manvian
        </p>
      </div>
    </footer>
  );
}
