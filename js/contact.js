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

  $("input[type=button]").click(function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '../php/contact.php',
      data: $('.content-about form').serialize(),
      success: function(data){
        $("#contact-lonavala").append("<br><div align='center' class='thank'>Thank You! We will get back to you via email.<div>");
      }
    });

  });


});