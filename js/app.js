const pratos = document.getElementsByClassName("prato");
const bebidas = document.getElementsByClassName("bebida");
const sobremesas = document.getElementsByClassName("sobremesa");
const buttonConfirm = document.getElementById("button-confirm");
const popUpConfirmation = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const nomePedidos = document.querySelector(".nome-pedido").children;
const precoPedidos = document.querySelector(".preco-pedido").children;
const precoTotalPedidos = document.querySelector(".total-pedido").children;
let somaPrecoTotal = 0;


var menu_price = [
  { title: "", price: "" },
  { title: "", price: "" },
  { title: "", price: "" },
];
var isConfirm = [false, false, false];

function handleDish(el) {
  const prato = document.getElementById(el);
  menu_price[0].title = prato.childNodes[3].childNodes[1].innerHTML;
  menu_price[0].price = prato.childNodes[3].childNodes[5].innerHTML;
  isConfirm[0] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (pratos[i].id === el) {
      prato.classList.add("border");
    } else {
      pratos[i].classList.remove("border");
    }
  }
  isComfirmButton();
}

function handleDrink(el) {
  const bebida = document.getElementById(el);
  menu_price[1].title = bebida.childNodes[3].childNodes[1].innerHTML;
  menu_price[1].price = bebida.childNodes[3].childNodes[5].innerHTML;
  isConfirm[1] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (bebidas[i].id === el) {
      bebida.classList.add("border");
    } else {
      bebidas[i].classList.remove("border");
    }
  }
  isComfirmButton();
}

function handleDessert(el) {
  const sobremesa = document.getElementById(el);
  menu_price[2].title = sobremesa.childNodes[3].childNodes[1].innerHTML;
  menu_price[2].price = sobremesa.childNodes[3].childNodes[5].innerHTML;
  isConfirm[2] = true;
  for (let i = 0; i < pratos.length; i++) {
    if (sobremesas[i].id === el) {
      sobremesa.classList.add("border");
    } else {
      sobremesas[i].classList.remove("border");
    }
  }
  isComfirmButton();
}

function isComfirmButton() {
  if (isConfirm[0] === true && isConfirm[1] === true && isConfirm[2] === true) {
    buttonConfirm.classList.add("bg-confirm");
    return true;
  }

  return false;
}

function formatarConfimacaoPedido(){
  somaPrecoTotal = 0;
  for(let i = 0; i < nomePedidos.length; i++) {
    nomePedidos[i].innerText = menu_price[i].title;
    precoPedidos[i].innerText = menu_price[i].price;
    somaPrecoTotal += parseFloat(menu_price[i].price.split(" ")[1].replace(",","."))
  }
  precoTotalPedidos[1].innerText = "R$ " + somaPrecoTotal.toFixed(2);
}

function confirmarCompra() {
  if (isComfirmButton()) {
    popUpConfirmation.style.display = "block";
    overlay.style.display = "block";
    formatarConfimacaoPedido();
    console.log(somaPrecoTotal.toFixed(2))
  } else {
    alert("complete o seu cardapio");
  }
}

function cancelarPedido() {
  popUpConfirmation.style.display = "none";
  overlay.style.display = "none";
}
