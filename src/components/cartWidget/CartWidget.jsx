import React from 'react';
import '../cartWidget/cartWidget.css'

function CartWidget(){
    return(
        <div className = "cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">1</span>
        </div>
    );
};

export default CartWidget;