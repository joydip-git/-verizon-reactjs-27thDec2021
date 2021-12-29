import React, { Component } from 'react'
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
export default class ProductDetail extends Component {

    static propTypes = {
        selectedId: PropTypes.number.isRequired
    }

    constructor() {
        super()
        console.log('PD created')
    }

    state = initialState

    render() {
        console.log('PD rendered')
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

    componentDidUpdate() {
        console.log('PD updated')
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
