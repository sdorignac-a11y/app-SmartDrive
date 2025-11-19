function handleFakeLogin(event) {
  event.preventDefault();

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("dashboard-screen").classList.remove("hidden");

  return false;
}

function openConfig() {
  const section = document.getElementById("config-section");
  section.classList.toggle("hidden");
}

function selectLang(event) {
  const chips = document.querySelectorAll(".chip");
  chips.forEach(c => c.classList.remove("chip-active"));
  event.target.classList.add("chip-active");
}

const vol = document.getElementById("volumen");
const volVal = document.getElementById("volumen-valor");
if (vol && volVal) {
  vol.addEventListener("input", () => {
    volVal.textContent = vol.value;
  });
}

function saveConfig() {
  const lang = document.querySelector(".chip-active").dataset.lang;
  const modo = document.getElementById("modo-conduccion").checked;
  const volumen = document.getElementById("volumen").value;
  const ssid = document.getElementById("wifi-ssid").value;
  const pass = document.getElementById("wifi-pass").value;

  const config = { lang, modo, volumen, ssid, pass };
  localStorage.setItem("smartdriveConfig", JSON.stringify(config));

  alert("Configuración guardada ✔️");
}
