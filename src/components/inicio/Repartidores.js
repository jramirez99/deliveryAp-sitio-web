import React from 'react';

import repartidor from '../../img/repartidor.jpg';

export const Repartidores = () => {
    return (
        <section className="repartidores">
            <h2 className="text-center"> Gana dinero con AppComida </h2>

            <div className="repartidores-grid contenedor">
                <div className="imagen">
                    <img 
                        src={ repartidor } 
                        alt="imagen repartidor"
                    />
                </div>

                <div className="informacion">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum, voluptatibus repudiandae laboriosam molestias excepturi maxime id omnis eligendi fugit quidem! Esse id vitae ipsam rem optio, quas doloremque odit?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facilis, minus veniam tempora dolorem ab aspernatur repellat exercitationem quis non voluptatum impedit ipsam quisquam perspiciatis tenetur aliquam dicta expedita modi!
                    </p>

                    <a href="!#"> Más información </a>
                </div>
            </div>
        </section>
    )
};
