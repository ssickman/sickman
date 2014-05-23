(function($){

	var $bodyHeight = $(body).height();
	$(window).on('scroll', function(e){

		//setBorderRadious();
	});
	
	//setBorderRadious();
	function setBorderRadious() {
		var borderRadiusPercentage = 50;
		borderRadiusPercentage -= ($(window).scrollTop() / $bodyHeight) * 100 * 2;
		
		console.log(borderRadiusPercentage);
		
		$('#logo').css('border-radius', borderRadiusPercentage + '%');
	}
})(jQuery);