import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN // action type
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM, // action type
    payload: item
});

export const removeItem = item =>({
    type: CartActionTypes.REMOVE_ITEM, // action type
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART, // action type
    payload: item
});
