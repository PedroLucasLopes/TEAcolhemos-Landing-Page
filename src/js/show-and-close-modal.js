const open = document.querySelector('.btn-modal')
const close = document.querySelector('.close')

const modal = document.querySelector('.modal-container')

function openModal() {
    modal.classList.add('show')
}

function closeModal() {
    modal.classList.remove('show')
}

open.addEventListener("click", openModal)
close.addEventListener("click", closeModal)