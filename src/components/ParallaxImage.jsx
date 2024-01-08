import React from 'react'

const ParallaxImage = ( { imagePath, top, height, transform } ) => {
  return (
    <img 
        src={imagePath} 
        alt=""
        style={{
            height: height,
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: top,
            // filter: 'blur(3px) invert(20%)',
            transform: transform
        }}>
    
    </img>
  )
}

export default ParallaxImage