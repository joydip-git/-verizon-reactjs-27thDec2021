import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { fetchProductByIdCallbackCreator } from '../../../redux/callbackcreators'

function ProductDetail() {
    //const { selectedId } = props
    const { id: selectedId } = useParams()

    const loadingComplete = useSelector((stateMap) => stateMap.singleProductState.loadingComplete)

    const errorMessage = useSelector((stateMap) => stateMap.singleProductState.errorMessage)

    const productInfo = useSelector((stateMap) => stateMap.singleProductState.productInfo)

    const dispatchFnRef = useDispatch()

    useEffect(
        () => {
            const fetchProductByIdCallback = fetchProductByIdCallbackCreator(selectedId)
            dispatchFnRef(fetchProductByIdCallback)
        },
        [selectedId]
    )

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

                        <Link to={`/products/update/${productInfo.id}`}>
                            <button type='button' className='btn btn-primary' style={{ float: 'right' }}>
                                Edit
                            </button>
                        </Link>
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

                        <Link to='/products'>
                            <button type='button' className='btn btn-default' >
                                <i className='glyphicon glyphicon-chevron-left'></i> Back
                            </button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
    return design
}
// ProductDetail.propTypes = {
//     selectedId: PropTypes.number.isRequired
// }
export default ProductDetail