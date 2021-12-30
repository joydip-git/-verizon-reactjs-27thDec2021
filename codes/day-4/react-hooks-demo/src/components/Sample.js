import React, { useState } from 'react'

// const useFoo = (initial) => {
//     let state = initial //{ num: 0, name: '' }
//     const setState = (newValue:{num: 1}) => {
//         state = newValue //{ num: 0, name: '' }--->{num: 1}
//     }
//     return [state, setState]
// }

/**
 * this.state={num:0, name:''}
 */
const Sample = () => {

    const [num, setNum] = useState(0)
    const [name, setName] = useState('')

    const [sampleState, setSampleState]
        = useState({ num: 0, name: '' })

    const increaseNumStateHandler = () => {
        setNum(
            (currentNum) => {
                return currentNum + 1
            }
        )
    }
    const nameHandler = (newName) => {
        setName(newName)
    }
    console.log('Sample rendered')
    return (
        <div>
            <div>
                Num:&nbsp;{num}
                <br />
                <button onClick={increaseNumStateHandler}>Increase</button>
                <br />
                <br />
                Name:&nbsp;
                <input
                    type='text'
                    value={name}
                    onChange={
                        (e) => {
                            nameHandler(e.target.value)
                        }
                    } />
            </div>
            <br />
            <br />
            <div>
                Sample State Num:&nbsp;{sampleState.num}
                <br />
                <button onClick={
                    () => {
                        /**
                        this.state={x:0,y:''}

                        const updatedState={x:10}
                        this.setState(updatedState)

                        const newState={...this.state,...updatedState}


                         */
                        setSampleState(
                            (currentState) => {
                                return {
                                    ...currentState,
                                    num: currentState.num + 1
                                }
                            }
                        )
                    }
                }>Increase sample num</button>
                <br />
                <br />
                Sample State Name:&nbsp;
                <input
                    type='text'
                    value={sampleState.name}
                    onChange={
                        (e) => {
                            setSampleState({
                                ...sampleState,
                                name: e.target.value
                            })
                        }
                    } />
            </div>
        </div>
    )
}

export default Sample

/**
 * storage--place your data here
 * function---to update the data in the storage
 * as a result the updated data should flow back to the func component and the func component should be re-rendered
 * 
 * useState()<--state hook
 * 
 * state property, setState()
 */