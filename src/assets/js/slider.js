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

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
                let nextBullet = arrow.classList.contains('slider__button-prev') ? currentBullet - 1 : currentBullet + 1;

                if(nextBullet > 3){
                    currentBullet = 0;
                    nextBullet = 1;
                }
                if(nextBullet === 0){
                    currentBullet = 4;
                    nextBullet = 3;
                }

                positionSlide = (currentBullet - 1) * imgWidth;
                wrapper.scrollLeft = arrow.classList.contains('slider__button-prev') ? positionSlide - imgWidth : positionSlide + imgWidth;
                bullets.forEach(bullet => {
                    if (currentBullet === 4){currentBullet = 1;}
                    if (currentBullet === 0){currentBullet = 3;}

                    if (Number(bullet.dataset.bullet) === currentBullet) {
                        bullet.classList.remove('active')
                    }
                    if (Number(bullet.dataset.bullet) === nextBullet) {
                        bullet.classList.add('active');
                    }
                })
                currentBullet = nextBullet;
                //disabledBullet();
        });
    });

    bullets.forEach(bullet => {
        bullet.addEventListener("click", (event) => {
            let nextBullet = Number(bullet.dataset.bullet);
            bullets.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active')
                };
            });


            if (currentBullet < nextBullet) {
                let firstImgWidth = imgWidth * (nextBullet - currentBullet);
                wrapper.scrollLeft += firstImgWidth;
            } else {
                let firstImgWidth = imgWidth * (currentBullet - nextBullet);
                wrapper.scrollLeft -= firstImgWidth;
            }

            currentBullet = nextBullet;
            bullet.classList.add('active');
            //disabledBullet();

        });


    });

    // function disabledBullet(){
    //
    //     arrowPrev.classList.remove('disable')
    //     arrowNext.classList.remove('disable')
    //     if (currentBullet === 1) {
    //         arrowPrev.classList.add('disable')
    //         arrowNext.classList.remove('.disable')
    //     }
    //     if (currentBullet === 3) {
    //         arrowPrev.classList.remove('disable')
    //         arrowNext.classList.add('disable')
    //     }
    // }

    // function autoSlide(){
    //     setInterval(() => {
    //         if (currentBullet === 4){currentBullet = 1;}
    //         currentBullet = currentBullet + 1;
    //
    //         sliderTrue()
    //     }, 5000);
    // }
    //
    function sliderTrue(){
        positionSlide = (currentBullet - 1) * imgWidth;
        wrapper.scrollLeft = positionSlide - imgWidth;
    }
    //
    // autoSlide();

    let animainterval = setInterval(() => {
        if (currentBullet === 4){currentBullet = 1;}
        currentBullet = currentBullet + 1;
        sliderTrue()
    }, 1000)

    wrapper.addEventListener('mouseover', ()=>{
        clearInterval(animainterval);
    })

    wrapper.addEventListener('mouseleave', ()=>{
        animainterval = setInterval(()=>{
            if (currentBullet === 4){currentBullet = 1;}
            currentBullet = currentBullet + 1;
            sliderTrue()
        }, 1000)
    })



    window.addEventListener('resize', function (event) {
        wrapper.scrollLeft = 0;
        currentBullet = 1;
        imgWidth = firstImg.clientWidth;
    }, true);

}
