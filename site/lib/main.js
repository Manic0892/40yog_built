$(window).load(function() {
	var debug = getParameterByName('debug');
	if (debug == 'true' || debug == '1')
		$('.ig_debug').show('slow');
	$('html, body').animate({scrollTop:$('#game').position().top}, 'slow');
});