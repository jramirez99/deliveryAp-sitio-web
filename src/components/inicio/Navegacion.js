import React from 'react';
import { Link } from 'react-router-dom';

export const Navegacion = () => {
    return (
        <nav className="navegacion">
            <Link 
                to="/login" 
                className="nav-link"
            > 
                Inciar Sesión 
            </Link>
            <Link 
                to="/registrarse" 
                className="nav-link"
            > 
                Crear Cuenta 
            </Link>
            <Link 
                to="/registrar-restaurant" 
                className="nav-link registrar"
            > 
                Resgistrar Restaurant 
            </Link>
        </nav>
    )
};
