import React from 'react'

const ParallaxImage = ( { imagePath, top, height } ) => {
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
            filter: 'blur(3px) invert(20%)',
            transform: 'translateZ(-10px) scale(2)'
        }}>
    
    </img>
  )
}

export default ParallaxImage