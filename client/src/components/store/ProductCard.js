import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ id, name, price, description }) => {
    const { addOneToCart } = useContext(CartContext);

    if (id === undefined) {
        console.error("ProductCard received an undefined ID.");
    }

    return (
        <div className="product-card">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price}</p>
            <p className="product-description">{description}</p>
            <button onClick={() => addOneToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
