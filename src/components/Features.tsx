"use client";
import React, { useRef, useState, useEffect } from 'react';

const cards = [
  { 
    title: "Certified Trainers", 
    desc: "Learn from certified German language experts", 
    color: "#2C4B82", 
    rotation: "-6.91deg", 
    left: "2%", 
    mt: "100px", 
    delay: "0.5s",
    icon: (
      <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="7.21503" width="60" height="60" rx="30" transform="rotate(-6.90656 0 7.21503)" fill="#2C4B82"/>
        <path d="M45.8437 39.9229C46.0222 39.7456 46.1553 39.5278 46.2315 39.288C46.3077 39.0482 46.3249 38.7935 46.2816 38.5456C46.2383 38.2978 46.1358 38.064 45.9827 37.8643C45.8297 37.6646 45.6306 37.5048 45.4026 37.3985L44.3025 28.3689L42.8772 29.596L43.8448 37.584C43.6508 37.7411 43.4973 37.9425 43.3971 38.1711C43.2969 38.3998 43.253 38.6491 43.269 38.8982C43.285 39.1473 43.3605 39.389 43.4891 39.603C43.6177 39.8169 43.7957 39.997 44.0082 40.128L43.5161 40.9776C43.075 41.7042 42.885 42.5556 42.9755 43.4007L43.2051 45.2961L44.4693 45.143C44.7729 45.1062 45.0557 44.9691 45.2727 44.7536C45.4898 44.538 45.6288 44.2562 45.6676 43.9528L45.9301 41.8184L46.3058 44.9205L47.857 44.7326L47.6297 42.8558C47.5135 42.0097 47.1232 41.225 46.5186 40.6218L45.8437 39.9229ZM32.443 21.417L20.7852 29.1244L34.1339 35.3766L45.6038 26.1181L32.443 21.417Z" fill="white"/>
        <path d="M34.3219 36.9279L25.9404 32.7023L26.2617 35.3547C26.4327 36.7661 31.5022 40.4171 34.6976 40.0301C37.893 39.643 41.9443 34.8872 41.7733 33.4757L41.452 30.8234L34.3219 36.9279Z" fill="white"/>
      </svg>
    )
  },
  { 
    title: "Practical Learning", 
    desc: "Interactive sessions focused on real-life communication", 
    color: "#FFB61E", 
    rotation: "14.26deg", 
    left: "25%", 
    mt: "-5px", 
    delay: "0.7s",
    icon: (
      <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14.7756" width="60" height="60" rx="30" transform="rotate(14.2563 14.7756 0)" fill="#FFB61E"/>
        <path d="M45.7198 47.052C45.9503 46.9511 46.153 46.7959 46.3106 46.5998C46.4683 46.4038 46.5763 46.1725 46.6254 45.9257C46.6745 45.6789 46.6632 45.4239 46.5926 45.1824C46.522 44.9409 46.3941 44.72 46.2198 44.5385L48.4538 35.7208L46.6816 36.3506L44.7001 44.1492C44.4624 44.2257 44.2466 44.358 44.0706 44.535C43.8946 44.7121 43.7637 44.9288 43.6886 45.1669C43.6136 45.405 43.5967 45.6576 43.6394 45.9035C43.6821 46.1495 43.7831 46.3816 43.934 46.5805L43.1684 47.1953C42.4947 47.7135 42.0102 48.439 41.7894 49.2597L41.3192 51.1102L42.5535 51.4238C42.85 51.4991 43.1631 51.4734 43.4434 51.3507C43.7236 51.228 43.9549 51.0154 44.1007 50.7465L45.116 48.8508L44.3465 51.8794L45.8609 52.2641L46.3264 50.4319C46.5236 49.6009 46.4429 48.7282 46.0968 47.9474L45.7198 47.052ZM39.9038 24.9562L26.2498 27.9351L36.441 38.5848L50.4799 34.0916L39.9038 24.9562Z" fill="white"/>
        <path d="M36.0565 40.0993L29.7659 33.1328L29.1079 35.7222C28.7578 37.1002 32.1674 42.3352 35.287 43.1279C38.4066 43.9205 43.9016 40.9481 44.2517 39.5701L44.9097 36.9806L36.0565 40.0993Z" fill="white"/>
      </svg>
    )
  },
  { 
    title: "Career Support", 
    desc: "Guidance for exams, jobs, and opportunities", 
    color: "#25CAD8", 
    rotation: "-10.25deg", 
    left: "48.5%", 
    mt: "150px", 
    delay: "0.9s",
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="10.6768" width="60" height="60" rx="30" transform="rotate(-10.25 0 10.6768)" fill="#25CAD8"/>
        <path d="M47.6732 40.6552C47.8411 40.4677 47.9612 40.2425 48.0233 39.9986C48.0855 39.7548 48.0878 39.4996 48.0301 39.2547C47.9724 39.0097 47.8564 38.7824 47.6919 38.5919C47.5275 38.4014 47.3195 38.2535 47.0856 38.1607L45.4608 29.2107L44.1095 30.5188L45.5413 38.4368C45.3568 38.6049 45.2153 38.8149 45.1286 39.049C45.042 39.2831 45.0126 39.5346 45.0431 39.7823C45.0736 40.0301 45.1631 40.2669 45.3039 40.473C45.4448 40.6791 45.633 40.8485 45.8528 40.9669L45.4111 41.8438C45.0131 42.5948 44.8731 43.4559 45.0127 44.2943L45.3524 46.1731L46.6056 45.9465C46.9066 45.892 47.1809 45.7387 47.385 45.5109C47.5891 45.283 47.7114 44.9936 47.7325 44.6884L47.87 42.5423L48.426 45.6173L49.9636 45.3392L49.6272 43.4789C49.4619 42.641 49.0265 41.8804 48.3877 41.3135L47.6732 40.6552ZM33.216 22.9622L22.0276 31.3364L35.7182 36.7994L46.6286 26.8878L33.216 22.9622Z" fill="white"/>
        <path d="M35.9964 38.337L27.3828 34.6074L27.8582 37.2365C28.1112 38.6356 33.3851 41.9847 36.5525 41.4119C39.7199 40.8392 43.4869 35.8552 43.2339 34.4561L42.7584 31.8271L35.9964 38.337Z" fill="white"/>
      </svg>
    )
  },
  { 
    title: "Flexible Programs", 
    desc: "Courses designed to fit your schedule and goals", 
    color: "#FA4516", 
    rotation: "22.82deg", 
    left: "72%", 
    mt: "40px", 
    delay: "1.1s",
    icon: (
      <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="23.2702" width="60" height="60" rx="30" transform="rotate(22.82 23.2702 0)" fill="#FA4516"/>
        <path d="M46.8625 51.1357C47.1055 51.0703 47.329 50.9471 47.5141 50.7766C47.6993 50.6062 47.8405 50.3936 47.9258 50.1568C48.0111 49.9201 48.0379 49.6663 48.004 49.4169C47.9702 49.1676 47.8766 48.9301 47.7312 48.7247L51.2533 40.338L49.4072 40.6969L46.2865 48.1134C46.0401 48.1537 45.8069 48.2524 45.6066 48.4013C45.4062 48.5502 45.2444 48.7449 45.1348 48.9692C45.0251 49.1934 44.9708 49.4407 44.9764 49.6903C44.982 49.9399 45.0473 50.1845 45.1669 50.4036L44.3183 50.8975C43.5749 51.3097 42.9878 51.9548 42.6472 52.7336L41.9068 54.4934L43.0805 54.9873C43.3625 55.1059 43.676 55.1271 43.9714 55.0475C44.2668 54.968 44.5272 54.7922 44.7114 54.548L45.9976 52.8246L44.7857 55.7048L46.2259 56.3108L46.9591 54.5683C47.2778 53.7759 47.328 52.9009 47.102 52.0773L46.8625 51.1357ZM44.4017 28.4202L30.4563 29.3327L38.9481 41.3812L53.4995 39.0286L44.4017 28.4202Z" fill="white"/>
        <path d="M38.3421 42.8216L33.1589 34.9961L32.1227 37.4587C31.5713 38.7692 34.1633 44.4535 37.1302 45.7019C40.097 46.9502 45.9733 44.8291 46.5247 43.5186L47.5609 41.0561L38.3421 42.8216Z" fill="white"/>
      </svg>
    )
  }
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

      {/* Decorative dashed wavy line */}
      <div className="features-dashed-ellipse" style={{
        position: 'absolute',
        width: '100%', height: '400px',
        left: '0', top: '270px',
        zIndex: 0
      }}>
        <svg width="100%" height="400" viewBox="0 0 1438 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1.87939 0.68457C1.87939 0.68457 113.988 308.417 283.379 341.185C455.47 374.475 499.673 116.575 674.879 121.685C862.231 127.148 880.449 396.929 1067.88 397.185C1347.74 397.566 1436.38 0.68457 1436.38 0.68457" stroke="white" strokeWidth="4" strokeDasharray="6 6"/>
        </svg>
      </div>

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
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '20px',
        marginTop: '100px',
        zIndex: 10,
        flexWrap: 'wrap',
        padding: '0 40px'
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
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {card.icon}
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
