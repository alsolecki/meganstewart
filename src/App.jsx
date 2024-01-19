import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
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

        <About height='980px' top='90%'/>
        
        <ParallaxImage
          imagePath='/black-and-white-blur-bright-dawn.jpg'
          height='600px'
          top='220%'
          transform='translateZ(-10px) scale(2)'
        />

        <Buzzword word='Strategy' top='240%' />

        <Testimonial height='670px' top='300%' />
        
        <Buzzword word='Connection' top='420%' />

        <ParallaxImage
          imagePath='/69934784_medium.jpg'
          height='750px'
          top='410%'
          transform='translateZ(-10px) scale(2)'
        />

        <Results height='1100px' top='470%'/>

        <ParallaxImage
          imagePath='/dandelion.jpg'
          height='550px'
          top='620%'
          transform='translateZ(-10px) scale(2)'
        />

        <Buzzword word='Support' top='640%' />

        <Testimonial2 height='680px' top='690%' />

        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='560px'
          top='780%'
          transform='translateZ(-10px) scale(2)'
        />

        <Footer top='875%' />

      </div>
    </div>
  )
}

export default App