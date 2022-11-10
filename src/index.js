
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
} from "react-router-dom";

import { LibellaApp } from './LibelllaApp';



import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <LibellaApp />
        </BrowserRouter>
    </React.StrictMode>
)
