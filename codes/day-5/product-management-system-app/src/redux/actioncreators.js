import * as ActionTypes from './actiontypes'

export const productsSuccessActionCreator = (records) => {
    return { type: ActionTypes.FETCH_PRODUCTS_SUCCESS, data: records }
}
export const productsFailureActionCreator = (errmsg) => {
    return { type: ActionTypes.FETCH_PRODUCTS_FAILURE, data: errmsg }
}
export const productByIdSuccessActionCreator = (record) => {
    return { type: ActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS, data: record }
}
export const productByIdFailureActionCreator = (errmsg) => {
    return { type: ActionTypes.FETCH_PRODUCT_BY_ID_FAILURE, data: errmsg }
}