import { useState } from 'react';
import { cartContext } from '../context/cartContext'; 

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = item => setCart([...cart, item]);

    return (
        <cartContext.Provider value={{ cart, addToCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
