/* global $ */
function sayThatWasEasy(stream) {
  var thatWasEasy = new Audio("Baby.mp3");
  thatWasEasy.play();
}
function taylorSwift() {
  var thatWasEasy = new Audio("BlankSpace.mp3");
  thatWasEasy.play();
}
function EdSheeran() {
  var thatWasEasy = new Audio("Photograph.mp3");
  thatWasEasy.play();
}
function KatyPerry() {
  var thatWasEasy = new Audio("Roar.mp3");
  thatWasEasy.play();
}
function ColdPlay() {
  var thatWasEasy = new Audio("Viva.mp3");
  thatWasEasy.play();
}

$("#Baby").on("click", sayThatWasEasy);
$("#BlankSpace").on("click", taylorSwift);
$("#Photograph").on("click", EdSheeran);
$("#Roar").on("click", KatyPerry);
$("#Viva").on("click", ColdPlay);