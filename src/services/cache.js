class Cache {
    constructor() {
        if (!Cache.instance) {
            this.cart = [];
            this.onAddedToCart = this.onAddedToCart.bind(this);
            Cache.instance = this;
        }

        return Cache.instance;
    }
    
    onAddedToCart(event, productTitle, productDescription, productPrice) 
    {
        const newProduct = {
            price: productPrice,
            title: productTitle,
            description: productDescription
        };
        this.cart.push(newProduct);
        window.alert(`${this.cart[0].title} ${this.cart[0].price} ${this.cart[0].description}`);
        window.alert("The item was added to the shopping cart successfully.");
    }
}

const store = new Cache();
export default store;