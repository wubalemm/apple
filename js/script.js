
 $(".footer-links-wrapper h3").click(function () {
   if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("iconRotator");
  }
});
 