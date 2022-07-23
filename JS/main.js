

let postre = prompt("Ingrese el plato que quiera comprar");

let adicional = prompt("Ingrese de que sabor lo quiere");

let Pago = prompt("Ingrese con que metodo va a pagar");



while(!postre) {
    postre = prompt("Ingrese el plato que quiera comprar");
}

while(!adicional) {
    adicional = prompt("Ingrese de que sabor lo quiere");
}

while(!Pago) {
    Pago = prompt("Ingrese con que metodo va a pagar");
}


let confirmacion = "¿Confirma que los datos ingresados son correctos?";

confirmacion += "\n" + "Postre: " + postre;
confirmacion += "\n" + "Adicional: " + adicional;
confirmacion += "\n" + "Metodo de pago: " + Pago;

let respuesta = confirm(confirmacion);

while (respuesta !="") {
    if(respuesta){
        alert ("Se ha tomado el pedido");
    }
}