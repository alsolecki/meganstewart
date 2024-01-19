import React from 'react'

const Buzzword = ({ word, top }) => {
    return (
        <div style={{
                color: 'var(--spark-goldTrans-color)',
                fontFamily: `'Raleway', sans-serif`,
                fontWeight: '200',
                fontStyle: 'normal',
                fontSize: '2.75rem',
                textAlign: 'center',
                position: 'absolute',
                top: top,
                transform: 'translateZ(-5px) scale(1.5)'
            }}
        >
            <h2>{word}</h2>
        </div>
    )
}

export default Buzzword