$('.menu-trigger').on('click',function(){
  $('.menu-trigger').toggleClass('active');
  $('.sp-menu').slideToggle();
});

$('.sp-menu a[href]').on('click', function() {
  $('.menu-trigger').removeClass('active');
  $('.sp-menu').hide();
});

$('#youtube').YTPlayer();

$(function() {
  var H_nav = $(".header").height();

  function pagelink(heightnum) {
      var headerH = heightnum;
      $("a.anchorlink").click(function() {
          var href = $(this).attr("href");
          var target = $(href == "#" || href == "" ? "body" : href);
          var position = target.offset().top - headerH;
          $("html, body").animate({ scrollTop: position }, 500, "swing");
          //return false;
      });
  }
  pagelink(H_nav);
});