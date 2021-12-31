import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootreducer";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleWare = createLogger()
const appStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(loggerMiddleWare, thunkMiddleware))
)
export default appStore