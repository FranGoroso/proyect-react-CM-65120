import React from 'react';
import '../cartWidget/cartWidget.css';
import { useCart } from '../../context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const { getQuantity } = useCart();
    return (
        <Link to="/cart" className="cart-widget"> 
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{getQuantity()}</span>
        </Link>
    );
};

export default CartWidget;
