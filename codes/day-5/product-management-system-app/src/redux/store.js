import { createStore, applyMiddleware } from "redux";
import { createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootreducer";

const loggerMiddleWare = createLogger()
const appStore = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleWare, thunkMiddleware)
)
export default appStore