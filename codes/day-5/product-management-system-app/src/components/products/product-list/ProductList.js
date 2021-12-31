import React, { Component } from 'react'
import './ProductList.css'
import ProductTable from '../product-table/ProductTable';
//import ProductDetail from '../product-detail/ProductDetail';
import handleError from '../../hoc/handleError';
//import { productListInitialState } from '../../../states/appStates';
import { connect } from "react-redux";
import { fetchProductsCallbackCreator } from "../../../redux/callbackcreators";
// import { productsSuccessActionCreator, productsFailureActionCreator } from "../../../redux/actioncreators";
//import { getProducts } from "../../../services/productservice";

class ProductList extends Component {
    constructor() {
        super()
        //this.state = productListInitialState
        console.log('PL created')
    }

    // selectProductIdHandler = (pid) => {
    //     this.setState({
    //         selectedProductId: pid
    //     })
    // }

    render() {
        console.log('PL rendered')
        //const { selectedProductId } = this.state
        const { loading, errorMessage, productRecords } = this.props
        let design;
        if (loading) {
            design = <span>Loading data...please wait</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (productRecords.length === 0) {
            design = <span>No records found</span>
        } else {
            design = (
                <div className='container'>
                    <div className='panel panel-primary'>
                        <div className='panel panel-heading'>
                            <h4>
                                {productRecords.length} Records(s) found...
                            </h4>
                        </div>
                        <div className='panel panel-body'>
                            {/* <ProductTable
                                products={productRecords}
                                productIdHandler={this.selectProductIdHandler}
                            /> */}
                            <ProductTable
                                products={productRecords} />
                        </div>
                    </div>
                    {/* <br />
                    {
                        selectedProductId > 0 && <ProductDetail selectedId={selectedProductId} />
                    } */}
                </div>
            )
        }
        return design
    }
    componentDidMount() {
        console.log('PL mounted')
        this.props.fetchProducts()
    }
}

const mapStateToProps = (stateMap) => {
    return {
        loading: stateMap.allProductsState.loading,
        errorMessage: stateMap.allProductsState.errorMessage,
        productRecords: stateMap.allProductsState.productRecords
    }
}
const mapDispatchToProps = (dispatchFnRef) => {
    return {
        fetchProducts: () => {
            const fetchProductsCallback = fetchProductsCallbackCreator()
            dispatchFnRef(fetchProductsCallback)
            // getProducts()
            //     .then(
            //         (resp) => {
            //             const successAction = productsSuccessActionCreator(resp.data)
            //             dispatchFnRef(successAction)
            //         },
            //         (err) => {
            //             const failureAction = productsFailureActionCreator(err.message)
            //             dispatchFnRef(failureAction)
            //         }
            //     )
        }
    }
}
// const connectTo = connect(mapStateToProps, mapDispatchToProps)
// ProductList = connectTo(ProductList)
// ProductList = handleError(ProductList, (errorObj) => console.log(errorObj))
// export default ProductList

export default handleError(connect(mapStateToProps, mapDispatchToProps)(ProductList), (errorObj) => console.log(errorObj))