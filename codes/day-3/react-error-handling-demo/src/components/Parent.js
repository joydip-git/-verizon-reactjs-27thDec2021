import React, { Component } from 'react'
import Value from './Value'

export default class Parent extends Component {
    state = {
        val: 0,
        show: true
    }

    updateShowHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    show: !currentState.show
                }
            }
        )
    }
    updateValHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    val: currentState.val + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                <br />

                <button onClick={this.updateShowHandler}>
                    {this.state.show ? 'Hide' : 'Show'}
                </button>

                <br />
                {
                    this.state.show && <Value valueData={this.state.val} valueHandler={this.updateValHandler} />
                }
            </div>
        )
    }
}
