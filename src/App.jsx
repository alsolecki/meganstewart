import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import ParallaxImage from './components/ParallaxImage.jsx';
import Results from './components/Results.jsx';
import Buzzword from './components/Buzzword.jsx';
import Testimonial from './components/Testimonial.jsx';
import Testimonial2 from './components/Testimonial2.jsx';
import Testimonial3 from './components/Testimonial3.jsx';

function App() {

  const [ width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  console.log(width)

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

        <Buzzword word='Strategy' top='250%' />

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
          imagePath='/stream.jpg'
          height='550px'
          top='620%'
          transform='translateZ(-10px) scale(2)'
        />

        <Buzzword word='Motivation' top='650%' />

        <Testimonial2 height='690px' top='700%' />

        <ParallaxImage
          imagePath='/dandelion.jpg'
          height='550px'
          top='810%'
          transform='translateZ(-10px) scale(2)'
        />

        <Buzzword word='Compassion' top='830%' />

        <Testimonial3 height='860px' top='860%' />

        <ParallaxImage
          imagePath='/unnamed1.jpg'
          height='560px'
          top='970%'
          transform='translateZ(-10px) scale(2)'
        />

        <Footer top='1065%' />

      </div>
    </div>
  )
}

export default App