import React from 'react'

const Services = ({ height, top }) => {
  return (
    <div
      id="info"
      style={{
        position: 'absolute',
        top: top,
        height: height,
        backgroundColor: 'var(--main-bg-color)',
        color: 'var(--main-text-color)',
        width: '200%',
        textAlign: 'center'
      }}
    >
      <div className="text-box">
        <p>
          Throughout my professional journey, I have dedicated my career to steering high-performing revenue teams across an array of industries including healthcare, manufacturing, finance, and government. The most gratifying facet of my work has been the role I've played in fostering the learning and growth of my teams. Witnessing individuals evolve and thrive within their roles, mastering new skills, and overcoming challenges has consistently been the pinnacle of fulfillment in my career. This hands-on experience in cultivating professional development not only defines my leadership style but also positions me as a coach who understands the intricacies of personal and team growth in a myriad of professional environments.</p>
        <p>
          I am certified in coaching through the Co-Active Training Institute (CTI) – practical, no-nonsense coaching that gets results.
        </p>
      </div>
    </div>
  )
}

export default Services