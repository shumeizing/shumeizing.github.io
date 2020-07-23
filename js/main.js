// --------------------------------------------------
// Navigation Toggle
// --------------------------------------------------
(function($) {
  $(".nav-toggle").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".nav-menu").toggleClass("active");
  })
  $(".nav-menu li a").click(function() {
    $(".nav-toggle").removeClass("active");
    $(".nav-menu").removeClass("active");
  });
})(jQuery);





