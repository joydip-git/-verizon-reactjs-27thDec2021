import React, { Component } from 'react'
import './ProductList.css'
import { getProducts } from "../../../services/productservice";
import ProductTable from '../product-table/ProductTable';
import ProductDetail from '../product-detail/ProductDetail';

const initialState = {
    selectedProductId: 0,
    loadingComplete: false,
    errorMessage: '',
    productRecords: []
}
export default class ProductList extends Component {
    constructor() {
        super()
        this.state = initialState
        console.log('PL created')
    }

    selectProductIdHandler = (pid) => {
        this.setState({
            selectedProductId: pid
        })
    }

    render() {
        console.log('PL rendered')
        const { loadingComplete, errorMessage, productRecords, selectedProductId } = this.state
        let design;
        if (!loadingComplete) {
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
                            {productRecords.length} Records(s) found...
                        </div>
                        <div className='panel panel-body'>
                            <ProductTable
                                products={productRecords}
                                productIdHandler={this.selectProductIdHandler}

                            />
                        </div>
                    </div>
                    <br />
                    {
                        selectedProductId > 0 && <ProductDetail selectedId={selectedProductId} />
                    }
                </div>
            )
        }
        return design
    }
    componentDidMount() {
        console.log('PL mounted')
        // setTimeout(
        // () => {
        getProducts()
            .then(
                (resp) => {
                    this.setState({
                        loadingComplete: true,
                        errorMessage: '',
                        productRecords: resp.data
                    })
                },
                (err) => {
                    this.setState({
                        loadingComplete: true,
                        errorMessage: err.message,
                        productRecords: []
                    })
                }
            )
        // }, 2000
        //)
    }
}