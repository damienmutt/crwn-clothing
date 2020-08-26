
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
} 

/**
 * Base reducer object that represents all of the state of our application.
 * Combines all of our states together.
 */
const rootReducer = combineReducers({
    user: userReducer, // Current user reducer. Persists on Firebase.
    cart: cartReducer, // Cart reducer. Persists on redux-persist.
    directory: directoryReducer,
    shop: shopReducer
});

// Combine both reducers to keep data persistance.
export default persistReducer(persistConfig, rootReducer);
