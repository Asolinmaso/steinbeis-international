"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, replayViewport, Reveal, RevealX } from "@/components/motion";
import {
  COURSE_LEVEL_TABS,
  type CourseLevelTab,
  isCourseLevelTab,
} from "@/constants/courseLevels";

interface CourseNode {
  levelTitle: string;
  overview: string;
  whatYouWillLearn: string[];
  outcome: string;
  img: string;
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
    outcome: "You will be able to understand and use simple expressions and communicate in basic everyday situations.",
    img: "/course_german_A1.png"
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
    outcome: "You will be able to communicate in simple and routine tasks, understand commonly used expressions, and handle basic conversations with more confidence.",
    img: "/course_german_A2.png"
  },
  "German B1": {
    levelTitle: "German B1 – Intermediate Level",
    overview: "This level is ideal for learners who want to become independent users of the German language. It focuses on improving fluency, expressing opinions, and handling real-life situations more effectively.",
    whatYouWillLearn: [
      "Engaging in conversations on familiar topics",
      "Expressing opinions, ideas, and experiences clearly",
      "Understanding longer texts and discussions",
      "Intermediate grammar (complex sentences, tenses, modal verbs)"
    ],
    outcome: "You will be able to communicate independently in everyday and professional situations, understand main points of discussions, and express yourself clearly in German.",
    img: "/course_german_B1.png"
  },
  "German B2": {
    levelTitle: "German B2 – Upper Intermediate Level",
    overview: "This level is designed for learners aiming for advanced communication and professional use of German. It focuses on fluency, accuracy, and understanding complex topics in academic and work environments.",
    whatYouWillLearn: [
      "Communicate fluently in various situations",
      "Understand complex texts and discussions",
      "Participate in professional conversations",
      "Use advanced grammar effectively"
    ],
    outcome: "You will be able to communicate effectively in professional and academic settings, understand detailed conversations, and express ideas clearly and confidently.",
    img: "/course_german_B2.png"
  }
};

const STEPS = [
  { number: "01", title: "Start Your Learning", desc: "Begin with structured A1–B2 German language training." },
  { number: "02", title: "Build New Skills", desc: "Develop communication skills for real-world use." },
  { number: "03", title: "Prepare for Exams", desc: "Get guided support and practice for Goethe certification exams." },
  { number: "04", title: "Explore Opportunities", desc: "Take the next step towards study or career opportunities." }
];

function CoursesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<CourseLevelTab>("German A1");

  useEffect(() => {
    const q = searchParams.get("course");
    if (isCourseLevelTab(q)) {
      setActiveTab(q);
    }
  }, [searchParams]);

  const selectTab = (tab: CourseLevelTab) => {
    setActiveTab(tab);
    const next = new URLSearchParams(searchParams.toString());
    next.set("course", tab);
    router.replace(`/courses?${next.toString()}`, { scroll: false });
  };

  const currentData = CourseData[activeTab];

  return (
    <main style={{ position: 'relative', width: '100%' }}>

      <Navbar />

      {/* Header Hero Section */}
      <section className="cpage-hero" style={{
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
        {/* Background circles — replay on each viewport entry */}
        <motion.div
          className="hero-circle"
          style={{ position: 'absolute', width: '800px', height: '800px', left: 'auto', right: '-200px', top: '-100px', background: '#0A2A66', borderRadius: '50%' }}
          initial={{ scale: 0.72, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          viewport={replayViewport}
          transition={{ duration: 1.15, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="hero-circle"
          style={{ position: 'absolute', width: '700px', height: '700px', left: 'auto', right: '-150px', top: '-50px', background: '#082458', borderRadius: '50%' }}
          initial={{ scale: 0.72, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          viewport={replayViewport}
          transition={{ duration: 1.15, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Blur Ellipses Background */}
        <div style={{ position: 'absolute', width: '400px', height: '400px', left: '-100px', top: '-100px', background: '#0256EB', filter: 'blur(200px)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', right: '-100px', bottom: '-100px', background: '#0256EB', filter: 'blur(200px)', opacity: 0.4 }} />

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
            <Reveal>
              <h1 className="cpage-hero-title" style={{
                fontFamily: 'Inter', fontWeight: 600, fontSize: '60px', lineHeight: '1.2', color: '#FFFFFF',
                whiteSpace: 'nowrap'
              }}>
                Learn with <span style={{ color: '#FFB61E' }}>Purpose.</span><br />
                Grow with <span style={{ color: '#FFB61E' }}>Confidence.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="cpage-hero-desc" style={{
                maxWidth: '498px',
                fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#FFFFFF',
                opacity: 0.9
              }}>
                Structured A1–B2 German language courses designed to help you build strong communication skills and move towards global career and study opportunities.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <Link href="/contact">
                <button className="btn-yellow" style={{ height: '61px', fontSize: '20px', textAlign: 'center' }}>
                  Enquire Now
                </button>
              </Link>
            </Reveal>
          </div>

          {/* Right Image Section */}
          <RevealX x={48} className="cpage-hero-image" style={{
            position: 'relative',
            width: '500px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div
              className="cpage-hero-ring"
              style={{
                position: 'absolute', width: '560px', height: '560px',
                borderRadius: '50%', border: '1px solid #25CAD8', opacity: 0.3
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.3 }}
              viewport={replayViewport}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="cpage-hero-ring"
              style={{
                position: 'absolute', width: '620px', height: '620px',
                borderRadius: '50%', border: '1px solid #FFB61E', opacity: 0.2
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={replayViewport}
              transition={{ duration: 0.95, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="cpage-hero-photo"
              style={{
                width: '500px', height: '500px',
                borderRadius: '24px',
                backgroundImage: 'url(/courses_banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'rgba(0, 0, 0, 0) 0px 20px 40px',
                zIndex: 12
              }}
              initial={{ opacity: 0, scale: 0.92, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={replayViewport}
              transition={{ type: 'spring', stiffness: 82, damping: 17, delay: 0.2 }}
            />

            <motion.div
              className="cpage-hero-sparkle"
              style={{ position: 'absolute', width: '67px', height: '67px', left: '-30px', top: '150px', background: '#25CAD8', borderRadius: '50%', zIndex: 13 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={replayViewport}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.55 }}
            />
            <motion.div
              className="cpage-hero-sparkle"
              style={{ position: 'absolute', width: '39px', height: '39px', left: '0px', bottom: '100px', background: '#FA4516', borderRadius: '50%', zIndex: 13 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={replayViewport}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.65 }}
            />
            <motion.div
              className="cpage-hero-sparkle"
              style={{ position: 'absolute', width: '51px', height: '51px', right: '-10px', top: '100px', background: '#FFB61E', borderRadius: '50%', zIndex: 13 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={replayViewport}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.75 }}
            />
          </RevealX>
        </div>
      </section>

      {/* Content Tabs Section */}
      <div
        id="course-levels"
        className="cpage-levels-section"
        style={{ position: 'relative', width: '100%', marginTop: '120px', paddingBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF' }}
      >

        {/* Tabs Bar */}
        <Reveal>
          <div className="cpage-tabs-row" style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px',
            justifyContent: 'center', width: '100%', maxWidth: '770px', padding: '0 20px',
            marginBottom: '60px'
          }}>
            {COURSE_LEVEL_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button key={tab} type="button" className="cpage-tab-btn" onClick={() => selectTab(tab)} style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
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
        </Reveal>

        {/* Level Details Content */}
        <div className="cpage-detail-row" style={{
          display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '1240px',
          gap: '80px', padding: '0 20px', justifyContent: 'space-between', alignItems: 'flex-start'
        }}>
          {/* Left Column: Text */}
          <RevealX className="cpage-detail-text" x={-36} style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '40px', lineHeight: '48px', color: '#2E2E2E', margin: 0 }}>
              {currentData.levelTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E', margin: 0 }}>Overview:</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: '#2E2E2E', opacity: 0.9, margin: 0 }}>
                {currentData.overview}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E', margin: 0 }}>What You Will Learn:</h3>
              <ul style={{
                fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '30px',
                color: '#2E2E2E', opacity: 0.9, paddingLeft: '24px', margin: 0,
                display: 'flex', flexDirection: 'column', gap: '10px'
              }}>
                {currentData.whatYouWillLearn.map((item, idx) => (
                  <li key={idx} style={{ paddingLeft: '4px' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E', margin: 0 }}>Outcome:</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: '#2E2E2E', opacity: 0.9, margin: 0 }}>
                {currentData.outcome}
              </p>
            </div>

            <Link href="/contact">
              <button className="btn-yellow" style={{ height: '61px', marginTop: '8px' }}>
                Enquire Now
              </button>
            </Link>
          </RevealX>

          {/* Right Column: Image */}
          <RevealX
            key={activeTab}
            className="cpage-detail-image"
            x={40}
            delay={0.06}
            style={{
              flex: '0 0 540px',
              height: '670px',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundImage: `url(${currentData.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>

      {/* Your Path to Global Opportunities */}
      <div
        className="cpage-path-section"
        style={{
          position: 'relative',
          width: '100%',
          height: '662px',
          backgroundColor: '#061B42',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', height: '100%' }}>
          <div style={{ position: 'absolute', width: '215px', height: '215px', left: '-75px', top: '-50px', background: '#0256EB', filter: 'blur(175px)' }} />
          <div style={{ position: 'absolute', width: '180px', height: '180px', left: '670px', top: '526px', background: '#0256EB', filter: 'blur(175px)' }} />
          <div style={{ position: 'absolute', width: '180px', height: '180px', left: '1045px', top: '-50px', background: '#0256EB', filter: 'blur(175px)' }} />

          <Reveal
            className="cpage-path-title"
            style={{
              position: 'absolute', width: '100%', top: '60px', left: 0,
              fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', textAlign: 'center', color: '#FFFFFF'
            }}
          >
            <h2 style={{ margin: 0, font: 'inherit', color: 'inherit' }}>
              Your Path to <span style={{ color: '#FFB61E' }}>Global Opportunities</span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="cpage-path-subtitle"
            style={{
              position: 'absolute', width: '782px', left: 'calc(50% - 782px/2)', top: '142px',
              fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '29px', textAlign: 'center', color: '#FFFFFF'
            }}
          >
            <p style={{ margin: 0, font: 'inherit', color: 'inherit' }}>
              A clear step-by-step journey to help you move from learning the language to achieving your career or study goals.
            </p>
          </Reveal>

          <div className="cpage-path-steps-row" style={{
            position: 'absolute', top: '260px', left: '100px', right: '100px',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'
          }}>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '220px', top: '49.36px' }}>
              <svg width="140" height="18" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 2.3196C54.7751 15.806 84.991 15.9807 139.376 2.3196" stroke="white" strokeWidth="3" strokeDasharray="3.6 15" strokeLinecap="round" />
              </svg>
            </div>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '554px', top: '36px' }}>
              <svg width="140" height="18" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 15.6804C54.7751 2.19404 84.991 2.01931 139.376 15.6804" stroke="white" strokeWidth="3" strokeDasharray="3.6 15" strokeLinecap="round" />
              </svg>
            </div>
            <div className="cpage-path-dashes" style={{ position: 'absolute', left: '883px', top: '49.36px' }}>
              <svg width="140" height="18" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.361328 2.3196C54.7751 15.806 84.991 15.9807 139.376 2.3196" stroke="white" strokeWidth="3" strokeDasharray="3.6 15" strokeLinecap="round" />
              </svg>
            </div>

            {STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <Reveal delay={0.08 * idx} className="cpage-path-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '259px', zIndex: 10 }}>
                  <div style={{
                    width: '100px', height: '100px', backgroundColor: '#FFB61E', borderRadius: '100px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>
                      {step.number}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <h3 className="cpage-path-step-title" style={{
                      fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', lineHeight: '39px', textAlign: 'center', color: '#FFFFFF',
                      minHeight: '78px', maxWidth: '200px'
                    }}>
                      {step.title}
                    </h3>
                    <p className="cpage-path-step-desc" style={{
                      fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '28px', textAlign: 'center', color: '#FFFFFF',
                      maxWidth: '191px', opacity: 0.9
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
                {idx < STEPS.length - 1 && (
                  <div className="cpage-path-mobile-connector" style={{ display: 'none' }}>
                    <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                      <motion.path
                        d={idx % 2 === 0 ? "M30 0C50 33 50 66 30 100" : "M30 0C10 33 10 66 30 100"}
                        stroke="white"
                        strokeWidth="3"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [0, -14] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Start Your Journey? Section */}
      <div
        className="cpage-ready-outer"
        style={{
          position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '120px', paddingBottom: '180px'
        }}
      >
        <div className="cpage-ready-container" style={{
          position: 'relative', width: '1266px', height: '474px', borderRadius: '32px'
        }}>
          <motion.div
            className="cpage-ready-yellow-bg"
            style={{
              position: 'absolute', left: '0', top: '45px', width: '100%', height: '385px',
              backgroundColor: '#FFB61E', borderRadius: '32px', transformOrigin: '50% 50%'
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={replayViewport}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.06 }}
          />

          <motion.div
            className="cpage-ready-img"
            style={{
              position: 'absolute', width: '490px', height: '474px', left: '752px', top: '0px',
              backgroundImage: 'url(/start_journey.png)', backgroundSize: 'cover', borderRadius: '32px', backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, x: 56, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={replayViewport}
            transition={{ type: 'spring', stiffness: 85, damping: 17, delay: 0.14 }}
          />

          <motion.div
            className="cpage-ready-content"
            style={{
              position: 'absolute', width: '679px', height: '252px', left: '60px', top: 'calc(50% - 252px/2 + 0.5px)',
              display: 'flex', flexDirection: 'column', gap: '32px'
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={replayViewport}
            transition={{ type: 'spring', stiffness: 88, damping: 18, delay: 0.1 }}
          >
            <h2 className="cpage-ready-title" style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '40px', lineHeight: '58px', color: '#2E2E2E', margin: 0 }}>
              Ready to Start Your Journey?
            </h2>
            <p className="cpage-ready-desc" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '22px', lineHeight: '30px', color: '#2E2E2E', margin: 0 }}>
              Take the first step towards building your future with structured learning, expert guidance, and real career opportunities.
            </p>

            <div className="cpage-ready-btn-row" style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
              <Link href="#course-levels">
                <button className="cpage-ready-btn" style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 36px',
                  backgroundColor: '#2C4B82', border: 'none',
                  borderRadius: '16px', fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', color: '#FFFFFF', cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Explore Courses
                </button>
              </Link>
              <Link href="/contact">
                <button className="cpage-ready-btn" style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 36px',
                  backgroundColor: '#2C4B82', border: 'none',
                  borderRadius: '16px', fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', color: '#FFFFFF', cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Enquire Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <main style={{ position: "relative", width: "100%", minHeight: "60vh" }}>
          <Navbar />
        </main>
      }
    >
      <CoursesPageContent />
    </Suspense>
  );
}
