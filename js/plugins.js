// JavaScript Document
/* global $ , jQuery , alert */
$(function(){
    
    "use strick";
    //Nice scroll
    
    $("html").niceScroll();
    
    
    
	$('.carousel').carousel({
		
		interval:5000
	
	});
	    
	 
	 $(window).scroll(function(){
         
          var scrol = $(this).scrollTop();
         console.log(scrol);
         if(scrol > 288 )
         {
             $('.NavBarHead1').show();
         }
         else
         {
             $('.NavBarHead1').hide();
         }
     });
		
		 
 
		$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 700);
		return false;
		}
}
});
 
});