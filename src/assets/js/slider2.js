const slider = document.querySelector('.slider');
if (slider) {
    const arrowPrev = slider.querySelector('.slider__button-prev');
    const arrowNext = slider.querySelector('.slider__button-next');


    const arrows = slider.querySelectorAll('.slider__arrow');
    const wrapper = slider.querySelector('.slider__wrapper');
    const firstImg = wrapper.querySelectorAll(".slider__slide")[0];

    const slidersInfo = wrapper.querySelectorAll('.slide__info');

    let currentBullet = 1;
    const pagination = slider.querySelector('.slider__pagination');
    const bullets = pagination.querySelectorAll('.slider__bullet');
    let imgWidth = firstImg.clientWidth;

    let positionSlide = 0;
    let bulletBar = 0;



    arrowNext.addEventListener('click', () =>{
        bulletBar = 0;
        slideTo(currentBullet + 1);
    })

    arrowPrev.addEventListener('click', () =>{
        bulletBar = 0;
        slideTo(currentBullet - 1);
    })


    function slideTo(nextBullet, timer = 49){

        clearInterval(bulletBarStart);
        bulletBarStart = setInterval(bulletBarStartFun,timer);
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

        bullets.forEach(bullet => {

            if (Number(bullet.dataset.bullet) === currentBullet || currentBullet === 0 || currentBullet === 4) {
                bullet.classList.remove('active')
            }
            if (Number(bullet.dataset.bullet) === nextBullet) {
                bullet.classList.add('active');
            }
        })
        currentBullet = nextBullet;
    }

    let animainterval = setInterval(() => {
        slideTo(currentBullet + 1);
    }, 5000);

    let bulletBarStart = setInterval(bulletBarStartFun,49);

    function bulletBarStartFun(){
        //console.log(bulletBar)
        if (bulletBar === 100){
            bulletBar = 0;
            clearInterval(bulletBarStart);
        } else {
            bulletBar++;
            bullets.forEach(bullet => {
                if(bullet.classList.contains('active')){
                    let span = bullet.querySelector('.slider__bullet-bar');
                    span.style.width = 0.04 * bulletBar + 'rem';
                } else{
                    let span = bullet.querySelector('.slider__bullet-bar');
                    span.style.width = 0;
                }
            })
        }
    }




    slidersInfo.forEach(slideInfo => {
        slideInfo.addEventListener('mouseover', ()=>{
            clearInterval(animainterval);
            clearInterval(bulletBarStart);
        })

        slideInfo.addEventListener('mouseleave', ()=>{

            animainterval = setInterval(()=>{
                slideTo(currentBullet + 1);
            }, 5000)
            bulletBarStart = setInterval(bulletBarStartFun,50 + .49 * bulletBar);

        })
    })

    arrowPrev.addEventListener('mouseover', ()=>{
        clearInterval(animainterval);
        clearInterval(bulletBarStart);
    })
    arrowNext.addEventListener('mouseover', ()=>{
        clearInterval(animainterval);
        clearInterval(bulletBarStart);
    })

    arrowPrev.addEventListener('mouseleave', ()=>{
        animainterval = setInterval(()=>{
            slideTo(currentBullet + 1, 48 + .49 * bulletBar);
        }, 5000)
        bulletBarStart = setInterval(bulletBarStartFun,48 + .49 * bulletBar);
    })

    arrowNext.addEventListener('mouseleave', ()=>{
        animainterval = setInterval(()=>{
            slideTo(currentBullet + 1, 48 + 0.49 * bulletBar);
        }, 5000)
        bulletBarStart = setInterval(bulletBarStartFun,48 + 0.49 * bulletBar);
    })











    window.addEventListener('resize', function (event) {
        wrapper.scrollLeft = 0;
        currentBullet = 1;
        imgWidth = firstImg.clientWidth;
    }, true);

}
