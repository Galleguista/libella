
import { Route, Routes } from 'react-router-dom';


import { AccesoriosPAge, DeportivosPage, Mixmatch, TankiniPage, TriosPage, UnisexPage } from '../pages';

export const ProductRouter = () => {
    return (
        <>


            <Routes>

                <Route path='/accesorios' element={<AccesoriosPAge />} />
                <Route path='/deportivos' element={<DeportivosPage />} />
                <Route path='/mix-&-match' element={<Mixmatch/>} />
                <Route path='/tankini' element={<TankiniPage />} />
                <Route path='/trios' element={<TriosPage />} />
                <Route path='/unisex' element={<UnisexPage />} />
              
            </Routes>

        </>
    );
};

