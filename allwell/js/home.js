$(document).ready(function(){
	$(".button a").click(function(){
        $(".overlay").fadeToggle(200);
	    if ( $(".btn-open").css('display') != 'none' ){
		    $(".btn-open").css('display','none');
		    $(".wrap-menu").fadeToggle();
		    $(".btn-close").css('display','block') ;
	    }else{
       		$(".btn-close").css('display','none');
       		$(".btn-open").css('display','block') ;
		    $(".wrap-menu").fadeToggle();
	    }
    });
});