import React from 'react';
import './Header.css';

function Header() {
  const toggleMobileNav = () => {
    document.querySelector('#header').classList.toggle('header-mobile-active');
    document.querySelector('#main').classList.toggle('main-mobile-active');
    document.querySelector('#hero').classList.toggle('hero-mobile-active');
  };

  return (
    <>
      {/* Mobile nav toggle button */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={toggleMobileNav}></i>

      {/* Header */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img 
              src= {`${process.env.PUBLIC_URL}/assets/img/profile-img.jpg`}
              alt="" 
              className="img-fluid rounded-circle" 
              onContextMenu={(e) => e.preventDefault()}
            />
            <h1 className="text-light"><a href="index.html">Md Atheeq</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/mdathik07" className="github"><i className="bx bxl-github"></i></a>
              <a href="https://www.instagram.com/_md_atheeq_oo7/" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="https://www.linkedin.com/in/md-athik-982861289/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              <a href="https://leetcode.com/u/md_athik/" className="leetcode" title="LeetCode"><i className="bx bx-code-block"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file"></i> <span>Resume</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header; 