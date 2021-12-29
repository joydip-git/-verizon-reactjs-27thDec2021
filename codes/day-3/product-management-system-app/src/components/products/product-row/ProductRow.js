import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'

const ProductRow = (props) => {
    const { product } = props
    return (
        <tr>
            <td>
                <img className='imgStyle' src={product.imageUrl} alt='NA' title={product.productName} />
            </td>
            <td>
                {product.productName}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.starRating}
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow
