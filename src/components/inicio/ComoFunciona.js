import React from 'react';

import ondas from '../../img/wave.svg';
import imagen1 from '../../img/paso_1.jpg';
import imagen2 from '../../img/paso_2.jpg';
import imagen3 from '../../img/paso_3.jpg';

export const ComoFunciona = () => {
    return (
        <section className="pasos mt-5">
            <img 
                src={ ondas }
                alt="imagen ondas"
            />

            <div className="contenido">
                <h2> ¿Cómo funciona? 
                    <span> tan fácil como 1,2 y 3 </span> 
                </h2>

                <div className="pasos-grid contenedor">
                    <div className="paso">
                        <img 
                            src={ imagen1 } 
                            alt="paso 1 app"
                        />
                    </div>
                    <div className="paso">
                        <img 
                            src={ imagen2 } 
                            alt="paso 2 app"
                        />
                    </div>
                    <div className="paso">
                        <img 
                            src={ imagen3 } 
                            alt="paso 3 app"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};
