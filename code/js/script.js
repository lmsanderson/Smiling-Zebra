/*Element Scroller*/
/*moves an element based on the viewport and centres it*/
$().ready(function() {
	var $scrollingDiv = $("#sidebar");
 	
 	$(window).scroll(function(){			
		$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );			
	});
});

/*Viewport Anchor Scroller*/
/*moves the viewport smoothly to a local (in page) anchor*/
$(".scroll").click(function(event){
	event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop:offset}, 500);
});











