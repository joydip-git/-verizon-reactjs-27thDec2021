import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {

    static propTypes = {
        logger: PropTypes.func.isRequired
    }
    state = {
        errorMessage: ''
    }
    static getDerivedStateFromError(errInfo) {
        return {
            errorMessage: errInfo.message
        }
    }
    render() {
        if (this.state.errorMessage === '')
            return this.props.children
        else
            return <span>{this.state.errorMessage}</span>
    }
    componentDidCatch(errInfo, stackTrace) {
        this.props.logger({ errInfo, stackTrace })
    }
}
