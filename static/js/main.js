
$(document).ready(function(){
	$(window).trigger('scroll');
	//输入框拉长
	$('textarea').focus(function(){
	    $(this).animate({
		minHeight:160
		},800)
	})
	$('textarea').blur(function(){
	    $(this).animate({
		minHeight:80
		},800)
	})
});








