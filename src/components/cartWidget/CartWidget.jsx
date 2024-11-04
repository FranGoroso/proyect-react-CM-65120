import React from 'react';
import '../cartWidget/cartWidget.css';
import { useCart } from '../../context/cartContext';

function CartWidget() {
    const { getQuantity } = useCart();
    return (
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{getQuantity()}</span>
        </div>
    );
};

export default CartWidget;
