import React from 'react'

const Methodology = ({ height, top }) => {
  return (
    <div
    id="info"
    style={{
      position: 'absolute',
      top: top,
      height: height,
      backgroundColor: 'var(--main-bg-color)',
      color: 'var(--main-text-color)',
      width: '100%',
      textAlign: 'center'
    }}
  >
    <div className="text-box">
      <h2>Methodology</h2>
      <p>In my coaching methodology, the emphasis lies in the transformative power that comes with feeling acknowledged and understood. I believe that this recognition serves as the cornerstone for unlocking untapped potential, paving the way for clients to delve into deeper realms of self-compassion, resilience, and substantial personal growth. Together, we can uncover and leverage inherent strengths that lead to enduring positive change and development.</p>
    </div>
  </div>
  )
}

export default Methodology