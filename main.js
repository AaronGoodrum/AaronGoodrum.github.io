$('document').ready(function(){

  $("#slideshow > div:gt(0)").hide();

  var paused = false

  $( '#slideshow' )
  .mouseover(function() {
    paused = true
  })
  .mouseout(function() {
    paused = false
  });

  setInterval(function() {
    if (paused === false) { 
      $('#slideshow > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow')
      }
  }, 5000); 

  $('a.nav-item').not('first').on( 'click', function(){
  var offSet = 66;
    $('body').animate( {
      scrollTop: $( $(this).attr('href') ).offset().top - offSet + 'px'
    }, 250);
  });

});