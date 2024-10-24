import { products } from '../../data/products';
import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [items, setItems] = useState([]); 
    const { id } = useParams();  

    // Simulacion de fetch con filtrado por categoria
    const getProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoryId) {
                    
                    const filteredProducts = products.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
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
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;
