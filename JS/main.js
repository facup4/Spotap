var btn = document.getElementById("btn");

var textColorBuy = document.getElementById("btn-buy");

var textColorRent = document.getElementById("btn-rent");

function leftClick() {
  btn.style.left = "0";
  textColorBuy.style.color = "white";
  textColorRent.style.color = "#f25a29";
}

function rightClick() {
  btn.style.left = "115px";
  textColorRent.style.color = "white";
  textColorBuy.style.color = "#f25a29";
}
