"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CourseNode {
  levelTitle: string;
  overview: string;
  whatYouWillLearn: string[];
  outcome: string;
}

const CourseData: Record<string, CourseNode> = {
  "German A1": {
    levelTitle: "German A1 – Beginner Level",
    overview: "This level is designed for absolute beginners who are starting their German language journey. It focuses on building a basic understanding of the language and everyday communication.",
    whatYouWillLearn: [
      "Basic vocabulary and common phrases",
      "Introducing yourself and others",
      "Simple conversations (greetings, shopping, directions)",
      "Basic grammar (sentence structure, verbs, articles)"
    ],
    outcome: "You will be able to understand and use simple expressions and communicate in basic everyday situations."
  },
  "German A2": {
    levelTitle: "German A2 – Elementary Level",
    overview: "This level is designed for learners who have basic knowledge of German and want to improve their communication skills. It focuses on expanding vocabulary, understanding everyday conversations, and building confidence in simple interactions.",
    whatYouWillLearn: [
      "Expanding vocabulary for daily situations",
      "Talking about routine activities and experiences",
      "Understanding short conversations and texts",
      "Basic grammar (past tense, sentence formation, connectors)"
    ],
    outcome: "You will be able to communicate in simple and routine tasks, understand commonly used expressions, and handle basic conversations with more confidence."
  },
  "German B1": {
    levelTitle: "German B1 – Intermediate Level",
    overview: "This level is for learners who already possess a solid foundation. It focuses on independent language use in personal and professional contexts.",
    whatYouWillLearn: [
      "Understanding main points of clear standard input",
      "Dealing with most travel situations",
      "Producing simple connected text on familiar topics",
      "Describing experiences, dreams, and ambitions"
    ],
    outcome: "You will be able to communicate independently and handle most situations likely to arise while travelling in an area where German is spoken."
  },
  "German B2": {
    levelTitle: "German B2 – Upper Intermediate Level",
    overview: "This level is for advanced learners preparing for academic or professional environments. It focuses on fluent, spontaneous communication and complex text comprehension.",
    whatYouWillLearn: [
      "Understanding main ideas of complex texts",
      "Interacting with a degree of fluency and spontaneity",
      "Producing clear, detailed text on a wide range of subjects",
      "Explaining viewpoints on topical issues"
    ],
    outcome: "You will be able to communicate fluently with native speakers and understand complex academic and professional texts."
  }
};

