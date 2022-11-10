import { Galleria } from "primereact/galleria";
import { getProductos } from "../../service/serviceProducto";
import { useEffect, useState } from "react";
import { ProductosLis } from "../../product/components/ProductosLis";

export const HomePage = () => {
  const [productos, setProductos] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const obtenerProducts = async () => {
    setProductos(await getProductos());
  };

  useEffect(() => {
    obtenerProducts();
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.img}
        className="img"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.name}
      />
    );
  };
  const thumbnailTemplate = (item) => {
    return (
      <img
        className="img2"
        src={item.img}
        onError={(e) =>
          (e.target.src =
            ' "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"')
        }
        alt={item.name}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <>
      <div className="galleria-demo">
        <div className="card m-2">
          <div>
            <Galleria
              value={productos}
              responsiveOptions={responsiveOptions}
              numVisible={5}
              item={itemTemplate}
              className="p-galleria"
              circular
              autoPlay
              transitionInterval={3000}
              thumbnail={thumbnailTemplate}
              style={{ display: "block" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="card m-2">
          <ProductosLis genero={""} />
        </div>
      </div>
    </>
  );
};
