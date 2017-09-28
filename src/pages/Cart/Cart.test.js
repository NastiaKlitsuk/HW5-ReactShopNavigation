import React from 'react';
import ReactDOM from 'react-dom';
import * as reducer from './reducer';
import * as actions from './actions';

describe('Cart actions', () => {
    it('should create an action to delete a product from the cart', () => {
        const productToDelete = {
            id: 1
        }
        const expectedAction = {
            type: actions.actionTypes.DELETE_PRODUCT_FROM_CART,
            id: productToDelete.id
        }
        expect(actions.deleteProductFromCart(
            productToDelete.id)).toEqual(expectedAction);
    })


    it('should create an action to add a product to the cart', () => {
        const productToAdd = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const expectedAction = {
            type: actions.actionTypes.ADD_PRODUCT_TO_CART,
            id: productToAdd.id,
            title: productToAdd.title,
            description: productToAdd.description,
            price: productToAdd.price,
            imageUrl: productToAdd.imageUrl
        }
        expect(actions.addProductToCart(
            productToAdd.id,
            productToAdd.title,
            productToAdd.description,
            productToAdd.price,
            productToAdd.imageUrl)).toEqual(expectedAction);
    })
})

describe('Cart Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer.cartReducer(undefined, {})).toEqual(
            {
                cart: []
            }
        )
    })

    it('should handle ADD_PRODUCT_TO_CART', () => {
        const productToAdd = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }

        expect(
            reducer.cartReducer(undefined, {
            type: actions.actionTypes.ADD_PRODUCT_TO_CART,
            id: productToAdd.id,
            title: productToAdd.title,
            description: productToAdd.description,
            price: productToAdd.price,
            imageUrl: ''
        })).toEqual(
            {
                cart:
                [
                    {
                        id: 1,
                        title: 'title',
                        description: 'description',
                        price: 1,
                        imageUrl: ''
                    }
                ]
            })
    })

    it('should handle DELETE_PRODUCT_FROM_CART', () => {
        const product = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const state = {
            cart:[
                {
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    imageUrl: product.imageUrl
                }
            ]
        }
        expect(
            reducer.cartReducer(state, {
            type: actions.actionTypes.DELETE_PRODUCT_FROM_CART,
            id: product.id
        })).toEqual( { cart:[] })
    })

    // it('should throw error where the product to delete is not in the cart', () => {
    //     const productToDelete = {
    //         id: 1
    //     }
    //     const state = { cart:[]}

    //     expect(
    //         reducer.cartReducer(state, {
    //         type: actions.actionTypes.DELETE_PRODUCT_FROM_CART,
    //         id: productToDelete.id
    //     })).toThrow(new Error("The product 1 is not in the cart."));
    // })
})