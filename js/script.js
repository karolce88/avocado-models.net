const burgerBtn = document.querySelector('.burger-button')
const itemTwo = document.querySelector('.item2')
const itemFirst = document.querySelector('.item1')
const itemThree = document.querySelector('.item3')
const btnAnimDelay = document.querySelector('.burger-button')


function btnClick () {
    let delayTime = 0;

    itemTwo.classList.toggle('item2-display-none');
    
    itemFirst.classList.toggle('item1-rotate');
    
    itemThree.classList.toggle('item3-rotate');
    
    burgerBtn.classList.toggle('container-btn-border');
    


    btnAnimDelay.forEach(item => {
        burgerBtn.style.animationDelay = '.' + delayTime + 's';
        itemThree.style.animationDelay = '.' + delayTime + 's';
        itemFirst.style.animationDelay = '.' + delayTime + 's';
        itemTwo.style.animationDelay = '.' + delayTime + 's';

        delayTime++;
    })
}

burgerBtn.addEventListener('click', btnClick)