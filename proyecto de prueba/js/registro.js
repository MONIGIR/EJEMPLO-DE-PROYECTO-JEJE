// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('.form-container h1');

  const Username = document.querySelector("#Nombre");
  const email = document.querySelector("#correo");
  const password = document.querySelector("#contrasena"); // coincide con el id cambiado en HTML

  const btnRegistrar = document.getElementById('registrarse');
  const btnIniciar = document.getElementById('iniciar-sesion');

  // Cambiar H1 al hacer click en los botones
  btnRegistrar?.addEventListener('click', () => {
    if (titulo) titulo.textContent = 'Registro completado';
  });

  btnIniciar?.addEventListener('click', () => {
    if (titulo) titulo.textContent = 'Pantalla de inicio de sesión';
  });

  // Validaciones en blur (manteniendo la lógica corregida)
  if (Username) {
    Username.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.nextElementSibling;

      if (value.length === 0) {
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Necesita un nombre de usuario";
      } else {
        inputField.classList.remove("invalido");
        errorSpan.classList.remove("error");
        errorSpan.innerText = "";
      }
    });
  }

  if (email) {
    email.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.nextElementSibling;
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.length === 0) {
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Necesita un Email";
      } else if (!emailRegex.test(value)) {
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Introduzca un email valido";
      } else {
        inputField.classList.remove("invalido");
        errorSpan.classList.remove("error");
        errorSpan.innerText = "";
      }
    });
  }

  if (password) {
    password.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.nextElementSibling;

      if (value.length === 0) {
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Necesita una contraseña";
      } else {
        inputField.classList.remove("invalido");
        errorSpan.classList.remove("error");
        errorSpan.innerText = "";
      }
    });
  }
});
