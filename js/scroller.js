export default function initScroller() {
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  
    document.querySelector(".progress").style.width = scrolled + "%";
  });
}