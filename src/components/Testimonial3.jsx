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
        <p>"Megan is the most impactful mentor I've had in my decade-long career because she leads with authenticity, expertise, and genuine care. As an action-oriented professional, Megan has coached me on how to prepare for difficult conversations, giving and receiving feedback, as well as salary negotiations."</p>
        <h4>-Account Executive, Salesforce</h4>
      </div>
    </div>
  )
}

export default Testimonial3