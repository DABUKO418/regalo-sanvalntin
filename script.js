/* ================= MATRIX ================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01❤JANIERALLISON";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

const coloresPastel = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff","#ffc6ff"];
let modoFiesta = false;

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = modoFiesta
    ? coloresPastel[Math.floor(Math.random() * coloresPastel.length)]
    : "#c77dff";

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.985)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 70);

/* ================= TEXTO OUTLANDER ================= */

const mensaje = `
"Te encontraría.
En cualquier tiempo.
En cualquier lugar.
Aunque tuviera que atravesar siglos...

Mi alma siempre sabría cómo volver a ti."

Porque no importa el destino,
ni la época,
mi corazón siempre sabrá encontrarte.
`;

let i = 0;

function escribir() {
  if (i < mensaje.length) {
    document.getElementById("texto").innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribir, 110);
  }
}

escribir();

/* ================= CONTADOR ================= */

const fechaInicio = new Date("2024-05-10T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const segundosTotales = Math.floor(diferencia / 1000);
  const horasTotales = Math.floor(segundosTotales / 3600);
  const diasTotales = Math.floor(horasTotales / 24);
  const meses = Math.floor(diasTotales / 30);

  const dias = diasTotales % 30;
  const horas = horasTotales % 24;
  const segundos = segundosTotales % 60;

  document.getElementById("contador").innerHTML =
    `${meses} meses 💜 ${dias} días 💕 ${horas} horas ⏳ ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* ================= BOTÓN ================= */

let yaActivado = false;

function mostrarImagen() {
  if (yaActivado) return;
  yaActivado = true;

  document.getElementById("imagen").style.display = "block";
  document.getElementById("card").classList.add("colorCambio");
  modoFiesta = true;

  document.getElementById("mensajeFinal").innerHTML =
    "Conexión establecida 💖 Destino enlazado para siempre...";
}

