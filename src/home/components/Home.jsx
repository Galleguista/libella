import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { useRef } from "react";


import React from 'react';
import { useForm } from '../../hooks/useForm';
export const Home = () => {

    const navigate = useNavigate();
    const toast = useRef(null);

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });


    const showError = () => {

        toast.current.show({ severity: 'error', summary: 'Campos Vacios', detail: 'Por favor ingresar un dato', life: 2000 });


    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.length <= 0) {
            showError();
        } else {
            navigate(`../search?q=${searchText}`);
        }
    }



    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            command: () => {
                navigate('../homepage', {
                    replace: true
                });
            }
        },
        {
            label: 'Catalogo',
            icon: 'pi pi-fw  pi-folder',
            items: [
                {
                    label: 'Accesorios',
                    icon: 'pi pi-fw pi-user-minus',
                    command: () => {
                        navigate('productos/accesorios', {
                            replace: true
                        });
                    }
                },
                {
                    label: 'Deportivos',
                    icon: 'pi pi-fw pi-user-plus',
                    command: () => {
                        navigate('productos/deportivos', {
                            replace: true
                        });
                    }
                },
                {
                    label: 'mix & match',
                    icon: 'pi pi-fw pi-user',
                    command: () => {
                        navigate('productos/mix-&-match', {
                            replace: true
                        });
                    }
                },
                {
                    label: 'Tankini',
                    icon: 'pi pi-fw pi-users',
                    command: () => {
                        navigate('productos/Tankini', {
                            replace: true
                        });
                    }
                },
                {
                    label: 'Tríos',
                    icon: 'pi pi-fw pi-users',
                    command: () => {
                        navigate('productos/trios', {
                            replace: true
                        });
                    }
                },
                {
                    label: 'Unisex',
                    icon: 'pi pi-fw pi-users',
                    command: () => {
                        navigate('productos/unisex', {
                            replace: true
                        });
                    }
                },

            ]
        },
        {
            label: 'Ayuda',
            icon: 'pi pi-fw  pi-info-circle',
            items: [
                {
                    label: '¿Quienes somos?',
                    icon: 'pi pi-fw pi-building',
                    command: () => {
                        navigate('nosotros/quienes', {
                            replace: true
                        });
                    }

                },
                {
                    label: 'Contactanos',
                    icon: 'pi pi-fw pi-phone',
                    command: () => {
                        navigate('nosotros/contactanos', {
                            replace: true
                        });
                    }

                },
                {
                    label: 'Duda',
                    icon: 'pi pi-fw pi-comment',
                    items: [
                        {
                            label: 'Preguntanos',
                            icon: 'pi pi-fw pi-question',
                            command: () => {
                                navigate('duda/preguntanos', {
                                    replace: true
                                });
                            }

                        },
                        {
                            label: 'Sugerencia',
                            icon: 'pi pi-fw pi-inbox',
                            command: () => {
                                navigate('duda/sugerencia', {
                                    replace: true
                                });
                            }
                        },
                        {
                            label: 'Queja',
                            icon: 'pi pi-fw pi-comment',
                            command: () => {
                                navigate('duda/queja', {
                                    replace: true
                                });
                            }
                        }
                    ]
                }
            ]
        }
    ];


  
    
    const end =<div className='col flex align-items-center flex-wrap card-container green-container'>
    <form onSubmit={onSearchSubmit} className="align-items-center justify-content-center">
        <span className="p-input-icon-right">

            <InputText className="w-full"
                name="searchText"
                placeholder="ingrese un dato"
                value={searchText} onChange={onInputChange}
                autoComplete="off" />
            <i className="pi pi-search" />
        </span>
    </form>
</div>;


    return (

        < >
            <Toast ref={toast} />
            <Menubar
                model={items}
               
                end={end}
                className="m4 p2"
            />

        </>

    )
}


