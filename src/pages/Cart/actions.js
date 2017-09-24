export const actionTypes = {
    PRODUCT_ADDED_TO_CART: "PRODUCT_ADDED_TO_CART",
    PRODUCT_DELETED_FROM_CART: 'PRODUCT_DELETED_FROM_CART'
}

export const productDeletedFromCart = (id, title, description, price, imageUrl) => ({
    type: actionTypes.PRODUCT_DELETED_FROM_CART,
    id, 
    title, 
    description, 
    price, 
    imageUrl
})

export const productAddedToCart = (id, title, description, price, imageUrl) => ({
    type: actionTypes.PRODUCT_ADDED_TO_CART,
    id, 
    title, 
    description, 
    price, 
    imageUrl
})