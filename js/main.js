$(document).ready(function () {
	$('.about_img').slick({
	  	infinite: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	prevArrow: '<button type="button" class="slick-prev"></button>',
	  	nextArrow: '<button type="button" class="slick-next"></button>'
	});

	$('ul.section_text').on('click', 'li:not(.active)', function() {
    	$(this)
      		.addClass('active').siblings().removeClass('active')
      		.closest('div.tabs').find('div.works').removeClass('active').eq($(this).index()).addClass('active');
    });

});