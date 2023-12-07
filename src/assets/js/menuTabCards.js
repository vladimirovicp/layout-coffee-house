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

const tabContent = document.querySelector('.tabs__content');

if (tabContent){
    const cardsContainers = tabContent.querySelectorAll('.menu__cards');
    cardsContainers.forEach(cardsContainer => {
        const cards = cardsContainer.querySelectorAll('.menu__card');
        if(cards.length > 4){
            const showMore = cardsContainer.querySelector('.show-more');
            showMore.addEventListener('click', ()=>{
                cardsContainer.classList.add('is-active-cards');
            })
        }
    });
}


