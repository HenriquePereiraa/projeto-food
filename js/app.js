const pratos = document.getElementsByClassName("prato");
const bebidas = document.getElementsByClassName("bebida");
const sobremesas = document.getElementsByClassName("sobremesa");
const buttonConfirm = document.getElementById("button-confirm");
const popUpConfirmation = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");

console.log(popUpConfirmation);

var menu_price = {
  title_dish: "",
  price_dish: "",
  title_drink: "",
  price_drink: "",
  title_dessert: "",
  price_dessert: "",
};
var isConfirm = [false, false, false];

function handleDish(el) {
  const prato = document.getElementById(el);
  menu_price.title_dish = prato.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_dish = prato.childNodes[3].childNodes[5].innerHTML;
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
  menu_price.title_drink = bebida.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_drink = bebida.childNodes[3].childNodes[5].innerHTML;
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
  menu_price.title_dessert = sobremesa.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_dessert = sobremesa.childNodes[3].childNodes[5].innerHTML;
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

function confirmarCompra() {
  if (isComfirmButton()) {
    popUpConfirmation.style.display = "block";
    overlay.style.display = "block";
  } else {
    alert("complete o seu cardapio");
  }
}

function cancelarPedido() {
  popUpConfirmation.style.display = "none";
  overlay.style.display = "none";
}
