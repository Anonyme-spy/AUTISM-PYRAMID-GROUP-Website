let logo = document.getElementById("logo-link");

logo.addEventListener("click", function () {
  window.location.href = "index.html";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseover", function () {
  logo.style.color = "var(--green)";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseout", function () {
  logo.style.color = "white";
});
