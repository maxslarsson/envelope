const square = new mojs.Shape({
  radius: 50,
  radiusY: 50,
  shape: "rect",
  stroke: "#2ECC40",
  strokeWidth: { 0: 50 },
  fill: "none",
  scale: { 0: 0.55 },
  opacity: { 1: 0 },
  duration: 350,
  easing: "sin.out",
  isShowEnd: false,
});

const lines = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 75 },
  angle: 0,
  count: 8,
  children: {
    shape: "line",
    radius: 10,
    scale: 1,
    stroke: "#2Ecc40",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 700,
    easing: "quad.out",
  },
});

function fireBurst(e) {
  $(this).toggleClass("checked");
  console.log($(this));
  const pos = this.getBoundingClientRect();

  const timeline = new mojs.Timeline({ speed: 1.5 });

  timeline.add(square, lines);

  // FROM SCSS
  let offset = 15;
  square.tune({
    left: pos.left + offset,
    top: pos.top + offset,
  });
  lines.tune({
    x: pos.left + offset,
    y: pos.top + offset,
  });

  if ("vibrate" in navigator) {
    navigator.vibrate =
      navigator.vibrate ||
      navigator.webkitVibrate ||
      navigator.mozVibrate ||
      navigator.msVibrate;

    navigator.vibrate([100, 200, 400]);
  }

  timeline.play();
}

$("label").on("click", fireBurst);
