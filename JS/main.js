const btn = document.getElementById("btn");

const textColorBuy = document.getElementById("btn-buy");

const textColorRent = document.getElementById("btn-rent");

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

///////////////////////////////////////////////////////////
// Making mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
