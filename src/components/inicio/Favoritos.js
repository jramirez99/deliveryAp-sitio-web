import React from 'react';
import { Favorito } from './Favorito';

export const Favoritos = () => {
    return (
        <main className="favoritos mt-5">
            <h2 className="text-center"> Restaurants favoritos </h2>

            <div className="favoritos-grid contenedor">

                <Favorito />

            </div>
        </main>
    )
};
