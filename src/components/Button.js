import React from 'react'
import './Button.css'

function Button(props) {
    const isOperator = (val) =>{
        return !isNaN(val)|| val === '.' || val === '=';
    }
    
    return (
        <div className={`button-wrapper 
        ${isOperator(props.children)?null : 'opertor'}`}
        onClick={()=> props.handleClick(props.children)}
        >
            {props.children}


        </div>
    )
}

export default Button
