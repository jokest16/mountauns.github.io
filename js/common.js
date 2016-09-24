$(document).ready(function() {
	new WOW().init();
	if (screen.width <= 992){
		$('.top-pannel').hide();
		$(".toggle-mnu").click(function() {
			$('.top-pannel').slideDown();
			$('.top-line').hide();
			$(".toggle-mnu").hide();
			$('.close-menu').on('click',function (){
				$('.top-pannel').slideUp();
				$('.top-line').show();
				$(".toggle-mnu").show();
			})
	  	return false;
		});
	}else {
		$('.top-pannel').show();
	}
	$('input[type="button"]').on('click',function () {
		var email = $('input[type="email"]').val();
		var adr_pattern=/[0-9a-z_-]+@[0-9a-z_]+\.[a-z]{2,5}/i;//
		if(email==''|| email==" "){
			alert('Вы некоректно ввели свой email');
		}else if(adr_pattern.test(email)==false){
			alert('Вы некоректно ввели свой email');
		}
	});
	var $container = $(".masonry-container");
		$container.imagesLoaded(function () {
			$container.masonry({
				columnWidth: ".item-mos",
			itemSelector: ".item-mos"
			});
		});
			$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
