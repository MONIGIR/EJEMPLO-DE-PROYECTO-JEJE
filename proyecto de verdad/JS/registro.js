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

    const usuario = {
      nombre: Username.value.trim(),
      correo: email.value.trim(),
      contrasena: password.value.trim()
    };

    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
    
    // Limpiar campos
    Username.value = '';
    email.value = '';
    password.value = '';
    
    // Cambiar título
    if (titulo) titulo.textContent = 'Registro completado';
    alert('Registro exitoso');
  });

  // Evento para iniciar sesión
  btnIniciar?.addEventListener('click', (e) => {
    e.preventDefault();

    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
    if (!usuarioGuardado) {
      alert('No hay ningún usuario registrado. Por favor, regístrese primero.');
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    // Validar credenciales (comparar después de trim)
    if (email.value.trim() === usuario.correo && password.value.trim() === usuario.contrasena) {
      if (titulo) titulo.textContent = `Bienvenido, ${usuario.nombre}`;
      alert('Inicio de sesión exitoso');
    } else {
      if (titulo) titulo.textContent = 'Error de credencial';
      alert('Correo o contraseña incorrectos');
    }
  });

  // Validación en blur para Username
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

  // Validación en blur para Email
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
        errorSpan.innerText = "Introduzca un email válido";
      } else {
        inputField.classList.remove("invalido");
        errorSpan.classList.remove("error");
        errorSpan.innerText = "";
      }
    });
  }

  // Validación en blur para Password
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