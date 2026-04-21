"use client";

import React from 'react';
import Link from 'next/link';
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
        marginTop: '2rem'

      }}>
      {/* Background Container for shape and overflow */}
      < div style={{
        position: 'absolute',
        inset: 0,
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {/* Background Image with Overlay */}
        < div style={{
          position: 'absolute',
          width: '100%', height: '100%',
          left: '0', top: '0',
          backgroundImage: 'url(/footer_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div >


      {/* Footer Logo - Overflowing upwards with spinning animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.24991 21.1896V10.594H0V6.94252H2.24991V4.7502C2.24991 1.77135 3.52034 0 7.12981 0H10.1348V3.65187H8.25646C6.85139 3.65187 6.75844 4.16216 6.75844 5.11451L6.75333 6.9421H10.1561L9.75789 10.5936H6.75333V21.1896H2.24991Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/steinbeis_international?igsh=MWJ6MTlrZXU3MGYwOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ width: '56px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s' }} className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8313 2.17773 19.2248 2.78247 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9766 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9953 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2248 17.2175 18.8313 17.8223 18.3226 18.322C17.8228 18.8307 17.2181 19.2242 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94L13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97357C8.24383 20.0026 7.51409 19.9949 6.78457 19.977L6.59057 19.971C6.35318 19.962 6.11584 19.9517 5.87857 19.94C4.81457 19.89 4.08857 19.722 3.45057 19.475C2.7834 19.2241 2.17901 18.8306 1.67957 18.322C1.17051 17.8224 0.776678 17.2176 0.525569 16.55C0.278569 15.913 0.110569 15.187 0.0605687 14.122L0.0305688 13.41L0.0255689 13.216C0.00713493 12.4868 -0.00119929 11.7574 0.000568797 11.028V8.972C-0.0021991 8.2426 0.00513501 7.5132 0.0225689 6.784L0.0295688 6.59C0.0375688 6.365 0.0475688 6.144 0.0595688 5.878C0.109569 4.813 0.277569 4.088 0.524569 3.45C0.776263 2.7822 1.17079 2.17744 1.68057 1.678C2.17972 1.16955 2.78376 0.776074 3.45057 0.525C4.08857 0.278 4.81357 0.11 5.87857 0.0599999C6.14457 0.0479999 6.36657 0.038 6.59057 0.03L6.78457 0.0239999C7.51376 0.00623271 8.24316 -0.0014347 8.97257 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40272 5.52678 6.46503 6.46447C5.52735 7.40215 5.00057 8.67392 5.00057 10C5.00057 11.3261 5.52735 12.5979 6.46503 13.5355C7.40272 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1227 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20592 13 8.44286 12.6839 7.88025 12.1213C7.31764 11.5587 7.00157 10.7956 7.00157 10C7.00157 9.20435 7.31764 8.44129 7.88025 7.87868C8.44286 7.31607 9.20592 7 10.0016 7M15.2516 3.5C14.92 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.92 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z" fill="white" />
                </svg>
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
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.7323 7H12.9014C13.0303 7 13.1561 7.03958 13.2621 7.11346C13.3681 7.18734 13.4492 7.29201 13.4945 7.4135L14.7247 10.7061C14.7652 10.815 14.7754 10.933 14.7542 11.0473L14.1375 14.3757C14.8953 16.1692 16.1466 17.3748 18.2208 18.4562L21.4862 17.8181C21.6023 17.7956 21.7223 17.8062 21.8326 17.8487L25.1124 19.1079C25.2323 19.1539 25.3355 19.2355 25.4084 19.3418C25.4813 19.4482 25.5204 19.5743 25.5205 19.7035V22.7528C25.5205 24.1362 24.3106 25.2585 22.8946 24.9479C20.3152 24.383 15.5358 22.946 12.1884 19.575C8.9812 16.3462 7.90652 11.8862 7.54576 9.47587C7.33876 8.09925 8.43457 7 9.7323 7Z" fill="white" />
                </svg>
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>09600116858</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25CAD8" />
                  <path d="M25 12.8919V21.1154C25 21.8804 24.7037 22.6141 24.1762 23.1551C23.6488 23.6961 22.9334 24 22.1875 24H9.8125C9.06658 24 8.35121 23.6961 7.82376 23.1551C7.29632 22.6141 7 21.8804 7 21.1154V12.8919L15.7143 18.1512C15.8008 18.2035 15.8995 18.2311 16 18.2311C16.1005 18.2311 16.1992 18.2035 16.2857 18.1512L25 12.8919ZM22.1875 9C22.8795 8.99989 23.5473 9.26147 24.0631 9.7347C24.5789 10.2079 24.9064 10.8596 24.9831 11.565L16 16.9846L7.01688 11.565C7.09355 10.8596 7.42111 10.2079 7.93689 9.7347C8.45267 9.26147 9.12046 8.99989 9.8125 9H22.1875Z" fill="white" />
                </svg>
                <span className="footer-col-link footer-contact-email" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>steinbeisinternational@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25CAD8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.3542 24.7553C15.3542 24.7553 9 19.3619 9 14.0548C9 12.1838 9.7375 10.3894 11.0503 9.06632C12.363 7.74328 14.1435 7 16 7C17.8565 7 19.637 7.74328 20.9497 9.06632C22.2625 10.3894 23 12.1838 23 14.0548C23 19.3619 16.6458 24.7553 16.6458 24.7553C16.2922 25.0833 15.7104 25.0798 15.3542 24.7553ZM16 17.1413C16.4022 17.1413 16.8004 17.0615 17.172 16.9064C17.5435 16.7513 17.8811 16.5239 18.1655 16.2373C18.4499 15.9507 18.6755 15.6105 18.8294 15.236C18.9833 14.8615 19.0625 14.4602 19.0625 14.0548C19.0625 13.6495 18.9833 13.2482 18.8294 12.8737C18.6755 12.4992 18.4499 12.159 18.1655 11.8724C17.8811 11.5858 17.5435 11.3584 17.172 11.2033C16.8004 11.0482 16.4022 10.9684 16 10.9684C15.1878 10.9684 14.4088 11.2935 13.8345 11.8724C13.2602 12.4512 12.9375 13.2363 12.9375 14.0548C12.9375 14.8734 13.2602 15.6585 13.8345 16.2373C14.4088 16.8162 15.1878 17.1413 16 17.1413Z" fill="white" />
                </svg>
                <span className="footer-col-link" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', color: '#FFFFFF' }}>Chennai, Tamil Nadu – 600041</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ padding: '0 100px', width: '100%', marginBottom: '25px' }}>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </div>

        {/* Copyright */}
        <Reveal delay={0.15}>
          <div style={{ padding: '0 100px', width: '100%' }}>
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
