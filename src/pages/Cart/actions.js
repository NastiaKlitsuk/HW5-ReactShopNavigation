export const actionTypes = {
    ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
    DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART"
}

export const deleteProductFromCart = (id) => ({
    type: actionTypes.DELETE_PRODUCT_FROM_CART,
    id
})

export const addProductToCart = (id, title, description, price, imageUrl) => ({
    type: actionTypes.ADD_PRODUCT_TO_CART,
    id, 
    title, 
    description, 
    price, 
    imageUrl
})