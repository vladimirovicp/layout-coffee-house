(()=>{var e={695:()=>{const e=document.querySelector(".slider");if(e){const s=e.querySelector(".slider__button-prev"),l=e.querySelector(".slider__button-next"),c=e.querySelectorAll(".slider__arrow"),o=e.querySelector(".slider__wrapper"),i=o.querySelectorAll(".slider__slide")[0];let r=1;const a=e.querySelector(".slider__pagination").querySelectorAll(".slider__bullet");let n=i.clientWidth,d=0;function t(){s.classList.remove("disable"),l.classList.remove("disable"),1===r&&(s.classList.add("disable"),l.classList.remove(".disable")),3===r&&(s.classList.remove("disable"),l.classList.add("disable"))}c.forEach((e=>{e.addEventListener("click",(()=>{let s=e.classList.contains("slider__button-prev")?r-1:r+1;d=(r-1)*n,o.scrollLeft=e.classList.contains("slider__button-prev")?d-n:d+n,a.forEach((e=>{Number(e.dataset.bullet)===r&&e.classList.remove("active"),Number(e.dataset.bullet)===s&&e.classList.add("active")})),r=s,t()}))})),a.forEach((e=>{e.addEventListener("click",(s=>{let l=Number(e.dataset.bullet);if(a.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),r<l){let e=n*(l-r);o.scrollLeft+=e}else{let e=n*(r-l);o.scrollLeft-=e}r=l,e.classList.add("active"),t()}))})),window.addEventListener("resize",(function(e){o.scrollLeft=0,r=1,n=i.clientWidth}),!0)}}},t={};function s(l){var c=t[l];if(void 0!==c)return c.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,s),o.exports}(()=>{"use strict";s(695),console.log("Правки: 3"),console.log("Самопроверка:"),console.log("Проверка валидации страниц: +16"),console.log("Планировка соответствует дизайну +42"),console.log("Требования CSS +10"),console.log("Интерактивность +32"),console.log("Итого: 100");const e=document.querySelector(".header").querySelector(".menu"),t=e.querySelector(".menu__mobile");t&&t.addEventListener("click",(function(t){e.classList.contains("open")?(e.classList.remove("open"),document.body.classList.remove("_lock")):(e.classList.add("open"),document.body.classList.add("_lock"))})),function(){let e,t=document.querySelectorAll(".tabs-nav__item"),s=document.querySelectorAll(".tab");function l(){t.forEach((e=>{e.classList.remove("is-active")})),this.classList.add("is-active"),e=this.getAttribute("data-tab-name"),function(e){s.forEach((t=>{t.classList.contains(e)?t.classList.add("is-active"):t.classList.remove("is-active")}))}(e)}t.forEach((e=>{e.addEventListener("click",l)}))}()})()})();