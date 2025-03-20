export default async function initPopUp() {
  const saveSubscriptionState = true;

  const modal = document.getElementById("newsletter-modal");
  const closeButton = modal.querySelector(".close-button");
  const form = document.getElementById("newsletter-form");
  const subscriptionMessage = document.getElementById("subscription-message");

  let modalShown = false;
  //  Detener scroll
  const showModal = () => {
    if (!modalShown) {
        modal.classList.add("show");
        modalShown = true;
        document.body.classList.add("modal-open"); 
    }
};

const closeModal = () => {
    modal.classList.remove("show");
    if (saveSubscriptionState) localStorage.setItem("newsletterClosed", "true");
    document.body.classList.remove("modal-open"); 
};

  setTimeout(showModal, 5000);

  window.addEventListener("scroll", () => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && (window.scrollY / docHeight) * 100 >= 25) {
      showModal();
    }
  });

  closeButton.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
  });

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
