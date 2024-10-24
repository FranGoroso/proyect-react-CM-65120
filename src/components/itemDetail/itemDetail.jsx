import { Card, Button } from 'react-bootstrap';

function ItemDetail( {detail} ) {
    return(
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
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail