import React from 'react';

function CartWidget(){
    return(
        <div className = "cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">1</span>
        </div>
    );
};

export default CartWidget;