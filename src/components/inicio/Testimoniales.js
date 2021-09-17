import React from 'react'
import { Testimonial } from './Testimonial'

export const Testimoniales = () => {
    return (
        <section className="testimoniales contenedor">
            <h2 className="text-center mt-5"> Testimoniales </h2>

            <div className="testimoniales-grid">
                <Testimonial />
            </div>
        </section>
    )
};
