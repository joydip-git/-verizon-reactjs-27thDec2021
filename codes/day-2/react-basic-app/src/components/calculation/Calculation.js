import React, { Component } from 'react'

const initialState = {
    result: 0,
    firstValue: 0,
    secondValue: 0
}
export default class Calculation extends Component {
    constructor() {
        super()
        this.state = initialState
    }

    updateFirstValue = (e) => {
        const val = e.target.value
        console.log(val)
        if (val !== '') {
            //NEVER MUTATE THE STATE DIRECTLY. 
            // THE RENDER() METHOD WILL NOT BE CALLED. YOU CAN CALL, BUT NO GURANTEE THAT STATE IS UPDATED BY THAT TIME
            // this.state.firstValue = parseInt(val)
            // this.render()

            const updatedState = {
                firstValue:parseInt(val)
            }
            // const newState = {
            //     ...this.state,
            //     ...updatedState
            // }
            //this.state = newState

            this.setState(updatedState)
            // console.log(this.state)
        }
    }
    updateSecondValue = (e) => {
        const val = e.target.value
        console.log(val)
        if (val !== '') {
            this.setState({
                secondValue: parseInt(val)
            })
        }
    }

    updateResult = () => {
        // this.setState({
        //     result: this.state.firstValue + this.state.secondValue
        // })
        this.setState(
            (currentState) => {
                return {
                    result: currentState.firstValue + currentState.secondValue
                }
            }
        )
    }
    render() {
        console.log('calculation rendered')
        return (
            <div>
                1st Value: &nbsp;<input type='text' onChange={this.updateFirstValue} value={this.state.firstValue} />

                <br />

                2nd Value: &nbsp;<input type='text' onChange={this.updateSecondValue} value={this.state.secondValue} />

                <br />
                <button onClick={this.updateResult}>Add</button>
                <br />

                <span>Result: &nbsp; {this.state.result}</span>
            </div>
        )
    }
}

/*
const Calculation = () => {
    let result = 0;
    let firstValue = 0;
    let secondValue = 0;

    const updateFirstValue = (e) => {
        // console.log(e.target)
        const val = e.target.value
        console.log(val)
        if (val !== '') {
            firstValue = parseInt(val)
        }
    }
    const updateSecondValue = (e) => {

        const val = e.target.value
        console.log(val)
        if (val !== '') {
            secondValue = parseInt(val)
        }
    }
    const updateResult = () => {
        result = firstValue + secondValue
        window.alert(result.toString())
    }
    console.log('Calculation rendered')
    return (
        <div>
            1st Value: &nbsp;<input type='text' onChange={updateFirstValue} value={firstValue} />

            <br />

            2nd Value: &nbsp;<input type='text' onChange={updateSecondValue} value={secondValue} />

            <br />
            <button onClick={updateResult}>Add</button>
            <br />

            <span>Result: &nbsp; {result}</span>
        </div>
    )
}

export default Calculation
*/
