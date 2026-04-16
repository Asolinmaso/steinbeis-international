"use client";
import React, { useRef, useState, useEffect } from 'react';

const cards = [
  { title: "Certified Trainers", desc: "Learn from certified German language experts", color: "#2C4B82", rotation: "-6.91deg", left: "2%", mt: "100px", delay: "0.5s" },
  { title: "Practical Learning", desc: "Interactive sessions focused on real-life communication", color: "#FFB61E", rotation: "14.26deg", left: "25%", mt: "-5px", delay: "0.7s" },
  { title: "Career Support", desc: "Guidance for exams, jobs, and opportunities", color: "#25CAD8", rotation: "-10.25deg", left: "48.5%", mt: "150px", delay: "0.9s" },
  { title: "Flexible Programs", desc: "Courses designed to fit your schedule and goals", color: "#FA4516", rotation: "22.82deg", left: "72%", mt: "40px", delay: "1.1s" }
];

export default function Features() {
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
      { threshold: 0.2, rootMargin: "0px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const activeClass = mounted && isVisible ? 'is-visible' : '';

  return (
    <section ref={sectionRef} className={`features-section ${activeClass}`} style={{
      position: 'relative',
      width: '100%',
      minHeight: '878px',
      backgroundColor: '#061B42',
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <style>{`
        .features-dashed-ellipse {
          opacity: 0;
        }
        .features-section.is-visible .features-dashed-ellipse {
          animation: drawDashed 1.5s ease-in-out forwards;
        }
        @keyframes drawDashed {
          0% { clip-path: inset(0 100% 0 0); opacity: 1; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        .features-card-anim {
          opacity: 0;
          visibility: hidden;
        }
        .features-section.is-visible .features-card-anim {
          animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          visibility: visible;
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(60px) var(--base-rotation); }
          100% { opacity: 1; transform: translateY(0) var(--base-rotation); }
        }
      `}</style>

      {/* Decorative dashed ellipse */}
      <div className="features-dashed-ellipse" style={{
        position: 'absolute',
        width: '1434px', height: '396px',
        left: 'calc(50% - 717px)', top: '350px',
        border: '4px dashed #FFFFFF',
        borderRadius: '50%',
        zIndex: 0
      }} />

      {/* Blur Ellipses */}
      <div style={{ position: 'absolute', width: '215px', height: '215px', right: '100px', top: '34px', background: '#0256EB', filter: 'blur(175px)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '215px', height: '215px', left: '-56px', bottom: '100px', background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%', zIndex: 0 }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        <h2 className="features-title" style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
          lineHeight: '58px', color: '#FFFFFF', textAlign: 'center', marginBottom: '24px',
          maxWidth: '456px'
        }}>
          What Sets Us Apart
        </h2>
        <p className="features-desc" style={{
          fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
          lineHeight: '32px', color: '#FFFFFF', textAlign: 'center', maxWidth: '809px'
        }}>
          A learning experience designed to go beyond basics, focused on practical skills, expert guidance, and real career outcomes.
        </p>
      </div>

      <div className="features-cards-wrapper" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '100px',
        zIndex: 10,
        flexWrap: 'wrap'
      }}>
        {cards.map((card, i) => (
          <div key={i} className="features-card features-card-anim" style={{
            width: '280px', height: '330px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.25)',
            borderRadius: '32px',
            padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '24px',
            marginTop: card.mt,
            animationDelay: card.delay,
            '--base-rotation': `rotate(${card.rotation})`,
            transform: `rotate(${card.rotation})`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          } as React.CSSProperties}
          onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(0deg) translateY(-10px) scale(1.05)`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${card.rotation})`; }}
          >
            <div style={{
              width: '60px', height: '60px',
              backgroundColor: card.color,
              borderRadius: '60px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ width: '25px', height: '25px', backgroundColor: '#FFF', borderRadius: '5px' }} />
            </div>
            <h3 className="features-card-title" style={{
              fontFamily: 'Inter', fontWeight: 600, fontSize: '32px',
              lineHeight: '39px', color: card.color
            }}>
              {card.title}
            </h3>
            <p className="features-card-desc" style={{
              fontFamily: 'Inter', fontWeight: 500, fontSize: '24px',
              lineHeight: '32px', color: '#2E2E2E'
            }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
