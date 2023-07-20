$(document).ready(function(){
	
	$('.popular-tabs-item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.popular-tabs-item').removeClass('current-tab');
		$('.popular-goods-cards').removeClass('current-tab');

		$(this).addClass('current-tab');
		$("#"+tab_id).addClass('current-tab');
    
    
	})

    var swiper = new Swiper(".mySwiper-popular", {
        slidesPerView: 1,
        spaceBetween: 10,
        
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });

})



