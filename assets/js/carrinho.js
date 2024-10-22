document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.getElementById("buy-now-button");

  buyNowButton.addEventListener("click", function () {
    new Noty({
      text: "Redirecionando...",
      type: "success",
      layout: "topRight",
      theme: "metroui",
      timeout: 2000,
      progressBar: true,
    }).show();

    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "block";

    setTimeout(function () {
      window.location.href = "https://www.asaas.com/c/3927pv909mj7tcir";
      loadingScreen.style.display = "none";
    }, 2000);
  });
});
