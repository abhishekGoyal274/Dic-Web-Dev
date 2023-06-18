// Scrool bar Fill
$(window).scroll(function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;
  $("#progressbar").attr("value", position);
});

// Drak Mode
const Mode = localStorage.getItem("DarkMode");
if (Mode === "ON") {
  $("body").addClass("dark");
  $(".change").text("ON");
} else {
  $("body").removeClass("dark");
  $(".change").text("OFF");
}

$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    localStorage.setItem("DarkMode", "OFF");
    $("body").removeClass("dark");
    $(".change").text("OFF");
  } else {
    localStorage.setItem("DarkMode", "ON");
    $("body").addClass("dark");
    $(".change").text("ON");
  }
});

