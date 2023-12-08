import { downloadProduct } from './downloadProduct';

const modalBtns = document.querySelectorAll('.modal_btn');

if(modalBtns.length > 0){
    const modal = document.querySelector('.modal');
    if(modal) {
        modalBtns.forEach(modalBtn => {
            modalBtn.addEventListener('click', (e) => {
                // console.log(modalBtn)
                // console.log(modalBtn.dataset.category)
                // console.log(modalBtn.dataset.name)
                downloadProduct(modalBtn.dataset.category,modalBtn.dataset.name);
                openModal();
                document.onclick = function (e) {
                    if(e.target.className == "_lock-modal"){
                        closeModal()
                    }
                };
            })
        });

        const modalClose = modal.querySelector('.modal__close');
        modalClose.addEventListener('click', ()=>{
            closeModal()
        })


    }

    function openModal(modalBtn){
        modal.classList.add('active');
        document.body.classList.add('_lock-modal');
    }

    function closeModal(){
        modal.classList.remove('active');
        document.body.classList.remove('_lock-modal');
    }
}

// function downloadProduct(){
//     console.log('downloadProduct');
// }




