import React from "react";

/**
 * PROFESSIONAL SUMMARY COMPONENT
 * @param {boolean} isDarkMode - Theme state for dynamic styling passed from App.jsx
 */
function Summary({ isDarkMode }) {
  return (
    <section className={`pro-summary-section ${isDarkMode ? '' : 'light'}`}>
      <div className="pro-summary-container">
        
        {/* SECTION HEADER INTERFACE */}
        <div className="pro-section-header">
          <i className="fas fa-user-tie"></i>
          <h2>Professional Summary</h2>
        </div>

        {/* PRIMARY SUMMARY CARD */}
        <div className="pro-summary-card">
          {/* INTERACTIVE BACKGROUND ICON */}
          <i className="fas fa-id-card pro-summary-bg-icon"></i>
          
          <div className="pro-summary-content">
            <p>
              I am a dedicated <strong>BCA Candidate (Class of 2025)</strong> with a strong academic record, achieving a <strong>7.94 CGPA</strong>. 
              Backed by technical operations expertise, I excel at bridging the gap between legacy systems and modern web solutions with <strong>100% data integrity</strong>.
            </p>
            <p>
              Proven track record of developing live client projects like <em>Shiv Chula Dosa Hub</em>, where I integrated <strong>Custom JavaScript Logic</strong>, <strong>WhatsApp API</strong>, and a <strong>UPI Payment Gateway</strong> for a fully automated ordering experience. 
              I am eager to contribute my expertise as a <strong>Web & Android Developer</strong> or a <strong>Computer Educator</strong> to guide and inspire the next generation of IT professionals in Gujarat.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* --- SUMMARY COMPONENT SPECIFIC STYLES --- */
        .pro-summary-section { 
          width: 100%; 
          display: flex; 
          justify-content: center; 
          padding: 0 20px; 
        }
        
        .pro-summary-container { 
          width: 95%; 
          max-width: 1400px; 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start;
          margin-bottom: 25px; 
        }

        /* HEADER TYPOGRAPHY & LAYOUT */
        .pro-section-header { 
          display: flex; 
          align-items: center; 
          gap: 15px; 
          margin-bottom: 15px; 
          color: #818cf8; 
          padding-left: 5px;
          width: 100%;
        }
        
        .pro-section-header i {
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        
        .pro-section-header h2 { 
          font-size: 2.2rem; 
          font-weight: 700; 
          letter-spacing: 0.8px; 
          margin: 0;
        }

        /* LIGHT MODE HEADER OVERRIDES */
        .pro-summary-section.light .pro-section-header {
          color: #1e3a8a; /* Deep Navy Blue */
        }

        /* GLASSMORPHISM CARD DESIGN */
        .pro-summary-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03); 
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1); 
          border-radius: 28px;
          padding: 40px 60px;
          overflow: hidden;
          width: 100%; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .pro-summary-card:hover {
          transform: translateY(-8px) scale(1.015); 
          border-color: rgba(129, 140, 248, 0.6); 
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(129, 140, 248, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }

        /* LIGHT MODE CARD OVERRIDES (ICE-BLUE GLASS) */
        .pro-summary-section.light .pro-summary-card {
          background: rgba(224, 242, 254, 0.6); /* Soft Ice-Blue */
          border-color: rgba(30, 58, 138, 0.15); /* Soft Navy Border */
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .pro-summary-section.light .pro-summary-card:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4); /* Stronger Blue on Hover */
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.1);
        }

        /* WATERMARK DYNAMICS */
        .pro-summary-bg-icon {
          position: absolute;
          right: -30px;
          bottom: -30px;
          font-size: 14rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          transform: rotate(-10deg);
          transition: 0.5s ease;
        }

        .pro-summary-card:hover .pro-summary-bg-icon {
          color: rgba(129, 140, 248, 0.08);
          transform: rotate(0deg) scale(1.1);
        }

        /* LIGHT MODE WATERMARK OVERRIDES */
        .pro-summary-section.light .pro-summary-bg-icon {
          color: rgba(30, 58, 138, 0.04);
        }

        .pro-summary-section.light .pro-summary-card:hover .pro-summary-bg-icon {
          color: rgba(37, 99, 235, 0.08);
        }

        /* CONTENT TYPOGRAPHY */
        .pro-summary-content {
          position: relative;
          z-index: 1;
        }

        .pro-summary-content p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 15px;
        }

        .pro-summary-content strong, 
        .pro-summary-content b, 
        .pro-summary-content em, 
        .pro-summary-content i {
          color: #818cf8 !important;
          font-weight: bold;
        }

        /* LIGHT MODE TYPOGRAPHY OVERRIDES */
        .pro-summary-section.light .pro-summary-content p {
          color: #475569; /* Sharp Slate-Grey */
        }

        .pro-summary-section.light .pro-summary-content strong,
        .pro-summary-section.light .pro-summary-content b,
        .pro-summary-section.light .pro-summary-content em,
        .pro-summary-section.light .pro-summary-content i {
          color: #2563eb !important; /* Bold Royal Blue */
        }

        /* --- RESPONSIVE ADAPTATION: MOBILE VIEWPORTS --- */
        @media (max-width: 768px) {
          .pro-summary-section {
            padding: 0 10px;
          } 
          
          .pro-summary-container {
            width: 95%;
            margin-bottom: 20px;
          }
          
          .pro-section-header { 
            gap: 10px; 
            margin-bottom: 10px; 
          }

          .pro-section-header i {
            font-size: 1.4rem;
          }
          
          .pro-section-header h2 { 
            font-size: 1.5rem; 
            white-space: normal;
            word-break: break-word;
            line-height: 1.3;
          }

          .pro-summary-card {
            padding: 20px 15px;
            border-radius: 20px;
          }

          .pro-summary-content p {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .pro-summary-bg-icon {
            font-size: 8rem;
            right: -15px;
            bottom: -15px;
          }
        }
      `}</style>
    </section>
  );
}

export default Summary;