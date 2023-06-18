//Tables Show and Hide
for (let index = 1; index <= 4; index++) {
  $(`.table-${index}`).html("Show");
  $(`.table-${index}-content`).toggle("normal");
  $(`.table-${index}`).click(function () {
    $(`.table-${index}-content`).toggle("normal");
    if ($(`.table-${index}`).html() === "Hide") {
      $(`.table-${index}`).html("Show");
    } else {
      $(`.table-${index}`).html("Hide");
    }
  });
}
