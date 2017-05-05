/*Navigation bar*/

var animationDone = true;

window.onresize = function() {
	if (window.innerWidth > 768) {
		$('mobile-nav').css('visibility', 'hidden');
		$('mobile-nav').css('opacity', '0');
	}
}

document.addEventListener('scroll', function (event) {
	if(animationDone == true){
		$('mobile-nav').css('webkitAnimationName', 'mobileNavOut');
		$('mobile-nav').css('visibility', 'hidden');
		$('mobile-nav').css('opacity', '0');
	}
});

function toggleMobileNav(){
	
	if(animationDone == true){
		if ($('mobile-nav').css('visibility') == 'hidden'){
			animationDone = false;
			$('mobile-nav').css('webkitAnimationName', 'mobileNavIn');
			$('mobile-nav').css('visibility', 'visible');
			$('mobile-nav').css('opacity', '1');
		}else{
			animationDone = false;
			$('mobile-nav').css('webkitAnimationName', 'mobileNavOut');
			$('mobile-nav').css('visibility', 'hidden');
			$('mobile-nav').css('opacity', '0');
		}
	}
	
	setTimeout(function() {
		$('mobile-nav').css('webkitAnimationName', '');
		animationDone = true;
	}, 700);
}