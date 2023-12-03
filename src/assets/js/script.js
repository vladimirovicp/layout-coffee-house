console.log('1. Реализация бургер-меню на обеих страницах: +22');
console.log('2. Реализация карусели на home странице: ');

// console.log('Требования CSS +10');
// console.log('Интерактивность +32');
// console.log('Итого: 100');


import  './menuMobile'
// import './slider'
import './slider2'


let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();
