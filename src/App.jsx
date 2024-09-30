import React from 'react';
import './App.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx'
import NavBar from './components/Navbar.jsx'
function App() {

  return (
    <div>
    <NavBar> 
      <CartWidget /> 
    </NavBar>

    <ItemListContainer text = "Hola Mundo! Este es el primer texto que tengo en mi app de react"/>
    </div>
  );
};

export default App
