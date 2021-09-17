import React from 'react';

import repartidor from '../../img/dibujo_repartidor.svg';

export const Formulario = () => {
    return (
        <section className="contenedor">
            <div className="formulario-grid">
                <div className="formulario-contenido">
                    <h2> Encuentra y pide comida de tu restaurant favorito </h2>

                    <form className="formulario-principal">
                        <div className="campo">
                            <label htmlFor="restaurant"> Restaurant </label>
                            <input 
                                type="text" 
                                id="restaurant" 
                                placeholder="Tacos México" 
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="platillo"> Platillo </label>
                            <input 
                                type="text" 
                                id="platillo" 
                                placeholder="pizza, hamburguesa, hot dogs" 
                            />
                        </div>

                        <input 
                            type="submit" 
                            value="Buscar" 
                        />
                    </form>
                </div>

                <div className="formulario-imagen">
                    <img 
                        src={ repartidor } 
                        alt="imagen repartidor"
                    />
                </div>
            </div>
        </section>
    )
};
