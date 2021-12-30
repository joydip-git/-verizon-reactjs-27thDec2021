import React, { Component, createRef } from 'react'

export default class NameCls extends Component {

    constructor() {
        super()
        this.nameElementRef = createRef()
    }

    state = {
        nameValue: ''
    }

    focusElement = () => {
        this.nameElementRef.current.focus()
    }

    render() {
        return (
            <div>
                Name:&nbsp;
                <input
                    type='text'
                    value={this.state.nameValue}
                    onChange={
                        (e) => {
                            this.setState({ nameValue: e.target.value })
                        }
                    }
                    ref={this.nameElementRef}
                />
            </div>
        )
    }
}
