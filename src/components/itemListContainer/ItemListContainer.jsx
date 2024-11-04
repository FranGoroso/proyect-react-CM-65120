import { products } from '../../data/products';
import { useState, useEffect, useContext } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const { addToCart } = useContext(cartContext);


    const onAddToCart = (item, quantity) => {
        addToCart({ ...item, qty: quantity });
    };
    
    // Simulación de fetch con filtrado por categoría
    const getProducts = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    const filteredProducts = products.filter(
                        product => product.category.toLowerCase() === categoryId.toLowerCase()
                    );
                    resolve(filteredProducts);
                } else {
                    resolve(products);
                }
            }, 2000);
        });
    };

    useEffect(() => {
        getProducts(id)
            .then(res => setItems(res))
            .catch(error => console.error('Error al cargar los productos:', error));
    }, [id]);

    return (
        <div>
            <ItemList items={items} onAddToCart={onAddToCart} />
        </div>
    );
}

export default ItemListContainer;
