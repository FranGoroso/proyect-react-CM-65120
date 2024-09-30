import React from 'react'; 
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div className ="nav-bar" >
            <div> 
                <h2 className='brand'>TIENDA FRAN</h2>
            </div>
            
            <div className='select-category'>  
                <select className = "selector" name="" id="">
                    <option value="">Proteina</option>
                    <option value="">Creatina</option>
                    <option value="">Indumentaria deportiva</option>
                    <option value="">Multivitaminico</option>
                </select>
            </div>
            
            <div className='cart-idget'>
                <CartWidget />
            </div>
        
        </div>
    );
};

export default NavBar;
