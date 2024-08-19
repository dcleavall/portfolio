import React, { createContext, useState } from 'react';
import { getProductData } from '../../data/products';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const product = cartProducts.find(product => product.id === id);
        return product ? product.quantity : 0; // Return 0 if product is not found
    }

    function addOneToCart(id) {
        if (id === undefined) {
            console.error("Invalid ID provided:", id);
            return;
        }
    
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProducts(prevCartProducts => [
                ...prevCartProducts,
                { id, quantity: 1 }
            ]);
        } else {
            setCartProducts(prevCartProducts =>
                prevCartProducts.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            );
        }
    }
    

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(prevCartProducts =>
                prevCartProducts.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts(prevCartProducts =>
            prevCartProducts.filter(product => product.id !== id)
        );
    }

    function getTotalCost() {
        return cartProducts.reduce((total, item) => {
            const productData = getProductData(item.id);
            return total + (productData ? productData.price * item.quantity : 0);
        }, 0);
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
