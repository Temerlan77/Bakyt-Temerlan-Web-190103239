$("#feature").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".ec").offset().top
    }, 2000);
});
$("#shop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".offers").offset().top
    }, 2000);
});
$("#courses").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".courss").offset().top
    }, 2000);
});
$("#blog").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#blogg").offset().top
    }, 2000);
});
$("#bnn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".trial").offset().top
    }, 2000);
});
$("#location").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".footer").offset().top
    }, 2000);
});
$(".start").animate({
	opacity:'1'
},1000);
$(".start").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#cstart").offset().top
    }, 2000);
});