$(document).ready(function(){
	
	var s = skrollr.init();
	
	resize(s);
	
	$(window).resize(function(){ resize(s) });
	
	document.location = "#";
	
});


function resize(s){

	[$("#title"), $("#p1"), $("#p2")].forEach(removeDataAttributes);
	
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
	
	$("#p2").attr("data-"+ height * .4, "opacity: 0; top: " + ($(window).height() +50) + "px");
	$("#p2").attr("data-"+ height * .6, "opacity: 1; top: " + ( 10 + $("#p1").outerHeight() + 40 ) + "px");

	// Roll it all up!
	$("#p1").attr("data-"+ height * .75, "opacity: 1; top: 10px");
	$("#p1").attr("data-"+ height * .95, "opacity: 1; top: -" + ( $("#p2").outerHeight() + 10 + $("#p1").outerHeight() + 10 ));
	$("#p2").attr("data-"+ height * .75, "opacity: 1; top: " + ( 10 + $("#p1").outerHeight() + 40 ) + "px");	
	$("#p2").attr("data-"+ height * .95, "opacity: 1; top: -" + ( $("#p2").outerHeight() + 10 ) + "px");	

	s.refresh();

	
}

function getCenterFixedObject( obj ){
	return ( $(window).height() - $(obj).outerHeight() ) / 2;
};

function removeDataAttributes(target) {
 
    var i,
        $target = $(target),
        attrName,
        dataAttrsToDelete = [],
        dataAttrs = $target.get(0).attributes,
        dataAttrsLen = dataAttrs.length;
 
    // loop through attributes and make a list of those
    // that begin with 'data-'
    for (i=0; i<dataAttrsLen; i++) {
        if ( 'data-' === dataAttrs[i].name.substring(0,5) ) {
            // Why don't you just delete the attributes here?
            // Deleting an attribute changes the indices of the
            // others wreaking havoc on the loop we are inside
            // b/c dataAttrs is a NamedNodeMap (not an array or obj)
            dataAttrsToDelete.push(dataAttrs[i].name);
        }
    }
    // delete each of the attributes we found above
    // i.e. those that start with "data-"
    $.each( dataAttrsToDelete, function( index, attrName ) {
        $target.removeAttr( attrName );
    })
};