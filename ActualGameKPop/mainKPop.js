
function APink() {
  var thatWasEasy = new Audio("Chu.mp3");
  thatWasEasy.play();
}
function EXO() {
  var thatWasEasy = new Audio("Growl.mp3");
  thatWasEasy.play();
}
function GOT7() {
  var thatWasEasy = new Audio("Just Right.mp3");
  thatWasEasy.play();
}
function Twice() {
  var thatWasEasy = new Audio("TT.mp3");
  thatWasEasy.play();
}
function BigBang() {
  var thatWasEasy = new Audio("Bang.mp3");
  thatWasEasy.play();
}


$("#Chu").on("click", APink);
$("#Growl").on("click", EXO);
$("#Just Right").on("click", GOT7);
$("#TT").on("click", Twice);
$("#Bang").on("click", BigBang);