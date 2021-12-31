import { getProducts, getProductById } from '../services/productservice'
import * as ActionCreators from './actioncreators'

export const fetchProductsCallbackCreator = () => {
    const fetchProducts = (dispatchFnRef) => {
        getProducts()
            .then(
                (resp) => {
                    const records = resp.data
                    const successAction = ActionCreators.productsSuccessActionCreator(records)
                    dispatchFnRef(successAction)
                },
                (err) => {
                    const failureAction = ActionCreators.productsFailureActionCreator(err.message)
                    dispatchFnRef(failureAction)
                }
            )
    }
    return fetchProducts
}
export const fetchProductByIdCallbackCreator = (id) => {
    const fetchProductById = (dispatchFnRef) => {
        getProductById(id)
            .then(
                (resp) => {
                    const record = resp.data
                    const successAction = ActionCreators.productByIdSuccessActionCreator(record)
                    dispatchFnRef(successAction)
                },
                (err) => {
                    const failureAction = ActionCreators.productByIdFailureActionCreator(err.message)
                    dispatchFnRef(failureAction)
                }
            )
    }
    return fetchProductById
}