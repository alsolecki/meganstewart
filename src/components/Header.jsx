import React from 'react'

const Header = () => {
    return (
        <header style={{
            color: 'var(--main-text-color)',
            textAlign: 'center',
            backgroundColor: 'var(--main-bg-color)',
            height: '120px',
            width: '100%',
            position: 'absolute',
            zIndex: '100',
            display: 'flex',
            justifyContent: 'center',
            top: '0'
        }}>
            <div className="title">
                <h1>Spark*</h1>
                <h1>Coaching</h1>
            </div>
        </header>
    )
}

export default Header