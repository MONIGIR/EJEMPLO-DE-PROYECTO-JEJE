// javaScripr para las funciiones dentro del carrito de compras

const contenedorProductos = document.getElementById("productos-container");

function crearTarjetaProductosInicio(){
    const productosJSON = localStorage.getItem('productos');
    // Aseguramos que si no hay datos o no son válidos, sea un array vacío
    const productos = productosJSON ? JSON.parse(productosJSON) : [];
    console.log(productos);

    if (Array.isArray(productos) && productos.length > 0) {
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
            
            // CORRECCIÓN CLAVE: Pasamos el objeto 'producto' que se está iterando
            nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto)); 
        });
    } else {
        contenedorProductos.innerHTML = "<p>No hay productos disponibles.</p>";
    }
}


crearTarjetaProductosInicio();