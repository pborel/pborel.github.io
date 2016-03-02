$(document).on("ready", function() {

  animateCirriculum();
  animateSidebar();

})

var animateCirriculum = function() {
  $( '.cirriculum-controller' ).on('click', function(event) {
    event.preventDefault();
    $( '.cirriculum-nav' ).slideToggle(1000);
  })
}

var animateSidebar = function () {
  $( '.sidebar-controller' ).on('click', function(event) {
    event.preventDefault();
    $( '.sidebar' ).toggleClass("hide");
    $( '.blog-main').toggleClass("col-sm-12");
    $( '.blog-main').toggleClass("col-sm-8");
  })
}
