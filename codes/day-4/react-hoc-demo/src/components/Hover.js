import React from 'react'
import withValue from './withValue'

let Hover = (props) => {
    return (
        <div onMouseOver={props.increaseValueHandler}>
            Value:&nbsp;{props.value}
            <br />
            <br />
            X data:{props.x}
        </div>
    )
}
Hover = withValue(Hover)
export default Hover
