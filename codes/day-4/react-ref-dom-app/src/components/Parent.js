import React, { Component, createRef } from 'react'

export default class Parent extends Component {

    constructor() {
        super()
        this.numElementRef = null
        this.nameElementRef = createRef()
    }
    //callback ref
    setElementRef = (htmlElementRef) => {
        this.numElementRef = htmlElementRef
        //console.log(htmlElementRef)
    }
    //data
    state = {
        nameValue: '',
        numValue: 0,
        validationErrorMessage: ''
    }
    //functionality
    increaseNumHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    numValue: currentState.numValue + 1
                }
            }
        )
    }

    focusElement = () => {
        // if (this.numElementRef !== null && this.numElementRef) {
        //     this.numElementRef.focus()
        // }
        // console.log(this.nameElementRef.current)
        this.nameElementRef.current.focus()
    }
    validateName = () => {
        const nameTextBox = this.nameElementRef.current
        if (nameTextBox.value === '') {
            this.setState({
                validationErrorMessage: 'should not be empty'
            })
        }
    }

    render() {

        //design
        return (
            <div>
                Value:&nbsp;
                <input type='text' value={this.state.numValue} ref={this.setElementRef} />
                <br />
                <button onClick={this.increaseNumHandler}>Increase</button>
                <br />
                <br />
                Name:&nbsp;
                <input type='text' value={this.state.nameValue} ref={this.nameElementRef} onChange={
                    (e) => {
                        if (e.target.value === '') {
                            this.setState({
                                nameValue: e.target.value,
                                validationErrorMessage: 'should not be empty'
                            })
                        } else {
                            this.setState({
                                nameValue: e.target.value,
                                validationErrorMessage: ''
                            })
                        }
                    }
                } />
                &nbsp;
                {
                    this.state.validationErrorMessage !== '' && <span>{this.state.validationErrorMessage}</span>
                }
                <br />
                <button type='button' onClick={this.validateName}>Submit</button>
            </div>
        )
    }
    componentDidMount() {
        this.focusElement()
    }
}
/**
 * React.createElement('div',null,[,,,,])
 * 
 * {
 *   type:'div',
 *   key:null,
 *   ref:null,
 *   props:{
 *     x:10,
 *     children:[,,,,]
 *   }
 * }
 */
