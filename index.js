// Verifica se isMobileActive no sessionStorage está como true
function isMobileActiveValid() {
  const value = sessionStorage.getItem("isMobileActive");
  return value === "true";
}

// Exemplo de uso
if (isMobileActiveValid()) {
    const elemento = document.querySelector("h1");
    if (elemento) {
        elemento.classList.remove("invisivel");
    }
}