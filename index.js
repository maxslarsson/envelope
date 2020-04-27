let shaking = true;
let interval;

function toggle_interval() {
  if (shaking) {
    interval = setInterval(() => $(".mail").toggleClass("tada"), 2000);
  } else {
    clearInterval(interval);
  }
}

$(document).ready(() => {
  $(".mail").addClass("slideInLeft");
  $(".mail").on("animationend", () => {
    $(".mail").off("animationend");
    $(".mail").removeClass("slideInLeft");
    toggle_interval();
  });
  $(".mail").click(() => {
    shaking = !shaking;
    toggle_interval();
    $(".mail").removeClass("tada");
    $(".mail").toggleClass("open");
  });
});
