"use client";
import React, { useState } from 'react';
import { Reveal, RevealX } from '@/components/motion';

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');

  const content = {
    vision: {
      title: "Vision",
      text: "To build a global community where language empowers confidence, connection, and success.",
      img: "/about_vision.png",
      color: "#25CAD8"
    },
    mission: {
      title: "Mission",
      text: "To equip individuals with skills, knowledge, and confidence to communicate effectively and thrive globally.",
      img: "/about_mission.png",
      color: "#2C4B82"
    }
  };

  const activeContent = activeTab === 'vision' ? content.vision : content.mission;

  return (
    <section
      style={{
      position: 'relative',
      width: '100%',
      minHeight: '900px',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden'
    }}
    >
      <div className="about-section-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        padding: '120px 100px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Image Area */}
        <RevealX className="about-image-area" x={-56} style={{ position: 'relative', width: '50%', height: '620px', zIndex: 2 }}>
          {/* Decorative Blob */}
          <div className="about-blob" style={{
            position: 'absolute',
            width: '487.37px', height: '465.91px',
            left: '67.18px', top: '31.17px',
            background: '#FFF0D2',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            zIndex: 1
          }} />
          <div className="about-image-rotated" style={{
            position: 'absolute',
            width: '570px', height: '518px',
            left: '0', top: '0',
            backgroundImage: 'url(/about-classroom.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px',
            transform: 'rotate(-11deg)',
            zIndex: 2
          }} />
        </RevealX>

        {/* Content Area */}
        <div className="about-content-area" style={{ width: '50%', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Reveal>
          <h2 className="about-title" style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '48px',
            lineHeight: '58px', color: '#2E2E2E'
          }}>
            We Make <span style={{ color: '#FA4516' }}>German Learning</span> <br /> Easy & Career-Focused
          </h2>
          </Reveal>
          <Reveal delay={0.1}>
          <p className="about-desc" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            lineHeight: '32px', color: '#2E2E2E'
          }}>
            We provide practical and engaging German language training designed to help students and professionals succeed in education and careers in Germany.
          </p>
          </Reveal>

          {/* Vision/Mission Interactive Box */}
          <Reveal delay={0.18}>
          <div className="about-vm-box" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '650px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.1)',
            borderRadius: '40px',
            overflow: 'hidden',
            marginTop: '20px'
          }}>
            {/* Tabs */}
            <div style={{ display: 'flex', height: '70px' }}>
              <div
                onClick={() => setActiveTab('vision')}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: '#25CAD8', cursor: 'pointer', position: 'relative'
                }}
              >
                <span className="about-vm-tab-label" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', color: '#2E2E2E' }}>
                  Vision
                </span>
                {activeTab === 'vision' && (
                  <div style={{
                    position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)',
                    width: 0, height: 0,
                    borderLeft: '15px solid transparent', borderRight: '15px solid transparent',
                    borderTop: '15px solid #25CAD8'
                  }} />
                )}
              </div>
              <div
                onClick={() => setActiveTab('mission')}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: '#2C4B82', cursor: 'pointer', position: 'relative'
                }}
              >
                <span className="about-vm-tab-label" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', color: '#FFFFFF' }}>
                  Mission
                </span>
                {activeTab === 'mission' && (
                  <div style={{
                    position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)',
                    width: 0, height: 0,
                    borderLeft: '15px solid transparent', borderRight: '15px solid transparent',
                    borderTop: '15px solid #2C4B82'
                  }} />
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="about-vm-body" style={{
              padding: '50px 30px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              minHeight: '280px'
            }}>
              <div className="about-vm-body-image" style={{
                width: '240px', height: '180px',
                backgroundImage: `url(${activeContent.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                flexShrink: 0
              }} />
              <p className="about-vm-body-text" style={{
                fontFamily: 'Inter', fontWeight: 500, fontSize: '24px',
                lineHeight: '34px', color: '#2E2E2E', margin: 0
              }}>
                {activeContent.text}
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
