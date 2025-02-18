const form = document.querySelector("#form");
const priceSection = document.querySelector(".prices-section");

const handleSubmit = (e) => {
  e.preventDefault();
  if (document.querySelector(".type-container")) {
    document.querySelector(".type-container").remove();
  }
  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData);

  const aio = Number(formObject.aio);
  const procesor = Number(formObject.procesador);
  const generacion = Number(formObject.generacion);
  const ssd = Number(formObject.disco1);
  let hdd = Number(formObject.disco2);
  const memRam = Number(formObject.ram);
  const memGrafica = Number(formObject.grafica);

  if (ssd !== 0) {
    if (hdd > 0) {
      hdd = hdd; // Suma si es positivo
    } else {
      hdd = 0; // No suma si es negativo
    }
  } else {
    hdd = hdd; // Suma o resta dependiendo del valor
  }
  let valorTotal =
    aio + procesor * generacion + memRam + memGrafica + ssd + hdd;

  const normalText =
    "Una configuración básica y asequible para tareas cotidianas como navegación web y procesamiento de documentos, como un PC de oficina o un mini PC.";

  const gamingText =
    "Diseñado para ofrecer un rendimiento óptimo en juegos modernos con gráficos de alta calidad.";

  const ultraText =
    "Configuración de gaming de alto standing, con diseños llamativos, gran ventilación y opciones personalizadas como refrigeración líquida y efectos de iluminación LED. Estos equipos destacan por su estética visualmente impactante y características únicas.";
  document.querySelector(".consejos").classList.add("display-none");
  const results = document.createElement("div");
  results.className = "type-container";
  results.innerHTML = `
    <div>
    <p class="type-select normal">Normal</p>
    <p class="type-select gaming">Gaming</p>
    <p class="type-select ultra">Ultra</p>
    </div>
    <p class="type-description">Selecciona una opción.</p>
    <p class="total-price"></p>
    `;
  priceSection.appendChild(results);
  const normalPrice = results.querySelector(".normal");
  const gamingPrice = results.querySelector(".gaming");
  const ultraPrice = results.querySelector(".ultra");

  normalPrice.addEventListener("click", (e) => {
    e.preventDefault();
    normalPrice.classList.add("active");
    gamingPrice.classList.remove("active");
    ultraPrice.classList.remove("active");
    results.querySelector(".type-description").textContent = normalText;
    results.querySelector(".total-price").textContent =
      valorTotal.toFixed(2) + " €";
  });
  gamingPrice.addEventListener("click", (e) => {
    e.preventDefault();
    gamingPrice.classList.add("active");
    normalPrice.classList.remove("active");
    ultraPrice.classList.remove("active");
    results.querySelector(".type-description").textContent = gamingText;
    results.querySelector(".total-price").textContent =
      (valorTotal * 1.2).toFixed(2) + " €";
  });
  ultraPrice.addEventListener("click", (e) => {
    e.preventDefault();
    ultraPrice.classList.add("active");
    gamingPrice.classList.remove("active");
    normalPrice.classList.remove("active");
    results.querySelector(".type-description").textContent = ultraText;
    results.querySelector(".total-price").textContent =
      (valorTotal * 1.4).toFixed(2) + " €";
  });
};
form.addEventListener("submit", handleSubmit);
