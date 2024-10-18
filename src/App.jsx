import React from 'react';
import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import CartWidget from './components/cartWidget/CartWidget.jsx'
import NavBar from './components/navbar/Navbar.jsx'
function App() {

  return (
    <div>
    <NavBar> 
      <CartWidget /> 
    </NavBar>

    <ItemListContainer/>
    </div>
  );
};

export default App
