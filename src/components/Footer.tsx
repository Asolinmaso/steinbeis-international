"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Reveal, replayViewport, staggerItemVariants } from '@/components/motion';
import { COURSE_LEVEL_TABS } from '@/constants/courseLevels';

export default function Footer() {
  return (
    <footer
      className="footer-root"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '830px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '150px',
        marginTop: '-20px',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}>
      {/* Background Container for shape and overflow */}
      <div className="footer-shape-container" style={{
        position: 'absolute',
        inset: 0,
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        overflow: 'hidden',
        zIndex: 2
      }}>
        {/* Background Image with Overlay */}
        <div className="footer-bg-image" style={{
          position: 'absolute',
          width: '100%', height: '100%',
          left: '0', top: '0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>


      {/* Footer Logo - Overflowing upwards with spinning animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="footer-logo-container"
        style={{
          position: 'absolute',
          top: '-70px', left: '50%',
          width: '100px', height: '100px',
          backgroundImage: 'url(/footer_logo.png)',
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          zIndex: 20,
          x: '-50%'
        }}
      />

      <div className="footer-inner" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '80px', marginTop: '40px', padding: '0 20px' }}>
          <Reveal>
            <h2 className="footer-title" style={{
              fontFamily: 'Inter', fontWeight: 700, fontSize: '64px',
              color: '#FFFFFF', textTransform: 'uppercase', textAlign: 'center',
              maxWidth: '600px', lineHeight: '1.2'
            }}>
              STEINBEIS INTERNATIONAL
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="footer-subtitle" style={{
              fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', maxWidth: '584px'
            }}>
              Your trusted partner for German language training and international career growth.
            </p>
          </Reveal>
        </div>

        {/* Links Area */}
        <motion.div
          className="footer-links-grid"
          style={{
            display: 'flex', justifyContent: 'space-between', width: '100%',
            padding: '0 100px', marginBottom: '80px', flexWrap: 'wrap', gap: '40px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
          }}
        >
          {/* Quick Links */}
          <motion.div variants={staggerItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#FFFFFF' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>Home</Link>
              <Link href="/courses" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>Courses</Link>
              <Link href="/contact" className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>Contact</Link>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={staggerItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#FFFFFF' }}>Courses</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {COURSE_LEVEL_TABS.map((level) => (
                <Link
                  key={level}
                  href={`/courses?course=${encodeURIComponent(level)}#course-levels`}
                  className="footer-col-link"
                  style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}
                >
                  {level}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div variants={staggerItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#FFFFFF' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.facebook.com/share/18DMkNKn7e/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s' }} className="footer-social-link">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.24991 21.1896V10.594H0V6.94252H2.24991V4.7502C2.24991 1.77135 3.52034 0 7.12981 0H10.1348V3.65187H8.25646C6.85139 3.65187 6.75844 4.16216 6.75844 5.11451L6.75333 6.9421H10.1561L9.75789 10.5936H6.75333V21.1896H2.24991Z" fill="#FFFFFF" />
                </svg>
              </a>
              <a href="https://www.instagram.com/steinbeis_international?igsh=MWJ6MTlrZXU3MGYwOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s' }} className="footer-social-link">
                <Image src="/insta.png" alt="Instagram" width={20} height={20} style={{ objectFit: 'contain' }} />
              </a>
              <a href="https://www.linkedin.com/company/steinbeis-international/" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s' }} className="footer-social-link">
                <Image src="/social_in.png" alt="LinkedIn" width={20} height={20} style={{ objectFit: 'contain' }} />
              </a>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={staggerItemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="footer-col-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#FFFFFF' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25CAD8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.7323 7H12.9014C13.0303 7 13.1561 7.03958 13.2621 7.11346C13.3681 7.18734 13.4492 7.29201 13.4945 7.4135L14.7247 10.7061C14.7652 10.815 14.7754 10.933 14.7542 11.0473L14.1375 14.3757C14.8953 16.1692 16.1466 17.3748 18.2208 18.4562L21.4862 17.8181C21.6023 17.7956 21.7223 17.8062 21.8326 17.8487L25.1124 19.1079C25.2323 19.1539 25.3355 19.2355 25.4084 19.3418C25.4813 19.4482 25.5204 19.5743 25.5205 19.7035V22.7528C25.5205 24.1362 24.3106 25.2585 22.8946 24.9479C20.3152 24.383 15.5358 22.946 12.1884 19.575C8.9812 16.3462 7.90652 11.8862 7.54576 9.47587C7.33876 8.09925 8.43457 7 9.7323 7Z" fill="#FFFFFF" />
                </svg>
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>09600116858</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25CAD8" />
                  <path d="M25 12.8919V21.1154C25 21.8804 24.7037 22.6141 24.1762 23.1551C23.6488 23.6961 22.9334 24 22.1875 24H9.8125C9.06658 24 8.35121 23.6961 7.82376 23.1551C7.29632 22.6141 7 21.8804 7 21.1154V12.8919L15.7143 18.1512C15.8008 18.2035 15.8995 18.2311 16 18.2311C16.1005 18.2311 16.1992 18.2035 16.2857 18.1512L25 12.8919ZM22.1875 9C22.8795 8.99989 23.5473 9.26147 24.0631 9.7347C24.5789 10.2079 24.9064 10.8596 24.9831 11.565L16 16.9846L7.01688 11.565C7.09355 10.8596 7.42111 10.2079 7.93689 9.7347C8.45267 9.26147 9.12046 8.99989 9.8125 9H22.1875Z" fill="#FFFFFF" />
                </svg>
                <span className="footer-col-link footer-contact-email" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>steinbeisinternational@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25CAD8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.3542 24.7553C15.3542 24.7553 9 19.3619 9 14.0548C9 12.1838 9.7375 10.3894 11.0503 9.06632C12.363 7.74328 14.1435 7 16 7C17.8565 7 19.637 7.74328 20.9497 9.06632C22.2625 10.3894 23 12.1838 23 14.0548C23 19.3619 16.6458 24.7553 16.6458 24.7553C16.2922 25.0833 15.7104 25.0798 15.3542 24.7553ZM16 17.1413C16.4022 17.1413 16.8004 17.0615 17.172 16.9064C17.5435 16.7513 17.8811 16.5239 18.1655 16.2373C18.4499 15.9507 18.6755 15.6105 18.8294 15.236C18.9833 14.8615 19.0625 14.4602 19.0625 14.0548C19.0625 13.6495 18.9833 13.2482 18.8294 12.8737C18.6755 12.4992 18.4499 12.159 18.1655 11.8724C17.8811 11.5858 17.5435 11.3584 17.172 11.2033C16.8004 11.0482 16.4022 10.9684 16 10.9684C15.1878 10.9684 14.4088 11.2935 13.8345 11.8724C13.2602 12.4512 12.9375 13.2363 12.9375 14.0548C12.9375 14.8734 13.2602 15.6585 13.8345 16.2373C14.4088 16.8162 15.1878 17.1413 16 17.1413Z" fill="#FFFFFF" />
                </svg>
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>Chennai, Tamil Nadu – 600041</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '40px 0' }} />

        {/* Copyright */}
        <Reveal delay={0.15}>
          <div className="footer-copyright-wrapper" style={{ width: '100%' }}>
            <p className="footer-copyright" style={{
              fontFamily: 'Inter', fontWeight: 400, fontSize: '20px',
              color: 'rgba(255,255,255,0.8)', textAlign: 'center', paddingBottom: '30px'
            }}>
              © 2026 Steinbeis International Academy. All rights reserved. | Designed & Developed By Manvian
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
