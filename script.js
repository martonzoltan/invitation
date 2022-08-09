$(function () {
  if (!$(".envelope").hasClass("open")) {
    $(".envelope").click(function () {
      $(this).removeClass("new").addClass("open");
    });
  }

  $("#yes").click(function () {
    $(".pyro").removeClass("d-none");
  });

  $("#no").click(function () {
    $(".pyro").addClass("d-none");
  });

  $(".btn").click(function (event) {
    event.preventDefault();

    $(this).closest(".envelope").removeClass("open").addClass("send");

    //Put jQuery code for submitting the form with AJAX here.
  });
});
