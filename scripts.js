// AzDev Coder - interações
document.getElementById("year") &&
  (document.getElementById("year").textContent = new Date().getFullYear());

// Brief -> WhatsApp
const brief = document.getElementById("briefForm");
if (brief) {
  brief.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("bNome").value.trim();
    const empresa = document.getElementById("bEmpresa").value.trim();
    const zap = document.getElementById("bZap").value.trim();
    const email = document.getElementById("bEmail").value.trim();
    const sol = document.getElementById("bSol").value;
    const msg = document.getElementById("bMsg").value.trim();
    const texto = `Olá! Sou ${nome}${empresa ? " da " + empresa : ""}.\nWhatsApp: ${zap}\nE-mail: ${email}\nSolução: ${sol}\nDesafio: ${msg}`;
    window.open(
      `https://wa.me/5544988469950?text=${encodeURIComponent(texto)}`,
      "_blank",
    );
  });
}
