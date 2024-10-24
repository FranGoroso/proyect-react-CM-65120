import Navbar from './components/navbar/Navbar'
import './index.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import CustomError from './components/customError/CustomError'

function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="*" element={<CustomError/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App