import React, { useState } from 'react'
import Name from './Name'
import Value from './Value'

const Parent = () => {
    const [parentState, setParentState]
        = useState({ num: 0, name: '' })

    const [showState, setShowState] = useState(true)

    const increaseNumHandler = () => {
        setParentState(
            (currentState) => {
                return {
                    ...currentState,
                    num: currentState.num + 1
                }
            }
        )
    }
    const nameHandler = (newName) => {
        setParentState({
            ...parentState,
            name: newName
        })
    }

    const updateShowHandler = () => {
        setShowState(
            (oldShow) => {
                return !oldShow
            }
        )
    }
    console.log('[Parent] rendered')
    return (
        <div>
            <Value valueData={parentState.num} increaseValueHandler={increaseNumHandler} />
            <br />
            <br />
            <button onClick={updateShowHandler}>
                {showState ? 'Hide' : 'Show'}
            </button>
            <br />
            <br />
            {
                showState && <Name nameData={parentState.name} nameHandler={nameHandler} />
            }
        </div>
    )
}

export default Parent
