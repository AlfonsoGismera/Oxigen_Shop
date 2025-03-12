export default function initMenu() {
  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Previene el comportamiento predeterminado del enlace
          const sectionId = this.getAttribute("data-section");
          console.log(sectionId);
          const section = document.getElementById(sectionId);
          console.log(section);
          if (section) {
              section.scrollIntoView({
                  behavior: "smooth",
              });
          }
      });
  });
}