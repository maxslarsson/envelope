let shaking = true;

function shaking_function() {
  if (shaking) {
    $(".mail").toggleClass("tada");
    setTimeout(shaking_function, 1250);
  }
}

$(document).ready(function() {
  shaking_function();
  $(".mail").click(function() {
    shaking = !shaking;
    $(".mail").toggleClass("open");
    setTimeout(shaking_function, 1250);
  });
});
