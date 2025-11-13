
# CoolCenter – Prototipo Ecommerce (Vanilla JS)

Este demo cumple con:
- Página principal con *Ver inventario* y *Contacto*.
- Inventario (~20 productos) con búsqueda en tiempo real (AJAX `fetch`).
- Botón **Ver detalles** que abre el formulario de contacto con el mensaje precargado según el producto.
- **Carrito**: añadir desde tarjetas, editar cantidad y eliminar.
- **Registro/Login** con IndexedDB. Password con hash SHA‑256 (Web Crypto). Toastify para notificaciones.
- Validaciones HTML5 (required, type="email") y `reportValidity()`.

## Estructura
```
/css/styles.css
/js/db.js       (helper IndexedDB)
/js/auth.js     (hash + CRUD usuarios)
/js/inventory.js
/js/cart.js
/js/contact.js
/js/register.js
/js/login.js
index.html
inventory.html
contact.html
register.html
login.html
cart.html
products.json
```

## Cómo ejecutar localmente (recomendado para `fetch`)
1) **VS Code > Live Server** o ejecuta en terminal:
```bash
python -m http.server 5500
# Luego abre http://localhost:5500/mnt/data/cool-center-ecommerce/index.html
```
2) Navega a `index.html` y prueba el flujo completo.

> Nota: si abres el HTML con `file://` el `fetch` puede bloquearse por CORS; usa un servidor local.
