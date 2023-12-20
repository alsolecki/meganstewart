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
      <p>Non cillum adipisicing occaecat et pariatur esse sint deserunt cupidatat dolor amet ad velit nostrud. Irure laborum est dolore officia aliqua reprehenderit veniam ipsum magna cupidatat consectetur commodo eu. Proident irure voluptate magna dolor nulla reprehenderit ullamco officia. Nulla ex sunt eiusmod quis. Tempor laborum qui tempor incididunt ut aliquip ipsum ipsum qui nulla incididunt.
      </p>
    </div>
  </div>
  )
}

export default About