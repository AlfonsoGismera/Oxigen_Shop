export default function initMenu() {
  console.log("initMenu running");

  // Event listener para los links del menú
  const menuLinks = document.querySelectorAll(".header__menu-item a"); // Selector mejorado
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      console.log("Sección a mostrar:", sectionId);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn("No se encontró la sección con id:", sectionId);
      }
    });
  });

  // Event listener para el botón hamburguesa
  const botonHamburguesa = document.getElementById("buguer_buton");
  const navMenu = document.getElementById("nav_button");

  if (botonHamburguesa && navMenu) {
    botonHamburguesa.addEventListener("click", function () {
      console.log("Botón hamburguesa clicado");
      navMenu.classList.toggle("header__nav--active");

      // Cambiar la imagen según el estado del menú
      const imgBtn = botonHamburguesa.querySelector(".header__menu-imagen");
      if (navMenu.classList.contains("header__nav--active")) {
        imgBtn.src = "./img/Menu_Close.svg"; // Imagen de la X
      } else {
        imgBtn.src = "./img/Menu.svg"; // Imagen del menú hamburguesa
      }
    });
  } else {
    console.error("No se encontro el elemento");
  }
}
