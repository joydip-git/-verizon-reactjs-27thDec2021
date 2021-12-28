import React from 'react'

export default function Introduction() {

    const introMessage = 'React JS is a library. Current version is 17.0.2. This is not a full fledged framework like Angular'

    // const divReactElement = React.createElement(
    //     'div', { id: 'introDiv' }, introMessage)

    const divReactElement = <div id='introDiv'>{introMessage}</div>

    return divReactElement
}