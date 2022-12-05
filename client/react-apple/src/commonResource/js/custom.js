
$(".footer-links-wrapper h3").click(function () {
if ($(window).width() <= 768) {
  $(this).next().slideToggle();
  // $(this).parent().children("ul").slideToggle();
  $(this).toggleClass("expanded");
}
});

$(window).on("resize", function () {
// console.log("screen size changed")
location.reload();
});