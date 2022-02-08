// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:false,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		variableWidth:true,
		speed:1000,
		waitForAnimate:false,
		easing:'ease',
		touchTreshhold:15,
		centerMode:true,
		responsive: [
			{
				breakpoint: 780,
				setting: {
					slidesToShow:2,
					slidesToScroll:1,
					centerMode:false,
				}
			},{
				breakpoint: 480,
				setting: {
					slidesToShow:1,
					slidesToScroll:1,
					centerMode:false,
				}
			}
		]
	});
	
});