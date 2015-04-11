$(document).ready(function(){

   var scrollTransparece = function(limit, selector){
	   $(document).scroll(function() {
		    if($(this).scrollTop()>limit){
		      //console.log($(this).scrollTop());
		      $(selector).addClass('scrolled');
		    }
		    else{
		      $(selector).removeClass('scrolled');
		    }
	   });
   };

   scrollTransparece(54, ".header");
   scrollTransparece(54, ".login");

  $('.header-mobileMenu').click(function(){

    $('.nav-primary').slideToggle(function(){return 0;},function(){
          if($('.login').hasClass('menu-expanded')){
            $('.login').removeClass('menu-expanded');
          }
          else{
            $('.login').addClass('menu-expanded')
          }
        });
  });

  $('.header-login').click(function(){
    $('.login').slideToggle('medium');
  });

});