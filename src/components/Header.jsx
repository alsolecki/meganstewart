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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingBottom: '1rem'
            }}>
                <h1 style={{
                    fontFamily: `'Raleway', sans-serif`,
                    fontStyle: 'italic',
                    fontWeight: '600',
                    fontSize: '2rem',
                    margin: '2px 0 -8px'
                }}>Spark*</h1>
                <h1 style={{
                    fontFamily: `'Raleway', sans-serif`,
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '1.45rem',
                    paddingBottom: '4px',
                    margin: '0'
                }}>Coaching</h1>
            </div>
        </header>
    )
}

export default Header