import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CustomError from './components/customError/CustomError';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import CartContainer from './components/cartContainer/CartContainer'; 

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartContainer />} /> 
                    <Route path="*" element={<CustomError />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
