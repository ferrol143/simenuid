const containerCart = document.getElementById('cart');
const containerOrder = document.getElementById('order');
const btnOpenCart = document.getElementById('btn-open-cart');
const btnOpenOrder = document.getElementById('btn-open-order');

btnOpenCart.addEventListener('click', (e) => {
    containerCart.classList.remove('hidden');
    containerOrder.classList.add('hidden');

    btnOpenCart.classList.remove('opacity-50');
    btnOpenOrder.classList.add('opacity-50');
})

btnOpenOrder.addEventListener('click', (e) => {
    containerOrder.classList.remove('hidden');
    containerCart.classList.add('hidden');

    btnOpenOrder.classList.remove('opacity-50');
    btnOpenCart.classList.add('opacity-50');
})