import React from 'react'
import { Route, Routes } from 'react-router'
import { PreguntanosPage } from '../pages/PreguntanosPage'
import { QuejaPage } from '../pages/QuejaPage'
import { SugerenciaPage } from '../pages/SugerenciaPage'

export const DudaRoutes = () => {
    return (

        <Routes>

            <Route path='/queja' element={<QuejaPage />} />
            <Route path='/sugerencia' element={<SugerenciaPage />} />
            <Route path='/preguntanos' element={<PreguntanosPage />} />

        </Routes>

    )
}
