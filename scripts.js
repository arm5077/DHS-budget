$(document).ready(function(){
	
	$('head').append('<link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/nationaljournal/DHS-budget/styles.css" type="text/css" />');
	
	var height = $("#main-text").height();
	// Move title up to top within 10% of scroll over main text blob
	$("#title").attr("data-" + height * .05, "top: " + getCenterFixedObject($("#title")) + "px");
	$("#title").attr("data-" + height * .15, "top: 10px");
		
	$("#p1").attr("data-"+ height * .1, "opacity: 0; top: " + $(window).height() + "px");
	$("#p1").attr("data-"+ height * .3, "opacity: 1; top: " + (10 + $("#title").outerHeight() + 50) + "px");
		
	// Start sliding and fading title away and moving up p1
	$("#title").attr("data-" + height * .4, "top: 10px");
	$("#title").attr("data-" + height * .6, "top: -" + ( $("#title").outerHeight() + 20 ) + "px");
	$("#p1").attr("data-"+ height * .4, "opacity: 1; top: " + (10 + $("#title").outerHeight() + 50) + "px");
	$("#p1").attr("data-"+ height * .6, "opacity: 1; top: 10px");
		
	$("#p2").attr("data-"+ height * .4, "opacity: 0; top: " + $(window).height() + "px");
	$("#p2").attr("data-"+ height * .6, "opacity: 1; top: " + ( 10 + $("#p1").outerHeight() + 10 ) + "px");
	
	// Roll it all up!
	$("#p1").attr("data-"+ height * .75, "opacity: 1; top: 10px");
	$("#p1").attr("data-"+ height * .95, "opacity: 1; top: -" + ( $("#p2").outerHeight() + 10 + $("#p1").outerHeight() + 10 ));
	$("#p2").attr("data-"+ height * .75, "opacity: 1; top: " + ( 10 + $("#p1").outerHeight() + 10 ) + "px");	
	$("#p2").attr("data-"+ height * .95, "opacity: 1; top: -" + ( $("#p2").outerHeight() + 10 ) + "px");	
	
	
	
	var s = skrollr.init();
		
	document.location = "#";
	
});


function getCenterFixedObject( obj ){
	return ( $(window).height() - $(obj).outerHeight() ) / 2;
};
