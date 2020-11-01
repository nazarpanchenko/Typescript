import React from "react";
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends React.Component {
    state = {
        cartItems : [
            { 
                id: '1', name: 'IPhone 11', price: 999 
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
                <CartTitle 
                    count={count} 
                    userName={this.props.userName} 
                />
                <ProductsList cartItems={this.state.cartItems} />
            </div>
        );
    }
}

export default ShoppingCart;