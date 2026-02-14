// ===== FECHA DE INICIO (CAMBIA ESTO POR LA TUYA) =====
const fechaInicio = new Date("2024-06-01T00:00:00");

// ===== CONTADOR =====
function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - fechaInicio;

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30);

  const restoDias = dias % 30;
  const restoHoras = horas % 24;
  const restoSegundos = segundos % 60;

  document.getElementById("contador").innerHTML =
    `${meses} meses 💜 ${restoDias} días 💕 ${restoHoras} horas ⏳ ${restoSegundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ===== BOTÓN =====
const boton = document.getElementById("btnDestino");
let activado = false;

boton.addEventListener("click", () => {
  if (activado) return; // EVITA TEXTO INFINITO

  activado = true;

  // Agrega animación pastel al texto principal
  document.body.classList.add("pastel-animado");

  // Activa animación del botón
  boton.classList.add("activo");

  // Mostrar mensaje una sola vez
  const mensaje = document.createElement("p");
  mensaje.innerText = "Conexión establecida 💖 Destino enlazado para siempre...";
  mensaje.style.marginTop = "20px";
  mensaje.style.fontWeight = "bold";

  document.body.appendChild(mensaje);
});
