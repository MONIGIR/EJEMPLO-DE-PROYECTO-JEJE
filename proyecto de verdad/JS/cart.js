const contenedorProductos = document.getElementById("productos-conteiner");


function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classlist = "tarjeta-producto";
        contenedorProductos.appendChild(nuevoProducto);
    });  
}



crearTarjetaProductosInicio(productos);

