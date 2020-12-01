var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
    $element.addClass('in-view');
  } else {
    $element.removeClass('in-view');
  }
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// Change link color of the current page with CSS
// Cache selectors
var topMenu = $("#About"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
})