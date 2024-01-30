import React from 'react'

const Testimonial2 = ( {top, height} ) => {
  return (
    <div
      id="quote"
      style={{
        position: 'absolute',
        top: top,
        height: height,
        backgroundColor: 'var(--sub-bg-color)',
        color: 'var(--main-text-color)',
        width: '100%',
        textAlign: 'center'
      }}>
      <div className="testimonial">
        <p>"Megan is an outstanding thought partner and advisor. She challenges her clients to maximize their potential: inspiring them to trust their intuition, leverage their natural strengths, and overcome their limiting beliefs — making goals feel both stretchy and profoundly doable. I’d recommend Megan highly to anybody looking to level up."</p>
        <h4>{`-Randi Braun, Founder & CEO of Something Major`}</h4>
      </div>
    </div>
  )
}

export default Testimonial2