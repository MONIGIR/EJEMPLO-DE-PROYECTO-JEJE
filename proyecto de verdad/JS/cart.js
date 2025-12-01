
// Importa el arreglo de productos desde el archivo productos.js
const contenedorProductos = document.getElementById("productos-container");

// Función para crear las tarjetas de productos en la página de inicio
function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.className = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src= "${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(productos)); 
    });  
}


// Llama a la función para crear las tarjetas de productos al cargar la página
crearTarjetaProductosInicio(productos);
