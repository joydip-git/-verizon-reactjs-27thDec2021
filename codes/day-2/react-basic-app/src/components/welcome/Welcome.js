import React from 'react'
//props:{welcomeData:'', paraHandler:FnRef}
export default function Welcome(props) {
    
    return (
        <p style={{ backgroundColor: 'lime', fontSize: 'medium', fontFamily: 'sans-serif' }} onMouseOver={props.paraHandler}>
            {
                props.welcomeData
            }
        </p>
    )
}