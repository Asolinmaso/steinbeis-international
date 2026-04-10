
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'absolute',
      width: '100%',
      height: '120px',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 100px',
      zIndex: 50,
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Steinbeis International Logo" style={{ width: 198, height: 49 }} />
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '60px'
      }}>
        <Link href="/" style={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '24px',
          color: '#2E2E2E',
          position: 'relative'
        }}>
          Home
          <div style={{
            position: 'absolute',
            width: '43px',
            height: '0px',
            border: '2px solid #2E2E2E', /* Made border slightly thicker for visibility */
            left: '1px',
            bottom: '-5px'
          }} />
        </Link>
        <Link href="#courses" style={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '24px',
          color: '#2E2E2E'
        }}>
          Courses
        </Link>
        <Link href="#contact" style={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '24px',
          color: '#2E2E2E'
        }}>
          Contact Us
        </Link>
      </div>

      <button className="btn-yellow">
        Enquire Now
      </button>
    </nav>
  );
}
