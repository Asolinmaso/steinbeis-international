"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showDelayedElements, setShowDelayedElements] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Trigger delayed elements after 1.5s (once circles are expanding)
          setTimeout(() => setShowDelayedElements(true), 1500);
        } else {
          setShowDelayedElements(false);
        }
      },
      { 
        threshold: 0.01,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeClass = mounted && isVisible ? 'is-visible' : '';
  const delayedClass = mounted && showDelayedElements ? 'is-delayed-visible' : '';

  return (
    <section ref={sectionRef} className={`hero-section-root ${activeClass} ${delayedClass}`} style={{
      position: 'relative',
      width: '100%',
      marginTop: '120px',
      backgroundColor: '#061B42',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Background Ellipses */}
      <div className="animate-rippleIn hero-circle hero-circle-3" style={{ animationDelay: '0.2s', position: 'absolute', width: '863px', height: '863px', left: 'calc(50% - 863px/2)', top: '507px', background: '#0A2A66', borderRadius: '50%' }} />
      <div className="animate-rippleIn hero-circle hero-circle-4" style={{ animationDelay: '0.4s', position: 'absolute', width: '805px', height: '805px', left: 'calc(50% - 805px/2)', top: '536px', background: '#082458', borderRadius: '50%' }} />
      <div className="animate-rippleIn hero-circle hero-circle-5" style={{ animationDelay: '0.6s', position: 'absolute', width: '753px', height: '753px', left: 'calc(50% - 753px/2)', top: '562px', background: '#061C45', borderRadius: '50%' }} />
      <div className="animate-rippleIn hero-circle hero-circle-2" style={{ animationDelay: '0.8s', position: 'absolute', width: '686px', height: '686px', left: 'calc(50% - 686px/2)', top: '595px', background: '#06193B', borderRadius: '50%' }} />
      <div className="animate-rippleIn hero-circle hero-circle-1" style={{ animationDelay: '1.0s', position: 'absolute', width: '622px', height: '622px', left: 'calc(50% - 622px/2)', top: '627px', background: '#041431', borderRadius: '50%' }} />

      {/* Blur Ellipses */}
      <div style={{ position: 'absolute', width: '215px', height: '215px', left: '1201px', top: '844px', background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', width: '215px', height: '215px', left: '1122px', top: '-54px', background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', width: '215px', height: '215px', left: '73px', top: '291px', background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%' }} />

      {/* Main Content */}
      <div className="hero-content-wrapper" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        marginTop: '80px',
        width: '1177px',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
          <h3 className="hero-subtitle" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            lineHeight: '29px', textAlign: 'center', color: '#EDEDED'
          }}>
            German Language Training in Chennai
          </h3>
          <h1 className="hero-title" style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '60px',
            lineHeight: '70px', textAlign: 'center', color: '#FFFFFF', width: '100%'
          }}>
            Build Your <span style={{ color: '#FFB61E' }}>Career in Germany</span> with <br />
            German Language Training
          </h1>
          <p className="hero-subtitle" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            lineHeight: '29px', textAlign: 'center', color: '#EDEDED', width: '781px'
          }}>
            Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany.
          </p>
        </div>

        <div className="hero-btn-row" style={{ display: 'flex', gap: '24px' }}>
          <Link href="/contact">
            <button className="btn-yellow" style={{ width: '193px', height: '61px' }}>
              Enquire Now
            </button>
          </Link>
          <Link href="/courses">
            <button className="hero-explore-btn" style={{
              width: '236px', height: '61px',
              borderRadius: '16px',
              border: '1px solid #FFB61E',
              background: 'transparent',
              color: '#FFB61E',
              fontFamily: 'Inter', fontWeight: 500, fontSize: '20px',
              cursor: 'pointer'
            }}>
              Explore Courses
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image & Floating Pills */}
      <div className="hero-image-wrapper" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        marginTop: '50px',
        height: '714px',
        zIndex: 10
      }}>
        {/* Main Hero Image */}
        <div className="hero-main-image" style={{
          position: 'absolute',
          width: '520px',
          height: '714px',
          left: 'calc(50% - 260px)',
          backgroundImage: 'url(/hero-student.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '24px'
        }} />

        {/* Floating Pills — hidden on mobile via .hero-pills-container */}
        <div className="hero-pills-container" style={{ position: 'absolute', inset: 0, zIndex: 11 }}>
          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '12px 24px', gap: '10px', left: '106px', top: '255px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)'
          }} className="animate-fadeInUp hero-pill hero-pill-practical">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              100% Practical Learning
            </span>
          </div>

          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px', gap: '10px', left: '97px', top: '425px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', animationDelay: '0.2s'
          }} className="animate-fadeInUp hero-pill hero-pill-trainers">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              Experienced Trainers
            </span>
          </div>

          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px', gap: '10px', left: '163px', top: '93px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', animationDelay: '0.4s'
          }} className="animate-fadeInUp hero-pill hero-pill-advanced">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              Beginner to Advanced (A1–B2)
            </span>
          </div>

          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px', gap: '10px', right: '50px', top: '93px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', animationDelay: '0.1s'
          }} className="animate-fadeInUp hero-pill hero-pill-batch">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              Flexible Batch Timings
            </span>
          </div>

          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px', gap: '10px', right: '-50px', top: '255px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', animationDelay: '0.3s'
          }} className="animate-fadeInUp hero-pill hero-pill-visa">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              Visa Support Assistance
            </span>
          </div>

          <div style={{
            position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px', gap: '10px', right: '20px', top: '425px',
            borderRadius: '40px', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', animationDelay: '0.5s'
          }} className="animate-fadeInUp hero-pill hero-pill-job">
            <span className="hero-pill-text" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
              German Job Guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
