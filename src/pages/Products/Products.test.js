import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';
import * as reducer from './reducer';

describe('Products actions', () => {
    it('should create an action PRODUCT_SELECTED', () => {
        const selectedProduct = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const expectedAction = {
            type: actions.actionTypes.PRODUCT_SELECTED,
            id: selectedProduct.id,
            title: selectedProduct.title,
            description: selectedProduct.description,
            price: selectedProduct.price,
            imageUrl: selectedProduct.imageUrl
        }
        expect(actions.productSelected(selectedProduct.id, 
                                       selectedProduct.title, 
                                       selectedProduct.description, 
                                       selectedProduct.price, 
                                       selectedProduct.imageUrl)).toEqual(expectedAction);
    })
})

const products = [ {
    id: '123123-234-2341-123123-123123',
    name: 'Greek amphora1',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '101K USD'
},
{
    id: '123123-12342-456456-123123-123123',
    name: 'Greek amphora2',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '102K USD'
},
{
    id: '123123-345-2341-3453-123123',
    name: 'Greek amphora3',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '103K USD'
},
{
    id: '123123-2342-2341-45345-123123',
    name: 'Greek amphora4',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '104K USD'
},
{
    id: '123123-12342-234234-123123-234234',
    name: 'Greek amphora5',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '105K USD'
},
{
    id: '546456-22342-2341-54645-23423',
    name: 'Greek amphora6',
    imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
    shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
    price: '106K USD'
}];

describe ('Products reducer', () =>{
    it('should return the initial state', () => {
        expect(reducer.productsReducer(undefined, {})).toEqual(
            {
                products: products,
                selectedProduct: {}
            }
        )
    })

    it('should handle PRODUCT_SELECTED', () => {
        const selectedProduct = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }

        expect(
            reducer.productsReducer(undefined, {
            type: actions.actionTypes.PRODUCT_SELECTED,
            id: selectedProduct.id,
            title: selectedProduct.title,
            description: selectedProduct.description,
            price: selectedProduct.price,
            imageUrl: selectedProduct.imageUrl
        })).toEqual(
            {
                products: products,
                selectedProduct: selectedProduct
            })
    })
})