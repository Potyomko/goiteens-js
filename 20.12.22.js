const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', onBtnClickOpen);
  refs.closeModalBtn.addEventListener('click', onBtnClickClose);
  refs.backdrop.addEventListener('click', onBackdropClose);

function onBtnClickOpen() {
    document.body.classList.add('show-modal');
}

function onBtnClickClose() {
    document.body.classList.add(remove('show-modal'))
}

function onBackdropClose(event) {
    console.log(event.current.Target);
    // onBtnClickClose()
}