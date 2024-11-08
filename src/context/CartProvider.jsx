import { useState } from 'react';
import { cartContext } from '../context/cartContext';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevCart.map(cartItem => 
                    cartItem.id === item.id 
                        ? { ...cartItem, qty: cartItem.qty + (item.qty || 0) }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, qty: item.qty || 1 }];
            }
        });
    };    

    const getQuantity = () => {
        const total = cart.reduce((acc, item) => acc + item.qty, 0); 
        return total;
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => {
            const price = item.price || 0;
            const qty = item.qty || 0;
            return acc + price * qty;
        }, 0);
    };
    

    return (
        <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
