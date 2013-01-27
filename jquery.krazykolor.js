(function( $ ) {
	$.fn.krazyKolor = function(options) {

		var settings = {
			colors: ['red', 'green', 'blue'],
			target: ''
		};

		$.extend(settings, options);

		$.each($(this), function(i, container){
			colorize(container);
		});

		function colorize(container){
			var $target = $(container);
			var text = $target.text();

			if(settings.target !== ''){
				$target = $target.find(settings.target);
				text = $target.text();
			}

			var chars = text.split("");

			$target.empty();

			$.each(chars, function(i, char){
				var colorIndex =  i % settings.colors.length;

				var $coloredSpan = $('<span/>').css({
					color: settings.colors[colorIndex]
				}).text(char);

				$target.append($coloredSpan);

				//console.log(i%settings.colors.length);
			});

			//console.log(chars);

		}

	};
})( jQuery );