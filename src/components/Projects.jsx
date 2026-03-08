import React from "react";

/**
 * FEATURED PROJECTS COMPONENT
 * @param {boolean} isDarkMode - Theme state for dynamic styling
 */
function Projects({ isDarkMode }) {
  /**
   * PROJECT ANALYTICS DISPATCHER
   * Logs specific project interactions (View Code / Live Demo) to GA4.
   * @param {string} actionType - The type of interaction ('view_code' or 'live_demo').
   * @param {string} projectName - The name of the project being interacted with.
   */
  const trackProjectClick = (actionType, projectName) => {
    if (window.gtag) {
      window.gtag('event', actionType, {
        'event_category': 'Projects',
        'event_label': projectName
      });
    }
  };

  return (
    <section className={`pro-projects-section ${isDarkMode ? '' : 'light'}`} id="projects">
      <div className="pro-projects-container">
        
        {/* SECTION HEADER INTERFACE */}
        <div className="pro-section-header">
          <i className="fas fa-laptop-code"></i>
          <h2>Featured Projects</h2>
        </div>
        
        {/* BENTO GRID ARCHITECTURE */}
        <div className="pro-bento-grid">
          
          {/* 1. Shiv Chula Dosa Hub */}
          <div className="pro-bento-card pro-dosa-hub">
            <div className="pro-card-content">
              <div className="pro-card-top">
                <span className="pro-badge pro-live">LIVE CLIENT</span>
                <h3>Shiv Chula Dosa Hub</h3>
                <p className="pro-tech-subtitle">HTML5, CSS3, JavaScript, WhatsApp API, UPI</p>
                <p className="pro-desc">Developed a high-performance Contactless Ordering System for a live restaurant. Features custom JS-powered Cart Logic and Dynamic UPI Payment integration for instant checkouts via WhatsApp.</p>
                <div className="pro-tags">
                  <span><i className="fab fa-js"></i> JS Logic</span>
                  <span><i className="fab fa-whatsapp"></i> WhatsApp API</span>
                </div>
              </div>
              <div className="pro-card-actions">
                <a 
                  href="https://github.com/SagarPatel1290/Shiv-Chula-Dosa-Hub" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'Shiv Chula Dosa Hub')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="https://shivchuladosahub.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-live-demo"
                  onClick={() => trackProjectClick('live_demo', 'Shiv Chula Dosa Hub')}
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
            <i className="fas fa-qrcode pro-bg-icon"></i>
          </div>

          {/* 2. Blood Bank Management */}
          <div className="pro-bento-card">
            <div className="pro-card-content">
              <div className="pro-card-top">
                <span className="pro-badge pro-academic">ACADEMIC</span>
                <h3>Blood Bank Management</h3>
                <p className="pro-tech-subtitle">PHP, MySQL, HTML/CSS</p>
                <p className="pro-desc">Engineered a PHP/MySQL platform to manage blood inventory with Real-Time Matching Logic. Focused on 100% Data integrity.</p>
                <div className="pro-tags">
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="pro-card-actions">
                <a 
                  href="https://github.com/SagarPatel1290/Blood-Bank-Donor-Management-System" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'Blood Bank Management')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="https://bbdms.my-style.in/?i=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-live-demo"
                  onClick={() => trackProjectClick('live_demo', 'Blood Bank Management')}
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
            <i className="fas fa-heartbeat pro-bg-icon"></i>
          </div>

          {/* 3. Currency Converter */}
          <div className="pro-bento-card">
            <div className="pro-card-content">
              <div className="pro-card-top">
                <span className="pro-badge pro-tool">API TOOL</span>
                <h3>Currency Converter</h3>
                <p className="pro-tech-subtitle">JavaScript, External APIs</p>
                <p className="pro-desc">Developed a live tool using External APIs and async JS. Engineered dynamic DOM logic for real-time exchange rate updates.</p>
                <div className="pro-tags">
                  <span>JS</span>
                  <span>API</span>
                </div>
              </div>
              <div className="pro-card-actions">
                <a 
                  href="https://github.com/SagarPatel1290/Currency-Converter" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'Currency Converter')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="https://currencyconverternet.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-live-demo"
                  onClick={() => trackProjectClick('live_demo', 'Currency Converter')}
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
            <i className="fas fa-exchange-alt pro-bg-icon"></i>
          </div>

          {/* 4. University Management System */}
          <div className="pro-bento-card">
            <div className="pro-card-content">
              <div className="pro-card-top">
                <span className="pro-badge pro-database">DATABASE</span>
                <h3>University System</h3>
                <p className="pro-tech-subtitle">Java, MySQL</p>
                <p className="pro-desc">Created a structured Relational Database using Java and MySQL. Developed optimized SQL Queries for advanced reporting.</p>
                <div className="pro-tags">
                  <span>Java</span>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="pro-card-actions">
                <a 
                  href="https://github.com/SagarPatel1290/University-Management-System" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'University System')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
            <i className="fas fa-university pro-bg-icon"></i>
          </div>

          {/* 5. Tic-Tac-Toe Game */}
          <div className="pro-bento-card">
            <div className="pro-card-content">
              <div className="pro-card-top">
                <span className="pro-badge pro-android">ANDROID</span>
                <h3>Tic-Tac-Toe Game</h3>
                <p className="pro-tech-subtitle">Java, Android Studio, XML</p>
                <p className="pro-desc">Built a Java app focused on Android Activity Lifecycle. Optimized XML layouts for a zero-crash, smooth user experience.</p>
                <div className="pro-tags">
                  <span>Android</span>
                  <span>Java</span>
                </div>
              </div>
              <div className="pro-card-actions">
                <a 
                  href="https://github.com/SagarPatel1290/Tic-Tac-Toe-Android-Game" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'Tic-Tac-Toe Game')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
            <i className="fas fa-gamepad pro-bg-icon"></i>
          </div>

          {/* 6. Personal IT Portfolio */}
          <div className="pro-bento-card pro-portfolio">
            <div className="pro-card-content pro-flex-row">
              <div className="pro-card-top pro-width-70">
                <span className="pro-badge pro-portfolio-badge">PORTFOLIO</span>
                <h3>Personal IT Portfolio</h3>
                <p className="pro-tech-subtitle">React JS, CSS3, Vite</p>
                <p className="pro-desc">Engineered a high-performance site using Modern React and Glassmorphism. Integrated custom interactive logic and fully responsive UI.</p>
                <div className="pro-tags">
                  <span>UI/UX</span>
                  <span>React Animations</span>
                </div>
              </div>
              <div className="pro-card-actions pro-vertical-align">
                <a 
                  href="https://github.com/SagarPatel1290/Personal-IT-Portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pro-btn-project pro-code"
                  onClick={() => trackProjectClick('view_code', 'Personal IT Portfolio')}
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <span className="pro-btn-project pro-you-are-here">
                  <i className="fas fa-map-marker-alt"></i> You Are Here!
                </span>
              </div>
            </div>
            <i className="fas fa-user-astronaut pro-bg-icon"></i>
          </div>

        </div>
      </div>

      <style>{`
        /* --- PROJECTS COMPONENT ARCHITECTURE --- */
        .pro-projects-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          margin-bottom: 50px;
        }

        .pro-projects-container {
          width: 95%;
          max-width: 1400px;
        }
        
        /* HEADER TYPOGRAPHY */
        .pro-section-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          color: #818cf8;
        }

        .pro-section-header i {
          font-size: 1.8rem;
        }

        .pro-section-header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin: 0;
        }

        /* BENTO GRID LAYOUT */
        .pro-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        /* GRID SPAN MODIFIERS */
        .pro-bento-card.pro-dosa-hub {
          grid-column: span 2;
        }

        .pro-bento-card.pro-portfolio {
          grid-column: span 3;
        }

        /* GLASSMORPHISM CARD DESIGN */
        .pro-bento-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }

        .pro-bento-card:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: rgba(129, 140, 248, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(129, 140, 248, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }

        /* BACKGROUND WATERMARK DYNAMICS */
        .pro-bg-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          font-size: 10rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 1;
          transform: rotate(-15deg);
          transition: 0.5s ease;
        }

        .pro-bento-card:hover .pro-bg-icon {
          color: rgba(129, 140, 248, 0.08);
          transform: rotate(0deg) scale(1.1);
        }

        /* CARD CONTENT ALIGNMENT */
        .pro-card-content {
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .pro-card-top h3 {
          font-size: 1.6rem;
          color: #fff;
          margin: 10px 0 5px 0;
        }

        .pro-tech-subtitle {
          font-size: 0.85rem;
          color: #818cf8;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .pro-desc {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* CATEGORY BADGES */
        .pro-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .pro-badge.pro-live {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .pro-badge.pro-academic {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .pro-badge.pro-tool {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .pro-badge.pro-database {
          background: rgba(56, 189, 248, 0.15);
          color: #7dd3fc;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .pro-badge.pro-android {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .pro-badge.pro-portfolio-badge {
          background: rgba(236, 72, 153, 0.15);
          color: #f472b6;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        /* TECHNOLOGY TAGS */
        .pro-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .pro-tags span {
          background: rgba(129, 140, 248, 0.1);
          color: #a5b4fc;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          border: 1px solid rgba(129, 140, 248, 0.2);
        }

        /* CALL TO ACTION BUTTONS */
        .pro-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pro-btn-project {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: 0.3s;
          border: 1px solid;
        }

        .pro-btn-project.pro-code {
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .pro-btn-project.pro-code:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          transform: translateY(-2px);
        }

        .pro-btn-project.pro-live-demo {
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.3);
        }

        .pro-btn-project.pro-live-demo:hover {
          background: rgba(52, 211, 153, 0.25);
          border-color: #34d399;
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(52, 211, 153, 0.3);
        }

        .pro-btn-project.pro-you-are-here {
          background: rgba(236, 72, 153, 0.1);
          color: #f472b6;
          border-color: rgba(236, 72, 153, 0.3);
          cursor: default;
        }

        /* PORTFOLIO CARD CUSTOM FLEX ROW */
        .pro-flex-row {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .pro-width-70 {
          width: 70%;
        }

        .pro-vertical-align {
          flex-direction: column;
          align-items: flex-end;
        }

        /* =================================================================
           LIGHT THEME OVERRIDES (ICE-BLUE GLASS & PREMIUM CONTRAST)
        ================================================================= */
        
        .pro-projects-section.light .pro-section-header {
          color: #1e3a8a; /* Deep Navy */
        }

        /* Glass Cards Light Mode */
        .pro-projects-section.light .pro-bento-card {
          background: rgba(224, 242, 254, 0.6);
          border-color: rgba(30, 58, 138, 0.15);
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .pro-projects-section.light .pro-bento-card:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.1);
        }

        /* Typography */
        .pro-projects-section.light .pro-card-top h3 { color: #1e3a8a; }
        .pro-projects-section.light .pro-tech-subtitle { color: #2563eb; }
        .pro-projects-section.light .pro-desc { color: #475569; }

        /* Background Icons */
        .pro-projects-section.light .pro-bg-icon { color: rgba(30, 58, 138, 0.04); }
        .pro-projects-section.light .pro-bento-card:hover .pro-bg-icon { color: rgba(37, 99, 235, 0.08); }

        /* Tags */
        .pro-projects-section.light .pro-tags span {
          background: rgba(37, 99, 235, 0.1);
          color: #1e40af;
          border-color: rgba(37, 99, 235, 0.2);
        }

        /* Badges Overrides for Better Contrast in Light Mode */
        .pro-projects-section.light .pro-badge.pro-live { background: #dcfce7; color: #166534; border-color: #86efac; }
        .pro-projects-section.light .pro-badge.pro-academic { background: #fef9c3; color: #92400e; border-color: #fde047; }
        .pro-projects-section.light .pro-badge.pro-tool { background: #f3e8ff; color: #6b21a8; border-color: #d8b4fe; }
        .pro-projects-section.light .pro-badge.pro-database { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }
        .pro-projects-section.light .pro-badge.pro-android { background: #d1fae5; color: #065f46; border-color: #6ee7b7; }
        .pro-projects-section.light .pro-badge.pro-portfolio-badge { background: #fce7f3; color: #9d174d; border-color: #f9a8d4; }

        /* Action Buttons Overrides */
        .pro-projects-section.light .pro-btn-project.pro-code {
          background: rgba(30, 58, 138, 0.05);
          color: #334155;
          border-color: rgba(30, 58, 138, 0.2);
        }
        
        .pro-projects-section.light .pro-btn-project.pro-code:hover {
          background: rgba(37, 99, 235, 0.1);
          color: #1e3a8a;
          border-color: rgba(37, 99, 235, 0.4);
        }

        .pro-projects-section.light .pro-btn-project.pro-live-demo {
          background: #d1fae5;
          color: #059669;
          border-color: #6ee7b7;
        }
        
        .pro-projects-section.light .pro-btn-project.pro-live-demo:hover {
          background: #10b981;
          color: #ffffff;
          box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
        }

        .pro-projects-section.light .pro-btn-project.pro-you-are-here {
          background: #fce7f3;
          color: #db2777;
          border-color: #fbcfe8;
        }

        /* --- RESPONSIVE ADAPTATION: MOBILE VIEWPORTS --- */
        @media (max-width: 768px) {
          .pro-projects-section {
            padding: 0 10px;
          }

          .pro-section-header h2 {
            font-size: 1.5rem;
          }

          .pro-bento-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .pro-bento-card.pro-dosa-hub, 
          .pro-bento-card.pro-portfolio {
            grid-column: span 1;
          }

          .pro-bento-card {
            padding: 20px 15px;
          }

          .pro-flex-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .pro-width-70 {
            width: 100%;
          }

          .pro-vertical-align {
            flex-direction: row;
            align-items: center;
            width: 100%;
            margin-top: 15px;
          }

          .pro-card-top h3 {
            font-size: 1.3rem;
          }

          .pro-desc {
            font-size: 0.85rem;
          }

          .pro-btn-project {
            flex: 1;
            justify-content: center;
            font-size: 0.75rem;
            padding: 10px 5px;
          }

          .pro-bg-icon {
            font-size: 7rem;
            right: -10px;
            bottom: -10px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;