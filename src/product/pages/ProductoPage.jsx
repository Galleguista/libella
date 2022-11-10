import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { getProductById } from "../../service/serviceProducto";

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});
  const getProducto = async (id) => {
    setProducto(await getProductById(id));
  };
  useMemo(() => getProducto(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };
  if (!producto) {
    return <Navigate to="/homepage" />;
  }

  return (
    <div className="card">
      <div className="flex mt-3 justify-content-center flex-wrap card-container yellow-container">
        <div className="col-5 flex align-items-center justify-content-center flex-wrap">
          <Image
            src={producto.img}
            alt={producto.name}
            
            className="img-thumbnail animate__animated animate__fadeInLeft "
            preview
            width="100%"
          />
        </div>

        <div className="col-7 flex align-items-start justify-content-center flex-wrap">
          <div className="col-12 p-0">
            <h1 className="title">{producto.nombre}</h1>
            <ul className="a">
              <li>
                <b>Referencia:</b> {producto.referencia}.
              </li>
             
              <li>
                <b>Precio:</b> {producto.precio} $.
              </li>
              <li>
                <b>Categoria:</b> {producto.categoria}.
              </li>
              <li>
                <b>Genero:</b> {producto.tipo}.
              </li>
            </ul>
          </div>

          <Button
            label="Regresar"
            className="p-button-rounded p-button-secondary"
            onClick={onNavigateBack}
          />
        </div>
      </div>
    </div>
  );
};
