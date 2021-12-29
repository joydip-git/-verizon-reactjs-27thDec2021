import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getProductById } from "../../../services/productservice";

/**
 * this.props={selectedId:1}
 */
const initialState = {
    loadingComplete: false,
    errorMessage: '',
    productInfo: undefined
}
export default class ProductDetail extends PureComponent {

    static propTypes = {
        selectedId: PropTypes.number.isRequired
    }

    constructor() {
        super()
        console.log('PD created')
    }

    state = initialState

    /*
    shouldComponentUpdate(newProps, newState) {
        console.log('PD should update?')
        // console.log('new props', newProps)
        // console.log('prev props', this.props)
        // console.log('new state', newState)
        // console.log('prev state', this.state)
        if (!this.state && (this.props.selectedId === newProps.selectedId || newState.productInfo.id === this.props.selectedId)) {
            return false
        }
        return true
    }
    */
    render() {
        console.log('PD rendered')
        // console.log('new state', this.state)
        const { loadingComplete, errorMessage, productInfo } = this.state

        let design;
        if (!loadingComplete) {
            design = <span>Loading....</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (!productInfo) {
            design = <span>No record found</span>
        } else {
            design = <span>{productInfo.productName}</span>
        }
        return design
    }

    componentDidMount() {
        console.log('PD mounted')
        this.fetchData()
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('PD updated')
        if (this.props.selectedId !== oldProps.selectedId) {
            this.fetchData()
        }
    }

    fetchData = () => {
        getProductById(this.props.selectedId)
            .then(
                (resp) => {
                    this.setState({
                        loadingComplete: true,
                        errorMessage: '',
                        productInfo: resp.data
                    })
                },
                (err) => {
                    this.setState({
                        loadingComplete: true,
                        errorMessage: err.message,
                        productInfo: undefined
                    })
                }
            )
    }
}
