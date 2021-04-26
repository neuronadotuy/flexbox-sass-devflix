/** @format */

// Validar el formulario
const inputs = document.querySelectorAll("form .campo input");
console.log(inputs);

// Listener a los inputs
inputs.forEach((input) => {
  input.addEventListener("blur", validarInput);
});

inputs.forEach((input) => {
  input.addEventListener("input", validarInput);
});

function validarInput(e) {
  const estado = ["valido", "no-valido"];

  let clase;
  if (e.target.value.length === 0) {
    clase = estado[1];
  } else {
    clase = estado[0];
  }
  e.target.classList.remove(...estado);
  e.target.nextElementSibling.classList.remove(...estado);

  e.target.classList.add(clase);
  e.target.nextElementSibling.classList.add(clase);

  // Inyectar dinamicamente el div on el error
  if (clase === "no-valido") {
    if (e.target.parentElement.nextElementSibling.classList[0] !== "alerta") {
      // Error
      const errorDiv = document.createElement("div");
      errorDiv.appendChild(
        document.createTextNode("Este campo es obligatorio")
      );
      errorDiv.classList.add("alerta");
      // Insertar e error
      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    //Limpia el error si existe
    if (e.target.parentElement.nextElementSibling.classList[0] === "alerta") {
      e.target.parentElement.nextElementSibling.remove();
    }
  }
}

// Mostrar y Ocultar password
const mostrarPasswordBtn = document.querySelector("form .campo span");

mostrarPasswordBtn.addEventListener("click", (e) => {
  const passwordInput = document.querySelector("#password");

  if (e.target.classList.contains("mostrar")) {
    // mostrar el texto
    e.target.classList.remove("mostrar");
    // cambiar el texto
    e.target.textContent = "Ocultar";
    // cambiar a type password
    passwordInput.type = "text";
  } else {
    // mostrar el password
    e.target.classList.add("mostrar");
    // cambiar el texto
    e.target.textContent = "Mostrar";
    // cambiar a type password
    passwordInput.type = "password";
  }
});
