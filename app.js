const axios = require("axios");
const {getB2BToken} = require("./getToken");
const url = "http://localhost:3000/api/productos";

const obtenerProductos = async () => {
  try {
    const accessToken = await getB2BToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const respuesta = await axios.get(url, { headers });
    if (respuesta.status === 200) {
      console.log("Productos obtenidos correctamente");
      console.log("Productos: ", respuesta.data);
    } else {
      console.log("Error al obtener los productos: ", respuesta.status);
    }
  } catch (error) {
    console.error("Error al obtener los productos: ", error);
  }
};

const agregarProducto = async () => {
  const nuevoProducto = {
    nombre: "Nuevo producto",
    precio: 100,
  };

  try {
    const accessToken = await getB2BToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const respuesta = await axios.post(url, nuevoProducto, { headers });
    if (respuesta.status === 201) {
      console.log("Producto agregado correctamente");
      console.log("Producto: ", respuesta.data);
    } else {
      console.log("Error al agregar el producto: ", respuesta.status);
    }
  } catch (error) {
    console.error("Error al agregar el producto: ", error);
  }
};

agregarProducto();

obtenerProductos();
