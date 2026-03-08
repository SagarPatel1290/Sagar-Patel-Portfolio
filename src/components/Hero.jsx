import React, { useState, useEffect } from "react";
/**
 * PROFESSIONAL RESOURCE IMPORTS
 * Optimized local asset delivery for profile imagery and documentation.
 */
import profileImg from "../assets/profile.png"; 
import resumePdf from "../assets/Sagar_Patel_Resume.pdf"; 

function Hero({ isDarkMode }) {
  /**
   * TYPEWRITER STATE MANAGEMENT
   * Handles dynamic string manipulation for the professional title interface.
   */
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ["Web Developer", "Android Developer", "Computer Educator", "IT Logic Expert", "Full Stack Developer"];

  /**
   * INTERFACE ANALYTICS DISPATCHER
   * Logs CTA engagement metrics to Google Analytics 4 (GA4).
   * @param {string} eventName - Descriptor for the user action.
   */
  const trackEngagement = (eventName) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
        'event_category': 'Engagement',
        'event_label': 'Hero CTA'
      });
    }
  };

  /**
   * TYPEWRITER CORE ENGINE
   * Procedural animation logic for identity text cycling.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={`hero-section ${isDarkMode ? '' : 'light'}`}>
      <div className="hero-container">
        
        {/* INTERACTIVE BACKGROUND LAYER */}
        <i className="fas fa-rocket hero-bg-icon"></i>

        {/* PRIMARY AVATAR INTERFACE */}
        <div className="hero-image">
          <img src={profileImg} alt="Sagar Patel - Portfolio Headshot" />
        </div>
        
        {/* IDENTITY & PROFESSIONAL STACK */}
        <div className="hero-content-stack">
          <h1>
            <span className="name-gradient">Sagar Patel</span>
          </h1>
          
          <div className="typing-container">
            <p className="typing-text">
              I am a <span className="typed-words">{text}</span>
              <span className="cursor">|</span>
            </p>
          </div>

          {/* CALL TO ACTION (CTA) INTERFACE */}
          <div className="cta-group">
            {/* DOCUMENTATION: Resume delivery via direct local asset bundling */}
            <a 
              href={resumePdf} 
              download="Sagar_Patel_Resume.pdf" 
              className="btn-glass resume"
              onClick={() => trackEngagement('download_resume')}
            >
              <i className="fas fa-file-pdf"></i> Download Resume
            </a>

            {/* EXTERNAL NETWORK: LinkedIn professional connection bridge */}
            <a 
              href="https://www.linkedin.com/in/sagar-patel-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-glass linkedin"
              onClick={() => trackEngagement('linkedin_profile')}
            >
              <i className="fab fa-linkedin"></i> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <style>{`
        /* --- HERO COMPONENT SPECIFIC STYLES --- */
        .hero-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          margin-bottom: 0px;
        }
        
        .hero-container {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          width: 95%;
          max-width: 1400px;
          margin-bottom: 25px;
          padding: 40px 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 60px;
          min-height: 300px;
          overflow: hidden;
        }

        .hero-container:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: rgba(129, 140, 248, 0.6) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(129, 140, 248, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }

        /* WATERMARK DYNAMICS */
        .hero-bg-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          font-size: 15rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          transform: rotate(-15deg);
          transition: 0.5s ease;
        }

        .hero-container:hover .hero-bg-icon {
          color: rgba(129, 140, 248, 0.08);
          transform: rotate(0deg) scale(1.1);
        }

        .hero-image, 
        .hero-content-stack {
          z-index: 1;
          position: relative;
        } 

        .hero-image img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(129, 140, 248, 0.3);
          box-shadow: 0 0 35px rgba(129, 140, 248, 0.25);
          transition: all 0.4s ease;
        }

        .hero-content-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .hero-content-stack h1 {
          font-size: 3.5rem;
          margin: 0;
          white-space: nowrap;
        }

        .name-gradient {
          color: #818cf8;
          transition: color 0.4s ease;
        }
        
        /* TYPEWRITER TYPOGRAPHY */
        .typing-container {
          min-height: 50px;
          display: flex;
          align-items: center;
        }

        .typing-text {
          font-size: 1.8rem;
          color: #94a3b8;
          margin: 0;
          transition: color 0.4s ease;
        }
        
        .typing-text span.typed-words {
          color: #818cf8;
          font-weight: 600;
          border-right: none !important;
          padding-right: 0 !important;
          transition: color 0.4s ease;
        }
        
        /* CUSTOM CURSOR ANIMATION */
        .cursor {
          color: #818cf8;
          animation: blinkCursor 0.8s infinite step-end;
          margin-left: 2px;
          font-weight: 400;
          transition: color 0.4s ease;
        }
        
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* BUTTON INTERACTION LAYER */
        .cta-group {
          display: flex;
          gap: 20px;
          margin-top: 25px;
        }

        .btn-glass {
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: 0.4s ease;
          border: 2px solid;
        }

        .btn-glass.resume {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.3);
          color: #ff8a8a;
        }

        .btn-glass.resume:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.8);
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.5);
          transform: translateY(-4px);
        }

        .btn-glass.linkedin {
          background: rgba(37, 99, 235, 0.05);
          border-color: rgba(37, 99, 235, 0.3);
          color: #84b0ff;
        }

        .btn-glass.linkedin:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.8);
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.5);
          transform: translateY(-4px);
        }

        /* =================================================================
           LIGHT THEME OVERRIDES (ICE-BLUE GLASS)
        ================================================================= */
        
        .hero-section.light .hero-container {
          background: rgba(224, 242, 254, 0.6); /* Ice-Blue Translucency */
          border-color: rgba(30, 58, 138, 0.15);
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .hero-section.light .hero-container:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4) !important;
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.15);
        }

        .hero-section.light .hero-bg-icon { color: rgba(30, 58, 138, 0.04); }
        .hero-section.light .hero-container:hover .hero-bg-icon { color: rgba(37, 99, 235, 0.08); }

        .hero-section.light .hero-image img {
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 0 35px rgba(37, 99, 235, 0.15);
        }

        /* Typography Override */
        .hero-section.light h1 { color: #1e3a8a; } /* Deep Navy */
        .hero-section.light .name-gradient { color: #2563eb; } /* Royal Blue */
        .hero-section.light .typing-text { color: #475569; } /* Sharp Slate Grey */
        .hero-section.light .typing-text span.typed-words,
        .hero-section.light .cursor { color: #2563eb; }

        /* Buttons Light Theme Override */
        .hero-section.light .btn-glass.resume {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }
        .hero-section.light .btn-glass.resume:hover {
          background: #fecaca;
          border-color: #ef4444;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.2);
        }

        .hero-section.light .btn-glass.linkedin {
          background: #dbeafe;
          border-color: #bfdbfe;
          color: #2563eb;
        }
        .hero-section.light .btn-glass.linkedin:hover {
          background: #bfdbfe;
          border-color: #3b82f6;
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.2);
        }

        /* RESPONSIVE ADAPTATION */
        @media (max-width: 768px) {
          .hero-container {
            margin-bottom: 20px !important;
            flex-direction: row !important;
            align-items: center;
            justify-content: flex-start;
            padding: 20px 15px;
            gap: 12px;
            width: 95%;
            min-height: 140px;
          }

          .hero-image img {
            width: 75px;
            height: 75px;
            border-width: 2px;
            flex-shrink: 0;
          }

          .hero-content-stack {
            align-items: flex-start;
            gap: 4px;
            flex: 1;
            min-width: 0;
          }

          .hero-content-stack h1 {
            font-size: 1.15rem;
            white-space: nowrap;
            margin-bottom: 0px;
          }

          .typing-container {
            min-height: 20px;
          }

          .typing-text {
            font-size: 0.75rem;
          }

          .cta-group {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 6px;
            margin-top: 8px;
            width: 100%;
          }

          .btn-glass {
            padding: 8px 6px;
            font-size: 0.55rem;
            border-radius: 8px;
            flex: 1;
            text-align: center;
            justify-content: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            gap: 4px !important;
          }

          .btn-glass i {
            font-size: 0.65rem;
            margin: 0;
          }

          .hero-bg-icon {
            font-size: 8rem;
            right: -10px;
            bottom: -10px;
          } 
        }
      `}</style>
    </section>
  );
}

export default Hero;