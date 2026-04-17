"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const advantages = [
  {
    text: "Mock Exams & Real-world Practice",
    bg: "#EAF2FF",
    color: "#2C4B82",
    shadow: "rgba(44, 75, 130, 0.5)",
    top: "0px",
    left: "auto",
    right: "0px",
    width: "496px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="transparent"/>
        <path d="M22 10H10C8.89543 10 8 10.8954 8 12V22C8 23.1046 8.89543 24 10 24H22C23.1046 24 24 23.1046 24 22V12C24 10.8954 23.1046 10 22 10Z" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14H20M12 18H20M12 21H16" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 14L23 15L24 14" stroke="#2C4B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
    delay: '0.4s'
  },
  {
    text: "Affordable Fee Structure",
    bg: "#FFF7E5",
    color: "#FFB61E",
    shadow: "rgba(255, 182, 30, 0.5)",
    top: "130px",
    left: "580px",
    width: "381px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="#FFB61E" strokeWidth="2"/>
        <path d="M11 12H21M11 16H21M18 10L13 22" stroke="#FFB61E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    delay: '0.6s'
  },
  {
    text: "Study Materials Included",
    bg: "#EEFEFF",
    color: "#25CAD8",
    shadow: "rgba(37, 202, 216, 0.5)",
    top: "130px",
    left: "980px",
    width: "394px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24S10 22 16 22S24 24 24 24V10S22 8 16 8S8 10 8 10V24Z" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8V22" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    delay: '0.8s'
  },
  {
    text: "Hostel Accommodation",
    bg: "#EEFEFF",
    color: "#25CAD8",
    shadow: "rgba(37, 202, 216, 0.5)",
    top: "258px",
    left: "600px",
    width: "366px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26V10L16 6L26 10V26M6 16H26M11 16V26M16 16V26M21 16V26" stroke="#25CAD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    delay: '1.0s'
  },
  {
    text: "Flexible Learning Timings",
    bg: "#FFECE7",
    color: "#FA4516",
    shadow: "rgba(250, 69, 22, 0.5)",
    top: "258px",
    left: "985px",
    width: "390px",
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#FA4516" strokeWidth="2"/>
        <path d="M16 10V16L20 20" stroke="#FA4516" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    delay: '1.2s'
  }
];

export default function Advantage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const activeClass = mounted && isVisible ? 'is-visible' : '';

  return (
    <section ref={sectionRef} className={`advantage-root ${activeClass}`} style={{ 
      backgroundColor: '#FFFFFF', 
      width: '100%', 
      overflow: 'hidden',
      padding: '120px 0'
    }}>
      <div className="advantage-container" style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 100px',
        position: 'relative',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Left Text Content */}
        <div className="advantage-content-left" style={{
          width: '100%',
          maxWidth: '592px',
          zIndex: 5
        }}>
          <h2 style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '58px',
            color: '#2E2E2E',
            marginBottom: '32px'
          }}>
            The <span style={{ color: '#FA4516' }}>Steinbeis</span> Advantage
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#2E2E2E',
            maxWidth: '397px',
            marginBottom: '40px'
          }}>
            A practical learning experience designed to help you master German, clear exams, and unlock global opportunities.
          </p>
          <Link href="/contact">
            <button className="btn-navy" style={{ 
              width: '193px',
              height: '61px',
              fontSize: '24px',
              fontWeight: 500,
              borderRadius: '16px',
              backgroundColor: '#2C4B82',
              border: '1px solid #FFFFFF',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Enquire Now
            </button>
          </Link>
        </div>

        {/* Floating Pills - Desktop Grid */}
        <div className="advantage-pills-wrapper" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          {advantages.map((adv, i) => (
            <div 
              key={i} 
              className="advantage-pill advantage-pill-anim"
              style={{
                position: 'absolute',
                top: adv.top,
                left: adv.left === 'auto' ? 'unset' : adv.left,
                right: adv.right === 'auto' ? 'unset' : adv.right,
                width: adv.width,
                height: '88px',
                backgroundColor: adv.bg,
                border: `1px solid ${adv.color}`,
                boxShadow: `0px 0px 24px ${adv.shadow}`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                gap: '16px',
                pointerEvents: 'auto',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animationDelay: adv.delay
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0px 8px 32px ${adv.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = `0px 0px 24px ${adv.shadow}`;
              }}
            >
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {adv.icon}
              </div>
              <span style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '29px',
                color: adv.color,
                textAlign: 'left'
              }}>
                {adv.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantage-pill-anim {
          opacity: 0;
          visibility: hidden;
        }
        .advantage-root.is-visible .advantage-pill-anim {
          animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          visibility: visible;
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1280px) {
          .advantage-pills-wrapper {
            position: relative !important;
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 20px !important;
            margin-top: 60px !important;
            height: auto !important;
            padding: 0 40px !important;
            justify-content: center !important;
            pointer-events: auto !important;
            top: unset !important;
            left: unset !important;
          }
          .advantage-pill {
            position: static !important;
            width: 100% !important;
            max-width: 500px !important;
          }
          .advantage-container {
            padding: 0 40px !important;
            align-items: center !important;
            text-align: center !important;
            min-height: auto !important;
          }
          .advantage-content-left {
            max-width: 100% !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .advantage-content-left p {
            max-width: 100% !important;
          }
        }
        @media (max-width: 768px) {
           .advantage-container {
             padding: 0 20px !important;
           }
           .advantage-pill {
             height: auto !important;
             padding: 16px !important;
           }
           .advantage-pill span {
             font-size: 18px !important;
             line-height: normal !important;
           }
        }
      `}</style>
    </section>
  );
}
