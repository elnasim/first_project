$(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".mobile-menu").slideToggle();
		return false;
	});

	//magnific-popup
	$('.gallery-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});




});
