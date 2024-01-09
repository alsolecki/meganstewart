import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Methodology from './components/Methodology.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import ParallaxImage from './components/ParallaxImage.jsx';
import Results from './components/Results.jsx';

function App() {

  return (
    <div className="wrapper">
      <div className="parallax">
        <Header />
        <ParallaxImage
          imagePath='/headshot.jpg'
          height='800px'
          top='10%'
          transform='translateZ(-10px) scale(2)'
        />

        <About
          height='600px'
          top='90%'
        />

        <Methodology
          height='580px'
          top='185%'
        />
        
        <ParallaxImage
          imagePath='/black-and-white-blur-bright-dawn.jpg'
          height='600px'
          top='270%'
          transform='translateZ(-10px) scale(2)'
        />

        <Testimonial
          height='660px'
          top='370%'
        />
        
        <ParallaxImage
          imagePath='/69934784_medium.jpg'
          height='750px'
          top='490%'
          transform='translateZ(-10px) scale(2)'
        />

        <Results
          height='1200px'
          top='620%'
        />



        <div className="buzzwords">
          <h2>Connection</h2>
          <h2>Strategy</h2>
          <h2>Support</h2>
        </div>




        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='550px'
          top='820%'
          transform='translateZ(-10px) scale(2)'
        />
        <Footer top='910%' />
      </div>
    </div>
  )
}

export default App
