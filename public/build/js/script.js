$(document).ready(function() {

	/**
		Console controller
	*/
	var debug = false;

	/**
		Initializer
	*/
	$('.carousel').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
  		lazyLoad: 'ondemand',
	});

	/**
		Google map and info-helpio sizing
	*/
	var winHeight = $(window).height();
	// console.log(winHeight);
	$('.scroll-wrapper').height(winHeight - 100);
	$('iframe').height(winHeight-42);

	$(window).resize(function() {
		winHeight = $(window).height();
		// console.log(winHeight);
		$('.scroll-wrapper').height(winHeight - 100);
		$('iframe').height(winHeight-42);
	});

	/**
		Popups
	*/

	var popProfile = false;
	$('.profile-wrapper').click(function() {
		if (popProfile == false) {
			// not clicked -> open popup
			// console.log('open');
			popProfile = true;
			$('.profile-expand').show();

			// turn off other popup
			if (popNotification == true) {
				$('img.notification').click();
			}
			if (popMessage == true) {
				$('img.message').click();
			}
		} else {
			// clicked -> close popup
			// console.log('close');
			popProfile = false;
			$('.profile-expand').hide();
		}
	});

	var popNotification = false;
	$('img.notification').click(function() {
		if (popNotification == false) {
			// not clicked -> open popup
			// console.log('open');
			popNotification = true;
			$('.notification-expand').show();

			// turn off other popup
			if (popProfile == true) {
				$('.profile-wrapper').click();
			}
			if (popMessage == true) {
				$('img.message').click();
			}
		} else {
			// clicked -> close popup
			// console.log('close');
			popNotification = false;
			$('.notification-expand').hide();
		}
	});

	var popMessage = false;
	$('img.message').click(function() {
		if (popMessage == false) {
			// not clicked -> open popup
			// console.log('open');
			popMessage = true;
			$('.message-expand').show();

			// turn off other popup
			if (popProfile == true) {
				$('.profile-wrapper').click();
			}
			if (popNotification == true) {
				$('img.notification').click();
			}
		} else {
			// clicked -> close popup
			// console.log('close');
			popMessage = false;
			$('.message-expand').hide();
		}
	});
});