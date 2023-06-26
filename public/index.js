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

// Home JS
//Tables Show and Hide
for (let index = 1; index <= 4; index++) {
  // $(`.table-${index}`).html("Show");
  let t = document.querySelectorAll(`.table-${index}`)
  console.log($(`.table-${index}`));
  // $(`.table-${index}-content`).toggle("normal");
  // $(`.table-${index}`).click(function () {
  //   $(`.table-${index}-content`).toggle("normal");
  //   if ($(`.table-${index}`).html() === "Hide") {
  //     $(`.table-${index}`).html("Show");
  //   } else {
  //     $(`.table-${index}`).html("Hide");
  //   }
  // });
}
