import React from 'react';
import '../cartWidget/cartWidget.css'
import { useCart } from '../../context/cartContext'


function CartWidget(){
    const { cart } = useCart()
    return(
        <div className = "cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
        </div>
    );
};

export default CartWidget;