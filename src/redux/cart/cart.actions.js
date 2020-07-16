import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN // action type
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM, // action type
    payload: item
});
