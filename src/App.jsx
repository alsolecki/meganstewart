import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Methodology from './components/Methodology.jsx';
import Footer from './components/Footer.jsx';
import ParallaxImage from './components/ParallaxImage.jsx';
import Results from './components/Results.jsx';
import Buzzword from './components/Buzzword.jsx';
import Testimonial from './components/Testimonial.jsx';
import Testimonial2 from './components/Testimonial2.jsx';

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

        <Buzzword
            word='Strategy'
            top='300%'
        />

        <Testimonial
          height='660px'
          top='370%'
        />
        
        <Buzzword
            word='Connection'
            top='520%'
        />

        <ParallaxImage
          imagePath='/69934784_medium.jpg'
          height='750px'
          top='490%'
          transform='translateZ(-10px) scale(2)'
        />

        <Results
          height='1200px'
          top='610%'
        />

        <ParallaxImage
          imagePath='/dandelion.jpg'
          height='550px'
          top='810%'
          transform='translateZ(-10px) scale(2)'
        />

        <Buzzword
            word='Support'
            top='840%'
        />

        <Testimonial2
          height='660px'
          top='900%'
        />

        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='560px'
          top='1015%'
          transform='translateZ(-10px) scale(2)'
        />
        <Footer top='1110%' />
      </div>
    </div>
  )
}

export default App
