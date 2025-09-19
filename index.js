setTimeout(() => {
  const teste = sessionStorage.getItem("isMobileActive");
  window.alert("isMobileActive:", teste);
}, 5000);

// // Função para verificar se isMobileActive está true
// function isMobileActiveValid() {
//   const value = sessionStorage.getItem("isMobileActive");
//   return value === "true";
// }

// // Função para buscar o token
// function qrCodeRead() {
//   return sessionStorage.getItem("token");
// }

// // Função para atualizar a interface
// function updateUI() {
//   const elemento = document.querySelector("h1");
//   const pElemento = document.querySelector("p");

//   if (isMobileActiveValid()) {
//     if (elemento) {
//       elemento.classList.remove("invisivel");
//     }

//     if (pElemento) {
//       const token = qrCodeRead();
//       if (token) {
//         pElemento.textContent = "QrCode Lido: " + token;
//         pElemento.classList.remove("invisivel");
//       }
//     }
//   } else {
//     if (elemento) {
//       elemento.classList.add("invisivel");
//     }
//     if (pElemento) {
//       pElemento.classList.add("invisivel");
//       pElemento.textContent = "";
//     }
//   }
// }

// // --- Monitoramento de sessionStorage ---
// // Sobrescreve métodos para detectar mudanças
// (function() {
//   const originalSetItem = sessionStorage.setItem;
//   sessionStorage.setItem = function(key, value) {
//     originalSetItem.apply(this, arguments);
//     window.dispatchEvent(new Event("sessionStorageChanged"));
//   };

//   const originalRemoveItem = sessionStorage.removeItem;
//   sessionStorage.removeItem = function(key) {
//     originalRemoveItem.apply(this, arguments);
//     window.dispatchEvent(new Event("sessionStorageChanged"));
//   };
// })();

// // Escuta mudanças no sessionStorage
// window.addEventListener("sessionStorageChanged", updateUI);

// // Executa na carga inicial
// updateUI();
