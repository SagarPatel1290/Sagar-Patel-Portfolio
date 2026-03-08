import React from "react";
/**
 * PROFESSIONAL RESOURCE IMPORTS
 * Importing the resume PDF for the bottom CTA button.
 */
import resumePdf from "../assets/Sagar_Patel_Resume.pdf";

function Contact({ isDarkMode }) {
  /**
   * OUTREACH ANALYTICS DISPATCHER
   * Tracks user clicks on direct contact action buttons via GA4.
   * @param {string} actionName - The specific contact method utilized.
   */
  const trackContactClick = (actionName) => {
    if (window.gtag) {
      window.gtag('event', 'contact_action', {
        'event_category': 'Outreach',
        'event_label': actionName
      });
    }
  };

  return (
    <section className={`c-section ${isDarkMode ? '' : 'light'}`} id="contact">
      <div className="c-container">
        
        {/* SECTION HEADER INTERFACE */}
        <div className="c-header">
          <i className="fas fa-paper-plane"></i>
          <h2>Get In Touch</h2>
        </div>

        {/* PRIMARY COMPACT CONTACT CARD */}
        <div className="c-card">
          <i className="fas fa-globe-asia c-bg-icon"></i>
          
          <div className="c-card-content">
            
            {/* PROFESSIONAL AVAILABILITY STATEMENT */}
            <p className="c-availability-text">
              Available for roles as a Computer Educator or Web & Android Developer in Gujarat.
            </p>

            {/* DIRECT CONTACT INFORMATION (TEXT LAYOUT) */}
            <div className="c-details-text">
              <p>
                <span className="c-bold">Location:</span> B/H Primary School, At. Khaladi, Ta. Mahudha, Dist. Kheda, Gujarat, INDIA (387335)
              </p>
              <p>
                <span className="c-bold">Phone:</span>{" "}
                <a 
                  href="tel:+919428902507" 
                  className="c-text-link"
                  onClick={() => trackContactClick('Text_Link_Call')}
                >
                  +91 94289 02507
                </a>
              </p>
              <p>
                <span className="c-bold">Email:</span>{" "}
                <a 
                  href="mailto:sagarp451@gmail.com" 
                  className="c-text-link"
                  onClick={() => trackContactClick('Text_Link_Email')}
                >
                  sagarp451@gmail.com
                </a>
              </p>
            </div>

            {/* CALL TO ACTION BUTTON GROUP (Expanded with 5 Buttons) */}
            <div className="c-action-group">
              
              {/* TELEPHONE TRIGGER */}
              <a 
                href="tel:+919428902507" 
                className="c-btn c-btn-call"
                onClick={() => trackContactClick('Button_Call_Bottom')}
              >
                <i className="fas fa-phone-alt"></i> Call Me
              </a>
              
              {/* EMAIL CLIENT TRIGGER */}
              <a 
                href="mailto:sagarp451@gmail.com" 
                className="c-btn c-btn-email"
                onClick={() => trackContactClick('Button_Email_Bottom')}
              >
                <i className="fas fa-envelope"></i> Send Email
              </a>
              
              {/* EXTERNAL REPOSITORY LINK */}
              <a 
                href="https://github.com/SagarPatel1290" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="c-btn c-btn-github"
                onClick={() => trackContactClick('Button_GitHub_Bottom')}
              >
                <i className="fab fa-github"></i> GitHub
              </a>

              {/* LINKEDIN PROFILE LINK */}
              <a 
                href="https://www.linkedin.com/in/sagar-patel-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="c-btn c-btn-linkedin"
                onClick={() => trackContactClick('Button_LinkedIn_Bottom')}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>

              {/* RESUME DOWNLOAD LINK */}
              <a 
                href={resumePdf} 
                download="Sagar_Patel_Resume.pdf" 
                className="c-btn c-btn-resume"
                onClick={() => trackContactClick('Button_Resume_Bottom')}
              >
                <i className="fas fa-file-pdf"></i> Resume
              </a>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* --- CONTACT COMPONENT ARCHITECTURE --- */
        .c-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          margin-bottom: 80px;
        }

        .c-container {
          width: 95%;
          max-width: 1400px; 
        }

        /* HEADER TYPOGRAPHY */
        .c-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
          color: #818cf8;
        }

        .c-header i { font-size: 1.8rem; }
        .c-header h2 { font-size: 2.2rem; font-weight: 700; letter-spacing: 0.8px; margin: 0; text-transform: uppercase; }

        /* FULL-WIDTH COMPACT GLASSMORPHISM CARD */
        .c-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 50px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          text-align: center;
        }

        .c-card:hover {
          border-color: rgba(129, 140, 248, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 20px rgba(129, 140, 248, 0.15);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
        }

        /* BACKGROUND WATERMARK DYNAMICS */
        .c-bg-icon {
          position: absolute;
          left: -30px;
          bottom: -40px;
          font-size: 20rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 1;
          transform: rotate(-15deg);
          transition: 0.5s ease;
        }

        .c-card:hover .c-bg-icon {
          color: rgba(129, 140, 248, 0.04);
          transform: rotate(0deg) scale(1.05);
        }

        /* CARD CONTENT ALIGNMENT */
        .c-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .c-availability-text {
          font-size: 1.15rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 800px; 
        }

        /* SIMPLE TEXT DETAILS LAYOUT */
        .c-details-text {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
          font-size: 1.1rem;
          color: #94a3b8;
        }

        .c-details-text p {
          margin: 0;
          line-height: 1.5;
        }

        .c-bold {
          font-weight: 700;
          color: #fff;
          margin-right: 5px;
        }

        /* INLINE TEXT LINKS */
        .c-text-link {
          color: #818cf8;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .c-text-link:hover {
          color: #a5b4fc;
          text-decoration: underline;
        }

        /* PRIMARY CALL TO ACTION BUTTONS */
        .c-action-group {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }

        .c-btn {
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: 0.3s ease;
          border: 2px solid;
        }

        /* --- INDIVIDUAL BUTTON THEMES --- */
        .c-btn-call { background: rgba(34, 197, 94, 0.1); border-color: rgba(34, 197, 94, 0.4); color: #4ade80; }
        .c-btn-call:hover { background: rgba(34, 197, 94, 0.2); border-color: #4ade80; transform: translateY(-3px); }

        .c-btn-email { background: rgba(129, 140, 248, 0.1); border-color: rgba(129, 140, 248, 0.4); color: #818cf8; }
        .c-btn-email:hover { background: rgba(129, 140, 248, 0.2); border-color: #818cf8; transform: translateY(-3px); }

        .c-btn-github { background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.2); color: #cbd5e1; }
        .c-btn-github:hover { background: rgba(255, 255, 255, 0.15); border-color: #fff; color: #fff; transform: translateY(-3px); }

        .c-btn-linkedin { background: rgba(37, 99, 235, 0.1); border-color: rgba(37, 99, 235, 0.4); color: #60a5fa; }
        .c-btn-linkedin:hover { background: rgba(37, 99, 235, 0.2); border-color: #60a5fa; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); transform: translateY(-3px); }

        .c-btn-resume { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.4); color: #f87171; }
        .c-btn-resume:hover { background: rgba(239, 68, 68, 0.2); border-color: #f87171; box-shadow: 0 10px 20px rgba(239, 68, 68, 0.2); transform: translateY(-3px); }

        /* =================================================================
           LIGHT THEME OVERRIDES (ICE-BLUE GLASS & PREMIUM CONTRAST)
        ================================================================= */
        
        .c-section.light .c-header { color: #1e3a8a; } /* Deep Navy */

        /* Glass Card Light Mode */
        .c-section.light .c-card {
          background: rgba(224, 242, 254, 0.6);
          border-color: rgba(30, 58, 138, 0.15);
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .c-section.light .c-card:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.1);
        }

        /* Typography */
        .c-section.light .c-availability-text { color: #475569; }
        .c-section.light .c-details-text { color: #475569; }
        .c-section.light .c-bold { color: #1e3a8a; }
        
        .c-section.light .c-text-link { color: #2563eb; }
        .c-section.light .c-text-link:hover { color: #1e40af; }

        /* Background Icons */
        .c-section.light .c-bg-icon { color: rgba(30, 58, 138, 0.04); }
        .c-section.light .c-card:hover .c-bg-icon { color: rgba(37, 99, 235, 0.08); }

        /* --- LIGHT THEME BUTTON OVERRIDES --- */
        .c-section.light .c-btn-call { background: #d1fae5; border-color: #6ee7b7; color: #059669; }
        .c-section.light .c-btn-call:hover { background: #10b981; color: #ffffff; border-color: #10b981; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); }

        .c-section.light .c-btn-email { background: #e0e7ff; border-color: #c7d2fe; color: #4f46e5; }
        .c-section.light .c-btn-email:hover { background: #4f46e5; color: #ffffff; border-color: #4f46e5; box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2); }

        .c-section.light .c-btn-github { background: #f1f5f9; border-color: #cbd5e1; color: #334155; }
        .c-section.light .c-btn-github:hover { background: #334155; color: #ffffff; border-color: #334155; box-shadow: 0 10px 20px rgba(51, 65, 85, 0.2); }

        .c-section.light .c-btn-linkedin { background: #dbeafe; border-color: #bfdbfe; color: #2563eb; }
        .c-section.light .c-btn-linkedin:hover { background: #2563eb; color: #ffffff; border-color: #2563eb; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }

        .c-section.light .c-btn-resume { background: #fee2e2; border-color: #fca5a5; color: #dc2626; }
        .c-section.light .c-btn-resume:hover { background: #ef4444; color: #ffffff; border-color: #ef4444; box-shadow: 0 10px 20px rgba(239, 68, 68, 0.2); }


        /* --- RESPONSIVE ADAPTATION: MOBILE VIEWPORTS --- */
        @media (max-width: 768px) {
          .c-section { padding: 0 10px; margin-bottom: 50px; }
          .c-header h2 { font-size: 1.6rem; }
          .c-card { padding: 30px 15px; border-radius: 20px; }
          
          .c-availability-text { font-size: 1rem; margin-bottom: 20px; }
          .c-details-text { font-size: 0.95rem; margin-bottom: 30px; }
          
          .c-action-group { flex-direction: column; width: 100%; gap: 10px; }
          .c-btn { width: 100%; justify-content: center; padding: 12px 20px; }
          .c-bg-icon { font-size: 10rem; left: -15px; bottom: -20px; }
        }
      `}</style>
    </section>
  );
}

export default Contact;