import React from 'react';

import { ComoFunciona } from './ComoFunciona';
import { DescargarApp } from './DescargarApp';
import { Favoritos } from './Favoritos';
import { Footer } from './Footer';
import { Formulario } from './Formulario';
import { Header } from './Header';
import { Repartidores } from './Repartidores';
import { Testimoniales } from './Testimoniales';

export const Home = () => {
    return (
        <>
            <Header />

            <Formulario />

            <ComoFunciona />

            <Testimoniales />

            <Favoritos />

            <Repartidores />

            <DescargarApp />

            <Footer />
        </>
    )
};
