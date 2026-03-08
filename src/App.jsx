import React, { useState, useEffect } from "react";
/**
 * COMPONENT ORCHESTRATION
 * Import of modular UI sections for the professional portfolio.
 */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

/**
 * GLOBAL FLAG FOR RECRUITER GREETING
 * Ensures the Easter egg fires exactly once, even in React 18 StrictMode.
 */
let hasLoggedMessage = false;

function App() {
  /**
   * THEME STATE ARCHITECTURE
   * Manages the global visual state. Default is set to Dark Mode (true).
   */
  const [isDarkMode, setIsDarkMode] = useState(true);

  /**
   * CONSOLE EASTER EGG (RECRUITER GREETING)
   * Restored to the original message format.
   */
  useEffect(() => {
    if (!hasLoggedMessage) {
      setTimeout(() => {
        // Change back to old message from image 2
        console.log("%cHello Recruiter! 👋", "color: #3b82f6; font-size: 30px; font-weight: bold; text-shadow: 1px 1px 0px #000;");
        console.log("%cI see you are inspecting my code. You have good taste! 💻\nIf you are looking for a dedicated Web/Android Developer in Gujarat, let's connect:\n📧 Email: sagarp451@gmail.com\n📞 Phone: +91 94289 02507", "font-size: 16px; color: #10b981; line-height: 1.5;");
      }, 2000);
      hasLoggedMessage = true;
    }
  }, []);

  /**
   * THEME TOGGLE HANDLER
   * Switches the visual mode and logs user interaction for analytics.
   */
  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    
    if (window.gtag) {
      window.gtag('event', 'theme_toggle', {
        'event_category': 'UX_Interaction',
        'event_label': nextTheme ? 'Dark_Mode' : 'Light_Mode'
      });
    }
  };

  /**
   * GLOBAL OUTREACH ANALYTICS
   * Tracks engagement with the primary floating contact trigger.
   */
  const trackWhatsApp = () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_floating_click', {
        'event_category': 'Outreach',
        'event_label': 'Floating WA Button'
      });
    }
  };

  return (
    /**
     * DYNAMIC THEME CLASS
     * This class propagates down to all components, allowing localized styling.
     */
    <div className={`app-main ${isDarkMode ? '' : 'light-mode'}`}>
      
      {/* GLOBAL NAVIGATION INTERFACE */}
      <Navbar isDarkMode={isDarkMode} />
      
      {/* MAIN CONTENT SEGMENTS */}
      <div id="home" className="scroll-wrapper">
        <Hero isDarkMode={isDarkMode} />
        <Summary isDarkMode={isDarkMode} />
      </div>

      <div id="skills" className="scroll-wrapper">
        <Skills isDarkMode={isDarkMode} />
      </div>

      <div id="projects" className="scroll-wrapper">
        <Projects isDarkMode={isDarkMode} />
      </div>

      <div id="journey" className="scroll-wrapper">
        <Journey isDarkMode={isDarkMode} />
      </div>

      <div id="contact" className="scroll-wrapper">
        <Contact isDarkMode={isDarkMode} />
      </div>

      {/* ==========================================
          GLOBAL INTERACTIVE CONTROLS
      ========================================== */}

      {/* THEME TOGGLE TRIGGER (LEFT) */}
      <button 
        className="global-theme-btn" 
        onClick={toggleTheme} 
        aria-label="Toggle UI Theme"
      >
        <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
      </button>

      {/* WHATSAPP ACTION TRIGGER (RIGHT) */}
      <a 
        href="https://wa.me/919428902507?text=Hi%20Sagar,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!" 
        className="global-floating-wa"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <style>{`
        /* --- GLOBAL APPLICATION CORE STYLES --- */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        .app-main { 
          background-color: #0f172a; 
          color: white; 
          min-height: 100vh; 
          font-family: 'Segoe UI', sans-serif; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          padding: 120px 0 0 0; 
          transition: background-color 0.5s ease, color 0.5s ease;
        }

        /* LIGHT MODE GLOBAL BACKGROUND OVERRIDE */
        .light-mode { 
          background-color: #f8fafc; 
          color: #1e3a8a;
        }

        .scroll-wrapper { 
          width: 100%; 
          display: flex; 
          flex-direction: column;
          align-items: center;
          scroll-margin-top: 100px; 
        }

        /* --- FLOATING UI SPECIFICATIONS --- */
        .global-theme-btn {
          position: fixed; bottom: 30px; left: 30px;
          background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2); color: #fbbf24;
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem; cursor: pointer; z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
        }

        .light-mode .global-theme-btn {
          background: #ffffff; color: #1e40af; border-color: #cbd5e1;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .global-floating-wa {
          position: fixed; bottom: 30px; right: 30px;
          background-color: #25D366; color: white;
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          z-index: 9999; text-decoration: none;
          animation: wa-pulse 2s infinite;
        }

        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        /* --- RESPONSIVE ADAPTATION --- */
        @media (max-width: 768px) {
          .app-main { padding-top: 20px; padding-bottom: 90px; }
          .global-theme-btn { left: 20px; bottom: 90px; width: 50px; height: 50px; font-size: 1.4rem; }
          .global-floating-wa { right: 20px; bottom: 90px; width: 50px; height: 50px; font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}

export default App;