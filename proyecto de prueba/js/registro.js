document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('.form-container h1');
  const Username = document.querySelector("#Nombre");
  const email = document.querySelector("#correo");
  const password = document.querySelector("#contrasena"); 
  const btnRegistrar = document.getElementById('registrarse');
  const btnIniciar = document.getElementById('iniciar-sesion');

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
  });

  btnIniciar?.addEventListener('click', () => {
    if (titulo) titulo.textContent = 'Pantalla de inicio de sesión';
  });


//  ---------------------------------------------------------------

  // Validaciones en blur
  /*
  En este espacio van todoas las validaciones, y señales de errores para los campos donde se ingresa 
  el nombre, email, contraseña.
  Ademas se agrego una funcion para validar que en el email se registre un texto que contenga un '@' '.ejemplo'

   */

  //funcion para generar un texto en rojo que muestre el mensaje "Necesita un nombre de usuario".
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
// -------------------------------------------------------



  //Funcion para generar un texto en rojo que muestre el mensaje "Necesita un email", "Introduzca un emailvalido".
  //en esta parte puso la verificacion del texto con las caracterizticas "@" ".ejemplo"
  if (email) {
    email.addEventListener("blur", function(e) {
      const input = e.target;
      const value = input.value.trim();
      const inputField = input.parentElement;
      const errorSpan = inputField.nextElementSibling;
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//aqui es donde se valida si el texto contiene los caracteres
//--------------------
//esta es la comprobacion en caso de que no se introduzca nada en el campo Email
      if (value.length === 0) {
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Necesita un Email";
    //---------------------------------------
      } else if (!emailRegex.test(value)) {//este  es para mostrar el mensaje de "Introduzca un email valido"
        inputField.classList.add("invalido");
        errorSpan.classList.add("error");
        errorSpan.innerText = "Introduzca un email valido";

//-------------------------
//En caso de que se cumpla los requerimientos se remueve los mensajes y se prosigue.        
      } else {
        inputField.classList.remove("invalido");
        errorSpan.classList.remove("error");
        errorSpan.innerText = "";
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
