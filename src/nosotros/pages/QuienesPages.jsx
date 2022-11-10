import React from "react";
import LoremIpsum ,{ Avatar, fullname, username }from "react-lorem-ipsum";


export const QuienesPages = () => {
  return (
    <>
      <div className="card">
        <div className="flex justify-content-center flex-wrap card-container p-3">
          <div className="col-12 flex align-items-center justify-content-center m-2">
            <h1>¿Quienes Somos?</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="flex col -12 justify-content-center flex-wrap card-container p-3">
          <div className="col-12">
            <div className="card grid">
              <div className="col-6  align-items-center justify-content-center ">
              <p className="c">El grupo Fashata S.A.S Es un grupo empresarial conformado por un conjunto de empresas dedicadas a la venta, produccion y redistribucion de productod deportivos y de playa. En la busqueda de abrirse hacia nuevos mercados Libella se crea con el fin de brindarle a los Anñermenses poder encontrar productos que puedan suplir sus necesdidades recreativas, de fines deportivos y accesorios en general. Buscamos crear una conexcion de la empresa con nuevos  </p>
              </div>
              <div className="col-6 align-items-center justify-content-center ">
                <div className="user">
                  <Avatar gender="male" />
                  <div className="fullname">{fullname("male")}</div>
                  <div className="username">{`@${username()}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
