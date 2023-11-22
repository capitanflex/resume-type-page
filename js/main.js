"use strict"


const menu_icon = document.querySelector('.menu__icon');
const menu_body = document.querySelector('.menu__body');

if (menu_icon && menu_body) {
    menu_icon.addEventListener("click", function (e) {
        menu_icon.classList.toggle('_active');
        menu_body.classList.toggle('_active');
    });

    document.addEventListener("click", function (e) {
      if (!menu_body.contains(e.target) && !menu_icon.contains(e.target)) {
        menu_icon.classList.remove('_active');
        menu_body.classList.remove('_active');
      }
    });
  }