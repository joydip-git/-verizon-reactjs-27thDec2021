import React from 'react'
import useValue from './useValue'

const Click = () => {
    const [valueData, increaseValueHandler] = useValue()
    return (
        <div>
            Value:&nbsp;{valueData}
            <br />
            <button onClick={increaseValueHandler}>Increase</button>
        </div>
    )
}

export default Click
