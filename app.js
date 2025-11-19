function handleFakeLogin(event) {
  event.preventDefault();

  // Ocultar login, mostrar dashboard
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("dashboard-screen").classList.remove("hidden");
  return false;
}

function openConfig() {
  document.getElementById("config-section").classList.toggle("hidden");
}

function selectLang(event) {
  event.preventDefault();
  const buttons = document.querySelectorAll(".chip");
  buttons.forEach((btn) => btn.classList.remove("chip-active"));
  event.target.classList.add("chip-active");
}

const volumenInput = document.getElementById("volumen");
const volumenValor = document.getElementById("volumen-valor");
if (volumenInput && volumenValor) {
  volumenInput.addEventListener("input", () => {
    volumenValor.textContent = volumenInput.value;
  });
}

function saveConfig() {
  const langBtn = document.querySelector(".chip.chip-active");
  const idioma = langBtn ? langBtn.dataset.lang : "es-AR";
  const modo = document.getElementById("modo-conduccion").checked;
  const volumen = document.getElementById("volumen").value;
  const wifiSsid = document.getElementById("wifi-ssid").value;
  const wifiPass = document.getElementById("wifi-pass").value;

  const config = { idioma, modo, volumen, wifiSsid, wifiPass };
  console.log("Configuración guardada (demo):", config);
  localStorage.setItem("smartdriveConfig", JSON.stringify(config));
  alert("Configuración guardada en modo demo (localStorage).");
}
