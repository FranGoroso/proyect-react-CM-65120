import React from 'react';
import { Link } from 'react-router-dom';
import './customError.css'; 

const CustomError = () => {
    console.log('CustomError se está renderizando');
    return (
        <div className="custom-error-container">
            <h1 className="custom-error-title">404</h1>
            <p className="custom-error-message">Página no encontrada</p>
            <p className="custom-error-description">
                Lo sentimos, no pudimos encontrar lo que estabas buscando. 
                Es posible que la página que buscas haya sido eliminada o que la URL sea incorrecta.
            </p>
            <Link to="/" className="custom-error-btn">
                Volver a la página principal
            </Link>
        </div>
    );
};

export default CustomError;
