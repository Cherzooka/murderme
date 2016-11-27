$(document).ready(function() {
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("right-bar-sorting-container").style.height = "350px";
    document.getElementById("right-bar-characters").style.marginTop = "350px";
	$(".slide-button-open").fadeToggle("slow");
	$(".slide-button-close").fadeToggle("slow");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("right-bar-sorting-container").style.height = "0";
    document.getElementById("right-bar-characters").style.marginTop = "0";
	$(".slide-button-open").fadeToggle("slow");
	$(".slide-button-close").fadeToggle("slow");
}