export const actionTypes = {
    PRODUCT_SAVED: 'PRODUCT_SAVED'
}

export const productSaved = (id, title, description, price, iamgeUrl) => ({
    type: actionTypes.PRODUCT_SAVED,
    id, 
    title, 
    description, 
    price, 
    iamgeUrl
})