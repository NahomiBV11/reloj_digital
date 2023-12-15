//Comentarios
//''
//alert('Hola mundo desde una alerta en Java Script');

//Consola
// console.log('Hola desde la consola');

//Declaración de una variables
// let nombre= "Nahomi";

//concatenar texto y variable
// crossOriginIsolated.log("Me llamo:", nombre);

//Variables no pueden ser palabras reservadas
//Al nombrar las variables usaremos un nombre que te de idea de lo que estás almacenando 
// Variable: cambia
//Constantes: datos que no cambian

// const pi=3.14;

//Tipos de datos
//Número
// let edad = 10;
//Cadena de texto
// let saludo = "hola";
//Booleanos. 2 valores
// let activo =true;

//Operadores aritméticos
// Suma +
// Resta -
// Multiplicación *
// División /
// Módulo o residuo %
// Incremento ++
// Decremento --

//Operadores relacionales
// mayor y menor que < >
// mayor o igual que >=
// menor o igual que <=
// igual que  ==
// diferente de !=

//Operaodres lógicos
// y &
// or ||
// not !

// Reloj digital
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss 

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);