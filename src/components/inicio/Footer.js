import React from 'react';
import { NavSociales } from './NavSociales';

export const Footer = () => {
    return (
        <footer className="footer">
            <div 
                className="footer-grid contenedor"
            >
                <div className="widget">
                    <h3 className="text-center"> Nosotros </h3>
                    <p className="texto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto earum aliquid deleniti sint quis, accusantium obcaecati eum repellendus, neque enim aspernatur at commodi doloremque tempora necessitatibus est! Suscipit, aliquam aut!
                    </p>
                </div>

                <div className="widget">

                    <NavSociales />

                </div>
            </div>

            <p className="copyright"> App Comida Todos los derechos reservados &copy; </p>
        </footer>
    )
};
