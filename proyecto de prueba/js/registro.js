document.addEventListener('DOMContentLoaded', () => {
    const signUp = document.getElementById('signUp')
        || document.querySelector('.sign-up')
        || document.querySelector('[data-action="sign-up"]');

    const signIn = document.getElementById('signIn')
        || document.querySelector('.sign-in')
        || document.querySelector('[data-action="sign-in"]');

    const nameField = document.getElementById('nameInput')
        || document.querySelector('.name-input')
        || document.querySelector('#name')
        || document.querySelector('input[name="name"]');

    const titleEl = document.getElementById('title')
        || document.querySelector('.title')
        || document.querySelector('.form-title')
        || document.querySelector('h2');

    function toSignIn() {
        if (nameField) {
            nameField.style.maxHeight = '0';
            nameField.setAttribute('aria-hidden', 'true');
        }
        if (titleEl) titleEl.textContent = 'Iniciar Sesión';
        if (signUp) signUp.classList.add('disabled');
        if (signIn) signIn.classList.remove('disabled');
    }

    function toSignUp() {
        if (nameField) {
            nameField.style.maxHeight = '500px';
            nameField.setAttribute('aria-hidden', 'false');
        }
        if (titleEl) titleEl.textContent = 'Registrarse';
        if (signUp) signUp.classList.remove('disabled');
        if (signIn) signIn.classList.add('disabled');
    }

    // Inicializa según clase active (opcional) o fija a registro/login por defecto
    if (signUp && signUp.classList.contains('active')) toSignUp();
    else if (signIn && signIn.classList.contains('active')) toSignIn();
    else toSignIn(); // cambia si quieres iniciar en "Registrarse"

    if (signIn) signIn.addEventListener('click', toSignIn);
    if (signUp) signUp.addEventListener('click', toSignUp);
});