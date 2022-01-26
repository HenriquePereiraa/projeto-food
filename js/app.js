const pratos = document.getElementsByClassName("prato");
const bebidas = document.getElementsByClassName("bebida");
const sobremesas = document.getElementsByClassName("sobremesa");
const buttonConfirm = document.getElementById("button-confirm")
console.log(buttonConfirm)

var menu_price = {
  title_dish: "",
  price_dish: "",
  title_drink: "",
  price_drink: "",
  title_dessert: "",
  price_dessert: "",
};
var isConfirm = false;
let count = 0;

function handleDish(el) {
  const prato = document.getElementById(el);
  menu_price.title_dish = prato.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_dish = prato.childNodes[3].childNodes[5].innerHTML;
  for (let i = 0; i < pratos.length; i++) {
    if (pratos[i].id === el) {
      prato.classList.add("border");
    } else {
      pratos[i].classList.remove("border");
    }
  }
  count++;
}

function handleDrink(el) {
  const bebida = document.getElementById(el);
  menu_price.title_drink = bebida.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_drink = bebida.childNodes[3].childNodes[5].innerHTML;
  for (let i = 0; i < pratos.length; i++) {
    if (bebidas[i].id === el) {
      bebida.classList.add("border");
    } else {
      bebidas[i].classList.remove("border");
    }
  }
  count++;
}

function handleDessert(el) {
  const sobremesa = document.getElementById(el);
  menu_price.title_dessert = sobremesa.childNodes[3].childNodes[1].innerHTML;
  menu_price.price_dessert = sobremesa.childNodes[3].childNodes[5].innerHTML;
  for (let i = 0; i < pratos.length; i++) {
    if (sobremesas[i].id === el) {
      sobremesa.classList.add("border");
    } else {
      sobremesas[i].classList.remove("border");
    }
  }
  count++;
}

function confirmado() {
    if(count === 3) {
        console.log("pode confirmar")
    }
}


function confirmarCompra() {
  if (count === 3) {
    console.log(menu_price);
  } else {
    alert("complete o seu cardapio");
  }
}
