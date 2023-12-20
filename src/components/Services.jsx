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
        <h2>Services</h2>
        <p>Irure laborum est dolore officia aliqua reprehenderit veniam ipsum magna cupidatat consectetur commodo eu.</p>
        <ul>
          <li>ipsum magna cupidatat</li>
          <li>est dolore officia </li>
          <li>pariatur</li>
          <li>cillum adipisicing occaecat </li>
          <li>sint deserunt cupidatat</li>
        </ul>
        <p>Non cillum adipisicing occaecat et pariatur laborum est dolore officia aliqua reprehenderit veniam esse sint deserunt cupidatat dolor amet ad velit nostrud.</p>
      </div>
    </div>
  )
}

export default Services