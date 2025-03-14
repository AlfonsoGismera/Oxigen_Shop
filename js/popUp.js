export default async function initPopUp() {
  // cambia a true para guardar el estado en localStorage
  const saveSubscriptionState = false;

  //  descomenta estas líneas para activar el modal solo una vez
  // if (saveSubscriptionState && localStorage.getItem('newsletterClosed') === 'true') return;

  const modal = document.getElementById("newsletter-modal");
  const closeButton = modal.querySelector(".close-button");
  const form = document.getElementById("newsletter-form");
  const subscriptionMessage = document.getElementById("subscription-message");

  let modalShown = false;

  const showModal = () => {
    if (!modalShown) {
      modal.classList.add("show");
      modalShown = true;
    }
  };

  const closeModal = () => {
    modal.classList.remove("show");
    if (saveSubscriptionState) localStorage.setItem("newsletterClosed", "true");
  };


  setTimeout(showModal, 5000);


  window.addEventListener("scroll", () => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && (window.scrollY / docHeight) * 100 >= 25) {
      showModal();
    }
  });

  // Cerrar modal con botón X
  closeButton.addEventListener("click", closeModal);

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Cerrar modal con tecla ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ email: form.email.value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Suscripción exitosa:", data);
        subscriptionMessage.classList.remove("hidden");
        if (saveSubscriptionState)
          localStorage.setItem("newsletterClosed", "true");
        form.reset();
      })
      .catch((error) => console.error("Error en la suscripción:", error));
  });
}
