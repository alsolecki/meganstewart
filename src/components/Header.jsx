import React from 'react'
import logo from '/sparklogo.svg'

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

                <img
                    src={logo}
                    style={{
                        width: '100%',
                        height: '2.5rem'
                    }}
                />

            </div>
        </header>
    )
}

export default Header