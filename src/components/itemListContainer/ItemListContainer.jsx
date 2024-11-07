import { useState, useEffect, useContext } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import { getItems, getCategoryItems } from '../../firebase/db';
import Loader from '../loader/Loader'; 

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);  
    const { id } = useParams();
    const { addToCart } = useContext(cartContext);

    const onAddToCart = (item, quantity) => {
        addToCart({ ...item, qty: quantity });
    };

    useEffect(() => {
        setLoading(true);  
        if (!id) {
            getItems()
                .then(res => {
                    setItems(res);
                    setLoading(false); 
                })
                .catch(error => {
                    console.error("Error al obtener todos los productos:", error);
                    setLoading(false);  
                });
        } else {
            getCategoryItems(id)
                .then(res => {
                    setItems(res);
                    setLoading(false);  
                })
                .catch(error => {
                    console.error(`Error al obtener productos de la categoría ${id}:`, error);
                    setLoading(false);  
                });
        }
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <ItemList items={items} onAddToCart={onAddToCart} />
        </div>
    );
}

export default ItemListContainer;
