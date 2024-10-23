import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../item/item.css';
import ItemCount from '../itemCount/ItemCount';

function Item({ item }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={item.img} className="custom-card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <ItemCount stock={item.stock} initial={1} />
      </Card.Body>
    </Card>
  );
}

export default Item;
