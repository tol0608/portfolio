(function ($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	/*----------------------------------------------------*/
	/*  MailChimp Slider
    /*----------------------------------------------------*/
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
	mailChimp();

	$('select').niceSelect();
	/* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
	$(window).on('load', function () {
		$('.portfolio-filter ul li').on('click', function () {
			$('.portfolio-filter ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('portfolio')) {
			var $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.all',
				percentPosition: true,
				masonry: {
					columnWidth: '.all'
				}
			});
		}
	});

	/*----------------------------------------------------*/
	/* Start Magnific Pop Up
	/*----------------------------------------------------*/
	if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	/*----------------------------------------------------*/
	/*  End  Magnific Pop Up
	/*----------------------------------------------------*/

	/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	function testimonials_slider() {
		if ($('.testi_slider').length) {
			$('.testi_slider').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 2
					}
				}
			});
		}
	}
	testimonials_slider();

	/*----------------------------------------------------*/
	/*  Google map js
    /*----------------------------------------------------*/

	if ($('#mapBox').length) {
		var $lat = $('#mapBox').data('lat');
		var $lon = $('#mapBox').data('lon');
		var $zoom = $('#mapBox').data('zoom');
		var $marker = $('#mapBox').data('marker');
		var $info = $('#mapBox').data('info');
		var $markerLat = $('#mapBox').data('mlat');
		var $markerLon = $('#mapBox').data('mlon');
		var map = new GMaps({
			el: '#mapBox',
			lat: $lat,
			lng: $lon,
			scrollwheel: false,
			scaleControl: true,
			streetViewControl: false,
			panControl: true,
			disableDoubleClickZoom: true,
			mapTypeControl: false,
			zoom: $zoom,
			styles: [{
					featureType: 'water',
					elementType: 'geometry.fill',
					stylers: [{
						color: '#dcdfe6'
					}]
				},
				{
					featureType: 'transit',
					stylers: [{
							color: '#808080'
						},
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [{
							visibility: 'on'
						},
						{
							color: '#dcdfe6'
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.fill',
					stylers: [{
						color: '#ffffff'
					}]
				},
				{
					featureType: 'road.local',
					elementType: 'geometry.fill',
					stylers: [{
							visibility: 'on'
						},
						{
							color: '#ffffff'
						},
						{
							weight: 1.8
						}
					]
				},
				{
					featureType: 'road.local',
					elementType: 'geometry.stroke',
					stylers: [{
						color: '#d7d7d7'
					}]
				},
				{
					featureType: 'poi',
					elementType: 'geometry.fill',
					stylers: [{
							visibility: 'on'
						},
						{
							color: '#ebebeb'
						}
					]
				},
				{
					featureType: 'administrative',
					elementType: 'geometry',
					stylers: [{
						color: '#a7a7a7'
					}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry.fill',
					stylers: [{
						color: '#ffffff'
					}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry.fill',
					stylers: [{
						color: '#ffffff'
					}]
				},
				{
					featureType: 'landscape',
					elementType: 'geometry.fill',
					stylers: [{
							visibility: 'on'
						},
						{
							color: '#efefef'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [{
						color: '#696969'
					}]
				},
				{
					featureType: 'administrative',
					elementType: 'labels.text.fill',
					stylers: [{
							visibility: 'on'
						},
						{
							color: '#737373'
						}
					]
				},
				{
					featureType: 'poi',
					elementType: 'labels.icon',
					stylers: [{
						visibility: 'off'
					}]
				},
				{
					featureType: 'poi',
					elementType: 'labels',
					stylers: [{
						visibility: 'off'
					}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry.stroke',
					stylers: [{
						color: '#d6d6d6'
					}]
				},
				{
					featureType: 'road',
					elementType: 'labels.icon',
					stylers: [{
						visibility: 'off'
					}]
				},
				{},
				{
					featureType: 'poi',
					elementType: 'geometry.fill',
					stylers: [{
						color: '#dadada'
					}]
				}
			]
		});
	}

	// 팝업 시작
	// $(function(){
	// 	$(".img-fluid").click(function(){
	// 		modalClose(); //모달 닫기 함수 호출

	// 		//컨펌 이벤트 처리
	// 	});
	// 	$("#modal-open").click(function(){        
	// 		$("#popup_box").css('display','flex').hide().fadeIn();
	// 		//팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
	// 	});
	// 	$(".img-fluid").click(function(){
	// 		modalClose(); //모달 닫기 함수 호출
	// 	});
	// 	function modalClose(){
	// 		$("#popup_box").fadeOut(); //페이드아웃 효과
	// 	}
	//   });
	
})(jQuery);

// $(function(){
// 	$('.popup_a').each(function () {
// 		$(this).click(function (event) {
// 			event.preventDefault()
// 			var img_src = $(this).attr('href');
// 			$('#modal').fadeIn();
// 			$('#modal img').attr('src', img_src);
// 			// $('#modal .txt').text(img_src); 글씨를 추가하고싶을때(제목)
// 		})
// 	})
// 	$("#modal button,#modal").click(function () {
// 		$("#modal").fadeOut();
// 	});
// 	// 팝업 끝

// 	$('.non_act').click(function () {
// 		return false;
// 	});
// })

$(function(){
	$('.popup_a').each(function () {
		$(this).click(function (event) {
			event.preventDefault()
			var img_src = $(this).attr('href');
			$('#modal').addClass('pop_open');
			$('#modal img').attr('src', img_src);
			// $('#modal .txt').text(img_src); 글씨를 추가하고싶을때(제목)
		})
	})
	$("#modal button,#modal").click(function () {
		$("#modal").removeClass();
	});
	// 팝업 끝

	$('.non_act').click(function () {
		return false;
	});
})
