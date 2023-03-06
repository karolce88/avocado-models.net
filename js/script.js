const burgerBtn = document.querySelector('.burger-button')
const itemTwo = document.querySelector('.item2')
const itemFirst = document.querySelector('.item1')
const itemThree = document.querySelector('.item3')


function btnClick () {
    itemTwo.classList.toggle('item2-display-none');
    itemFirst.classList.toggle('item1-rotate');
    itemThree.classList.toggle('item3-rotate');
    burgerBtn.classList.toggle('container-btn-border');
}

burgerBtn.addEventListener('click', btnClick)