import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Here are some of the projects I've worked on, each reflecting my passion for technology and 
            problem-solving. These projects have allowed me to develop a diverse set of skills, and I am 
            eager to continue growing and expanding my expertise. I believe that every new challenge presents 
            an opportunity to learn, and I am excited to take on more projects that push the boundaries of my 
            abilities while contributing meaningful solutions.</p>
        </div>

        <div className="row mb-5">
          <div className="col-lg-5 col-md-6 portfolio-item filter-web d-flex align-items-stretch">
            <div className="portfolio-wrap h-100">
              <p>Mall Management System</p>
              <div className="portfolio-img h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-3.jpg`} className="img-fluid" alt="" style={{objectFit: 'cover', height: '100%'}} />
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/mdathik07/Mall-Management-System" title="More Details" className="w-100"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex align-items-stretch">
            <div className="portfolio-description h-100">
              <h2>Mall Management System</h2>
              <p>
                A comprehensive system designed to streamline mall operations and Employee Management for Admin. This project includes:
                <ul>
                  <li>Developed a web-based application to streamline and automate mall operations.</li>
                  <li>Implemented features for sales tracking, inventory management, and employee oversight.</li>
                  <li>Integrated invoice generation for seamless financial record-keeping.</li>
                  <li>Utilized a Relational Database Management System (RDBMS) to ensure consistent data management.</li>
                  <li>Implemented database triggers to enhance automation and improve efficiency.</li>
                </ul>
                <strong>Key Skills:</strong> RDBMS, MySQL, JavaScript, Web Application Development.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-5 col-md-6 portfolio-item filter-web d-flex align-items-stretch">
            <div className="portfolio-wrap h-100">
              <p>COVID-19 Bed Booking System</p>
              <div className="portfolio-img h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-1.jpg`} className="img-fluid" alt="" style={{objectFit: 'cover', height: '100%'}} />
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/mdathik07/Hospital-Bed-Booking-System" title="More Details" className="w-100"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex align-items-stretch">
            <div className="portfolio-description h-100">
              <h2>COVID-19 Bed Booking System</h2>
              <p>
                A critical healthcare management system developed during the COVID-19 pandemic. Features include:
                <ul>
                  <li>Real-time bed availability tracking</li>
                  <li>Online bed booking system</li>
                  <li>Hospital resource management</li>
                  <li>Patient tracking and status updates</li>
                </ul>
                <strong>Key Skills:</strong> Python, MySQL, HTML, CSS, JavaScript, Web Application Development.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-5 col-md-6 portfolio-item filter-game d-flex align-items-stretch">
            <div className="portfolio-wrap h-100">
              <p>Sudoku-Solver Using Backtracking</p>
              <div className="portfolio-img h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-2.jpg`} className="img-fluid" alt="" style={{objectFit: 'cover', height: '100%'}} />
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/mdathik07/Sudoku-Solver" title="More Details" className="w-100"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex align-items-stretch">
            <div className="portfolio-description h-100">
              <h2>Sudoku Solver</h2>
              <p>
                An intelligent Sudoku puzzle solver implementing the backtracking algorithm. Key features:
                <ul>
                  <li>Efficient backtracking implementation</li>
                  <li>Support for various puzzle difficulties</li>
                  <li>Input validation and error checking</li>
                </ul>
                <strong>Key Skills:</strong> C, Algorithm Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio; 