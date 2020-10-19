let shaking = true;
let interval = setInterval(() => $(".mail").addClass("tada"), 4000);

$(document).ready(() => {
  $(".invisible").removeClass("invisible");

  //////////////////
  // UNCOMMENT THIS
  //////////////////
  // $(".mail").addClass("slideInLeft");
  // $(".mail").one("animationend", () => {
  //   $(".mail").removeClass("slideInLeft");
  //   $(".mail").addClass("tada");
  //   $(".mail").on("animationend", () => {
  //     $(".mail").removeClass("tada");
  //   });
  //   toggle_interval();
  // });
  $(".mail").one("click", click_envelope);

  ///////////////////
  // COMMENT THIS OUT!
  ///////////////////
  // click_envelope();
});

function click_envelope() {
  clearInterval(interval);
  if ($(".mail").hasClass("tada")) {
    $(".mail").one("animationend", () => {
      $(".mail").toggleClass("open");
    });
  } else {
    $(".mail").toggleClass("open");
  }
}
