$(document).foundation();

$('body').removeClass('fade-out');

// 1. Light Gallery
// --------------------
		
$('a').mouseenter(function(){
	$('body').addClass('home--light');
}).mouseleave(function(){
	$('body').removeClass('home--light');
});

$('a').click(function(){
	$('body').addClass('home--light');
}).mouseleave(function(){
	$('body').removeClass('home--light');
});


// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});