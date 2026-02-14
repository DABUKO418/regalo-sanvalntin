/* ================= MATRIX ================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01❤JANIERALLISON";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

let coloresPastel = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff","#ffc6ff"];
let modoFiesta = false;

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(modoFiesta){
    ctx.fillStyle = coloresPastel[Math.floor(Math.random()*coloresPastel.length)];
  } else {
    ctx.fillStyle = "#c77dff";
  }

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.985)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 70);

/* ================= TEXTO TIPO TERMINAL ================= */

const mensaje = `
"Te encontraría.
En cualquier tiempo.
En cualquier lugar.
Aunque tuviera que atravesar siglos...

Mi alma siempre sabría cómo volver a ti."

Porque no importa el destino,
no importa la época,
mi corazón siempre sabrá encontrarte.
`;

let i = 0;

function escribir() {
  if (i < mensaje.length) {
    document.getElementById("texto").innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribir, 90);
  }
}

escribir();

/* ================= CONTADOR ================= */

const fechaInicio = new Date("2024-05-10"); // CAMBIA LA FECHA

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

/* ================= BOTÓN ================= */

function mostrarImagen() {
  document.getElementById("imagen").style.display = "block";
  document.getElementById("card").classList.add("colorCambio");
  modoFiesta = true;

  document.getElementById("texto").innerHTML += 
  "\n\n>> Conexión eterna establecida 💜";
}

/* ================= MENSAJE SECRETO ================= */

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "j") {
    alert("Siempre serás mi destino, Allison 💜");
  }
});

/* ================= CAMBIO SEGÚN HORA ================= */

const hora = new Date().getHours();

if (hora >= 18 || hora < 6) {
  document.body.style.background = "black";
} else {
  document.body.style.background = "linear-gradient(45deg,#ffd6ff,#e7c6ff)";
}

