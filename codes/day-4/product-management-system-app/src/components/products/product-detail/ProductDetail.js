import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getProductById } from "../../../services/productservice";

const productDetailInitialState = {
    loadingComplete: false,
    errorMessage: '',
    productInfo: undefined
}

function ProductDetail(props) {
    const { selectedId } = props
    const [productDetailState, setProductDetailState] = useState(productDetailInitialState)

    const fetchData = () => {
        getProductById(selectedId)
            .then(
                (resp) => {
                    setProductDetailState({
                        ...productDetailState,
                        loadingComplete: true,
                        errorMessage: '',
                        productInfo: resp.data
                    })
                },
                (err) => {
                    setProductDetailState({
                        ...productDetailState,
                        loadingComplete: true,
                        errorMessage: err.message,
                        productInfo: undefined
                    })
                }
            )
    }

    useEffect(
        () => {
            fetchData()
        },
        [selectedId]
    )

    const { loadingComplete, errorMessage, productInfo } = productDetailState

    let design;
    if (!loadingComplete) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!productInfo) {
        design = <span>No record found</span>
    } else {
        design = (
            <div className='container'>
                <div className='panel panel-primary' >
                    <div className='panel-heading' style={{ fontSize: 'large' }}>

                        Details of: &nbsp;&nbsp;{productInfo.productName}

                        <button type='button' className='btn btn-primary' style={{ float: 'right' }}>
                            Edit
                        </button>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{productInfo.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{productInfo.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{productInfo.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{productInfo.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>
                                    <div className='col-md-6'>{productInfo.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>5 Star Rating:</div>
                                    <div className='col-md-6'>{productInfo.starRating}</div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img className='center-block img-responsive' src={productInfo.imageUrl} title={productInfo.productName} alt='NA' style={{ margin: '2px', width: '150px' }} />
                            </div>
                        </div>
                    </div>

                    <div className='panel-footer'>

                        <button type='button' className='btn btn-default' >
                            <i className='glyphicon glyphicon-chevron-left'></i> Back
                        </button>
                    </div>
                </div >
            </div>
        )
    }
    return design

}
ProductDetail.propTypes = {
    selectedId: PropTypes.number.isRequired
}
export default ProductDetail
/*

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getProductById } from "../../../services/productservice";
export default class ProductDetail extends PureComponent {

    static propTypes = {
        selectedId: PropTypes.number.isRequired
    }

    constructor() {
        super()
        console.log('PD created')
    }

    state = productDetailInitialState

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
            design = (
                <div className='container'>
                    <div className='panel panel-primary' >
                        <div className='panel-heading' style={{ fontSize: 'large' }}>

                            Details of: &nbsp;&nbsp;{productInfo.productName}

                            <button type='button' className='btn btn-primary' style={{ float: 'right' }}>
                                Edit
                            </button>
                        </div>

                        <div className='panel-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-3'>Name:</div>
                                        <div className='col-md-6'>{productInfo.productName}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>Code:</div>
                                        <div className='col-md-6'>{productInfo.productCode}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>Description:</div>
                                        <div className='col-md-6'>{productInfo.description}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>Availability:</div>
                                        <div className='col-md-6'>{productInfo.releaseDate}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>Price:</div>
                                        <div className='col-md-6'>{productInfo.price}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>5 Star Rating:</div>
                                        <div className='col-md-6'>{productInfo.starRating}</div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <img className='center-block img-responsive' src={productInfo.imageUrl} title={productInfo.productName} alt='NA' style={{ margin: '2px', width: '150px' }} />
                                </div>
                            </div>
                        </div>

                        <div className='panel-footer'>

                            <button type='button' className='btn btn-default' >
                                <i className='glyphicon glyphicon-chevron-left'></i> Back
                            </button>
                        </div>
                    </div >
                </div>
            )
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
*/
