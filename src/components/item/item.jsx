import Card from 'react-bootstrap/Card';
import '../item/item.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom'
 
function Item({ item }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={item.img} className="custom-card-img" />
      <Card.Body as= {Link} to= {`/item/${item.id}`} style={{ textDecoration: 'none' }}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <ItemCount stock={item.stock} initial={1} />
    </Card>
  );
}

export default Item;