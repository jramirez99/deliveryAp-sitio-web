import React from 'react';

import logo from '../../img/logo.svg';
import { Navegacion } from './Navegacion';

export const Header = () => {
    return (
        <header className="header contenedor">
            <div className="logo">
                <img 
                    src={ logo } 
                    alt="logo delivery"
                />
            </div>

            <Navegacion />
        </header>
    )
};
