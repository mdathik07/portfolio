import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Engineer', 'Student'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Md Atheeq</h1>
        <p>I'm <span ref={typedRef}></span></p>
      </div>
    </section>
  );
}

export default Hero; 