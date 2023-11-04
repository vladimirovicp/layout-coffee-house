console.log('script.js');


//Header menu
const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const menuMobile = menu.querySelector('.menu__mobile')
const iconMenu = menu.querySelector('.menu__icon');
const menuWrapper = menu.querySelector('.menu__wrapper');


function openMenu(){
    menuWrapper.classList.add('open');
    menu.classList.add('open');
    //menuMobile.classList.add('open');
    //iconMenu.classList.add('open');

    document.body.classList.add('_lock');
}

function closeMenu(){
    menuWrapper.classList.remove('open');
    menu.classList.remove('open');
    //iconMenu.classList.remove('open');
    //menuMobile.classList.remove('open');
    document.body.classList.remove('_lock');
}

//Header menu

if(menuMobile){
    menuMobile.addEventListener("click", function(e){
        if(menuWrapper.classList.contains("open")){
            closeMenu()
        } else{
            openMenu()
        }
    });
}
