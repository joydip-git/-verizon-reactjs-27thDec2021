import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'

const ProductRow = (props) => {
    console.log('PROW rendered and mounted')
    const { product, selectedIdHandler } = props
    return (
        <tr>
            <td>
                <img
                    className='imgStyle'
                    src={product.imageUrl}
                    alt='NA'
                    title={product.productName}
                    onClick={
                        () => {
                            selectedIdHandler(product.id)
                        }
                    } />
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
    product: PropTypes.object.isRequired,
    selectedIdHandler: PropTypes.func.isRequired
}

export default ProductRow
