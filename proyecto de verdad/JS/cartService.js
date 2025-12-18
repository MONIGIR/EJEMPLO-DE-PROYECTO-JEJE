


// Variable global que apunta al elemento donde se muestra la cuenta total

const cuentaCarrito = document.getElementById('cuenta-carrito');

//FUNCIÓN: getNuevoProductoParaMemoria 
// Crea una COPIA del producto para evitar mutar el objeto original.
function getNuevoProductoParaMemoria(producto) {
    return {
        ...producto, // Copia todas las propiedades del producto original
        cantidad: 1  // Asigna la cantidad inicial
    };
}

//FUNCIÓN DE ACTUALIZACIÓN VISUAL: actualizarNumeroCarrito 
// Calcula y muestra el total de productos en el carrito.
function actualizarNumeroCarrito() {
    //Si localStorage es null/vacío, usa [] para evitar el error NaN.
    const memoria = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Asegura que solo se sumen números válidos (previene NaN).
    const cuenta = memoria.reduce((acum, acurrent) => {
        // Verifica si la cantidad es un número entero válido, si no, usa 0.
        const cantidadValida = Number.isInteger(acurrent.cantidad) ? acurrent.cantidad : 0;
        return acum + cantidadValida;
    }, 0);
    
    // Actualiza el elemento HTML si existe
    if (cuentaCarrito) {
        cuentaCarrito.innerText = cuenta;
    }
}

//FUNCIÓN PRINCIPAL: agregarAlCarrito 
// Añade un producto (objeto) al carrito o incrementa su cantidad.
function agregarAlCarrito(producto) {
    // Inicializa la memoria (si es null, usa un array vacío [])
    const memoria = JSON.parse(localStorage.getItem('productos')) || []; 

    // Busca el índice del producto usando su ID
    const indiceProducto = memoria.findIndex(p => p.id === producto.id);
    
    //Crea una copia del array de memoria ANTES de modificar (inmutabilidad).
    let nuevaMemoria = [...memoria]; 

    // Caso en el que producto no está en el carrito
    if (indiceProducto === -1) {
        // Agrega el nuevo producto (con cantidad 1)
        nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
    } 
    // Caso en el que producto ya existe en el carrito
    else {
        // Incrementa la cantidad del producto existente
        nuevaMemoria[indiceProducto].cantidad++;
    }

    //Guarda el array COMPLETO y actualizado (nuevaMemoria)
    localStorage.setItem('productos', JSON.stringify(nuevaMemoria));

    // Llama a la función de actualización
    actualizarNumeroCarrito();
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem('productos')); 
    const indiceProducto = memoria.findIndex(p => p.id === producto.id);
    if(indiceProducto === -1) return; // Si el producto no está, no hace nada
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto, 1);
        localStorage.setItem('productos', JSON.stringify(memoria));
    } else {
        memoria[indiceProducto].cantidad--;
        localStorage.setItem('productos', JSON.stringify(memoria));
    }
    actualizarNumeroCarrito();
}
// Opcional: Función para limpiar el carrito (útil para debug y errores antiguos)
function limpiarCarrito() {
    localStorage.removeItem('productos');
    actualizarNumeroCarrito(); 
    console.log('¡Carrito limpiado! Recarga la página y prueba de nuevo.');
}

actualizarNumeroCarrito(); // Inicializa el contador al cargar la pagina