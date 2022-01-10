import React from 'react'
import '../styles/Texts.css'

function MyTexts({ id, text }) {
    return (
        <div className='mytext-box text-box' key={id}>
            <p>{text}</p>
        </div>
    )
}

export default MyTexts
