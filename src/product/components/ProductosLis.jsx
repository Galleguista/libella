import React, { useState, useEffect, useRef } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

import { Button } from "primereact/button";
import "./ProductosList.css";
import {
  getProductosByGenero,
  getProductosByName,
} from "../../service/serviceProducto";

import { NavLink } from "react-router-dom";
export const ProductosLis = ({ genero, name }) => {
  const [products, setProducts] = useState(null);
  const [layout, setLayout] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [first, setFirst] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const rows = useRef(8);
  const datasource = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  const obtenerProductsGenero = async (genero) => {
    let results = await getProductosByGenero(genero);

    datasource.current = results;
    setTotalRecords(results.length);
    setProducts(datasource.current.slice(0, rows.current));
    setLoading(false);
  };
  const obtenerProductsName = async (name) => {
    console.log(name);
    if (name !== undefined) {
      let results = await getProductosByName(name);
      if (results === undefined) {
        results = [];
      }
      console.log(results)
      datasource.current = results;
      setTotalRecords(results.length);
      setProducts(datasource.current.slice(0, rows.current));
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      isMounted.current = true;

      if (genero === undefined) {
        obtenerProductsName(name);
      } else {
        obtenerProductsGenero(genero);
      }
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onPage = (event) => {
    setLoading(true);

    //imitate delay of a backend call
    setTimeout(() => {
      const startIndex = event.first;
      const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
      const newProducts =
        startIndex === endIndex
          ? datasource.current.slice(startIndex)
          : datasource.current.slice(startIndex, endIndex);

      setFirst(startIndex);
      setProducts(newProducts);
      setLoading(false);
    }, 1000);
  };

  const renderListItem = (data) => {
    return (
      <div className="col-12">
        <div className="product-list-item ">
          <img
            src={data.img}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={data.name}
          />
          <div className="product-list-detail">
            <div className="product-name">{data.nombre}</div>
            <div className="product-description">{data.categoria}</div>
          </div>
          <div className="product-grid-item-bottom">
            <span className="product-price">${data.precio}</span>
            <div className="grid">
              <div className="col 12">
                <NavLink to={`/producto/${data.codigo}`} type="button">
                  ver producto
                </NavLink>
              </div>
              <div className="col 12">
                <Button icon="pi pi-shopping-cart" label="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGridItem = (data) => {
    return (
      <div className="col-12 md:col-3">
        <div className="product-grid-item card">
          <div className="product-grid-item-top">
            <div>
              <i className="pi pi-tag product-category-icon"></i>
              <span className="product-category">{data.categoria}</span>
            </div>
          </div>
          <div className="product-grid-item-content">
            <img
              src={data.img}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={data.name}
            />
            <div className="product-name">{data.nombre}</div>
            <div className="product-description">{data.precio}$</div>
          </div>
          <NavLink to={`/producto/${data.codigo}`} type="button">
            ver producto
          </NavLink>
          <hr />
          <div className="product-grid-item-bottom">
            <span className="product-price">${data.pnrecio}</span>
         
            <Button icon="pi pi-shopping-cart" label="Add to Cart" />
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderListItem(product);
    else if (layout === "grid") return renderGridItem(product);
  };

  const renderHeader = () => {
    let onOptionChange = (e) => {
      setLoading(true);
      setLayout(e.value);
    };

    return (
      <div style={{ textAlign: "left" }}>
        <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="dataview-demo">
      <div className="card">
        <DataView
          value={products}
          layout={layout}
          header={header}
          itemTemplate={itemTemplate}
          lazy
          paginator
          paginatorPosition={"both"}
          rows={rows.current}
          totalRecords={totalRecords}
          first={first}
          onPage={onPage}
          loading={loading}
        />
      </div>
    </div>
  );
};
