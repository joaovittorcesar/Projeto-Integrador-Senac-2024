let unitPrice = 89.79;

function changeMainImg(source) {
  let mainImg = document.getElementById("mainImg");
  mainImg.src = source.src;
}

function updatePrice() {
  const quantityInput = document.getElementById("productQuantity");
  let quantity = parseInt(quantityInput.value, 10);
  if (quantity < 1) quantity = 1;
  else if (quantity > 12) quantity = 12;
  quantityInput.value = quantity;

  let totalPrice = unitPrice * quantity;
  let priceElement = document.getElementById("price");
  if (!priceElement) {
    priceElement = document.createElement("div");
    priceElement.id = "price";
    priceElement.className = "p-price";
    document
      .querySelector(".container")
      .insertBefore(
        priceElement,
        document.querySelector(".container").childNodes[1]
      );
  }
  priceElement.innerText = `R$ ${totalPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

document
  .getElementById("productQuantity")
  .addEventListener("input", updatePrice);

document.getElementById("addToCartBtn").addEventListener("click", function () {
  const colorSelect = document.getElementById("colorSelect");
  const selectedColor = colorSelect.value;
  const quantityInput = document.getElementById("productQuantity");
  const quantity = parseInt(quantityInput.value, 10);

  if (!selectedColor) {
    new Noty({
      text: "Por favor, escolha uma cor.",
      type: "error",
      layout: "topRight",
      theme: "metroui",
      timeout: 2000,
      progressBar: true,
    }).show();
  } else {
    new Noty({
      text: `O produto foi adicionado ao carrinho.`,
      type: "success",
      layout: "topRight",
      theme: "metroui",
      timeout: 2000,
      progressBar: true,
    }).show();

    async function handleAddToCart() {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      window.location.href = "/senac/frontend/pages/carrinho.html";
    }

    handleAddToCart();
  }
});

updatePrice();
