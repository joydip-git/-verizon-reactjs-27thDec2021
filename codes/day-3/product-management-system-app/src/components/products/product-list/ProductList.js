import React, { Component } from 'react'
import './ProductList.css'
import { getProducts } from "../../../services/productservice";
import ProductTable from '../product-table/ProductTable';

const initialState = {
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
    render() {
        console.log('PL rendered')
        const { loadingComplete, errorMessage, productRecords } = this.state
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
                            <ProductTable products={productRecords} />
                        </div>
                    </div>
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