'use strict';

const buttonsClose = document.querySelectorAll(".button--cancel");
const buttonsAddCard = document.querySelectorAll(".addCard");
const shadow = document.querySelector(".shadow");
const formAddCard = document.getElementById("formAddCard");
const formWidthraw = document.getElementById("formWithdraw");
const formTopUp = document.getElementById("formTopUp");
const buttonsWidthraw = document.querySelectorAll(".withdraw");
const buttonsTopUp = document.querySelectorAll(".topUp");

buttonsWidthraw.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formWidthraw.style.transform = "none";
}));

buttonsTopUp.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formTopUp.style.transform = "none";
}));

buttonsAddCard.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddCard.style.transform = "none";
}))


buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddCard.style.transform = "scale(0)";
  formWidthraw.style.transform = "scale(0)";
  formTopUp.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
