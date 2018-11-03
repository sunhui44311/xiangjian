$(function($) {
	var heiGht=$('.home-bottom-nav').height();
	$('.home-body').css('marginBottom',heiGht+'px');
})

$('.top-btn-te').on('click',function(){
	var animalType = $(this).attr("data-name");
	$('.'+animalType).slideToggle(300);
})


$('.top-btn').on('click',function(){
	$(".home-top-menu").slideToggle(300);
})