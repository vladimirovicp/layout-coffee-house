const slider = document.querySelector('.slider');
if (slider) {
    const arrowPrev = slider.querySelector('.slider__button-prev');
    const arrowNext = slider.querySelector('.slider__button-next');


    const arrows = slider.querySelectorAll('.slider__arrow');
    const wrapper = slider.querySelector('.slider__wrapper');
    const firstImg = wrapper.querySelectorAll(".slider__slide")[0];
    let currentBullet = 1;
    const pagination = slider.querySelector('.slider__pagination');
    const bullets = pagination.querySelectorAll('.slider__bullet');
    let imgWidth = firstImg.clientWidth;


    let positionSlide = 0;



    arrowNext.addEventListener('click', () =>{
        slideTo(currentBullet + 1);
    })

    arrowPrev.addEventListener('click', () =>{
        slideTo(currentBullet - 1);
    })


    function slideTo(nextBullet){

        if(nextBullet === 0){
            currentBullet = 4;
            nextBullet = 3;
        }
        if(nextBullet > 3){
            currentBullet = 0;
            nextBullet = 1;
        }

        positionSlide = (currentBullet - 1) * imgWidth;

        if(nextBullet > currentBullet){
            wrapper.scrollLeft = positionSlide + imgWidth;
        }

        if(nextBullet < currentBullet){
            wrapper.scrollLeft = positionSlide - imgWidth;
        }

        currentBullet = nextBullet;
    }

    let animainterval = setInterval(() => {
        slideTo(currentBullet + 1);
    }, 1000);

    slider.addEventListener('mouseover', ()=>{
        clearInterval(animainterval);
    })

    slider.addEventListener('mouseleave', ()=>{
        animainterval = setInterval(()=>{
            slideTo(currentBullet + 1);
        }, 1000)
    })



    window.addEventListener('resize', function (event) {
        wrapper.scrollLeft = 0;
        currentBullet = 1;
        imgWidth = firstImg.clientWidth;
    }, true);

}
