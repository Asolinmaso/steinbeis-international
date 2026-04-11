"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
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
          fontWeight: pathname === '/' ? 700 : 400,
          fontSize: '24px',
          color: '#2E2E2E',
          position: 'relative'
        }}>
          Home
          {pathname === '/' && (
            <div style={{
              position: 'absolute',
              width: '43px',
              height: '0px',
              border: '2px solid #2E2E2E',
              left: '1px',
              bottom: '-5px'
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
              width: '60px',
              height: '0px',
              border: '2px solid #2E2E2E',
              left: '1px',
              bottom: '-5px'
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
              width: '60px',
              height: '0px',
              border: '2px solid #2E2E2E',
              left: '1px',
              bottom: '-5px'
            }} />
          )}
        </Link>
      </div>

      <button className="btn-yellow">
        Enquire Now
      </button>
    </nav>
  );
}
