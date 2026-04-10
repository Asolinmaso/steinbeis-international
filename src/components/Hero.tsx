import React from 'react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '1090px',
      marginTop: '120px', /* offset for navbar */
      backgroundColor: '#061B42',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Background Ellipses */}
      <div style={{
        position: 'absolute',
        width: '863px', height: '863px',
        left: 'calc(50% - 863px/2)', top: '507px',
        background: '#0A2A66', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '805px', height: '805px',
        left: 'calc(50% - 805px/2)', top: '536px',
        background: '#082458', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '753px', height: '753px',
        left: 'calc(50% - 753px/2)', top: '562px',
        background: '#061C45', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '686px', height: '686px',
        left: 'calc(50% - 686px/2)', top: '595px',
        background: '#06193B', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '622px', height: '622px',
        left: 'calc(50% - 622px/2)', top: '627px',
        background: '#041431', borderRadius: '50%'
      }} />
      
      {/* Blur Ellipses */}
      <div style={{
        position: 'absolute',
        width: '215px', height: '215px',
        left: '1201px', top: '844px',
        background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '215px', height: '215px',
        left: '1122px', top: '-54px',
        background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        width: '215px', height: '215px',
        left: '73px', top: '291px',
        background: '#0256EB', filter: 'blur(200px)', borderRadius: '50%'
      }} />

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        marginTop: '80px',
        width: '1177px',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%'
        }}>
          <h3 style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            lineHeight: '29px', textAlign: 'center', color: '#EDEDED'
          }}>
            German Language Training in Chennai
          </h3>
          <h1 style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: '60px',
            lineHeight: '70px', textAlign: 'center', color: '#FFFFFF',
            width: '100%'
          }}>
            Build Your <span style={{ color: '#FFB61E' }}>Career in Germany</span> with <br/> German Language Training
          </h1>
          <p style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '24px',
            lineHeight: '29px', textAlign: 'center', color: '#EDEDED',
            width: '781px'
          }}>
            Structured A1–B2 German courses with certified trainers, practical learning, and complete guidance for study and jobs in Germany.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          <button className="btn-yellow" style={{ width: '193px', height: '61px' }}>
            Enquire Now
          </button>
          <button style={{ 
            width: '236px', height: '61px', 
            borderRadius: '16px', 
            border: '1px solid #FFB61E', 
            background: 'transparent', 
            color: '#FFB61E', 
            fontFamily: 'Inter', fontWeight: 500, fontSize: '20px',
            cursor: 'pointer'
          }}>
            Explore More
          </button>
        </div>
      </div>

      {/* Hero Image & Floating Elements Setup */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        marginTop: '50px',
        height: '714px',
        zIndex: 10
      }}>
        {/* Main Hero Image */}
        <div style={{
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

        {/* Floating Pills */}
        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '12px 24px', gap: '10px',
          left: '106px', top: '255px', // Adjusted tops relative to image container for better spread
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            100% Practical Learning
          </span>
        </div>

        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 24px', gap: '10px',
          left: '97px', top: '425px',
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animationDelay: '0.2s'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            Experienced Trainers
          </span>
        </div>

        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 24px', gap: '10px',
          left: '163px', top: '93px',
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animationDelay: '0.4s'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            Beginner to Advanced (A1–B2)
          </span>
        </div>

        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 24px', gap: '10px',
          right: '50px', top: '93px',
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animationDelay: '0.1s'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            Flexible Batch Timings
          </span>
        </div>

        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 24px', gap: '10px',
          right: '-50px', top: '255px',
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animationDelay: '0.3s'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            Visa Support Assistance
          </span>
        </div>

        <div style={{
          position: 'absolute',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 24px', gap: '10px',
          right: '20px', top: '425px',
          borderRadius: '40px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animationDelay: '0.5s'
        }} className="animate-fadeInUp">
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '24px', color: '#EDEDED' }}>
            German Job Guidance
          </span>
        </div>
      </div>
    </section>
  );
}
