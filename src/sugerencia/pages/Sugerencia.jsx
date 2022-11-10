import { useState, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';

import { Toast } from 'primereact/toast';

export const Sugerencia = () => {
    const [modalidad, setModalidad] = useState('holi');
    const opciones =
        [
            { name: 'Sugerencia' },
            { name: 'Reclamo' },
            { name: 'Peticiones' }
        ];
    const toast = useRef(null);


    return (
        // Suggestions
        

    
            <div class="card">
                <div class="flex justify-content-start flex-wrap card-container">
                    <Toast ref={toast} />
                    <div className='grid' >
                        <div class="field col-6 md:col-5">
                            <label for="Correo6">Correo</label>
                            <input id="Correo6" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                        </div>

                        <div className="field col-6 md:col-6">
                            <label htmlFor="dropdown"></label>
                            <Dropdown inputId="dropdown" value={modalidad} options={opciones} onChange={(e) => setModalidad(e.value)} optionLabel="name" className="p-invalid" />
                            <div className="card">

                                <div className="formgrid grid">
                                    <div className="field col-12 md:col-4">
                                        <label htmlFor="dropdown">Dropdown</label>
                                        <Dropdown inputId="dropdown" value={modalidad} options={opciones} onChange={(e) => setModalidad(e.value)} optionLabel="name" className="p-invalid" />
                                    </div>

                                    <div className="field col-12 md:col-6">
                                        <label >Correo</label>
                                        <input id="Correo6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <label ></label>
                                        <input id="lastname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                    </div>
                                    <div className="field col-12">
                                        <label>Address</label>
                                        <textarea id="Direccion" type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <label >City</label>
                                        <input id="Ciudad" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


    )
};
