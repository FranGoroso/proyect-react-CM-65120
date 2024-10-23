import { products } from '../../data/products';
import { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList'
function ItemListContainer() {
    const [items, setItems] = useState([]); 

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products); 
            }, 2000);
        });
    };

    useEffect(() => {
        getProducts()
            .then(res => setItems(res))
            .catch(error => console.error('Error al cargar los productos:', error));
    }, []);
    
    

    return (
        <div>
            <ItemList items = {items}/>
        </div>
    );
}

export default ItemListContainer;
