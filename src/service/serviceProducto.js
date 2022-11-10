import axios from "axios";

const alt = "?alt=media";
const urlImg =
  "https://firebasestorage.googleapis.com/v0/b/joyas-2b0a9.appspot.com/o/";
const clientData = axios.create({
  baseURL: "https://ivvaqeoyo7.execute-api.us-east-1.amazonaws.com/api",
});

const dataStructure = (data) => {
  const datos = data.map((producto) => ({
    ...producto,
    img: `${urlImg}${producto.nombre}.jpg${alt}`,
  }));

  return datos;
};

export const getProductos = async () => {
  const { data } = await clientData.get("/productos").then((response) => {
    return response.data;
  });

  return dataStructure(data);
};

export const getProductosByGenero = async (genero) => {
  const { data } = await clientData
    .get(`/productos/${genero}`)
    .then((response) => {
      return response.data;
    });

  return dataStructure(data);
};

export const getProductById = async (id) => {
  const { data } = await clientData.get(`/producto/${id}`).then((response) => {
    return response.data;
  });

  return {
    ...data[0],
    img: `${urlImg}${data[0].nombre}.jpg${alt}`,
  };
};

export const getProductosByName = async (name) => {
  const {data} = await clientData.get(`/descripcion/${name}`).then((response) => {
    return response.data;
  });

  return dataStructure(data);
};
