import React from 'react'

const Value = (props) => {
    console.log('[Value] rendered')
    return (
        <div>
            Value:&nbsp;{props.valueData}
            <br/>
            <button onClick={props.increaseValueHandler}>Increase</button>
        </div>
    )
}

export default Value
