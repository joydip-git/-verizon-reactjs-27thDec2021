import * as Reducers from './reducers'
import { combineReducers } from 'redux'

const combinedState = {
    allProductsState: Reducers.productsReducer,
    singleProductState: Reducers.productByIdReducer
}
const rootReducer = combineReducers(combinedState)
export default rootReducer
