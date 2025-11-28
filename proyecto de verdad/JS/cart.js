const contenedorProductos = document.getElementById("productos-container");


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
    });  
}



crearTarjetaProductosInicio(productos);
