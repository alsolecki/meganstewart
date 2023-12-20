import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import ParallaxImage from './components/ParallaxImage.jsx';

function App() {

  return (
    <div className="wrapper">
      <div className="parallax">
        <Header />
        <ParallaxImage
          imagePath='/stevie-nicks-01.png'
          height='500px'
          top='0%'
        />
        <About
          height='560px'
          top='70%'
        />
        <ParallaxImage
          imagePath='/stevie-nicks-02.png'
          height='550px'
          top='140%'
        />
        <Services
          height='720px'
          top='200%'
        />
        <ParallaxImage
          imagePath='/hbz-stevie-nicks-1975-gettyimages-151275447-1497455912.jpg'
          height='750px'
          top='310%'
        />

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

        <Testimonial
          height='600px'
          top='350%'
        />
        <ParallaxImage
          imagePath='/hbz-stevie-nicks-1978-gettyimages-86122858-1497455915.jpg'
          height='550px'
          top='440%'
        />
        <Footer top='520%' />
      </div>
    </div>
  )
}

export default App
