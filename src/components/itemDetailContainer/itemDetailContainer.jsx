import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../../data/products'; 
import { Card, Button } from 'react-bootstrap';

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        // Simulación de un fetch para obtener el producto por ID
        const getProductDetails = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const productDetail = products.find(product => product.id === id);
                    resolve(productDetail);
                }, 2000);
            });
        };

        getProductDetails()
            .then(res => setDetail(res))
            .catch(error => console.error('Error al cargar el detalle del producto:', error));
    }, [id]);

    if (!detail) {
        return <div>Cargando...</div>; // mensaje de carga
    }

    return (
        <div className="item-detail-container">
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
    );
}

export default ItemDetailContainer;
