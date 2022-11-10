import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { ProductosLis } from '../../product/components/ProductosLis';




export const ResultadosBusquedaProducto = () => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
   

    return (
        <>

            <h1>Results</h1>
            <hr />



            <ProductosLis name={q} />

        </>
    )
}
