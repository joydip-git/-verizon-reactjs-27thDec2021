import * as InitialStates from './initialstates'
import * as ActionTypes from './actiontypes'

export const productsReducer = (state = InitialStates.productsInitalState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                loading: false,
                productRecords: action.data,
                errorMessage: ''
            }
            break;

        case ActionTypes.FETCH_PRODUCTS_FAILURE:
            newState = {
                ...state,
                loading: false,
                productRecords: [],
                errorMessage: action.data
            }
            break;
        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}

export const productByIdReducer = (state = InitialStates.productDetailInitialState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
            newState = {
                ...state,
                loadingComplete: true,
                errorMessage: '',
                productInfo: action.data
            }
            break;
        case ActionTypes.FETCH_PRODUCT_BY_ID_FAILURE:
            newState = {
                ...state,
                loadingComplete: true,
                errorMessage: action.data,
                productInfo: undefined
            }
            break;
        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}