// Função para exibir um popup após o envio do formulário
function mostrarPopup(mensagem) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
      <div class="popup-content">
        <p>${mensagem}</p>
        <button onclick="fecharPopup()">Fechar</button>
      </div>
    `;
  document.body.appendChild(popup);
}

// Função para fechar o popup
function fecharPopup() {
  const popup = document.querySelector(".popup");
  popup.remove();
}

// Evento de teclado: Captura a tecla pressionada e exibe no console
document.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada: ${event.key}`);
});

// Evento de mouse: Ao passar o mouse por cima do título da tabela de mudas
const tabela = document.querySelector("table");
tabela.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "TH") {
    event.target.style.backgroundColor = "#4d9a8d";
  }
});
tabela.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "TH") {
    event.target.style.backgroundColor = "#76c893";
  }
});

// Função para capturar e exibir os dados do formulário em formato JSON
function processarFormulario(event) {
  event.preventDefault(); // Evita o envio do formulário para não recarregar a página

  const form = event.target;
  const formData = new FormData(form);
  const dados = {};

  formData.forEach((value, key) => {
    dados[key] = value;
  });

  const dadosJSON = JSON.stringify(dados);
  console.log("Dados do formulário em JSON:", dadosJSON);

  // Exibindo o popup após o envio
  mostrarPopup("Formulário enviado com sucesso!");
}

// Adicionando o evento de submit no formulário
const formulario = document.querySelector("form");
if (formulario) {
  formulario.addEventListener("submit", processarFormulario);
}

// Função para alternar a visibilidade da seção de mudas (visibilidade dinâmica)
function toggleTabela() {
  const tabelaMudas = document.getElementById("tabela-mudas");
  if (tabelaMudas.style.display === "none") {
    tabelaMudas.style.display = "block";
  } else {
    tabelaMudas.style.display = "none";
  }
}

// Função para ajustar o comportamento da tela inicial com o clique no botão
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    toggleTabela();
  });
}
// Evita a rolagem para o topo ao clicar nos links
document
  .getElementById("termsLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão
    alert("Aqui estão os Termos de Uso!"); // Exemplo de ação ao clicar
  });

document
  .getElementById("privacyLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão
    alert("Aqui está a Política de Privacidade!"); // Exemplo de ação ao clicar
  });
document.getElementById("exploreNow").addEventListener("click", function () {
  window.location.href =
    "https://www.google.com/search?q=plantas&sca_esv=c4d6492e3645bd9e&rlz=1C1GCEA_enBR1143BR1143&udm=28&biw=1536&bih=703&sxsrf=AHTn8zrihK9LBn-bKu_SZeVc5QK--PMWSA%3A1738211090915&ei=Ev-aZ_zHN66e5OUPtPDn-Qo&ved=0ahUKEwj8mPn0zJyLAxUuD7kGHTT4Oa8Q4dUDCBA&uact=5&oq=plantas&gs_lp=Ehlnd3Mtd2l6LW1vZGVsZXNzLXNob3BwaW5nIgdwbGFudGFzMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI5QFQAFgAcAB4AZABAJgBrQGgAa0BqgEDMC4xuAEDyAEA-AEBmAIBoAK8AZgDAJIHAzAuMaAHlQU&sclient=gws-wiz-modeless-shopping";
});
