import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Value extends Component {
    constructor() {
        super()
        console.log('Value created')
    }
    static propTypes = {
        valueData: PropTypes.number.isRequired,
        valueHandler: PropTypes.func.isRequired
    }
    static getDerivedStateFromProps(newProps){
        console.log('Value getDerivedStateFromProps')
        return {

        }
    }
    shouldComponentUpdate(newProps) {
        console.log('Value should update?')
        if (newProps.valueData === this.props.valueData) {
            return false
        }
        return true
    }
    render() {
        console.log('Value rendered')
        const { valueData, valueHandler } = this.props
        return (
            <div>
                Value:&nbsp;{valueData}
                <br />
                <button onClick={valueHandler}>Increase</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('Value mounted')
    }

    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log('getting Value snapshot')
        return { x: 10, y: 20 }
    }
    componentDidUpdate(oldProps, oldState, snapshotobject) {
        console.log('Value updated')
        console.log(snapshotobject)
    }
    componentWillUnmount() {
        console.log('Value unmounted')
    }
}

