let logo = document.getElementById("logo-link");
let link = document.getElementById("mylink");

logo.addEventListener("click", function () {
  window.location.href = "index.html";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseover", function () {
  logo.style.color = "var(--green)";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseout", function () {
  logo.style.color = "black";
});

link.addEventListener("mouseover", function () {
  link.style.color = "var(--green)";
  link.style.cursor = "pointer";
});

link.addEventListener("mouseout", function () {
  link.style.color = "black";
});
link.addEventListener("click", function () {
  window.location.href = "/html/more.html";
  link.style.cursor = "pointer";
});
