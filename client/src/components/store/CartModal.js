import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { getProductData } from '../../data/products';
import './CartModal.css';

const CartModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { items, removeOneFromCart, getTotalCost } = useContext(CartContext);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="cart-modal-container">
            <button className="cart-button" onClick={toggleModal}>
                Cart
            </button>
            {isOpen && (
                <div className="cart-modal">
                    <button className="modal-close-button" onClick={toggleModal}>
                        &times;
                    </button>
                    <div className="cart-content">
                        <h2>Your Cart</h2>
                        {items.length === 0 ? (
                            <p>No items in the cart.</p>
                        ) : (
                            <ul>
                                {items.map(item => {
                                    const product = getProductData(item.id);
                                    return product ? (
                                        <li key={item.id}>
                                            <span>{product.name} x {item.quantity}</span>
                                            <button onClick={() => removeOneFromCart(item.id)}>Remove</button>
                                        </li>
                                    ) : (
                                        <li key={item.id}>Product not found</li>
                                    );
                                })}
                            </ul>
                        )}
                        <div className="cart-total">
                            <h3>Total: ${getTotalCost().toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartModal;
