/* -----------------------------------------------------------------------------

 index.js

----------------------------------------------------------------------------- */


/* splash
---------------------------------------------------*/
$(function(){

	function initparticles() {
		 bubbles();
	}

	function bubbles() {
		$.each($(".bubbles"), function(){
			var bubblecount = ($(this).width()/50)*10;
			for(var i = 0; i <= bubblecount; i++) {
				var size = ($.rnd(20,80)/8);
				$(this).append('<span class="particle particle01" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
				$(this).append('<span class="particle particle02" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
				$(this).append('<span class="particle particle03" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
				$(this).append('<span class="particle particle04" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
			}
		});
	}
	
	jQuery.rnd = function(m,n) {
				m = parseInt(m);
				n = parseInt(n);
				return Math.floor( Math.random() * (n - m + 1) ) + m;
	}
	
	initparticles();
	
});


/* service slider
---------------------------------------------------*/
$(function(){
	
	function slickServiceSlider() {
		var $serviceSlider = $('#service .slider');
		$serviceSlider.slick({
			dots: true,
			arrows: true,
			infinite: true,
			fade: true,
			speed: 0,
			touchThreshold: 10,
			autoplay: false
		});
		
		$serviceSlider.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			var changeCount = 'change0' + (nextSlide +1);
			
			$("#service").removeClass().addClass('section animate animated ' + changeCount);
			
		});
		
		
		var next;
		var flag1 = false;
		var flag8 = false;
		
		$serviceSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			
			next = nextSlide;
			
			if($(".slide01").hasClass("slick-current")){
				flag1 = true;
			} else {
				flag1 = false;
			}
			if($(".slide08").hasClass("slick-current")){
				flag8 = true;
			} else {
				flag8 = false;
			}
		});
		
		$serviceSlider.on('afterChange', function(slick, currentSlide, nextSlide){
			
			if(flag1 && next === 7){
				$("#service").addClass('change09');
				setTimeout(function(){
					$("#service").removeClass('change09');
				},600);
			}
			if(flag8 && next === 0){
				$("#service").addClass('change09');
				setTimeout(function(){
					$("#service").removeClass('change09');
				},600);
			}
		});
		
	}
	slickServiceSlider();
	
	$('.slick-slide').bind('touchstart', function(){
		return true;
	});

});


/* gallery slider
---------------------------------------------------*/
$(window).on('load ', function(){
	$('#gallery ul').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		speed: 5000,
		centerMode: true,
		variableWidth: true,
		slidesToScroll: 1,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		infinite: true

	});
});


/* solution hover
---------------------------------------------------*/
$(function(){
	$(".solution .btnLink a").hover(function(){
		$(this).parents(".solutionBox").toggleClass("on");
	});
});


/* mCustomScrollbar
---------------------------------------------------*/
$(window).on('load ', function(){
	$(".scrollbar").mCustomScrollbar({
		advanced:{
			updateOnContentResize: true
		},
		scrollInertia: 200
	});
});


/* matchHeight
----------------------------------------------*/
$(window).on('load resize', function(){
	setTimeout(function(){
		$('.solution .balloon').matchHeight();
	},500);
});




