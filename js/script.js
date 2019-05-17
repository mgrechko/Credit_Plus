//burger menu - start
function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.burger-menu__burger');
	let links = menu.find('.burger-menu__nav_link');
	let authLink = menu.find('.burger-menu__auth-link');
	let phoneLink = menu.find('.burger-menu__contacts_phone');
	let languageLink = menu.find('.burger-menu__contacts_language_link');
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', () => toggleMenu());
	links.on('click', () => toggleMenu());
	authLink.on('click', () => toggleMenu());
	phoneLink.on('click', () => toggleMenu());
	languageLink.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu(){
		menu.toggleClass('burger-menu-active');
	}
}
//burger menu - end

$(document).ready(function(){
	burgerMenu('.burger-menu');
});