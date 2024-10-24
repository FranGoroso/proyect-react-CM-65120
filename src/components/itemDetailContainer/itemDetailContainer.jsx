import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../../data/products'; 
import ItemDetail from '../itemDetail/ItemDetail';

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const getProductDetails = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const productDetail = products.find(product => product.id === id);
                    resolve(productDetail);
                }, 2000);
            });
        };

        getProductDetails()
            .then(res => {
                if (res) {
                    setDetail(res);
                } else {
                    console.error('No se encontró el producto con el ID:', id);
                    setDetail(null);
                }
            })
            .catch(error => console.error('Error al cargar el detalle del producto:', error));
    }, [id]);

    if (!detail) {
        return <div>Cargando...</div>; // mensaje de carga
    }

    return (
        <ItemDetail detail={detail} /> 
    );
}

export default ItemDetailContainer;
