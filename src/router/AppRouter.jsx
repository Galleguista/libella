import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DudaRoutes } from '../duda/routes/DudaRoutes';

import { Home, HomePage, ResultadosBusquedaProducto } from '../home';
import { NosotrosRoutes } from '../nosotros/routes/NosotrosRoutes';
import { Product, ProductRouter } from '../product';
const AppRouter = () => {
    return (
        <>
            <Home />
            <Routes>
            <Route path='/search/*' element={<ResultadosBusquedaProducto />} />
                <Route path='/homepage' element={<HomePage />} />
                <Route path='/productos/*' element={<ProductRouter />} />
                <Route path='/producto/:id' element={<Product />} />

                <Route path='/duda/*' element={<DudaRoutes />} />
                <Route path='/nosotros/*' element={<NosotrosRoutes />} />
                <Route path='/*' element={<Navigate to="/homepage" />} />
            </Routes>
        </>
    );
};

export default AppRouter;