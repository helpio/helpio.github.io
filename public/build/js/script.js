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
		arrows: false,
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
	$('.profile-wrapper-header').click(function() {
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

	$('.profile-close-button').click(function() {
		popProfile = false
		$('.profile-expand').hide();
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
				$('.profile-wrapper-header').click();
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
				$('.profile-wrapper-header').click();
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

	/**
		Comment: Like
	*/
	/*$('.comment-on').click(function() {
		$(this).html("<img src='build/img/heart-off.png'/>");
		$(this).removeClass("comment-on");
		$(this).addClass("comment-off");
		console.log("asd");
	});
	$('.comment-off').click(function() {
		$(this).html("<img src='build/img/heart-on.png'/>");
		$(this).removeClass("comment-off");
		$(this).addClass("comment-on");
	});*/

	/**
		Message
	 */
	 $('.unread').click(function() {
	 	$(this).removeClass("unread");
	 	checkUnread();
	 });

	 $('.wrapper-message').click(function() {
	 	$('.message-list').hide();
	 	$('.message-load-more').hide();
	 	$('.message-detail').show();
	 	// $('.message-detail').scrollTop(200);
	 });

	 $('.message-back').click(function() {
	 	$('.message-detail').hide();
	 	$('.message-list').show();
	 	$('.message-load-more').show();
	 });

	 /**
	  * Icon on top right header
	 */
	 function checkUnread() {
		 if ($('.notification-content').hasClass("unread")) {
		 	$('.additional-info img.notification').attr("src", "build/img/icons/notif-on.png");
		 } else {
		 	$('.additional-info img.notification').attr("src", "build/img/icons/notif-off.png");
		 }
		 if ($('.wrapper-message').hasClass("unread")) {
		 	$('.additional-info img.message').attr("src", "build/img/icons/mail-on.png");
		 } else {
		 	$('.additional-info img.message').attr("src", "build/img/icons/mail-off.png");
		 }
	}

	 /**
	  * Content
	  */
	 $('#comment-button').click(function() {
	 	var content = $('.comment-input').val();
	 	var str = '<div class="content-message-wrapper">\
						<div class="col-lg-3">\
							<img src="build/img/profile.png" class="width-full"/>\
						</div>\
						<div class="col-lg-9"><div class="row"><div class="comment-name">Jessica Miller</div><div class="comment-message">\
						'+ content +'\
						</div><div class="comment-time">Just now</div></div></div>\
						<div class="comment-like comment-off">\
							<img src="build/img/heart-off.png"/>\
						</div>\
					</div>'
		$('#content-comment').append(str);
		location.hash = "#comment-new";
	 });
});