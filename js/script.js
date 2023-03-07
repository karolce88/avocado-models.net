const burgerBtn = document.querySelector('.burger-button')
const itemTwo = document.querySelector('.item2')
const itemFirst = document.querySelector('.item1')
const itemThree = document.querySelector('.item3')
const btnAnimDelay = document.querySelector('.burger-button')

function btnClick() {
	if (
		itemTwo.classList.contains('item2-display-none') &&
		itemFirst.classList.contains('item1-rotate') &&
		itemThree.classList.contains('item3-rotate')
	) {
		itemTwo.classList.remove('item2-display-none')
		itemFirst.classList.remove('item1-rotate')
		itemThree.classList.remove('item3-rotate')

		itemTwo.classList.add('item2-display-none-rev')
		itemFirst.classList.add('item1-rotate-rev')
		itemThree.classList.add('item3-rotate-rev')
	}
	else if (
		itemTwo.classList.contains('item2-display-none-rev') &&
		itemFirst.classList.contains('item1-rotate-rev') &&
		itemThree.classList.contains('item3-rotate-rev')
	) {
		itemTwo.classList.remove('item2-display-none-rev')
		itemFirst.classList.remove('item1-rotate-rev')
		itemThree.classList.remove('item3-rotate-rev')

		itemTwo.classList.add('item2-display-none')
		itemFirst.classList.add('item1-rotate')
		itemThree.classList.add('item3-rotate')
	} else {
		itemTwo.classList.add('item2-display-none')
		itemFirst.classList.add('item1-rotate')
		itemThree.classList.add('item3-rotate')
		burgerBtn.classList.toggle('container-btn-border')
	}
}

burgerBtn.addEventListener('click', btnClick)
