const fechaInicio = new Date("2024-05-10"); // CAMBIA ESTA FECHA

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `Llevamos ${dias} días, ${horas} horas y ${minutos} minutos juntos 💜`;
}

setInterval(actualizarContador, 1000);

