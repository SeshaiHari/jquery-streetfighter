$(document)
  .finish()
  .ready(function () {
    $(".ryu")
      .mouseenter(function () {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
        $(".ryu-cool").hide();
      })
      .mouseleave(function () {
        $(".ryu-ready").hide();
        $(".ryu-still").show();
        $(".ryu-cool").hide();
      })
      .mousedown(function () {
        playHadouken();
        $(".ryu-ready").hide();
        $(".ryu-cool").hide();
        $(".ryu-throwing").show();
        $(".hadouken")
          .finish()
          .show()
          .animate({ left: "1020px" }, 500, function () {
            $(".hadouken").hide();
            $(".hadouken").css("left", "520px");
          });
      })
      .mouseup(function () {
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
        $(".ryu-cool").hide();
        //ryu goes back to his ready position
      });
  })

  .keydown(function (event) {
    if (event.which == 88) {
      $(".ryu-still").hide();
      $(".ryu-ready").hide();
      $(".ryu-throwing").hide();
      $(".ryu-cool").show();
    }
  })
  .keyup(function (event) {
    if (event.which == 88) {
      $(".ryu-cool").hide();
      $(".ryu-throwing").hide();
      $(".ryu-still").show();
    }
  });

function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}
