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
    document.getElementById("right-bar-sorting-container").style.height = "370px";
    document.getElementById("right-bar-characters").style.marginTop = "370px";
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

(function($){
  $(document).ready(function(){
    $("[title]").style_my_tooltips();
  });
})(jQuery);

function openMusic() {
    document.getElementById("music").style.width = "300px";
    document.getElementById("player").style.width = "320px";
    document.getElementById("music-tab").style.marginRight = "300px";
    $(".music-button-open").fadeToggle("slow");
	  $(".music-button-close").fadeToggle("slow");
}

function closeMusic() {
    document.getElementById("music").style.width = "0";
    document.getElementById("player").style.width = "40px";
    document.getElementById("music-tab").style.marginRight = "0";
    $(".music-button-open").fadeToggle("slow");
	  $(".music-button-close").fadeToggle("slow");
}