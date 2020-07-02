import React from 'react'
import './ClearButton.css'

function ClearButton(props) {
    return (
        <div className='clearButton' onClick={props.handleClear}>
            {props.children}
        </div>
    )
}

export default ClearButton
