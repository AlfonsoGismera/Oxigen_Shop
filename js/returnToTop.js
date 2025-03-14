export default function initReturnTop() {
    const returnTopBtn = document.getElementById('return-top-button');
    const footer = document.getElementById('footer'); 
  
    if (!returnTopBtn) return;
  
    // Al hacer clic, esperar 200ms y luego hacer scroll suave al top
    returnTopBtn.addEventListener('click', () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    });
  
    // Mostrar/ocultar el botón según la posición del scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          document.body.classList.add('top-position'); // Ocultar en la parte superior
        } else {
          document.body.classList.remove('top-position');
        }
      
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const footerVisible = footerRect.top < window.innerHeight;
      
          if (footerVisible) {
            returnTopBtn.style.opacity = 0; // Ocultar si el footer es visible
          } else {
            returnTopBtn.style.opacity = 0.7; // Mostrar si no está en el footer
          }
        }
      });
      
  }
  