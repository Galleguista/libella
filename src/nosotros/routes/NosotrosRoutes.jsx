import React from 'react'
import { Route, Routes } from 'react-router'
import { ContactanosPage } from '../pages/ContactanosPage'
import { QuienesPages } from '../pages/QuienesPages'

export const NosotrosRoutes = () => {
    return (
        <>


            <Routes>

                <Route path='/quienes' element={<QuienesPages/>} />
                <Route path='/contactanos' element={<ContactanosPage/>} />

            </Routes>

        </>
    )
}
