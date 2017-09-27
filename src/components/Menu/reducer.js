const INITIAL_STATE = {
    navigationLinks: [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Products',
            path: '/products'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Login',
            path: '/login'
        },
        {
            name: 'Protected',
            path: '/protected'
        }
    ]
}

export const menuReducer = (state = INITIAL_STATE, action) => {
    return state;
}

export const getNavigationLinks = (state) => {
    return state.menuReducer.navigationLinks;
}