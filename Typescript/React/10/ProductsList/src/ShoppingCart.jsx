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
            <div className="column">
                <CartTitle userName={this.props.userData.firstName} count />
                <ProductsList 
                    cartItems={this.state.cartItems} 
                    count={}
                />
            </div>
        );
    }
}

export default ShoppingCart;