$(function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let sender = params.sender;

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

    let yesValue = $("#yes-value").is(":checked");
    let noValue = $("#no-value").is(":checked");

    if (!yesValue && !noValue) {
      alert("Please select an option");
      return;
    }

    $(this).closest(".envelope").removeClass("open").addClass("send");

    fetch(
      "https://invitation-result.azurewebsites.net/api/invite?code=R_4UrPJ3tkqYEPfLOcau-jQh0S9OyJ63xJQn1puwhdl4AzFu2RkgHg==&result=" +
        yesValue +
        "&sender=" +
        sender
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function () {
        console.log("Something went wrong");
      });
  });
});
