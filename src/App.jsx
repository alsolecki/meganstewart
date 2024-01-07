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
          imagePath='/headshot.jpg'
          height='560px'
          top='10%'
        />
        <About
          height='720px'
          top='70%'
        />
        <ParallaxImage
          imagePath='/black-and-white-blur-bright-dawn.jpg'
          height='550px'
          top='140%'
        />
        <Services
          height='720px'
          top='240%'
        />
        <ParallaxImage
          imagePath='/69934784_medium.jpg'
          height='750px'
          top='310%'
        />

        <div className="buzzwords">
            <h2>Connection</h2>
            <h2>Strategy</h2>
            <h2>Support</h2>
          </div>

        <Testimonial
          height='600px'
          top='420%'
        />
        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='550px'
          top='520%'
        />
        <Footer top='600%' />
      </div>
    </div>
  )
}

export default App
