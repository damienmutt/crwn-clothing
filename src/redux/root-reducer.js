
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

/**
 * Base reducer object that represents all of the state of our application.
 * Combines all of our states together.
 */

export default combineReducers({
    user: userReducer, // Current user reducer.
    cart: cartReducer // Cart reducer
});
