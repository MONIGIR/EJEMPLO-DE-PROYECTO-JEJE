const contenedorProductos = document.getElementById("productos-container"); //contenedor donde se van a agregar los productos
const unidadesElement = document.getElementById("unidades"); //elemento donde se muestra el total de unidades
const precioElement = document.getElementById("precio"); //elemento donde se muestra el precio total
const carritoVacioElement = document.getElementById("carrito-vacio"); //mensaje de carrito vacío
const ResumenCompraElement = document.getElementById("resumen-compra"); //resumen de compra
const reiniciarCarritoElement = document.getElementById("reiniciar"); //botón para reiniciar el carrito



// Función para crear las tarjetas de productos en la página de inicio
function crearTarjetaProductosInicio(){
    contenedorProductos.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos productos
    const productos = JSON.parse(localStorage.getItem('productos')); // Obtiene los productos del localStorage
    console.log(productos);

    // Verifica si hay productos en el carrito
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.className = "tarjeta-producto";
            // Crea el contenido HTML de la tarjeta del producto
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
            // Agrega la nueva tarjeta al contenedor de productos
            contenedorProductos.appendChild(nuevoProducto);
            // Agrega los event listeners a los botones de sumar y restar
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

// Función para actualizar los totales de unidades y precio
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
actualizarTotales();

// Función para revisar si el carrito está vacío y mostrar/ocultar mensajes
function resvisarMensajeVacio(){
    const productosEnMemoria = JSON.parse(localStorage.getItem('productos')) || [];
    const hayProductos = productosEnMemoria.length > 0;

    carritoVacioElement.classList.toggle('escondido', hayProductos);
    ResumenCompraElement.classList.toggle('escondido', !hayProductos);
}
resvisarMensajeVacio();

// Evento para reiniciar el carrito
reiniciarCarritoElement.addEventListener('click', reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem('productos');
    actualizarTotales();
    crearTarjetaProductosInicio();
    resvisarMensajeVacio();
    actualizarNumeroCarrito()
}

