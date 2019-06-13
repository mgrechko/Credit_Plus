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

//input range progress - start
function amountRangeProgress(){
	let val = $('.amount-range').val();
	val = ((val-500)*100)/(4000-500);
	$('.amount-range').css({'background':'-webkit-linear-gradient(left ,#ff8900 0%,#ff8900 '+val+'%,#ccd5df '+val+'%, #ccd5df 100%)'})
}
function termRangeProgress(){
	let val = $('.term-range').val();
	val = ((val-5)*100)/(30-5);
	$('.term-range').css({'background':'-webkit-linear-gradient(left ,#ff8900 0%,#ff8900 '+val+'%,#ccd5df '+val+'%, #ccd5df 100%)'})
}
function amountPlus(){
	let val = parseInt($('.amount-range').val());
	val += 100;
	if(val >= 4000){
		val = 4000;
	}
	$('.amount-range').val(val);
	amountRangeProgress();
}
function amountMinus(){
	let val = parseInt($('.amount-range').val());
	val -= 100;
	if(val <= 500){
		val = 500;
	}
	$('.amount-range').val(val);
	amountRangeProgress();
}
function termPlus(){
	let val = parseInt($('.term-range').val());
	val += 1;
	if(val >= 30){
		val = 30;
	}
	$('.term-range').val(val);
	termRangeProgress();
}
function termMinus(){
	let val = parseInt($('.term-range').val());
	val -= 1;
	if(val <= 1){
		val = 1;
	}
	$('.term-range').val(val);
	termRangeProgress();
}
//input range progress - end

//inputs value - start
function amountRangeChange(){
	let amountRange = parseInt($('.amount-range').val());
	let percent = parseInt($('.percent_amount_num').text());
	percent += amountRange;
	$('.amount-input').val(amountRange+' грн');
	$('.money_amount_num').html(amountRange+' грн');
	$('.total_amount_num').html(percent+' грн');
}
function amountInputChange(){
	let amountInput = parseInt($('.amount-input').val());
	if(amountInput <= 500){amountInput = 500}
	if(amountInput >= 4000){amountInput = 4000}
	$('.amount-range').val(amountInput);
	if(amountInput != $('.amount-range').val()){amountInput = $('.amount-range').val()}
	let percent = parseInt($('.percent_amount_num').text());
	percent += amountInput;
	$('.amount-input').val(amountInput+' грн');
	$('.money_amount_num').html(amountInput+' грн');
	$('.total_amount_num').html(percent+' грн');
	amountRangeProgress();
}
function termRangeChange(){
	let monthArr=[
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
	];
	let termRange = parseInt($('.term-range').val());
	let days = ' дней';
	let currentDate = new Date();
	if(termRange == 21){days = ' день'}
	if(termRange > 21 && termRange <= 24){days = ' дня'}
	currentDate.setDate(currentDate.getDate() + termRange);
	let month = currentDate.getMonth();
	let day = currentDate.getDate();
	$('.term-input').val(termRange+days);
	$('.total_date').html('до '+day+' '+monthArr[month]);
}

