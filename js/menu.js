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

    $('.mainmenusub').click(function(){
        $(this).siblings('.submenu').slideToggle('medium',function(){
            $('#cake-custom-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cake-celebration-mobile').css('display','none');
            if ($(this).is(':visible'))
                $(this).css('display','block');

        });
       
        event.preventDefault();
    });
    $('.mainmenu').click(function(){
        if($(this).siblings('.submenu').is(':visible')){
            $(this).siblings('.submenu').slideToggle();
        }
        event.preventDefault();
    });
    
    if($(window).width() < 960){
       $('.cake-celebration').click(function(){
            $('#cake-custom-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cake-celebration-mobile').slideToggle();
            event.preventDefault();
        });
        $('.cake-custom').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cake-custom-mobile').slideToggle();
            event.preventDefault();
        });
        $('.cake-gourmet').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cake-gourmet-mobile').slideToggle();
            event.preventDefault();
        });
        $('.cake-tea').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cake-tea-mobile').slideToggle();
            event.preventDefault();
        });
        $('.cupcake').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cupcake-mobile').slideToggle();
        });
        $('.cookie').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cookie-mobile').slideToggle();
        });
        $('.cakepop').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#cakepop-mobile').slideToggle();
        });
        $('.tart').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#tart-mobile').slideToggle();
        });
        $('.brownie').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#creampuff-mobile').css('display','none');
            $('#brownie-mobile').slideToggle();
        });
        $('.creampuff').click(function(){
            $('#cake-celebration-mobile').css('display','none');
            $('#cake-gourmet-mobile').css('display','none');
            $('#cake-tea-mobile').css('display','none');
            $('#cake-custom-mobile').css('display','none');
            $('#cookie-mobile').css('display','none');
            $('#cakepop-mobile').css('display','none');
            $('#tart-mobile').css('display','none');
            $('#brownie-mobile').css('display','none');
            $('#cupcake-mobile').css('display','none');
            $('#creampuff-mobile').slideToggle();
        });
    }
    if($(window).width() > 960){
        function isScrolledIntoView(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        $(function() {
            var $sidenav = $(".sidenav"), 
                $window    = $(window),
                offset     = $sidenav.offset(),
                topPadding = 15;

            $window.scroll(function() {
                if(!(isScrolledIntoView($('.social-links')))){
                    if ($window.scrollTop() > offset.top) {
                        $sidenav.stop().animate({
                            marginTop: $window.scrollTop() - offset.top + topPadding
                        });
                    } else {
                        $sidenav.stop().animate({
                            marginTop: 10
                        });
                    }
                }
            });
        });
        $('.cake-celebration').click(function(){
            $('#cake-custom').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cupcake').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cake-celebration').css('display', 'block');
            event.preventDefault();
        });
        $('.cake-custom').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cupcake').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cake-custom').css('display', 'block');
            event.preventDefault();
        });
        $('.cake-gourmet').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cupcake').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cake-gourmet').css('display', 'block');
            event.preventDefault();
        });
        $('.cake-tea').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cupcake').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cake-tea').css('display', 'block');
            event.preventDefault();
        });
        $('.cupcake').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cupcake').css('display', 'block');
        });
        $('.cookie').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cupcake').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cookie').css('display', 'block');
        });
        $('.cakepop').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cookie').css('display','none');
            $('#cupcake').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#cakepop').css('display', 'block');
        });
        $('.tart').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#cupcake').css('display','none');
            $('#brownie').css('display','none');
            $('#creampuff').css('display','none');
            $('#tart').css('display', 'block');
        });
        $('.brownie').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#cupcake').css('display','none');
            $('#creampuff').css('display','none');
            $('#brownie').css('display', 'block');
        });
        $('.creampuff').click(function(){
            $('#cake-celebration').css('display','none');
            $('#cake-gourmet').css('display','none');
            $('#cake-tea').css('display','none');
            $('#cake-custom').css('display','none');
            $('#cookie').css('display','none');
            $('#cakepop').css('display','none');
            $('#tart').css('display','none');
            $('#brownie').css('display','none');
            $('#cupcake').css('display','none');
            $('#creampuff').css('display', 'block');
        });
    }
});

/*$('.mainmenusub').click(function(){
    	if($(this).siblings('.submenu').is(':visible')){
    		$(this).siblings('.submenu').css('display', 'none');
    	}else{
    		$(this).siblings('.submenu').css('display', 'block'); 
    	}
    });
   
    $('.cake-celebration').click(function(){
    	$('#cake-custom').css('display','none');
    	$('#cake-gourmet').css('display','none');
    	$('#cake-tea').css('display','none');
    	$('#cupcake').css('display','none');
    	$('#cookie').css('display','none');
    	$('#cakepop').css('display','none');
    	$('#tart').css('display','none');
    	$('#brownie').css('display','none');
    	$('#creampuff').css('display','none');
    	$('#cake-celebration').css('display', 'block');

    });
    $('.cake-custom').click(function(){
    	$('#cake-celebration').css('display','none');
    	$('#cake-gourmet').css('display','none');
    	$('#cake-tea').css('display','none');
    	$('#cupcake').css('display','none');
    	$('#cookie').css('display','none');
    	$('#cakepop').css('display','none');
    	$('#tart').css('display','none');
    	$('#brownie').css('display','none');
    	$('#creampuff').css('display','none');
    	$('#cake-custom').css('display', 'block');
    });
    $('.cake-gourmet').click(function(){
    	$('#cake-celebration').css('display','none');
    	$('#cake-custom').css('display','none');
    	$('#cake-tea').css('display','none');
    	$('#cupcake').css('display','none');
    	$('#cookie').css('display','none');
    	$('#cakepop').css('display','none');
    	$('#tart').css('display','none');
    	$('#brownie').css('display','none');
    	$('#creampuff').css('display','none');
    	$('#cake-gourmet').css('display', 'block');
    });
    $('.cake-tea').click(function(){
    	$('#cake-celebration').css('display','none');
    	$('#cake-gourmet').css('display','none');
    	$('#cake-custom').css('display','none');
    	$('#cupcake').css('display','none');
    	$('#cookie').css('display','none');
    	$('#cakepop').css('display','none');
    	$('#tart').css('display','none');
    	$('#brownie').css('display','none');
    	$('#creampuff').css('display','none');
    	$('#cake-tea').css('display', 'block');
    });
    $('.cupcake').click(function(){
    	if($(this).siblings('.submenu').is(':visible')){
    		$(this).siblings('.submenu').css('display', 'none');
    	}
    	$('#cake-celebration').css('display','none');
    	$('#cake-gourmet').css('display','none');
    	$('#cake-tea').css('display','none');
    	$('#cake-custom').css('display','none');
    	$('#cookie').css('display','none');
    	$('#cakepop').css('display','none');
    	$('#tart').css('display','none');
    	$('#brownie').css('display','none');
    	$('#creampuff').css('display','none');
    	$('#cupcake').css('display', 'block');
    });*/
