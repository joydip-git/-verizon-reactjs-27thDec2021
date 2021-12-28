import React from 'react'

function Welcome() {

    //code
    const welcomeMessage = 'Welcome to React JS'
    const pHoverHandler = () => {
        window.alert('para has been hovered')
    }

    const pStyle = {
        backgroundColor: 'lime',
        fontFamily: 'Segow UI',
        width: '300px',
        height: '20px'
    }

    //desgn
    const paraReactElement = React.createElement(
        'p',
        {
            id: 'welcomePara',
            style: pStyle,
            onMouseOver: pHoverHandler
        },
        welcomeMessage)

    return paraReactElement
}

export default Welcome

/**
 * export function Welcome(){}
 * module.exports={Welcome:Welcome}
 * 
 * export default Welcome
 * module.exports=Welcome
 * 
 * <p>
 *  
 * </p>
 */