import React from 'react'

const Footer = ( { top } ) => {
    return (
        <footer
            id="info"
            style={{
                backgroundColor: 'var(--main-bg-color)',
                color: 'var(--main-text-color)',
                width: '100%',
                height: '330px',
                textAlign: 'center',
                position: 'absolute',
                top: top,
                paddingTop: '2rem'
            }}
            >
            <div className="text-box">
                <h3>Contact</h3>
                <h3>Megan Stewart</h3>
                <h3>Irure laborum est</h3>
                <h3>Richmond, VA</h3>
                <h3>555-555-5555</h3>
                <h4>&#169;2024 Spark*Coaching, LLC</h4>
            </div>
        </footer>
    )
}

export default Footer