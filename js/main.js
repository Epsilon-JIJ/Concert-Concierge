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




$(document).ready(function(){
	$('.schedule').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule2').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule2').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule2').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule3').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule3').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule3').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule4').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule4').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule4').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule5').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule5').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule5').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule6').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule6').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule6').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule7').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule7').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule7').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule8').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule8').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule8').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule9').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule9').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule9').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});

$(document).ready(function(){
	$('.schedule9').click(function(){
		$(this).toggleClass('card-btn-noclick');
    $('.schedule9').html('UN-SCHEDULE');
    if($(this).hasClass('card-btn-noclick')){
      $('.schedule9').html('SCHEDULE');
      notScheduled();
    } else {
      scheduled();
    }
	});
});




$(document).ready(function(){
	$('.remove1').click(function(){
  $('.card-section-1').toggleClass('planner-btn-onclick');
});
});

$(document).ready(function(){
	$('.remove2').click(function(){
  $('.card-section-2').toggleClass('planner-btn-onclick');
});
});

$(document).ready(function(){
	$('.remove3').click(function(){
  $('.card-section-3').toggleClass('planner-btn-onclick');
});
});
