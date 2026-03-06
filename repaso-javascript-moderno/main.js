// Alertas
//alert("Hola soy Victor Robles WEB");

//Varibles
let nombre = "Víctor Robles";
nombre = "victor robles web"

// Constantes
const apellido = "Robles";

// otra variables
let altura = 187;

//Mostrar por consola
console.log(nombre);
console.log(altura);

// Cocatenacion

let concatenacion = nombre + " " + apellido;

// Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML =
    ` <hr/>
<h1>Soy la caja de datos</h1>
  <h2>Mi nombre es: ${concatenacion}</h2>
  <h3>Mido: ${altura} cm</h3>
`;

// Condiciones 

altura = 180;
if (altura >= 185) {
    datos.innerHTML += "<h1>Eres una persona alta </h1>"
} else {
    datos.innerHTML += "<h1>Eres una persona bajita </h1>"
}

// Bucles
for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`
}

// Arays
let nombres = ["Victor", "Francisco", "Pepe"];

let divnombres = document.querySelector("#nombres");

// divnombres.innerHTML = nombres[2];

divnombres.innerHTML = "<h1>Listado de nombres </h1><ul>";

/*nombres.forEach(nombre => {
    divnombres.innerHTML += "<li>"+nombre+"</li>"
});
*/
for (let nombre of nombres) {
    divnombres.innerHTML += "<li>" + nombre + "</li>"
};

divnombres.innerHTML += "</ul>"


// Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = ` <hr/>
<h1>Soy la caja de datos</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h3>Mido: ${altura} cm</h3>
`;

    return misDatos;
}

console.log(miInformacion("victor robles", 187) );

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML +=  miInformacion("paco", 187);
}

imprimir()
imprimir()

imprimir()
imprimir()


