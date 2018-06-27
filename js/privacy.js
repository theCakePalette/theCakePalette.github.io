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
});