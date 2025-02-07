// Variáveis globais para armazenar o carrinho
let cart = [];

// Função para atualizar o resumo do carrinho na página
function updateCartSummary() {
  const cartSummary = document.getElementById("cart-summary");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    cartSummary.textContent = "Você ainda não adicionou nenhum produto.";
    checkoutBtn.style.display = "none"; // Esconde o botão de checkout se o carrinho estiver vazio
  } else {
    const totalItems = cart.length;
    const totalPrice = cart.reduce(
      (sum, item) => sum + parseFloat(item.price),
      0
    );

    cartSummary.textContent = `Você tem ${totalItems} produto(s) no carrinho. Total: R$ ${totalPrice.toFixed(
      2
    )}`;
    checkoutBtn.style.display = "inline-block"; // Exibe o botão de checkout
  }
}

// Função para adicionar um item ao carrinho
function addToCart(product, price) {
  cart.push({ product, price });
  updateCartSummary();
}

// Função de confirmação ao clicar em "Finalizar Compra"
function confirmCheckout() {
  if (cart.length === 0) {
    alert(
      "Seu carrinho está vazio. Adicione produtos antes de finalizar a compra."
    );
  } else {
    const totalPrice = cart.reduce(
      (sum, item) => sum + parseFloat(item.price),
      0
    );
    const confirmation = confirm(
      `Você tem ${
        cart.length
      } produto(s) no carrinho. Total: R$ ${totalPrice.toFixed(
        2
      )}. Deseja finalizar a compra?`
    );

    if (confirmation) {
      alert("Compra finalizada com sucesso!"); // Mock da finalização
      cart = []; // Limpa o carrinho
      updateCartSummary(); // Atualiza o resumo do carrinho após a compra
    } else {
      alert("Compra cancelada.");
    }
  }
}

// Adiciona evento de clique nos botões de "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.getAttribute("data-product");
    const productPrice = event.target.getAttribute("data-price");

    // Chama a função para adicionar o item ao carrinho
    addToCart(productName, productPrice);
  });
});

// Adiciona evento de clique no botão de "Finalizar Compra"
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", confirmCheckout);

// Inicializa o resumo do carrinho ao carregar a página
updateCartSummary();
