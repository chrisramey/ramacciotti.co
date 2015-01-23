$(function(){
	$(window).resize(recenter);
	recenter();
});

var recenter = function() {
	$('body').height($(window).height());
};