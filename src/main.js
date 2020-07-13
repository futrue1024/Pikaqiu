const $mouth = $(".mouth");
const $say = $("#say")[0];

$mouth.on("mouseover", () => {
  $say.play();
});
$mouth.on("Touch.target", () => {
  $say.play();
});
