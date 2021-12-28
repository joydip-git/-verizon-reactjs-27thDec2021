import React from 'react'

export default function Introduction() {

    const introMessage = 'React JS is a library. Current version is 17.0.2'

    const divReactElement = React.createElement(
        'div', { id: 'introDiv' }, introMessage)

    return divReactElement
}