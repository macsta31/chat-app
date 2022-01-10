import React from 'react'
import '../styles/Texts.css'

function OthersTexts({ id, text }) {
    return (
        <div className='othertext-box text-box' key={id}>
            <p>{text}</p>
        </div>
    )
}

export default OthersTexts
