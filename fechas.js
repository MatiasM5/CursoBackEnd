const http = require("http");

const server = http.createServer( (peticion, respuesta) => {  
  console.log('Peticion recibida!!');
  let hora = new Date().getHours().toLocaleString();

  if(hora >= 6 && hora <=12){
    respuesta.end('Buenos días!');  
  }else if (hora >= 13 && hora <=19){
    respuesta.end('Buenas tardes!');  
  }else{
    respuesta.end('Buenas noches!');  
  }
});
const connectedServer = server.listen(8080, () => {
  console.log('Server Up!!!');
});