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
