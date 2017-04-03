$(function() {

	$(".toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".mobile-menu").slideToggle();
  return false;
});

});
