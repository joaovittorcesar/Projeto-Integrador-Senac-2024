const data = [
  "Carregador de Celular USB-C",
  "Carregador Rápido para iPhone",
  "Ring Light LED para Vídeos",
  "Suporte para Celular de Mesa",
  "Microfone Condensador USB",
  "Luz de Fundo LED para Câmera",
  "Cabo HDMI 4K",
  "Adaptador de Áudio Bluetooth",
  "Carregador Portátil Power Bank",
  "Tripé para Câmera",
  "Suporte para Notebook Ajustável",
  "Lâmpada LED Inteligente",
  "Hub USB 3.0",
  "Fone de Ouvido com Microfone",
  "Cabo de Carregamento para Laptop"
];

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  results.innerHTML = "";

  if (query) {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query)
    );
    filteredData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = item;
      results.appendChild(div);
    });
    results.classList.add("show");
  } else {
    results.classList.remove("show");
  }
});

document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target) && !results.contains(e.target)) {
    results.classList.remove("show");
  }
});
