export const actionTypes = {
    PRODUCT_SELECTED: 'PRODUCT_SELECTED',
}

export const productSelected = (id, title, description, price, imageUrl) => ({
    type: actionTypes.PRODUCT_SELECTED,
    id, 
    title, 
    description, 
    price, 
    imageUrl
})