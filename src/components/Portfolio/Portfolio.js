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
              <p>AI-Powered Google Ads Campaign Automation Platform</p>
              <div className="portfolio-img h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-1.jpg`} className="img-fluid" alt="" style={{objectFit: 'cover', height: '100%'}} />
              </div>
              <div className="portfolio-links">
                <a href="https://github.com/mdathik07/AI-POWERED-GOOGLE-ADS-CAMPAIGN-AUTOMATION-PLATFORM" title="More Details" className="w-100"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex align-items-stretch">
            <div className="portfolio-description h-100">
              <h2>AI-Powered Google Ads Campaign Automation Platform</h2>
              <p>
                A sophisticated web-based AI chatbot that revolutionizes Google Ads campaign creation:
                <ul>
                  <li>Developed a web-based AI chatbot that automates Google Ads campaign creation using Node.js, Express, MongoDB, and the Google Ads API.</li>
                  <li>Integrated OpenAI's GPT-4 via Azure to generate optimized ad copy, keywords, and marketing strategies based on user inputs.</li>
                  <li>Implemented RESTful APIs for campaign management, resulting in 60% faster campaign creation and reduced manual workload.</li>
                </ul>
                <strong>Key Skills:</strong> Backend Development, Database Management, Google Ads API Integration, AI Integration.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-5 col-md-6 portfolio-item filter-web d-flex align-items-stretch">
            <div className="portfolio-wrap h-100">
              <p>AI-Driven Smart Farming System</p>
              <div className="portfolio-img h-100">
                <img src={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-2.jpg`} className="img-fluid" alt="" style={{objectFit: 'cover', height: '100%'}} />
              </div>
              <div className="portfolio-links">
                <a href="#" title="More Details" className="w-100"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex align-items-stretch">
            <div className="portfolio-description h-100">
              <h2>AI-Driven Smart Farming System</h2>
              <p>
                A comprehensive smart farming solution developed as a final year capstone project at RVITM:
                <ul>
                  <li>Built a smart farming system using IoT sensors (ESP32, NPK, humidity, temperature) and ML algorithms (Random Forest, Backpropagation).</li>
                  <li>Enabled real-time crop and soil monitoring, weather forecasting, and market trend analysis via external APIs.</li>
                  <li>Developed a web-based dashboard to deliver personalized, data-driven insights to farmers for precision agriculture and sustainable practices.</li>
                </ul>
                <strong>Key Skills:</strong> IoT (ESP32, Sensors), Machine Learning (Random Forest, Backpropagation), Python, Data Preprocessing, API Integration, Web Development, Precision Agriculture, Real-time Monitoring.
              </p>
            </div>
          </div>
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
      </div>
    </section>
  );
}

export default Portfolio; 