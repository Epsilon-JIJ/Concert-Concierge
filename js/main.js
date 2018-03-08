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

// function scheduled() {
//     document.getElementById("#schedule-btn").style.backgroundColor = "#7c2929";
// }
//
// function notScheduled() {
//     document.getElementById("#schedule-btn").style.backgroundColor = "transparent";
// }

$(document).ready(function(){
	$('#schedule').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('#schedule').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('#schedule').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

//
// $('#schedule').click(function() {
//   if ($('#schedule').html('SCHEDULE');
//
// }

// var $btnUpNext = $(‘#schedule’);
// var $btnCloseModal = $(‘.close’);
// var $body = $(‘body’);
// var $modal = $(‘#popup1’);
//
// $('#schedule').click(function () {
//  var offset = $(document).scrollTop();
//  var viewportHeight = $(window).height();
//  $('.overlay').css(‘top’,  (offset  + (viewportHeight/2)) - ($('.overlay').outerHeight()/2));
//  $('.overlay').show();
//  $('body').css(‘overflow’,‘hidden’);
// });
//
// $('.close').click(function () {
//  $('.overlay').hide();
//  $('body').css(‘overflow’,‘visible’);
// })
