import { addRegistro, getUsuario } from './Basededatos_usuarios.js';

// seleccion de elementos del DOM
// y asignación de eventos para el registro e inicio de sesión
// DOM: Document Object Model o modelo de objetos del documento; utilizado para reaccionar a eventos
document.addEventListener('DOMContentLoaded', () => {
const titulo = document.querySelector('.form-container h1');
  const Username = document.querySelector("#Nombre");
  const email = document.querySelector("#correo");
  const password = document.querySelector("#contrasena"); 
  const btnRegistrar = document.getElementById('registrarse');
  const btnIniciar = document.getElementById('iniciar-sesion');

  // Evento para registrar usuario
btnRegistrar?.addEventListener('click', (e) => {
  e.preventDefault();
  if (Username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
      alert('Favor de rellenar todos los campos para registrarse');
    return;
  }

    // Validación de campos
    const usuario = {
      nombre: Username.value.trim(),
      correo: email.value.trim(),
      contrasena: password.value.trim()
    };
    // Guardar usuario en IndexedDB
    addRegistro(usuario)
      .then(() => {
        // Limpiar campos
        Username.value = '';
        email.value = '';
        password.value = '';

        // Cambiar título
        if (titulo) titulo.textContent = 'Registro completado';
        // Redirigir a la página de inicio después de un breve retraso
        setTimeout(() => {
          window.location.href = '../index.html';
        }, 1500);
        alert('Registro exitoso');
      })
      .catch((err) => {
        console.error('Error al guardar usuario', err);
        if (err && err.name === 'ConstraintError') {
          alert('Ya existe un usuario con ese correo.');
        } else {
          alert('Error registrando usuario. Intenta de nuevo.');
        }
      });
  });
  // Evento para iniciar sesión
  btnIniciar?.addEventListener('click', (e) => {
    e.preventDefault();

    getUsuario(email.value.trim())
      .then((usuario) => {
        if (!usuario) {
          alert('No hay ningún usuario registrado con ese correo. Por favor, regístrese primero.');
          return;
        }
        if (password.value.trim() === usuario.contrasena) {
          if (titulo) titulo.textContent = `Bienvenido, ${usuario.nombre}`;
          alert('Inicio de sesión exitoso');
          setTimeout(() => {
            window.location.href = '../index.html';
          }, 1500);
        } else {
          if (titulo) titulo.textContent = 'Error de credencial';
          alert('Correo o contraseña incorrectos');
        }
      })
      .catch((err) => {
        console.error('Error al obtener usuario', err);
        alert('Error al iniciar sesión. Intenta de nuevo.');
      });
  });

  // Validación para Username
  if (Username) {
    Username.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.parentElement.querySelector('.error-message');

      if (value.length === 0) {
        inputField.classList.add("invalido");
        if (errorSpan) {
          errorSpan.classList.add("error");
          errorSpan.textContent = "Necesita un Nombre de Usuario";
          errorSpan.setAttribute('role', 'alert');
        }
      } else {
        inputField.classList.remove("invalido");
        if (errorSpan) {
          errorSpan.classList.remove("error");
          errorSpan.textContent = "";
        }
      }
    });
  }

  // Validación para Email
  if (email) {
    email.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.parentElement.querySelector('.error-message');
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.length === 0) {
        inputField.classList.add("invalido");
        if (errorSpan) {
        errorSpan.classList.add("error");
          errorSpan.textContent = "Necesita un Email";
          errorSpan.setAttribute('role', 'alert');
        }
      } else if (!emailRegex.test(value)) {
        inputField.classList.add("invalido");
        if (errorSpan) {
        errorSpan.classList.add("error");
          errorSpan.textContent = "El formato de email no es válido";
          errorSpan.setAttribute('role', 'alert');
        }
      } else {
        inputField.classList.remove("invalido");
        if (errorSpan) {
          errorSpan.classList.remove("error");
          errorSpan.textContent = "";
        }
      }
    });
  }

  // Validación para Password
  if (password) {
    password.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.parentElement.querySelector('.error-message');

      if (value.length === 0) {
        inputField.classList.add("invalido");
        if (errorSpan) {
          errorSpan.classList.add("error");
          errorSpan.textContent = "Necesita una contraseña";
          errorSpan.setAttribute('role', 'alert');
        }
      } else {
        inputField.classList.remove("invalido");
        if (errorSpan) {
          errorSpan.classList.remove("error");
          errorSpan.textContent = "";
        }
      }
    });
  }
});