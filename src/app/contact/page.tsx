"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, RevealX } from '@/components/motion';
type FormStatus = "idle" | "submitting" | "success" | "error";

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

const COUNTRY_CODES = [
  { code: '+91', label: '+91' },
  { code: '+49', label: '+49' },
  { code: '+1', label: '+1' },
  { code: '+44', label: '+44' },
  { code: '+61', label: '+61' },
  { code: '+971', label: '+971' },
  { code: '+65', label: '+65' },
  { code: '+33', label: '+33' },
  { code: '+39', label: '+39' },
  { code: '+31', label: '+31' },
  { code: '+41', label: '+41' },
  { code: '+43', label: '+43' },
  { code: '+32', label: '+32' },
  { code: '+46', label: '+46' },
  { code: '+47', label: '+47' },
  { code: '+45', label: '+45' },
  { code: '+358', label: '+358' },
  { code: '+353', label: '+353' },
  { code: '+351', label: '+351' },
  { code: '+30', label: '+30' },
  { code: '+420', label: '+420' },
  { code: '+48', label: '+48' },
  { code: '+36', label: '+36' },
  { code: '+40', label: '+40' },
  { code: '+359', label: '+359' },
  { code: '+421', label: '+421' },
  { code: '+386', label: '+386' },
  { code: '+372', label: '+372' },
  { code: '+371', label: '+371' },
  { code: '+370', label: '+370' },
  { code: '+356', label: '+356' },
  { code: '+357', label: '+357' },
  { code: '+352', label: '+352' },
  { code: '+354', label: '+354' },
  { code: '+94', label: '+94' },
  { code: '+977', label: '+977' },
  { code: '+880', label: '+880' },
  { code: '+92', label: '+92' },
  { code: '+93', label: '+93' },
  { code: '+960', label: '+960' },
  { code: '+975', label: '+975' },
  { code: '+95', label: '+95' },
  { code: '+66', label: '+66' },
  { code: '+60', label: '+60' },
  { code: '+62', label: '+62' },
  { code: '+63', label: '+63' },
  { code: '+84', label: '+84' },
  { code: '+855', label: '+855' },
  { code: '+856', label: '+856' },
  { code: '+673', label: '+673' },
  { code: '+670', label: '+670' },
  { code: '+82', label: '+82' },
  { code: '+886', label: '+886' },
  { code: '+852', label: '+852' },
  { code: '+853', label: '+853' },
  { code: '+972', label: '+972' },
  { code: '+966', label: '+966' },
  { code: '+965', label: '+965' },
  { code: '+968', label: '+968' },
  { code: '+974', label: '+974' },
  { code: '+973', label: '+973' },
  { code: '+962', label: '+962' },
  { code: '+961', label: '+961' },
  { code: '+963', label: '+963' },
  { code: '+964', label: '+964' },
  { code: '+967', label: '+967' },
  { code: '+20', label: '+20' },
  { code: '+212', label: '+212' },
  { code: '+213', label: '+213' },
  { code: '+216', label: '+216' },
  { code: '+218', label: '+218' },
  { code: '+249', label: '+249' },
  { code: '+251', label: '+251' },
  { code: '+254', label: '+254' },
  { code: '+255', label: '+255' },
  { code: '+256', label: '+256' },
  { code: '+234', label: '+234' },
  { code: '+233', label: '+233' },
  { code: '+27', label: '+27' },
  { code: '+55', label: '+55' },
  { code: '+54', label: '+54' },
  { code: '+56', label: '+56' },
  { code: '+57', label: '+57' },
  { code: '+51', label: '+51' },
  { code: '+58', label: '+58' },
  { code: '+52', label: '+52' },
  { code: '+506', label: '+506' },
  { code: '+507', label: '+507' },
  { code: '+593', label: '+593' },
  { code: '+598', label: '+598' },
  { code: '+595', label: '+595' },
  { code: '+591', label: '+591' },
  { code: '+7', label: '+7' },
  { code: '+380', label: '+380' },
  { code: '+90', label: '+90' },
  { code: '+98', label: '+98' },
  { code: '+998', label: '+998' },
];

