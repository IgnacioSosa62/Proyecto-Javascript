
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
    )


document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'ChesseCake de Frutilla',
            precio: 2500,
            imagen: 'https://img.freepik.com/foto-gratis/torta-mermelada-cerezas-mesa_23-2147802607.jpg?w=740&t=st=1660922463~exp=1660923063~hmac=dc663f093bf27d66108d9ead1f87395d370f77bb2e66e23149e56cc9ef66070d' 
        },
        {
            id: 2,
            nombre: 'Muffin de Chocolate',
            precio: 300,
            imagen  : 'https://img.freepik.com/fotos-premium/magdalenas-caseras-zanahoria-recien-horneadas-avellana-naranja-sobre-fondo-madera_186277-4792.jpg?w=740'
        },
        {
            id: 3,
            nombre: 'Galletita de Coco',
            precio: 250,
            imagen: 'https://img.freepik.com/fotos-premium/galletas-coco-sobre-superficie-oscura-horneando-comida-vegetariana_97840-3043.jpg?w=740'
        },
        {
            id: 4,
            nombre: 'Brownies',
            precio: 600,
            imagen: 'https://img.freepik.com/foto-gratis/tarta-pastel-brownie-chocolate-platos-caseros_114579-582.jpg?w=740&t=st=1660922830~exp=1660923430~hmac=bfa4b636611a4586f9fb7644e7cdd835edee718ccc45b2e759530134f6f9eb99'
        }

    ];

    let carrito = [];
    const moneda = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;


    function mostrarProductos() {
        baseDeDatos.forEach((info) => {

            const Nodo = document.createElement('div');
            Nodo.classList.add('card', 'col-sm-4');

            const NodoCardBody = document.createElement('div');
            NodoCardBody.classList.add('card-body');

            const NodoTitle = document.createElement('h5');
            NodoTitle.classList.add('card-title');
            NodoTitle.textContent = info.nombre;

            const NodoImagen = document.createElement('img');
            NodoImagen.classList.add('img-fluid');
            NodoImagen.setAttribute('src', info.imagen);

            const NodoPrecio = document.createElement('p');
            NodoPrecio.classList.add('card-text');
            NodoPrecio.textContent = `${info.precio}${moneda}`;

            const NodoBoton = document.createElement('button');
            NodoBoton.classList.add('btn', 'btn-primary');
            NodoBoton.textContent = '+';
            NodoBoton.setAttribute('marcador', info.id);
            NodoBoton.addEventListener('click', anadirProductoAlCarrito);

            NodoCardBody.appendChild(NodoImagen);
            NodoCardBody.appendChild(NodoTitle);
            NodoCardBody.appendChild(NodoPrecio);
            NodoCardBody.appendChild(NodoBoton);
            Nodo.appendChild(NodoCardBody);
            DOMitems.appendChild(Nodo);
        });
    }

    function anadirProductoAlCarrito(evento) {

        carrito.push(evento.target.getAttribute('marcador'))

        renderizarCarrito();

        guardarCarritoEnLocalStorage();

    }


    function renderizarCarrito() {
        DOMcarrito.textContent = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {

                return itemId === item ? total += 1 : total;
            }, 0);

            const Nodo = document.createElement('li');
            Nodo.classList.add('list-group-item', 'text-right', 'mx-2');
            Nodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            Nodo.appendChild(miBoton);
            DOMcarrito.appendChild(Nodo);
        });

        DOMtotal.textContent = calcularTotal();
    }


    function borrarItemCarrito(evento) {

        const id = evento.target.dataset.item;

        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        renderizarCarrito();

        guardarCarritoEnLocalStorage();
    }

    function calcularTotal() {

        return carrito.reduce((total, item) => {

            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }


    function vaciarCarrito() {

        carrito = [];

        renderizarCarrito();

        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }




    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    mostrarProductos();
    renderizarCarrito();
});