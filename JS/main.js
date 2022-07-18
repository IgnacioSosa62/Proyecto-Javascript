


const anioActual = 2022;
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let anioNac = prompt("¿Cual es tu año de nacimiento?");

while (!nombre) {
    nombre = prompt("Ingrese su nombre:");

}

while (!apellido) {
    apellido = prompt("Ingrese su apellido:");

}

while (!anioNac) {
    {
    anio_nac = prompt("Ingrese su nombre:");
    }
}

let edad = anioActual - anioNac;

let mensaje = "¿Confirma que los datos ingresados son correctos?";

mensaje += "\n" + "Nombre: " + nombre;
mensaje += "\n" + "Apellido: " + apellido;
mensaje += "\n" + "Edad: " + edad;


let respuesta = confirm(mensaje);

while (respuesta != "") {

    if (respuesta) {

        alert("Los datos han sido guardados");
    }
}