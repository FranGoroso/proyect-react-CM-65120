import { useState } from 'react';
import { cartContext } from '../context/cartContext'; 

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = item => setCart([...cart, item]);

    return (
        <cartContext.Provider value={{ cart, addToCart }}> {/* NO OLVIDARME QUE EL CART Y ADDTOCART ES UN SOLO OBJETO QUE CONTIENE A ESTOS 2*/}
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
