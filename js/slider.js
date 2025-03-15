export default function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.querySelector('.slider-dots');
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    // Generar puntos dinámicamente
    slides.forEach((slide, index) => {
      const dot = document.createElement('span');
      dot.dataset.index = index;
      if (index === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('span');
  
    // Función para actualizar el slider (mover imágenes y activar punto)
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
  
    // Eventos de botones
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
  
    // Evento para los puntos
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index, 10);
        updateSlider();
      });
    });
  
    // Autoplay: cambia de imagen cada 5 segundos
    let autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  
    // Pausar autoplay al pasar el mouse sobre el slider
    slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slider.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }, 5000);
    });
  }
  