const STEPS = [
  { number: "01", title: "Start Your Learning", desc: "Begin with structured A1–B2 German language training." },
  { number: "02", title: "Build New Skills", desc: "Develop communication skills for real-world use." },
  { number: "03", title: "Prepare for Exams", desc: "Get guided support and practice for Goethe certification exams." },
  { number: "04", title: "Explore Opportunities", desc: "Take the next step towards study or career opportunities." }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("German A2");
  const currentData = CourseData[activeTab];

  return (
    <main style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>

      <Navbar />

      {/* Header Hero Section */}
      <div className="cpage-hero" style={{
        position: 'relative',
        width: '100%',
        minHeight: '623px',
        marginTop: '120px',
        backgroundColor: '#061B42',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 0'
      }}>
        {/* Blur Ellipses Background */}
        <div style={{ position: 'absolute', width: '400px', height: '400px', left: '-100px', top: '-100px', background: '#0256EB', filter: 'blur(200px)', opacity: 0.5 }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', right: '-100px', bottom: '-100px', background: '#0256EB', filter: 'blur(200px)', opacity: 0.5 }} />

        <div className="cpage-hero-inner" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1240px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 10
        }}>
          {/* Left Content */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '32px', minWidth: '0' }}>
            <h1 className="cpage-hero-title" style={{
              fontFamily: 'Inter', fontWeight: 600, fontSize: '60px', lineHeight: '1.2', color: '#FFFFFF',
              whiteSpace: 'nowrap'
            }}>
              Learn with <span style={{ color: '#FFB61E' }}>Purpose.</span><br />
              Grow with <span style={{ color: '#FFB61E' }}>Confidence.</span>
            </h1>

            <p className="cpage-hero-desc" style={{
              maxWidth: '498px',
              fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#FFFFFF',
              opacity: 0.9
            }}>
              Structured A1–B2 German language courses designed to help you build strong communication skills and move towards global career and study opportunities.
            </p>

            <button className="btn-yellow" style={{ width: '193px', height: '61px', fontSize: '20px' }}>
              Enquire Now
            </button>
          </div>

          {/* Right Image Section */}
          <div className="cpage-hero-image" style={{ position: 'relative', width: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute', width: '540px', height: '540px',
              borderRadius: '50%', border: '2px solid #25CAD8', opacity: 0.4
            }} />
            <div style={{
              width: '500px', height: '500px', borderRadius: '50%',
              backgroundImage: 'url(/hero-student.png)',
              backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden', position: 'relative'
            }} />
            <div style={{ position: 'absolute', width: '67px', height: '67px', left: '-30px', top: '150px', background: '#25CAD8', borderRadius: '50%', zIndex: 11 }} />
            <div style={{ position: 'absolute', width: '39px', height: '39px', left: '0px', bottom: '100px', background: '#FA4516', borderRadius: '50%', zIndex: 11 }} />
            <div style={{ position: 'absolute', width: '51px', height: '51px', right: '-10px', top: '100px', background: '#FFB61E', borderRadius: '50%', zIndex: 11 }} />
          </div>
        </div>
      </div>

      {/* Content Tabs Section */}
      <div style={{ position: 'relative', width: '100%', marginTop: '100px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF' }}>

        {/* Tabs Bar */}
        <div className="cpage-tabs-row" style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px',
          justifyContent: 'center', width: '100%', maxWidth: '770px', padding: '0 20px',
          marginBottom: '60px'
        }}>
          {["German A1", "German A2", "German B1", "German B2"].map(tab => {
            const isActive = activeTab === tab;
            return (
              <button key={tab} className="cpage-tab-btn" onClick={() => setActiveTab(tab)} style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 24px',
                backgroundColor: isActive ? '#FA4516' : '#FFFFFF',
                border: isActive ? 'none' : '1px solid #2E2E2E',
                borderRadius: '40px',
                minWidth: '173px', height: '61px',
                fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', lineHeight: '29px',
                color: isActive ? '#FFFFFF' : '#2E2E2E',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                {tab}
              </button>
            );
          })}
        </div>

        {/* Level Details Content */}
        <div className="cpage-detail-row" style={{
          display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '1240px',
          gap: '40px', padding: '0 20px', justifyContent: 'space-between', alignItems: 'flex-start'
        }}>
          {/* Left Column: Text */}
          <div className="cpage-detail-text" style={{ flex: '0 1 620px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', lineHeight: '39px', color: '#2E2E2E' }}>
              {currentData.levelTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>Overview:</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', opacity: 0.8 }}>
                {currentData.overview}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>What You Will Learn:</h3>
              <ul style={{
                fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px',
                color: '#2E2E2E', opacity: 0.8, paddingLeft: '24px', margin: 0,
                display: 'flex', flexDirection: 'column', gap: '8px'
              }}>
                {currentData.whatYouWillLearn.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>Outcome:</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', opacity: 0.8 }}>
                {currentData.outcome}
              </p>
            </div>

            <button className="btn-yellow" style={{ width: '193px', height: '61px', marginTop: '16px' }}>
              Enquire Now
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="cpage-detail-image" style={{
            flex: '0 0 566px',
            height: '704px',
            borderRadius: '32px',
            overflow: 'hidden',
            backgroundImage: 'url(/about-classroom.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }} />
        </div>
      </div>

      {/* Your Path to Global Opportunities */}
      <div className="cpage-path-section" style={{
        position: 'relative',
        width: '100%',
        height: '662px',
        backgroundColor: '#061B42',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', height: '100%' }}>
          <div style={{ position: 'absolute', width: '215px', height: '215px', left: '-75px', top: '-50px', background: '#0256EB', filter: 'blur(175px)' }} />
          <div style={{ position: 'absolute', width: '180px', height: '180px', left: '670px', top: '526px', background: '#0256EB', filter: 'blur(175px)' }} />
          <div style={{ position: 'absolute', width: '180px', height: '180px', left: '1045px', top: '-50px', background: '#0256EB', filter: 'blur(175px)' }} />

          <h2 className="cpage-path-title" style={{
            position: 'absolute', width: '100%', top: '60px', left: 0,
            fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', textAlign: 'center', color: '#FFFFFF'
          }}>
            Your Path to Global Opportunities
          </h2>

          <p className="cpage-path-subtitle" style={{
            position: 'absolute', width: '782px', left: 'calc(50% - 782px/2)', top: '142px',
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '29px', textAlign: 'center', color: '#FFFFFF'
          }}>
            A clear step-by-step journey to help you move from learning the language to achieving your career or study goals.
          </p>

          <div className="cpage-path-steps-row" style={{
            position: 'absolute', top: '260px', left: '100px', right: '100px',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'
          }}>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '210px', top: '40px' }}>
              <svg width="140" height="14" viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 11.6804C54.7751 -1.80596 84.991 -1.98069 139.376 11.6804" stroke="white" strokeWidth="3" strokeDasharray="6 6"/>
              </svg>
            </div>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '534px', top: '40px' }}>
              <svg width="140" height="14" viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 11.6804C54.7751 -1.80596 84.991 -1.98069 139.376 11.6804" stroke="white" strokeWidth="3" strokeDasharray="6 6"/>
              </svg>
            </div>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '873px', top: '40px' }}>
              <svg width="140" height="14" viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 11.6804C54.7751 -1.80596 84.991 -1.98069 139.376 11.6804" stroke="white" strokeWidth="3" strokeDasharray="6 6"/>
              </svg>
            </div>

            {STEPS.map((step, idx) => (
              <div key={idx} className="cpage-path-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '259px', zIndex: 10 }}>
                <div style={{
                  width: '100px', height: '100px', backgroundColor: '#FFB61E', borderRadius: '100px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>
                    {step.number}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                  <h3 className="cpage-path-step-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', lineHeight: '39px', textAlign: 'center', color: '#FFFFFF', minHeight: '78px' }}>
                    {step.title}
                  </h3>
                  <p className="cpage-path-step-desc" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '29px', textAlign: 'center', color: '#FFFFFF' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Start Your Journey? Section */}
      <div className="cpage-ready-outer" style={{
        position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '100px', paddingBottom: '100px'
      }}>
        <div className="cpage-ready-container" style={{
          position: 'relative', width: '1266px', height: '474px', borderRadius: '32px'
        }}>
          <div className="cpage-ready-yellow-bg" style={{
            position: 'absolute', left: '0', top: '45px', width: '100%', height: '385px',
            backgroundColor: '#FFB61E', borderRadius: '32px'
          }} />

          <div className="cpage-ready-img" style={{
            position: 'absolute', width: '490px', height: '474px', left: '752px', top: '0px',
            backgroundImage: 'url(/about-classroom.png)', backgroundSize: 'cover', borderRadius: '32px', backgroundPosition: 'center'
          }} />

          <div className="cpage-ready-content" style={{
            position: 'absolute', width: '679px', height: '252px', left: '40px', top: 'calc(50% - 252px/2 + 0.5px)',
            display: 'flex', flexDirection: 'column', gap: '32px'
          }}>
            <h2 className="cpage-ready-title" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '60px', color: '#2E2E2E' }}>
              Ready to Start Your Journey?
            </h2>
            <p className="cpage-ready-desc" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E' }}>
              Take the first step towards building your future with structured learning, expert guidance, and real career opportunities.
            </p>

            <div className="cpage-ready-btn-row" style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
              <button className="cpage-ready-btn" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 24px',
                width: '236px', height: '61px', backgroundColor: '#2C4B82', border: '1px solid #FFFFFF',
                borderRadius: '16px', fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF', cursor: 'pointer'
              }}>
                Explore Courses
              </button>
              <button className="cpage-ready-btn" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 24px',
                width: '193px', height: '61px', backgroundColor: '#2C4B82', border: '1px solid #FFFFFF',
                borderRadius: '16px', fontFamily: 'Inter', fontWeight: 500, fontSize: '24px', color: '#FFFFFF', cursor: 'pointer'
              }}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
