import React, { Component } from 'react'
import ThemedContext from '../appcontext/themedcontext'
//import PropTypes from 'prop-types'

export default class ThemedButton extends Component {
    // static propTypes = {
    //     theme: PropTypes.string.isRequired,
    //     textValue: PropTypes.string.isRequired
    // }

    //setting the context object for the class component
    static contextType = ThemedContext
    render() {
        //accessing the context object data
        const contextData = this.context
        return (
            // <button style={{ backgroundColor: this.props.theme, color: 'black' }}>
            //     {this.props.textValue}
            // </button>
            <button style={{ backgroundColor: contextData.backColor, color: 'black' }}>
                {contextData.btnText}
            </button>
        )
    }
}