export default function ContactPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-dropdown-container')) {
        setCountryDropdownOpen(false);
        setCourseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setFormStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: `${selectedCountryCode} ${phone}`,
          course,
          message,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setFormStatus("error");
        setFormError(
          data.error ?? "Something went wrong. Please try again."
        );
        return;
      }

      setFormStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setMessage("");
    } catch {
      setFormStatus("error");
      setFormError("Network error. Please check your connection and try again.");
    }
  }

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
          backgroundImage: 'linear-gradient(0deg, rgb(6 27 66 / 36%),rgb(6 27 66 / 0%)), url(/contact_banner_bg.png)',
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
          width: '100%', maxWidth: '1440px', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', padding: '0 100px', gap: '60px'
        }}>

          {/* Left Side: Contact Info */}
          <RevealX className="contact-info-col" x={-40} style={{ flex: '0 0 483px', display: 'flex', flexDirection: 'column' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', color: '#2E2E2E', marginBottom: '20px' }}>
                Let&apos;s Connect &<br />
                Begin <span style={{ color: '#FA4516' }}>Your Journey</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: '#4A4A4A', marginBottom: '48px', maxWidth: '440px' }}>
                Find all the ways to connect with us, from direct contact details to visiting our campus.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#00BDD6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/call.png" alt="Call" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '18px', color: '#2E2E2E' }}>Contact</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#4A4A4A' }}>09600116858</span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#00BDD6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/email.png" alt="Email" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '18px', color: '#2E2E2E' }}>E-mail</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#4A4A4A', wordBreak: 'break-word' }}>steinbeisinternational@gmail.com</span>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#00BDD6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                    <img src="/location.png" alt="Location" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '18px', color: '#2E2E2E' }}>Address</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '26px', color: '#4A4A4A' }}>
                      2nd Floor, 1/228, ECR Main Road,<br />
                      Kottivakkam, Thiruvanmiyur, Chennai,<br />
                      Tamil Nadu – 600041
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </RevealX>

          {/* Right Side: Form */}
          <RevealX id="contact-form" className="contact-form-col" x={40} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <Reveal>
              <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '48px', lineHeight: '58px', color: '#2E2E2E', marginBottom: '8px' }}>
                Let&apos;s Get <span style={{ color: '#FA4516' }}>In Touch</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '28px', color: '#4A4A4A', marginBottom: '32px' }}>
                Let us know your concern, and we&apos;ll get back to<br /> you within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <form
                style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
                onSubmit={handleContactSubmit}
                noValidate
              >
                {/* Row 1 */}
                <div className="contact-form-pair-row" style={{ display: 'flex', gap: '32px' }}>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="contact-form-input"
                    style={{
                      flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                      fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                    }} />
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="contact-form-input"
                    style={{
                      flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                      fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                    }} />
                </div>

                {/* Row 2 */}
                <div className="contact-form-pair-row" style={{ display: 'flex', gap: '32px' }}>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="contact-form-input"
                    style={{
                      flex: 1, border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                      fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                    }} />
                  <div style={{ flex: 1, display: 'flex', borderBottom: '1px solid #C4C4C4', padding: '12px 0', alignItems: 'center' }}>
                    <div className="custom-dropdown-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                      <div
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontFamily: 'Inter',
                          fontSize: '20px',
                          color: '#2E2E2E',
                          cursor: 'pointer',
                          paddingRight: '24px',
                          outline: 'none',
                          width: 'auto',
                          userSelect: 'none'
                        }}
                      >
                        {selectedCountryCode}
                      </div>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        style={{ 
                          position: 'absolute', 
                          right: '0', 
                          pointerEvents: 'none',
                          transform: countryDropdownOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <path d="M0 0L5 6L10 0H0Z" fill="#2E2E2E" />
                      </svg>

                      {countryDropdownOpen && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            left: '0',
                            width: '90px',
                            maxHeight: '300px',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            borderRadius: '8px',
                            overflowY: 'auto',
                            zIndex: 100,
                            padding: '8px 0'
                          }}
                        >
                          {COUNTRY_CODES.map((c, i) => (
                            <div
                              key={i}
                              onClick={() => {
                                setSelectedCountryCode(c.code);
                                setCountryDropdownOpen(false);
                              }}
                              style={{
                                padding: '10px 16px',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                color: '#2E2E2E',
                                cursor: 'pointer',
                                backgroundColor: selectedCountryCode === c.code ? '#F2F2F2' : 'transparent',
                                transition: 'background-color 0.2s ease'
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F2F2F2')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = selectedCountryCode === c.code ? '#F2F2F2' : 'transparent')}
                            >
                              {c.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="contact-form-input"
                      style={{
                        border: 'none', flex: 1, fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent'
                      }} />
                  </div>
                </div>

                <div className="custom-dropdown-container" style={{ position: 'relative', width: '100%' }}>
                  <div
                    onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                    style={{
                      width: '100%', border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                      fontFamily: 'Inter', fontSize: '20px', outline: 'none', backgroundColor: 'transparent',
                      color: course ? '#2E2E2E' : '#888888', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', userSelect: 'none'
                    }}
                  >
                    {course || 'Select Course'}
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      style={{ 
                        transform: courseDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        pointerEvents: 'none' 
                      }}
                    >
                      <path d="M0 0L6 8L12 0H0Z" fill="#2E2E2E" />
                    </svg>
                  </div>

                  {courseDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 1px)',
                        left: '0',
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        borderRadius: '0 0 8px 8px',
                        zIndex: 100,
                        padding: '8px 0',
                        border: '1px solid #E0E0E0',
                        borderTop: 'none'
                      }}
                    >
                      {['German A1', 'German A2', 'German B1', 'German B2'].map((c, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setCourse(c);
                            setCourseDropdownOpen(false);
                          }}
                          style={{
                            padding: '12px 16px',
                            fontFamily: 'Inter',
                            fontSize: '18px',
                            color: '#2E2E2E',
                            cursor: 'pointer',
                            backgroundColor: course === c ? '#F2F2F2' : 'transparent',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F2F2F2')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = course === c ? '#F2F2F2' : 'transparent')}
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={3}
                  style={{
                    width: '100%', border: 'none', borderBottom: '1px solid #C4C4C4', padding: '12px 0',
                    fontFamily: 'Inter', fontSize: '20px', outline: 'none', resize: 'vertical', backgroundColor: 'transparent'
                  }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="submit"
                      className="btn-yellow"
                      style={{ padding: '16px 40px' }}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                  {formStatus === 'success' && (
                    <p
                      role="status"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        color: '#1B5E20',
                        margin: 0,
                      }}
                    >
                      Thank you — your message was sent. We will get back to you soon.
                    </p>
                  )}
                  {formStatus === 'error' && formError && (
                    <p
                      role="alert"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        color: '#C62828',
                        margin: 0,
                      }}
                    >
                      {formError}
                    </p>
                  )}
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
                Frequently Asked<br />
                <span style={{ color: '#FA4516' }}>Questions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#2E2E2E', opacity: 0.8, marginBottom: '270px' }}>
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
                <a href="#contact-form">
                  <button className="btn-yellow" style={{ alignSelf: 'flex-start' }}>
                    Enquire Now
                  </button>
                </a>
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
                          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
            src="https://maps.google.com/maps?q=2nd%20Floor,%201/228,%20ECR%20Main%20Road,%20Kottivakkam,%20Thiruvanmiyur,%20Chennai,%20Tamil%20Nadu%20600041&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
