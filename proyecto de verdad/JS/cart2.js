const contenedorProductos = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const ResumenCompraElement = document.getElementById("resumen-compra");
const reiniciarCarritoElement = document.getElementById("reiniciar");



// Función para crear las tarjetas de productos en la página de inicio
function crearTarjetaProductosInicio(){
    contenedorProductos.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos productos
    const productos = JSON.parse(localStorage.getItem('productos'));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.className = "tarjeta-producto";
            nuevoProducto.innerHTML = `
                <img src= "${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <div>
                    <button> - </button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button> + </button>
                </div>
            `;
            contenedorProductos.appendChild(nuevoProducto);
            nuevoProducto
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    agregarAlCarrito(producto);
                    crearTarjetaProductosInicio();
                    actualizarTotales();
                    resvisarMensajeVacio();
                });
            nuevoProducto
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => { 
                    restarAlCarrito(producto);
                    crearTarjetaProductosInicio();
                    actualizarTotales();
                    resvisarMensajeVacio();
                });
        });  
    } 
}

// Llama a la función para crear las tarjetas de productos al cargar la página
crearTarjetaProductosInicio();


function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem('productos'));
    let totalUnidades = 0;
    let totalPrecio = 0;
    if(productos && productos.length > 0) {
        productos.forEach(producto => {
            totalUnidades += producto.cantidad;
            totalPrecio += producto.cantidad * producto.precio;
        });
        unidadesElement.innerText = totalUnidades;
        precioElement.innerText = totalPrecio;
    }
    resvisarMensajeVacio();
}

function resvisarMensajeVacio(){
    const productosEnMemoria = JSON.parse(localStorage.getItem('productos')) || [];
    const hayProductos = productosEnMemoria.length > 0;

    carritoVacioElement.classList.toggle('escondido', hayProductos);
    ResumenCompraElement.classList.toggle('escondido', !hayProductos);
}
resvisarMensajeVacio();


reiniciarCarritoElement.addEventListener('click', reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem('productos');
    actualizarTotales();
    crearTarjetaProductosInicio();
    resvisarMensajeVacio();
    actualizarNumeroCarrito()
}

