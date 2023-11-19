console.log('script.js');


//Header menu
const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const menuMobile = menu.querySelector('.menu__mobile')

function openMenu(){
    menu.classList.add('open');
    document.body.classList.add('_lock');
}

function closeMenu(){
    menu.classList.remove('open');
    document.body.classList.remove('_lock');
}

//Header menu

if(menuMobile){
    menuMobile.addEventListener("click", function(e){
        if(menu.classList.contains("open")){
            closeMenu()
        } else{
            openMenu()
        }
    });
}

import './slider'


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
