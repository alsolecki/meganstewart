import React from 'react'

const Footer = ( { top } ) => {
    return (
        <footer
            id="info"
            style={{
                backgroundColor: 'var(--sub-bg-color)',
                color: 'var(--main-text-color)',
                width: '100%',
                height: '310px',
                textAlign: 'center',
                position: 'absolute',
                top: top,
                paddingTop: '3rem'
            }}
            >
            <div>
                <h3>Contact:</h3>
                <a href="mailto:megan@sparkcoachingllc.com">
                <h3>megan@sparkcoachingllc.com</h3>
                </a>
                    
                <h4>&#169;2024 sparkcoaching, llc</h4>
            </div>
        </footer>
    )
}

export default Footer