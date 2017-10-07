$(document).ready(function(){
	$('.btn-floating').click(function(){
		$('.form').toggle("slow");
	});
	$('.form-icon').click(function(e){
	    $('.form-icon').removeClass('selected-form-icon' );
	    $(this).addClass('selected-form-icon');
	});
	$('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 5 // Creates a dropdown of 5 years to control year
  	});

	//Smooth scrolling for id jumps
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
});
});
