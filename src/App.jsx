import Navbar from './components/navbar/Navbar'
import './index.css';
import Item from './components/item/Item'
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
        </div>
    )
}

export default App