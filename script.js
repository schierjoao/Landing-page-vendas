// Efeito de fade-in suave ao rolar a página
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Exemplo de clique no botão (opcional, pois já abre o WhatsApp)
document.querySelector(".btn-comprar").addEventListener("click", () => {
  console.log("Usuário clicou em comprar!");
});
