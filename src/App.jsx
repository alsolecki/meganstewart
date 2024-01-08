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

        <ParallaxImage
          imagePath='/black-and-white-blur-bright-dawn.jpg'
          height='600px'
          top='180%'
          transform='translateZ(-10px) scale(2)'
        />
        <Methodology
          height='720px'
          top='240%'
        />


        <Results
          height='1200px'
          top='420%'
        />


        <ParallaxImage
          imagePath='/69934784_medium.jpg'
          height='750px'
          top='360%'
          transform='translateZ(-10px) scale(2)'
        />


        <div className="buzzwords">
          <h2>Connection</h2>
          <h2>Strategy</h2>
          <h2>Support</h2>
        </div>

        {/* <Testimonial
          height='600px'
          top='420%'
        /> */}


        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='550px'
          top='630%'
          transform='translateZ(-10px) scale(2)'
        />
        <Footer top='720%' />
      </div>
    </div>
  )
}

export default App
