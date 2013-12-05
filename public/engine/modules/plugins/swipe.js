todoApp.Plugins.Swipe = function (element, toggleClassCallback, removeItemCallback) {

	if (element) {

		var eventStartPosition
			, eventMovePosition
			, eventSpacing
			, eventDirection
			, isActive

	    	, action = function (body, callback, delay) {
		    	if (typeof body === 'function') {
		           	body();
		        }

		        if (typeof callback === 'function') {
		            setTimeout(function () {
						callback();
					}, delay || 0);	
		        }		    	
	    	}

		    , resumeItem = function () {
		    	element.style.webkitTransform  = 'translate(0px)';
			    element.style.webkitTransition = '-webkit-transform 1s ease';
		    }

		    , hideItem = function () {
                element.style.height            = 0;
                element.style.padding           = 0;
                element.style.opacity           = 0;
                element.style.margin            = 0;
                element.style.webkitTransition  = 'opacity 0.05s ease, margin 0.4s ease 0.1s, height 0.4s ease 0.1s, padding 0.4s ease 0.1s';
		    }

		    , eventStart = function (e) {
		    	isActive = true;
		    	eventStartPosition = e.clientX || e.changedTouches[0].clientX;	
		    }

		    , eventMove = function (e) {
		    	e.preventDefault();

		    	if (isActive) {
		    		eventMovePosition   = e.clientX || e.targetTouches[0].clientX;
		            eventSpacing        = eventMovePosition - eventStartPosition;
		            eventDirection      = (eventSpacing > 0) ? 'right' : 'left';

		            element.style.webkitTransition = '';
		            element.style.webkitTransform  = 'translate('+ eventSpacing + 'px)';	
		    	}
		    }

		    , eventEnd = function (e) {
		    	isActive = false;
		    	if (!eventSpacing || Math.abs(eventSpacing) < 50) {
					action(resumeItem);
				} else {
					if (eventDirection === 'left') {
						action(resumeItem, toggleClassCallback);
					} else {
						action(hideItem, removeItemCallback, 500)
					}
				}
		    };

		element.addEventListener('touchstart', function (e) {
			eventStart(e);
		});

		element.addEventListener('touchmove', function (e) {
			eventMove(e);
		});

		element.addEventListener('touchend', function (e) {	
			eventEnd(e);
		});

		element.addEventListener('mousedown', function (e) {
			eventStart(e);
		});

		element.addEventListener('mousemove', function (e) {
			eventMove(e);
		});

		element.addEventListener('mouseup', function (e) {	
			eventEnd(e);
		});
	}
} 