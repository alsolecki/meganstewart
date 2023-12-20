import React from 'react'

const Testimonial = ( {top, height} ) => {
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
      }}>
      <div className="testimonial">
        <p>"Non cillum adipisicing occaecat et pariatur esse sint deserunt cupidatat dolor amet ad velit nostrud. Irure laborum est dolore officia aliqua commodo eu. Proident irure voluptate magna dolor nulla reprehenderit ullamco officia."</p>
        <h4>-Christine McVie, musician</h4>
      </div>
    </div>
  )
}

export default Testimonial