function termInputChange(){
	var monthArr=[
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
	];
	let termInput = $('.hidden-input').val().split(".");
	var termDate = new Date(termInput[2], termInput[1] - 1, termInput[0]);
	var currentDate = new Date();
	var newDate = new Date();
	var daysLag = Math.ceil(Math.abs(termDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
	let days = ' дней';
	if(daysLag == 21){days = ' день'}
	if(daysLag > 21 && daysLag <= 24){days = ' дня'}
	if(daysLag <= 5) daysLag = 5;
	if(daysLag >= 30) daysLag = 30;
	newDate.setDate(newDate.getDate()+daysLag);
	let month = newDate.getMonth();
	let day = newDate.getDate();
	$('.term-input').val(daysLag+days);
	$('.term-range').val(daysLag);
	$('.total_date').html('до '+day+' '+monthArr[month]);
	termRangeProgress();
}
//inputs value - end

//features tabs - start
function tabSwitch(d){
	if($(window).width() <= 1024 && d.hasClass('features-block__tab-h')){
		let dAtr = d.attr('data-tab');

		let tabH = $('.features-block__tab-h');
		for(var i=0; i<tabH.length; i++){
			$(tabH[i]).removeClass('tab-active');
		}
		$(d).addClass('tab-active');

		let tabBody = $('.clients-block');
		for(var i = 0; i < tabBody.length; i++){
			if (dAtr == i){
				$(tabBody[i]).css({'display':'flex'});
			}
			else{
				$(tabBody[i]).css({'display':'none'});
			}
		}
	}
	if(d.hasClass('credit-desc-block__tab-h')){
		let dAtr = d.attr('data-tab');

		let tabH = $('.credit-desc-block__tab-h');
		for(var i=0; i<tabH.length; i++){
			$(tabH[i]).removeClass('tab-active');
		}
		$(d).addClass('tab-active');

		let tabBody = $('.credits-block');
		for(var i = 0; i < tabBody.length; i++){
			if (dAtr == i){
				$(tabBody[i]).css({'display':'block'});
			}
			else{
				$(tabBody[i]).css({'display':'none'});
			}
		}
	}
}
//features tabs - end

//video - start
function creditVideo(selector){
	$(window).resize(function(){
		let videoWidth = $('.credit-block__video-block').width();
		let videoHeight = (videoWidth*56.25)/100;
		$('.credit-block__video-block').height(videoHeight);
	});
	$(window).resize();
	
	let crBlock = $(selector);
	let play = crBlock.find('.credit-block__video_link');
	let overlay = crBlock.find('.credit-block__video-overlay');
	let videoBlock = crBlock.find('.credit-block__video-block');
	let videoEl = crBlock.find('iframe');
	let videoElSrc = crBlock.find('iframe').attr('src');

	play.on('click', () => toggleVideo());
	overlay.on('click', () => toggleVideo());

	function toggleVideo(){
		videoBlock.toggleClass('active');
		overlay.toggleClass('active');
		if(videoBlock.hasClass('active')){
			$(videoEl).attr('src',videoElSrc);
		}
		else{
			$(videoEl).attr('src','');
		}
	}

}
//video - end

//sliders adaptive - start
$(window).resize(function(){
	slider('.reviews-block');
	slider('.media-reviews-block');
});
//sliders adaptive - end

//sliders - start
function slider(selector){
	let sliderBlock = $(selector);
	let slidesBlock = sliderBlock.find('.slider');
	let sliderLine = sliderBlock.find('.slider-line');
	let slideBlock = sliderBlock.find('.slide-block');
	let slideBlockWidth = $(slideBlock).width();
	let prevButton = sliderBlock.find('.prev');
	let nextButton = sliderBlock.find('.next');
	let dots = sliderBlock.find('.dots');

	let left = 0;

	$(slidesBlock).width((slideBlockWidth * 3) + 90);
	if($(window).width() < 1400){
		$(slidesBlock).width((slideBlockWidth * 2) + 45);
	}
	if($(window).width() <= 740){
		$(slidesBlock).width(slideBlockWidth);
	}

	$(sliderLine).width(($(slideBlock).length * slideBlockWidth) + (($(slideBlock).length) - 1) * 45);
	let leftSwipe = "-" + ($(sliderLine).width() - $(slidesBlock).width());

	$(prevButton).prop('disabled', true);
	$(nextButton).click(sliderLeft);
	$(prevButton).click(sliderRight);

	let dotAmount = $(sliderLine).width() / $(slidesBlock).width();
	dotAmount = Math.floor(dotAmount);

	$(dots).empty();
	sliderDot(0);
	for(let i=0; i<dotAmount; i++){
		let activeDot = '';
		if (i == 0){
			activeDot = 'active-dot';
		}
		$(dots).append('<div class="dot '+activeDot+'" data-index="'+i+'"></div>');
	}
	let dot = sliderBlock.find('.dot');
	$(dot).click(function(){
		let mgRange = 0;
		for(let i = 0; i<$(this).index(); i++){
			mgRange = 45*i;
		}
		sliderDot(($(this).index() * $(slidesBlock).width()) + mgRange);
		$(dot).removeClass('active-dot');
		$(this).addClass('active-dot');
	});

	$(sliderLine).swipe({
        swipeLeft:swipeLeft,
        swipeRight:swipeRight,
        threshold:0
	});

	function swipeLeft(){		
		if (left > leftSwipe){
			sliderLeft();
		}
	}
	function swipeRight(){		
		if (left < 0){
			sliderRight();
		}
	}
	function sliderLeft(){
		let dotRange = 0;
		let dot = sliderBlock.find('.dot');
		left = left - (slideBlockWidth+45);
		sliderLine.css("left", left+"px");

		if (left <= leftSwipe){
			$(nextButton).prop('disabled', true);
		}
		else{
			$(nextButton).prop('disabled', false);
		}
		if (left >= 0){
			$(prevButton).prop('disabled', true);
		}
		else{
			$(prevButton).prop('disabled', false);
		}
		for(let i=0; i<dot.length; i++){
			let mgDotRange = (i) * 45;
			if($(dot[i]).attr('data-index') == 0){
				dotRange = $(dot[i]).attr('data-index') * $(slidesBlock).width();
				
				if(dotRange === left){
					$(dot).removeClass('active-dot');
					$(dot[i]).addClass('active-dot');
				}
			}
			else{
				dotRange = parseInt('-'+$(dot[i]).attr('data-index')*$(slidesBlock).width());
				dotRange -= mgDotRange;
				if(dotRange === left){
					$(dot).removeClass('active-dot');
					$(dot[i]).addClass('active-dot');
				}
			}
		}
	}
	function sliderRight(){
		let dot = sliderBlock.find('.dot');
		let dotRange = 0;
		left = left + (slideBlockWidth+45);
		sliderLine.css("left", left+"px");
		if (left <= leftSwipe){
			$(nextButton).prop('disabled', true);
		}
		else{
			$(nextButton).prop('disabled', false);
		}
		if (left >= 0){
			$(prevButton).prop('disabled', true);
		}
		else{
			$(prevButton).prop('disabled', false);
		}
		for(let i=0; i<dot.length; i++){
			let mgDotRange = (i) * 45;
			if($(dot[i]).attr('data-index') == 0){
				dotRange = $(dot[i]).attr('data-index') * $(slidesBlock).width();
				
				if(dotRange === left){
					$(dot).removeClass('active-dot');
					$(dot[i]).addClass('active-dot');
				}
			}
			else{
				dotRange = parseInt('-'+$(dot[i]).attr('data-index')*$(slidesBlock).width());
				dotRange -= mgDotRange;
				if(dotRange === left){
					$(dot).removeClass('active-dot');
					$(dot[i]).addClass('active-dot');
				}
			}
		}
	}

	function sliderDot(n){
		left = n;
		if(n > 0){
			left+=45;
			left = parseInt('-'+left);
		}

		sliderLine.css("left", left+"px");
		if (left <= leftSwipe){
			$(nextButton).prop('disabled', true);
		}
		else{
			$(nextButton).prop('disabled', false);
		}
		if (left >= 0){
			$(prevButton).prop('disabled', true);
		}
		else{
			$(prevButton).prop('disabled', false);
		}
	}
}
//sliders - end

//reviews slider text limit - start
function revSliderTextLimit(){
	let revSlideBody = $('.reviews-slide_body');
	for(let i=0; i<revSlideBody.length; i++){
		if($(revSlideBody[i]).text().length > 285){
			$(revSlideBody[i]).text($(revSlideBody[i]).text().substring(0, 285));
			let lastIndex = $(revSlideBody[i]).text().lastIndexOf(" ");
			$(revSlideBody[i]).text($(revSlideBody[i]).text().substring(0, lastIndex) + '...');
		}
	}
}
//reviews slider text limit - end

//media reviews slider text limit - start
function mediaRevSliderTextLimit(){
	let revSlideBody = $('.media-reviews-slide_body');
	for(let i=0; i<revSlideBody.length; i++){
		if($(revSlideBody[i]).text().length > 110){
			$(revSlideBody[i]).text($(revSlideBody[i]).text().substring(0, 110));
			let lastIndex = $(revSlideBody[i]).text().lastIndexOf(" ");
			$(revSlideBody[i]).text($(revSlideBody[i]).text().substring(0, lastIndex) + '...');
		}
	}
}
//media reviews slider text limit - end

//content switch - start
function contentSwitch(){
	$('.description-block__content_items').slideToggle(300);
	$('.description-block__content').toggleClass('hidden');

	if($('.description-block__content').hasClass('hidden')){
		$('.description-block__content_switch').html('Показать');
	}
	else{
		$('.description-block__content_switch').html('Скрыть');
	}
}
//content switch - end

//services switch - start
function servicesSwitch(){
	$('.services-block').toggleClass('hidden');
	
	if($(window).width() > 1024){
		$('.services-block__text').slideToggle(300);
	}
	else{
		$('.services-block__text_adaptive').slideToggle(300);
	}

}
//services switch - end


$(document).ready(function(){
	burgerMenu('.burger-menu');
	amountRangeProgress();
	$('.amount-range').on('input', () => amountRangeProgress());
	amountRangeChange();
	$('.amount-range').on('input', () => amountRangeChange());
	termRangeChange();
	$('.term-range').on('input', () => termRangeChange());
	termRangeProgress();
	$('.term-range').on('input', () => termRangeProgress());
	$('.amount-plus-button').on('click', () => amountPlus());
	$('.amount-plus-button').on('click', () => amountRangeChange());
	$('.amount-minus-button').on('click', () => amountMinus());
	$('.amount-minus-button').on('click', () => amountRangeChange());
	$('.term-plus-button').on('click', () => termPlus());
	$('.term-plus-button').on('click', () => termRangeChange());
	$('.term-minus-button').on('click', () => termMinus());
	$('.term-minus-button').on('click', () => termRangeChange());
	$('.amount-input').on('change', () => amountInputChange());
	$('.hidden-input').on('change', () => termInputChange());
	$('.datepicker').pickadate({
		format: 'dd.mm.yyyy',
		min: +5,
 		max: +30
	});
	$('.features-block__tab-h').on('click', function(){
		let cTab = $(this);
		tabSwitch(cTab);
	});
	$('.credit-desc-block__tab-h').on('click', function(){
		let cTab = $(this);
		tabSwitch(cTab);
	});
	creditVideo('.take-credit-block');
	creditVideo('.repay-credit-block');
	$(window).resize();
	slider('.reviews-block');
	slider('.media-reviews-block');
	revSliderTextLimit();
	mediaRevSliderTextLimit();
	$('.description-block__content_switch').on('click', () => contentSwitch());
	$('.services-block__title_switch').on('click', () => servicesSwitch());
});