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
// -----------------------------------------------------------
/*
En este espacio se haran todos los enlaces y funciones para guardar los datos de registro e inicio de sesion.
*/

// en este espacio llamamos a un evento para registrar los datos ingresados en los campos de texto
// en donde utilizaremos el if para validar que los campos no esten vacios y ademas utilizaremos el
// .trim para eliminar los espacios en blanco que se puedan generar al momento de ingresar los datos.
btnRegistrar?.addEventListener('click', (e) => {
  e.preventDefault();
  if (Username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
  alert('favorde rellenar todos los campos para registrarse');
  return;
  }
//Utilizando un objeto o un TDA guardaremos los datos ingresados en los campos de texto.
// para su posterior uso.
  const usuario = {
    nombre: Username.value.trim(),
    correo: email.value.trim(),
    contrasena: password.value.trim()
  };

<<<<<<< HEAD
// aqui se guardaran los datos en el local storage del navegador.
  localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

// buffer para limpiar los campos de registro despues de guardar los datos.
  Username.value = '';
  email.value = '';
  password.value = '';
});

//------------------------------------------------------------
//------------------------------------------------------------
// Iniciando sesion
// en este espacio se hara la validacion de los datos ingresados en los campos de texto
btnIniciar?.addEventListener('click', (e) => {
  e.preventDefault();

// Aqui se recuperan los datos guardados en el local storage
  const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
  if (!usuarioGuardado) {  //utilizamos el if para comprobar si hay datos guardados
    alert('No hay ningun usuario registrado. Por favor, registrese primero.');//en caso de no tener algun dato guardado manda una alerta
    return;
  }

  const usuario = JSON.parse(usuarioGuardado);// parseamos los datos guardados para su uso devolviendo los datos a una variable

// Validacion de los datos ingresados con los datos guardados
  if (email.value === usuario.correo && password.value === usuario.contrasena) {
=======
    // Validación de campos
    const usuario = {
      nombre: Username.value.trim(),
      correo: email.value.trim(),
      contrasena: password.value.trim()
    };
    // Guardar usuario en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed
    
    if (titulo) titulo.textContent = `Bienvenido, ${usuario.nombre}`;//cambiamos el titulo para dar la bienvenida al usuario
    alert('Inicio de sesión exitoso');
  } else {
    if(titulo) titulo.textContent = 'error de credencial';//en caso de error se mantiene el titulo original
  alert('Correo o contraseña incorrectos');
  }
});
//------------------------------------------------------------
  /*
Aqui se hacen los enlaces de los botones con el javascript.
Cualquier cosa, yo digo que le pregunten a gemini o chatgpt, no me acuerdo de todo el cagadero que hice.
  */
//------------------------------------------------------------

// aqui se empieza a crear codigo perron
//   funcion para cambiar el nombre del menu segun el boton que utilicemos.
/*
en este caso utilizaremos un evento que buscara en todo momento cuando hagamos un click en los botones de 
registrarse o iniciar sesion.

por lo cual utilizaremos un if para que haga la busqueda y que genere el cambio con el titulo.textContent
*/
  btnRegistrar?.addEventListener('click', () => {
    if (titulo) titulo.textContent = 'Registro completado';
<<<<<<< HEAD
=======
  // Redirigir a la página de inicio después de un breve retraso
    setTimeout(() => {
      window.location.href = '/index.html';
    }, 1500);
    alert('Registro exitoso');
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed
  });
<<<<<<< HEAD

  btnIniciar?.addEventListener('click', () => {
    if (titulo) titulo.textContent = 'Pantalla de inicio de sesión';
  });
=======
  // Evento para iniciar sesión
  btnIniciar?.addEventListener('click', (e) => {
    e.preventDefault();
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed


//  ---------------------------------------------------------------

<<<<<<< HEAD
  // Validaciones en blur
  /*
  En este espacio van todoas las validaciones, y señales de errores para los campos donde se ingresa 
  el nombre, email, contraseña.
  Ademas se agrego una funcion para validar que en el email se registre un texto que contenga un '@' '.ejemplo'
=======
    // Validar credenciales (comparar después de trim)
    if (email.value.trim() === usuario.correo && password.value.trim() === usuario.contrasena) {
      if (titulo) titulo.textContent = `Bienvenido, ${usuario.nombre}`;
      alert('Inicio de sesión exitoso');
      // Redirigir a la página principal después de un breve retraso
      setTimeout(() => {
        window.location.href = '/index.html';
      }, 1500);
    } else {
      if (titulo) titulo.textContent = 'Error de credencial';
      alert('Correo o contraseña incorrectos');
    }
  });
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed

   */

  //funcion para generar un texto en rojo que muestre el mensaje "Necesita un nombre de usuario".
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
// -------------------------------------------------------



  //Funcion para generar un texto en rojo que muestre el mensaje "Necesita un email", "Introduzca un emailvalido".
  //en esta parte puso la verificacion del texto con las caracterizticas "@" ".ejemplo"
  if (email) {
    email.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
<<<<<<< HEAD
      const errorSpan = inputField.nextElementSibling;
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//aqui es donde se valida si el texto contiene los caracteres
//--------------------
//esta es la comprobacion en caso de que no se introduzca nada en el campo Email
=======
      const errorSpan = inputField.parentElement.querySelector('.error-message');
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed
      if (value.length === 0) {
        inputField.classList.add("invalido");
<<<<<<< HEAD
        errorSpan.classList.add("error");
        errorSpan.innerText = "Necesita un Email";
    //---------------------------------------
      } else if (!emailRegex.test(value)) {//este  es para mostrar el mensaje de "Introduzca un email valido"
=======
        if (errorSpan) {
          errorSpan.classList.add("error");
          errorSpan.textContent = "Necesita un Email";
          errorSpan.setAttribute('role', 'alert');
        }
      } else if (!emailRegex.test(value)) {
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed
        inputField.classList.add("invalido");
<<<<<<< HEAD
        errorSpan.classList.add("error");
        errorSpan.innerText = "Introduzca un email valido";

//-------------------------
//En caso de que se cumpla los requerimientos se remueve los mensajes y se prosigue.        
=======
        if (errorSpan) {
          errorSpan.classList.add("error");
          errorSpan.textContent = "El formato de email no es válido";
          errorSpan.setAttribute('role', 'alert');
        }
>>>>>>> e273d4ee01336860ef5eb08b6598de9f9dd47eed
      } else {
        inputField.classList.remove("invalido");
        if (errorSpan) {
          errorSpan.classList.remove("error");
          errorSpan.textContent = "";
        }
      }
    });
  }
//-----------------------------------------------------------------
// es lo mismo que se utilizo con el error de nombre y demas.

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