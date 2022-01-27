const pratos = document.getElementsByClassName("prato");
const bebidas = document.getElementsByClassName("bebida");
const sobremesas = document.getElementsByClassName("sobremesa");
const buttonConfirm = document.getElementById("button-confirm");
const popUpConfirmation = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const check_dish = document.querySelectorAll(".check-dish");
const check_drink = document.querySelectorAll(".check-drink");
const check_dessert = document.querySelectorAll(".check-dessert");
const nomePedidos = document.querySelector(".nome-pedido").children;
const precoPedidos = document.querySelector(".preco-pedido").children;
const precoTotalPedidos = document.querySelector(".total-pedido").children;
let somaPrecoTotal = 0;
let nome;
let endereço;

let menu_price = [
  { title: "", price: "" },
  { title: "", price: "" },
  { title: "", price: "" },
];
let isConfirm = [false, false, false];

function handleDish(el) {
  const prato = document.getElementById(el);
  menu_price[0].title = prato.childNodes[3].childNodes[3].innerHTML;
  menu_price[0].price = prato.childNodes[3].childNodes[7].innerHTML;
  isConfirm[0] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (pratos[i].id === el) {
      prato.classList.add("border");
      check_dish[i].style.display = "block";
    } else {
      pratos[i].classList.remove("border");
      check_dish[i].style.display = "none";
    }
  }
  isComfirmButton();
}

function handleDrink(el) {
  const bebida = document.getElementById(el);
  menu_price[1].title = bebida.childNodes[3].childNodes[3].innerHTML;
  menu_price[1].price = bebida.childNodes[3].childNodes[7].innerHTML;
  isConfirm[1] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (bebidas[i].id === el) {
      bebida.classList.add("border");
      check_drink[i].style.display = "block";
    } else {
      bebidas[i].classList.remove("border");
      check_drink[i].style.display = "none";
    }
  }
  isComfirmButton();
}

function handleDessert(el) {
  const sobremesa = document.getElementById(el);
  menu_price[2].title = sobremesa.childNodes[3].childNodes[3].innerHTML;
  menu_price[2].price = sobremesa.childNodes[3].childNodes[7].innerHTML;
  isConfirm[2] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (sobremesas[i].id === el) {
      sobremesa.classList.add("border");
      check_dessert[i].style.display = "block";
    } else {
      sobremesas[i].classList.remove("border");
      check_dessert[i].style.display = "none";
    }
  }
  isComfirmButton();
}

function isComfirmButton() {
  if (isConfirm[0] === true && isConfirm[1] === true && isConfirm[2] === true) {
    buttonConfirm.classList.add("bg-confirm");
    buttonConfirm.innerText = "Fechar pedido";
    return true;
  }

  return false;
}

function formatarConfimacaoPedido() {
  somaPrecoTotal = 0;
  for (let i = 0; i < nomePedidos.length; i++) {
    nomePedidos[i].innerText = menu_price[i].title;
    precoPedidos[i].innerText = menu_price[i].price;
    somaPrecoTotal += parseFloat(
      menu_price[i].price.split(" ")[1].replace(",", ".")
    );
  }
  precoTotalPedidos[1].innerText = "R$ " + somaPrecoTotal.toFixed(2);
}

function confirmarCompra() {
  if (isComfirmButton()) {
    nome = prompt("Infome seu nome: ");
    endereço = prompt("informe seu endereço: (Rua, Bairro, Nº)");
    popUpConfirmation.style.display = "block";
    overlay.style.display = "block";
    formatarConfimacaoPedido();
  } else {
    alert("complete o seu cardapio");
  }
}

function pedir() {
  const mensage = `Olá, gostaria de fazer o pedido:
  - Prato: ${menu_price[0].title}
  - Bebida: ${menu_price[1].title}
  - Sobremesa: ${menu_price[2].title}
  Total: R$ ${somaPrecoTotal.toFixed(2)}
  
  Nome: ${nome},
  Endereço: ${endereço}
  `;

  window.open(
    `https://api.whatsapp.com/send?phone=558183241681&text=${encodeURIComponent(
      mensage
    )}`
  );
}

function cancelarPedido() {
  popUpConfirmation.style.display = "none";
  overlay.style.display = "none";
}
