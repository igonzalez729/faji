var prenda = [
  {imagen:'images/abrigo1.jpg', nombre:'Abrigo tigre', descripcion:'Abrigo de piel de tigre de alta calidad, pasando los controles de GREENPEACE', precio: 38.99},
  {imagen:'images/vestido3.jpg', nombre:'Vestido elegante', descripcion:'Vestido en seda importada de Egipto', precio: 36.99},
  {imagen:'images/camisa4.jpg', nombre:'Camisa blanca', descripcion:'Camisa blanca en algodon 100% importado desde la India', precio: 20.00},
  {imagen:'images/sudadera3.jpg', nombre:'Sudadera PinkCake', descripcion:'Sudadera Rosa Pastel en tela trapillo', precio: 15.99},
  {imagen:'images/zapatos1.jpg', nombre:'Zapatos Grises', descripcion:'Zapatos grises en piel de elefante pasando los controles de GREENPEACE', precio: 18.95},
  {imagen:'images/pantalones1.jpg', nombre:'Pantalon Cereza', descripcion:'Pantalones de terciopelo en color Cereza', precio: 29.99},
  {imagen:'images/vestido4.jpg', nombre:'Vestido Amarillo', descripcion:'Vestido en color amarillo miel', precio: 25.99},
  {imagen:'images/pantalones3.jpg', nombre:'Black Seduction', descripcion:'Leggins en color negro en piel de pantera pasando los rigurosos controles de GREENPEACE', precio: 22.99},
  {imagen:'images/zapatos3.jpg', nombre:'Black Steed', descripcion:'Zapatos comodos del día a día', precio: 12.95},
];

/*------------------------------------------------------------------------------*/
var imagen = document.querySelectorAll('.imagen');
var aabrir = document.querySelector('.modal-abrigo-invierno');
for (var i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('click',abrirModal);
}
/*realizamos la función con lo que queramos que haga*/
function abrirModal (event) {
  var index = event.currentTarget.id;
  index = parseInt(index);
  cargarInformacionModalPrendas(index);
  aabrir.classList.add('abrir');
  // Pasamos ID, tiempo, función a ejecutar
  /*startInterval(document.getElementById("counter"), 30, "rebaja('80€')");*/
  startInterval(document.getElementById("counter"), 30, "rebaja(pre)");

}
var precioArticuloConDescuento;
var precioArticuloSinDescuento;
var pre;
/*guardamos en una variable el modal del HTML*/
function cargarInformacionModalPrendas (index){
  document.querySelector('#imagenPrenda').src=prenda[index].imagen;
  document.querySelector('#nombre').innerHTML=prenda[index].nombre;
  document.querySelector('#descripcion').innerHTML=prenda[index].descripcion;
  precioArticuloConDescuento=document.querySelector('#precio').innerHTML=prenda[index].precio;
  precioArticuloConDescuento = precioArticuloConDescuento - precioArticuloConDescuento * 20 / 100;
  precioArticuloConDescuento = precioArticuloConDescuento.toFixed(2);
  document.querySelector('#precio').innerHTML=precioArticuloConDescuento + ' €';
  pre = index;
}
/*Busca la clase en el doM*/
var aspa = document.querySelector('.modal-abrigo-invierno .aspa');
/*Cuando el usuario pulsa en la imagen, hacemos que se abra el modal (con el 'click') y ejecuatamos la función*/
aspa.addEventListener('click',cerrarModal);
/*realizamos la función con lo que queramos que haga*/
function cerrarModal () {
/*guardamos en una variable el modal del HTML*/
  var cerrar = document.querySelector('.modal-abrigo-invierno');
  /*Le indicamos que agregue la nueva clase creada en el css a la clase modal*/
  cerrar.classList.remove('abrir');
  stopInterval();
}
/*----------------------------------------------------------------------------------*/
var accede = document.querySelector('.accede');
accede.addEventListener('click',abrirModalAccede);
function abrirModalAccede () {
  var abrir = document.querySelector('.modalAccede');
  abrir.classList.add('abrir');
}
/*realizamos la función con lo que queramos que haga*/
var aspaAccede = document.querySelector('.modalAccede .aspa');
/*Cuando el usuario pulsa en la imagen, hacemos que se abra el modal (con el 'click') y ejecuatamos la función*/
aspaAccede.addEventListener('click',cerrarModalAccede);
/*realizamos la función con lo que queramos que haga*/
function cerrarModalAccede () {
/*guardamos en una variable el modal del HTML*/
  var cerrar = document.querySelector('.modalAccede');
  /*Le indicamos que agregue la nueva clase creada en el css a la clase modal*/
  cerrar.classList.remove('abrir');
}
/*-----------------------------------------------------------------------------------*/

var reloj ="";
var contador = 5;

function startInterval(objHTML, timeLimit, nameFunction){
  contador = timeLimit;
  reloj = setInterval(cuentaAtras,1000,objHTML,nameFunction);
}

function cuentaAtras (objHTML, nameFunction){
  if (contador > 0) {
    contador--;
    //return contador;
    //console.log(objHTML);
    objHTML.innerHTML = "¡Aprovecha la oportunidad. Sólo tienes " + contador + " segundos!";
  } else{
    console.log("fin");
    eval(nameFunction);
    stopInterval();
  }
}

function rebaja(pre){
  precioArticuloSinDescuento=document.querySelector('#precio').innerHTML=prenda[pre].precio + ' €';
  /*document.getElementById("precio").innerHTML = parseInt(pre);*/
  cleanTextCounter();
}
  function stopInterval(){
  clearInterval(reloj);
  cleanTextCounter();
}
/*Función que hace que se quite el texto*/
function cleanTextCounter(){
  document.getElementById("counter").innerHTML = "";

}
var gracias = document.querySelector('#comprar');
gracias.addEventListener('click',darGracias);
var detenerContador = document.querySelector('#comprar');
detenerContador.addEventListener('click',stopInterval);

function darGracias() {
  if (contador != 0){
    var gracias = 'Su artículo se ha añadido a la cesta. Gracias por confiar en Faji';
    alert(gracias);
    contador = 0;
  } else {
    alert('Se le paso el tiempo. Su artículo se añadió a la cesta sin oferta')
  }
  rebaja(pre);
}



//cuentaAtras();
console.log(contador);
