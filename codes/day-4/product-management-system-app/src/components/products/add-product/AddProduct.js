import React, { useState } from 'react'
import { addProduct } from "../../../services/productservice";

// const addProductFormState = {
//     idInput: {
//         id: 'id',
//         name: 'id',
//         value: 0,
//         valErrMsg: ''
//     },
//     nameInput: {
//         id: 'productName',
//         name: 'productName',
//         value: '',
//         valErrMsg: ''
//     }
// }
// let x = (
//     <input type="number" className="form-control" id={addProductFormState.idInput.id} name={addProductFormState.idInput.name} placeholder="product id" value={addProductFormState.idInput.value} onChange={
//         (e) =>
//             updateProductStateHandler(addProductFormState.idInput.name, parseInt(e.target.value))

//     } />
// )

const addProductInitialState = {
    id: 0,
    productName: '',
    productCode: '',
    description: '',
    releaseDate: '',
    starRating: 0,
    price: 0,
    imageUrl: ''
}
const AddProduct = () => {

    const [productState, setProductState] = useState(addProductInitialState)

    const updateProductStateHandler = (propName, newValue) => {
        setProductState({
            ...productState,
            [propName]: newValue
        })
    }

    const addRecord = () => {
        addProduct(productState)
            .then(
                (resp) => {
                    if (resp.status === 201) {
                        window.alert('recorda added')
                    }
                },
                (err) => {
                    console.log(err.message)
                }
            )
    }
    console.log('AP rendered', productState)
    let design = (
        <div className="container">
            <form className="form-horizontal" name="productForm">
                <div className="form-group">
                    <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="productId" name="productId" placeholder="product id" value={productState.id} onChange={
                            (e) =>
                                updateProductStateHandler('id', parseInt(e.target.value))

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productName" name="productName" placeholder="product name" value={productState.productName} onChange={
                            (e) =>
                                updateProductStateHandler('productName', e.target.value)

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productCode" name="productCode" placeholder="product code" value={productState.productCode} onChange={
                            (e) =>
                                updateProductStateHandler('productCode', e.target.value)

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date" value={productState.releaseDate} onChange={
                            (e) =>
                                updateProductStateHandler('releaseDate', e.target.value)

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="description" name="description" placeholder="product description" value={productState.description} onChange={
                            (e) =>
                                updateProductStateHandler('description', e.target.value)

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="price" name="price" placeholder="product price" value={productState.price} onChange={
                            (e) =>
                                updateProductStateHandler('price', parseFloat(e.target.value))

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="starRating" name="starRating" placeholder="product Rating" value={productState.starRating} onChange={
                            (e) =>
                                updateProductStateHandler('starRating', parseFloat(e.target.value))

                        } />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="product image path" value={productState.imageUrl} onChange={
                            (e) =>
                                updateProductStateHandler('imageUrl', e.target.value)

                        } />
                    </div>
                </div>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary" onClick={
                        (e) => {
                            e.preventDefault()
                            if (window.confirm('Want to add?')) {
                                addRecord()
                            }
                        }
                    }>Submit</button>
                    <button type="submit" className="btn btn-alert" onClick={
                        (e) => {
                            e.preventDefault()
                            if (window.confirm('Want to cancel?')) {
                                setProductState(addProductInitialState)
                            }
                        }
                    }>Cancel</button>
                </div>
            </form>
        </div>
    )
    return design
}

export default AddProduct
