import Item from '../item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemList({ items }) {
    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id} md={4} className="mb-4"> 
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;
