document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.querySelector("#nombre");
    const correoInput = document.querySelector("#correo");
    const mensajeInput = document.querySelector("#mensaje");
    const btnEnviar = document.getElementById('enviar');

    function esEmailValido(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    btnEnviar?.addEventListener('click', (e) => {
        e.preventDefault();
        if (!nombreInput || !correoInput || !mensajeInput) return;

        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        if (!nombre || !correo || !mensaje) {
            alert('Por favor, rellene todos los campos antes de enviar el mensaje.');
            if (!nombre) nombreInput.focus();
            else if (!correo) correoInput.focus();
            else mensajeInput.focus();
            return;
        }

        if (!esEmailValido(correo)) {
            alert('Ingrese un correo electrónico válido.');
            correoInput.focus();
            return;
        }

        // Ejemplo: almacenar en localStorage
        try {
            const mensajes = JSON.parse(localStorage.getItem('mensajes_contacto') || '[]');
            mensajes.push({ nombre, correo, mensaje, fecha: new Date().toISOString() });
            localStorage.setItem('mensajes_contacto', JSON.stringify(mensajes));
        } catch (err) {
            console.error('Error guardando mensaje:', err);
        }

        alert('Mensaje enviado con éxito. Gracias por contactarnos.');
        window.location.href = '../index.html';
        // Limpiar campos
        nombreInput.value = '';
        correoInput.value = '';
        mensajeInput.value = '';
    });
});