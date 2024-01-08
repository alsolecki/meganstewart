import React from 'react'

const About = ({ height, top }) => {
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
        <h2>About</h2>
        <p>I come to coaching with a passion for facilitating profound connections with my clients, aiming to go beyond the surface and ensure they not only feel heard but genuinely seen. I approach coaching with a strategic lens, firmly believing that by establishing this authentic connection, individuals can access their inner strength.</p>
      </div>
    </div>
  )
}

export default About