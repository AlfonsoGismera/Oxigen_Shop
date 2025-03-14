export default function formValidation() {
  document
    .getElementById("myform")
    .addEventListener("submit", function (event) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let consent = document.getElementById("consent").checked;
      let nameValid = true; //Tienen que iniciar en true
      let emailValid = true;
      let consentValid = true;

      // Limpiar mensajes de error previos
      document.querySelectorAll(".error-message").forEach((el) => el.remove());

      // Validación del nombre
      if (name.length < 2 || name.length > 100) {
        document.getElementById("name").style.borderColor = "red";
        let errorName = document.createElement("div");
        errorName.className = "error-message";
        errorName.style.color = "red";
        errorName.textContent = "El nombre debe tener entre 2 y 100 letras.";
        document.getElementById("name").parentNode.appendChild(errorName);
        nameValid = false;
      } else {
        document.getElementById("name").style.borderColor = "";
      }

      // Validación del correo electrónico
      let emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        document.getElementById("email").style.borderColor = "red";
        let errorEmail = document.createElement("div");
        errorEmail.className = "error-message";
        errorEmail.style.color = "red";
        errorEmail.textContent = "Correo electrónico no válido.";
        document.getElementById("email").parentNode.appendChild(errorEmail);
        emailValid = false;
      } else {
        document.getElementById("email").style.borderColor = "";
      }

      // Validación del checkbox
      if (!consent) {
        document.getElementById("consent").style.outlineColor = "red";
        let errorConsent = document.createElement("div");
        errorConsent.className = "error-message";
        errorConsent.style.color = "red";
        errorConsent.textContent = "Debes aceptar los términos.";
        document
          .getElementById("consent")
          .parentNode.parentNode.appendChild(errorConsent);
        consentValid = false;
      } else {
        document.getElementById("consent").style.outlineColor = "";
      }

      // Evitar el envío si algún campo no es válido
      if (!nameValid || !emailValid || !consentValid) {
        event.preventDefault();
      } else {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({ name, email, consent }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Suscripción exitosa:", data);
            // Aquí podrías mostrar un mensaje de éxito o redirigir, etc.
          })
          .catch((error) => {
            console.error("Error en la suscripción:", error);
          });
      }
    });
}
