(function($){
	//when to be done with the transformation
	var endTransformationPoint = 300;
	
	//how far along we are, 0 = top of window
	var percentage = 0;
	
	//the current css, the ending css, and a placeholder for the difference between the two
	var logoCss = {
		start: {
			'fontSize'  : parseInt($('#logo').css('fontSize')),
			'lineHeight': parseInt($('#logo').css('lineHeight')),
			'top'       : parseInt($('#logo').css('top'))
		},
		end: {
			'fontSize'  : 50,
			'lineHeight': 25,
			'top'       : 0
		},
		spread: {}
	};
	
	//fill in the spread
	for (var key in logoCss.start) {
		logoCss.spread[key] = logoCss.start[key] - logoCss.end[key];
	}
	
	
	
	if ($(window).width() > 768) {
		//bind window scrolling to the logo transformation
		$(window).on('scroll', function(e){
			scrollLogo();
		});
		
		//start it off
		scrollLogo();
	}
	
	$('#logo, .navbar-nav > li > a').each(function(i, ele) {
		$(this).bind('click', function(e){
			e.preventDefault();
			
			$(".navbar-collapse").collapse('hide');
			
			scrollTo($(this).attr('href'));
		});
	});
	
	
	function scrollLogo() {
		
		//how far the window has been scrolled
		var scrollTop = $(window).scrollTop(); 
		
		//how far toward our endPoint we are in decimal form: .25 = 25%
		percentage = scrollTop / endTransformationPoint;
		percentage = percentage > 1 ? 1 : percentage;
					
		$('#logo').css({
			'fontSize'  : formatValue('fontSize'),
			'lineHeight': formatValue('lineHeight'),
			'top'       : formatValue('top')
			
		
		});		
	}
	
	//find the new value by subtracting the percent of the spread from the beginning
	function formatValue(key) {
		var subtract = logoCss.spread[key] * percentage;
		var newValue = logoCss.start[key] - subtract + 'px';		
		
		return newValue;
	}
	
	function scrollTo(target) {
		
		console.log(target);
		
		var scrollTop = $(target).offset().top;
		
		$('html, body').animate({ scrollTop: scrollTop }, 500);
	}
	
})(jQuery);