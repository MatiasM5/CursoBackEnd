const express = require("express");

const app = express();

const server = app.listen(8080, () => console.log("Servidor funcionando"));
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (request, response) => {
  response.send('<h1> Bienvenidos!!  </h1>');
});

app.get("/productos", (request, response) => {
  
  let productosArray = [
    {
      "title": "Teclado Mecanico",
      "price": 12000,
      "thumbnail": "https://www.venex.com.ar/products_images/1602708807_hxproductkeyboardalloyoriginslatam2zmlg.jpg",
      "id": 1
    },
    {
      "title": "Auricular Wireless",
      "price": 20000,
      "thumbnail": "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5848201.jpg",
      "id": 2
    },
    {
      "title": "Monitor 165hz",
      "price": 60000,
      "thumbnail": "https://s3-sa-east-1.amazonaws.com/saasargentina/ZDjbOVgAPAoPWA2NWBPY/imagen",
      "id": 3
    }
    ]
   
    response.send({
    status: "perfecto",
    products: productosArray,
    });
});
