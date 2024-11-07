import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail.jsx';
import Loader from '../loader/Loader.jsx';
import { getItemDetail } from '../../firebase/db';

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null); 
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getItemDetail(id)
            .then(res => {
                setDetail(res);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error al cargar el detalle del producto con ID ${id}:`, error);
                setDetail(null);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />; 
    }

    if (!detail) {
        return <p>No se encontró el producto.</p>; 
    }

    return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
