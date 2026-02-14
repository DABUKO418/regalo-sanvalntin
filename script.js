document.addEventListener("DOMContentLoaded", function () {

  // ===== FECHA DE INICIO =====
  const fechaInicio = new Date("2024-06-01T00:00:00");

  // ===== CONTADOR =====
  function actualizarContador() {
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    const segundosTotales = Math.floor(diferencia / 1000);
    const horasTotales = Math.floor(segundosTotales / 3600);
    const diasTotales = Math.floor(horasTotales / 24);
    const meses = Math.floor(diasTotales / 30);

    const dias = diasTotales % 30;
    const horas = horasTotales % 24;
    const segundos = segundosTotales % 60;

    const contador = document.getElementById("contador");
    if (contador) {
      contador.innerHTML =
        `${meses} meses 💜 ${dias} días 💕 ${horas} horas ⏳ ${segundos} segundos`;
    }
  }

  setInterval(actualizarContador, 1000);
  actualizarContador();

  // ===== BOTÓN DESTINO =====
  const boton = document.getElementById("btnDestino");
  let activado = false;

  if (boton) {
    boton.addEventListener("click", function () {

      if (activado) return;
      activado = true;

      // Activar animación botón
      boton.classList.add("activo");

      // Activar colores pastel en TODO el contenedor principal
      const contenedor = document.querySelector(".contenedor");
      if (contenedor) {
        contenedor.classList.add("pastel-animado");
      }

      // Crear mensaje UNA SOLA VEZ
      const mensaje = document.createElement("p");
      mensaje.innerText = "Conexión establecida 💖 Destino enlazado para siempre...";
      mensaje.style.marginTop = "25px";
      mensaje.style.textAlign = "center";
      mensaje.style.fontWeight = "bold";

      document.body.appendChild(mensaje);
    });
  }

});
const texto = `Eres mi hogar... y siempre lo serás.
Aunque el tiempo nos separe, mi corazón siempre sabrá encontrarte.
Porque donde tú estés... ahí está mi eternidad. 💜`;

let i = 0;
const velocidad = 60;
const textoElemento = document.getElementById("textoMaquina");

function escribirTexto() {
  if (i < texto.length) {
    textoElemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, velocidad);
  }
}

escribirTexto();

