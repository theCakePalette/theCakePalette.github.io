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
                        marginTop: 0
                    });
                }
            }
        });
    
    });

    $('.mainmenusub').click(function(){
    	if($(this).siblings('.submenu').is(':visible')){
    		$(this).siblings('.submenu').css('display', 'none');
    	}else{
    		$(this).siblings('.submenu').css('display', 'block'); 
    	}
        event.preventDefault();
    });
    $('.mainmenu').click(function(){
    	if($(this).siblings('.submenu').is(':visible')){
    		$(this).siblings('.submenu').css('display', 'none');
    	}
        event.preventDefault();
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