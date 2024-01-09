import React from 'react'

const Footer = ( { top } ) => {
    return (
        <footer
            id="info"
            style={{
                backgroundColor: 'var(--main-bg-color)',
                color: 'var(--main-text-color)',
                width: '100%',
                height: '310px',
                textAlign: 'center',
                position: 'absolute',
                top: top,
                paddingTop: '3rem'
            }}
            >
            <div className="text-box">
                <h3>Contact:</h3>
                <h3>megan.spark.coaching@gmail.com</h3>
                <h4>&#169;2024 Spark*Coaching, LLC</h4>
            </div>
        </footer>
    )
}

export default Footer