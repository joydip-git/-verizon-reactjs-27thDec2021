import React, { Component } from 'react'
import withValue from './withValue'

class Click extends Component {
    render() {
        return (
            <div>
                Value:&nbsp;{this.props.value}
                <br />
                <button onClick={this.props.increaseValueHandler} >Increase</button>
            </div>
        )
    }
}

Click = withValue(Click)
export default Click

