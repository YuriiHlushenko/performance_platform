'use strict';

// window.onload = function() {
//   document.getElementById('form').addEventListener(
//     'submit', stopDefAction, false);
// };

// function stopDefAction(evt) {
//   evt.preventDefault();
//   document.form.reset();
// }

const buttonsClose = document.querySelectorAll(".button--cancel");
const users = document.querySelector(".users");
const rollList = document.getElementById("rollList");
const roll = document.getElementById("roll");
const info = document.getElementById("info");
const down = document.getElementById("down");
const formEditOffer = document.getElementById("formEditOffer");
const formEditPayment = document.getElementById("formEditPayment");
const formChangePayment = document.getElementById("formChangePayment");
const buttonEditOffer = document.getElementById("editOffer");
const shadow = document.querySelector(".shadow");
const buttonEditPayment = document.getElementById("editPayment");
const buttonChangePayment = document.getElementById("changePayment");
// const buttonAddOffer = document.getElementById("addOffer");
// const formAddOffer = document.getElementById("formAddOffer");

roll.addEventListener("click", () => {
  if (info.style.display === 'block') {
    info.style.display = 'none';
    users.classList.remove('users--open');
    roll.innerHTML = 'Розгорнути';
  } else {
    info.style.display = 'block';
    users.classList.add('users--open');
    roll.innerHTML = 'Згорнути';
  }
});

buttonEditOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditOffer.style.transform = "none";
});

down.addEventListener("click", () => {
  if (rollList.style.display === 'none') {
    rollList.style.display = "block";
    rollList.style.maxHeight = "initial";

    // rollList.style.transform = "scale(1)"
    down.style.transform = "rotateX(180deg)"
  } else {
    rollList.style.display = "none";
    down.style.transform = "none"
  }
});

buttonEditPayment.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditPayment.style.transform = "none";
});

buttonChangePayment.addEventListener("click", () => {
  shadow.style.transform = "none";
  formChangePayment.style.transform = "none";
});

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formEditPayment.style.transform = "scale(0)";
  formChangePayment.style.transform = "scale(0)";
  formEditOffer.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
