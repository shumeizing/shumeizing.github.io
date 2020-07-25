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

jQuery('a').filter(function() {
  return this.hostname && this.hostname !== location.hostname;
}).click(function(e) {
  if(!confirm("You are about to proceed to an external website."))
    {
      e.preventDefault();
    };
});



