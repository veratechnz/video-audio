// // Mute all video
var video = document.getElementById("bgvid");
video.muted= true;

$(function(){

var flyingDisplays = function(){

	//Request fullscreen mode for video
	if (video.requestFullscreen) {
	  video.requestFullscreen();
	} else if (video.msRequestFullscreen) {
	  video.msRequestFullscreen();
	} else if (video.mozRequestFullScreen) {
	  video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
	  video.webkitRequestFullscreen();
	}

	//All various text displays
	 $('#tagLineFlying').delay(10000).fadeTo(5000, 0.75).delay(8000).fadeOut(2500, function(){
	 	$('#tagLineFlyingB').delay(2500).fadeTo(3000, 0.75).delay(2000).fadeOut(3000, function(){
	 		$('#tagLineFlyingC').delay(500).fadeTo(3000, 0.75).delay(3000).fadeOut(3000, function(){
	 			$('#farA').delay(1000).fadeTo(3000, 0.75, function(){
	 				$('#farB').delay(500).fadeTo(3000, 0.75, function(){
	 					$('#away').delay(500).fadeTo(3000, 0.75, function(){
	 						$('#tagLineFlyingD').delay(3000).fadeOut(6000, function(){
	 							$('#tagLineFlyingE').fadeIn(4000);
	 							});
	 						});
	 					});
	 				});
	 		    });
	 		});
	 	});

	 //Function Expression ends
	}


	flyingDisplays();
});










