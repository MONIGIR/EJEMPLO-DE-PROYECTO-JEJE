
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
       const botonAgregar = nuevoProducto.getElementsByTagName("button")[0];
        
        botonAgregar.addEventListener("click", (e) => {
            // 1. Obtiene el ID del atributo 'data-id' del botón
            const idProducto = parseInt(e.currentTarget.dataset.id); 
            
            // 2. Busca el objeto completo en el arreglo global 'productos' 
            //    (que viene de productos.js)
            const productoCompleto = productos.find(p => p.id === idProducto);
            
            // 3. Llama a la función con el objeto completo
            if (productoCompleto) {
                agregarAlCarrito(productoCompleto);
            } 
        });  
    });
}


// Llama a la función para crear las tarjetas de productos al cargar la página
crearTarjetaProductosInicio(productos);
