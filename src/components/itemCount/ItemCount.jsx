import { useState } from 'react';
import '../itemCount/itemCount.css';
import ToastAlert from '../toastAlert/ToastAlert';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAdd(quantity); 
    ToastAlert(`${quantity} Producto(s) agregado correctamente`); 
  };

  return (
    <div className="item-count-container">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
        <span className="item-count-quantity">{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>
      <button
        className="btn btn-primary mt-2"
        disabled={!stock}
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
