import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="parallax">

          <Header />

          <div className="parallax__stevie1"></div>

          <About />

          <div className="parallax__stevie2"></div>

          <Services />

          <div className="parallax__stevie3"></div>

          {/* <div className="buzzwords">
            <h2>Leadership</h2>
            <h2>Coaching</h2>
            <h2>Support</h2>
            <h2>Guidance</h2>
            <h2>Direction</h2>
            <h2>Encouragement</h2>
            <h2>Direction</h2>
            <h2>Navigation</h2>
            <h2>Caring</h2>
            <h2>Cultivation</h2>
            <h2>Sharpening</h2>
            <h2>Focus</h2>
            <h2>Potential</h2>
          </div> */}

          <Testimonial />

          <div className="parallax__stevie4"></div>

          <Footer />


        </div>
      </div>
    </>
  )
}

export default App
