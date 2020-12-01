// --------------------------------------------------
// Navigation Toggle
// --------------------------------------------------
$(document).ready(function() {
  $(".nav-toggle").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".nav-menu").toggleClass("active");
  })
  $(".nav-menu li a").click(function() {
    $(".nav-toggle").removeClass("active");
    $(".nav-menu").removeClass("active");
  });
});

// --------------------------------------------------
// Smooth Scroll
// --------------------------------------------------
$(document).ready(function(){
  $(".nav-menu a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

// --------------------------------------------------
// External Link Warning
// --------------------------------------------------
jQuery('a').filter(function() {
  return this.hostname && this.hostname !== location.hostname;
}).click(function(e) {
  if(!confirm("You are about to proceed to an external website."))
    {
      e.preventDefault();
    };
});
