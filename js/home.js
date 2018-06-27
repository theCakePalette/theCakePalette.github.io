$(document).ready(function(){

	$(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       if ( $(".btn-open").css('display') != 'none' ){
       		$(".btn-open").css('display','none');
       		$(".btn-close").css('display','block') ;
       }else{
       		$(".btn-close").css('display','none');
       		$(".btn-open").css('display','block') ;
       }
    });
    $('.overlay').on('click', function(){
	    $(".overlay").fadeToggle(200);   
	    if ( $(".btn-open").css('display') != 'none' ){
       		$(".btn-open").css('display','none');
       		$(".btn-close").css('display','block') ;
        }else{
       		$(".btn-close").css('display','none');
       		$(".btn-open").css('display','block') ;
       }
	});

	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,3000);
	function nextSlide() {
	    slides[currentSlide].className = 'slide';
	    currentSlide = (currentSlide+1)%slides.length;
	    slides[currentSlide].className = 'slide showing';
	}
	var playing = true;
	$(".slide").click(function() {
	    if(playing) {
	    pauseSlideshow();
	  } else {
	    playSlideshow();
	  }
	});
	function pauseSlideshow() {
	    playing = false;
	    clearInterval(slideInterval);
	}
	function playSlideshow() {
	    playing = true;
	    slideInterval = setInterval(nextSlide,3000);
	}

	if($(window).width() <= 961){
		var welHgt = $(".header").outerHeight() + $(".showing").outerHeight() + 35;
		$(".content").css("top", welHgt);
		var footHgt = $(".header").outerHeight() + $(".showing").outerHeight() + $(".content").outerHeight() - 150;
		$(".footer").css("top", footHgt);
	}
	if($(window).width() > 961){
		var footHgt = $(".header").outerHeight() + $(".showing").outerHeight() + $(".content").outerHeight() + 160;
		$(".footer").css("top", footHgt);
	}

	/*var copyHgt = $(".header").outerHeight() + $(".showing").outerHeight() + $(".content").outerHeight() + $(".footer").outerHeight() - 109;
	$(".copyright").css("top", copyHgt);*/
});

$(window).resize(function() {
   if($(window).width() <= 961){
		var welHgt = $(".header").outerHeight() + $(".showing").outerHeight() + 35;
		$(".content").css("top", welHgt);
		var footHgt = $(".header").outerHeight() + $(".showing").outerHeight() + $(".content").outerHeight() - 150;
		$(".footer").css("top", footHgt);
	}
	if($(window).width() > 961){
		var footHgt = $(".header").outerHeight() + $(".showing").outerHeight() + $(".content").outerHeight() + 160;
		$(".footer").css("top", footHgt);
	}
	
});