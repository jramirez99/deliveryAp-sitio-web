import React from 'react';

export const Registrarse = ( { history } ) => {
    const navegar = () => {
        history.push('/')
    };

    return (
        <div className="login">
            <div className="contenedor otro">
                <form className="formulario-auth">
                    <h2> Registrarse </h2>

                    <div className="campo">
                        <label htmlFor="nombre"> Nombre </label>
                        <input 
                            type="text" 
                            id="nombre" 
                            autoComplete="off"
                            placeholder="Escribe tu nombre" 
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="apellido"> Apellido </label>
                        <input 
                            type="text" 
                            id="apellido" 
                            autoComplete="off"
                            placeholder="Escribe tu apellido" 
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
                        <label htmlFor="clave"> Clave </label>
                        <input 
                            type="password" 
                            id="clave" 
                            autoComplete="off"
                            placeholder="Tu clave" 
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
            </div>
        </div>
    )
};
