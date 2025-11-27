const contenedorProductos = document.getElementById("productos-conteiner");


function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classlist = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src= "/EJEMPLO-DE-PROYECTO-JEJE/images/h610 intel lga 1700 mini tx.jpg${producto.id}.jpg">
        contenedorProductos.appendChild(nuevoProducto);
    });  
}



crearTarjetaProductosInicio(productos);
