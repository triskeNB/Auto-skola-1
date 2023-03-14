window.onload = increment;

var a = 0;
$(window).scroll(increment);

function increment() {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function() {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },

        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        }
      );
    });
    a = 1;
  }
}

$(window).scroll(function() {
  if ($(window).width() > 768) {
    var distance = $("#main-feature").offset().top - $(".navbar").height(),
      $window = $(window);
    if ($window.scrollTop() >= distance) {
      $("#main-feature").css(
        "opacity",
        1 - ($(window).scrollTop() - distance) / 250
      );
    } else {
      $("#main-feature").css("opacity", 1);
    }
  } else {
    $("#main-feature").css("opacity", 1);
  }
});