import React from 'react'

const Testimonial3 = ( {top, height} ) => {
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
        <p>"Megan’s expertise as an executive coach is truly unparalleled. Her insightful guidance, tailored strategies, and unwavering support have been instrumental in unlocking my potential as a leader. With her mentorship, I’ve not only achieved professional growth but also gained invaluable insights into personal development. Megan’s dedication and passion for empowering others are truly commendable, making her an exceptional asset to anyone seeking to elevate their leadership skills and achieve their fullest potential."</p>
        <h4>-Vice President, National Industry Trade Association</h4>
      </div>
    </div>
  )
}

export default Testimonial3