(()=>{var e={295:()=>{const e=document.querySelector(".header").querySelector(".menu"),t=e.querySelector(".menu__mobile");function s(){e.classList.remove("open"),document.body.classList.remove("_lock")}t&&t.addEventListener("click",(function(t){e.classList.contains("open")?s():(e.classList.add("open"),document.body.classList.add("_lock"))})),e.querySelector(".menu__wrapper").querySelectorAll(".menu__link").forEach((e=>{e.addEventListener("click",(()=>{s()}))}))},695:()=>{const e=document.querySelector(".slider");if(e){e.querySelector(".slider__button-prev"),e.querySelector(".slider__button-next");const t=e.querySelectorAll(".slider__arrow"),s=e.querySelector(".slider__wrapper"),r=s.querySelectorAll(".slider__slide")[0];let c=1;const l=e.querySelector(".slider__pagination").querySelectorAll(".slider__bullet");let i=r.clientWidth,o=0;t.forEach((e=>{e.addEventListener("click",(()=>{let t=e.classList.contains("slider__button-prev")?c-1:c+1;t>3&&(c=0,t=1),0===t&&(c=4,t=3),o=(c-1)*i,s.scrollLeft=e.classList.contains("slider__button-prev")?o-i:o+i,l.forEach((e=>{4===c&&(c=1),0===c&&(c=3),Number(e.dataset.bullet)===c&&e.classList.remove("active"),Number(e.dataset.bullet)===t&&e.classList.add("active")})),c=t}))})),l.forEach((e=>{e.addEventListener("click",(t=>{let r=Number(e.dataset.bullet);if(l.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),c<r){let e=i*(r-c);s.scrollLeft+=e}else{let e=i*(c-r);s.scrollLeft-=e}c=r,e.classList.add("active")}))})),window.addEventListener("resize",(function(e){s.scrollLeft=0,c=1,i=r.clientWidth}),!0)}}},t={};function s(r){var c=t[r];if(void 0!==c)return c.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,s),l.exports}(()=>{"use strict";s(295),s(695),function(){let e,t=document.querySelectorAll(".tabs-nav__item"),s=document.querySelectorAll(".tab");function r(){t.forEach((e=>{e.classList.remove("is-active")})),this.classList.add("is-active"),e=this.getAttribute("data-tab-name"),function(e){s.forEach((t=>{t.classList.contains(e)?t.classList.add("is-active"):t.classList.remove("is-active")}))}(e)}t.forEach((e=>{e.addEventListener("click",r)}))}()})()})();