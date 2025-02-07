import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/style.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
