"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        width: '100%',
        height: '120px',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 100px',
        zIndex: 50,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <img src="/logo.png" alt="Steinbeis International Logo" style={{ width: 198, height: 49 }} />
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="navbar-links" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '60px'
        }}>
          <Link href="/" style={{
            fontFamily: 'Inter',
            fontWeight: pathname === '/' ? 700 : 400,
            fontSize: '24px',
            color: '#2E2E2E',
            position: 'relative'
          }}>
            Home
            {pathname === '/' && (
              <div style={{
                position: 'absolute',
                width: '43px', height: '0px',
                border: '2px solid #2E2E2E',
                left: '1px', bottom: '-5px'
              }} />
            )}
          </Link>
          <Link href="/courses" style={{
            fontFamily: 'Inter',
            fontWeight: pathname === '/courses' ? 700 : 400,
            fontSize: '24px',
            color: '#2E2E2E',
            position: 'relative'
          }}>
            Courses
            {pathname === '/courses' && (
              <div style={{
                position: 'absolute',
                width: '60px', height: '0px',
                border: '2px solid #2E2E2E',
                left: '1px', bottom: '-5px'
              }} />
            )}
          </Link>
          <Link href="/contact" style={{
            fontFamily: 'Inter',
            fontWeight: pathname === '/contact' ? 700 : 400,
            fontSize: '24px',
            color: '#2E2E2E',
            position: 'relative'
          }}>
            Contact Us
            {pathname === '/contact' && (
              <div style={{
                position: 'absolute',
                width: '60px', height: '0px',
                border: '2px solid #2E2E2E',
                left: '1px', bottom: '-5px'
              }} />
            )}
          </Link>
        </div>

        {/* Desktop enquire button */}
        <button className="navbar-enquire btn-yellow">
          Enquire Now
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Open menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}
          style={{ fontWeight: pathname === '/' ? 700 : 400, borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
          Home
        </Link>
        <Link href="/courses" onClick={() => setMenuOpen(false)}
          style={{ fontWeight: pathname === '/courses' ? 700 : 400, borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
          Courses
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}
          style={{ fontWeight: pathname === '/contact' ? 700 : 400, borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
          Contact Us
        </Link>
        <button className="btn-yellow" style={{ width: '100%' }}>
          Enquire Now
        </button>
      </div>
    </>
  );
}
