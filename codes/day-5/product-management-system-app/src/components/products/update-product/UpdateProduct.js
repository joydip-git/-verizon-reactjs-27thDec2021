import React from 'react'

const UpdateProduct = () => {

    console.log('PU rendered')

    let design = (
        <div className='container'>
            <form className="form-horizontal" name="productForm">

                <div className="form-group">
                    <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="productId" name="productId" readOnly />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productName" name="productName" placeholder="product name" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="productCode" name="productCode" readOnly />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="description" name="description" placeholder="product description" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="price" name="price" placeholder="product price" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="starRating" name="starRating" placeholder="product Rating" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="product image" />
                    </div>
                </div>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary" onClick={
                        (e) => {
                            e.preventDefault()
                        }}>
                        Submit
                    </button>

                    <button type="submit" className="btn btn-alert">Cancel</button>
                </div>
            </form>
        </div>
    )
    return design
}

export default UpdateProduct