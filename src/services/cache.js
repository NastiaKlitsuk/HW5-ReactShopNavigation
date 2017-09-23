import _ from 'lodash';

class Cache {
    constructor() {
        if (!Cache.instance) {
            this.items = [];
            this.onAddedToCart = this.onAddedToCart.bind(this);
            this.onRemoveItemFromCart = this.onRemoveItemFromCart.bind(this);
            this.isLoggedIn = false;
            Cache.instance = this;
        }

        return Cache.instance;
    }
    
    onAddedToCart(event, productId, productTitle, productDescription, productPrice, productUrl) 
    {
        event.stopPropagation();
        const newProduct = {
            id: productId,
            price: productPrice,
            title: productTitle,
            imageUrl: productUrl,
            description: productDescription
        };
        this.items.push(newProduct);
        window.alert("The item was added to the shopping cart successfully.");
    }

    onRemoveItemFromCart(event, productId)
    {
        event.preventDefault();
        window.alert(productId);
        const positionItemToRemove = _.findIndex(this.items, { id: productId });
        window.alert(positionItemToRemove);
        if (positionItemToRemove > -1) {
            this.items.splice(positionItemToRemove, 1);
        }
    }

    onLoggedIn(event)
    {
        event.preventDefault();
        this.isLoggedIn = true;
    }
}

const cart = new Cache();
export default cart;