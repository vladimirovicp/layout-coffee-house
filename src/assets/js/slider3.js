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
        // clearInterval(animainterval);
        // animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
    })

    arrowPrev.addEventListener('click', () =>{
        bulletBar = 0;
        slideTo(currentBullet - 1);
        clearInterval(animainterval);
        animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
    })

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft') {
            bulletBar = 0;
            slideTo(currentBullet - 1);

            clearInterval(animainterval);
            animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
        }
        if (event.code == 'ArrowRight') {
            bulletBar = 0;
            slideTo(currentBullet + 1);
            clearInterval(animainterval);
            animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
        }
    });


    function slideTo(nextBullet, ){

        clearInterval(bulletBarStart);
        bulletBarStart = setInterval(bulletBarStartFun,49);

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

        clearInterval(animainterval);
        animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
    }

    //

    // let animainterval = setInterval(() => {
    //     slideTo(currentBullet + 1);
    // }, 5000);


    let animainterval = null;

    let bulletBarStart = setInterval(bulletBarStartFun,49);


    function bulletBarStartFun(){
        //console.log(bulletBar)

        if(bulletBar === 0){
            animainterval = setInterval(() => {
                slideTo(currentBullet + 1);
            }, 5000);
        }

        if (bulletBar === 100){
            clearInterval(animainterval);
            bulletBar = 0;
            //clearInterval(bulletBarStart);
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
                slideTo(currentBullet + 1, 49 - 0.49 * bulletBar);
            }, 5000 - 50 * bulletBar)

            clearInterval(bulletBarStart);
            bulletBarStart = setInterval(bulletBarStartFun,49 - 0.49 * bulletBar);
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
            slideTo(currentBullet + 1,49);
        }, 5000 - 50 * bulletBar)

        bulletBarStart = setInterval(bulletBarStartFun,49);
    })

    arrowNext.addEventListener('mouseleave', ()=>{
        animainterval = setInterval(()=>{
            slideTo(currentBullet + 1, 49);
        }, 5000 - 50 * bulletBar)
        bulletBarStart = setInterval(bulletBarStartFun,49);
    })


    let x0 = null;

    wrapper.addEventListener('mousedown', (e) => {
        x0 = e.clientX
        console.log('click')

        // clearInterval(animainterval);
        // clearInterval(bulletBarStart);

    });

    wrapper.addEventListener('mouseup', (e) => {
        let dx = e.clientX - x0;
        //console.log(dx)
        x0 = null

        // if( dx < 400 && dx > -400){
        //     //console.log('8888')
        //     animainterval = setInterval(()=>{
        //         slideTo(currentBullet + 1, 49);
        //     }, 5000 - 50 * bulletBar)
        //     bulletBarStart = setInterval(bulletBarStartFun,49);
        // }

        if( dx > 400){
            bulletBar = 0;
            //slideTo(currentBullet - 1);
            // clearInterval(animainterval);
            // animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);
            //console.log('400')
        }
        if(dx < -400){
            //console.log('-400')

            bulletBar = 0;
            //slideTo(currentBullet + 1);
            // clearInterval(animainterval);
            // animainterval = setInterval(() => {slideTo(currentBullet + 1);}, 5000);

        }

    });

    // swipeAction = function() {
    //     console.log('3113');
    // }

    window.addEventListener('resize', function (event) {
        wrapper.scrollLeft = 0;
        currentBullet = 1;
        imgWidth = firstImg.clientWidth;
    }, true);

}
