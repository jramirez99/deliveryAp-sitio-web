import React from 'react';
import { Link } from 'react-router-dom';

export const Login = ( { history } ) => {

    const navegar = () => {
        history.push('/')
    };

    return (
        <div className="login">
            <div className="contenedor">
                <form className="formulario-auth">
                    <h2> Login </h2>

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
                            value="Inciar Sesión"
                            onClick={ navegar }
                        />

                        <button
                            to="/"
                            onClick={ navegar }
                        >
                            Regresar
                        </button>
                    </div>

                    <p> 
                        ¿Aun no tienes cuenta? 
                        <Link
                            to="/registrarse"
                        >
                            Resgistrate
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
};
