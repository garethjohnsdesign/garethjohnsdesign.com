$(document).foundation();

$('body').removeClass('fade-out');
		
$('a').mouseenter(function(){
	$('body').addClass('index--light');
}).mouseleave(function(){
	$('body').removeClass('index--light');
});

$('a').click(function(){
	$('body').addClass('index--light');
}).mouseleave(function(){
	$('body').removeClass('index--light');
});