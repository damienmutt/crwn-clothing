import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

/**
 * REDUX store.
 * 
 * Add middleware to our store so that whenever actions get fired or dispatched we can catch them and then display them.
 * Logger middleware catches the action and it console logs it out for us and then it moves it along.
 */
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // Init redux store config & save it into a const.


export default store;