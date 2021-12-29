import React from 'react'
import './ProductTable.css'
import PropTypes from "prop-types";
import ProductRow from '../product-row/ProductRow';

const ProductTable = (props) => {
    const { products } = props
    let design = (
        <div className='table-responsive'>
            <table className='table'>
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
                        products.map(
                            (p) => {
                                return (
                                    <ProductRow key={p.id} product={p} />
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    return design
}
ProductTable.propTypes = {
    products: PropTypes.array.isRequired
}
export default ProductTable


