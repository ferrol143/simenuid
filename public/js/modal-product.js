const btnTambahProduct= document.getElementById('btn-tambah-product');
const btnCloseModal= document.getElementById('btn-close-modal');
const btnCancelProduct= document.getElementById('btn-cancel-product');
const modalProduct= document.getElementById('modal-product');
const textHeadingModal= document.getElementById('page-action.heading');
const subTextHeadingModal= document.getElementById('subpage-action.heading');

btnCloseModal.addEventListener('click', (event) => {
    modalProduct.classList.add('hidden');
})

btnTambahProduct.addEventListener('click', (event) => {
    modalProduct.classList.remove('hidden');
})

btnCancelProduct.addEventListener('click', (event) => {
    modalProduct.classList.add('hidden');
})

