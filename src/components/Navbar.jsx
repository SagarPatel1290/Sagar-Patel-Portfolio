import React from "react";

/**
 * NAVIGATION INTERFACE COMPONENT
 * @param {boolean} isDarkMode - Core theme state passed from parent App.jsx.
 */
function Navbar({ isDarkMode }) {
  /**
   * NAVIGATION ANALYTICS DISPATCHER
   * Logs internal navigation routing events to Google Analytics 4 (GA4).
   * @param {string} sectionName - The target section identifier.
   */
  const trackNavigation = (sectionName) => {
    if (window.gtag) {
      window.gtag('event', 'navigate_section', {
        'event_category': 'Navigation',
        'event_label': sectionName
      });
    }
  };

  return (
    <>
      {/* DYNAMICALLY THEMED NAVIGATION BAR */}
      <nav className={`nav-container ${isDarkMode ? '' : 'light'}`}>
        <a 
          href="#home" 
          className="nav-item"
          onClick={() => trackNavigation('Home')}
        >
          <i className="fas fa-home"></i> Home
        </a>
        
        <a 
          href="#skills" 
          className="nav-item"
          onClick={() => trackNavigation('Skills')}
        >
          <i className="fas fa-laptop-code"></i> Skills
        </a>
        
        <a 
          href="#projects" 
          className="nav-item"
          onClick={() => trackNavigation('Projects')}
        >
          <i className="fas fa-briefcase"></i> Projects
        </a>
        
        <a 
          href="#journey" 
          className="nav-item"
          onClick={() => trackNavigation('Journey')}
        >
          <i className="fas fa-route"></i> Journey
        </a>
        
        <a 
          href="#contact" 
          className="nav-item"
          onClick={() => trackNavigation('Contact')}
        >
          <i className="fas fa-envelope"></i> Contact
        </a>
      </nav>

      <style>{`
        /* --- NAVBAR CONTAINER ARCHITECTURE --- */
        .nav-container {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 30px;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 95%;
          max-width: 1400px;
          z-index: 1000;
          height: 65px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* CONTAINER HOVER DYNAMICS */
        .nav-container:hover {
          transform: translateX(-50%) scale(1.02);
          border-color: rgba(129, 140, 248, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(129, 140, 248, 0.2);
        }

        /* --- LIGHT THEME OVERRIDES: ICE-BLUE GLASS --- */
        .nav-container.light {
          background: rgba(224, 242, 254, 0.85); /* Ice-Blue Translucency */
          border: 1px solid rgba(30, 58, 138, 0.15); /* Soft Navy Border */
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .nav-container.light:hover {
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.15), 0 0 20px rgba(37, 99, 235, 0.1);
        }

        /* NAVIGATION ITEMS STYLING */
        .nav-item { 
          display: flex;
          align-items: center;
          gap: 8px;
          color: #cbd5e1; 
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 25px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        /* ITEM HOVER & FOCUS STATES */
        .nav-item:hover {
          color: white;
          background: rgba(129, 140, 248, 0.15);
          border-color: rgba(129, 140, 248, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(129, 140, 248, 0.2);
        }

        /* --- LIGHT THEME ITEM OVERRIDES --- */
        .light .nav-item {
          color: #334155; /* Sharp Slate Blue-Grey for readability */
        }

        .light .nav-item:hover {
          color: #1e3a8a; /* Deep Corporate Navy on hover */
          background: rgba(37, 99, 235, 0.1);
          border-color: rgba(37, 99, 235, 0.25);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.15);
        }

        /* ITEM ICONOGRAPHY */
        .nav-item i {
          color: #818cf8;
          font-size: 1.1rem;
        }

        /* --- LIGHT THEME ICON OVERRIDES --- */
        .light .nav-item i {
          color: #2563eb; /* Vibrant Royal Blue Icons */
        }

        /* --- RESPONSIVE ADAPTATION: MOBILE VIEWPORTS --- */
        @media (max-width: 768px) {
          .nav-container { 
            bottom: 20px;
            top: auto;
            height: 60px;
            width: 95%;
            padding: 5px 10px; 
            flex-wrap: nowrap !important;
            justify-content: space-between;
            gap: 3px;
          }
          
          .nav-item {
            padding: 5px;
            font-size: 0.65rem;
            gap: 4px;
          }
          
          .nav-item i {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;