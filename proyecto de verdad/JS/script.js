const botonMenu = document.getElementById("menu-btn");
const enlacesNav = document.getElementById("nav-links");

enlacesNav.addEventListener("click", (evento) => {
  enlacesNav.classList.remove("open");
  iconoBotonMenu.setAttribute("class", "ri-menu-line");
});

const opcionesScrollReveal = {
  distance: "100px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...opcionesScrollReveal,
});

ScrollReveal().reveal(".header__container p", {
  ...opcionesScrollReveal,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...opcionesScrollReveal,
  delay: 100,
});

ScrollReveal().reveal(".header__container a", {
  ...opcionesScrollReveal,
  delay: 1500,
});

const carrusel = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
