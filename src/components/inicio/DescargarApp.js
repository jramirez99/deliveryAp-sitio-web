import React from 'react';

import telefonoApp from '../../img/app.jpg';
import apple from '../../img/tienda-apple.svg';
import android from '../../img/tienda-android.svg';

export const DescargarApp = () => {
    return (
        <section className="descargar-app">
            <div 
                className="descargar-grid contenedor"
            >
                <div className="imagen">
                    <img 
                        src={ telefonoApp }
                        alt="imagen app"
                    />
                </div>

                <div className="tiendas">
                    <h2> Descarga la App </h2>
                    <p> Disponible para Android y iOS </p>

                    <div className="iconos">
                        <a href="!#"> 
                            <img 
                                src={ apple } 
                                alt="tienda apple"
                            />
                        </a>
                        <a href="!#">
                            <img 
                                src={ android } 
                                alt="tienda android"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
