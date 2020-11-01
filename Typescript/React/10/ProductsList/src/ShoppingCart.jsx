import React from "react";
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends React.Component {
    state = {
        cartItems : [
            { 
                id: '1', name: 'Samsung Galaxy', price: 865 
            },
            { 
                id: '2', name: 'iPad Pro', price: 799 
            }
        ]
    };

    render() {
        const count = this.state.cartItems.length;

        return (
            <>  
                <CartTitle 
                    userName={this.props.userData.firstName} 
                    count={count} 
                />
                <ProductsList cartItems={this.state.cartItems} />
            </>
        );
    }
}

export default ShoppingCart;