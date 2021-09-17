import React from 'react';

import imagen from '../../img/restaurant.svg';

export const RegistrarRestaurant = ( { history } ) => {

    const navegar = () => {
        history.push('/')
    };

    return (
        <div className="login-restaurant">
            <div className="contenedor">
                <div className="contenedor-grid">
                    <form className="formulario-restaurant">
                        <h2> Registrar Restaurant </h2>

                        <div className="campo">
                            <label htmlFor="nombre"> Nombre </label>
                            <input 
                                type="text" 
                                id="nombre" 
                                autoComplete="off"
                                placeholder="nombre restaurant" 
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="apellido"> Ubicación </label>
                            <input 
                                type="text" 
                                id="apellido" 
                                autoComplete="off"
                                placeholder="ubicación" 
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="propietario"> Propietario </label>
                            <input 
                                type="text" 
                                id="propietario" 
                                autoComplete="off"
                                placeholder="nombre propietario" 
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="correo"> Correo </label>
                            <input 
                                type="email" 
                                id="correo" 
                                autoComplete="off"
                                placeholder="Tu correo" 
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="clave"> Teléfono </label>
                            <input 
                                type="tel" 
                                id="clave" 
                                autoComplete="off"
                                placeholder="numero teléfono" 
                            />
                        </div>

                        <div className="botones">
                            <input 
                                type="submit" 
                                value="Registrame"
                                onClick={ navegar }
                            />

                            <button
                                to="/"
                                onClick={ navegar }
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>

                    <div className="imagen">
                        <img 
                            src={ imagen }
                            alt="!#"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};
