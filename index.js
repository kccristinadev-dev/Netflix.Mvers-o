const botao = document.getElementById("toggleTema");
const body = document.body;

botao.addEventListener("click", () => {
  body.classList.toggle("claro");

  // muda ícone
  if (body.classList.contains("claro")) {
    botao.textContent = "☀️";
  } else {
    botao.textContent = "🌙";
  }
});