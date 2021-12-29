import React, { Component } from 'react'
import './ProductList.css'
import { getProducts } from "../../../services/productservice";

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
                <table>
                    <thead className='headerRowStyle'>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productRecords.map(
                                (p) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>
                                                <img className='imgStyle' src={p.imageUrl} alt='NA' title={p.productName} />
                                            </td>
                                            <td>
                                                {p.productName}
                                            </td>
                                            <td>
                                                {p.price}
                                            </td>
                                            <td>
                                                {p.starRating}
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
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

                    // this.setState(
                    //     (cs) => {
                    //         return {
                    //             val: cs.val + 1
                    //         }
                    //     }
                    // )
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