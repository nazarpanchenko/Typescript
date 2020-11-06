import React from 'react';

function Product({ match }) {
    return (
        <div class="product">
            {match.params.productId}
        </div>  
    );
}

export default Product;