export default function initScroller() {
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // Recoge el valor de la pagina total
    const clientHeight = document.documentElement.clientHeight || window.innerHeight; // Recoge el valor de la pagina actual
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calcula el porcentaje de la pagina que se ha recorrido
  
    document.querySelector(".progress").style.width = scrolled + "%";
  });
}