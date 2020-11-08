$(document).ready(function(){

	$('.collapse ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top 
		},500);
	return false;
	});

	$('.go-head').click(function(){  
		$('html,body').animate({    
			scrollTop:0
		},500);
	return false;
	});

	$('.gallery-img-popup').magnificPopup({
	  type: 'image'
	  // other options
	});

	// aos animate
	AOS.init();
});




$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	if(scrollvalue>100){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
	}

});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    