import React from "react";

/**
 * CORE COMPETENCY COMPONENT
 * @param {boolean} isDarkMode - Theme state for dynamic styling
 */
function Skills({ isDarkMode }) {
  /**
   * CORE COMPETENCY DATA STRUCTURE
   * Defines the technical stack and corresponding proficiency levels.
   */
  const skillData = [
    { name: "React.js / Vite", level: "90%", icon: "fab fa-react" },
    { name: "JavaScript (ES6+)", level: "85%", icon: "fab fa-js" },
    { name: "HTML5 / CSS3", level: "95%", icon: "fab fa-html5" },
    { name: "PHP / MySQL", level: "80%", icon: "fas fa-database" },
    { name: "Java / Android Studio", level: "75%", icon: "fab fa-android" },
    { name: "Git / Netlify CI-CD", level: "85%", icon: "fab fa-git-alt" },
  ];

  return (
    <section className={`pro-skills-section ${isDarkMode ? '' : 'light'}`}>
      <div className="pro-skills-container">
        
        {/* SECTION HEADER INTERFACE */}
        <div className="pro-section-header">
          <i className="fas fa-laptop-code"></i>
          <h2>Technical Proficiency</h2>
        </div>

        {/* PRIMARY SKILLS SHOWCASE CARD */}
        <div className="pro-skills-card">
          {/* INTERACTIVE BACKGROUND ICONOGRAPHY */}
          <i className="fas fa-code pro-skills-bg-icon"></i>

          <div className="pro-skills-content">
            <div className="pro-skills-grid">
              
              {/* DYNAMIC METRICS RENDERING */}
              {skillData.map((skill, index) => (
                <div key={index} className="pro-skill-item">
                  
                  <div className="pro-skill-info">
                    <span>
                      <i className={skill.icon}></i> {skill.name}
                    </span>
                    <span className="pro-skill-percent">{skill.level}</span>
                  </div>
                  
                  {/* DATA VISUALIZATION PROGRESS BARS */}
                  <div className="pro-progress-line">
                    <div 
                      className="pro-fill-line" 
                      style={{ "--skill-width": skill.level }}
                    ></div>
                  </div>
                  
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* --- SKILLS COMPONENT ARCHITECTURE --- */
        .pro-skills-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        .pro-skills-container {
          width: 95%;
          max-width: 1400px;
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
        }

        /* HEADER TYPOGRAPHY & SPACING */
        .pro-section-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          color: #818cf8;
          padding-left: 5px;
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

        /* GLASSMORPHISM CARD DESIGN */
        .pro-skills-card {
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

        .pro-skills-card:hover {
          transform: translateY(-8px) scale(1.015); 
          border-color: rgba(129, 140, 248, 0.6); 
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(129, 140, 248, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }

        /* BACKGROUND WATERMARK DYNAMICS */
        .pro-skills-bg-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          font-size: 15rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          transform: rotate(-15deg);
          transition: 0.5s ease;
        }

        .pro-skills-card:hover .pro-skills-bg-icon {
          color: rgba(129, 140, 248, 0.08);
          transform: rotate(0deg) scale(1.1);
        }

        /* CONTENT LAYER MAPPING */
        .pro-skills-content {
          position: relative;
          z-index: 1;
        }

        .pro-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px 60px;
        }

        .pro-skill-info { 
          display: flex;
          justify-content: space-between; 
          color: #cbd5e1;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .pro-skill-info i {
          color: #818cf8;
          margin-right: 8px;
        }

        /* BASE PROGRESS INDICATOR TRACK */
        .pro-progress-line {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* PROGRESS FILL & ANIMATION LOGIC */
        .pro-fill-line {
          height: 100%;
          width: 0%; /* Initial state for interaction trigger */
          background: linear-gradient(90deg, #4f46e5, #818cf8);
          border-radius: 20px;
          box-shadow: 0 0 12px rgba(129, 140, 248, 0.4);
          transition: width 1.5s cubic-bezier(0.1, 0.42, 0.41, 0.81);
        }

        /* INTERACTION TRIGGERS (HOVER/TOUCH) */
        .pro-skills-card:hover .pro-fill-line, 
        .pro-skills-card:active .pro-fill-line { 
          width: var(--skill-width); 
        }

        /* =================================================================
           LIGHT THEME OVERRIDES (ICE-BLUE GLASS & PREMIUM CONTRAST)
        ================================================================= */
        
        .pro-skills-section.light .pro-section-header {
          color: #1e3a8a; /* Deep Navy Blue */
        }

        .pro-skills-section.light .pro-skills-card {
          background: rgba(224, 242, 254, 0.6); /* Soft Ice-Blue */
          border-color: rgba(30, 58, 138, 0.15); /* Soft Navy Border */
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .pro-skills-section.light .pro-skills-card:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.1);
        }

        /* Typography & Iconography */
        .pro-skills-section.light .pro-skill-info { color: #475569; } /* Sharp Slate-Grey */
        .pro-skills-section.light .pro-skill-info i { color: #2563eb; } /* Royal Blue */
        
        .pro-skills-section.light .pro-skills-bg-icon { color: rgba(30, 58, 138, 0.04); }
        .pro-skills-section.light .pro-skills-card:hover .pro-skills-bg-icon { color: rgba(37, 99, 235, 0.08); }

        /* Progress Bar Overrides */
        .pro-skills-section.light .pro-progress-line {
          background: rgba(30, 58, 138, 0.08); /* Darker track for visibility */
          border-color: rgba(30, 58, 138, 0.1);
        }

        .pro-skills-section.light .pro-fill-line {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6); /* Deep Navy to Vibrant Blue */
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
        }

        /* --- RESPONSIVE ADAPTATION: MOBILE VIEWPORTS --- */
        @media (max-width: 768px) {
          .pro-skills-section {
            padding: 0 10px;
          }

          .pro-skills-container {
            width: 95%;
          }

          .pro-section-header h2 {
            font-size: 1.5rem;
            white-space: normal;
          }

          .pro-skills-card {
            padding: 25px 20px;
            border-radius: 20px;
          }

          .pro-skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pro-skills-bg-icon {
            font-size: 8rem;
            right: -10px;
            bottom: -10px;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;