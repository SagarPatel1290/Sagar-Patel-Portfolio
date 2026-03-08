import React from "react";

function Journey({ isDarkMode }) {
  /**
   * EDUCATIONAL DATA
   * Separated for distinct categorization under its own header.
   */
  const educationData = [
    {
      badgeClass: "j-education-badge",
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Dr. Babasaheb Ambedkar Open University | July 2025",
      desc: "Completed with 7.94 CGPA. Core focus on Programming, Web Development, and Database Management Systems.",
      spanClass: "j-span-2", // Full Width
      icon: "fas fa-laptop-code"
    },
    {
      badgeClass: "j-education-badge",
      title: "Diploma in Radiology Technology",
      subtitle: "Bharat Sevak Samaj | May 2011",
      desc: "Completed with 73.11%. Gained hands-on expertise in medical imaging technologies and accurate patient data management.",
      spanClass: "j-span-1", // Half Width
      icon: "fas fa-x-ray"
    },
    {
      badgeClass: "j-education-badge",
      title: "Bachelor of Commerce (B.Com)",
      subtitle: "Gujarat University | April 2010",
      desc: "Completed with 62.14%. Developed a strong foundation in business management, organizational operations, and financial record-keeping.",
      spanClass: "j-span-1", // Half Width
      icon: "fas fa-chart-line"
    }
  ];

  /**
   * PROFESSIONAL EXPERIENCE DATA
   * Separated for its own dedicated section and header.
   */
  const experienceData = [
    {
      badgeClass: "j-experience-badge",
      title: "Senior Technical Operator & Supervisor",
      subtitle: "Drashti X-Ray Clinic, Nadiad | June 2012 - July 2025",
      listItems: [
        "Technical Leadership: Orchestrated daily technical operations and mentored junior staff.",
        "Systems Management: Resolved 100% of hardware and software anomalies.",
        "Data Integrity & Security: Maintained sensitive patient records with strict privacy compliance."
      ],
      spanClass: "j-span-2", // Full Width
      icon: "fas fa-user-tie"
    }
  ];

  return (
    <section className={`j-section ${isDarkMode ? '' : 'light'}`} id="journey">
      <div className="j-container">
        
        {/* --- MAIN SECTION HEADER --- */}
        <div className="j-main-header">
          <i className="fas fa-route"></i>
          <h2>Journey & Experience</h2>
        </div>

        {/* ==========================================
            EDUCATION SUB-SECTION
        ========================================== */}
        <div className="j-sub-header">
          <i className="fas fa-graduation-cap"></i>
          <h3>Education & Qualifications</h3>
        </div>

        <div className="j-grid">
          {educationData.map((item, index) => (
            <div key={index} className={`j-card ${item.spanClass}`}>
              <div className="j-card-content">
                <span className={`j-badge ${item.badgeClass}`}>EDUCATION</span>
                <h4>{item.title}</h4>
                <p className="j-subtitle">{item.subtitle}</p>
                <p className="j-desc">{item.desc}</p>
              </div>
              <i className={`${item.icon} j-bg-icon`}></i>
            </div>
          ))}
        </div>

        {/* ==========================================
            EXPERIENCE SUB-SECTION
        ========================================== */}
        <div className="j-sub-header" style={{ marginTop: '40px' }}>
          <i className="fas fa-briefcase"></i>
          <h3>Professional Experience</h3>
        </div>

        <div className="j-grid">
          {experienceData.map((item, index) => (
            <div key={index} className={`j-card ${item.spanClass}`}>
              <div className="j-card-content">
                <span className={`j-badge ${item.badgeClass}`}>EXPERIENCE</span>
                <h4>{item.title}</h4>
                <p className="j-subtitle">{item.subtitle}</p>
                
                <ul className="j-list">
                  {item.listItems.map((point, i) => {
                    const [boldPart, restPart] = point.split(':');
                    return (
                      <li key={i}>
                        <strong>{boldPart}:</strong>{restPart}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <i className={`${item.icon} j-bg-icon`}></i>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* --- UNIQUE JOURNEY CLASSES TO PREVENT CSS CONFLICTS --- */
        .j-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          margin-bottom: 50px;
        }

        .j-container {
          width: 95%;
          max-width: 1400px;
        }
        
        /* MAIN HEADER */
        .j-main-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
          color: #818cf8;
        }
        .j-main-header i { font-size: 1.8rem; }
        .j-main-header h2 { font-size: 2.2rem; font-weight: 700; letter-spacing: 0.8px; margin: 0; }

        /* SUB HEADERS (Like in Screenshot) */
        .j-sub-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #fff;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .j-sub-header i { font-size: 1.5rem; color: #818cf8; }
        .j-sub-header h3 { font-size: 1.6rem; font-weight: 600; margin: 0; }

        /* GRID SYSTEM */
        .j-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }
        .j-span-2 { grid-column: span 2; }
        .j-span-1 { grid-column: span 1; }

        /* CARD DESIGN */
        .j-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .j-card:hover {
          transform: translateY(-6px);
          border-color: rgba(129, 140, 248, 0.6);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(129, 140, 248, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        /* CARD CONTENT */
        .j-card-content { z-index: 2; position: relative; }
        
        .j-card-content h4 {
          font-size: 1.5rem;
          color: #fff;
          margin: 12px 0 6px 0;
        }

        .j-subtitle {
          font-size: 0.9rem;
          color: #818cf8;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .j-desc {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
        }

        /* EXPERIENCE LIST */
        .j-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .j-list li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin-bottom: 12px;
          position: relative;
          padding-left: 18px;
        }

        .j-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #818cf8;
          font-weight: bold;
        }
        .j-list li strong { color: #fff; }

        /* BADGES */
        .j-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .j-education-badge { background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.3); }
        .j-experience-badge { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }

        /* BACKGROUND ICON */
        .j-bg-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          font-size: 10rem;
          color: rgba(255, 255, 255, 0.02);
          z-index: 1;
          transform: rotate(-15deg);
          transition: 0.5s ease;
        }
        .j-card:hover .j-bg-icon {
          color: rgba(129, 140, 248, 0.08);
          transform: rotate(0deg) scale(1.1);
        }

        /* =================================================================
           LIGHT THEME OVERRIDES (ICE-BLUE GLASS & PREMIUM CONTRAST)
        ================================================================= */
        
        .j-section.light .j-main-header { color: #1e3a8a; } /* Deep Navy */
        
        .j-section.light .j-sub-header { color: #1e3a8a; border-bottom-color: rgba(30, 58, 138, 0.1); }
        .j-section.light .j-sub-header h3 { color: #1e3a8a; }
        .j-section.light .j-sub-header i { color: #2563eb; }

        /* Glass Cards Light Mode */
        .j-section.light .j-card {
          background: rgba(224, 242, 254, 0.6);
          border-color: rgba(30, 58, 138, 0.15);
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.05);
        }

        .j-section.light .j-card:hover {
          background: rgba(224, 242, 254, 0.85);
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 20px 50px rgba(30, 58, 138, 0.15), 0 0 25px rgba(37, 99, 235, 0.1);
        }

        /* Typography */
        .j-section.light .j-card-content h4 { color: #1e3a8a; }
        .j-section.light .j-subtitle { color: #2563eb; }
        .j-section.light .j-desc, 
        .j-section.light .j-list li { color: #475569; }
        .j-section.light .j-list li strong { color: #1e3a8a; }
        .j-section.light .j-list li::before { color: #2563eb; }

        /* Background Icons */
        .j-section.light .j-bg-icon { color: rgba(30, 58, 138, 0.04); }
        .j-section.light .j-card:hover .j-bg-icon { color: rgba(37, 99, 235, 0.08); }

        /* Badges Overrides */
        .j-section.light .j-education-badge { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }
        .j-section.light .j-experience-badge { background: #fef9c3; color: #92400e; border-color: #fde047; }


        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 768px) {
          .j-section { padding: 0 10px; }
          .j-main-header h2 { font-size: 1.5rem; }
          
          .j-sub-header h3 { font-size: 1.3rem; }
          .j-sub-header i { font-size: 1.2rem; }

          .j-grid { grid-template-columns: 1fr; gap: 15px; }
          .j-span-2, .j-span-1 { grid-column: span 1; }

          .j-card { padding: 20px 15px; border-radius: 20px; }
          .j-card-content h4 { font-size: 1.25rem; }
          .j-subtitle { font-size: 0.8rem; }
          .j-desc, .j-list li { font-size: 0.85rem; }
          
          .j-bg-icon { font-size: 7rem; right: -10px; bottom: -10px; }
        }
      `}</style>
    </section>
  );
}

export default Journey;