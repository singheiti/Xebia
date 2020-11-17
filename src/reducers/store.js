import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// Support Redux dev tools Chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = initialState => 
createStore(
    combineReducers({...reducers}),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;