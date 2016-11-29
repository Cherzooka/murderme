function callTemplate() {
  $(".profile-view-port").html("").fadeOut(500);
  setTimeout(function(){
    var view = document.getElementById('template-profile');
    var profile = view.import.querySelector('#profile');
    var profileview = document.querySelector('.profile-view-port');
    profileview.appendChild(profile.cloneNode(true));
    }, 700);
  $(".profile-view-port").delay(1000).fadeIn(500);
}

function callAditi() {
  $(".profile-view-port").html("").fadeOut(500);
  setTimeout(function(){
    var view = document.getElementById('aditi-profile');
    var profile = view.import.querySelector('#profile');
    var profileview = document.querySelector('.profile-view-port');
    profileview.appendChild(profile.cloneNode(true));
    }, 700);
  $(".profile-view-port").delay(1000).fadeIn(500);
}