export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    // Already in cart. Quantity prop increases 1.
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: ++cartItem.quantity }: cartItem)
    }
    // New item.
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}