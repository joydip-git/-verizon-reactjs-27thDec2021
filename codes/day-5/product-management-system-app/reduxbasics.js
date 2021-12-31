const redux = require('redux')
const reduxLogger = require('redux-logger')
const axios = require('axios')
const thunk = require('redux-thunk')

//initial state
const initialNumberState = {
    count: 0
}
const productsInitalState = {
    products: [],
    loading: true,
    errorMessage: ''
}
const productDetailInitialState = {
    loadingComplete: false,
    errorMessage: '',
    productInfo: undefined
}

//action types
const INCREASE_ACTION = 'INCREASE'
const DECREASE_ACTION = 'DECREASE'
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS'
const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE'

//actions-creators
const increaseActionCreator = (value) => {
    return { type: INCREASE_ACTION, data: value }
}
const decreaseActionCreator = (value) => {
    return { type: DECREASE_ACTION, data: 1 }
}
const productsSuccessActionCreator = (records) => {
    return { type: FETCH_PRODUCTS_SUCCESS, data: records }
}
const productsFailureActionCreator = (errmsg) => {
    return { type: FETCH_PRODUCTS_FAILURE, data: errmsg }
}
const productByIdSuccessActionCreator = (record) => {
    return { type: FETCH_PRODUCT_BY_ID_SUCCESS, data: record }
}
const productByIdFailureActionCreator = (errmsg) => {
    return { type: FETCH_PRODUCT_BY_ID_FAILURE, data: errmsg }
}

//callback creators
const fetchProductsCallbackCreator = () => {
    const fetchProducts = (dispatchFnRef) => {
        axios.get('http://localhost:3001/products')
            .then(
                (resp) => {
                    const records = resp.data
                    dispatchFnRef(productsSuccessActionCreator(records))
                },
                (err) => {
                    dispatchFnRef(productsFailureActionCreator(err.message))
                }
            )
    }
    return fetchProducts
}
const fetchProductByIdCallbackCreator = (id) => {
    const fetchProductById = (dispatchFnRef) => {
        axios.get('http://localhost:3001/products/' + id)
            .then(
                (resp) => {
                    const record = resp.data
                    dispatchFnRef(productByIdSuccessActionCreator(record))
                },
                (err) => {
                    dispatchFnRef(productByIdFailureActionCreator(err.message))
                }
            )
    }
    return fetchProductById
}

//reducers
const numberReducer = (state = initialNumberState, action) => {
    let newState;
    switch (action.type) {
        case INCREASE_ACTION:
            newState = {
                ...state,
                count: state.count + action.data
            }
            break;

        case DECREASE_ACTION:
            newState = {
                ...state,
                count: state.count - action.data
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}

const productsReducer = (state = productsInitalState, action) => {
    let newState;
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                loading: false,
                products: action.data,
                errorMessage: ''
            }
            break;

        case FETCH_PRODUCTS_FAILURE:
            newState = {
                ...state,
                loading: false,
                products: [],
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
const productByIdReducer = (state = productDetailInitialState, action) => {
    let newState;
    switch (action.type) {
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            newState = {
                ...state,
                loadingComplete: true,
                errorMessage: '',
                productInfo: action.data
            }
            break;
        case FETCH_PRODUCT_BY_ID_FAILURE:
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

//reducer map
const combinedState = {
    allProductsState: productsReducer,
    numberState: numberReducer,
    singleProductState: productByIdReducer
}
const rootReducer = redux.combineReducers(combinedState)

//middlwwares
const loggerMiddleWare = reduxLogger.createLogger()
const thunkMiddleware = thunk.default

//store
const store = redux.createStore(
    rootReducer,
    redux.applyMiddleware(loggerMiddleWare, thunkMiddleware)
)


//component codes
store.dispatch(increaseActionCreator(2))
store.dispatch(decreaseActionCreator(1))
// store.dispatch(increaseActionCreator(3))
// store.dispatch(increaseActionCreator(2))

store.dispatch(fetchProductsCallbackCreator())
store.dispatch(fetchProductByIdCallbackCreator(2))
//fetchProducts(store.dispatch)
//fetchProductById(store.dispatch)
