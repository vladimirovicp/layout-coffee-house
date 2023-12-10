const slider = document.querySelector('.slider');
if (slider) {
    const arrowPrev = slider.querySelector('.slider__button-prev');
    const arrowNext = slider.querySelector('.slider__button-next');
    const wrapper = slider.querySelector('.slider__wrapper');
    const firstImg = wrapper.querySelectorAll(".slider__slide")[0];
    const slidersInfo = wrapper.querySelectorAll('.slide__info');
    const pagination = slider.querySelector('.slider__pagination');
    const bullets = pagination.querySelectorAll('.slider__bullet');
    let imgWidth = firstImg.clientWidth;
    let currentBullet = 1;
    let positionSlide = 0;
    let bulletBar = 0;
    let coordinateStartX = null;

    let animainterval = setInterval(() => {
        slideToRight(currentBullet + 1);
    }, 5000);

    function bulletBarStartFun(){
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

    let bulletBarStart = setInterval(bulletBarStartFun,49);

    function slideToActive(nextBullet){
        bullets.forEach(bullet => {
            if (Number(bullet.dataset.bullet) === currentBullet || currentBullet === 4 || currentBullet === 0) {

                bullet.classList.remove('active')

                bullets.forEach(bullet => {
                    let span = bullet.querySelector('.slider__bullet-bar');
                    span.style.width = 0;
                })
            }
            if (Number(bullet.dataset.bullet) === nextBullet) {
                bullet.classList.add('active');
                bullets.forEach(bullet => {
                    if(bullet.classList.contains('active')) {
                        let span = bullet.querySelector('.slider__bullet-bar');
                        span.style.width = 0.04 * bulletBar + 'rem';
                    }
                })
            }
        })
    }
    function slideToRight(nextBullet){
        slideToStop()
        bulletBar = 0;

        if(nextBullet > 3){
            currentBullet = 0;
            nextBullet = 1;
        }
        positionSlide = (currentBullet - 1) * imgWidth;
        wrapper.scrollLeft = positionSlide + imgWidth;
        slideToActive(nextBullet);
        currentBullet = nextBullet;
        animainterval = setInterval(() => {slideToRight(currentBullet + 1);}, 5000);
        bulletBarStart = setInterval(bulletBarStartFun,49)
    }
    function slideToLeft(nextBullet){
        slideToStop();
        bulletBar = 0;

        if(nextBullet === 0){
            currentBullet = 4;
            nextBullet = 3;
        }
        positionSlide = (currentBullet - 1) * imgWidth;
        wrapper.scrollLeft = positionSlide - imgWidth;
        slideToActive(nextBullet);
        currentBullet = nextBullet;
        animainterval = setInterval(() => {slideToRight(currentBullet + 1);}, 5000);
        bulletBarStart = setInterval(bulletBarStartFun,49)
    }
    function slideToStop(){
        console.log('stop')
        clearInterval(bulletBarStart);
        clearInterval(animainterval);
    }
    function slideToContinue(){
        bulletBarStart = setInterval(bulletBarStartFun,49);
        animainterval = setInterval(()=>{
            slideToRight(currentBullet + 1, 49 - .49 * bulletBar);
        }, 5000 - 50 * bulletBar);
    }


    arrowNext.addEventListener('click', () =>{
        slideToRight(currentBullet + 1);
    })
    arrowPrev.addEventListener('click', () =>{
        slideToLeft(currentBullet - 1);
    })


    //*****************************/

    // slidersInfo.forEach(slideInfo => {
    //     slideInfo.addEventListener('mouseover', slideToStop)
    //     slideInfo.addEventListener('mouseleave', slideToContinue)
    // })

    // function slideToHover(){
    //     slidersInfo.forEach(slideInfo => {
    //         slideInfo.addEventListener('mouseover', slideToStop,false)
    //         slideInfo.addEventListener('mouseleave', slideToContinue,false)
    //     })
    // }
    //
    // function slideToHoverRemove(){
    //     slidersInfo.forEach(slideInfo => {
    //         slideInfo.removeEventListener('mouseover', slideToStop,false)
    //         slideInfo.removeEventListener('mouseleave', slideToContinue,false)
    //     })
    // }

    //slideToHover();





    wrapper.addEventListener('mousedown', (e) => {
        //slideToHoverRemove();
        slideToStop();
        coordinateStartX = e.clientX
        e.stopPropagation();

    },true);


    wrapper.addEventListener('mouseup', (e) => {

        const differenceCoordinate = e.clientX - coordinateStartX;
        coordinateStartX = null;

        if( differenceCoordinate > 2 || differenceCoordinate > -2 ){
            slideToContinue();
        }


        if( differenceCoordinate > 100){
            slideToLeft(currentBullet - 1);
        }
        if(differenceCoordinate < -100){
            slideToRight(currentBullet + 1);
        }

        //slideToHover();
        e.stopPropagation();

    },true);


    wrapper.addEventListener('touchstart', (e) => {
        slideToStop();
        coordinateStartX = e.changedTouches[0].clientX
    });

    wrapper.addEventListener('touchend', (e) => {
        const differenceCoordinate = e.changedTouches[0].clientX - coordinateStartX;
        coordinateStartX = null;

        console.log(differenceCoordinate)

        if( differenceCoordinate > 2 || differenceCoordinate > -2 ){
            slideToContinue();
        }
        if( differenceCoordinate > 50){
            slideToLeft(currentBullet - 1);
        }
        if(differenceCoordinate < -50){
            slideToRight(currentBullet + 1);
        }
    })

    window.addEventListener('resize', function (event) {
        wrapper.scrollLeft = 0;
        currentBullet = 1;
        imgWidth = firstImg.clientWidth;
    }, true);

}
