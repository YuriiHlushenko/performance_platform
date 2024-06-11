'use strict';

const href = window.location.href;
const items = document.querySelectorAll(".menu__link");

const list = ["manager", "users", "chanels", "offers", "profile", "balance", "support"];

for (let i = 0; i < list.length; i++) {
  if (href.includes(list[i])) {
      items[i + 1].classList.add('menu__link--active')
    }
}

