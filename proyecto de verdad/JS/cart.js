const contenedorProductos = document.getElementById("productos-conteiner");


function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.className = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src= "/EJEMPLO-DE-PROYECTO-JEJE/images/h610 intel lga 1700 mini tx.jpg${producto.id}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(nuevoProducto);
    });  
}



crearTarjetaProductosInicio(productos);
