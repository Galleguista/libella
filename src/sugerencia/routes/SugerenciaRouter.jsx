
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../home';

import { Sugerencia } from '../pages';


export const SugerenciaRouter = () => {
    return (
        <>
            <Home />

                    <Routes>

                        <Route path='/nueva' element={<Sugerencia />} />
                       

                    </Routes>
                
        </>
    );
};

