import { actionTypes } from './actions';

const INITIAL_STATE = {
    products: [
        {
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
        }
    ],
    selectedProduct: {}
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_SELECTED:
            return {
                ...state, selectedProduct: {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    price: action.price,
                    imageUrl: action.imageUrl
                }
            }
        default:
            return state;
    }
}

export const getProducts = (state) => {
    return state.productsReducer.products;
}

export const getSelectedProduct = (state) => {
    return state.productsReducer.selectedProduct;
}