$(document).ready(function() {
  $("h1").delay(50).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".intro-p").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".btns").delay(450).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  650).removeClass('hidden');

  $(".reply-time").delay(625).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  600).removeClass('hidden');
});

// hover(cursor enter, cursor exit)
// setTimeout delays func exec
// clearTimeout resets setTimeout upon hover cursor exit

var timer;

$("button").hover(
  function() {
    timer = setTimeout(function() {
        $(".far").animate({
            opacity: "1.0"
          },
          100).addClass("moveright");
      },
    225);
  },
  function() {
    clearTimeout(timer);
    $(".far").animate({
        opacity: "0"
      },
    1);
  }
);
