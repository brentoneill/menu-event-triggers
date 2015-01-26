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
  $( "#opacity-slider" ).on( "slidechange", function( event, ui ) {
    var opSel = $(this).slider('option','value');
    $('nav').css("background-color","rgba(0,0,0,"+opSel+")")

  });
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Font Select////////////////////////
  $('select.font-select').change(function() {
    var opSel = $(this).val();
    if(opSel=="serif") {
      $('body').css("font-family","Bree Serif");
    }
    else if(opSel=="sans-serif"){
      $('body').css("font-family","Julius Sans One");
    }
    else if(opSell="cursive") {
      $('body').css("font-family","Amatic SC");
    }
  });
  /////////////////////////////////////
  /////////////////////////////////////


  /////////////////////////////////////
  //Toggle Link Borders////////////////
  $('#border-select').on('change', function() {
    var opSel=$('input[name=border-option]:checked', '#border-select').val();
    console.log(opSel)
    if(opSel=="no-border"){
      $('nav ul a').css("border","none");
    }
    else if(opSel=="border"){
      $('nav ul a').css("border","thin solid white");
    }
  });
  /////////////////////////////////////
  /////////////////////////////////////
});
