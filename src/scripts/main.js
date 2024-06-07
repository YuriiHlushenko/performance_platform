'use strict';

window.onload = function() {
  document.getElementById('form').addEventListener(
    'submit', stopDefAction, false);
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

const buttonsClose = document.querySelectorAll(".button--cancel");
const buttonAddCard = document.getElementById("addCard");
const shadow = document.querySelector(".shadow");
const formAddCard = document.getElementById("formAddCard");
const formWidthraw = document.getElementById("formWithdraw");
const formTopUp = document.getElementById("formTopUp");
const buttonWidthraw = document.getElementById("withdraw");
const buttonTopUp = document.getElementById("topUp");

buttonWidthraw.addEventListener("click", () => {
  shadow.style.transform = "none";
  formWidthraw.style.transform = "none";
});

buttonTopUp.addEventListener("click", () => {
  shadow.style.transform = "none";
  formTopUp.style.transform = "none";
});

buttonAddCard.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddCard.style.transform = "none";
});


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
