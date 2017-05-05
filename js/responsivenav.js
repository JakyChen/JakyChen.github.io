/*Navigation bar*/
window.onresize = function() {
	if (window.innerWidth > 768) {
		$('mobile-nav').css('visibility', 'hidden');
		$('mobile-nav').css('opacity', '0');
	}
}

function toggleMobileNav(){
	if ($('mobile-nav').css('visibility') == 'hidden'){
		$('mobile-nav').css('webkitAnimationName', 'mobileNavIn');
		$('mobile-nav').css('visibility', 'visible');
		$('mobile-nav').css('opacity', '1');
	}else{
		$('mobile-nav').css('webkitAnimationName', 'mobileNavOut');
		$('mobile-nav').css('visibility', 'hidden');
		$('mobile-nav').css('opacity', '0');
	}
	
	setTimeout(function() {
		$('mobile-nav').css('webkitAnimationName', '');
	}, 700);
}