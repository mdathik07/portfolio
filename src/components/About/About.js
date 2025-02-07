import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img 
              src=`${process.env.PUBLIC_URL}/assets/img/profile-img.jpg` 
              className="img-fluid" 
              alt="" 
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <p className="fst-italic">
              I am a passionate and driven software developer with a deep interest in computer technology, 
              problem-solving, and continuous learning. I thrive on tackling complex challenges and developing 
              innovative solutions that make an impact.
            </p>
            <p className="fst-italic">
              With experience in full-stack development, and networking, I have worked on diverse projects 
              ranging from e-commerce platforms to network security. 
              My expertise includes Java, Spring Boot, Python, Node.js, and various web technologies, along with a strong 
              foundation in data structures, algorithms, Operating System and software testing.
            </p>
            <p className="fst-italic">
              I am always eager to explore emerging technologies, enhance my skill set, and contribute to meaningful projects. 
              Whether it's optimizing backend systems, building scalable applications, or diving into cybersecurity, 
              I am committed to learning and growing in the ever-evolving world of technology.
            </p>
            <p className="fst-italic">
              Let's connect and build something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
