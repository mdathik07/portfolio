import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>View my detailed professional experience, education, and skills.</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="resume-button">
              <a href={`${process.env.PUBLIC_URL}/assets/resume/Md_Atheeq_Resume.pdf`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="bx bx-file"></i> View Resume
              </a>
            </div>
            <p className="mt-3">Click to view or download my complete resume</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume; 