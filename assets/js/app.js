$(document).ready(function() {

  /////////////////////////////////////
  //Keep links from refreshing page...
  $('nav ul li a').click(function(event) {
    event.preventDefault();
  });
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Full screen menu
  //Display menu on click;
  $('.full-screen-menu').dblclick(function(){
    $('.overlay').toggleClass('active');
    $('.menu').toggleClass('hidden');
  });
  //Hide menu when you click the overlay
  $('.overlay').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('hidden');
  });

  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Menu action stuff...3 events
  $('.menu-button').click(function(){
    $('nav').toggleClass('off-left');
    $('.button-container').toggleClass('flush');
    $('.button-container').toggleClass('spin');
    $('.button-container .menu-button i').toggleClass('fa-gear');
    $('.button-container .menu-button i').toggleClass('fa-close');
  });
  $('.menu-button').mouseover(function() {
    $(this).addClass('enlarge');
  });
  $('.menu-button').mouseleave(function() {
    $(this).removeClass('enlarge');
  });
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Close menu if user hits escape key
  $(document).keyup(function(e) {
    if(e.keyCode == 27) {
      if ($('nav').hasClass('off-left')){
        //do nothing
      }
      else {
        //execute if the menu is not off screen
        $('nav').addClass('off-left');
        $('div.overlay').addClass('active');
        $('.button-container').toggleClass('flush');
        $('.button-container').toggleClass('spin');
        $('.button-container .menu-button i').addClass('fa-gear');
        $('.button-container .menu-button i').removeClass('fa-close');
      }
    }
  });
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Decrease sibiling size when hovering
  $('nav ul li a').hover(function(){
      var nextLinks = $(this).parent().siblings().children('a');
      nextLinks.addClass('shrink');

      //decrease size of immediate sibilings
    }, function(){
      var nextLinks = $(this).parent().siblings().children('a');
      nextLinks.removeClass('shrink');
    }
  );
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Change background opacity for menu based on user choice
  $('.opacity').change(function(){
    var opSel = $(this).val();
    if(opSel == "opaque") {
      $('nav').css("background-color","rgba(0,0,0,1);");
    }
    else if(opSel == "semi-trans") {
      $('nav').css("background-color","rgba(0,0,0,.5);");
    }
    else if(opSel == "trans") {
      $('nav').css("background-color","rgba(0,0,0,0);");
    }

  });
  /////////////////////////////////////
  /////////////////////////////////////

});
