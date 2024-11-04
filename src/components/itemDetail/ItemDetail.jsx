import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/ItemCount';
import { Card } from 'react-bootstrap';
import '../itemDetail/itemDetail.css';

function ItemDetail({ detail }) {
  const { addToCart } = useContext(cartContext);

  const onAddToCart = (quantity) => {
    addToCart({ ...detail, quantity });
  };

  return (
    <div className="item-detail">
      <Card>
        <Card.Img variant="top" src={detail.img} />
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            <strong>Precio:</strong> ${detail.price}<br />
            <strong>Categoría:</strong> {detail.category}<br />
            <strong>Descripción:</strong> {detail.description}<br />
            <strong>Stock:</strong> {detail.stock}
          </Card.Text>
          <ItemCount stock={detail.stock} initial={1} onAdd={onAddToCart} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
