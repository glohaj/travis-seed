import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import {routerMiddleware, routerReducer, syncHistoryWithStore} from "react-router-redux";
import {reduxTimeout} from "redux-timeout";
import {hashHistory} from "react-router";

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  routing: routerReducer,
})
const middleware = [
  thunkMiddleware,
  routerMiddleware(hashHistory),
  process.env.NODE_ENV === 'development' && process.env.NODE_ENV !== 'test' && loggerMiddleware,
  reduxTimeout()
].filter(Boolean)

var store = createStore(reducers, applyMiddleware(...middleware))
/**
 * The browsing history
 */
export const history = syncHistoryWithStore(hashHistory, store)
/**
 * The redux store which combines all the reducers
 */
export default store
