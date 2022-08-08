let nombre = prompt ('¿Cual es tu nombre?',);

alert(`Hola ${nombre} elige uno de nuestros productos!`);

if (nombre != null) {

document.write("Bienvenido A que Rico Gaby! "+ nombre)
} else {
    alert("No has introducido un nombre, actualiza la pagina para agregar el nombre")
}



let postre = prompt("Ingrese el plato que quiera comprar");

let adicional = prompt("Ingrese de que sabor lo quiere");

let pago = prompt("Ingrese con que metodo va a pagar");

while(!postre) {

    postre = prompt("Ingrese el plato que quiera comprar");

}

while(!adicional) {

    adicional = prompt("Ingrese de que sabor lo quiere");

}

while(!pago) {

    pago = prompt("Ingrese con que metodo va a pagar");

}

let confirmacion = "¿Confirma que los datos ingresados son correctos?";

confirmacion += "\n" + "Postre: " + postre;

confirmacion += "\n" + "Adicional: " + adicional;

confirmacion += "\n" + "Metodo de pago: " + pago;

let respuesta = confirm(confirmacion);

while (respuesta !="") {

    if(respuesta){

        alert ("Se ha tomado el pedido");
        break
    }

}



let aProductos = [
    {
        imagen: '#',
        nombre: 'Pastel',
        categoria: 'Dulce',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
    {
        imagen: '#',
        nombre: 'Bizcocho',
        categoria: 'Salado',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
    {
        imagen: '#',
        nombre: 'Pastel',
        categoria: 'Dulce',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
    {
        imagen: '#',
        nombre: 'Pastel',
        categoria: 'Dulce',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
    {
        imagen: '#',
        nombre: 'Pastel',
        categoria: 'Dulce',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
    {
        imagen: '#',
        nombre: 'Bizcocho',
        categoria: 'Salado',
        precio: 4999,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.',
    },
];

let aDulce = aProductos.filter(producto => producto.categoria === 'Dulce')
let aSalado = aProductos.filter(producto => producto.categoria === 'Salado')

console.log(aDulce);

console.log(aSalado);






