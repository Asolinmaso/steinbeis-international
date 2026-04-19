"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, RevealX } from '@/components/motion';

const FAQS = [
  {
    question: "Do you offer beginner-friendly classes?",
    answer: "Yes. We offer beginner-friendly German classes. Students with no prior knowledge of German are welcome; our courses start from the absolute beginner level (A1 to B2)."
  },
  {
    question: "Are the courses aligned with Goethe Certification?",
    answer: "Yes, our curriculum is designed to prepare you fully for Goethe-Zertifikat examinations at all levels."
  },
  {
    question: "Is the training suitable for working professionals?",
    answer: "Absolutely. We offer flexible scheduling designed to accommodate the busy lifestyles of working professionals."
  },
  {
    question: "Are classes available on weekdays and evenings?",
    answer: "Yes, we run multiple batches including evening slots and weekend intensives."
  },
  {
    question: "Do you provide exam preparation support?",
    answer: "Yes, focused mock tests and exam preparation modules are included heavily in the B1 and B2 stages."
  }
];

export default function ContactPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <main style={{ position: 'relative', width: '100%' }}>

      <Navbar />

      {/* Hero Banner */}
      <div
        className="contact-hero"
        style={{
        position: 'relative',
        width: '100%',
        minHeight: '543px',
        marginTop: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#061B42',
        backgroundImage: 'linear-gradient(0deg, rgba(6, 27, 66, 0.8), rgba(6, 27, 66, 0.8)), url(/contact_banner_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0 20px',
        zIndex: 10
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', maxWidth: '800px', textAlign: 'center' }}>
          <Reveal>
          <h1 className="contact-hero-title" style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '64px', lineHeight: '77px', color: '#FFFFFF'
          }}>
            Get in Touch <span style={{ color: '#FFB61E' }}>With Us</span>
          </h1>
          </Reveal>
          <Reveal delay={0.1}>
          <p className="contact-hero-desc" style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF'
          }}>
            Have questions or need guidance? Reach out to us and take the first step towards your learning journey with expert support.
          </p>
          </Reveal>
        </div>
      </div>

      {/* Main Content Area: Contact Info + Form */}
      <div
        className="contact-main-section"
        style={{
        width: '100%', display: 'flex', justifyContent: 'center', padding: '100px 0', backgroundColor: '#FFFFFF'
      }}
      >
        <div className="contact-main-row" style={{
          width: '100%', maxWidth: '1240px', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', padding: '0 100px', gap: '60px'
        }}>

          {/* Left Side: Contact Info */}
          <RevealX className="contact-info-col" x={-40} style={{ flex: '1', display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
            <Reveal>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', color: '#2E2E2E', marginBottom: '24px' }}>
              Let's Connect &<br/>
              Begin <span style={{ color: '#FA4516' }}>Your Journey</span>
            </h2>
            </Reveal>
            <Reveal delay={0.08}>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', marginBottom: '40px' }}>
              Find all the ways to connect with us, from direct contact details to visiting our campus.
            </p>
            </Reveal>

            <Reveal delay={0.14}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#25CAD8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '24px' }}>📞</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>Contact</span>
                  <span className="contact-info-detail" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#2E2E2E' }}>09600116858</span>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#25CAD8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '24px' }}>✉️</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>E-mail</span>
                  <span className="contact-info-detail" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#2E2E2E', wordBreak: 'break-word' }}>steinbeisinternational@gmail.com</span>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#25CAD8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '24px' }}>📍</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E' }}>Address</span>
                  <span className="contact-info-detail" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E' }}>
                    Building No. 1/288, East Coast Road, Kottivakkam, Near Tamil Matrimony Office, Thiruvanmiyur, Chennai, Tamil Nadu – 600041
                  </span>
                </div>
              </div>
            </div>
            </Reveal>
          </RevealX>

          {/* Right Side: Form */}
          <RevealX className="contact-form-col" x={40} style={{ flex: '1', display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
            <Reveal>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', color: '#2E2E2E', marginBottom: '16px' }}>
              Let's Get <span style={{ color: '#FA4516' }}>In Touch</span>
            </h2>
            </Reveal>
            <Reveal delay={0.08}>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', marginBottom: '40px' }}>
              Let us know your concern, and we'll get back to you within 24 hours.
            </p>
            </Reveal>

            <Reveal delay={0.14}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} onSubmit={(e) => e.preventDefault()}>
              {/* Row 1 */}
              <div className="contact-form-pair-row" style={{ display: 'flex', gap: '32px' }}>
                <input type="text" placeholder="First Name" className="contact-form-input" style={{
                  flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                  fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                }} />
                <input type="text" placeholder="Last Name" className="contact-form-input" style={{
                  flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                  fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                }} />
              </div>

              {/* Row 2 */}
              <div className="contact-form-pair-row" style={{ display: 'flex', gap: '32px' }}>
                <input type="email" placeholder="Email" className="contact-form-input" style={{
                  flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                  fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                }} />
                <div style={{ flex: 1, display: 'flex', borderBottom: '1px solid #C4C4C4', padding: '12px 0', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: '20px', color: '#2E2E2E', marginRight: '16px' }}>+91</span>
                  <input type="tel" placeholder="Phone number" className="contact-form-input" style={{
                    border: 'none', flex: 1, fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                  }} />
                </div>
              </div>

              <select
                defaultValue=""
                style={{
                  width: '100%', border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                  fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent', appearance: 'none',
                  color: '#2E2E2E'
                }}
              >
                <option value="" disabled>Select Course</option>
                <option value="A1">German A1</option>
                <option value="A2">German A2</option>
                <option value="B1">German B1</option>
                <option value="B2">German B2</option>
              </select>

              <textarea placeholder="Message" rows={3} style={{
                width: '100%', border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                fontFamily: 'Inter', fontSize: '20px', outline: 'none', resize: 'vertical', backgroundColor: 'transparent'
              }}></textarea>

              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '16px' }}>
                <button type="submit" className="btn-yellow" style={{ padding: '16px 40px' }}>
                  Send Message
                </button>
              </div>
            </form>
            </Reveal>
          </RevealX>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="contact-faq-section"
        style={{
        width: '100%', display: 'flex', justifyContent: 'center', padding: '100px 0', backgroundColor: '#FFFFFF'
      }}
      >
        <div className="contact-faq-row" style={{
          width: '100%', maxWidth: '1240px', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', padding: '0 100px', gap: '60px'
        }}>
          {/* Left Side: FAQ Header & Still-have-questions Box */}
          <RevealX className="contact-faq-left" x={-36} style={{ flex: '0 0 483px', display: 'flex', flexDirection: 'column' }}>
            <Reveal>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', color: '#2E2E2E', marginBottom: '24px' }}>
              Frequently Asked<br/>
              <span style={{ color: '#FA4516' }}>Questions</span>
            </h2>
            </Reveal>
            <Reveal delay={0.08}>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', opacity: 0.8, marginBottom: '40px' }}>
              Find answers to common questions about our courses, learning process, and support services.
            </p>
            </Reveal>

            {/* Dark Blue Box */}
            <Reveal delay={0.14}>
            <div className="contact-still-box" style={{
              backgroundColor: '#071B42', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px'
            }}>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '32px', color: '#FFFFFF' }}>
                Still have questions?
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '28px', color: '#FFFFFF', opacity: 0.9 }}>
                Our team is here to help you with the right guidance and support.
              </p>
              <button className="btn-yellow" style={{ alignSelf: 'flex-start' }}>
                Enquire Now
              </button>
            </div>
            </Reveal>
          </RevealX>

          {/* Right Side: Accordion */}
          <RevealX className="contact-faq-right" x={36} style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <Reveal key={index} delay={0.04 * index}>
                <div style={{
                  backgroundColor: '#EAF2FF', border: '1px solid #2C4B82', borderRadius: '16px',
                  padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
                  cursor: 'pointer', transition: 'all 0.3s ease'
                }} onClick={() => toggleFAQ(index)}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className="contact-faq-q" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: '#2E2E2E', margin: 0, paddingRight: '20px' }}>
                      {faq.question}
                    </h4>
                    <div style={{
                      width: '40px', height: '40px', backgroundColor: '#2C4B82', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ borderTop: '1px solid rgba(44,75,130,0.2)', paddingTop: '16px' }}>
                      <p className="contact-faq-a" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '20px', lineHeight: '30px', color: '#2E2E2E', margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
                </Reveal>
              );
            })}
          </RevealX>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map-wrapper" style={{
        width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '0 100px 60px 100px'
      }}>
        <div style={{
          width: '100%', maxWidth: '1240px', height: '100%', borderRadius: '24px',
          overflow: 'hidden', border: '1px solid #E0E0E0'
        }}>
          <iframe
            src="https://maps.google.com/maps?q=Building%20No.%201/288,%20East%20Coast%20Road,%20Kottivakkam,%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
