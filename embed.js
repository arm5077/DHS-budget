$(window).load(function(){
	console.log("I'm in.");


	resize();
	
	$(window).resize(resize);

	function resize(){
		$("#iframe").height( $(window).height() - $("#top_header").outerHeight() -  $("#magazineArticleShortAd").outerHeight() );
		$("#iframe").css("top", ( $("#top_header").outerHeight() + $("#magazineArticleShortAd").outerHeight() ) + "px" );	
	}
});
