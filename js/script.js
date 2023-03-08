const burgerBtn = document.querySelector('.burger-button')
const itemTwo = document.querySelector('.item2')
const itemFirst = document.querySelector('.item1')
const itemThree = document.querySelector('.item3')
const mobileNav = document.querySelector('.mobile-nav-container')
const mobileNavText = document.querySelector('.mobile-nav-items')
const mobileNavHeight = document.querySelector('.mobile-nav')
const clickToHideMenu = document.querySelectorAll('.text-menu-anim')
const nav = document.querySelector('.mobile-nav')
function btnClick() {
	// hide menu and removes button animations
	clickToHideMenu.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('mobile-nav-show')
			itemTwo.classList.remove('item2-display-none')
			itemFirst.classList.remove('item1-rotate')
			itemThree.classList.remove('item3-rotate')
			burgerBtn.classList.remove('container-btn-border')
		})
	})
	if (
		itemTwo.classList.contains('item2-display-none') &&
		itemFirst.classList.contains('item1-rotate') &&
		itemThree.classList.contains('item3-rotate')
	) {
		// secontd step
		itemTwo.classList.remove('item2-display-none')
		itemFirst.classList.remove('item1-rotate')
		itemThree.classList.remove('item3-rotate')
		itemTwo.classList.add('item2-display-none-rev')
		itemFirst.classList.add('item1-rotate-rev')
		itemThree.classList.add('item3-rotate-rev')
		burgerBtn.classList.remove('container-btn-border')
		mobileNav.classList.add('mobile-nav-container-show-rev')
		mobileNavText.classList.remove('aanimation')
		mobileNavHeight.classList.remove('mobile-nav-show')
	} else if (
		itemTwo.classList.contains('item2-display-none-rev') &&
		itemFirst.classList.contains('item1-rotate-rev') &&
		itemThree.classList.contains('item3-rotate-rev')
	) {
		// third step
		mobileNavHeight.classList.add('mobile-nav-show')
		itemTwo.classList.remove('item2-display-none-rev')
		itemFirst.classList.remove('item1-rotate-rev')
		itemThree.classList.remove('item3-rotate-rev')
		itemTwo.classList.add('item2-display-none')
		itemFirst.classList.add('item1-rotate')
		itemThree.classList.add('item3-rotate')
		burgerBtn.classList.add('container-btn-border')
		mobileNav.classList.remove('mobile-nav-container-show-rev')
		mobileNav.classList.add('mobile-nav-container-show')
		mobileNavText.classList.add('aanimation')
	} else {
		// first step
		mobileNavHeight.classList.add('mobile-nav-show')
		itemTwo.classList.add('item2-display-none')
		itemFirst.classList.add('item1-rotate')
		itemThree.classList.add('item3-rotate')
		burgerBtn.classList.add('container-btn-border')
		mobileNav.classList.add('mobile-nav-container-show')
		mobileNavText.classList.add('aanimation')
	}
}
burgerBtn.addEventListener('click', btnClick)
burgerBtn.addEventListener('click', handleNavItemsAnimation)
