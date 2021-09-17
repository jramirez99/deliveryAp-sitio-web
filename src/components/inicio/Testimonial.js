import React from 'react';

import testimonial1 from '../../img/testimonial1.jpg';
import testimonial2 from '../../img/testimonial2.jpg';
import testimonial3 from '../../img/testimonial3.jpg';
import testimonial4 from '../../img/testimonial4.jpg';
import testimonial5 from '../../img/testimonial5.jpg';
import estrellas from '../../img/estrellas.jpg';

export const Testimonial = () => {
    return (
        <>
            <div className="testimonial">
                    <div className="testimonial-header">
                        <div className="imagen">
                            <img 
                                src={ testimonial1 } 
                                alt="testimonial"
                            />
                        </div>

                        <div className="testimonial-informacion">
                            <p className="autor"> Gael Sansores </p>
                            <img 
                                src={ estrellas } 
                                alt="estrellas"
                            />
                        </div>
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est voluptatem libero doloribus ipsum quaerat quidem, sequi culpa non voluptate voluptas itaque nostrum vero dolorum, commodi reiciendis cumque sed soluta.
                        </p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <div className="imagen">
                            <img 
                                src={ testimonial2 } 
                                alt="testimonial"
                            />
                        </div>

                        <div className="testimonial-informacion">
                            <p className="autor"> Karime Rejón </p>
                            <img 
                                src={ estrellas } 
                                alt="estrellas"
                            />
                        </div>
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est voluptatem libero doloribus ipsum quaerat quidem, sequi culpa
                        </p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <div className="imagen">
                            <img 
                                src={ testimonial3 } 
                                alt="testimonial"
                            />
                        </div>

                        <div className="testimonial-informacion">
                            <p className="autor"> Johan Ramirez </p>
                            <img 
                                src={ estrellas } 
                                alt="estrellas"
                            />
                        </div>
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est voluptatem libero doloribus ipsum quaerat quidem, sequi culpa
                        </p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <div className="imagen">
                            <img 
                                src={ testimonial4 } 
                                alt="testimonial"
                            />
                        </div>

                        <div className="testimonial-informacion">
                            <p className="autor"> Mariana Cosgaya </p>
                            <img 
                                src={ estrellas } 
                                alt="estrellas"
                            />
                        </div>
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est voluptatem libero doloribus ipsum quaerat quidem, sequi culpa non voluptate voluptas itaque nostrum vero dolorum, commodi reiciendis cumque sed soluta voluptatem libero
                        </p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <div className="imagen">
                            <img 
                                src={ testimonial5 } 
                                alt="testimonial"
                            />
                        </div>

                        <div className="testimonial-informacion">
                            <p className="autor"> Suriely Rejón </p>
                            <img 
                                src={ estrellas } 
                                alt="estrellas"
                            />
                        </div>
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est voluptatem libero
                        </p>
                    </div>
                </div>
        </>
    )
}
