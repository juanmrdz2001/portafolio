function irProyectos() {
  const destino = document.getElementById("proyectos");

  window.scrollTo({
    top: destino.offsetTop - 80,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const etiquetas = document.querySelectorAll(".etiquetaTecnologia");

  if (etiquetas.length === 0) {
    return;
  }

  let etiquetaActual = 0;

  function iluminarSiguienteEtiqueta() {
    etiquetas.forEach((etiqueta) => {
      etiqueta.classList.remove("iluminada");
    });

    etiquetas[etiquetaActual].classList.add("iluminada");

    etiquetaActual = (etiquetaActual + 1) % etiquetas.length;
  }

  iluminarSiguienteEtiqueta();

  setInterval(iluminarSiguienteEtiqueta, 850);
});

document.addEventListener("DOMContentLoaded", () => {
  const logosFaro = document.querySelectorAll(".logoTecnologiaFaro");

  if (logosFaro.length === 0) {
    return;
  }

  let logoActual = 0;

  function cambiarLogoFaro() {
    logosFaro.forEach((logo) => {
      logo.classList.remove("activo");
    });

    logosFaro[logoActual].classList.add("activo");

    logoActual++;

    if (logoActual >= logosFaro.length) {
      logoActual = 0;
    }
  }

  cambiarLogoFaro();

  setInterval(cambiarLogoFaro, 1800);
});
