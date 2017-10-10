var tips=["label-default","label-primary","label-success","label-info","label-warning","label-danger"];
$(document).ready(function(){
	//给标签添加颜色
	var j=0;
	var k=0;
    for(var i=0;i<$('.label').length;i++){
		if(i%tips.length===0){j=0;}
        $('.label:eq('+i+')').addClass(tips[j]);
		j++;
	}
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








