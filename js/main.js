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
      		.closest('div.tabs').find('div.works').fadeTo([100], 0).css("display", "none")
            .removeClass('active').eq($(this).index()).addClass('active').fadeTo([200], 1);
    });

    $('.read_more').on('click', function(){
        $(this).siblings('.post_more_text').slideToggle(500);
        if ($(this).hasClass('active') == true) {
        	$(this).removeClass('active')
        }else{
        	$(this).addClass('active')
        }
    });
    $('.saying').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: true,
        adaptiveHeight: true
    });
    $("a#button").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 700 );
      return false;
    });
});