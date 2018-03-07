function openNav() {
    document.getElementById("mySidenav").style.width = "101%";
    document.getElementById("nav-btn-red").style.opacity = "1";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("nav-btn-red").style.opacity = "0";
}

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    if($(this).hasClass('open')){
      openNav();
    } else {
      closeNav();
    }
	});
});

function scheduled() {
    document.getElementById("#schedule-btn").style.backgroundColor = "#7c2929";
}

function notScheduled() {
    document.getElementById("#schedule-btn").style.backgroundColor = "transparent";
}

$(document).ready(function(){
	$('#schedule').click(function(){
		$(this).toggleClass('card-btn-noclick');
    if($(this).hasClass('card-btn-onclick')){
      notScheduled();
    } else {
      scheduled();
    }
	});
});
